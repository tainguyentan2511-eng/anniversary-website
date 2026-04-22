'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroScreenProps {
  onFinish: () => void;
}

export default function IntroScreen({ onFinish }: IntroScreenProps) {
  const [showButton, setShowButton] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);

  useEffect(() => {
    const secondLineTimer = setTimeout(() => {
      setShowSecondLine(true);
    }, 1400);
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3000); // Show button after 3 seconds
    return () => {
      clearTimeout(secondLineTimer);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
      >
        {/* Mysterious Poetic Text */}
        <motion.p
          className="text-xl md:text-3xl font-script italic text-rose-gold mb-12 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          "Every love story is beautiful, but ours is my favorite mystery."
        </motion.p>

        {showSecondLine && (
          <motion.p
            className="text-sm md:text-base uppercase tracking-[0.35em] text-white/60 mb-10 text-center px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            Tonight, only one heart can unlock the hidden chapter.
          </motion.p>
        )}

        {/* Begin Journey Button */}
        {showButton && (
          <motion.button
            className="px-8 py-3 border border-rose-gold text-rose-gold uppercase tracking-widest text-sm hover:bg-rose-gold hover:text-white transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-rose-gold focus:ring-opacity-50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            onClick={onFinish}
          >
            Mo Khoa Cau Chuyen Cua Chung Ta
          </motion.button>
        )}

        {/* Subtle Background Effect - e.g., slowly moving particles or a soft glow */}
        <div className="absolute inset-0 pointer-events-none">
          {/* This is where you might add a canvas for particles or a more complex CSS animation for background mystery */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-rose-gold opacity-10 animate-pulse-slow" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
