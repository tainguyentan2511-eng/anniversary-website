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
      {/* <AnimatePresence>
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
      </AnimatePresence> */}

      {/* Music player control */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isPlaying || !showPrompt ? 1 : 0, y: isPlaying || !showPrompt ? 0 : 20 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-4 right-4 z-50"
      >
        <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-pink-200 p-2">
          <div className="flex items-center gap-3">
            {/* Play/Pause button */}
            <motion.button
              onClick={togglePlay}
              className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white hover:from-pink-600 hover:to-rose-600 transition-all duration-300 shadow-md"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isPlaying ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              )}
            </motion.button>

            {/* Volume control */}
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-rose-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 11H2a1 1 0 01-1-1V9a1 1 0 011-1h2.586l3.707-5.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
              </svg>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-20 accent-rose-500"
              />
            </div>

            {/* Music note animation when playing */}
            {isPlaying && (
              <motion.div
                className="text-rose-gold text-xl"
                animate={{ y: [-5, 5, -5], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                ♪
              </motion.div>
            )}
          </div>
        </div>

        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isPlaying ? 1 : 0 }}
          className="absolute bottom-16 right-0 bg-white rounded-lg px-3 py-2 shadow-md whitespace-nowrap text-sm text-gray-700"
        >
          🎵 Now Playing: Our Song
        </motion.div>
      </motion.div>
    </>
  );
}