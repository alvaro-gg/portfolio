"use client";

import { useEffect, useState, useMemo } from "react";
import { useLang } from "@/app/context/LanguageContext";
import { i18n } from "@/app/data/i18n";

type LangButtonProps = Readonly<{
  lang: string;
  onToggleLang: () => void;
}>;

function LangButton({ lang, onToggleLang }: LangButtonProps) {
  return (
    <button
      onClick={onToggleLang}
      aria-label="Switch language"
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "0.75rem",
        color: "var(--color-accent2)",
        background: "rgba(99,102,241,0.1)",
        border: "1px solid rgba(99,102,241,0.25)",
        borderRadius: "6px",
        padding: "4px 10px",
        cursor: "pointer",
        transition: "background 0.2s",
        letterSpacing: "0.05em",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(99,102,241,0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(99,102,241,0.1)";
      }}
    >
      {lang === "es" ? "EN" : "ES"}
    </button>
  );
}

export default function Navbar() {
  const { lang, toggleLang } = useLang();
  const t = i18n[lang].nav;
  const LINKS = useMemo(
    () => [
      { label: t.home, href: "#hero" },
      { label: t.projects, href: "#projects" },
      { label: t.skills, href: "#skills" },
      { label: t.about, href: "#about" },
      { label: t.contact, href: "#contact" },
    ],
    [t],
  );

  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ids = LINKS.map((link) => link.href.slice(1));

    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);

        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [LINKS]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-inner">
        <nav
          aria-label="Navegación principal"
          className="navbar-nav hidden-mobile"
        >
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

          <LangButton lang={lang} onToggleLang={toggleLang} />
        </nav>

        <div
          className="show-mobile"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <LangButton lang={lang} onToggleLang={toggleLang} />

          <button
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              color: "var(--color-text)",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: "currentColor",
                transition: "transform 0.25s",
                transform: open ? "translateY(6.5px) rotate(45deg)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: "currentColor",
                transition: "opacity 0.25s",
                opacity: open ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: "currentColor",
                transition: "transform 0.25s",
                transform: open ? "translateY(-6.5px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>
      </div>

      <div
        className="mobile-menu"
        style={{
          maxHeight: open ? "400px" : "0",
          overflow: "hidden",
          transition: "max-height 0.35s ease",
          borderTop: open ? "1px solid var(--color-border)" : "none",
        }}
      >
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "0.75rem 1.5rem 1.25rem",
            gap: 0,
          }}
        >
          {LINKS.map(({ label, href }) => {
            const id = href.slice(1);
            const isActive = active === id;

            return (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                style={{
                  fontSize: "1rem",
                  textDecoration: "none",
                  color: isActive
                    ? "var(--color-accent2)"
                    : "var(--color-subtle)",
                  fontWeight: isActive ? 500 : 400,
                  padding: "0.75rem 0",
                  borderBottom: "1px solid var(--color-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {label}
                {isActive && (
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "var(--color-accent)",
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
