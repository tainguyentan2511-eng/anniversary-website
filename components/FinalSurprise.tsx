'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { coupleInfo, photos } from '@/data/memories';

interface FinalSurpriseProps {
  show: boolean;
  onClose: () => void;
}

export default function FinalSurprise({ show, onClose }: FinalSurpriseProps) {
  const finalPhoto = photos[photos.length - 1];
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (!show) {
      setPhase(0);
      return;
    }

    if (phase !== 1) return;

    const t1 = setTimeout(() => setPhase(2), 3600);
    const t2 = setTimeout(() => setPhase(3), 7600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [show, phase]);

  return (
    <AnimatePresence>
      {show && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[120] bg-luxury-black/95 backdrop-blur-xl overflow-y-auto"
        >
          <div className="min-h-full flex items-center justify-center p-6">
            <motion.div
              initial={{ y: 30, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              transition={{ duration: 1 }}
              className="max-w-4xl w-full text-center"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-luxury-cream/50 mb-5">
                Final Scene
              </p>
              {phase === 0 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-2xl mx-auto">
                  <h2 className="text-4xl md:text-6xl font-elegant text-luxury-cream mb-5">
                    Hey {coupleInfo.name2}, this is the last chapter...
                  </h2>
                  <p className="text-luxury-cream/70 mb-8">
                    Canh nay khong can keo xuong nhanh. Hãy de trai tim doc cham mot chut.
                  </p>
                  <button
                    type="button"
                    onClick={() => setPhase(1)}
                    className="px-7 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white"
                  >
                    I am ready
                  </button>
                </motion.div>
              )}

              {phase >= 1 && (
                <>
                  <div className="mb-10 space-y-4">
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xl md:text-3xl font-script text-rose-gold">
                      "Neu mot ngay em quen tat ca..."
                    </motion.p>
                    {phase >= 2 && (
                      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xl md:text-3xl font-script text-luxury-cream">
                        "Anh se yeu em lai tu dau."
                      </motion.p>
                    )}
                    {phase >= 3 && (
                      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-base md:text-lg text-luxury-cream/70">
                        "Va lan nao cung nhu lan dau - day ngac nhien, day biet on."
                      </motion.p>
                    )}
                  </div>

                  {phase >= 2 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 1.06 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1.4 }}
                      className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                    >
                      <img
                        src={finalPhoto.src}
                        alt={finalPhoto.alt}
                        className="w-full max-h-[55vh] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-left">
                        <p className="text-luxury-cream/80 text-sm uppercase tracking-[0.25em] mb-2">
                          3 Years Anniversary
                        </p>
                        <p className="text-2xl md:text-4xl font-elegant text-luxury-cream">
                          Thank you for making ordinary days feel like magic.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {phase >= 3 && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-10 text-luxury-cream/80 max-w-2xl mx-auto leading-relaxed"
                    >
                      Anh khong co mon qua nao lon hon viec duoc di cung em trong hanh trinh nay.
                      Chuc mung 3 nam cua chung ta, va mot doi ve sau.
                    </motion.p>
                  )}

                  <button
                    type="button"
                    onClick={onClose}
                    className="mt-8 px-6 py-3 rounded-full border border-luxury-cream/30 text-luxury-cream hover:bg-white/10 transition-colors"
                  >
                    Close
                  </button>
                </>
              )}
            </motion.div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
