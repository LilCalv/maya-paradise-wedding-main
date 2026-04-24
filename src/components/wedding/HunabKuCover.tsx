/**
 * Hunab Ku Cover Component
 * Displays the authentic Hunab Ku symbol with mystical breathing aura and rotation
 */

export function HunabKuCover() {
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
        .hunab-aura {
          animation: hunab-breathe 6s ease-in-out infinite;
        }
        .hunab-ku-image {
          animation: spin-slow 45s linear infinite;
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

        {/* Image with rotation animation */}
        <img
          src="/fotos/Hunab_Ku.png"
          alt="Hunab Ku — símbolo Maya de unidad universal"
          className="hunab-ku-image relative mx-auto"
          style={{
            height: "280px",
            width: "auto",
            maxWidth: "100%",
            zIndex: 10,
          }}
        />
      </div>

      <p className="mt-6 text-[0.65rem] uppercase tracking-[0.45em] text-gold">
        Hunab Ku · Unidad
      </p>
    </section>
  );
}
