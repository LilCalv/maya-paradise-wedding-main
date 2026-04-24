/**
 * InLakesh Component
 * 
 * Displays the sacred Mayan greeting with mystical typography and aesthetic.
 * Includes decorative Mayan glyphs at low opacity on the edges.
 */

import creamTexture from "@/assets/cream-texture.jpg";

// SVG Mayan glyphs for decoration (simplified representations)
const MayanGlyphLeft = () => (
  <svg
    viewBox="0 0 100 100"
    className="h-32 w-32 opacity-10"
    fill="currentColor"
    aria-hidden="true"
  >
    {/* Simplified Mayan glyph pattern */}
    <rect x="20" y="10" width="60" height="80" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="50" cy="30" r="8" />
    <path d="M 30 50 Q 50 60 70 50" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="25" y="65" width="10" height="15" />
    <rect x="40" y="70" width="10" height="10" />
    <rect x="65" y="65" width="10" height="15" />
  </svg>
);

const MayanGlyphRight = () => (
  <svg
    viewBox="0 0 100 100"
    className="h-32 w-32 opacity-10"
    fill="currentColor"
    aria-hidden="true"
  >
    {/* Simplified Mayan glyph pattern (mirrored) */}
    <rect x="20" y="10" width="60" height="80" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="50" cy="70" r="8" />
    <path d="M 70 50 Q 50 40 30 50" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="25" y="20" width="10" height="15" />
    <rect x="40" y="15" width="10" height="10" />
    <rect x="65" y="20" width="10" height="15" />
  </svg>
);

export function InLakesh() {
  return (
    <section
      id="in-lakesh"
      className="relative overflow-hidden px-6 py-28 text-center md:py-36 paper-grain"
      style={{
        backgroundColor: "var(--cream)",
        backgroundImage: `url(${creamTexture})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Decorative glyphs on sides */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 text-emerald-deep/40">
        <MayanGlyphLeft />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-emerald-deep/40">
        <MayanGlyphRight />
      </div>

      {/* Main content container */}
      <div className="reveal mx-auto max-w-4xl">
        {/* Main title */}
        <h2 className="font-display text-6xl italic leading-tight text-emerald-deep md:text-7xl lg:text-8xl">
          In Lak'Ech
        </h2>
        <p className="mt-3 font-display text-4xl italic text-gold md:text-5xl">
          Hala Ken
        </p>

        {/* Subtitle with translations */}
        <p className="reveal reveal-delay-1 mt-6 text-base uppercase tracking-[0.3em] text-emerald-deep/70">
          In talanesi in Tonatiu · Maya Sha Inlakesh – Hala Ken
        </p>

        {/* Main tagline */}
        <p className="reveal reveal-delay-1 mt-8 font-display text-2xl italic text-emerald-deep md:text-3xl">
          Que en ti el Sol sea resplandor.
          <br />
          En la unicidad, yo soy otro tú, tú eres otro yo.
        </p>

        {/* Translations section */}
        <div className="reveal reveal-delay-2 mt-12 space-y-6 rounded-2xl border-2 border-gold/20 bg-cream/50 p-8 md:p-10">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-gold/80">English</p>
            <p className="mt-2 text-base italic leading-relaxed text-emerald-deep md:text-lg">
              Let the sun always shine on you. In our own uniqueness, I am another you, you are another me.
            </p>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-gold/80">Italiano</p>
            <p className="mt-2 text-base italic leading-relaxed text-emerald-deep md:text-lg">
              Che il sole splenda in te. Nella nostra propia unicità, io sono un altro te, tu sei un altro me.
            </p>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-gold/80">Português</p>
            <p className="mt-2 text-base italic leading-relaxed text-emerald-deep md:text-lg">
              Que em você o sol este brilhando. Na unidade, eu sou um outro você, você é um outro eu.
            </p>
          </div>
        </div>

        {/* Decorative divider */}
        <div className="reveal reveal-delay-2 ornament-divider mt-12 mx-auto max-w-xs">
          <span className="text-gold">✦</span>
        </div>

        {/* Body text - Main definition */}
        <p className="reveal reveal-delay-2 mt-12 text-base leading-relaxed text-foreground/85 md:text-lg md:leading-relaxed">
          Este profundo <span className="font-display italic">"saludo Maya"</span>, que pone en movimiento el concepto de unidad, llega a ti como <span className="font-display italic">REGALO</span>. Es una manera hermosa de saludarnos como iguales, sin distinciones, sin prejuicios, sin discriminaciones. El reconocimiento del uno en el otro, en el Amor, el Perdón y la Fe, de saber que no estamos solos. Todos hijos de un mismo SOL, todos hermanos, iguales pero no idénticos.
        </p>

        {/* Body text - Deeper meaning */}
        <p className="reveal reveal-delay-3 mt-8 text-base leading-relaxed text-foreground/85 md:text-lg md:leading-relaxed">
          Para la cultura Maya, la humanidad se encuentra en un proceso de renovación, no de conclusión. Es un proceso de mejora. Es un camino hacia una mejor actitud y, en consecuencia, a una mejor calidad de vida provocada para cada uno de nosotros. Todos somos uno. Tú eres yo, yo soy tú.
        </p>

        {/* Closing message */}
        <p className="reveal reveal-delay-3 mt-10 text-base leading-relaxed text-foreground/85 md:text-lg md:leading-relaxed">
          Con este saludo Maya <span className="font-display italic text-gold">"IN LAK'ECH – HALA KEN"</span>, tomamos tu mano y, señalando hacia cada punto cardinal, te deseamos que este viaje, esta celebración y este amor sean el comienzo de algo eterno. Os vemos en Holbox. <span className="text-2xl">🌅</span>
        </p>

        {/* Subtle accent line below */}
        <div className="reveal reveal-delay-4 mt-12 flex justify-center">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>
      </div>
    </section>
  );
}
