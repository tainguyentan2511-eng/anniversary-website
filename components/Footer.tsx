'use client';

import { motion } from 'framer-motion';
import { coupleInfo } from '@/data/memories';

export default function Footer() {
  const today = new Date();
  const start = new Date(coupleInfo.anniversaryDate);
  const hasPassedThisYear =
    today.getMonth() > start.getMonth() ||
    (today.getMonth() === start.getMonth() && today.getDate() >= start.getDate());
  const yearsTogether = today.getFullYear() - start.getFullYear() - (hasPassedThisYear ? 0 : 1);

  return (
    <footer className="py-12 px-4 bg-gradient-to-b from-blush to-pink-100">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heart animation */}
        <motion.div
          className="text-5xl mb-6"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          💕
        </motion.div>

        {/* Main message */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-elegant font-bold text-rose-gold mb-4"
        >
          {yearsTogether} Years Down, Forever to Go
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl font-script text-gray-700 mb-8"
        >
          Thank you for being my everything 💖
        </motion.p>

        {/* Divider */}
        <div className="w-48 h-1 bg-gradient-to-r from-transparent via-rose-gold to-transparent mx-auto mb-8" />

        {/* Names */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <p className="text-4xl md:text-5xl font-script text-rose-gold">
            {coupleInfo.name1} <span className="text-3xl text-deep-rose">♥</span> {coupleInfo.name2}
          </p>
          <p className="text-gray-600 font-elegant mt-2">
            Since {new Date(coupleInfo.anniversaryDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="italic text-gray-600 max-w-xl mx-auto mb-8 text-lg"
        >
          "Whatever our souls are made of, his and mine are the same."
          <footer className="text-sm mt-2 text-gray-500">— Emily Brontë</footer>
        </motion.blockquote>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-pink-200 pt-6"
        >
          <p className="text-gray-500 text-sm">
            Made with ♥ | Happy 3rd Anniversary | {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}