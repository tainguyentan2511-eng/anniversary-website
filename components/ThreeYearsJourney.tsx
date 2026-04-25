'use client';

import { useState, useEffect, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { photos } from '@/data/memories';

const SLIDE_INTERVAL_MS = 3000;

export default function ContinuousSlideshow() {
  const slides = useMemo(
    () =>
      photos.map((p) => ({
        id: p.id.toString(),
        src: p.src,
        alt: p.alt,
        quote: p.caption,
      })),
    []
  );

  const [slideIndex, setSlideIndex] = useState(0);
  const activeSlide = slides[slideIndex];
  const progress = ((slideIndex + 1) / slides.length) * 100;

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-luxury-black text-luxury-cream overflow-hidden py-10 px-4 md:px-6">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-300/20 via-fuchsia-200/10 to-indigo-300/20" />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 14 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              width: (i % 4) + 2,
              height: (i % 4) + 2,
              left: `${(i * 37) % 100}%`,
              top: `${(i * 19) % 100}%`,
            }}
            animate={{ opacity: [0.1, 0.5, 0.1], y: [0, -10, 0] }}
            transition={{ duration: 3 + (i % 4), repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto text-center">
        {/* Tiêu đề nhỏ gọn hơn */}
        <p className="text-xs uppercase tracking-[0.4em] text-luxury-cream/50 mb-3">
          Khoảnh Khắc Của Chúng Ta
        </p>
        <h2 className="text-2xl md:text-4xl font-elegant mb-8 text-luxury-cream/90">
          Những Ký Ức Không Phai
        </h2>

        {/* Khung ảnh chiếm phần lớn màn hình, không cắt ảnh */}
        <div className="relative w-full max-w-6xl mx-auto rounded-3xl overflow-hidden border border-white/10 bg-black/20 backdrop-blur-md">
          <div className="relative w-full" style={{ minHeight: '70vh' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.id}
                initial={{ opacity: 0, scale: 1.02, filter: 'blur(4px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.02, filter: 'blur(4px)' }}
                transition={{ duration: 0.9, ease: 'easeInOut' }}
                className="absolute inset-0 flex items-center justify-center bg-black/10"
              >
                <img
                  src={activeSlide.src}
                  alt={activeSlide.alt}
                  className="w-full h-full object-contain"
                />
                {/* Lời thoại nằm ở góc dưới, nhẹ nhàng */}
                <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10">
                  <p className="text-white/90 text-sm md:text-xl font-script drop-shadow-lg">
                    {activeSlide.quote}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress bar tối giản */}
          <div className="px-5 md:px-7 py-3 border-t border-white/10">
            <div className="w-full h-1 rounded-full bg-white/15 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-rose-gold to-rose-gold-light"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="flex justify-center mt-2 text-[11px] uppercase tracking-[0.2em] text-luxury-cream/40">
              {slideIndex + 1} / {slides.length}
            </div>
          </div>
        </div>

        {/* Dòng nhắn cuối */}
        <p className="mt-6 text-sm text-luxury-cream/30 italic">
          Ngồi yên và để những kỷ niệm tự tìm về em 🤍
        </p>
      </div>
    </section>
  );
}