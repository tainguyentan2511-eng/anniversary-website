'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [showPrompt, setShowPrompt] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Try to auto-play on mount
  useEffect(() => {
    const attemptAutoPlay = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
          setShowPrompt(false);
        } catch (error) {
          // Browser blocked autoplay - show prompt
          setShowPrompt(true);
        }
      }
    };

    // Small delay then try
    const timer = setTimeout(attemptAutoPlay, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = async () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
        setShowPrompt(false);
        return;
      }

      try {
        await audioRef.current.play();
        setIsPlaying(true);
        setShowPrompt(false);
      } catch (error) {
        setIsPlaying(false);
        setShowPrompt(true);
      }
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music/Perfect.mp3" type="audio/mpeg" />
      </audio>

      {/* Autoplay prompt overlay */}
      <AnimatePresence>
        {showPrompt && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-center justify-center"
            onClick={togglePlay}
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              className="bg-white rounded-3xl p-8 md:p-12 text-center max-w-md mx-4 shadow-2xl cursor-pointer"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-6xl mb-4"
              >
                🎵
              </motion.div>
              <h3 className="text-3xl font-elegant font-bold text-rose-gold mb-3">
                Welcome to Our Story
              </h3>
              <p className="text-gray-600 mb-6 font-elegant">
                Click anywhere to start the music and explore our love story
              </p>
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full text-white font-elegant font-semibold text-lg hover:from-pink-600 hover:to-rose-600 transition-all shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                💕 Enter
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Music player control */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isPlaying || !showPrompt ? 1 : 0, y: isPlaying || !showPrompt ? 0 : 20 }}
        transition={{ duration: 0.4 }}
        className="fixed bottom-5 right-5 z-50"
      >
        <div className="group flex items-center gap-2 px-3 py-2 rounded-full
          bg-white/70 backdrop-blur-md shadow-lg border border-white/40">

          {/* Play / Pause */}
          <motion.button
            onClick={togglePlay}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            className="w-9 h-9 flex items-center justify-center rounded-full 
            bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow"
          >
            {isPlaying ? (
              <span className="text-sm">❚❚</span>
            ) : (
              <span className="text-sm ml-[2px]">▶</span>
            )}
          </motion.button>

          {/* Dot animation (thay icon nhạc) */}
          {isPlaying && (
            <motion.div
              className="w-2 h-2 rounded-full bg-rose-400"
              animate={{ scale: [1, 1.6, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          )}

          {/* Volume - chỉ hiện khi hover */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileHover={{ width: 70, opacity: 1 }}
            className="overflow-hidden group-hover:w-[70px] group-hover:opacity-100 transition-all duration-300"
          >
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-[70px] accent-rose-400"
            />
          </motion.div>
        </div>

        {/* Tooltip nhỏ gọn */}
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-12 right-0 text-[11px] px-2 py-1 
            bg-white/80 backdrop-blur rounded-md shadow text-gray-600"
          >
            ♪ Playing
          </motion.div>
        )}
      </motion.div>
    </>
  );
}