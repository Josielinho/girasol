import FloatingHearts from '@/components/FloatingHearts';
import FloatingSunflowers from '@/components/FloatingSunflowers';
import MusicPlayer from '@/components/MusicPlayer';
import HeroSection from '@/components/HeroSection';
import PhotoGallery from '@/components/PhotoGallery';
import LoveMessage from '@/components/LoveMessage';
import ValentineQuestion from '@/components/ValentineQuestion';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background floating elements */}
      <FloatingHearts />
      <FloatingSunflowers />
      
      {/* Music player - floating button */}
      <MusicPlayer />
      
      {/* Main sections */}
      <main>
        <HeroSection />
        <PhotoGallery />
        <LoveMessage />
        <ValentineQuestion />
      </main>

      {/* Footer */}
      <footer className="py-8 text-center bg-romantic">
        <p className="font-romantic text-xl text-foreground/70">
          Si te gusto hazmelo saber con un beso 🌻💕
        </p>
      </footer>
    </div>
  );
};

export default Index;
