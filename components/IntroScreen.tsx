'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface IntroScreenProps {
  onFinish: () => void;
}

export default function IntroScreen({ onFinish }: IntroScreenProps) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    setOpening(true);
    setTimeout(() => {
      onFinish();
    }, 1600);
  };

  return (
    <AnimatePresence>
      {!opening && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-luxury-cream text-luxury-black overflow-hidden"
          exit={{ opacity: 0 }}
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/10 via-transparent to-transparent" />

          {/* ❤️ FLOATING HEARTS (ENHANCED) */}
          {[...Array(18)].map((_, i) => {
            const size = Math.random() * 16 + 10;
            return (
              <motion.div
                key={i}
                className="absolute text-rose-gold"
                style={{
                  fontSize: size,
                  left: `${Math.random() * 100}%`,
                  filter: 'blur(0.3px)',
                }}
                initial={{
                  y: 100,
                  opacity: 0,
                }}
                animate={{
                  y: -300,
                  opacity: [0, 0.9, 0],
                  x: [0, Math.random() * 40 - 20],
                }}
                transition={{
                  duration: 6 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: 'easeInOut',
                }}
              >
                ♥
              </motion.div>
            );
          })}

          {/* CONTENT */}
          <div className="relative z-10 text-center px-6">

            {/* LOGO */}
            {/* LOGO + CTA */}
            <motion.div
              className="mb-10 flex flex-col items-center cursor-pointer select-none"
              onClick={handleOpen}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 1 }}
            >
              {/* Logo circle */}
              <div className="relative w-32 h-32 rounded-full border border-rose-gold/40 flex items-center justify-center">

                {/* Glow ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border border-rose-gold/30"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Monogram */}
                <span className="text-3xl font-elegant tracking-widest">
                  T <span className="text-rose-gold">♥</span> V
                </span>
              </div>

              {/* CTA TEXT (NEW - đẹp hơn) */}
              <motion.div
                className="mt-6 flex flex-col items-center gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <span className="text-[11px] tracking-[0.4em] uppercase text-luxury-black/40">
                  Tap to begin
                </span>

                <span className="text-sm italic text-rose-gold/80 tracking-wide flex items-center gap-2">
                  <motion.span
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ♡
                  </motion.span>
                  Chạm vào đây
                  <motion.span
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                  >
                    ♡
                  </motion.span>
                </span>

                {/* subtle line */}
                <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-rose-gold/50 to-transparent mt-2" />
              </motion.div>
            </motion.div>
          </div>

          {/* bottom glow */}
          <div className="absolute bottom-[-20%] w-[60%] h-[60%] bg-rose-gold/10 blur-3xl rounded-full animate-pulse" />
        </motion.div>
      )}

      {/* OPENING EFFECT */}
      {opening && (
        <motion.div
          className="fixed inset-0 z-50 bg-luxury-cream"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 1.4, ease: [0.83, 0, 0.17, 1] }}
          style={{ transformOrigin: 'top' }}
        />
      )}
    </AnimatePresence>
  );
}