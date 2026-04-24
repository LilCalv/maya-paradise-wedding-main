import { ExternalLink, Hotel, MapPin, Bike, Wallet, Sun, Leaf, Bus, Ship, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

function HotelCard({
  badge,
  name,
  desc,
  url,
  contact,
}: {
  badge?: string;
  name: string;
  desc: string;
  url?: string;
  contact?: string;
}) {
  return (
    <div className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-gold/60 hover:shadow-soft hover-lift glass-card">
      {badge && (
        <span className="mb-3 inline-block rounded-full bg-emerald-deep px-3 py-1 text-[0.6rem] uppercase tracking-[0.3em] text-cream">
          {badge}
        </span>
      )}
      <h4 className="font-display text-2xl italic text-emerald-deep">{name}</h4>
      <p className="mt-2 text-sm leading-relaxed text-foreground/75">{desc}</p>
      {contact && (
        <p className="mt-3 text-xs leading-relaxed text-emerald-deep/80">
          {contact}
        </p>
      )}
      {url && url !== "#" && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-gold transition-colors hover:text-emerald-deep"
        >
          Visitar web <ExternalLink className="h-3 w-3" />
        </a>
      )}
    </div>
  );
}

function Tip({ icon: Icon, title, desc }: { icon: LucideIcon; title: string; desc: string }) {
  return (
    <div className="flex gap-4 rounded-xl bg-cream p-5 ring-1 ring-border">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-deep/10 text-emerald-deep">
        <Icon className="h-5 w-5" strokeWidth={1.6} />
      </span>
      <div>
        <h5 className="font-display text-lg italic text-emerald-deep">{title}</h5>
        <p className="mt-1 text-sm leading-relaxed text-foreground/75">{desc}</p>
      </div>
    </div>
  );
}

export function Lodging() {
  return (
    <section
      id="lodging"
      className="relative px-6 py-28 md:py-36"
      style={{ backgroundColor: "var(--cream-warm)" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="reveal text-center">
          <p className="text-xs uppercase tracking-[0.45em] text-gold">Detalles</p>
          <h2 className="mt-4 font-display text-5xl italic text-emerald-deep md:text-6xl">
            Alojamiento &amp; Transporte
          </h2>
          <div className="ornament-divider mt-8 mx-auto max-w-sm" />
        </div>

        {/* Holbox lodging */}
        <div className="reveal mt-16">
          <div className="mb-6 flex items-center gap-3">
            <Hotel className="h-5 w-5 text-gold" />
            <h3 className="font-display text-2xl italic text-emerald-deep">
              Dónde Alojarse en Holbox
            </h3>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div className="reveal">
              <HotelCard
                badge="Top · Sede"
                name="Las Nubes de Holbox"
                desc="Hotel Boutique frente al mar. Nuestro hotel sede."
                url="http://lasnubesdeholbox.com"
                contact="Reservas: Bianca Domínguez · +52 998 215 7272 · ventas@youandus.com.mx"
              />
            </div>
            <div className="reveal reveal-delay-1">
              <HotelCard
                name="Hotel Pelícano"
                desc="A 3 minutos andando. Gran opción muy cerca de la fiesta."
                url="#"
                contact="📞 +52 984 4682 · 📧 reservaciones@pelicanorental.mx · Código: boda Carlos y Claudia Holbox"
              />
            </div>
            <div className="reveal reveal-delay-2">
              <HotelCard
                name="Villas Flamingos"
                desc="A 3–5 min andando. Nuestro vecino directo, en la misma playa."
                url="https://www.villasflamingos.com/"
                contact="📧 reservas@villasflamingos.com · 📱 +52 984 875 2167"
              />
            </div>
            <div className="reveal reveal-delay-3">
              <HotelCard
                name="Villas Caracol"
                desc="A 5–7 min andando. Boutique, tranquilo y muy bien ubicado."
                url="https://www.villascaracol.com/"
                contact="📧 recepcion@villascaracol.com · 📱 +52 984 116 1721"
              />
            </div>
            <div className="reveal reveal-delay-4">
              <HotelCard
                name="Casa Hridaya"
                desc="A 5–7 min andando. Pequeño, especial y con un ambiente muy relajado."
                url="https://www.casahridaya.com.mx/"
                contact="📧 holboxhridaya@gmail.com.mx · 📱 +52 811 189 8599"
              />
            </div>
            <div className="reveal reveal-delay-5">
              <HotelCard
                badge="Ambiente"
                name="Villas HM Palapas del Mar"
                desc="Hotel muy bonito y con más ambiente, cerca del centro de Holbox. 10–15 min en carrito."
                url="https://www.hmhotels.com/"
              />
            </div>
          </div>
        </div>

        {/* Chiquilá + tips + transport */}
        <div className="reveal reveal-delay-1 mt-20 space-y-10">
          {/* Transport section */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <Bus className="h-5 w-5 text-gold" />
              <h3 className="font-display text-2xl italic text-emerald-deep">
                Cómo Llegar a Holbox
              </h3>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6 transition-all hover:border-gold/60 hover:shadow-soft">
                <div className="flex items-start gap-4">
                  <Bus className="h-6 w-6 shrink-0 text-gold mt-1" />
                  <div>
                    <h4 className="font-display text-lg italic text-emerald-deep">Bus Privado desde Cancún</h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                      Duración: <strong>2 horas 30 minutos</strong> desde el Aeropuerto de Cancún hasta Chiquilá
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-emerald-deep/90 font-medium">
                      💡 Bus privado incluido si vuelas con los vuelos de Air Europa del día 1 y 3
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 transition-all hover:border-gold/60 hover:shadow-soft">
                <div className="flex items-start gap-4">
                  <Ship className="h-6 w-6 shrink-0 text-gold mt-1" />
                  <div>
                    <h4 className="font-display text-lg italic text-emerald-deep">Ferry desde Chiquilá</h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                      Duración: <strong>30 minutos</strong> de travesía hacia Isla Holbox. ¡Prepárate para las vistas!
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 rounded-xl border border-border bg-card p-6 transition-all hover:border-gold/60 hover:shadow-soft">
                <div className="flex items-start gap-4">
                  <Zap className="h-6 w-6 shrink-0 text-gold mt-1" />
                  <div>
                    <h4 className="font-display text-lg italic text-emerald-deep">Movilidad en Isla Holbox</h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                      <strong>Carritos de Golf:</strong> El principal medio de transporte en la isla. Libres, ecológicos y muy característicos de Holbox ⛳
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hotels and tips grid */}
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <MapPin className="h-5 w-5 text-gold" />
                <h3 className="font-display text-2xl italic text-emerald-deep">
                  Chiquilá · 1 noche sugerida
                </h3>
              </div>
              <div className="space-y-4">
                <HotelCard
                  name="Hotel Pelícano"
                  desc="Decid 'boda Claudia y Carlos' para descuento."
                  url="#"
                />
                <HotelCard name="Villas Hotel Chiquilá" desc="Opción cómoda y práctica." url="#" />
              </div>
            </div>

            <div>
              <div className="mb-6 flex items-center gap-3">
                <Leaf className="h-5 w-5 text-gold" />
                <h3 className="font-display text-2xl italic text-emerald-deep">
                  Consejos Clave
                </h3>
              </div>
              <div className="space-y-4">
                <div className="rounded-xl bg-gold/10 p-5 ring-2 ring-gold/40">
                  <div className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold">
                      <Wallet className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <div>
                      <h5 className="font-display text-lg italic text-emerald-deep font-semibold">⚠️ IMPORTANTE: Cambiar Efectivo en Cancún</h5>
                      <p className="mt-1 text-sm leading-relaxed text-foreground/90">
                        Los cajeros en Holbox suelen fallar. <strong>Lleva suficientes pesos mexicanos en efectivo desde Cancún 💵</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <Tip
                  icon={Bike}
                  title="Moverse por Holbox"
                  desc="No hay coches. Usar carrito de golf o bici 🚲. Si te alojas en Punta Mosquito, vas andando."
                />
                <Tip
                  icon={Sun}
                  title="Clima &amp; Mood"
                  desc="Perfecto, 24–28°C 🌤️. Mentalidad Holbox: relax, sin prisas 🧘‍♂️."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
