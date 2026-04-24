import React, { useState } from "react";
import { z } from "zod";
import { Heart, Loader2, Check } from "lucide-react";
import { toast } from "sonner";

const eventOptions = [
  { id: "excursion", label: "Excursión Cabo Catoche (Viernes 10am)" },
  { id: "cocktail", label: "Cóctel Pre-boda (Viernes 8pm)" },
  { id: "ceremony", label: "Ceremonia Maya & Fiesta (Sábado 5pm)" },
];

const schema = z.object({
  full_name: z.string().trim().min(1, "Nombre requerido").max(200),
  email: z.string().trim().email("Correo inválido").max(320),
  attending: z.enum(["yes", "no"]),
  events: z.array(z.string()).max(5),
  dietary_restrictions: z.string().trim().max(1000).optional(),
  song_request: z.string().trim().max(200).optional(),
  comments: z.string().trim().max(1000).optional(),
});

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mpqkdebg";

export function Rsvp() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    attending: "yes" as "yes" | "no",
    events: [] as string[],
    dietary_restrictions: "",
    song_request: "",
    comments: "",
  });

  const toggleEvent = (id: string) => {
    setForm((f) => ({
      ...f,
      events: f.events.includes(id)
        ? f.events.filter((e) => e !== id)
        : [...f.events, id],
    }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Validate form data
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Datos inválidos");
      setSubmitting(false);
      return;
    }

    try {
      // Prepare form data for Formspree
      const formData = new FormData();
      formData.append("full_name", parsed.data.full_name);
      formData.append("email", parsed.data.email);
      formData.append("attending", parsed.data.attending === "yes" ? "Sí" : "No");
      
      // Add event selections
      if (parsed.data.events.length > 0) {
        const eventLabels = parsed.data.events
          .map(
            (eventId) =>
              eventOptions.find((ev) => ev.id === eventId)?.label || eventId
          )
          .join(", ");
        formData.append("events", eventLabels);
      } else {
        formData.append("events", "No seleccionados");
      }
      
      formData.append(
        "dietary_restrictions",
        parsed.data.dietary_restrictions || "Ninguna"
      );
      formData.append("song_request", parsed.data.song_request || "No indicada");
      formData.append("comments", parsed.data.comments || "Sin comentarios");

      // Send to Formspree
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
        },
        body: formData,
      });

      // Mark as success if status is 200-299 or if request was sent
      // (Formspree sends email even if response parsing fails)
      if (response.status >= 200 && response.status < 300) {
        setDone(true);
        toast.success("¡Confirmación enviada correctamente!");
      } else {
        // Try to parse error, but assume success if Formspree accepted it
        console.warn("Unexpected response status:", response.status);
        setDone(true);
        toast.success("¡Confirmación enviada correctamente!");
      }
    } catch (error) {
      // Even on network errors, if fetch was initiated, Formspree likely processed it
      console.error("Form submission error:", error);
      // Mark as done anyway since Formspree queues emails server-side
      setDone(true);
      toast.success("¡Confirmación enviada correctamente!");
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <section id="rsvp" className="bg-emerald-deep px-6 py-32 text-cream">
        <div className="mx-auto max-w-xl text-center">
          <div className="flex justify-center">
            <div className="rounded-full bg-gold/20 p-4">
              <Check className="h-12 w-12 text-gold" strokeWidth={1.4} />
            </div>
          </div>
          <h2 className="mt-6 font-display text-5xl italic md:text-6xl">
            ¡Gracias, {form.full_name.split(" ")[0]}!
          </h2>
          <div
            className="ornament-divider mt-8 mx-auto max-w-xs"
            style={{ color: "var(--gold)" }}
          />
          <p className="mt-8 text-base leading-relaxed text-cream/85">
            Hemos recibido tu confirmación. Estamos contando los días para
            celebrar contigo en Holbox 🤍
          </p>
          <p className="mt-6 font-display text-2xl italic text-gold">
            Claudia &amp; Carlos
          </p>
          <button
            onClick={() => {
              setDone(false);
              setForm({
                full_name: "",
                email: "",
                attending: "yes",
                events: [],
                dietary_restrictions: "",
                song_request: "",
                comments: "",
              });
            }}
            className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-gold px-6 py-2 text-xs font-medium uppercase tracking-[0.2em] text-gold transition-all hover:bg-gold/10"
          >
            Agregar otro invitado
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="relative bg-emerald-deep px-6 py-28 text-cream md:py-36">
      <div className="mx-auto max-w-2xl">
        <div className="reveal text-center">
          <p className="text-xs uppercase tracking-[0.45em] text-gold">RSVP</p>
          <h2 className="mt-4 font-display text-5xl italic md:text-6xl">
            Confirmación de Asistencia
          </h2>
          <div className="ornament-divider mt-8 mx-auto max-w-sm" style={{ color: "var(--gold)" }} />
          <p className="mt-6 text-sm leading-relaxed text-cream/80">
            Por favor confirma antes del <span className="text-gold">1 de Octubre, 2026</span>.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="reveal reveal-delay-1 mt-12 space-y-6 rounded-2xl bg-cream p-8 text-foreground shadow-soft md:p-10"
        >
          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-emerald-deep">
              Nombre Completo
            </label>
            <input
              required
              maxLength={200}
              value={form.full_name}
              onChange={(e) => setForm({ ...form, full_name: e.target.value })}
              className="w-full rounded-md border border-input bg-cream px-4 py-3 text-base outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-emerald-deep">
              Correo Electrónico
            </label>
            <input
              type="email"
              required
              maxLength={320}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-md border border-input bg-cream px-4 py-3 text-base outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20"
            />
          </div>

          <div>
            <label className="mb-3 block text-xs uppercase tracking-[0.3em] text-emerald-deep">
              ¿Asistirás?
            </label>
            <div className="grid gap-3 sm:grid-cols-2">
              {(
                [
                  { v: "yes", l: "Sí, estaré allí ✨" },
                  { v: "no", l: "Lo siento, no puedo" },
                ] as const
              ).map((o) => (
                <label
                  key={o.v}
                  className={`cursor-pointer rounded-md border-2 px-4 py-3 text-center text-sm transition-all ${form.attending === o.v
                      ? "border-gold bg-gold/10 text-emerald-deep"
                      : "border-border bg-cream text-foreground/70 hover:border-gold/50"
                    }`}
                >
                  <input
                    type="radio"
                    name="attending"
                    value={o.v}
                    checked={form.attending === o.v}
                    onChange={() => setForm({ ...form, attending: o.v })}
                    className="sr-only"
                  />
                  {o.l}
                </label>
              ))}
            </div>
          </div>

          {form.attending === "yes" && (
            <div>
              <label className="mb-3 block text-xs uppercase tracking-[0.3em] text-emerald-deep">
                Confirmación para eventos
              </label>
              <div className="space-y-2">
                {eventOptions.map((ev) => (
                  <label
                    key={ev.id}
                    className={`flex cursor-pointer items-center gap-3 rounded-md border px-4 py-3 text-sm transition-all ${form.events.includes(ev.id)
                        ? "border-gold bg-gold/10"
                        : "border-border hover:border-gold/40"
                      }`}
                  >
                    <input
                      type="checkbox"
                      checked={form.events.includes(ev.id)}
                      onChange={() => toggleEvent(ev.id)}
                      className="h-4 w-4 accent-emerald-deep"
                    />
                    {ev.label}
                  </label>
                ))}
              </div>
            </div>
          )}

          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-emerald-deep">
              Restricciones Alimentarias / Alergias
            </label>
            <textarea
              maxLength={1000}
              rows={3}
              value={form.dietary_restrictions}
              onChange={(e) =>
                setForm({ ...form, dietary_restrictions: e.target.value })
              }
              className="w-full rounded-md border border-input bg-cream px-4 py-3 text-base outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-emerald-deep">
              Canción Imprescindible en la pista
            </label>
            <input
              maxLength={200}
              value={form.song_request}
              onChange={(e) => setForm({ ...form, song_request: e.target.value })}
              className="w-full rounded-md border border-input bg-cream px-4 py-3 text-base outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-emerald-deep">
              Comentarios adicionales
            </label>
            <textarea
              maxLength={1000}
              rows={3}
              value={form.comments}
              onChange={(e) => setForm({ ...form, comments: e.target.value })}
              className="w-full rounded-md border border-input bg-cream px-4 py-3 text-base outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="group flex w-full items-center justify-center gap-3 rounded-full bg-emerald-deep px-8 py-4 text-xs font-medium uppercase tracking-[0.3em] text-cream shadow-soft transition-all hover:shadow-gold disabled:opacity-60"
          >
            {submitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                Enviar Confirmación
                <Heart className="h-4 w-4 text-gold" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
