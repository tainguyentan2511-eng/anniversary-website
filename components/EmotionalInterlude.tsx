'use client';

import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface EmotionalInterludeProps {
  show: boolean;
  onContinue: () => void;
}

export default function EmotionalInterlude({ show, onContinue }: EmotionalInterludeProps) {

  useEffect(() => {
    if (!show) return;

    const timer = setTimeout(() => {
      onContinue(); // 👉 auto chuyển
    }, 900); // 0.9s là đẹp

    return () => clearTimeout(timer);
  }, [show, onContinue]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[115] bg-luxury-black/80 backdrop-blur-md flex items-center justify-center"
        >
          {/* Text nhẹ, không ép */}
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center px-6"
          >
            <p className="text-luxury-cream/50 uppercase tracking-[0.4em] text-xs mb-4">
              A Moment
            </p>

            <h3 className="text-3xl md:text-4xl font-elegant text-luxury-cream">
              Ký ức đang mở ra...
            </h3>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}