"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { label: "Inicio", href: "#hero" },
  { label: "Proyectos", href: "#projects" },
  { label: "Habilidades", href: "#skills" },
  { label: "Sobre mí", href: "#about" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = LINKS.map((link) => link.href.slice(1));

      for (const id of [...sections].reverse()) {
        const element = document.getElementById(id);

        if (element && window.scrollY >= element.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-inner">
        <nav aria-label="Navegación principal" className="navbar-nav">
          {LINKS.map(({ label, href }) => {
            const id = href.slice(1);
            const isActive = active === id;

            return (
              <a
                key={href}
                href={href}
                className={`navbar-link ${isActive ? "navbar-link-active" : ""}`}
              >
                {label}
                {isActive && <span className="navbar-link-indicator" />}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
