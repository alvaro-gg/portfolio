"use client";

import { useLang } from "@/app/context/LanguageContext";
import { i18n } from "@/app/data/i18n";
import { CONTACT } from "../data/portfolio";
import ContactIcon from "./ContactIcon";
import SectionLabel from "./SectionLabel";

export default function ContactSection() {
  const { lang } = useLang();
  const t = i18n[lang].contact;

  const contacts = CONTACT[lang];

  return (
    <section
      id="contact"
      style={{
        padding: "5rem 1.5rem 6rem",
        maxWidth: "1120px",
        margin: "0 auto",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <SectionLabel>{t.label}</SectionLabel>

      <h2
        style={{
          fontSize: "clamp(1.7rem, 4vw, 2.35rem)",
          fontWeight: 650,
          letterSpacing: "-0.035em",
          color: "var(--color-text)",
          marginBottom: "0.75rem",
        }}
      >
        {t.title}
      </h2>

      <p
        style={{
          fontSize: "0.98rem",
          color: "var(--color-subtle)",
          marginBottom: "2.5rem",
          maxWidth: "500px",
          lineHeight: 1.75,
        }}
      >
        {t.description}
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
          gap: "0.85rem",
        }}
      >
        {contacts.map(({ label, href, icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.015))",
              border: "1px solid var(--color-border)",
              borderRadius: "12px",
              padding: "0.95rem 1.15rem",
              textDecoration: "none",
              color: "var(--color-subtle)",
              fontSize: "0.9rem",
              transition: "border-color 0.2s, color 0.2s, transform 0.2s",
            }}
          >
            <ContactIcon type={icon} />
            <span>{label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
