import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Álvaro García — Web Developer",
  description: "Portfolio de Álvaro García. Proyectos, contacto y habilidades.",
};

type LayoutProps = { readonly children: ReactNode };

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="es" className="font-sans">
      <body className="min-h-screen flex flex-col bg-primary text-strong">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 bg-dark text-light px-3 py-2 rounded-md"
        >
          Saltar al contenido
        </a>

        <header className="bg-dark text-light">
          <div className="mx-auto w-full max-w-5xl px-4 py-4 md:py-5">
            <h1 className="text-2xl font-bold text-center">
              Álvaro García - Web Developer
            </h1>
          </div>
        </header>

        <main id="content" className="flex-1">
          <div className="mx-auto w-full max-w-5xl px-4 py-6 md:py-10">
            {children}
          </div>
        </main>

        <footer className="bg-dark text-light">
          <div className="mx-auto w-full max-w-5xl px-4 py-4 text-center">
            © {new Date().getFullYear()} Álvaro García
          </div>
        </footer>
      </body>
    </html>
  );
}
