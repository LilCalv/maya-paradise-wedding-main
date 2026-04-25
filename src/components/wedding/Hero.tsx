'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Countdown } from "./Countdown";
import { HunabKuCover } from "./HunabKuCover";

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const logoContainerRef = useRef<HTMLDivElement>(null);
  const [mouseActive, setMouseActive] = useState(false);
  
  // Scroll progress para animaciones
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end center"],
  });

  // Mouse position tracking para parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring animations para parallax/tilt
  const springConfig = { damping: 20, stiffness: 100 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig);
  const translateX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);
  const translateY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-10, 10]), springConfig);

  // Handle mouse move para parallax/tilt effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!logoContainerRef.current || scrollYProgress.get() > 0.1) {
        setMouseActive(false);
        return;
      }
      
      setMouseActive(true);
      const rect = logoContainerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Normalize to -0.5 to 0.5 range
      const x = (e.clientX - centerX) / (rect.width);
      const y = (e.clientY - centerY) / (rect.height);
      
      mouseX.set(x);
      mouseY.set(y);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, scrollYProgress]);

  // LOGO: animación con scale y translateY basada en scroll (más pronunciada)
  const logoScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const logoY = useTransform(scrollYProgress, [0, 0.3], [0, -200]);
  const auraOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative isolate overflow-hidden text-center bg-transparent"
    >
      {/* Olas sutiles SVG en la parte inferior */}
      <svg 
        className="absolute bottom-0 left-0 w-full opacity-[0.08]" 
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{ height: '40vh', zIndex: 2 }}
      >
        <motion.path
          fill="rgba(159, 219, 218, 0.3)"
          d="M0,160L48,144C96,128,192,96,288,96C384,96,480,128,576,154.7C672,181,768,203,864,197.3C960,192,1056,160,1152,138.7C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          animate={{
            d: [
              "M0,160L48,144C96,128,192,96,288,96C384,96,480,128,576,154.7C672,181,768,203,864,197.3C960,192,1056,160,1152,138.7C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,192L48,197.3C96,203,192,213,288,197.3C384,181,480,139,576,128C672,117,768,139,864,154.7C960,171,1056,181,1152,181.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,160L48,144C96,128,192,96,288,96C384,96,480,128,576,154.7C672,181,768,203,864,197.3C960,192,1056,160,1152,138.7C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
            ]
          }}
          transition={{
            duration: 12,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </svg>

      {/* PRIMERA PANTALLA: Logo centrado absoluto (100vh) */}
      <div className="flex flex-col items-center justify-center h-screen w-full px-6" style={{ zIndex: 10, position: 'relative' }}>
        {/* LOGO: Corazón de la pantalla */}
        <div 
          ref={logoContainerRef}
          className="flex items-center justify-center w-full" 
          style={{ zIndex: 20, position: 'relative' }}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              duration: 1.2
            }}
            style={{
              rotateX: mouseActive ? rotateX : 0,
              rotateY: mouseActive ? rotateY : 0,
              x: mouseActive ? translateX : 0,
              y: mouseActive ? translateY : 0,
              transformStyle: "preserve-3d",
              perspective: 1200,
            }}
          >
            {/* Aura dorada con glow natural y pulso */}
            <motion.div
              className="absolute w-[400px] h-[400px] rounded-full bg-amber-200/20 blur-[100px] pointer-events-none"
              style={{
                scale: logoScale,
                y: logoY,
                opacity: auraOpacity,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                animation: 'aura-pulse 4s ease-in-out infinite',
                zIndex: 10,
              }}
            />
            {/* Imagen del logo con flotación y brillo místico */}
            <motion.img
              src="/fotos/Hunab_Ku.png"
              alt="Hunab Ku"
              style={{
                scale: logoScale,
                opacity: logoOpacity,
                y: logoY,
                width: '280px',
                height: '280px',
                aspectRatio: '1/1',
                objectFit: 'contain',
                position: 'relative',
                zIndex: 20,
                animation: 'logo-float 4s ease-in-out infinite, mystic-glow 3s ease-in-out infinite',
              }}
            />
          </motion.div>
        </div>
        
        <style>{`
          @keyframes aura-pulse {
            0%, 100% { 
              transform: translate(-50%, -50%) scale(1);
              opacity: 0.6;
            }
            50% { 
              transform: translate(-50%, -50%) scale(1.1);
              opacity: 0.8;
            }
          }
          
          @keyframes logo-float {
            0%, 100% { 
              transform: translateY(0) rotate(0deg); 
            }
            25% { 
              transform: translateY(-5px) rotate(1deg); 
            }
            50% { 
              transform: translateY(0) rotate(0deg); 
            }
            75% { 
              transform: translateY(5px) rotate(-1deg); 
            }
          }
          
          @keyframes mystic-glow {
            0%, 100% { 
              filter: drop-shadow(0 0 15px rgba(212, 175, 55, 0.4)) 
                      drop-shadow(0 0 30px rgba(212, 175, 55, 0.2));
            }
            50% { 
              filter: drop-shadow(0 0 25px rgba(212, 175, 55, 0.6)) 
                      drop-shadow(0 0 50px rgba(212, 175, 55, 0.3));
            }
          }
        `}</style>

        {/* Indicador de scroll */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gold/60 animate-bounce" style={{ zIndex: 20 }}>
          <div className="h-12 w-px bg-gradient-to-b from-transparent to-gold/60" />
        </div>
      </div>

      {/* SEGUNDA SECCIÓN: Nombres y detalles (aparecen con scroll) */}
      <div className="flex flex-col items-center justify-center min-h-screen w-full px-6 py-20" style={{ zIndex: 10, position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center w-full"
        >
          {/* Glassmorphism para legibilidad sobre el agua animada */}
          <div className="relative px-8 py-6 rounded-3xl backdrop-blur-sm bg-white/5">
            <h1 className="font-display text-6xl italic leading-[0.95] text-emerald-deep sm:text-7xl md:text-8xl lg:text-[8.5rem]">
              Claudia
              <span className="mx-3 not-italic text-gold">&amp;</span>
              Carlos
            </h1>
          </div>
          
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
          
          {/* Contenedor para countdown y botón con glassmorphism */}
          <div className="flex flex-col items-center mt-12 gap-8 px-6 py-4 rounded-2xl backdrop-blur-sm bg-white/3">
            <Countdown />
            
            {/* Botón CTA */}
            <motion.a
              href="#rsvp"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="group inline-flex items-center gap-3 rounded-full bg-emerald-deep px-10 py-4 text-xs font-medium uppercase tracking-[0.3em] text-cream shadow-soft transition-all hover:shadow-gold hover:-translate-y-0.5 min-w-[280px] justify-center"
            >
              Confirmar Asistencia
              <span className="text-gold transition-transform group-hover:translate-x-1">
                ↓
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
