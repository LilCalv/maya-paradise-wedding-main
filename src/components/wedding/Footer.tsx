import hunabKu from "@/assets/hunab-ku.png";

// Decorative SVG: Spanish Caravel and Mayan Pyramid intertwined
function MalincheSvg() {
  return (
    <svg viewBox="0 0 200 80" className="h-12 w-auto opacity-60" aria-hidden>
      {/* Caravel silhouette (left) */}
      <g stroke="currentColor" strokeWidth="1.5" fill="none">
        {/* Mast */}
        <line x1="50" y1="20" x2="50" y2="60" />
        {/* Sails */}
        <path d="M 50 25 Q 65 35 50 50 Z" />
        <path d="M 50 30 Q 40 40 50 55 Z" />
        {/* Hull */}
        <path d="M 35 55 Q 50 65 65 55" />
      </g>

      {/* Mayan Pyramid silhouette (right) */}
      <g fill="currentColor" opacity="0.7">
        <polygon points="150,65 170,35 190,65" />
        <polygon points="155,55 165,40 175,55" fill="none" stroke="currentColor" strokeWidth="1" />
      </g>

      {/* Connecting ornament */}
      <circle cx="100" cy="50" r="3" fill="currentColor" opacity="0.8" />
      <path d="M 70 50 Q 100 45 130 50" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-transparent px-6 py-16 text-center text-emerald-deep">
      {/* Malinche decorative element */}
      <div className="mb-8 flex justify-center text-gold">
        <MalincheSvg />
      </div>

      {/* Main content */}
      <img
        src={hunabKu}
        alt=""
        width={64}
        height={64}
        loading="lazy"
        className="mx-auto h-14 w-14 opacity-70"
      />
      <p className="mt-6 font-display text-3xl italic">
        Claudia <span className="text-gold">&amp;</span> Carlos
      </p>
      <p className="mt-2 text-xs uppercase tracking-[0.4em] opacity-60">
        Holbox · Diciembre 2026
      </p>

      {/* Decorative bottom line */}
      <div className="mt-10 flex items-center justify-center gap-3">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold opacity-50" />
        <span className="text-gold opacity-70">✦</span>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold opacity-50" />
      </div>

      {/* Footer text */}
      <p className="mt-8 text-xs text-emerald-deep/60">
        In Lak'ech · Hala Ken · Gracias por celebrar con nosotros
      </p>
    </footer>
  );
}
