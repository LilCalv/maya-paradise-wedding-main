/**
 * Hunab Ku Symbol Component
 * 
 * Authentic recreation based on reference image showing:
 * - Dense outer ring with Maya glyphs
 * - Complex segmented radial bars (8 directions)
 * - Central S-curve dual-color spiral with duality
 * - Ancient hammered metal texture (gold & bronze)
 * - Breathing mystical aura
 */

export function HunabKuSymbol() {
  return (
    <div className="relative inline-block">
      <style>{`
        @keyframes hunab-breathe {
          0%, 100% { 
            filter: drop-shadow(0 0 25px rgba(212, 175, 55, 0.4)) drop-shadow(0 0 50px rgba(212, 175, 55, 0.15));
          }
          50% { 
            filter: drop-shadow(0 0 45px rgba(212, 175, 55, 0.7)) drop-shadow(0 0 90px rgba(212, 175, 55, 0.35));
          }
        }
        .hunab-ku-container {
          animation: hunab-breathe 6s ease-in-out infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .hunab-ku-svg {
          animation: spin-slow 45s linear infinite;
        }
      `}</style>

      <div className="hunab-ku-container mx-auto h-48 w-48 md:h-56 md:w-56">
        <svg
          viewBox="0 0 500 500"
          className="hunab-ku-svg h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Advanced 3D metal gradients */}
            <radialGradient id="hunabGold" cx="40%" cy="40%">
              <stop offset="0%" style={{ stopColor: "#FFFACD", stopOpacity: 1 }} />
              <stop offset="20%" style={{ stopColor: "#FFD700", stopOpacity: 1 }} />
              <stop offset="45%" style={{ stopColor: "#DAA520", stopOpacity: 1 }} />
              <stop offset="70%" style={{ stopColor: "#B8860B", stopOpacity: 1 }} />
              <stop offset="90%" style={{ stopColor: "#704214", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#3a2a1a", stopOpacity: 1 }} />
            </radialGradient>

            <linearGradient id="hunabBevel" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#FFFACD", stopOpacity: 0.7 }} />
              <stop offset="50%" style={{ stopColor: "#DAA520", stopOpacity: 0.2 }} />
              <stop offset="100%" style={{ stopColor: "#1a1a0a", stopOpacity: 0.6 }} />
            </linearGradient>

            {/* Texture filters for ancient carved metal */}
            <filter id="hunabTexture">
              <feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="5" seed="42" />
              <feDisplacementMap in="SourceGraphic" scale="2.5" xChannelSelector="R" yChannelSelector="G" />
              <feGaussianBlur stdDeviation="0.8" />
            </filter>

            <filter id="hunabDeepRelief">
              <feTurbulence type="fractalNoise" baseFrequency="0.12" numOctaves="3" />
              <feDisplacementMap in="SourceGraphic" scale="1.2" />
            </filter>

            <filter id="hunabGlyphEmboss">
              <feGaussianBlur in="SourceGraphic" stdDeviation="0.7" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.9" />
              </feComponentTransfer>
            </filter>

            {/* Shadow for depth */}
            <filter id="hunabShadow">
              <feDropShadow dx="1" dy="2" stdDeviation="1.5" floodOpacity="0.3" />
            </filter>
          </defs>

          {/* ═══════════════════════════════════════════════
              OUTER RING - DENSE MAYA GLYPHS & DETAILS
              ═══════════════════════════════════════════════ */}

          {/* Main outer circle with 3D metal effect */}
          <circle cx="250" cy="250" r="245" fill="url(#hunabGold)" filter="url(#hunabTexture)" />
          <circle cx="250" cy="250" r="245" fill="url(#hunabBevel)" opacity="0.65" />

          {/* Dense glyph ring - Reference accuracy */}
          <g filter="url(#hunabGlyphEmboss)" stroke="#1a1410" strokeWidth="1.8" fill="none" opacity="0.92">
            {/* TOP SECTION - Complex Maya glyphs */}
            
            {/* Top center main glyph block */}
            <rect x="230" y="8" width="40" height="50" rx="2" />
            <circle cx="250" cy="20" r="8" />
            <path d="M 240 35 Q 250 42 260 35" />
            <rect x="235" y="45" width="30" height="8" />

            {/* Top-left glyph cluster */}
            <rect x="140" y="25" width="28" height="42" rx="2" />
            <circle cx="152" cy="38" r="5" />
            <path d="M 145 52 L 159 52" strokeWidth="1.5" />
            <circle cx="148" cy="50" r="2" fill="#1a1410" opacity="0.7" />
            <circle cx="155" cy="50" r="2" fill="#1a1410" opacity="0.7" />

            {/* Top-right glyph cluster */}
            <rect x="332" y="25" width="28" height="42" rx="2" />
            <circle cx="344" cy="38" r="5" />
            <path d="M 337 52 L 351 52" strokeWidth="1.5" />
            <circle cx="340" cy="50" r="2" fill="#1a1410" opacity="0.7" />
            <circle cx="347" cy="50" r="2" fill="#1a1410" opacity="0.7" />

            {/* BOTTOM SECTION */}

            {/* Bottom center glyph block */}
            <rect x="230" y="442" width="40" height="50" rx="2" />
            <circle cx="250" cy="472" r="8" />
            <path d="M 240 458 Q 250 450 260 458" />
            <rect x="235" y="435" width="30" height="8" />

            {/* Bottom-left glyph cluster */}
            <rect x="140" y="433" width="28" height="42" rx="2" />
            <circle cx="152" cy="450" r="5" />
            <path d="M 145 462 L 159 462" strokeWidth="1.5" />
            <circle cx="148" cy="465" r="2" fill="#1a1410" opacity="0.7" />
            <circle cx="155" cy="465" r="2" fill="#1a1410" opacity="0.7" />

            {/* Bottom-right glyph cluster */}
            <rect x="332" y="433" width="28" height="42" rx="2" />
            <circle cx="344" cy="450" r="5" />
            <path d="M 337 462 L 351 462" strokeWidth="1.5" />
            <circle cx="340" cy="465" r="2" fill="#1a1410" opacity="0.7" />
            <circle cx="347" cy="465" r="2" fill="#1a1410" opacity="0.7" />

            {/* LEFT SECTION */}
            
            {/* Left upper glyph */}
            <rect x="10" y="130" width="50" height="35" rx="2" />
            <circle cx="22" cy="145" r="6" />
            <path d="M 38 138 L 50 138" strokeWidth="1.5" />
            <circle cx="40" cy="136" r="2" fill="#1a1410" opacity="0.7" />
            <circle cx="45" cy="141" r="2" fill="#1a1410" opacity="0.7" />

            {/* Left middle glyph */}
            <rect x="10" y="225" width="50" height="50" rx="2" />
            <circle cx="25" cy="250" r="8" />
            <path d="M 30 235 L 48 235" strokeWidth="1.5" />
            <path d="M 30 265 L 48 265" strokeWidth="1.5" />

            {/* Left lower glyph */}
            <rect x="10" y="335" width="50" height="35" rx="2" />
            <circle cx="22" cy="350" r="6" />
            <path d="M 38 357 L 50 357" strokeWidth="1.5" />
            <circle cx="40" cy="359" r="2" fill="#1a1410" opacity="0.7" />
            <circle cx="45" cy="354" r="2" fill="#1a1410" opacity="0.7" />

            {/* RIGHT SECTION */}

            {/* Right upper glyph */}
            <rect x="440" y="130" width="50" height="35" rx="2" />
            <circle cx="478" cy="145" r="6" />
            <path d="M 450 138 L 462 138" strokeWidth="1.5" />
            <circle cx="455" cy="136" r="2" fill="#1a1410" opacity="0.7" />
            <circle cx="460" cy="141" r="2" fill="#1a1410" opacity="0.7" />

            {/* Right middle glyph */}
            <rect x="440" y="225" width="50" height="50" rx="2" />
            <circle cx="475" cy="250" r="8" />
            <path d="M 452 235 L 470 235" strokeWidth="1.5" />
            <path d="M 452 265 L 470 265" strokeWidth="1.5" />

            {/* Right lower glyph */}
            <rect x="440" y="335" width="50" height="35" rx="2" />
            <circle cx="478" cy="350" r="6" />
            <path d="M 450 357 L 462 357" strokeWidth="1.5" />
            <circle cx="455" cy="359" r="2" fill="#1a1410" opacity="0.7" />
            <circle cx="460" cy="354" r="2" fill="#1a1410" opacity="0.7" />
          </g>

          {/* ═══════════════════════════════════════════════
              MIDDLE RING - SEGMENTED RADIAL BARS
              ═══════════════════════════════════════════════ */}

          {/* 8 segmented bars radiating from center */}
          <g stroke="#1a1410" strokeWidth="7" strokeLinecap="round" fill="none" opacity="0.88">
            {/* TOP vertical bar */}
            <line x1="250" y1="50" x2="250" y2="110" />
            <line x1="250" y1="145" x2="250" y2="205" />

            {/* BOTTOM vertical bar */}
            <line x1="250" y1="295" x2="250" y2="355" />
            <line x1="250" y1="390" x2="250" y2="450" />

            {/* RIGHT horizontal bar */}
            <line x1="295" y1="250" x2="355" y2="250" />
            <line x1="390" y1="250" x2="450" y2="250" />

            {/* LEFT horizontal bar */}
            <line x1="50" y1="250" x2="110" y2="250" />
            <line x1="145" y1="250" x2="205" y2="250" />

            {/* TOP-RIGHT diagonal (45°) */}
            <line x1="297" y1="97" x2="343" y2="143" />
            <line x1="368" y1="168" x2="414" y2="214" />

            {/* BOTTOM-LEFT diagonal (225°) */}
            <line x1="157" y1="286" x2="203" y2="332" />
            <line x1="86" y1="403" x2="132" y2="449" />

            {/* BOTTOM-RIGHT diagonal (135°) */}
            <line x1="343" y1="357" x2="397" y2="403" />
            <line x1="414" y1="286" x2="468" y2="340" />

            {/* TOP-LEFT diagonal (315°) */}
            <line x1="103" y1="97" x2="157" y2="151" />
            <line x1="86" y1="168" x2="140" y2="222" />
          </g>

          {/* Cardinal point nodes */}
          <g fill="#1a1410" opacity="0.85">
            <circle cx="250" cy="50" r="7" />
            <circle cx="250" cy="450" r="7" />
            <circle cx="50" cy="250" r="7" />
            <circle cx="450" cy="250" r="7" />
            <circle cx="154" cy="96" r="5" />
            <circle cx="346" cy="404" r="5" />
            <circle cx="404" cy="346" r="5" />
            <circle cx="96" cy="154" r="5" />
          </g>

          {/* ═══════════════════════════════════════════════
              INNER MEDALLION - DUAL S-SPIRAL CENTER
              ═══════════════════════════════════════════════ */}

          {/* Central circle medallion */}
          <circle cx="250" cy="250" r="145" fill="#B8860B" filter="url(#hunabTexture)" />
          <circle cx="250" cy="250" r="145" fill="url(#hunabBevel)" opacity="0.6" />
          <circle cx="250" cy="250" r="140" fill="none" stroke="#2a1f0f" strokeWidth="1.2" opacity="0.4" />
          <circle cx="250" cy="250" r="128" fill="none" stroke="#2a1f0f" strokeWidth="0.8" opacity="0.25" />

          {/* Concentric pattern rings */}
          <circle cx="250" cy="250" r="105" fill="none" stroke="#2a1f0f" strokeWidth="1" opacity="0.3" />
          <circle cx="250" cy="250" r="80" fill="none" stroke="#2a1f0f" strokeWidth="1" opacity="0.2" />

          {/* COMPLEX DUAL S-SPIRAL with duality principle */}
          <g filter="url(#hunabDeepRelief)">
            {/* Upper spiral - LIGHT (yin side) */}
            <path
              d="M 250 160 Q 310 160 320 210 Q 325 245 280 265 L 250 252"
              fill="#FFF5E1"
              stroke="#2a1f0f"
              strokeWidth="6"
              strokeLinecap="round"
              opacity="0.96"
            />

            {/* Lower spiral - DARK (yang side) */}
            <path
              d="M 250 260 L 220 280 Q 180 260 180 210 Q 185 160 250 160"
              fill="#654321"
              stroke="#2a1f0f"
              strokeWidth="6"
              strokeLinecap="round"
              opacity="0.96"
            />

            {/* Central sacred triangle - Maya fire symbol */}
            <path
              d="M 250 215 L 270 275 L 230 275 Z"
              fill="#2a1f0f"
              stroke="#2a1f0f"
              strokeWidth="0.5"
              opacity="0.99"
            />

            {/* Duality eye circles - Yin-Yang balance */}
            <circle cx="290" cy="190" r="6" fill="#654321" stroke="#2a1f0f" strokeWidth="2.2" />
            <circle cx="290" cy="190" r="3" fill="#FFF5E1" />

            <circle cx="210" cy="300" r="6" fill="#FFF5E1" stroke="#2a1f0f" strokeWidth="2.2" />
            <circle cx="210" cy="300" r="3" fill="#654321" />

            {/* Harmonic resonance lines */}
            <path d="M 265 205 Q 250 230 235 215" fill="none" stroke="#2a1f0f" strokeWidth="2.2" opacity="0.65" />
            <path d="M 235 295 Q 250 270 265 285" fill="none" stroke="#2a1f0f" strokeWidth="2.2" opacity="0.65" />

            {/* Decorative spiral tendrils */}
            <path d="M 320 185 Q 345 205 328 225" fill="none" stroke="#2a1f0f" strokeWidth="1.8" opacity="0.7" />
            <path d="M 180 315 Q 155 295 172 275" fill="none" stroke="#2a1f0f" strokeWidth="1.8" opacity="0.7" />
          </g>

          {/* Cardinal flame ornaments - Mystical accents */}
          <g fill="#2a1f0f" opacity="0.88" strokeWidth="1.2" stroke="#2a1f0f">
            {/* Top ornament */}
            <path d="M 250 5 Q 240 15 245 28 Q 250 24 255 28 Q 260 15 250 5" />
            <line x1="250" y1="10" x2="250" y2="18" />

            {/* Bottom ornament */}
            <path d="M 250 495 Q 240 485 245 472 Q 250 476 255 472 Q 260 485 250 495" />
            <line x1="250" y1="490" x2="250" y2="482" />

            {/* Right ornament */}
            <path d="M 495 250 Q 485 240 472 245 Q 476 250 472 255 Q 485 260 495 250" />
            <line x1="490" y1="250" x2="482" y2="250" />

            {/* Left ornament */}
            <path d="M 5 250 Q 15 240 28 245 Q 24 250 28 255 Q 15 260 5 250" />
            <line x1="10" y1="250" x2="18" y2="250" />
          </g>
        </svg>
      </div>
    </div>
  );
}
