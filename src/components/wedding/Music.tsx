/**
 * Music & Party Section Component
 * Showcases the Spotify playlists for guests to add their favorite songs
 */

import { motion } from "framer-motion";
import { Music4, Guitar, Drum, PartyPopper, Flame, Disc, Heart, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Playlist = {
  id: string;
  name: string;
  title: string;
  description: string;
  icon: LucideIcon;
  emoji: string;
  url: string;
  color: string;
};

const playlists: Playlist[] = [
  {
    id: "mexicano",
    name: "Holbox Mexicano",
    title: "Mexicano",
    description: "Mariachis, norteñas y rancheras",
    icon: Drum,
    emoji: "🎺",
    url: "https://open.spotify.com/playlist/1GnIJ9RW89Ka3XHtMtQ5vw?si=ceaa055f47e24fb1&pt=f78dec2d354bcf8d5be4ba854f731001",
    color: "from-red-500/20 to-green-500/20",
  },
  {
    id: "latino",
    name: "Holbox Latino",
    title: "Latino",
    description: "Salsa, bachata y reggaetón",
    icon: PartyPopper,
    emoji: "💃",
    url: "https://open.spotify.com/playlist/12yK3queCGyc63QF7Dh3Kj?si=d1261a53257f4995&pt=94de3b705e773f46fe1d125deb6cd500",
    color: "from-orange-500/20 to-pink-500/20",
  },
  {
    id: "trovador",
    name: "Holbox Trovador",
    title: "Trovador",
    description: "Trova cubana y boleros",
    icon: Guitar,
    emoji: "🎸",
    url: "https://open.spotify.com/playlist/2mZTn1DkFEb76V5nf4qNi4?si=eaf9e2aa7ff74bce&pt=d7d42383c6569418562f5dd5bf7da4e1",
    color: "from-amber-500/20 to-yellow-500/20",
  },
  {
    id: "sevilla",
    name: "Holbox Sevilla",
    title: "Sevilla",
    description: "Sevillanas y copla española",
    icon: Flame,
    emoji: "💫",
    url: "https://open.spotify.com/playlist/0WXxdio8oCMObUASF3hiWa?si=c2691f2d64fa44b5&pt=99af902917a2813d5773aada3e2ae210",
    color: "from-rose-500/20 to-red-500/20",
  },
  {
    id: "espanola",
    name: "Holbox Española",
    title: "Española",
    description: "Pop y rock español",
    icon: Music4,
    emoji: "🎤",
    url: "https://open.spotify.com/playlist/5MIVmGzOEX3XlzDCiGmSOt?si=7e57efcde23f4735&pt=ea37e15005fee84f35191ebd47186cf7",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    id: "pachanga",
    name: "Holbox Pachanga",
    title: "Pachanga",
    description: "Rumba, cumbia y son montuno",
    icon: Disc,
    emoji: "🪘",
    url: "https://open.spotify.com/playlist/2xnEBxIbcmnWLnQCalUQpm?si=7b2a583fa8274af1&pt=bfeb09c94dcf79c4f43d26c28ec49fb8",
    color: "from-yellow-500/20 to-orange-500/20",
  },
  {
    id: "internacional",
    name: "Holbox Internacional",
    title: "Internacional",
    description: "Hits 80s/90s que todos cantan",
    icon: Globe,
    emoji: "🌍",
    url: "https://open.spotify.com/playlist/6Xyt452IzaHpVujRfXptVf?si=89799e509b5247de&pt=c7c728681ed54e735861999ebb913661",
    color: "from-indigo-500/20 to-cyan-500/20",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function PlaylistCard({ playlist, index }: { playlist: Playlist; index: number }) {
  const Icon = playlist.icon;

  return (
    <motion.div
      variants={cardVariants}
      className={`group relative overflow-hidden rounded-2xl border-2 border-gold/20 bg-gradient-to-br ${playlist.color} p-6 backdrop-blur-sm transition-all duration-300 hover:border-gold/60 hover:shadow-[0_8px_30px_rgb(212,175,55,0.15)] hover:-translate-y-2 glass-card md:p-8`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Background decoration */}
      <div className="absolute -top-2 -right-2 opacity-5 text-9xl pointer-events-none transition-all duration-500 group-hover:scale-110 group-hover:opacity-10">
        {playlist.emoji}
      </div>

      <div className="relative z-10">
        {/* Icon */}
        <motion.div 
          className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-gold/20 text-gold ring-1 ring-gold/30"
          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="h-8 w-8" strokeWidth={1.8} />
        </motion.div>

        {/* Title */}
        <h4 className="font-display text-2xl italic text-emerald-deep mb-3 md:text-3xl" style={{ letterSpacing: "0.02em" }}>
          {playlist.title}
        </h4>

        {/* Description */}
        <p className="text-sm text-foreground/75 mb-6 leading-relaxed">
          {playlist.description}
        </p>

        {/* Button */}
        <motion.a
          href={playlist.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-emerald-deep px-6 py-3 text-sm font-medium text-cream transition-all hover:bg-gold"
          whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(212, 175, 55, 0.3)" }}
          whileTap={{ scale: 0.98 }}
        >
          <Heart className="h-4 w-4" />
          Añadir Canción
        </motion.a>
      </div>
    </motion.div>
  );
}

export function Music() {
  return (
    <section
      id="musica"
      className="relative isolate px-6 py-28 text-center md:py-36"
    >
      <div className="mx-auto max-w-7xl">
        {/* Main heading */}
        <motion.div 
          className="reveal mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-emerald-deep/70">
            La Banda Sonora
          </p>
          <h2 className="font-display text-5xl italic leading-tight text-emerald-deep sm:text-6xl md:text-7xl" style={{ letterSpacing: "0.01em" }}>
            🎵 ¡Todos Hacemos la Música!
          </h2>
          <p className="mt-6 font-display text-xl italic text-emerald-deep/90 md:text-2xl">
            Agreguen sus canciones favoritas
          </p>
        </motion.div>

        {/* Subtitle */}
        <motion.div 
          className="reveal reveal-delay-1 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-base text-foreground/80 leading-relaxed">
            Tenemos playlists para todos los gustos. ¡Elige tu estilo y añade esas canciones que no pueden faltar! 🎶
          </p>
        </motion.div>

        {/* Playlists Grid */}
        <motion.div 
          className="grid w-full max-w-7xl mx-auto grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {playlists.map((playlist, index) => (
            <PlaylistCard key={playlist.id} playlist={playlist} index={index} />
          ))}
        </motion.div>

        {/* Footer note */}
        <motion.div 
          className="mt-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-sm italic text-foreground/60">
            💡 Tip: No te cortes, ¡cuantos más hits añadamos, mejor será la fiesta!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
