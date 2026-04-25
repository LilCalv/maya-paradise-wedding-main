import { motion } from "framer-motion";
import { Sailboat, Martini, Flame, Music4 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Event = {
  time: string;
  title: string;
  desc: string;
  icon: LucideIcon;
};

const friday: Event[] = [
  {
    time: "10:00 am",
    title: "Excursión a Cabo Catoche",
    desc: "Lancha, snorkel, pesca y ceviche fresco en la arena.",
    icon: Sailboat,
  },
  {
    time: "20:00 h",
    title: "Cóctel Pre-boda",
    desc: "Beach Club de Hotel Las Nubes. Picoteo estilo España 🇪🇸, jamón rico y música flamenquilla.",
    icon: Martini,
  },
];

const saturday: Event[] = [
  {
    time: "17:00 h",
    title: "Ceremonia Maya",
    desc: "✨ Ritual espiritual de conexión con los cuatro elementos guiado por un chamán en Hotel Las Nubes.",
    icon: Flame,
  },
  {
    time: "19:00 h",
    title: "¡Que Empiece la Fiesta!",
    desc: "Cóctel al atardecer con DJ (70s–90s) → Cena bufete mexicano → Pista ON con salsa, flamenco, mariachi y tequila 🇲🇽 🕺",
    icon: Music4,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function DayBlock({ day, date, events }: { day: string; date: string; events: Event[] }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.div className="mb-10 text-center" variants={itemVariants}>
        <p className="text-xs uppercase tracking-[0.45em] text-gold">{day}</p>
        <h3 className="mt-3 font-display text-3xl italic text-emerald-deep md:text-4xl">
          {date}
        </h3>
      </motion.div>

      <ol className="relative mx-auto max-w-2xl">
        <span
          aria-hidden
          className="absolute left-7 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-emerald-deep/40 to-transparent md:left-1/2 md:-translate-x-1/2"
        />
        {events.map((ev, i) => {
          const Icon = ev.icon;
          return (
            <motion.li
              key={ev.title}
              variants={itemVariants}
              className={`relative mb-12 flex gap-6 md:mb-16 md:grid md:grid-cols-2 md:gap-12 ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className={`md:text-right ${i % 2 === 1 ? "md:text-left" : ""}`}>
                <motion.span 
                  className="absolute left-7 top-1.5 z-10 -translate-x-1/2 md:left-1/2"
                  whileHover={{ scale: 1.1, rotate: 180 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream ring-1 ring-gold/60 shadow-gold">
                    <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                  </span>
                </motion.span>
                <p className="ml-20 text-xs uppercase tracking-[0.35em] text-gold md:ml-0">
                  {ev.time}
                </p>
                <h4 className="ml-20 mt-2 font-display text-2xl italic text-emerald-deep md:ml-0 md:text-3xl">
                  {ev.title}
                </h4>
              </div>
              <div className="ml-20 md:ml-0">
                <p className="text-base leading-relaxed text-foreground/80">
                  {ev.desc}
                </p>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </motion.div>
  );
}

export function Itinerary() {
  return (
    <section id="itinerary" className="relative bg-transparent px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <motion.div 
          className="reveal text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs uppercase tracking-[0.45em] text-gold">Itinerario</p>
          <h2 className="mt-4 font-display text-5xl italic text-emerald-deep md:text-6xl" style={{ letterSpacing: "0.01em" }}>
            Nuestra Aventura Juntos
          </h2>
          <div className="ornament-divider mt-8 mx-auto max-w-sm" />
        </motion.div>

        <div className="mt-20 space-y-24">
          <DayBlock day="Día Uno" date="Viernes 4 de Diciembre" events={friday} />
          <DayBlock day="Día Dos" date="Sábado 5 de Diciembre" events={saturday} />
        </div>
      </div>
    </section>
  );
}
