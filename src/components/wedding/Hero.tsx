'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import creamTexture from "@/assets/cream-texture.jpg";
import { Countdown } from "./Countdown";
import { HunabKuCover } from "./HunabKuCover";

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  // Scroll progress para animaciones
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end center"],
  });

  // LOGO: animación limpia con scale y translateY
  const logoScale = useTransform(scrollYProgress, [0, 0.32], [1, 0.6]);
  const logoBlur = useTransform(scrollYProgress, [0, 0.32], ['blur(0px)', 'blur(5px)']);
  const logoY = useTransform(scrollYProgress, [0, 0.32], [0, -180]);

  // Bloque principal baja un poco para centrar
  const blockOpacity = useTransform(scrollYProgress, [0.10, 0.22], [0, 1]);
  const blockY = useTransform(scrollYProgress, [0.10, 0.22], [60, 0]);

  // Otros elementos (frase, divider) aparecen después
  const subtitleOpacity = useTransform(scrollYProgress, [0.18, 0.25], [0, 1]);
  // CTA aparece con retraso después del bloque principal
  const ctaOpacity = useTransform(scrollYProgress, [0.25, 0.35], [0, 1]);
  const ctaY = useTransform(scrollYProgress, [0.25, 0.35], [30, 0]);
  const dividerOpacity = useTransform(scrollYProgress, [0.18, 0.25], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative isolate flex min-h-[150vh] flex-col items-center justify-start overflow-hidden px-6 py-20 text-center paper-grain"
      style={{
        backgroundImage: `linear-gradient(180deg, color-mix(in oklab, var(--cream) 88%, transparent), var(--cream)), url(${creamTexture})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Sticky container for Hero content */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-visible">
        {/* LOGO SOLO AL INICIO con aura difuminada */}
        <div className="relative flex items-center justify-center" style={{ zIndex: 10 }}>
          {/* Aura mística con respiración */}
          <motion.div
            style={{
              scale: logoScale,
              y: logoY,
              position: 'absolute',
              width: '380px',
              height: '380px',
              borderRadius: '50%',
              background: '#D4AF37',
              filter: 'blur(80px)',
              opacity: 0.4,
              pointerEvents: 'none',
              animation: 'hunab-breathe 6s ease-in-out infinite',
            }}
          />
          {/* Imagen del logo */}
          <motion.img
            src="/fotos/Hunab_Ku.png"
            alt="Hunab Ku"
            style={{
              scale: logoScale,
              y: logoY,
              filter: logoBlur,
              width: '280px',
              height: '280px',
              aspectRatio: '1/1',
              objectFit: 'contain',
              position: 'relative',
              zIndex: 10,
            }}
          />
        </div>
        
        <style>{`
          @keyframes hunab-breathe {
            0%, 100% { opacity: 0.35; }
            50% { opacity: 0.48; }
          }
        `}</style>

        {/* BLOQUE: Nombres, fecha, contador (aparecen juntos) */}
        <motion.div
          style={{
            opacity: blockOpacity,
            y: blockY,
            zIndex: 20,
          }}
          className="flex flex-col items-center w-full"
        >
          <h1 className="font-display text-6xl italic leading-[0.95] text-emerald-deep sm:text-7xl md:text-8xl lg:text-[8.5rem] mt-10">
            Claudia
            <span className="mx-3 not-italic text-gold">&amp;</span>
            Carlos
          </h1>
          
          {/* Divider Holbox */}
          <div className="ornament-divider mt-8 w-full max-w-md">
            <span className="font-display text-sm uppercase tracking-[0.35em]">
              Holbox
            </span>
          </div>
          
          {/* Tagline debajo de los nombres */}
          <p className="mt-6 max-w-xl font-display text-2xl italic text-emerald-deep/85 md:text-3xl">
            Nuestra Boda en el Paraíso
          </p>
          <p className="mt-4 text-sm uppercase tracking-[0.5em] text-emerald-deep/80 md:text-base">
            4 &nbsp;·&nbsp; 5 &nbsp;Diciembre &nbsp;·&nbsp; 2026
          </p>
          
          {/* Contenedor para countdown y botón */}
          <div className="flex flex-col items-center mt-12 gap-8">
            <Countdown />
            
            {/* Botón CTA con animación retrasada */}
            <motion.a
              style={{ opacity: ctaOpacity, y: ctaY }}
              href="#rsvp"
              className="group inline-flex items-center gap-3 rounded-full bg-emerald-deep px-10 py-4 text-xs font-medium uppercase tracking-[0.3em] text-cream shadow-soft transition-all hover:shadow-gold hover:-translate-y-0.5 min-w-[280px] justify-center"
            >
              Confirmar Asistencia
              <span className="text-gold transition-transform group-hover:translate-x-1">
                ↓
              </span>
            </motion.a>
          </div>
        </motion.div>

        {/* Otros elementos (frase, divider, CTA) aparecen después */}
        <motion.p
          style={{ opacity: subtitleOpacity }}
          className="absolute top-10 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.4em] text-emerald-deep/70"
        >
          Nos casamos
        </motion.p>

        {/* Eliminado tagline flotante, ahora está en el bloque principal */}

        <motion.div
          style={{ opacity: dividerOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/60"
        >
          <div className="h-12 w-px bg-gradient-to-b from-transparent to-gold/60" />
        </motion.div>
      </div>
    </section>
  );
}
