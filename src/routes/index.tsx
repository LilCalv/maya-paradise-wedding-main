import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/wedding/Hero";
import { HunabKuCover } from "@/components/wedding/HunabKuCover";
import { InLakesh } from "@/components/wedding/InLakesh";
import { Venue } from "@/components/wedding/Venue";
import { Itinerary } from "@/components/wedding/Itinerary";
import { Dresscode } from "@/components/wedding/Dresscode";
import { Return } from "@/components/wedding/Return";
import { Travel } from "@/components/wedding/Travel";
import { Lodging } from "@/components/wedding/Lodging";
import { Music } from "@/components/wedding/Music";
import { Gallery } from "@/components/wedding/Gallery";
import { Rsvp } from "@/components/wedding/Rsvp";
import { Goodbye } from "@/components/wedding/Goodbye";
import { FloatingElements } from "@/components/wedding/FloatingElements";
import { Toaster } from "@/components/ui/sonner";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Claudia y Carlos · Nuestra Boda en Holbox · 4–5 Dic 2026" },
      {
        name: "description",
        content:
          "Acompáñanos a celebrar nuestra boda en Isla Holbox los días 4 y 5 de diciembre de 2026. Ceremonia Maya, paraíso caribeño y mucha fiesta.",
      },
      { property: "og:title", content: "Claudia y Carlos · Boda en Holbox" },
      {
        property: "og:description",
        content:
          "Nuestra Boda en el Paraíso · Hotel Las Nubes, Isla Holbox · 4 y 5 de Diciembre 2026.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function LiquidDivider({
  fromColor = "var(--cream)",
  toColor = "var(--cream)",
  flip = false,
}: {
  fromColor?: string;
  toColor?: string;
  flip?: boolean;
}) {
  return (
    <div
      className={`liquid-divider${flip ? " flip" : ""}`}
      style={{ background: flip ? toColor : fromColor }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1280 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="wave-back"
          fill={flip ? fromColor : toColor}
          d="M0,48 C200,8 440,72 640,32 C840,0 1080,68 1280,44 L1280,80 L0,80 Z"
        />
        <path
          className="wave-front"
          fill={flip ? fromColor : toColor}
          d="M0,40 C180,0 420,80 640,38 C860,0 1100,70 1280,40 L1280,80 L0,80 Z"
        />
      </svg>
    </div>
  );
}

function Index() {
  useReveal();
  return (
    <main className="min-h-screen bg-transparent text-foreground">
      <FloatingElements />
      <Hero />
      <LiquidDivider fromColor="var(--cream)" toColor="var(--cream)" />
      <HunabKuCover />
      <LiquidDivider fromColor="var(--cream)" toColor="var(--cream)" />
      <InLakesh />
      <LiquidDivider fromColor="var(--cream)" toColor="oklch(0.96 0.02 160)" />
      <Venue />
      <LiquidDivider fromColor="oklch(0.96 0.02 160)" toColor="var(--cream)" flip />
      <Itinerary />
      <LiquidDivider fromColor="var(--cream)" toColor="var(--cream)" />
      <Dresscode />
      <LiquidDivider fromColor="var(--cream)" toColor="oklch(0.34 0.07 160)" />
      <Travel />
      <LiquidDivider fromColor="oklch(0.34 0.07 160)" toColor="var(--cream)" flip />
      <Lodging />
      <LiquidDivider fromColor="var(--cream)" toColor="var(--cream)" />
      <Return />
      <LiquidDivider fromColor="var(--cream)" toColor="oklch(0.96 0.02 160)" />
      <Music />
      <LiquidDivider fromColor="oklch(0.96 0.02 160)" toColor="var(--cream)" flip />
      <Gallery />
      <LiquidDivider fromColor="oklch(0.96 0.02 160)" toColor="var(--cream)" flip />
      <Rsvp />
      <Goodbye />
      <Toaster position="top-center" richColors />
    </main>
  );
}
