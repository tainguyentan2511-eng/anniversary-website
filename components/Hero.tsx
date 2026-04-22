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
            <motion.div
              className="pt-12 flex flex-col gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              {/* Line luxury */}
              {/* <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-rose-gold/50 to-transparent" /> */}
              <motion.div
                className="h-[1px] w-24 bg-gradient-to-r from-transparent via-rose-gold/50 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
              {/* Names highlight */}
              <h3 className="text-2xl md:text-3xl font-elegant text-luxury-black tracking-wide leading-relaxed">
                <span className="relative">
                  <span className="bg-gradient-to-r from-rose-gold via-yellow-300 to-rose-gold bg-clip-text text-transparent font-semibold">
                    {coupleInfo.name1}
                  </span>
                </span>

                <span className="mx-3 text-luxury-black/40 font-light">♥</span>

                <span className="relative">
                  <span className="bg-gradient-to-r from-rose-gold via-yellow-300 to-rose-gold bg-clip-text text-transparent font-semibold">
                    {coupleInfo.name2}
                  </span>
                </span>
              </h3>

              {/* Sub text */}
              <p className="text-luxury-black/50 text-sm tracking-[0.2em] uppercase">
                A love written in time
              </p>
            </motion.div>
          </motion.div>

        <motion.p
          className="text-luxury-black/60 max-w-md leading-relaxed italic tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          Có những khoảnh khắc tưởng chừng đã trôi qua,
          <br />
          nhưng thực ra vẫn luôn ở đây -
          <span className="text-rose-gold"> chờ em chạm vào.</span>
        </motion.p>
        </div>

        {/* Right Side: Cinematic Image with Reveal */}
        <motion.div 
          className="w-full md:w-[45%] mt-12 md:mt-0 relative aspect-[3/4] group"
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.5, ease: [0.215, 0.61, 0.355, 1] }}
        >
          {/* Glow nền */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-rose-gold/20 via-transparent to-luxury-black/10 blur-2xl opacity-60 group-hover:opacity-80 transition duration-700" />

          {/* Frame ngoài */}
          <div className="relative w-full h-full rounded-2xl p-[2px] bg-gradient-to-br from-white/40 via-white/10 to-transparent shadow-2xl">
            
            {/* Frame trong */}
            <div className="w-full h-full rounded-2xl overflow-hidden">
              <motion.div
                className="w-full h-full bg-cover bg-center grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                style={{ backgroundImage: "url('Image/2024/BackGround.JPG')" }}
              />
              
              {/* Overlay gradient nhẹ */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
            </div>
          </div>

          {/* Overlay Tag (fix lại cho đẹp hơn) */}
          <div className="absolute bottom-6 left-6 bg-white/70 backdrop-blur-lg px-5 py-3 rounded-xl shadow-xl border border-white/20">
            <p className="text-luxury-black font-elegant italic text-lg tracking-wide">
              Est. {coupleInfo.anniversaryDate.substring(0, 4)}
            </p>
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