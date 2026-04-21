'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { coupleInfo } from '@/data/memories';

interface LoveLetterProps {
  onRevealFinal: () => void;
}

export default function LoveLetter({ onRevealFinal }: LoveLetterProps) {
  const [isEnvelopeOpened, setIsEnvelopeOpened] = useState(false);
  const [inputName, setInputName] = useState('');
  const [nameError, setNameError] = useState('');

  const expectedName = useMemo(() => coupleInfo.name2.toLowerCase(), []);

  const handleUnlockFinal = () => {
    if (inputName.trim().toLowerCase() === expectedName) {
      setNameError('');
      onRevealFinal();
      return;
    }
    setNameError('Nhap dung ten nguoi anh yeu nhat nhe.');
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-blush relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-6xl opacity-10">💌</div>
      <div className="absolute bottom-10 right-10 text-6xl opacity-10">💕</div>

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

        {!isEnvelopeOpened && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto text-center bg-white rounded-3xl p-8 shadow-2xl border-2 border-pink-100"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-gray-500 mb-5">Mini Moment</p>
            <h3 className="text-3xl font-elegant text-rose-gold mb-3">Mot la thu chua mo</h3>
            <p className="text-gray-600 mb-8">Cham vao con dau sap de mo buc thu danh rieng cho em.</p>
            <button
              type="button"
              onClick={() => setIsEnvelopeOpened(true)}
              className="mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-rose-500 to-rose-gold text-white text-4xl shadow-lg hover:scale-105 transition-transform"
            >
              💌
            </button>
          </motion.div>
        )}

        {/* Letter container */}
        {isEnvelopeOpened && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-pink-100 relative"
          >
          {/* Decorative corners */}
          <div className="absolute top-4 left-4 text-2xl">💗</div>
          <div className="absolute top-4 right-4 text-2xl">💗</div>
          <div className="absolute bottom-4 left-4 text-2xl">💗</div>
          <div className="absolute bottom-4 right-4 text-2xl">💗</div>

          {/* Letter content */}
          <div className="max-w-2xl mx-auto">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-3xl font-script text-rose-gold mb-6 text-center"
            >
              My Dearest Love,
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6 text-gray-700 leading-relaxed text-lg"
            >
              <p>
                {coupleInfo.message}
              </p>

              <p>
                Through all the ups and downs, the laughter and tears, you have been my constant, 
                my rock, my soulmate. Every day with you is a gift, and I treasure each moment 
                we share together.
              </p>

              <p>
                As we celebrate three beautiful years together, I want you to know that my love 
                for you only grows stronger. You make me want to be a better person, and I am 
                so grateful for every memory we've created.
              </p>

              <p className="font-semibold text-rose-gold">
                Here's to us, to our journey, and to all the amazing years still to come. 
                I love you more than words could ever express. 💕
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 text-center"
            >
              <p className="text-3xl font-script text-rose-gold mb-2">
                Forever Yours,
              </p>
              <p className="text-4xl font-elegant font-bold text-gray-800">
                {coupleInfo.name1}
              </p>
              <div className="mt-4 text-4xl">
                ♥ ♥ ♥
              </div>
            </motion.div>

            <div className="mt-10 border-t border-pink-100 pt-8 text-center">
              <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-3">Final Lock</p>
              <p className="text-gray-600 mb-4">Nhap ten cua em de mo bat ngo cuoi cung.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <input
                  type="text"
                  value={inputName}
                  onChange={(e) => setInputName(e.target.value)}
                  placeholder="Type your name..."
                  className="border border-pink-200 rounded-full px-5 py-3 outline-none focus:border-rose-gold"
                />
                <button
                  type="button"
                  onClick={handleUnlockFinal}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600 transition-colors"
                >
                  Unlock Final Scene
                </button>
              </div>
              {nameError && <p className="text-rose-500 text-sm mt-3">{nameError}</p>}
            </div>
          </div>

          {/* Wax seal decoration */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-rose-500 to-rose-gold rounded-full flex items-center justify-center shadow-lg text-white text-3xl font-elegant font-bold">
            3
          </div>
        </motion.div>
        )}
      </div>
    </section>
  );
}