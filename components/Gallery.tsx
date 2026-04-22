'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { photos } from '@/data/memories';

interface LightboxProps {
  photo: typeof photos[0] | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

interface GalleryProps {
  onMilestoneUnlock?: () => void;
}

function Lightbox({ photo, onClose, onPrev, onNext }: LightboxProps) {
  if (!photo) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-luxury-black/95 backdrop-blur-xl flex items-center justify-center p-6"
      onClick={onClose}
    >
      <button onClick={onClose} className="absolute top-10 right-10 text-luxury-cream/50 hover:text-luxury-cream text-3xl font-light transition-all">CLOSE</button>
      
      <div className="absolute left-10 top-1/2 -translate-y-1/2 flex flex-col gap-4">
        <button onClick={(e) => { e.stopPropagation(); onPrev(); }} className="w-12 h-12 border border-luxury-cream/20 rounded-full flex items-center justify-center text-luxury-cream hover:bg-luxury-cream hover:text-luxury-black transition-all">←</button>
        <button onClick={(e) => { e.stopPropagation(); onNext(); }} className="w-12 h-12 border border-luxury-cream/20 rounded-full flex items-center justify-center text-luxury-cream hover:bg-luxury-cream hover:text-luxury-black transition-all">→</button>
      </div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="max-w-4xl w-full space-y-8"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={photo.src} alt={photo.alt} className="w-full h-auto max-h-[70vh] object-contain shadow-2xl" />
        <div className="text-center space-y-2">
          <h3 className="text-3xl font-elegant text-luxury-cream">{photo.caption}</h3>
          <p className="text-rose-gold font-sans tracking-[0.2em] text-xs uppercase">{photo.date}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Gallery({ onMilestoneUnlock }: GalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);
  const [revealedPhotos, setRevealedPhotos] = useState<Set<number>>(new Set());
  const [milestoneSurprise, setMilestoneSurprise] = useState(false);

  const handlePhotoClick = (photo: typeof photos[0]) => {
    if (!revealedPhotos.has(photo.id)) {
      // Reveal the photo first with a delay, then open lightbox
      setRevealedPhotos((prev) => {
        const next = new Set(prev).add(photo.id);
        if (next.size === 4) {
          setMilestoneSurprise(true);
          onMilestoneUnlock?.();
        }
        return next;
      });
      setTimeout(() => {
        setSelectedPhoto(photo);
      }, 800); // Delay matches the blur transition duration
    } else {
      // If already revealed, open lightbox directly
      setSelectedPhoto(photo);
    }
  };

  const handleCloseLightbox = () => {
    setSelectedPhoto(null);
  };

  return (
    <section id="gallery" className="py-40 px-6 bg-luxury-cream">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.5em] text-luxury-black/40 font-sans">Archives</span>
            <h2 className="text-5xl md:text-7xl font-elegant text-luxury-black">Khoảnh Khắc <span className="italic">Được Tiết Lộ</span></h2>
          </div>
          <div className="max-w-sm">
            <p className="text-luxury-black/60 font-sans leading-relaxed mb-4">
              Một bộ sưu tập ký ức được tuyển chọn, đông cứng theo thời gian. Mỗi khung hình kể một câu chuyện về nơi chúng ta đã đi qua và nơi chúng ta sẽ đến.
            </p>
            <div className="w-full h-2 rounded-full bg-luxury-black/10 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-rose-gold to-rose-gold-light"
                animate={{ width: `${(revealedPhotos.size / photos.length) * 100}%` }}
              />
            </div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-luxury-black/40 mt-2">
              Revealed {revealedPhotos.size}/{photos.length}
            </p>
          </div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {photos.map((photo, index) => {
            const isRevealed = revealedPhotos.has(photo.id);
            return (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="break-inside-avoid relative group cursor-pointer overflow-hidden bg-luxury-black/5"
                onClick={() => handlePhotoClick(photo)}
              >
                <div className="overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className={`w-full h-auto object-cover ${isRevealed ? 'grayscale-0 blur-0' : 'grayscale blur-lg'} group-hover:scale-110 transition-all duration-800 ease-out`}
                  />
                </div>
                
                <div className={`absolute inset-0 bg-luxury-black/40 flex flex-col justify-end p-8 transition-opacity duration-500 ${isRevealed ? 'opacity-0' : 'opacity-100 group-hover:bg-luxury-black/60'}`}>
                  {!isRevealed && (
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{delay: 0.2}}
                      className="flex items-center justify-center h-full"
                    >
                      <p className="text-luxury-cream text-sm uppercase tracking-[0.2em] border border-luxury-cream/50 px-4 py-2">Khám phá</p>
                    </motion.div>
                  )}
                  {isRevealed && (
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="space-y-2"
                    >
                      <p className="text-luxury-cream/60 text-[10px] uppercase tracking-[0.2em]">{photo.date}</p>
                      <h3 className="text-xl font-elegant text-luxury-cream">{photo.caption}</h3>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {milestoneSurprise && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[105] bg-luxury-black/80 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setMilestoneSurprise(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="max-w-lg bg-white rounded-3xl p-8 text-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-xs uppercase tracking-[0.35em] text-gray-400 mb-4">Hidden Whisper</p>
              <h3 className="text-3xl font-elegant text-rose-gold mb-4">Em da mo 4 ky uc roi...</h3>
              <p className="text-gray-700 leading-relaxed">
                Neu em van o day, co le dieu dep nhat khong nam trong tam anh, ma nam o nguoi di cung anh.
              </p>
              <button
                type="button"
                onClick={() => setMilestoneSurprise(false)}
                className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white"
              >
                Continue
              </button>
            </motion.div>
          </motion.div>
        )}
        {selectedPhoto && (
          <Lightbox
            photo={selectedPhoto}
            onClose={handleCloseLightbox}
            onPrev={() => {
              const idx = photos.findIndex(p => p.id === selectedPhoto.id);
              setSelectedPhoto(photos[(idx - 1 + photos.length) % photos.length]);
            }}
            onNext={() => {
              const idx = photos.findIndex(p => p.id === selectedPhoto.id);
              setSelectedPhoto(photos[(idx + 1) % photos.length]);
            }}
          />
        )}
      </AnimatePresence>
    </section>
  );
}