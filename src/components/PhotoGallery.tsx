import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { Sunflower } from './FloatingSunflowers';

interface Photo {
  id: number;
  rotation: number;
  caption: string;
  src: string;
}

const photos: Photo[] = [
  { id: 1, rotation: -5, caption: "Nuestro primer momento juntos 💕", src: "/photos/foto1.jpg" },
  { id: 2, rotation: 3, caption: "Sonrisas que guardaré por siempre 🌻", src: "/photos/foto2.jpg" },
  { id: 3, rotation: -3, caption: "Cada día más enamorado de ti", src: "/photos/foto3.jpg" },
  { id: 4, rotation: 4, caption: "Mi persona favorita 💛", src: "/photos/foto4.jpg" },
  { id: 5, rotation: -4, caption: "Contigo todo es mejor 🌻", src: "/photos/foto5.jpg" },
  { id: 6, rotation: 2, caption: "Mi amor infinito 💕", src: "/photos/foto6.jpg" },
];

// Warm gradient colors for placeholders
const placeholderColors = [
  'from-amber-200 to-yellow-300',
  'from-yellow-200 to-amber-300',
  'from-rose-200 to-pink-300',
  'from-amber-100 to-yellow-200',
  'from-pink-200 to-rose-200',
  'from-yellow-200 to-orange-200',
];

const PhotoGallery = () => {
  return (
    <section id="photos" className="py-20 px-6 bg-soft-gradient relative overflow-hidden">
      {/* Decorative sunflowers */}
      <div className="absolute top-10 left-5 opacity-15">
        <Sunflower size={70} className="animate-sway" />
      </div>
      <div className="absolute bottom-20 right-8 opacity-15">
        <Sunflower size={55} className="animate-sway" />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sunflower size={36} className="opacity-80" />
            <h2 className="font-romantic text-4xl md:text-6xl text-gradient-romantic">
              Nuestros Momentos
            </h2>
            <Sunflower size={36} className="opacity-80" />
          </div>
          <p className="font-elegant text-xl text-muted-foreground italic">
            Cada foto guarda un pedacito de nuestra historia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 50, rotate: photo.rotation }}
              whileInView={{ opacity: 1, y: 0, rotate: photo.rotation }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
              className="polaroid cursor-pointer"
              style={{ '--rotation': `${photo.rotation}deg` } as React.CSSProperties}
            >
              {/* Foto local (manteniendo el mismo diseño/polaroid). */}
              <div className={`aspect-square bg-gradient-to-br ${placeholderColors[index]} rounded-sm flex items-center justify-center relative overflow-hidden`}>
                {/* Fondo/placeholder decorativo (se ve si la imagen aún no existe o falla al cargar) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {index % 2 === 0 ? (
                    <Sunflower size={64} className="opacity-40" />
                  ) : (
                    <Heart className="w-16 h-16 opacity-40" style={{ color: 'hsl(350, 60%, 65%)', fill: 'hsl(350, 60%, 65%)' }} />
                  )}
                </div>

                {/* Imagen local */}
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    // Si el archivo no existe todavía, ocultamos el <img> para que se vea el placeholder.
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                  }}
                />

                {/* Etiqueta */}
                <span className="absolute bottom-4 left-4 right-4 text-white/90 font-body text-sm text-center drop-shadow">
                </span>
              </div>
              
              {/* Caption */}
              <p className="mt-4 font-romantic text-lg md:text-xl text-center text-foreground/80 px-2">
                {photo.caption}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center items-center gap-4 mt-16"
        >
          <Sunflower size={28} className="opacity-50" />
          <Heart className="w-6 h-6" style={{ color: 'hsl(350, 60%, 60%)', fill: 'hsl(350, 60%, 60%)', opacity: 0.5 }} />
          <Sunflower size={28} className="opacity-50" />
          <Heart className="w-6 h-6" style={{ color: 'hsl(350, 60%, 60%)', fill: 'hsl(350, 60%, 60%)', opacity: 0.5 }} />
          <Sunflower size={28} className="opacity-50" />
        </motion.div>
      </div>
    </section>
  );
};

export default PhotoGallery;
