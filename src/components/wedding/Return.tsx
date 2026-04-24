/**
 * Return Section Component
 * Information about returning from Holbox after the wedding
 */

import { Plane, Bus, Bed, AlertCircle, Clock } from "lucide-react";

function FlightCard({ 
  airline, 
  dates, 
  departure, 
  arrival, 
  duration,
  notes 
}: { 
  airline: string; 
  dates: string; 
  departure: string; 
  arrival: string; 
  duration: string;
  notes?: string;
}) {
  return (
    <div className="reveal rounded-xl border-2 border-gold/20 bg-cream p-6 transition-all hover:border-gold/50 hover:shadow-soft md:p-8">
      <div className="flex items-center gap-3 mb-4">
        <Plane className="h-5 w-5 text-gold" />
        <h4 className="font-display text-xl italic text-emerald-deep">{airline}</h4>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-deep/60">Fechas</p>
          <p className="mt-1 text-sm font-medium text-emerald-deep">{dates}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-deep/60">Salida</p>
          <p className="mt-1 text-sm font-medium text-emerald-deep">{departure}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-deep/60">Llegada</p>
          <p className="mt-1 text-sm font-medium text-emerald-deep">{arrival}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-deep/60">Duración</p>
          <p className="mt-1 text-sm font-medium text-emerald-deep">{duration}</p>
        </div>
      </div>
      {notes && (
        <div className="mt-4 rounded-lg bg-gold/5 p-3 text-sm text-emerald-deep/85">
          {notes}
        </div>
      )}
    </div>
  );
}

function Tip({ icon: Icon, title, desc }: { icon: typeof Plane; title: string; desc: string }) {
  return (
    <div className="flex gap-3 rounded-xl bg-cream p-4 ring-1 ring-border">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-deep/10 text-emerald-deep">
        <Icon className="h-4 w-4" strokeWidth={1.6} />
      </span>
      <div>
        <h5 className="font-display text-sm italic text-emerald-deep">{title}</h5>
        <p className="mt-1 text-xs leading-relaxed text-foreground/75">{desc}</p>
      </div>
    </div>
  );
}

export function Return() {
  return (
    <section
      id="regreso"
      className="relative px-6 py-28 md:py-36"
      style={{ backgroundColor: "var(--cream)" }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="reveal text-center">
          <p className="text-xs uppercase tracking-[0.45em] text-gold">Viaje</p>
          <h2 className="mt-4 font-display text-5xl italic text-emerald-deep md:text-6xl">
            Regreso
          </h2>
          <div className="ornament-divider mt-8 mx-auto max-w-sm" />
        </div>

        {/* Recommendation */}
        <div className="reveal reveal-delay-1 mt-12 rounded-2xl border-2 border-gold/30 bg-gradient-to-br from-gold/5 to-emerald-deep/5 p-8 md:p-10">
          <h3 className="mb-2 font-display text-2xl italic text-emerald-deep md:text-3xl">
            Recomendamos volver el:
          </h3>
          <p className="text-lg font-medium text-gold">📅 Martes 8 de diciembre</p>
          <p className="mt-4 text-sm leading-relaxed text-emerald-deep/85">
            Los vuelos desde Cancún salen por la noche, así que hay tiempo de sobra para hacer el trayecto desde Holbox ese mismo día sin prisas.
          </p>
        </div>

        {/* Flight Options */}
        <div className="reveal reveal-delay-2 mt-12">
          <div className="mb-8 flex items-center gap-3">
            <Plane className="h-6 w-6 text-gold" />
            <h3 className="font-display text-2xl italic text-emerald-deep">
              Opción Recomendada
            </h3>
          </div>
          <p className="mb-4 text-sm text-emerald-deep/80">
            👉 <span className="font-medium">Opción recomendada (para ir juntos)</span>
          </p>
          
          <FlightCard
            airline="Air Europa · Vuelo directo"
            dates="Martes 1 ó Jueves 3 diciembre"
            departure="15:20 h desde Madrid"
            arrival="20:25 h a Cancún"
            duration="~11 horas"
            notes="Este es el vuelo en el que organizamos transporte privado incluido hasta Chiquilá"
          />
        </div>

        {/* Important Info */}
        <div className="reveal reveal-delay-2 mt-8 rounded-xl bg-amber-50/50 p-6 ring-1 ring-amber-100">
          <div className="flex gap-3">
            <AlertCircle className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
            <div>
              <h4 className="font-display text-lg italic text-amber-900">Importante</h4>
              <p className="mt-2 text-sm leading-relaxed text-amber-900/85">
                Al llegar por la noche, se recomienda dormir en Chiquilá, ya que el último ferry sale sobre las 21:30 h.
              </p>
            </div>
          </div>
        </div>

        {/* Chiquilá Lodging */}
        <div className="reveal reveal-delay-3 mt-12">
          <div className="mb-6 flex items-center gap-3">
            <Bed className="h-5 w-5 text-gold" />
            <h3 className="font-display text-2xl italic text-emerald-deep">
              Alojamiento en Chiquilá (1 noche)
            </h3>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <p className="leading-relaxed text-foreground/85">
              Para los que lleguéis por la noche a Cancún, recomendamos hacer noche en Chiquilá antes de cruzar a Holbox al día siguiente.
            </p>
          </div>
        </div>

        {/* Tips */}
        <div className="reveal reveal-delay-3 mt-12 space-y-3">
          <div className="mb-4">
            <h3 className="font-display text-lg italic text-emerald-deep">
              💡 Consejos para el regreso:
            </h3>
          </div>
          <Tip
            icon={Clock}
            title="Último Ferry"
            desc="El último ferry desde Chiquilá sale aprox. a las 21:30 h"
          />
          <Tip
            icon={Bus}
            title="Transporte Incluido"
            desc="Si vuelas con Air Europa, llevan transporte privado incluido desde Cancún a Chiquilá"
          />
          <Tip
            icon={Bed}
            title="Descanso Recomendado"
            desc="Hacer noche en Chiquilá para no madrugar tras la fiesta"
          />
        </div>
      </div>
    </section>
  );
}
