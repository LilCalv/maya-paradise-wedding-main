/**
 * Floating Elements Component
 * Adds mystical floating decorative elements (palm leaves, Maya glyphs, Spanish guitars)
 * that gently move on scroll
 */

import { useEffect, useState } from "react";

export function FloatingElements() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxTransform = (speed: number, index: number) => {
    const offset = scrollY * speed;
    return `translateY(${offset}px) translateX(${Math.sin(scrollY * 0.001 + index) * 10}px)`;
  };

  return (
    <>
      <style>{`
        .float-element {
          position: fixed;
          pointer-events: none;
          opacity: 0.08;
          z-index: 1;
          will-change: transform;
          transition: transform 0.3s ease-out;
        }

        .float-element svg {
          filter: drop-shadow(0 4px 8px rgba(26, 60, 52, 0.15));
        }

        @keyframes gentleFloat {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(3deg);
          }
        }

        .float-element {
          animation: gentleFloat 25s ease-in-out infinite;
        }

        .float-element:nth-child(even) {
          animation-delay: -5s;
          animation-duration: 30s;
        }
      `}</style>

      {/* Palm Leaf - Top Left */}
      <div
        className="float-element"
        style={{
          top: "10%",
          left: "2%",
          transform: parallaxTransform(0.05, 0),
        }}
      >
        <svg width="120" height="150" viewBox="0 0 120 150" fill="none">
          <path
            d="M60 10 Q45 40 30 70 Q20 95 15 120 M60 10 Q55 45 50 80 Q48 105 45 130 M60 10 Q60 50 60 90 Q60 115 60 140 M60 10 Q65 45 70 80 Q72 105 75 130 M60 10 Q75 40 90 70 Q100 95 105 120"
            stroke="currentColor"
            className="text-emerald-deep"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      {/* Mayan Glyph - Top Right */}
      <div
        className="float-element"
        style={{
          top: "20%",
          right: "5%",
          transform: parallaxTransform(0.03, 1),
        }}
      >
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="35" stroke="currentColor" className="text-gold" strokeWidth="2" />
          <path
            d="M40 15 L40 65 M15 40 L65 40 M25 25 L55 55 M25 55 L55 25"
            stroke="currentColor"
            className="text-gold"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Spanish Guitar - Middle Left */}
      <div
        className="float-element"
        style={{
          top: "45%",
          left: "3%",
          transform: parallaxTransform(0.04, 2),
        }}
      >
        <svg width="60" height="120" viewBox="0 0 60 120" fill="none">
          <ellipse cx="30" cy="80" rx="25" ry="30" stroke="currentColor" className="text-emerald-deep" strokeWidth="2" />
          <rect x="27" y="10" width="6" height="50" stroke="currentColor" className="text-emerald-deep" strokeWidth="2" />
          <line x1="20" y1="65" x2="40" y2="65" stroke="currentColor" className="text-emerald-deep" strokeWidth="1" />
          <line x1="20" y1="75" x2="40" y2="75" stroke="currentColor" className="text-emerald-deep" strokeWidth="1" />
          <line x1="20" y1="85" x2="40" y2="85" stroke="currentColor" className="text-emerald-deep" strokeWidth="1" />
        </svg>
      </div>

      {/* Palm Leaf - Middle Right */}
      <div
        className="float-element"
        style={{
          top: "55%",
          right: "3%",
          transform: parallaxTransform(0.06, 3),
        }}
      >
        <svg width="100" height="130" viewBox="0 0 100 130" fill="none">
          <path
            d="M50 5 Q40 35 25 60 Q15 80 10 100 M50 5 Q47 40 40 70 Q38 90 35 110 M50 5 Q50 45 50 80 Q50 100 50 120 M50 5 Q53 40 60 70 Q62 90 65 110 M50 5 Q60 35 75 60 Q85 80 90 100"
            stroke="currentColor"
            className="text-emerald-deep"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      {/* Mayan Sun Symbol - Bottom Left */}
      <div
        className="float-element"
        style={{
          bottom: "15%",
          left: "4%",
          transform: parallaxTransform(0.02, 4),
        }}
      >
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
          <circle cx="45" cy="45" r="20" stroke="currentColor" className="text-gold" strokeWidth="2" />
          <circle cx="45" cy="45" r="30" stroke="currentColor" className="text-gold" strokeWidth="1.5" strokeDasharray="3 3" />
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x1 = 45 + Math.cos(angle) * 25;
            const y1 = 45 + Math.sin(angle) * 25;
            const x2 = 45 + Math.cos(angle) * 35;
            const y2 = 45 + Math.sin(angle) * 35;
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="currentColor"
                className="text-gold"
                strokeWidth="2"
                strokeLinecap="round"
              />
            );
          })}
        </svg>
      </div>

      {/* Wave Pattern - Bottom Right */}
      <div
        className="float-element"
        style={{
          bottom: "20%",
          right: "4%",
          transform: parallaxTransform(0.05, 5),
        }}
      >
        <svg width="110" height="50" viewBox="0 0 110 50" fill="none">
          <path
            d="M5 25 Q20 10 35 25 T65 25 T95 25"
            stroke="currentColor"
            className="text-emerald-deep"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M5 35 Q20 20 35 35 T65 35 T95 35"
            stroke="currentColor"
            className="text-emerald-deep"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>
    </>
  );
}
