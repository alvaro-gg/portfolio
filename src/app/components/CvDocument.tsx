import { cvData } from "@/app/data/cv";
import type { Lang } from "@/app/data/i18n";

type CvDocumentProps = Readonly<{ lang: Lang }>;
type StackEntries = Array<[string, readonly string[]]>;

const sans = "'Inter', 'Helvetica Neue', Arial, sans-serif";
const accent = "#2e5fa3";

export default function CvDocument({ lang }: CvDocumentProps) {
  const cv = cvData[lang];
  const stackEntries = Object.entries(cv.stack) as StackEntries;

  return (
    <article
      style={{
        fontFamily: sans,
        margin: 0,
        height: "1123px",
        width: "794px",
        overflow: "hidden",
        backgroundColor: "#fff",
        color: "#111",
        padding: "44px 52px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* HEADER */}
      <header style={{ marginBottom: "14px" }}>
        <h1
          style={{
            fontSize: "20px",
            fontWeight: "700",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            margin: "0 0 2px",
            color: "#111",
          }}
        >
          {cv.personal.name}
        </h1>
        <p
          style={{
            fontSize: "11px",
            fontWeight: "500",
            color: accent,
            margin: "0 0 6px",
          }}
        >
          {cv.personal.role}
        </p>
        <p style={{ fontSize: "9.5px", color: "#555", margin: 0 }}>
          {cv.personal.location} &nbsp;|&nbsp; {cv.personal.email} &nbsp;|&nbsp;{" "}
          {cv.personal.website} &nbsp;|&nbsp; {cv.personal.linkedin}
        </p>
      </header>

      <Hr />

      {/* SUMMARY */}
      <section style={{ marginBottom: "14px" }}>
        <SectionTitle accent={accent}>
          {lang === "es" ? "Perfil Profesional" : "Career Summary"}
        </SectionTitle>
        <p
          style={{
            fontSize: "9.5px",
            lineHeight: "1.8",
            color: "#333",
            margin: 0,
          }}
        >
          {cv.summary}
        </p>
      </section>

      {/* PROJECTS */}
      <section style={{ marginBottom: "14px" }}>
        <SectionTitle accent={accent}>
          {lang === "es" ? "Proyectos Relevantes" : "Relevant Projects"}
        </SectionTitle>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {cv.projects.map((p) => (
            <div key={p.name}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                }}
              >
                <span
                  style={{ fontSize: "10px", fontWeight: "700", color: "#111" }}
                >
                  {p.name}
                </span>
                <span style={{ fontSize: "9px", color: "#777" }}>{p.type}</span>
              </div>
              <p
                style={{
                  fontSize: "9px",
                  color: "#555",
                  margin: "1px 0 3px",
                  fontStyle: "italic",
                }}
              >
                {p.stack.join(" · ")}
              </p>
              <p
                style={{
                  fontSize: "9.5px",
                  lineHeight: "1.7",
                  color: "#333",
                  margin: 0,
                }}
              >
                {p.description}
              </p>
              {"highlights" in p && p.highlights ? (
                <ul style={{ margin: "3px 0 0", paddingLeft: "14px" }}>
                  {p.highlights.map((h) => (
                    <li
                      key={h}
                      style={{
                        fontSize: "9px",
                        color: "#444",
                        lineHeight: "1.7",
                      }}
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section style={{ marginBottom: "14px" }}>
        <SectionTitle accent={accent}>
          {lang === "es" ? "Experiencia Laboral" : "Work Experience"}
        </SectionTitle>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {cv.experience.map((e) => (
            <div key={`${e.company}-${e.period}`}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                }}
              >
                <span
                  style={{ fontSize: "10px", fontWeight: "700", color: "#111" }}
                >
                  {e.title}
                </span>
                <span style={{ fontSize: "9px", color: "#777" }}>
                  {e.period}
                </span>
              </div>
              <p
                style={{
                  fontSize: "9px",
                  color: accent,
                  margin: "1px 0 3px",
                  fontWeight: "500",
                }}
              >
                {e.company} · {e.location}
              </p>
              <p
                style={{
                  fontSize: "9.5px",
                  lineHeight: "1.7",
                  color: "#333",
                  margin: "0 0 3px",
                }}
              >
                {e.description}
              </p>
              {"highlights" in e && e.highlights ? (
                <ul style={{ margin: "3px 0 0", paddingLeft: "14px" }}>
                  {e.highlights.map((h) => (
                    <li
                      key={h}
                      style={{
                        fontSize: "9px",
                        color: "#444",
                        lineHeight: "1.7",
                      }}
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              ) : null}
              {"stack" in e && e.stack ? (
                <p
                  style={{
                    fontSize: "9px",
                    color: "#555",
                    margin: "4px 0 0",
                    fontStyle: "italic",
                  }}
                >
                  {e.stack.join(" · ")}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM ROW */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.6fr 0.7fr",
          gap: "24px",
        }}
      >
        <section>
          <SectionTitle accent={accent}>
            {lang === "es" ? "Formación" : "Education"}
          </SectionTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {cv.education.map((e) => (
              <div key={e.title}>
                <p
                  style={{
                    fontSize: "9.5px",
                    fontWeight: "700",
                    color: "#111",
                    margin: 0,
                    lineHeight: "1.4",
                  }}
                >
                  {e.title}
                </p>
                <p style={{ fontSize: "8.5px", color: "#555", margin: 0 }}>
                  {e.center}
                </p>
                <p style={{ fontSize: "8.5px", color: "#888", margin: 0 }}>
                  {e.period}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle accent={accent}>Stack</SectionTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {stackEntries.map(([group, items]) => (
              <div
                key={group}
                style={{ display: "flex", alignItems: "baseline", gap: "6px" }}
              >
                <span
                  style={{
                    fontSize: "7.5px",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "#999",
                    minWidth: "52px",
                  }}
                >
                  {group}
                </span>
                <span style={{ fontSize: "9px", color: "#333" }}>
                  {items.join(", ")}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle accent={accent}>
            {lang === "es" ? "Idiomas" : "Languages"}
          </SectionTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            {cv.languages.map((l) => (
              <div key={l.name}>
                <p
                  style={{
                    fontSize: "9.5px",
                    fontWeight: "700",
                    color: "#111",
                    margin: 0,
                  }}
                >
                  {l.name}
                </p>
                <p style={{ fontSize: "8.5px", color: "#666", margin: 0 }}>
                  {l.level}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}

function Hr() {
  return (
    <div
      style={{ height: "1px", backgroundColor: "#e0e0e0", margin: "0 0 14px" }}
    />
  );
}

function SectionTitle({
  children,
  accent,
}: {
  children: React.ReactNode;
  accent: string;
}) {
  return (
    <div style={{ marginBottom: "8px" }}>
      <p
        style={{
          fontSize: "8.5px",
          fontWeight: "700",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#111",
          margin: "0 0 4px",
        }}
      >
        {children}
      </p>
      <div
        style={{ height: "1.5px", backgroundColor: accent, width: "100%" }}
      />
    </div>
  );
}
