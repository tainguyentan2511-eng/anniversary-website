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
      <section className="py-32 px-6 bg-luxury-black text-luxury-cream relative overflow-hidden">

        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-900/10 to-transparent" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">

          {/* Top label */}
          <p className="uppercase tracking-[0.5em] text-xs text-luxury-cream/40 mb-6">
            Memory Gate
          </p>

          {/* Title */}
          <h3 className="text-4xl md:text-6xl font-elegant mb-6 leading-tight">
            Cánh Cổng Ký Ức
          </h3>

          {/* Romantic text */}
          <p className="text-luxury-cream/60 max-w-xl mx-auto mb-12 italic">
            Có những ký ức không thể mở bằng chìa khóa bình thường…  
            chỉ khi em nhớ đúng thứ tự, cánh cửa mới mở ra.
          </p>

          {/* Divider giống Hero */}
          <div className="flex items-center justify-center gap-6 mb-14">
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-rose-300/40 to-transparent" />
            <div className="text-xl opacity-70">🕊️</div>
            <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-rose-300/40 to-transparent" />
          </div>

          {/* STEP 1 */}
          <div className="mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-luxury-cream/40 mb-4">
              Step 1 — Awaken the gate
            </p>

            <div className="max-w-md mx-auto border border-luxury-cream/20 rounded-full p-2 bg-white/5 backdrop-blur-md">
              <motion.div
                drag={awakened ? false : 'x'}
                dragConstraints={{ left: 0, right: 220 }}
                whileDrag={{ scale: 1.1 }}
                onDragEnd={(_, info) => {
                  if (info.offset.x > 120) setAwakened(true);
                }}
                className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl transition-all duration-500
                  ${awakened 
                    ? 'bg-rose-500 text-white ml-auto shadow-[0_0_25px_rgba(244,114,182,0.6)]' 
                    : 'bg-luxury-cream text-luxury-black'}
                `}
              >
                {awakened ? '✨' : '🔐'}
              </motion.div>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.4em] text-luxury-cream/40 mb-6">
              Step 2 — Recall the memories
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {clues.map((clue) => (
                <motion.button
                  key={clue.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSelect(clue.id)}
                  disabled={!awakened}
                  className="group border border-luxury-cream/20 hover:border-rose-400/50 
                    bg-white/5 hover:bg-white/10 rounded-2xl py-8 transition-all
                    disabled:opacity-30 backdrop-blur-md"
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                    {clue.icon}
                  </div>
                  <div className="text-sm tracking-wide text-luxury-cream/70">
                    {clue.label}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Hint */}
          <p className="text-luxury-cream/40 text-sm italic mb-2">
            Gợi ý: Bắt đầu từ màn đêm… đến lời tỏ tình… rồi mở cánh cửa.
          </p>

          {error && (
            <p className="text-rose-400 text-sm animate-pulse">
              Sai rồi… thử lại nhẹ nhàng thôi 💔
            </p>
          )}

          {/* Success */}
          {unlocked && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-10"
            >
              <p className="text-rose-400 text-lg mb-2">
                Cánh cổng đã mở ✨
              </p>
              <p className="text-luxury-cream/60 italic">
                Chào mừng em đến với khu vườn ký ức của hai chúng ta.
              </p>
            </motion.div>
          )}

        </div>
      </section>
  );
}
