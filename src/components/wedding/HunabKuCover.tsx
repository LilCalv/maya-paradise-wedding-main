/**
 * Hunab Ku Cover Component
 * Displays the authentic Hunab Ku symbol with mystical breathing aura, rotation, and reveal animation
 * Ultra-premium: Assembly animation + Mouse parallax/tilt interaction
 */

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function HunabKuCover() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAssembled, setIsAssembled] = useState(false);
  
  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring animations for parallax
  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);
  
  // Handle mouse move for parallax/tilt effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Normalize to -0.5 to 0.5 range
      const x = (e.clientX - centerX) / (rect.width / 2);
      const y = (e.clientY - centerY) / (rect.height / 2);
      
      mouseX.set(x);
      mouseY.set(y);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);
  
  // Trigger assembly complete after animation
  useEffect(() => {
    const timer = setTimeout(() => setIsAssembled(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative isolate flex flex-col items-center justify-center overflow-visible px-6 py-20 min-h-[60vh]">
      <style>{`
        @keyframes hunab-breathe {
          0%, 100% {
            opacity: 0.35;
          }
          50% {
            opacity: 0.48;
          }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      {/* Centering wrapper */}
      <div className="flex justify-center items-center w-full" ref={containerRef}>
        <motion.div 
          className="relative inline-block overflow-visible"
          style={{
            rotateX: isAssembled ? rotateX : 0,
            rotateY: isAssembled ? rotateY : 0,
            transformStyle: "preserve-3d",
            perspective: 1000,
          }}
        >
          {/* Mystical background aura */}
          <motion.div
            className="hunab-aura absolute rounded-full bg-[#D4AF37] blur-[80px]"
            style={{
              width: "380px",
              height: "380px",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
              animation: "hunab-breathe 6s ease-in-out infinite",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />

          {/* Logo with assembly animation and tilt effect */}
          <motion.div
            className="relative"
            style={{
              height: "280px",
              width: "280px",
              zIndex: 10,
            }}
          >
            {/* Fragment 1 - Top */}
            <motion.img
              src="/fotos/Hunab_Ku.png"
              alt="Hunab Ku — símbolo Maya de unidad universal"
              className="absolute inset-0"
              style={{
                height: "280px",
                width: "280px",
                objectFit: "contain",
                clipPath: "polygon(0 0, 100% 0, 100% 25%, 0 25%)",
                animation: isAssembled ? "spin-slow 45s linear infinite" : "none",
              }}
              initial={{ y: -120, opacity: 0, filter: "blur(10px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.5, delay: 0, ease: [0.22, 1, 0.36, 1] }}
            />
            
            {/* Fragment 2 - Center */}
            <motion.img
              src="/fotos/Hunab_Ku.png"
              alt=""
              className="absolute inset-0"
              style={{
                height: "280px",
                width: "280px",
                objectFit: "contain",
                clipPath: "polygon(0 25%, 100% 25%, 100% 75%, 0 75%)",
                animation: isAssembled ? "spin-slow 45s linear infinite" : "none",
              }}
              initial={{ x: -80, opacity: 0, filter: "blur(10px)" }}
              animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
            
            {/* Fragment 3 - Bottom */}
            <motion.img
              src="/fotos/Hunab_Ku.png"
              alt=""
              className="absolute inset-0"
              style={{
                height: "280px",
                width: "280px",
                objectFit: "contain",
                clipPath: "polygon(0 75%, 100% 75%, 100% 100%, 0 100%)",
                animation: isAssembled ? "spin-slow 45s linear infinite" : "none",
              }}
              initial={{ y: 120, opacity: 0, filter: "blur(10px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
            
            {/* Overlay mystical particles during assembly */}
            {!isAssembled && (
              <>
                <motion.div
                  className="absolute"
                  style={{
                    top: "10%",
                    left: "50%",
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    background: "#D4AF37",
                    boxShadow: "0 0 20px #D4AF37",
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
                  transition={{ duration: 1.5, repeat: 2 }}
                />
                <motion.div
                  className="absolute"
                  style={{
                    top: "50%",
                    left: "10%",
                    width: "3px",
                    height: "3px",
                    borderRadius: "50%",
                    background: "#1A3C34",
                    boxShadow: "0 0 15px #1A3C34",
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [0, 1, 0], scale: [0, 1.2, 0] }}
                  transition={{ duration: 1.5, delay: 0.3, repeat: 2 }}
                />
                <motion.div
                  className="absolute"
                  style={{
                    bottom: "15%",
                    right: "20%",
                    width: "3px",
                    height: "3px",
                    borderRadius: "50%",
                    background: "#D4AF37",
                    boxShadow: "0 0 18px #D4AF37",
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [0, 1, 0], scale: [0, 1.8, 0] }}
                  transition={{ duration: 1.5, delay: 0.6, repeat: 2 }}
                />
              </>
            )}
          </motion.div>

          {/* Text with stagger animation */}
          <motion.p 
            className="mt-8 text-[0.65rem] uppercase tracking-[0.45em] text-gold text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.8 }}
          >
            Hunab Ku · Unidad
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
