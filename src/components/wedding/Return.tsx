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
      className="relative px-6 py-28 md:py-36 bg-transparent"
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

        {/* Tips */}
        <div className="reveal reveal-delay-1 mt-12 space-y-3">
          <div className="mb-4">
            <h3 className="font-display text-lg italic text-emerald-deep">
              💡 Consejos para el regreso:
            </h3>
          </div>
          <div className="reveal rounded-2xl border-2 border-gold/30 bg-gradient-to-br from-gold/5 to-emerald-deep/5 p-6">
            <h4 className="mb-2 font-display text-xl italic text-emerald-deep">
              Recomendamos volver el:
            </h4>
            <p className="text-lg font-medium text-gold">📅 Martes 8 de diciembre</p>
            <p className="mt-3 text-sm leading-relaxed text-emerald-deep/85">
              Los vuelos desde Cancún salen por la noche, así que hay tiempo de sobra para hacer el trayecto desde Holbox ese mismo día sin prisas.
            </p>
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
        </div>
      </div>
    </section>
  );
}
