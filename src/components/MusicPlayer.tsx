import { useState, useRef, useEffect } from 'react';
import { Heart, Music, Pause, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Música local (coloca tu archivo en: /public/music/romantica.wav)
// Si prefieres .mp3, reemplaza el archivo y cambia la extensión aquí.
const MUSIC_URL = '/music/musica.mp3';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(MUSIC_URL);
    audio.loop = true;
    audio.volume = 0.5;

    const onCanPlayThrough = () => setIsLoaded(true);
    const onError = () => setIsLoaded(false);

    audio.addEventListener('canplaythrough', onCanPlayThrough);
    audio.addEventListener('error', onError);
    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('canplaythrough', onCanPlayThrough);
        audioRef.current.removeEventListener('error', onError);
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      // En algunos navegadores play() retorna una promesa.
      void audioRef.current.play().catch(() => {
        // Si falla (autoplay policy o archivo no cargado), no cambiamos el estado.
        setIsPlaying(false);
      });
    }
    setIsPlaying(prev => !prev);
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: 'spring' }}
      onClick={togglePlay}
      className="music-button group"
      aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
    >
      <AnimatePresence mode="wait">
        {isPlaying ? (
          <motion.div
            key="pause"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            <Pause className="w-6 h-6 text-foreground" />
          </motion.div>
        ) : (
          <motion.div
            key="play"
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: -180 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-1"
          >
            <Music className="w-6 h-6 text-foreground" />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-1 bg-white/90 text-foreground rounded-full text-sm font-body whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
        {isPlaying ? 'Pausar' : 'Reproducir música'}
      </span>

      {/* Ripple effect when playing */}
      {isPlaying && (
        <>
          <span className="absolute inset-0 rounded-full bg-white/30 animate-ping" />
          <span className="absolute inset-0 rounded-full bg-white/20 animate-pulse" />
        </>
      )}
    </motion.button>
  );
};

export default MusicPlayer;
