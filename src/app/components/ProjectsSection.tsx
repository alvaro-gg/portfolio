"use client";

import { useLang } from "@/app/context/LanguageContext";
import { i18n } from "@/app/data/i18n";
import { PROJECTS } from "../data/portfolio";
import SectionLabel from "./SectionLabel";
import Tag from "./Tag";

export default function ProjectsSection() {
  const { lang } = useLang();
  const t = i18n[lang].projects;

  const projects = PROJECTS[lang];

  return (
    <section
      id="projects"
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
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        {projects.map((project) => (
          <article
            key={project.title}
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.015))",
              border: "1px solid var(--color-border)",
              borderRadius: "16px",
              padding: "2rem",
              transition: "border-color 0.2s, transform 0.2s",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "1rem",
                flexWrap: "wrap",
                gap: "0.75rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 650,
                    color: "var(--color-text)",
                  }}
                >
                  {project.title}
                </h3>

                {project.status === "live" && (
                  <span
                    style={{
                      fontSize: "0.68rem",
                      fontFamily: "var(--font-mono)",
                      background: "rgba(34,197,94,0.12)",
                      color: "var(--color-green)",
                      border: "1px solid rgba(34,197,94,0.24)",
                      borderRadius: "5px",
                      padding: "3px 9px",
                    }}
                  >
                    live
                  </span>
                )}
              </div>

              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "0.85rem",
                  color: "var(--color-accent2)",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                {t.viewApp}
              </a>
            </div>

            <p
              style={{
                fontSize: "0.95rem",
                color: "var(--color-subtle)",
                lineHeight: 1.75,
                marginBottom: "1.35rem",
              }}
            >
              {project.summary}
            </p>

            <ul
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
                gap: "0.55rem",
                marginBottom: "1.35rem",
                paddingLeft: 0,
                listStyle: "none",
              }}
            >
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--color-subtle)",
                    display: "flex",
                    alignItems: "center",
                    gap: "7px",
                  }}
                >
                  <span
                    style={{
                      color: "var(--color-accent2)",
                      fontSize: "0.7rem",
                    }}
                  >
                    ✦
                  </span>

                  {highlight}
                </li>
              ))}
            </ul>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "7px",
              }}
            >
              {project.tech.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          </article>
        ))}

        <div
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px dashed var(--color-border2)",
            borderRadius: "16px",
            padding: "1.5rem 2rem",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              background: "rgba(99,102,241,0.1)",
              color: "var(--color-accent2)",
              border: "1px solid rgba(99,102,241,0.22)",
              borderRadius: "5px",
              padding: "3px 9px",
              whiteSpace: "nowrap",
            }}
          >
            {t.wip}
          </span>

          <span
            style={{
              fontSize: "0.9rem",
              color: "var(--color-muted)",
            }}
          >
            {t.autoplanify}
          </span>
        </div>
      </div>
    </section>
  );
}
