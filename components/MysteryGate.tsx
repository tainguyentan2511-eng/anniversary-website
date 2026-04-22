'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

interface MysteryGateProps {
  unlocked: boolean;
  onUnlock: () => void;
}

const clues = [
  { id: 'moon', icon: '🌙', label: 'Moonlight' },
  { id: 'key', icon: '🗝️', label: 'Secret Key' },
  { id: 'letter', icon: '💌', label: 'Hidden Letter' },
  { id: 'rose', icon: '🌹', label: 'Rose Promise' },
];

const correctSequence = ['moon', 'letter', 'key'];

export default function MysteryGate({ unlocked, onUnlock }: MysteryGateProps) {
  const [sequence, setSequence] = useState<string[]>([]);
  const [error, setError] = useState('');
  const [awakened, setAwakened] = useState(false);

  const hint = useMemo(() => 'Goi y: thu tu bat dau tu dem, den loi to tinh, roi den canh cua.', []);

  const handleSelect = (id: string) => {
    if (unlocked) return;

    const next = [...sequence, id];
    setSequence(next);
    setError('');

    const expected = correctSequence[next.length - 1];
    if (id !== expected) {
      setError('Sai mat ma roi... thu lai nhe.');
      setSequence([]);
      return;
    }

    if (next.length === correctSequence.length) {
      onUnlock();
    }
  };

  return (
    <section className="py-24 px-6 bg-luxury-black text-luxury-cream relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/20 via-transparent to-transparent" />
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.4em] text-xs text-luxury-cream/50 mb-6"
        >
          Hidden Chamber
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-elegant mb-6"
        >
          Mo khoa chuong tiep theo
        </motion.h3>

        <p className="text-luxury-cream/70 max-w-2xl mx-auto mb-10">
          Chon dung 3 bieu tuong de xem nhung ky niem "mat ma" chi danh cho hai dua minh.
        </p>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-luxury-cream/50 mb-4">
            Buoc 1: Keo khoa bi mat sang phai
          </p>
          <div className="max-w-md mx-auto border border-luxury-cream/20 rounded-full p-2 bg-white/5">
            <motion.div
              drag={awakened ? false : 'x'}
              dragConstraints={{ left: 0, right: 220 }}
              whileDrag={{ scale: 1.05 }}
              onDragEnd={(_, info) => {
                if (info.offset.x > 120) setAwakened(true);
              }}
              className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl ${awakened ? 'bg-rose-gold text-white ml-auto' : 'bg-luxury-cream text-luxury-black'}`}
            >
              {awakened ? '🔓' : '🔐'}
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {clues.map((clue) => (
            <button
              key={clue.id}
              type="button"
              onClick={() => handleSelect(clue.id)}
              disabled={!awakened}
              className="border border-luxury-cream/20 hover:border-rose-gold bg-white/5 hover:bg-white/10 rounded-2xl py-6 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <div className="text-3xl mb-2">{clue.icon}</div>
              <div className="text-sm tracking-wide">{clue.label}</div>
            </button>
          ))}
        </div>

        <p className="text-luxury-cream/50 text-sm mb-2">{hint}</p>
        {error && <p className="text-rose-300 text-sm">{error}</p>}

        {unlocked && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-rose-gold"
          >
            Da mo khoa thanh cong. Chao mung em den khu vuon bi mat.
          </motion.p>
        )}
      </div>
    </section>
  );
}
