import { motion } from 'framer-motion';

interface SunflowerProps {
  size?: number;
  className?: string;
}

const Sunflower = ({ size = 60, className = '' }: SunflowerProps) => {
  const petalCount = 12;
  const petals = Array.from({ length: petalCount }, (_, i) => i);
  
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
    >
      {/* Outer petals */}
      {petals.map((i) => (
        <ellipse
          key={`outer-${i}`}
          cx="50"
          cy="20"
          rx="8"
          ry="18"
          fill="hsl(48, 95%, 55%)"
          transform={`rotate(${i * 30} 50 50)`}
          style={{
            filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))',
          }}
        />
      ))}
      
      {/* Inner petals layer */}
      {petals.map((i) => (
        <ellipse
          key={`inner-${i}`}
          cx="50"
          cy="25"
          rx="6"
          ry="14"
          fill="hsl(45, 90%, 50%)"
          transform={`rotate(${i * 30 + 15} 50 50)`}
        />
      ))}
      
      {/* Center of sunflower */}
      <circle cx="50" cy="50" r="18" fill="hsl(30, 70%, 30%)" />
      <circle cx="50" cy="50" r="14" fill="hsl(25, 65%, 25%)" />
      
      {/* Seeds pattern */}
      {Array.from({ length: 8 }).map((_, i) => (
        <circle
          key={`seed-${i}`}
          cx={50 + Math.cos(i * 0.785) * 8}
          cy={50 + Math.sin(i * 0.785) * 8}
          r="2"
          fill="hsl(35, 60%, 35%)"
        />
      ))}
    </svg>
  );
};

interface FloatingSunflowerProps {
  delay?: number;
  duration?: number;
  left: number;
  size?: number;
}

const FloatingSunflower = ({ delay = 0, duration = 20, left, size = 40 }: FloatingSunflowerProps) => (
  <motion.div
    className="absolute"
    initial={{ y: '110vh', rotate: 0, opacity: 0 }}
    animate={{ 
      y: '-10vh', 
      rotate: 360,
      opacity: [0, 0.8, 0.8, 0]
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: 'linear',
    }}
    style={{ left: `${left}%` }}
  >
    <Sunflower size={size} className="animate-sway" />
  </motion.div>
);

const FloatingSunflowers = () => {
  const sunflowers = [
    { left: 5, delay: 0, duration: 18, size: 35 },
    { left: 15, delay: 4, duration: 22, size: 45 },
    { left: 25, delay: 8, duration: 20, size: 30 },
    { left: 45, delay: 2, duration: 25, size: 40 },
    { left: 60, delay: 6, duration: 19, size: 35 },
    { left: 75, delay: 10, duration: 23, size: 50 },
    { left: 85, delay: 3, duration: 21, size: 38 },
    { left: 92, delay: 7, duration: 24, size: 32 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {sunflowers.map((flower, index) => (
        <FloatingSunflower key={index} {...flower} />
      ))}
    </div>
  );
};

export { Sunflower, FloatingSunflower };
export default FloatingSunflowers;
