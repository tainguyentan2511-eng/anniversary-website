'use client';

import { useState, useCallback, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, useDragControls } from 'framer-motion';
import { photos } from '@/data/memories';

// ------------------------------------------------------------
// Types
// ------------------------------------------------------------
interface Photo {
  id: number;
  src: string;
  alt: string;
  caption: string;
  date: string;
}

interface LightboxProps {
  photos: Photo[];
  currentIndex: number;
  onClose: () => void;
  onChangeIndex: (index: number) => void;
}

interface GalleryProps {
  onMilestoneUnlock?: () => void;   // callback khi mở đủ 4 ảnh
}

// ------------------------------------------------------------
// Lightbox – swipe, keyboard, download
// ------------------------------------------------------------
function Lightbox({ photos, currentIndex, onClose, onChangeIndex }: LightboxProps) {
  const dragControls = useDragControls();
  const [isDragging, setIsDragging] = useState(false);

  const photo = photos[currentIndex];
  const total = photos.length;

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [currentIndex]);

  const goToPrev = useCallback(() => {
    onChangeIndex((currentIndex - 1 + total) % total);
  }, [currentIndex, total, onChangeIndex]);

  const goToNext = useCallback(() => {
    onChangeIndex((currentIndex + 1) % total);
  }, [currentIndex, total, onChangeIndex]);

  const handleDragEnd = (_: any, info: { offset: { x: number; y: number } }) => {
    setIsDragging(false);
    if (Math.abs(info.offset.x) > 80) {
      if (info.offset.x > 0) goToPrev();
      else goToNext();
    }
    if (Math.abs(info.offset.y) > 150) onClose();
  };

  if (!photo) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/60 hover:text-white text-2xl font-light transition-all z-20"
        aria-label="Close lightbox"
      >
        ✕
      </button>

      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
        <NavButton onClick={goToPrev} label="Previous" />
        <NavButton onClick={goToNext} label="Next" />
      </div>

      <motion.div
        className="max-w-5xl w-full max-h-[80vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
        drag="x"
        dragControls={dragControls}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={handleDragEnd}
        whileTap={{ cursor: isDragging ? 'grabbing' : 'zoom-in' }}
        layoutId={`photo-${photo.id}`}
      >
        <motion.img
          src={photo.src}
          alt={photo.alt}
          className="w-full h-auto max-h-[70vh] object-contain rounded-lg shadow-2xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center space-y-2"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-2xl md:text-3xl font-serif text-white/90">{photo.caption}</h3>
        <p className="text-rose-gold/80 text-sm uppercase tracking-widest">{photo.date}</p>
        <a
          href={photo.src}
          download
          className="inline-block mt-2 text-white/50 hover:text-white text-xs underline underline-offset-4"
          onClick={(e) => e.stopPropagation()}
        >
          Tải ảnh về
        </a>
      </motion.div>
    </motion.div>
  );
}

function NavButton({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <motion.button
      onClick={onClick}
      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={label}
    >
      {label === 'Previous' ? '←' : '→'}
    </motion.button>
  );
}

// ------------------------------------------------------------
// Gallery Item – reveal animation, hover emotion
// ------------------------------------------------------------
function GalleryItem({
  photo,
  isRevealed,
  onReveal,
  onClick,
}: {
  photo: Photo;
  isRevealed: boolean;
  onReveal: (id: number) => void;
  onClick: (photo: Photo) => void;
}) {
  const handleInteraction = () => {
    if (!isRevealed) {
      onReveal(photo.id);
    } else {
      onClick(photo);
    }
  };

  return (
    <motion.div
      layoutId={`photo-${photo.id}`}
      onClick={handleInteraction}
      className="relative group cursor-pointer break-inside-avoid mb-6 overflow-hidden bg-gray-100 rounded-xl shadow-sm hover:shadow-2xl transition-shadow duration-500"
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="overflow-hidden">
        <img
          src={photo.src}
          alt={photo.alt}
          loading="lazy"
          className={`w-full h-auto object-cover transition-all duration-700 ease-in-out ${
            isRevealed ? 'grayscale-0 blur-0 scale-100' : 'grayscale blur-md scale-105'
          } group-hover:scale-110`}
        />
      </div>

      <AnimatePresence>
        {!isRevealed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-[2px]"
          >
            <motion.span
              className="text-white/90 text-sm uppercase tracking-[0.3em] border border-white/50 px-5 py-2.5 rounded-full"
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              Khám phá
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      {isRevealed && (
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent"
        >
          <p className="text-white/80 text-xs tracking-widest">{photo.date}</p>
          <h3 className="text-white font-serif text-lg">{photo.caption}</h3>
        </motion.div>
      )}
    </motion.div>
  );
}

// ------------------------------------------------------------
// Milestone modal – delicate confetti
// ------------------------------------------------------------
const confettiColors = ['#e2b7b0', '#d4a373', '#fae1dd', '#f8edeb'];

function MilestoneOverlay({ onClose }: { onClose: () => void }) {
  const particles = useMemo(
    () =>
      Array.from({ length: 12 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 0.5,
        duration: 1 + Math.random() * 1.5,
        color: confettiColors[i % confettiColors.length],
      })),
    []
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[110] bg-black/70 backdrop-blur-md flex items-center justify-center"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="relative bg-white rounded-3xl p-10 text-center max-w-md mx-4 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute w-2 h-2 rounded-full"
            style={{ left: `${p.x}%`, top: -10, background: p.color }}
            animate={{ y: ['0vh', '100vh'], opacity: [1, 0] }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              repeatDelay: 0.2,
            }}
          />
        ))}

        <p className="text-xs uppercase tracking-[0.35em] text-gray-400 mb-4">Hidden Whisper</p>
        <h3 className="text-3xl font-serif text-rose-gold mb-4">
          Em đã mở 4 ký ức rồi...
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Nếu em vẫn ở đây, có lẽ điều đẹp nhất không nằm trong tấm ảnh, mà nằm ở người đi cùng anh.
        </p>
        <motion.button
          onClick={onClose}
          className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white text-sm uppercase tracking-widest font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Tiếp tục
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

// ------------------------------------------------------------
// Main Gallery Section
// ------------------------------------------------------------
export default function Gallery({ onMilestoneUnlock }: GalleryProps) {
  const [revealedIds, setRevealedIds] = useState<Set<number>>(new Set());
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showMilestone, setShowMilestone] = useState(false);

  const revealedCount = revealedIds.size;
  const totalPhotos = photos.length;

  const handleReveal = useCallback((id: number) => {
    setRevealedIds((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev).add(id);
      if (next.size === 4) {
        setShowMilestone(true);
        onMilestoneUnlock?.();   // gọi callback chuyển trang
      }
      return next;
    });
  }, [onMilestoneUnlock]);

  const openLightbox = useCallback(
    (photo: Photo) => {
      const idx = photos.findIndex((p) => p.id === photo.id);
      if (idx !== -1) setLightboxIndex(idx);
    },
    [photos]
  );

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const handleChangeIndex = useCallback((index: number) => setLightboxIndex(index), []);

  const progress = useMemo(
    () => (revealedCount / totalPhotos) * 100,
    [revealedCount, totalPhotos]
  );

  return (
    <section className="py-32 px-6 bg-[#faf8f5] text-gray-900">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 flex flex-col md:flex-row items-end justify-between gap-8">
          <div>
            <span className="text-xs uppercase tracking-[0.5em] text-gray-400">Archives</span>
            <h2 className="text-5xl md:text-7xl font-serif mt-2">
              Khoảnh Khắc <span className="italic text-rose-gold">Được Tiết Lộ</span>
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-gray-500 leading-relaxed mb-6">
              Một bộ sưu tập ký ức được tuyển chọn, đông cứng theo thời gian. Mỗi khung hình kể một câu chuyện về nơi chúng ta đã đi qua và nơi chúng ta sẽ đến.
            </p>
            <div className="w-full h-1.5 rounded-full bg-gray-200 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-rose-gold to-pink-400"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mt-2">
              {revealedCount}/{totalPhotos} ký ức
            </p>
          </div>
        </header>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
          {photos.map((photo) => (
            <GalleryItem
              key={photo.id}
              photo={photo}
              isRevealed={revealedIds.has(photo.id)}
              onReveal={handleReveal}
              onClick={openLightbox}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            key="lightbox"
            photos={photos}
            currentIndex={lightboxIndex}
            onClose={closeLightbox}
            onChangeIndex={handleChangeIndex}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showMilestone && <MilestoneOverlay onClose={() => setShowMilestone(false)} />}
      </AnimatePresence>
    </section>
  );
}