'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { photos } from '@/data/memories';
import { STORY_EXPERIENCE_CONFIG } from '@/config/storyExperience';

type YearId = '2024' | '2025' | '2026';

type Chapter = {
  year: YearId;
  title: string;
  subtitle: string;
  mood: string;
  palette: string;
  description: string;
  slides: Array<{
    id: string;
    src: string;
    alt: string;
    quote: string;
  }>;
};

const chapters: Chapter[] = [
  {
    year: '2024',
    title: 'Bat Dau',
    subtitle: 'The Tender Spark',
    mood: 'de thuong, moi me',
    palette: 'from-pink-300/30 via-fuchsia-200/20 to-purple-300/30',
    description:
      'Nam nay la luc minh bat dau biet nho nhau, biet doi nhau, va biet yeu nhau theo cach rat nhe.',
    slides: [
      { id: '2024-1', src: photos[0]?.src ?? '', alt: '2024 Memory 1', quote: 'Ba nam... khong dai, nhung du de hoa thanh dieu ky dieu.' },
      { id: '2024-2', src: photos[1]?.src ?? '', alt: '2024 Memory 2', quote: 'Nhu the the gioi nho lai, chi con anh va em.' },
      { id: '2024-3', src: photos[2]?.src ?? '', alt: '2024 Memory 3', quote: 'Tung ngay nho deu dep theo cach rat rieng.' },
      { id: '2024-4', src: photos[3]?.src ?? '', alt: '2024 Memory 4', quote: 'Lan dau nam tay, tim anh biet minh da tim dung nguoi.' },
      { id: '2024-5', src: photos[4]?.src ?? '', alt: '2024 Memory 5', quote: 'Mua nao cung dep, vi co em di qua cung.' },
    ],
  },
  {
    year: '2025',
    title: 'Gan Ket',
    subtitle: 'The Warm Rhythm',
    mood: 'on dinh, day ky niem',
    palette: 'from-amber-300/30 via-orange-200/20 to-rose-300/30',
    description:
      'Minh biet cach giu nhau sau nhung ngay dai. Nhung dieu binh thuong tro thanh dieu dang nho.',
    slides: [
      { id: '2025-1', src: photos[5]?.src ?? '', alt: '2025 Memory 1', quote: 'Khong can dieu lon lao, chi can di cung nhau la du.' },
      { id: '2025-2', src: photos[6]?.src ?? '', alt: '2025 Memory 2', quote: 'Binh yen nhat la luc co nhau trong ngay dai.' },
      { id: '2025-3', src: photos[7]?.src ?? '', alt: '2025 Memory 3', quote: 'Mot cai om dung luc co the lam tan ca the gioi met moi.' },
      { id: '2025-4', src: photos[8]?.src ?? '', alt: '2025 Memory 4', quote: 'Moi cung duong deu dep khi em o ben.' },
      { id: '2025-5', src: photos[9]?.src ?? '', alt: '2025 Memory 5', quote: 'Ky niem dep nhat la nhung lan minh cuoi cung nhau.' },
    ],
  },
  {
    year: '2026',
    title: 'Hien Tai',
    subtitle: 'The Deep Promise',
    mood: 'sau sac, truong thanh',
    palette: 'from-indigo-400/30 via-violet-300/20 to-slate-500/30',
    description:
      'Tinh cam cua minh khong con la cam xuc thoang qua. Day la su lua chon moi ngay, that long va ben bi.',
    slides: [
      { id: '2026-1', src: photos[10]?.src ?? '', alt: '2026 Memory 1', quote: 'Yeu em khong phai khoanh khac, ma la hanh trinh.' },
      { id: '2026-2', src: photos[11]?.src ?? '', alt: '2026 Memory 2', quote: 'Cang di qua nhieu, anh cang chac chan minh thuoc ve nhau.' },
      { id: '2026-3', src: photos[3]?.src ?? '', alt: '2026 Memory 3', quote: 'Du mai sau co ra sao, anh van muon em la diem ve.' },
      { id: '2026-4', src: photos[1]?.src ?? '', alt: '2026 Memory 4', quote: 'Khong can hoan hao, chi can la chung ta, that long.' },
      { id: '2026-5', src: photos[0]?.src ?? '', alt: '2026 Memory 5', quote: 'Va anh van muon tiep tuc... them rat nhieu nam nua.' },
    ],
  },
];

const yearOrder: YearId[] = ['2024', '2025', '2026'];
const { STORAGE_KEYS, BPM: BPM_CONFIG, FX_VOLUME: FX_VOLUME_CONFIG, TIMING, TONE } =
  STORY_EXPERIENCE_CONFIG;

export default function ThreeYearsJourney() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorLockRef = useRef(false);
  const [activeYear, setActiveYear] = useState<YearId>('2024');
  const [slideIndex, setSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);
  const [finalStage, setFinalStage] = useState(0);
  const [autoYearSwitchEnabled, setAutoYearSwitchEnabled] = useState(true);
  const [typedText, setTypedText] = useState('');
  const [beatPulse, setBeatPulse] = useState(0);
  const [soundFxEnabled, setSoundFxEnabled] = useState(true);
  const [fxVolume, setFxVolume] = useState(FX_VOLUME_CONFIG.DESKTOP);
  const [bpm, setBpm] = useState(BPM_CONFIG.DEFAULT);
  const finalQuote = 'Mai ve sau, anh van chon em nhu ngay dau tien.';

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const storedSoundFx = window.localStorage.getItem(STORAGE_KEYS.SOUND_FX);
    const storedBpm = window.localStorage.getItem(STORAGE_KEYS.BPM);

    if (storedSoundFx === 'true' || storedSoundFx === 'false') {
      setSoundFxEnabled(storedSoundFx === 'true');
    }
    if (storedBpm) {
      const parsed = Number(storedBpm);
      if (!Number.isNaN(parsed) && parsed >= BPM_CONFIG.MIN && parsed <= BPM_CONFIG.MAX) {
        setBpm(parsed);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(STORAGE_KEYS.SOUND_FX, String(soundFxEnabled));
  }, [soundFxEnabled]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(STORAGE_KEYS.BPM, String(bpm));
  }, [bpm]);

  const activeChapter = useMemo(
    () => chapters.find((c) => c.year === activeYear) ?? chapters[0],
    [activeYear],
  );

  useEffect(() => {
    setSlideIndex(0);
    setFinished(false);
    setFinalStage(0);
  }, [activeYear]);

  useEffect(() => {
    if (isPaused || finished) return;

    const timer = setInterval(() => {
      setSlideIndex((prev) => {
        const next = prev + 1;
        if (next >= activeChapter.slides.length) {
          setFinished(true);
          return prev;
        }
        return next;
      });
    }, TIMING.SLIDE_AUTOPLAY_MS);

    return () => clearInterval(timer);
  }, [activeChapter.slides.length, finished, isPaused]);

  useEffect(() => {
    if (isPaused) return;
    const interval = Math.max(TIMING.MIN_BEAT_INTERVAL_MS, Math.floor(60000 / bpm));
    const beatTimer = setInterval(() => {
      setBeatPulse((v) => v + 1);
    }, interval);
    return () => clearInterval(beatTimer);
  }, [bpm, isPaused]);

  useEffect(() => {
    const updateFxVolume = () => {
      if (typeof window === 'undefined') return;
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      setFxVolume(isMobile ? FX_VOLUME_CONFIG.MOBILE : FX_VOLUME_CONFIG.DESKTOP);
    };
    updateFxVolume();
    window.addEventListener('resize', updateFxVolume);
    return () => window.removeEventListener('resize', updateFxVolume);
  }, []);

  const playSoftTone = (frequency: number, duration = TIMING.TONE_TRANSITION_DURATION_S) => {
    if (!soundFxEnabled) return;
    if (typeof window === 'undefined') return;
    if (oscillatorLockRef.current) return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new window.AudioContext();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        void ctx.resume();
      }

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      oscillatorLockRef.current = true;
      osc.type = 'sine';
      osc.frequency.value = frequency;
      gain.gain.value = 0.0001;
      gain.gain.exponentialRampToValueAtTime(fxVolume, ctx.currentTime + TIMING.TONE_ATTACK_S);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
      osc.onended = () => {
        oscillatorLockRef.current = false;
        osc.disconnect();
        gain.disconnect();
      };
    } catch {
      oscillatorLockRef.current = false;
      // Ignore if browser blocks audio context.
    }
  };

  const playClickTone = () => playSoftTone(TONE.CLICK_HZ, TIMING.TONE_CLICK_DURATION_S);
  const playTransitionTone = () =>
    playSoftTone(TONE.TRANSITION_HZ, TIMING.TONE_TRANSITION_DURATION_S);

  useEffect(() => {
    if (!finished) return;
    const t1 = setTimeout(() => setFinalStage(1), TIMING.FINAL_STAGE_1_DELAY_MS);
    const t2 = setTimeout(() => setFinalStage(2), TIMING.FINAL_STAGE_2_DELAY_MS);
    const t3 = setTimeout(() => setFinalStage(3), TIMING.FINAL_STAGE_3_DELAY_MS);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [finished]);

  useEffect(() => {
    if (finalStage < 3) {
      setTypedText('');
      return;
    }

    let index = 0;
    const timer = setInterval(() => {
      index += 1;
      setTypedText(finalQuote.slice(0, index));
      if (index >= finalQuote.length) {
        clearInterval(timer);
      }
    }, TIMING.TYPEWRITER_MS);

    return () => clearInterval(timer);
  }, [finalStage]);

  useEffect(() => {
    if (!autoYearSwitchEnabled) return;

    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      const total = rect.height + viewHeight;
      const progressed = Math.min(Math.max((viewHeight - rect.top) / total, 0), 1);

      if (progressed < 0.34) {
        setActiveYear('2024');
      } else if (progressed < 0.67) {
        setActiveYear('2025');
      } else {
        setActiveYear('2026');
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [autoYearSwitchEnabled]);

  const progress = ((slideIndex + 1) / activeChapter.slides.length) * 100;
  const activeSlide = activeChapter.slides[slideIndex];

  const goNextYear = () => {
    const idx = yearOrder.findIndex((y) => y === activeYear);
    if (idx < yearOrder.length - 1) {
      setActiveYear(yearOrder[idx + 1]);
      playTransitionTone();
    }
  };

  const goPrevYear = () => {
    const idx = yearOrder.findIndex((y) => y === activeYear);
    if (idx > 0) {
      setActiveYear(yearOrder[idx - 1]);
      playTransitionTone();
    }
  };

  const replayChapter = () => {
    setSlideIndex(0);
    setFinished(false);
    setFinalStage(0);
    playTransitionTone();
  };

  useEffect(() => {
    if (!finished) return;
    const idx = yearOrder.findIndex((y) => y === activeYear);
    if (idx >= yearOrder.length - 1) return;

    const timer = setTimeout(() => {
      setActiveYear(yearOrder[idx + 1]);
    }, TIMING.AUTO_NEXT_YEAR_DELAY_MS);

    return () => clearTimeout(timer);
  }, [activeYear, finished]);

  useEffect(() => {
    return () => {
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        void audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-28 px-4 md:px-6 bg-luxury-black text-luxury-cream relative overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${activeChapter.palette}`} />
      <motion.div
        key={beatPulse}
        initial={{ opacity: 0.14, scale: 0.96 }}
        animate={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_55%)] pointer-events-none"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              width: (i % 4) + 2,
              height: (i % 4) + 2,
              left: `${(i * 37) % 100}%`,
              top: `${(i * 19) % 100}%`,
            }}
            animate={{ opacity: [0.15, 0.6, 0.15], y: [0, -14, 0] }}
            transition={{ duration: 3 + (i % 5), repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.45em] text-luxury-cream/50 mb-5">3 Years of Us</p>
          <h2 className="text-4xl md:text-6xl font-elegant mb-4">Hanh trinh ba nam, ba chuong, mot tinh yeu</h2>
          <p className="max-w-2xl mx-auto text-luxury-cream/70">
            Khong phai gallery binh thuong. Day la timeline cam xuc theo nam, voi slideshow cinematic tu dong.
          </p>
        </div>

        <div className="flex items-center justify-between mb-6">
          <button type="button" onClick={goPrevYear} className="px-4 py-2 rounded-full border border-white/20 text-sm hover:bg-white/10 transition-colors">
            Previous
          </button>
          <button
            type="button"
            onClick={() => {
              setAutoYearSwitchEnabled((v) => !v);
              playClickTone();
            }}
            className={`px-4 py-2 rounded-full text-sm border transition-colors ${autoYearSwitchEnabled ? 'border-rose-gold text-rose-gold' : 'border-white/20 text-luxury-cream/70'}`}
          >
            {autoYearSwitchEnabled ? 'Scroll Timeline: ON' : 'Scroll Timeline: OFF'}
          </button>
          <button type="button" onClick={goNextYear} className="px-4 py-2 rounded-full border border-white/20 text-sm hover:bg-white/10 transition-colors">
            Next
          </button>
        </div>

        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-3">
          <button
            type="button"
            onClick={() => {
              setSoundFxEnabled((v) => !v);
              playClickTone();
            }}
            className={`px-4 py-2 rounded-full text-sm border transition-colors ${
              soundFxEnabled ? 'border-rose-gold text-rose-gold' : 'border-white/20 text-luxury-cream/70'
            }`}
          >
            Sound FX: {soundFxEnabled ? 'ON' : 'OFF'}
          </button>
          <div className="px-4 py-2 rounded-full border border-white/20 text-sm text-luxury-cream/80 text-center">
            FX Volume: {fxVolume.toFixed(3)}
          </div>
          <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/20">
            <span className="text-xs uppercase tracking-[0.2em] text-luxury-cream/70">BPM</span>
            <input
              type="range"
              min={BPM_CONFIG.MIN}
              max={BPM_CONFIG.MAX}
              value={bpm}
              onChange={(e) => setBpm(Number(e.target.value))}
              className="w-full accent-rose-500"
            />
            <span className="text-sm text-rose-gold">{bpm}</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 md:gap-4 mb-10">
          {chapters.map((chapter) => (
            <button
              key={chapter.year}
              type="button"
              onClick={() => {
                setActiveYear(chapter.year);
                setAutoYearSwitchEnabled(false);
                playClickTone();
              }}
              className={`rounded-2xl border px-3 py-4 md:py-5 text-center transition-all ${
                activeYear === chapter.year
                  ? 'bg-white/15 border-rose-gold shadow-[0_0_30px_rgba(183,110,115,0.45)]'
                  : 'bg-white/5 border-white/15 hover:bg-white/10'
              }`}
            >
              <div className="text-lg md:text-2xl font-elegant">{chapter.year}</div>
              <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-luxury-cream/70">{chapter.title}</div>
            </button>
          ))}
        </div>

        <div
          className="relative rounded-3xl overflow-hidden border border-white/10 bg-black/20 backdrop-blur-md"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="p-5 md:p-7 border-b border-white/10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-luxury-cream/60 mb-2">Chapter {activeChapter.year}</p>
              <h3 className="text-3xl md:text-4xl font-elegant">{activeChapter.subtitle}</h3>
              <p className="text-luxury-cream/70 mt-2 max-w-2xl">{activeChapter.description}</p>
            </div>
            <div className="text-xs uppercase tracking-[0.25em] text-luxury-cream/50">Mood: {activeChapter.mood}</div>
          </div>

          <div className="relative aspect-[16/9]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.id}
                initial={{ opacity: 0, scale: 1.08, filter: 'blur(10px)', y: 20 }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 }}
                exit={{ opacity: 0, scale: 1.03, filter: 'blur(8px)' }}
                transition={{ duration: 1.1, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <motion.img
                  src={activeSlide.src}
                  alt={activeSlide.alt}
                  className="w-full h-full object-cover cursor-zoom-in"
                  onClick={() => setLightboxSrc(activeSlide.src)}
                  animate={{ scale: [1, 1.05, 1.02] }}
                  transition={{ duration: 5.8, ease: 'easeInOut' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
                  <p className="text-luxury-cream text-lg md:text-2xl font-script max-w-3xl">{activeSlide.quote}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="px-5 md:px-7 py-5 border-t border-white/10">
            <div className="w-full h-1.5 rounded-full bg-white/15 overflow-hidden">
              <motion.div className="h-full bg-gradient-to-r from-rose-gold to-rose-gold-light" animate={{ width: `${progress}%` }} />
            </div>
            <div className="flex items-center justify-between mt-3 text-[11px] uppercase tracking-[0.2em] text-luxury-cream/60">
              <span>Slide {slideIndex + 1}/{activeChapter.slides.length}</span>
              <span>{isPaused ? 'Paused' : 'Auto Playing'}</span>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                type="button"
                onClick={replayChapter}
                className="px-4 py-2 rounded-full border border-white/20 text-xs uppercase tracking-[0.2em] hover:bg-white/10 transition-colors"
              >
                Replay Chapter
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {finished && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-10 rounded-3xl border border-rose-gold/40 bg-black/35 p-8 md:p-10 text-center"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-rose-gold/80 mb-4">Final Whisper</p>
              {finalStage >= 1 && (
                <motion.h4 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-3xl md:text-5xl font-elegant mb-5">
                  Va anh van muon tiep tuc...
                </motion.h4>
              )}
              {finalStage >= 2 && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-3xl mx-auto text-luxury-cream/80 leading-relaxed">
                  Neu em da di het chapter nay, thi bat ngo cuoi cung khong phai mot hieu ung.
                  Do la su that rang anh van muon o ben em trong moi nam sap toi.
                </motion.p>
              )}
              {finalStage >= 3 && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-5 text-rose-gold font-script text-2xl">
                  "{typedText}
                  <span className="animate-pulse">|</span>"
                </motion.p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {lightboxSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[140] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setLightboxSrc(null)}
          >
            <motion.img
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              src={lightboxSrc}
              alt="Expanded memory"
              className="max-w-5xl max-h-[86vh] w-auto h-auto object-contain rounded-xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
