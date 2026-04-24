import { useEffect, useState } from "react";

const TARGET = new Date("2026-12-04T17:00:00-05:00").getTime();

function getDiff() {
  const now = Date.now();
  const diff = Math.max(0, TARGET - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export function Countdown() {
  const [time, setTime] = useState(getDiff);

  useEffect(() => {
    const id = setInterval(() => setTime(getDiff()), 1000);
    return () => clearInterval(id);
  }, []);

  const items = [
    { label: "Días", value: time.days },
    { label: "Horas", value: time.hours },
    { label: "Min", value: time.minutes },
    { label: "Seg", value: time.seconds },
  ];

  return (
    <div className="reveal reveal-delay-3 mt-10 flex items-center justify-center gap-3 sm:gap-5">
      {items.map((it, i) => (
        <div key={it.label} className="flex items-center gap-3 sm:gap-5">
          <div className="flex min-w-[64px] flex-col items-center rounded-xl border border-gold/40 bg-cream/70 px-4 py-3 shadow-soft backdrop-blur-sm sm:min-w-[84px] sm:px-5 sm:py-4">
            <span 
              className="font-display text-3xl italic leading-none text-emerald-deep sm:text-5xl"
              suppressHydrationWarning
            >
              {String(it.value).padStart(2, "0")}
            </span>
            <span className="mt-1.5 text-[0.6rem] uppercase tracking-[0.3em] text-gold sm:text-xs">
              {it.label}
            </span>
          </div>
          {i < items.length - 1 && (
            <span className="font-display text-2xl italic text-gold/70 sm:text-3xl">
              ✦
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
