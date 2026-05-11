import AvatarImage from "./AvatarImage";
import SectionLabel from "./SectionLabel";

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <SectionLabel>Sobre mí</SectionLabel>

      <div className="about-grid">
        <div className="about-content">
          <h2 className="about-title">Hola, soy Álvaro</h2>

          <p className="about-text">
            {
              "Estoy dando mis primeros pasos como desarrollador con muchas ganas de aprender y crecer dentro de un equipo. Me gusta escribir código "
            }
            <strong>claro y ordenado</strong>
            {
              ", y cuidar cada detalle de las interfaces para que sean agradables de usar."
            }
          </p>

          <p className="about-text">
            He trabajado en proyectos personales y en prácticas de empresa, lo
            que me ha ayudado a afianzar lo que sé y a descubrir nuevas formas
            de resolver problemas.
          </p>

          <p className="about-text">
            {"Me interesa especialmente el desarrollo "}
            <strong className="about-highlight">full-stack</strong>
            {
              " con React y TypeScript. Valoro la comunicación sencilla, el trabajo colaborativo y ver cómo un proyecto evoluciona hasta convertirse en algo útil y bien hecho."
            }
          </p>
        </div>

        <div className="about-avatar">
          <AvatarImage />
        </div>
      </div>
    </section>
  );
}
