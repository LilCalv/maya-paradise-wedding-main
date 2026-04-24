/**
 * Music & Party Section Component
 * Showcases the music playlist and party vibes for the wedding
 */

const playlistVideos = [
  {
    id: "video1",
    youtubeId: "-nvnRcg2utc",
    title: "Atardecer Místico",
    description: "Para el atardecer y la ceremonia",
  },
  {
    id: "video2",
    youtubeId: "w52Ciwre1aE",
    title: "Rituales de Unidad",
    description: "La magia de Holbox",
  },
];

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
      <div className="reveal mb-12 max-w-2xl">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-emerald-deep/70">
          La Fiesta
        </p>
        <h2 className="font-display text-5xl italic leading-tight text-emerald-deep sm:text-6xl md:text-7xl">
          🔥 Resiste sentado…
          <br />
          <span className="text-gold">si puedes</span>
        </h2>
      </div>

      {/* Intro text */}
      <div className="reveal reveal-delay-1 mb-12 max-w-2xl">
        <p className="font-display text-xl italic text-emerald-deep/90 md:text-2xl">
          Vuestra presencia es el mejor regalo… 🎁
        </p>
        <p className="mt-4 text-sm uppercase tracking-[0.3em] text-emerald-deep/75">
          Pero si queréis ayudar a que suene:
        </p>
      </div>

      {/* Music playlist grid */}
      <div className="reveal reveal-delay-2 grid w-full max-w-3xl grid-cols-1 gap-6 md:grid-cols-2">
        {/* Salsa */}
        <div className="group rounded-2xl border-2 border-gold/20 bg-cream/50 p-8 backdrop-blur-sm transition-all hover:border-gold/50 hover:shadow-soft">
          <p className="text-4xl">💃</p>
          <h3 className="mt-3 font-display text-lg italic text-gold">Salsa</h3>
          <p className="mt-2 text-sm text-emerald-deep/75">
            Que no perdona caderas
          </p>
        </div>

        {/* Mariachi */}
        <div className="group rounded-2xl border-2 border-gold/20 bg-cream/50 p-8 backdrop-blur-sm transition-all hover:border-gold/50 hover:shadow-soft">
          <p className="text-4xl">🎺</p>
          <h3 className="mt-3 font-display text-lg italic text-gold">Mariachi</h3>
          <p className="mt-2 text-sm text-emerald-deep/75">
            Para gritar con alegría
          </p>
        </div>

        {/* 80s/90s Hits */}
        <div className="group rounded-2xl border-2 border-gold/20 bg-cream/50 p-8 backdrop-blur-sm transition-all hover:border-gold/50 hover:shadow-soft">
          <p className="text-4xl">🎸</p>
          <h3 className="mt-3 font-display text-lg italic text-gold">Hits 80/90</h3>
          <p className="mt-2 text-sm text-emerald-deep/75">
            Que salen solos
          </p>
        </div>

        {/* Flamenco & Sevillanas */}
        <div className="group rounded-2xl border-2 border-gold/20 bg-cream/50 p-8 backdrop-blur-sm transition-all hover:border-gold/50 hover:shadow-soft">
          <p className="text-4xl">👣</p>
          <h3 className="mt-3 font-display text-lg italic text-gold">Flamenco</h3>
          <p className="mt-2 text-sm text-emerald-deep/75">
            Que levantan hasta al más serio
          </p>
        </div>
      </div>

      {/* Sintonía de la Boda Section */}
      <div className="reveal reveal-delay-3 mt-24 w-full">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-12">
            <p className="mb-2 text-xs uppercase tracking-[0.45em] text-gold">
              Atmosphere
            </p>
            <h3 className="font-display text-4xl italic text-emerald-deep md:text-5xl">
              ✨ Sintonía de la Boda
            </h3>
            <p className="mt-4 text-sm text-emerald-deep/75">
              La música que define el alma de nuestra celebración
            </p>
          </div>

          {/* YouTube Videos Grid */}
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
            {playlistVideos.map((video) => (
              <div
                key={video.id}
                className="group flex flex-col overflow-hidden rounded-2xl border-2 border-gold/30 bg-cream/60 backdrop-blur-sm transition-all duration-300 hover:border-gold/60 hover:shadow-gold hover:-translate-y-1"
              >
                {/* YouTube Embed */}
                <div className="relative aspect-video overflow-hidden bg-emerald-deep/10">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* Card Content */}
                <div className="flex flex-col justify-between flex-1 p-5">
                  <div>
                    <h4 className="font-display text-lg italic text-gold">
                      {video.title}
                    </h4>
                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-emerald-deep/70">
                      {video.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Promise section */}
      <div className="reveal reveal-delay-3 mt-16 max-w-2xl rounded-2xl border-2 border-gold/30 bg-gradient-to-br from-gold/5 to-emerald-deep/5 p-8 md:p-10">
        <p className="font-display text-lg italic text-emerald-deep md:text-xl">
          Prometemos:
        </p>
        <p className="mt-4 text-base leading-relaxed text-emerald-deep/85">
          Levantar de la silla hasta al más tímido… y que quien diga{" "}
          <span className="italic">"yo no canto"</span> acabe a gritos
          <span className="ml-1 text-xl">🎤😏</span>
        </p>
      </div>

      {/* Dresscode section */}
      <div className="reveal reveal-delay-3 mt-10 max-w-2xl rounded-2xl border-2 border-terracota/40 bg-gradient-to-br from-terracota/8 to-transparent p-8 md:p-10">
        <p className="text-sm uppercase tracking-[0.35em] text-terracota mb-4">
          👔 Dresscode
        </p>
        <div className="space-y-3 text-sm leading-relaxed text-emerald-deep">
          <p>
            <span className="font-semibold text-terracota">Hombres:</span> Guayaberas — elegancia tropical
          </p>
          <p>
            <span className="font-semibold text-terracota">Mujeres:</span> Vestido suelto — comodidad y movimiento
          </p>
          <p className="mt-4 font-display text-base italic text-emerald-deep/90">
            ¡El calzado se va a perder en la pista de baile! 👟✨
          </p>
        </div>
      </div>

      {/* Final warning */}
      <div className="reveal reveal-delay-3 mt-10 max-w-xl">
        <p className="text-sm uppercase tracking-[0.35em] text-gold">
          ⚠️ Advertencia:
        </p>
        <p className="mt-4 font-display text-lg italic text-emerald-deep/90">
          El que no se mueva o cante…
          <br />
          <span className="text-gold">paga los tacos de la resaca!!</span>
          <span className="ml-1">🌮😈</span>
        </p>
      </div>

      {/* Decorative divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-gold/30">
        <div className="h-20 w-px bg-gradient-to-b from-gold/30 to-transparent" />
      </div>
    </section>
  );
}
