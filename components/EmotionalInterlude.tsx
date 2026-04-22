'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface EmotionalInterludeProps {
  show: boolean;
  onContinue: () => void;
}

export default function EmotionalInterlude({ show, onContinue }: EmotionalInterludeProps) {
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    if (!show) return;

    setSeconds(0.5);
    const timer = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[115] bg-luxury-black/90 backdrop-blur-xl flex items-center justify-center p-6"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="max-w-xl text-center"
          >
            <p className="text-luxury-cream/50 uppercase tracking-[0.4em] text-xs mb-6">Breathing Space</p>
            <h3 className="text-4xl md:text-5xl font-elegant text-luxury-cream mb-5">
              Nham mat 5 giay nhe...
            </h3>
            <p className="text-luxury-cream/70 leading-relaxed mb-8">
              De nhac nhe troi qua, va de tim em cham hon mot nhip. Ky niem sap bat dau.
            </p>

            <div className="text-6xl font-elegant text-rose-gold mb-8">{seconds}</div>

            <button
              type="button"
              disabled={seconds > 0}
              onClick={onContinue}
              className="px-7 py-3 rounded-full border border-luxury-cream/30 text-luxury-cream disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
            >
              {seconds > 0 ? 'Wait...' : 'Continue'}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
