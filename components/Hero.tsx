'use client';

import { motion } from 'framer-motion';
import { coupleInfo } from '@/data/memories';

export default function Hero() {
  return (
    <section className="relative min-h-[110vh] flex items-center justify-center overflow-hidden bg-luxury-cream">
      {/* Decorative Ethereal Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] ethereal-glow opacity-50" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] ethereal-glow opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/5 via-transparent to-luxury-black/10" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side: Editorial Typography */}
        <div className="w-full md:w-1/2 text-left space-y-8">
          <div className="overflow-hidden">
            <motion.p 
              className="text-sm uppercase tracking-[0.4em] text-luxury-black/40 font-sans font-medium"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: [0.215, 0.61, 0.355, 1] }}
            >
              An eternal journey
            </motion.p>
          </div>

          <div className="space-y-2">
            <div className="overflow-hidden">
              <motion.h1 
                className="text-7xl md:text-8xl lg:text-9xl font-elegant leading-[0.9] text-luxury-black"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
              >
                Tres <span className="italic font-normal italic">Années</span>
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h2 
                className="text-4xl md:text-5xl font-script text-rose-gold ml-4"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
              >
                of Infinite Love
              </motion.h2>
            </div>
          </div>

          <motion.div
            className="pt-12 flex items-center gap-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="h-[1px] w-24 bg-luxury-black/10" />
            <p className="text-luxury-black/60 font-sans tracking-wide">
              {coupleInfo.name1} + {coupleInfo.name2}
            </p>
          </motion.div>

          <motion.p
            className="text-luxury-black/60 max-w-md leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            Dem nay co mot mat ma nho dang cho em mo khoa. Neu em tim ra, toan bo khu vuon ky niem se hien ra.
          </motion.p>
        </div>

        {/* Right Side: Cinematic Image with Reveal */}
        <motion.div 
          className="w-full md:w-[45%] mt-12 md:mt-0 relative aspect-[3/4] group"
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.5, ease: [0.215, 0.61, 0.355, 1] }}
        >
          <div className="absolute inset-0 border border-luxury-black/5 translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-700" />
          <div className="w-full h-full overflow-hidden">
            <motion.div
              className="w-full h-full bg-cover bg-center grayscale-[30%] hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1596200227187-5f106d3e34b9?w=1200&q=80')` }}
            />
          </div>
          
          {/* Overlay Tag */}
          <div className="absolute bottom-10 -left-10 bg-white/80 backdrop-blur-md p-6 shadow-2xl">
            <p className="text-luxury-black font-elegant italic text-xl">Est. {coupleInfo.anniversaryDate.substring(0, 4)}</p>
          </div>
        </motion.div>
      </div>

      {/* Luxury Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-luxury-black/30 rotate-90 mb-8 font-sans">Scroll</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-rose-gold/40 to-transparent" />
      </motion.div>
    </section>
  );
}