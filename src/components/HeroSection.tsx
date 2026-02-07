import { motion } from 'framer-motion';
import { Heart, ChevronDown } from 'lucide-react';
import { Sunflower } from './FloatingSunflowers';

const HeroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('photos');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-romantic opacity-80" />
      
      {/* Decorative sunflowers */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
        animate={{ opacity: 0.25, scale: 1, rotate: -15 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="absolute top-16 left-6 md:left-16"
      >
        <Sunflower size={80} className="animate-sway" />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.5, rotate: 20 }}
        animate={{ opacity: 0.2, scale: 1, rotate: 12 }}
        transition={{ duration: 1.2, delay: 0.7 }}
        className="absolute top-24 right-6 md:right-20"
      >
        <Sunflower size={60} className="animate-sway" />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.9 }}
        className="absolute bottom-32 left-10"
      >
        <Sunflower size={50} className="animate-sway" />
      </motion.div>
      
      {/* Decorative hearts */}
      <div className="absolute bottom-40 right-12 opacity-20">
        <Heart className="w-12 h-12" style={{ color: 'hsl(350, 60%, 65%)', fill: 'hsl(350, 60%, 65%)' }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <Sunflower size={40} />
          <Heart className="w-10 h-10 animate-heart-beat" style={{ color: 'hsl(350, 65%, 60%)', fill: 'hsl(350, 65%, 60%)' }} />
          <Sunflower size={40} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-romantic text-5xl md:text-7xl lg:text-8xl text-gradient-romantic mb-8 leading-tight"
        >
          Feliz cumpleaño orejita de tinker bell
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-elegant text-2xl md:text-3xl text-foreground/80 italic mb-4"
        >
          ojitos lindos...
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mt-8"
        >
          Cuando vayas bajando, no olvides que cada latido de tu corazón es mío. Dedícamelos todos, uno por uno.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-12 flex justify-center items-center gap-3"
        >
          <Sunflower size={24} className="opacity-60" />
          <Heart className="w-5 h-5" style={{ color: 'hsl(350, 60%, 65%)', fill: 'hsl(350, 60%, 65%)' }} />
          <Sunflower size={24} className="opacity-60" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-primary/80 hover:text-primary transition-colors cursor-pointer"
      >
        <span className="font-body text-sm mb-2">Descubre más</span>
        <ChevronDown className="w-6 h-6 animate-gentle-bounce" />
      </motion.button>
    </section>
  );
};

export default HeroSection;
