'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface MysteryGateProps {
  unlocked: boolean;
  onUnlock: () => void;
}

const clues = [
  { id: 'moon', icon: '🌙', label: 'Moonlight' },
  { id: 'letter', icon: '💌', label: 'Love Letter' },
  { id: 'key', icon: '🗝️', label: 'The Key' },
  { id: 'rose', icon: '🌹', label: 'Promise' },
];

const correctSequence = ['moon', 'letter', 'key'];

export default function MysteryGate({ unlocked, onUnlock }: MysteryGateProps) {
  const [sequence, setSequence] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<'idle' | 'wrong'>('idle');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleSelect = (id: string, index: number) => {
    if (unlocked) return;

    const next = [...sequence, id];
    const expected = correctSequence[next.length - 1];

    setActiveIndex(index);

    if (id !== expected) {
      setFeedback('wrong');
      setTimeout(() => {
        setSequence([]);
        setActiveIndex(null);
        setFeedback('idle');
      }, 800);
      return;
    }

    setSequence(next);
    setFeedback('idle');

    if (next.length === correctSequence.length) {
      setTimeout(() => onUnlock(), 400);
    }
  };

  const progress = (sequence.length / correctSequence.length) * 100;

  return (
    <section className="py-24 px-6 bg-black text-neutral-200">
      <div className="max-w-3xl mx-auto text-center">

        {/* Title */}
        <h3 className="text-4xl md:text-5xl font-light mb-4">
          Cánh Cổng Ký Ức
        </h3>

        <p className="text-neutral-400 text-sm max-w-md mx-auto mb-10">
          Chỉ cần em nhớ đúng thứ tự… cánh cửa sẽ tự mở.
        </p>

        {/* Progress */}
        <div className="h-[2px] bg-neutral-800 mb-12 relative overflow-hidden">
          <motion.div
            className="h-full bg-white"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>

        {/* Choices */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {clues.map((clue, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.button
                key={clue.id}
                onClick={() => handleSelect(clue.id, index)}
                whileTap={{ scale: 0.95 }}
                className={`rounded-xl py-6 border transition-all duration-300
                  ${
                    isActive
                      ? feedback === 'wrong'
                        ? 'border-red-400 bg-red-400/10'
                        : 'border-white bg-white/10'
                      : 'border-neutral-700 hover:border-white'
                  }
                `}
              >
                <div className="text-xl mb-2">{clue.icon}</div>
                <div className="text-xs text-neutral-400">
                  {clue.label}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Hint */}
        <p className="text-neutral-500 text-xs italic mb-2">
          Gợi ý: màn đêm → lời tỏ tình → chìa khóa
        </p>

        {/* Subtle feedback */}
        {feedback === 'wrong' && (
          <p className="text-neutral-500 text-xs">
            Không phải ký ức này…
          </p>
        )}

        {/* Success */}
        {unlocked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-10"
          >
            <p className="text-white text-lg">
              Cánh cổng đã mở
            </p>
            <p className="text-neutral-400 text-sm">
              Và mọi ký ức lại quay về.
            </p>
          </motion.div>
        )}

      </div>
    </section>
  );
}