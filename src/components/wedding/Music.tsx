/**
 * Music & Party Section Component
 * Showcases the Spotify playlists for guests to add their favorite songs
 */

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

function PlaylistCard({ playlist }: { playlist: Playlist }) {
  const Icon = playlist.icon;

  return (
    <div className={`group relative overflow-hidden rounded-2xl border-2 border-gold/20 bg-gradient-to-br ${playlist.color} p-6 backdrop-blur-sm transition-all duration-300 hover:border-gold/60 hover:shadow-soft hover:-translate-y-1 hover-lift`}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 opacity-5 text-8xl pointer-events-none">
        {playlist.emoji}
      </div>

      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/20 text-gold ring-1 ring-gold/30 transition-all group-hover:scale-110 group-hover:bg-gold/30">
          <Icon className="h-7 w-7" strokeWidth={1.8} />
        </div>

        {/* Title */}
        <h4 className="font-display text-2xl italic text-emerald-deep mb-2">
          {playlist.title}
        </h4>

        {/* Description */}
        <p className="text-sm text-foreground/75 mb-6">
          {playlist.description}
        </p>

        {/* Button */}
        <a
          href={playlist.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-emerald-deep px-5 py-2.5 text-sm font-medium text-cream transition-all hover:bg-gold hover:scale-105 hover:shadow-gold"
        >
          <Heart className="h-4 w-4" />
          Añadir Canción
        </a>
      </div>
    </div>
  );
}

export function Music() {
  return (
    <section
      id="musica"
      className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-20 text-center paper-grain"
      style={{
        background: "linear-gradient(135deg, oklch(0.96 0.02 160) 0%, var(--cream) 100%)",
      }}
    >
      {/* Main heading */}
      <div className="reveal mb-8 max-w-3xl">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-emerald-deep/70">
          La Banda Sonora
        </p>
        <h2 className="font-display text-5xl italic leading-tight text-emerald-deep sm:text-6xl md:text-7xl">
          🎵 ¡Todos Hacemos la Música!
        </h2>
        <p className="mt-6 font-display text-xl italic text-emerald-deep/90 md:text-2xl">
          Agreguen sus canciones favoritas
        </p>
      </div>

      {/* Subtitle */}
      <div className="reveal reveal-delay-1 mb-12 max-w-2xl">
        <p className="text-base text-foreground/80 leading-relaxed">
          Tenemos playlists para todos los gustos. ¡Elige tu estilo y añade esas canciones que no pueden faltar! 🎶
        </p>
      </div>

      {/* Playlists Grid */}
      <div className="reveal reveal-delay-2 grid w-full max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {playlists.map((playlist, index) => (
          <div key={playlist.id} className={`reveal-delay-${Math.min(index + 2, 5)}`}>
            <PlaylistCard playlist={playlist} />
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="reveal reveal-delay-3 mt-16 max-w-2xl">
        <p className="text-sm italic text-foreground/60">
          💡 Tip: No te cortes, ¡cuantos más hits añadamos, mejor será la fiesta!
        </p>
      </div>
    </section>
  );
}
