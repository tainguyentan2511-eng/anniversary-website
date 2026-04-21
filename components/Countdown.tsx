'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { coupleInfo } from '@/data/memories';

interface TimeLeft {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const startDate = new Date(coupleInfo.anniversaryDate);
      const now = new Date();
      const nextAnniversary = new Date(
        now.getFullYear(),
        startDate.getMonth(),
        startDate.getDate()
      );
      
      // If this year's anniversary has passed, calculate for next year
      if (nextAnniversary < now) {
        nextAnniversary.setFullYear(nextAnniversary.getFullYear() + 1);
      }

      const difference = nextAnniversary.getTime() - now.getTime();

      if (difference > 0) {
        const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
        const months = Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ years, months, days, hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  // Calendar-accurate "years together" to avoid off-by-one before anniversary day.
  const today = new Date();
  const start = new Date(coupleInfo.anniversaryDate);
  const hasPassedThisYear =
    today.getMonth() > start.getMonth() ||
    (today.getMonth() === start.getMonth() && today.getDate() >= start.getDate());
  const yearsTogether = today.getFullYear() - start.getFullYear() - (hasPassedThisYear ? 0 : 1);

  const timeUnits = [
    { label: 'Years', value: timeLeft.years, icon: '💕' },
    { label: 'Months', value: timeLeft.months, icon: '🌙' },
    { label: 'Days', value: timeLeft.days, icon: '☀️' },
    { label: 'Hours', value: timeLeft.hours, icon: '⏰' },
    { label: 'Minutes', value: timeLeft.minutes, icon: '⏱️' },
    { label: 'Seconds', value: timeLeft.seconds, icon: '✨' },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-rose-gold/10 via-pink-50 to-rose-gold/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-pink-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-rose-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-2xl font-script text-rose-gold mb-2">Together for</p>
          <h2 className="text-6xl md:text-7xl font-elegant font-bold text-rose-gold mb-4 glow">
            {yearsTogether} Years
          </h2>
          <p className="text-xl text-gray-600 font-elegant">
            And counting every moment until our next anniversary 💕
          </p>
        </motion.div>

        {/* Countdown cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-pink-100"
            >
              <div className="text-3xl mb-2">{unit.icon}</div>
              <motion.div
                key={unit.value}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-4xl md:text-5xl font-elegant font-bold text-rose-gold mb-2"
              >
                {unit.value}
              </motion.div>
              <p className="text-gray-600 font-elegant text-sm md:text-base">
                {unit.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Special message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full">
            <p className="text-lg font-elegant text-rose-gold">
              ♥ Every second with you is a gift ♥
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}