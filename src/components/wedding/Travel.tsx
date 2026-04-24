import { useRef } from "react";
import { Plane, Bus, Ship, Heart } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionTemplate,
} from "framer-motion";

type Step = {
  icon: LucideIcon;
  step: string;
  title: string;
  desc: string;
};

const steps: Step[] = [
  {
    icon: Plane,
    step: "01",
    title: "Vuelo Directo Madrid → Cancún",
    desc: "Air Europa, Iberojet, World2Fly. Aprox. 11h. Te sugerimos Air Europa (Martes 1 ó Jueves 3 Dic).",
  },
  {
    icon: Bus,
    step: "02",
    title: "Bus Privado Cancún → Chiquilá",
    desc: "2:30h aprox. Incluido si vuelas con Air Europa. Noche en Chiquilá.",
  },
  {
    icon: Ship,
    step: "03",
    title: "Ferry Chiquilá → Holbox",
    desc: "30 min. Por vuestra cuenta.",
  },
  {
    icon: Heart,
    step: "04",
    title: "Carrito de Golf",
    desc: "Hasta tu hotel (5–10 min).",
  },
];

// Desktop SVG path: smooth wave across viewport
const DESKTOP_PATH = "M 60 80 Q 320 0 600 80 T 1140 80";
// Mobile SVG path: vertical zigzag
const MOBILE_PATH =
  "M 50 40 Q 250 120 50 240 Q -150 360 50 480 Q 250 600 50 720";

// Each step's normalized position along the scroll progress (0..1)
// Mapped so vehicle reaches each station evenly across the journey
const STATION_POINTS = [0.18, 0.42, 0.66, 0.9];

export function Travel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const desktopPathRef = useRef<SVGPathElement>(null);
  const mobilePathRef = useRef<SVGPathElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Smooth out scroll progress
  const progress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 22,
    mass: 0.4,
  });

  // Path-fill: stroke-dashoffset goes from full length to 0
  const pathLengthFill = useTransform(progress, [0, 1], [1, 0]);

  // Position vehicle along path — desktop
  const dxDesktop = useTransform(progress, (v) => {
    const path = desktopPathRef.current;
    if (!path) return 0;
    const len = path.getTotalLength();
    const pt = path.getPointAtLength(len * Math.min(Math.max(v, 0), 1));
    return pt.x;
  });
  const dyDesktop = useTransform(progress, (v) => {
    const path = desktopPathRef.current;
    if (!path) return 0;
    const len = path.getTotalLength();
    const pt = path.getPointAtLength(len * Math.min(Math.max(v, 0), 1));
    return pt.y;
  });
  const desktopTransform = useMotionTemplate`translate(${dxDesktop}px, ${dyDesktop}px) translate(-50%, -50%)`;

  // Position vehicle along path — mobile
  const dxMobile = useTransform(progress, (v) => {
    const path = mobilePathRef.current;
    if (!path) return 0;
    const len = path.getTotalLength();
    const pt = path.getPointAtLength(len * Math.min(Math.max(v, 0), 1));
    return pt.x;
  });
  const dyMobile = useTransform(progress, (v) => {
    const path = mobilePathRef.current;
    if (!path) return 0;
    const len = path.getTotalLength();
    const pt = path.getPointAtLength(len * Math.min(Math.max(v, 0), 1));
    return pt.y;
  });
  const mobileTransform = useMotionTemplate`translate(${dxMobile}px, ${dyMobile}px) translate(-50%, -50%)`;

  return (
    <section
      id="travel"
      ref={sectionRef}
      className="relative px-6"
      style={{
        backgroundImage:
          "linear-gradient(180deg, var(--cream-warm), var(--cream))",
        // Tall section so the scroll-driven animation has room
        minHeight: "320vh",
      }}
    >
      {/* Sticky stage */}
      <div className="sticky top-0 mx-auto flex min-h-screen max-w-7xl flex-col justify-center py-20">
        {/* Sticky header */}
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.45em] text-gold">
            Cómo Llegar
          </p>
          <h2 className="mt-4 font-display text-5xl italic text-emerald-deep md:text-6xl">
            Tu Camino al Paraíso
          </h2>
          <p className="mt-4 text-sm uppercase tracking-[0.3em] text-emerald-deep/70">
            ¡De Madrid a Holbox!
          </p>
          <div className="ornament-divider mt-6 mx-auto max-w-sm" />
        </div>

        {/* DESKTOP path stage */}
        <div className="relative mt-12 hidden md:block">
          <div className="relative h-[200px] w-full">
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 1200 160"
              preserveAspectRatio="none"
              aria-hidden
            >
              {/* Background path (light) */}
              <path
                d={DESKTOP_PATH}
                fill="none"
                stroke="currentColor"
                className="text-emerald-deep/15"
                strokeWidth="2"
                strokeDasharray="6 8"
                strokeLinecap="round"
              />
              {/* Animated gold fill path */}
              <motion.path
                ref={desktopPathRef}
                d={DESKTOP_PATH}
                fill="none"
                stroke="currentColor"
                className="text-gold"
                strokeWidth="2.5"
                strokeLinecap="round"
                pathLength={1}
                style={{ pathLength: useTransform(progress, [0, 1], [0, 1]) }}
              />
              {/* Stations */}
              {STATION_POINTS.map((p, i) => {
                const path = desktopPathRef.current;
                if (!path) return null;
                const pt = path.getPointAtLength(path.getTotalLength() * p);
                return (
                  <g key={i}>
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r="6"
                      className="fill-cream"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </g>
                );
              })}
            </svg>

            {/* Stations overlay (HTML, for crisp dots independent of SVG render) */}
            {STATION_POINTS.map((p, i) => (
              <StationDot key={i} progress={progress} target={p} pos={`${p * 100}%`} />
            ))}

            {/* Moving vehicles — desktop */}
            {steps.map((s, i) => (
              <Vehicle
                key={i}
                index={i}
                Icon={s.icon}
                progress={progress}
                transform={desktopTransform}
              />
            ))}
          </div>

          {/* Step cards row */}
          <ol className="mt-8 grid grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <StepCard key={s.step} step={s} index={i} progress={progress} />
            ))}
          </ol>
        </div>

        {/* MOBILE path stage */}
        <div className="relative mt-10 md:hidden">
          <div className="relative mx-auto h-[760px] w-full max-w-[340px]">
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 200 760"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                d={MOBILE_PATH}
                fill="none"
                stroke="currentColor"
                className="text-emerald-deep/15"
                strokeWidth="2"
                strokeDasharray="6 8"
                strokeLinecap="round"
              />
              <motion.path
                ref={mobilePathRef}
                d={MOBILE_PATH}
                fill="none"
                stroke="currentColor"
                className="text-gold"
                strokeWidth="2.5"
                strokeLinecap="round"
                style={{ pathLength: useTransform(progress, [0, 1], [0, 1]) }}
              />
            </svg>

            {/* Mobile vehicle */}
            {steps.map((s, i) => (
              <Vehicle
                key={i}
                index={i}
                Icon={s.icon}
                progress={progress}
                transform={mobileTransform}
                size="sm"
              />
            ))}

            {/* Mobile step labels positioned alongside path */}
            <div className="absolute inset-0 flex flex-col justify-between py-2">
              {steps.map((s, i) => (
                <MobileStepLabel
                  key={s.step}
                  step={s}
                  index={i}
                  progress={progress}
                />
              ))}
            </div>
          </div>
        </div>

        {/* End message */}
        <FinaleMessage progress={progress} />
      </div>
    </section>
  );
}

/* ---------- Sub-components ---------- */

function StationDot({
  progress,
  target,
  pos,
}: {
  progress: ReturnType<typeof useSpring>;
  target: number;
  pos: string;
}) {
  const scale = useTransform(
    progress,
    [target - 0.06, target, target + 0.06],
    [1, 1.6, 1.15]
  );
  const opacity = useTransform(
    progress,
    [0, target - 0.05, target],
    [0.4, 0.7, 1]
  );
  return (
    <motion.span
      style={{
        left: pos,
        top: "50%",
        scale,
        opacity,
        x: "-50%",
        y: "-50%",
      }}
      className="pointer-events-none absolute h-3 w-3 rounded-full bg-gold ring-4 ring-gold/20"
    />
  );
}

function Vehicle({
  index,
  Icon,
  progress,
  transform,
  size = "md",
}: {
  index: number;
  Icon: LucideIcon;
  progress: ReturnType<typeof useSpring>;
  transform: ReturnType<typeof useMotionTemplate>;
  size?: "sm" | "md";
}) {
  // Each vehicle is visible only during its "leg" of the journey
  const start = index === 0 ? 0 : STATION_POINTS[index - 1] - 0.04;
  const peak = STATION_POINTS[index];
  const end =
    index === steps.length - 1 ? 1.05 : STATION_POINTS[index] + 0.06;

  const opacity = useTransform(
    progress,
    [start, start + 0.04, peak, end, end + 0.04],
    [0, 1, 1, 1, 0]
  );
  const scale = useTransform(
    progress,
    [start, peak, end],
    [0.85, 1, 0.85]
  );

  const dim = size === "sm" ? "h-12 w-12" : "h-14 w-14";
  const iconSize = size === "sm" ? "h-5 w-5" : "h-6 w-6";

  return (
    <motion.div
      style={{
        transform,
        opacity,
        scale,
        position: "absolute",
        top: 0,
        left: 0,
      }}
      className="pointer-events-none"
    >
      <span
        className={`relative flex ${dim} items-center justify-center rounded-full bg-cream ring-1 ring-gold/60 shadow-gold`}
      >
        <Icon
          className={`${iconSize} text-emerald-deep`}
          strokeWidth={1.6}
          fill={Icon === Heart ? "currentColor" : "none"}
        />
      </span>
    </motion.div>
  );
}

function StepCard({
  step,
  index,
  progress,
}: {
  step: Step;
  index: number;
  progress: ReturnType<typeof useSpring>;
}) {
  const target = STATION_POINTS[index];
  const opacity = useTransform(
    progress,
    [target - 0.12, target - 0.02, target],
    [0.3, 0.7, 1]
  );
  const y = useTransform(
    progress,
    [target - 0.12, target],
    [12, 0]
  );
  const fontWeight = useTransform(progress, (v) =>
    v >= target - 0.02 ? 600 : 400
  );

  return (
    <motion.li
      style={{ opacity, y }}
      className="flex flex-col items-center text-center"
    >
      <p className="font-display text-3xl italic text-gold">{step.step}</p>
      <motion.h3
        style={{ fontWeight }}
        className="mt-1 font-display text-xl italic text-emerald-deep"
      >
        {step.title}
      </motion.h3>
      <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-foreground/75">
        {step.desc}
      </p>
    </motion.li>
  );
}

function MobileStepLabel({
  step,
  index,
  progress,
}: {
  step: Step;
  index: number;
  progress: ReturnType<typeof useSpring>;
}) {
  const target = STATION_POINTS[index];
  const opacity = useTransform(
    progress,
    [target - 0.12, target - 0.02, target],
    [0.25, 0.7, 1]
  );
  // Alternate side to match zigzag path
  const sideRight = index % 2 === 1;

  return (
    <motion.div
      style={{ opacity }}
      className={`relative flex w-full ${sideRight ? "justify-end pr-2" : "justify-start pl-2"}`}
    >
      <div className={`max-w-[60%] ${sideRight ? "text-right" : "text-left"}`}>
        <p className="font-display text-2xl italic text-gold">{step.step}</p>
        <h3 className="font-display text-base italic text-emerald-deep">
          {step.title}
        </h3>
        <p className="mt-1 text-xs leading-relaxed text-foreground/75">
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
}

function FinaleMessage({
  progress,
}: {
  progress: ReturnType<typeof useSpring>;
}) {
  const opacity = useTransform(progress, [0.88, 0.96], [0, 1]);
  const y = useTransform(progress, [0.88, 0.96], [16, 0]);
  return (
    <motion.div style={{ opacity, y }} className="mt-10 text-center">
      <p className="font-display text-3xl italic text-emerald-deep md:text-4xl">
        ¡Y Listo! ¡A disfrutar del paraíso!
      </p>
      <div className="ornament-divider mt-6 mx-auto max-w-xs">
        <span className="text-gold">✦</span>
      </div>
    </motion.div>
  );
}
