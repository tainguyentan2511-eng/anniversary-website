'use client';

import { useState } from 'react';
import IntroScreen from '@/components/IntroScreen';
import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
import Gallery from '@/components/Gallery';
import Countdown from '@/components/Countdown';
import LoveLetter from '@/components/LoveLetter';
import Footer from '@/components/Footer';
import ThreeYearsJourney from '@/components/ThreeYearsJourney';
import MusicPlayer from '@/components/MusicPlayer';
import FloatingHearts from '@/components/FloatingHearts';
import MysteryGate from '@/components/MysteryGate';
import FinalSurprise from '@/components/FinalSurprise';
import EmotionalInterlude from '@/components/EmotionalInterlude';

export default function Home() {
  const [introFinished, setIntroFinished] = useState(false);
  const [mysteryUnlocked, setMysteryUnlocked] = useState(false);
  const [interludeOpen, setInterludeOpen] = useState(false);
  const [sceneStep, setSceneStep] = useState(0);
  const [timelineTouched, setTimelineTouched] = useState(false);
  const [galleryMilestoneUnlocked, setGalleryMilestoneUnlocked] = useState(false);
  const [finalUnlocked, setFinalUnlocked] = useState(false);

  const handleIntroFinish = () => {
    setIntroFinished(true);
  };

  return (
    <main className="relative">
      {!introFinished && <IntroScreen onFinish={handleIntroFinish} />}
      <MusicPlayer />
      {introFinished && (
        <>
          <FloatingHearts />
          <Hero />
          <MysteryGate
            unlocked={mysteryUnlocked}
            onUnlock={() => {
              setMysteryUnlocked(true);
              setInterludeOpen(true);
              setSceneStep(0);
            }}
          />
          {mysteryUnlocked && !interludeOpen && (
            <>
              {sceneStep >= 0 && <Timeline onFirstInteraction={() => setTimelineTouched(true)} />}
              {sceneStep === 0 && timelineTouched && (
                <div className="py-8 px-6 text-center bg-luxury-cream">
                  <button
                    type="button"
                    onClick={() => setSceneStep(1)}
                    className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white"
                  >
                    Open Memory Archive
                  </button>
                </div>
              )}

              {sceneStep >= 1 && <Gallery onMilestoneUnlock={() => setGalleryMilestoneUnlocked(true)} />}
              {sceneStep === 1 && galleryMilestoneUnlocked && (
                <div className="py-8 px-6 text-center bg-luxury-cream">
                  <button
                    type="button"
                    onClick={() => setSceneStep(2)}
                    className="px-8 py-3 rounded-full bg-luxury-black text-luxury-cream"
                  >
                    Read The Quiet Part
                  </button>
                </div>
              )}

              {sceneStep >= 2 && (
                <>
                  <Countdown />
                  <LoveLetter onRevealFinal={() => setFinalUnlocked(true)} />
                  <ThreeYearsJourney />
                  <Footer />
                </>
              )}
            </>
          )}
          <EmotionalInterlude show={interludeOpen} onContinue={() => setInterludeOpen(false)} />
          <FinalSurprise show={finalUnlocked} onClose={() => setFinalUnlocked(false)} />
        </>
      )}
    </main>
  );
}