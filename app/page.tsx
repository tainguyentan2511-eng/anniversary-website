import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
import Gallery from '@/components/Gallery';
import Countdown from '@/components/Countdown';
import LoveLetter from '@/components/LoveLetter';
import Footer from '@/components/Footer';
import MusicPlayer from '@/components/MusicPlayer';
import FloatingHearts from '@/components/FloatingHearts';

export default function Home() {
  return (
    <main className="relative">
      <FloatingHearts />
      <Hero />
      <Timeline />
      <Gallery />
      <Countdown />
      <LoveLetter />
      <Footer />
      <MusicPlayer />
    </main>
  );
}