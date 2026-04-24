import aerial from "@/assets/holbox-aerial.jpg";

export function Venue() {
  return (
    <section
      id="venue"
      className="relative px-6 py-28 md:py-36"
      style={{ backgroundColor: "var(--cream-warm)" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="reveal text-center">
          <p className="text-xs uppercase tracking-[0.45em] text-gold">
            El Lugar
          </p>
          <h2 className="mt-4 font-display text-5xl italic text-emerald-deep md:text-6xl">
            Nuestro refugio en el paraíso
          </h2>
          <div className="ornament-divider mt-8 mx-auto max-w-sm" />
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-5 md:items-center">
          <div className="reveal reveal-delay-1 md:col-span-3">
            <div className="overflow-hidden rounded-2xl shadow-soft ring-1 ring-emerald-deep/10">
              <img
                src={aerial}
                alt="Vista aérea del Hotel Las Nubes en Holbox"
                width={1600}
                height={1000}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1500ms] hover:scale-105"
              />
            </div>
            <p className="mt-3 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Hotel Las Nubes · Isla de Holbox
            </p>
          </div>

          <div className="reveal reveal-delay-2 md:col-span-2">
            <p className="font-display text-xl italic leading-relaxed text-emerald-deep/90 md:text-2xl">
              “Donde el mar se funde con el cielo en tonos turquesa y dorados.”
            </p>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/80">
              <p>
                <span className="font-medium text-emerald-deep">Isla de Holbox:</span>{" "}
                En el extremo más sereno de la isla, donde el mar se funde con el
                cielo en tonos turquesa y dorados, se encuentra nuestro{" "}
                <span className="font-medium text-emerald-deep">HOTEL SEDE: Hotel Las Nubes de Holbox</span>.
                Un rincón íntimo y sofisticado, rodeado de naturaleza virgen y
                playas de arena blanca que invitan a desconectar del mundo y
                sumergirse en la magia del Caribe mexicano: amaneceres
                silenciosos, brisas cálidas, y atardeceres que pintan el
                horizonte con colores irrepetibles.
              </p>
              <p>
                Hemos elegido el Hotel Las Nubes como punto de encuentro porque
                es justo el plan que nos apetecía compartir con vosotros. La
                idea es estar todos juntos, desconectar, disfrutar del mar y
                pasarlo muy bien. Así que venid con ganas de sol, risas y mucha
                fiesta… que esto promete 🤍
              </p>
              <p className="font-display text-xl italic text-gold">
                ¡Bienvenidos a nuestro pequeño paraíso!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
