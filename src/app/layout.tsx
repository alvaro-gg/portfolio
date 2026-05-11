import type { Metadata } from "next";
import type { ReactNode } from "react";
import Navbar from "@/app/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Álvaro García — Full-Stack Developer",
  description:
    "Portfolio de Álvaro García. Desarrollador full-stack especializado en React, TypeScript y Node.js.",
};

type LayoutProps = {
  readonly children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="es">
      <body className="min-h-screen">
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-3 focus:py-2 focus:rounded-md focus:text-sm focus:bg-indigo-500 focus:text-white"
        >
          Saltar al contenido
        </a>

        <Navbar />

        <main>{children}</main>

        <footer
          style={{
            borderTop: "1px solid var(--color-border)",
            padding: "1.5rem",
            textAlign: "center",
            fontSize: "0.8rem",
            color: "var(--color-muted)",
            fontFamily: "var(--font-mono)",
          }}
        >
          © {new Date().getFullYear()} Álvaro García · Hecho con Next.js
        </footer>
      </body>
    </html>
  );
}
