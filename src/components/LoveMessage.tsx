import { motion } from 'framer-motion';
import { Heart, Quote } from 'lucide-react';
import { Sunflower } from './FloatingSunflowers';

const LoveMessage = () => {
  return (
    <section className="py-24 px-6 bg-sunset-gradient relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 opacity-15">
        <Sunflower size={80} className="animate-sway" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-15">
        <Sunflower size={60} className="animate-sway" />
      </div>
      <div className="absolute top-1/2 right-5 opacity-10">
        <Heart className="w-20 h-20" style={{ color: 'hsl(350, 60%, 60%)', fill: 'hsl(350, 60%, 60%)' }} />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/85 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-primary/20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sunflower size={32} />
            <Quote className="w-10 h-10 text-primary/50" />
            <Sunflower size={32} />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-romantic text-3xl md:text-5xl text-gradient-romantic text-center mb-8"
          >
            Mi Amor por Ti
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6 font-elegant text-lg md:text-xl text-foreground/85 leading-relaxed text-center"
          >
            <p>
              Es increíble lo mucho que has marcado mi vida, hermosa. Eres lo mejor que me pudo haber
              pasado en el mundo; coincidir y conectar como lo hicimos desde el primer día es un regalo que
              no tiene precio. Valoro profundamente el esfuerzo que haces cada día y la persona tan increíble que eres.
            </p>

            <p>
              Contigo he descubierto lo que significa amar de verdad. No son solo mariposas en el
              estómago; es la certeza de que quiero despertar a tu lado cada mañana, compartir cada
              atardecer y construir mil aventuras juntos, siempre de la mano.
            </p>

            <p>
              Siempre he anhelado un amor así sobre mí. "Amas bonito", y cada momento que paso a tu lado
             es un tesoro que guardo con todo mi aliento en lo más profundo de mi corazón. Te amo con toda mi alma.
              Espero que pases excelente tu feliz cumpleaño muaaaaaaaak.
              ATT tu gordito
            </p>

            <p className="font-romantic text-2xl md:text-3xl pt-4" style={{ color: 'hsl(350, 60%, 50%)' }}>
              Te amo con toda mi alma 🌻❤️
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center items-center gap-3 mt-8"
          >
            <Sunflower size={24} />
            <Heart className="w-5 h-5" style={{ color: 'hsl(350, 65%, 55%)', fill: 'hsl(350, 65%, 55%)' }} />
            <Sunflower size={24} />
            <Heart className="w-5 h-5" style={{ color: 'hsl(350, 65%, 55%)', fill: 'hsl(350, 65%, 55%)' }} />
            <Sunflower size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoveMessage;
