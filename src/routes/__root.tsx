import React from "react";
import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { motion } from "framer-motion";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lovable App" },
      { name: "description", content: "Lovable Generated Project" },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "Lovable Generated Project" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      {/* FONDO GLOBAL ORGÁNICO - Agua de Holbox desde la Esquina */}
      <div className="fixed inset-0 z-[-10] pointer-events-none" style={{ backgroundColor: '#f5f2e8' }}>
        {/* Blob de Agua Animado en Esquina Inferior Izquierda */}
        <div
          className="absolute"
          style={{
            bottom: '-30%',
            left: '-30%',
            width: '80%',
            height: '80%',
            background: 'radial-gradient(circle, rgba(38, 166, 154, 0.12) 0%, rgba(38, 166, 154, 0.08) 40%, transparent 70%)',
            animation: 'water-blob 20s ease-in-out infinite',
            transformOrigin: 'center center',
          }}
        />
        
        {/* Blob de Agua Secundario en Esquina Superior Derecha */}
        <div
          className="absolute"
          style={{
            top: '-20%',
            right: '-20%',
            width: '60%',
            height: '60%',
            background: 'radial-gradient(ellipse, rgba(38, 166, 154, 0.08) 0%, rgba(38, 166, 154, 0.05) 50%, transparent 70%)',
            animation: 'water-blob-secondary 25s ease-in-out infinite',
            transformOrigin: 'center center',
          }}
        />
        
        {/* Ola Sutil que Cruza la Pantalla */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, transparent 0%, rgba(38, 166, 154, 0.03) 50%, transparent 100%)',
            animation: 'water-drift 30s ease-in-out infinite',
          }}
        />
      </div>
      
      {/* Animaciones CSS para Agua Orgánica */}
      <style>{`
        @keyframes water-blob {
          0% {
            transform: scale(1) rotate(0deg);
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          25% {
            transform: scale(1.1) rotate(5deg);
            border-radius: 30% 60% 70% 40% / 50% 60% 40% 50%;
          }
          50% {
            transform: scale(0.95) rotate(-3deg);
            border-radius: 50% 50% 30% 60% / 30% 60% 50% 60%;
          }
          75% {
            transform: scale(1.05) rotate(8deg);
            border-radius: 70% 30% 50% 50% / 60% 40% 60% 40%;
          }
          100% {
            transform: scale(1) rotate(0deg);
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
        }
        
        @keyframes water-blob-secondary {
          0% {
            transform: scale(1) rotate(0deg);
            border-radius: 40% 60% 60% 40% / 50% 70% 30% 50%;
          }
          33% {
            transform: scale(1.08) rotate(-4deg);
            border-radius: 60% 40% 50% 60% / 70% 30% 60% 40%;
          }
          66% {
            transform: scale(0.92) rotate(6deg);
            border-radius: 50% 60% 40% 50% / 40% 50% 60% 50%;
          }
          100% {
            transform: scale(1) rotate(0deg);
            border-radius: 40% 60% 60% 40% / 50% 70% 30% 50%;
          }
        }
        
        @keyframes water-drift {
          0% {
            opacity: 0.5;
            transform: translateX(0) translateY(0);
          }
          50% {
            opacity: 0.8;
            transform: translateX(20px) translateY(-10px);
          }
          100% {
            opacity: 0.5;
            transform: translateX(0) translateY(0);
          }
        }
      `}</style>
      
      <Outlet />
    </>
  );
}
