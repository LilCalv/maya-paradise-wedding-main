/**
 * Hunab Ku Cover Component
 * Displays the authentic Hunab Ku symbol with mystical breathing aura, rotation, and reveal animation
 */

import { useEffect, useState } from "react";

export function HunabKuCover() {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative isolate flex flex-col items-center justify-center overflow-visible px-6 py-8">
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
        @keyframes logoReveal {
          0% {
            opacity: 0;
            transform: scale(0.7) rotate(-10deg);
            filter: blur(10px);
          }
          60% {
            opacity: 0.8;
            transform: scale(1.05) rotate(2deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
            filter: blur(0px);
          }
        }
        @keyframes shimmer {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
        .hunab-aura {
          animation: hunab-breathe 6s ease-in-out infinite;
        }
        .hunab-ku-image {
          animation: spin-slow 45s linear infinite;
        }
        .hunab-ku-image.revealed {
          animation: logoReveal 1.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards, 
                     spin-slow 45s linear infinite 1.8s;
        }
        .shimmer-overlay {
          position: absolute;
          inset: -20%;
          background: radial-gradient(circle at center, rgba(212, 175, 55, 0.6) 0%, transparent 70%);
          animation: shimmer 2s ease-in-out forwards;
          pointer-events: none;
        }
      `}</style>

      <div className="relative inline-block overflow-visible">
        {/* Mystical background aura */}
        <div
          className="hunab-aura absolute inset-0 rounded-full bg-[#D4AF37] blur-[80px]"
          style={{
            width: "380px",
            height: "380px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: 0.4,
            pointerEvents: "none",
          }}
        />

        {/* Shimmer effect on reveal */}
        {revealed && <div className="shimmer-overlay" />}

        {/* Image with rotation and reveal animation */}
        <img
          src="/fotos/Hunab_Ku.png"
          alt="Hunab Ku — símbolo Maya de unidad universal"
          className={`hunab-ku-image relative mx-auto ${revealed ? 'revealed' : ''}`}
          style={{
            height: "280px",
            width: "auto",
            maxWidth: "100%",
            zIndex: 10,
            opacity: revealed ? 1 : 0,
          }}
        />
      </div>

      <p className={`mt-6 text-[0.65rem] uppercase tracking-[0.45em] text-gold transition-opacity duration-1000 ${revealed ? 'opacity-100' : 'opacity-0'}`}>
        Hunab Ku · Unidad
      </p>
    </section>
  );
}
