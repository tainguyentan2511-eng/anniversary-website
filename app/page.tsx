'use client';

import { useState } from 'react';
import IntroScreen from '@/components/IntroScreen';
import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
import Gallery from '@/components/Gallery';
import Countdown from '@/components/Countdown';
import LoveLetter from '@/components/LoveLetter';
import Footer from '@/components/Footer';
import MusicPlayer from '@/components/MusicPlayer';
import FloatingHearts from '@/components/FloatingHearts';
import MysteryGate from '@/components/MysteryGate';
import FinalSurprise from '@/components/FinalSurprise';
import EmotionalInterlude from '@/components/EmotionalInterlude';

export default function Home() {
  const [introFinished, setIntroFinished] = useState(false);
  const [mysteryUnlocked, setMysteryUnlocked] = useState(false);
  const [interludeOpen, setInterludeOpen] = useState(false);
  const [finalUnlocked, setFinalUnlocked] = useState(false);

  const handleIntroFinish = () => {
    setIntroFinished(true);
  };

  return (
    <main className="relative">
      {!introFinished && <IntroScreen onFinish={handleIntroFinish} />}

      {introFinished && (
        <>
          <FloatingHearts />
          <Hero />
          <MysteryGate
            unlocked={mysteryUnlocked}
            onUnlock={() => {
              setMysteryUnlocked(true);
              setInterludeOpen(true);
            }}
          />
          {mysteryUnlocked && (
            <>
              <Timeline />
              <Gallery />
              <Countdown />
              <LoveLetter onRevealFinal={() => setFinalUnlocked(true)} />
              <Footer />
            </>
          )}
          <EmotionalInterlude show={interludeOpen} onContinue={() => setInterludeOpen(false)} />
          <FinalSurprise show={finalUnlocked} onClose={() => setFinalUnlocked(false)} />
          <MusicPlayer />
        </>
      )}
    </main>
  );
}