'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { timelineEvents } from '@/data/memories';

interface TimelineProps {
  onFirstInteraction?: () => void;
}

export default function Timeline({ onFirstInteraction }: TimelineProps) {
  const [activeEventId, setActiveEventId] = useState<number | null>(
    timelineEvents[0]?.id ?? null
  );
  const [didInteract, setDidInteract] = useState(false);

  const handleActivate = (id: number) => {
    setActiveEventId(id);
    if (!didInteract) {
      setDidInteract(true);
      onFirstInteraction?.();
    }
  };

  return (
    <section
      id="timeline"
      className="py-32 px-6 bg-luxury-cream overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-32 text-center">
          <motion.span
            className="text-[10px] uppercase tracking-[0.5em] text-luxury-black/40 block mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Our Chapter
          </motion.span>

          <motion.h2
            className="text-5xl md:text-7xl font-elegant text-luxury-black mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Moments in <span className="italic">Time</span>
          </motion.h2>

          <p className="text-luxury-black/60 max-w-xl mx-auto">
            Chạm vào từng khoảnh khắc để mở lời kể.  
            Mỗi lần chạm là một lần ký ức sống dậy.
          </p>

          <motion.div
            className="w-16 h-[1px] mx-auto mt-8 
            bg-gradient-to-r from-transparent via-rose-gold/50 to-transparent"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* LINE */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px]
          bg-gradient-to-b from-transparent via-rose-gold/40 to-transparent" />

          <div className="space-y-40">
            {timelineEvents.map((event, index) => {
              const isEven = index % 2 === 0;
              const isActive = activeEventId === event.id;

              return (
                <div
                  key={event.id}
                  className="relative flex flex-col md:flex-row items-center group"
                >
                  {/* DOT */}
                  <div
                    className={`absolute left-[20px] md:left-1/2 top-0 -translate-x-1/2 w-3 h-3 rounded-full z-10 transition-all duration-500
                    ${
                      isActive
                        ? 'bg-rose-gold scale-150 shadow-[0_0_20px_rgba(244,114,182,0.8)]'
                        : 'bg-luxury-cream border border-rose-gold'
                    }`}
                  />

                  {/* IMAGE */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -80 : 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className={`w-full md:w-1/2 relative aspect-[4/3] overflow-hidden
                    ${isEven ? 'md:pr-24' : 'md:order-last md:pl-24'}`}
                  >
                    {/* glow */}
                    {isActive && (
                      <div className="absolute -inset-4 bg-rose-gold/20 blur-2xl opacity-60 pointer-events-none" />
                    )}

                    {/* frame */}
                    <div className="absolute inset-0 border border-luxury-black/5 translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition duration-700" />

                    <img
                      src={event.image}
                      alt={event.title}
                      className={`w-full h-full object-cover transition-all duration-1000
                      ${
                        isActive
                          ? 'grayscale-0 blur-0 scale-100 brightness-105'
                          : 'grayscale blur-[2px] brightness-75 scale-110'
                      }`}
                    />
                  </motion.div>

                  {/* CONTENT */}
                  <div
                    className={`w-full md:w-1/2 ${
                      isEven ? 'md:text-right md:pl-24' : 'md:text-left md:pr-24'
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 80 : -80 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1 }}
                      className="space-y-6 pt-12 md:pt-0"
                    >
                      <div>
                        <span className="text-xs tracking-[0.3em] text-rose-gold font-semibold">
                          {event.date}
                        </span>

                        <button onClick={() => handleActivate(event.id)}>
                          <h3 className="text-3xl md:text-4xl font-elegant mt-2 hover:italic transition">
                            {event.title}
                          </h3>
                        </button>
                      </div>

                      <div
                        className={`flex items-center gap-4 ${
                          isEven ? 'md:flex-row-reverse md:justify-end' : ''
                        }`}
                      >
                        <span className="text-3xl transition transform group-hover:scale-125">
                          {event.icon}
                        </span>

                        <motion.p
                          key={isActive ? 'active' : 'inactive'}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: isActive ? 1 : 0.3, y: 0 }}
                          transition={{ duration: 0.6 }}
                          className="text-lg max-w-md leading-relaxed"
                        >
                          {isActive
                            ? event.description
                            : 'Chạm để mở ký ức này.'}
                        </motion.p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}

            {/* BREAK MOMENT */}
            <div className="text-center my-40">
              <p className="italic text-rose-gold text-lg">
                "Có những khoảnh khắc không thuộc về thời gian,  
                mà thuộc về hai chúng ta."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}