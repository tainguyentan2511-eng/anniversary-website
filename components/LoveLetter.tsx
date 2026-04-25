'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { coupleInfo } from '@/data/memories';

export default function LoveLetter() {
  const [isEnvelopeOpened, setIsEnvelopeOpened] = useState(false);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-blush relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-10 left-10 text-6xl opacity-10 select-none">💌</div>
      <div className="absolute bottom-10 right-10 text-6xl opacity-10 select-none">💕</div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-elegant font-bold text-rose-gold mb-4">
            A Letter to You
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-rose-gold to-transparent mx-auto" />
        </motion.div>

        {/* Envelope (closed) */}
        <AnimatePresence mode="wait">
          {!isEnvelopeOpened && (
            <motion.div
              key="envelope"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-xl mx-auto text-center bg-white rounded-3xl p-8 shadow-2xl border-2 border-pink-100"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-gray-500 mb-5">
                Mini Moment
              </p>
              <h3 className="text-3xl font-elegant text-rose-gold mb-3">
                Một lá thư chưa mở
              </h3>
              <p className="text-gray-600 mb-8">
                Chạm vào con dấu nhỏ để mở bức thư dành riêng cho em.
              </p>
              <button
                type="button"
                onClick={() => setIsEnvelopeOpened(true)}
                className="mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-rose-500 to-rose-gold text-white text-4xl shadow-lg hover:scale-105 transition-transform active:scale-95"
                aria-label="Mở thư"
              >
                💌
              </button>
            </motion.div>
          )}

          {/* Letter (opened) */}
          {isEnvelopeOpened && (
            <motion.div
              key="letter"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-pink-100 relative"
            >
              {/* Corner hearts */}
              <div className="absolute top-4 left-4 text-2xl select-none">💗</div>
              <div className="absolute top-4 right-4 text-2xl select-none">💗</div>
              <div className="absolute bottom-4 left-4 text-2xl select-none">💗</div>
              <div className="absolute bottom-4 right-4 text-2xl select-none">💗</div>

              <div className="max-w-2xl mx-auto">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl md:text-3xl font-script text-rose-gold mb-6 text-center"
                >
                  My Dearest Love,
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="space-y-6 text-gray-700 leading-relaxed text-lg"
                >
                  <p className="text-justify leading-relaxed">
                    {coupleInfo.message}
                  </p>

                  <p className="text-justify leading-relaxed">
                    Through all the ups and downs, the laughter and tears, you have been my constant, my rock, my soulmate. Every day with you is a gift, and I treasure each moment we share together.
                  </p>

                  <p className="text-justify leading-relaxed">
                    As we celebrate three beautiful years together, I want you to know that my love for you only grows stronger. You make me want to be a better person, and I am so grateful for every memory we’ve created.
                  </p>

                  <p className="text-justify leading-relaxed mt-4 font-semibold text-rose-gold">
                    Here’s to us, to our journey, and to all the amazing years still to come. I love you more than words could ever express. 💕
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="mt-12 text-center"
                >
                  <p className="text-3xl font-script text-rose-gold mb-2">
                    Forever Yours,
                  </p>
                  <p className="text-4xl font-elegant font-bold text-gray-800">
                    {coupleInfo.name2}
                  </p>
                  <div className="mt-4 text-4xl select-none">♥ ♥ ♥</div>
                </motion.div>
              </div>

              {/* Wax seal decoration (giữ làm kỷ niệm 3 năm) */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-rose-500 to-rose-gold rounded-full flex items-center justify-center shadow-lg text-white text-3xl font-elegant font-bold select-none">
                3
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}