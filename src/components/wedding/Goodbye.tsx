export function Goodbye() {
  return (
    <section className="relative isolate flex min-h-[60vh] flex-col items-center justify-center overflow-hidden px-6 py-20 text-center paper-grain md:py-32"
      style={{
        background: "linear-gradient(180deg, var(--cream) 0%, #F9F6ED 100%)",
      }}
    >
      <style>{`
        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.95;
          }
        }
        .heart-pulse {
          animation: heartbeat 2.5s ease-in-out infinite;
          display: inline-block;
        }
      `}</style>

      {/* Pulsing Heart Icon */}
      <div className="heart-pulse mb-8 text-8xl leading-none md:text-9xl" style={{ color: "#B35C44" }}>
        ♥
      </div>

      {/* Main text */}
      <h2 className="font-display text-3xl italic text-emerald-deep md:text-4xl lg:text-5xl">
        Hecho con mucho amor
      </h2>

      {/* Decorative line */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold opacity-50" />
        <span className="text-gold opacity-60">✦</span>
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold opacity-50" />
      </div>

      {/* Closing message */}
      <p className="mt-8 max-w-2xl text-sm leading-relaxed text-emerald-deep/75 md:text-base">
        Gracias por ser parte de nuestro viaje hacia el paraíso. Cada momento contigo hará que esta celebración sea inolvidable.
      </p>

      {/* Names */}
      <p className="mt-10 font-display text-2xl italic text-emerald-deep">
        Claudia <span className="text-gold">&amp;</span> Carlos
      </p>

      {/* Maya greeting */}
      <p className="mt-4 text-xs uppercase tracking-[0.4em] text-gold/70">
        In Lak'Ech · Hala Ken
      </p>
    </section>
  );
}
