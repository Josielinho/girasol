import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface FloatingHeart {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
  isRose: boolean;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    const generateHearts = () => {
      const newHearts: FloatingHeart[] = [];
      for (let i = 0; i < 10; i++) {
        newHearts.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 10,
          duration: 14 + Math.random() * 10,
          size: 10 + Math.random() * 14,
          opacity: 0.25 + Math.random() * 0.35,
          isRose: Math.random() > 0.5,
        });
      }
      setHearts(newHearts);
    };

    generateHearts();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float-up"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            opacity: heart.opacity,
          }}
        >
          <Heart
            className={heart.isRose ? "text-rose-medium fill-rose-medium" : "text-primary fill-primary"}
            style={{ 
              width: heart.size, 
              height: heart.size,
              color: heart.isRose ? 'hsl(350, 60%, 70%)' : 'hsl(45, 90%, 50%)',
              fill: heart.isRose ? 'hsl(350, 60%, 70%)' : 'hsl(45, 90%, 50%)',
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
