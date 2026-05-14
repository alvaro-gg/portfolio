"use client";

import { useLang } from "@/app/context/LanguageContext";
import { i18n } from "@/app/data/i18n";
import { SKILLS } from "../data/portfolio";
import SectionLabel from "./SectionLabel";

export default function SkillsSection() {
  const { lang } = useLang();
  const t = i18n[lang].skills;

  const skills = SKILLS[lang];

  return (
    <section
      id="skills"
      style={{
        padding: "5rem 1.5rem",
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
          marginBottom: "2.5rem",
          color: "var(--color-text)",
        }}
      >
        {t.title}
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1rem",
        }}
      >
        {skills.map((skill) => (
          <div
            key={skill.category}
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.015))",
              border: "1px solid var(--color-border)",
              borderRadius: "14px",
              padding: "1.35rem 1.5rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                color: "var(--color-accent2)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "0.95rem",
              }}
            >
              {skill.category}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
              {skill.items.map((item) => (
                <span
                  key={item}
                  style={{
                    fontSize: "0.82rem",
                    color: "var(--color-subtle)",
                    background: "var(--color-surface2)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "7px",
                    padding: "5px 10px",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
