'use client';

import { motion } from 'framer-motion';
import { timelineEvents } from '@/data/memories';

export default function Timeline() {
  return (
    <section id="timeline" className="py-32 px-6 bg-luxury-cream overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-32 text-center">
          <motion.span 
            className="text-[10px] uppercase tracking-[0.5em] text-luxury-black/40 font-sans block mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Chapter
          </motion.span>
          <motion.h2 
            className="text-5xl md:text-7xl font-elegant text-luxury-black mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Moments in <span className="italic">Time</span>
          </motion.h2>
          <motion.div 
            className="w-16 h-[1px] bg-luxury-black/20 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>

        {/* Artistic Timeline */}
        <div className="relative">
          {/* Vertical Center Line (Subtle) */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-luxury-black/5" />

          <div className="space-y-40">
            {timelineEvents.map((event, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={event.id} className="relative flex flex-col md:flex-row items-center group">
                  {/* Date Circle */}
                  <div className="absolute left-[20px] md:left-1/2 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-luxury-cream border border-rose-gold z-10 group-hover:scale-[2] transition-transform duration-500" />

                  {/* Image Container */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -80 : 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.215, 0.61, 0.355, 1] }}
                    className={`w-full md:w-1/2 relative aspect-[4/3] overflow-hidden ${isEven ? 'md:pr-24' : 'md:order-last md:pl-24'}`}
                  >
                    <div className="absolute inset-0 border border-luxury-black/5 translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-700" />
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100"
                    />
                  </motion.div>

                  {/* Content Container */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:text-right md:pl-24' : 'md:text-left md:pr-24'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 80 : -80 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 1.2, ease: [0.215, 0.61, 0.355, 1] }}
                      className="space-y-6 pt-12 md:pt-0"
                    >
                      <div className="space-y-2">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-rose-gold font-semibold">
                          {event.date}
                        </span>
                        <h3 className="text-3xl md:text-4xl font-elegant text-luxury-black group-hover:italic transition-all duration-500">
                          {event.title}
                        </h3>
                      </div>
                      
                      <div className={`flex items-center gap-4 ${isEven ? 'md:flex-row-reverse md:justify-end' : ''}`}>
                        <span className="text-3xl grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-125">
                          {event.icon}
                        </span>
                        <p className="text-luxury-black/60 font-sans leading-relaxed text-lg max-w-md">
                          {event.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}