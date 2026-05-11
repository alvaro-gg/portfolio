import AvatarImage from "./AvatarImage";
import SectionLabel from "./SectionLabel";

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        padding: "5rem 1.5rem",
        maxWidth: "1120px",
        margin: "0 auto",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <SectionLabel>Sobre mí</SectionLabel>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) minmax(260px, 0.8fr)",
          gap: "3rem",
          alignItems: "center",
        }}
      >
        <div>
          <h2
            style={{
              fontSize: "clamp(1.7rem, 4vw, 2.35rem)",
              fontWeight: 650,
              letterSpacing: "-0.035em",
              color: "var(--color-text)",
              marginBottom: "1.25rem",
            }}
          >
            Hola, soy Álvaro
          </h2>

          <p
            style={{
              fontSize: "0.98rem",
              color: "var(--color-subtle)",
              lineHeight: 1.85,
              marginBottom: "1rem",
            }}
          >
            {
              "Estoy dando mis primeros pasos como desarrollador con muchas ganas de aprender y crecer dentro de un equipo. Me gusta escribir código "
            }
            <strong style={{ color: "var(--color-text)", fontWeight: 550 }}>
              claro y ordenado
            </strong>
            {
              ", y cuidar cada detalle de las interfaces para que sean agradables de usar."
            }
          </p>

          <p
            style={{
              fontSize: "0.98rem",
              color: "var(--color-subtle)",
              lineHeight: 1.85,
              marginBottom: "1rem",
            }}
          >
            He trabajado en proyectos personales y en prácticas de empresa, lo
            que me ha ayudado a afianzar lo que sé y a descubrir nuevas formas
            de resolver problemas.
          </p>

          <p
            style={{
              fontSize: "0.98rem",
              color: "var(--color-subtle)",
              lineHeight: 1.85,
            }}
          >
            {"Me interesa especialmente el desarrollo "}
            <strong style={{ color: "var(--color-accent2)", fontWeight: 550 }}>
              full-stack
            </strong>
            {
              " con React y TypeScript. Valoro la comunicación sencilla, el trabajo colaborativo y ver cómo un proyecto evoluciona hasta convertirse en algo útil y bien hecho."
            }
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <AvatarImage />
        </div>
      </div>
    </section>
  );
}
