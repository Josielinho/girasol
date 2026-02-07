import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Sunflower } from './FloatingSunflowers';

const ValentineQuestion = () => {
  const [answered, setAnswered] = useState(false);
  const [response, setResponse] = useState('');

  const launchConfetti = () => {
    // Sunflower & heart colors confetti burst
    const defaults = {
      spread: 360,
      ticks: 100,
      gravity: 0.5,
      decay: 0.94,
      startVelocity: 30,
      colors: ['#FFD700', '#FFC107', '#FFB300', '#FFB6C1', '#FF69B4', '#FF85A2', '#FFEB3B'],
    };

    const shoot = () => {
      confetti({
        ...defaults,
        particleCount: 50,
        scalar: 1.2,
        shapes: ['circle'],
        origin: { x: 0.5, y: 0.5 },
      });

      confetti({
        ...defaults,
        particleCount: 30,
        scalar: 0.8,
        shapes: ['circle'],
        origin: { x: Math.random(), y: Math.random() - 0.2 },
      });
    };

    // Multiple bursts
    shoot();
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
    setTimeout(shoot, 400);

    // Side cannons
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#FFD700', '#FFC107', '#FFB6C1', '#FF69B4'],
    });
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#FFD700', '#FFC107', '#FFB6C1', '#FF69B4'],
    });
  };

  const handleYes = (responseText: string) => {
    setResponse(responseText);
    setAnswered(true);
    launchConfetti();

    // Keep confetti going for a bit
    const interval = setInterval(() => {
      confetti({
        particleCount: 20,
        spread: 70,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
        colors: ['#FFD700', '#FFC107', '#FFB6C1', '#FF69B4', '#FFEB3B'],
      });
    }, 500);

    setTimeout(() => clearInterval(interval), 3000);
  };

  return (
    <section className="min-h-screen py-24 px-6 bg-soft-gradient flex items-center justify-center relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div
            key={`sunflower-${i}`}
            className="absolute opacity-10"
            style={{
              left: `${15 + (i * 25)}%`,
              top: `${15 + ((i % 2) * 60)}%`,
            }}
          >
            <Sunflower size={60 + (i * 10)} className="animate-sway" />
          </div>
        ))}
        {[...Array(4)].map((_, i) => (
          <Heart
            key={`heart-${i}`}
            className="absolute"
            style={{
              left: `${8 + (i * 28)}%`,
              top: `${35 + ((i % 2) * 30)}%`,
              width: `${25 + (i % 2) * 15}px`,
              height: `${25 + (i % 2) * 15}px`,
              color: 'hsl(350, 60%, 65%)',
              fill: 'hsl(350, 60%, 65%)',
              opacity: 0.12,
              animation: `float-heart ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <AnimatePresence mode="wait">
          {!answered ? (
            <motion.div
              key="question"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="mb-8 flex items-center justify-center gap-4"
              >
                <Sunflower size={50} className="animate-sway" />
                <Heart className="w-16 h-16 animate-heart-beat" style={{ color: 'hsl(350, 65%, 55%)', fill: 'hsl(350, 65%, 55%)' }} />
                <Sunflower size={50} className="animate-sway" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="font-romantic text-4xl md:text-6xl lg:text-7xl text-gradient-romantic mb-12 leading-tight"
              >
                ¿Quieres ser mi San Valentín?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="font-elegant text-xl md:text-2xl text-muted-foreground mb-12 italic"
              >
                🌻💛 ¿Por que lo piensas tanto?, vamos, acepta💛🌻
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <button
                  onClick={() => handleYes('¡Me elegistes bien como novio, te amo!')}
                  className="btn-romantic min-w-[200px] flex items-center justify-center gap-2 group"
                >
                  <span>Sí</span>
                  <Heart className="w-5 h-5 group-hover:animate-heart-beat" style={{ fill: 'hsl(35, 50%, 20%)' }} />
                </button>

                <button
                  onClick={() => handleYes('¡ MI BEBE GRANDOTAA!')}
                  className="btn-romantic-secondary min-w-[200px] flex items-center justify-center gap-2 group"
                >
                  <span>¡Obvio que sí!</span>
                  <Sparkles className="w-5 h-5 group-hover:animate-pulse" />
                </button>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="response"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="relative"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 0.8,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
                className="mb-8 flex items-center justify-center gap-4"
              >
                <Sunflower size={50} />
                <Heart className="w-24 h-24 drop-shadow-lg" style={{ color: 'hsl(350, 65%, 55%)', fill: 'hsl(350, 65%, 55%)' }} />
                <Sunflower size={50} />
              </motion.div>

              <h2 className="font-romantic text-5xl md:text-7xl text-gradient-romantic mb-6">
                ¡Sííí!
              </h2>

              <p className="font-elegant text-2xl md:text-3xl text-foreground/80 mb-4">
                {response}
              </p>

              <p className="font-body text-xl text-muted-foreground mb-8">
                ¡Hare que pasemos el mejor san valentin que hemos tenido! 🌻💕
              </p>

              <div className="flex justify-center items-center gap-4">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [-5, 5, -5],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  >
                    {i % 2 === 0 ? (
                      <Sunflower size={40} />
                    ) : (
                      <Heart className="w-8 h-8" style={{ color: 'hsl(350, 65%, 55%)', fill: 'hsl(350, 65%, 55%)' }} />
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="font-romantic text-3xl mt-12"
                style={{ color: 'hsl(350, 60%, 50%)' }}
              >
                Te amo infinitamente 🌻❤️
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ValentineQuestion;
