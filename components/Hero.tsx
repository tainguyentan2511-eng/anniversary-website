'use client';

import { motion } from 'framer-motion';
import { coupleInfo } from '@/data/memories';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1529634828328-6b5e3b3c6e5e?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/60 via-pink-800/50 to-rose-900/70" />
      </div>

      {/* Floating hearts background */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-300/30 text-2xl"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: typeof window !== 'undefined' ? window.innerHeight + 100 : 800,
              opacity: 0,
            }}
            animate={{ 
              y: -100,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 7,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'linear',
            }}
          >
            ♥
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.p 
            className="text-2xl md:text-3xl font-script mb-4 text-pink-200"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Celebrating
          </motion.p>
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-8xl lg:text-9xl font-elegant font-bold mb-6 glow"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.7 }}
        >
          3 Years
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <p className="text-4xl md:text-5xl font-script mb-8 text-pink-100">
            {coupleInfo.name1} <span className="text-rose-400">♥</span> {coupleInfo.name2}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-8"
        >
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-pink-300 to-transparent mx-auto mb-8" />
          <p className="text-xl md:text-2xl font-elegant text-pink-50 max-w-2xl mx-auto leading-relaxed">
            Three years of love, laughter, and beautiful memories
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-12"
        >
          <motion.a
            href="#gallery"
            className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full text-lg font-elegant font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-300 shadow-lg hover:shadow-pink-500/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Our Story ↓
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-pink-300 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-pink-300 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}