'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export function Dresscode() {
  const [image1Loaded, setImage1Loaded] = useState(false);
  const [image2Loaded, setImage2Loaded] = useState(false);
  const imagesLoaded = image1Loaded && image2Loaded;
  
  return (
    <section
      id="dresscode"
      className="relative px-6 py-28 md:py-36 bg-transparent"
    >
      <div className="mx-auto max-w-6xl">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl italic text-emerald-deep md:text-5xl">
            Dresscode
          </h2>
          <p className="mt-3 text-lg text-gold font-semibold tracking-wide">
            Caribbean Chic
          </p>
          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </motion.div>

        {/* Layout de Dos Columnas: Imagen + Información */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Columna 1: Ilustración con Animación */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <div className={`relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-gold/20 w-full aspect-square max-w-[500px] mx-auto ${!imagesLoaded ? 'bg-cream/50' : 'bg-transparent'}`}>
              <div className="grid grid-cols-2 gap-0 w-full h-full">
                <img
                  src="/fotos/dresscode_1.png"
                  alt="Dresscode Hombres"
                  className="w-full h-full object-cover relative z-20 drop-shadow-md"
                  onLoad={() => setImage1Loaded(true)}
                  onError={() => setImage1Loaded(false)}
                />
                <img
                  src="/fotos/dresscode_2.png"
                  alt="Dresscode Mujeres"
                  className="w-full h-full object-cover relative z-20 drop-shadow-md"
                  onLoad={() => setImage2Loaded(true)}
                  onError={() => setImage2Loaded(false)}
                />
              </div>
            </div>
          </motion.div>

          {/* Columna 2: Información Detallada */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="order-1 md:order-2 space-y-8"
          >
            {/* Hombres */}
            <div className="rounded-2xl bg-cream/80 backdrop-blur-sm p-8 ring-2 ring-gold/20 hover:ring-gold/40 transition-all">
              <h3 className="font-display text-3xl italic text-emerald-deep mb-4">
                Hombres
              </h3>
              <div className="space-y-3 text-emerald-deep/90">
                <p className="text-lg">
                  <span className="font-semibold">Guayabera</span> — Ligera y elegante
                </p>
                <p className="text-lg">
                  <span className="font-semibold">Sombrero</span> — Opcional pero recomendado
                </p>
              </div>
            </div>

            {/* Mujeres */}
            <div className="rounded-2xl bg-cream/80 backdrop-blur-sm p-8 ring-2 ring-gold/20 hover:ring-gold/40 transition-all">
              <h3 className="font-display text-3xl italic text-emerald-deep mb-4">
                Mujeres
              </h3>
              <div className="space-y-3 text-emerald-deep/90">
                <p className="text-lg">
                  <span className="font-semibold">Vestido de playa largo</span> — Fresco y fluido
                </p>
                <p className="text-base opacity-80">
                  Colores claros y telas ligeras ideales para el Caribe
                </p>
              </div>
            </div>

            {/* Nota divertida */}
            <div className="rounded-xl bg-gold/10 px-6 py-4 ring-2 ring-gold/30 text-center">
              <p className="text-base text-emerald-deep/90 italic">
                💃🕺 <span className="font-semibold">¡Las zapatillas se perderán en la pista de baile!</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
