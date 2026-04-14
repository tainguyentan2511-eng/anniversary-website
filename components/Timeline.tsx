'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { timelineEvents } from '@/data/memories';

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="timeline" className="py-20 px-4 bg-gradient-to-b from-blush to-white relative">
      <div className="max-w-5xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-elegant font-bold text-rose-gold mb-4">
            Our Love Story
          </h2>
          <p className="text-xl text-gray-600 font-elegant">
            A journey through our most precious moments
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-rose-gold to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-soft-pink via-rose-gold to-soft-pink hidden md:block" />

          {/* Timeline events */}
          <div className="space-y-12 md:space-y-0">
            {timelineEvents.map((event, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative md:w-1/2 ${isLeft ? 'md:pr-12 md:ml-auto md:text-right' : 'md:pl-12'} px-4`}
                  style={{
                    marginBottom: '3rem',
                  }}
                >
                  {/* Center dot */}
                  <div className={`absolute top-6 ${isLeft ? 'md:right-0 md:-mr-3' : 'md:left-0 md:-ml-3'} w-6 h-6 bg-rose-gold rounded-full border-4 border-white shadow-lg z-10 hidden md:block`} />

                  {/* Card */}
                  <motion.div
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    whileHover={{ y: -5 }}
                  >
                    {/* Date badge */}
                    <div className={`inline-block px-4 py-2 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full mb-4 ${isLeft ? 'md:float-right' : ''}`}>
                      <span className="text-rose-gold font-elegant font-semibold text-sm">
                        {event.date}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className={`text-4xl mb-4 ${isLeft ? 'md:float-right md:ml-4' : 'md:float-left md:mr-4'}`}>
                      {event.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-elegant font-bold text-gray-800 mb-3 mt-8">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}