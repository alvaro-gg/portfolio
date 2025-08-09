import CardButton from "@/components/CardButton";
import { User, Laptop, Mail, Wrench } from "lucide-react";

export default function Home() {
  return (
    <section
      aria-label="Panel principal del portfolio"
      className="flex min-h-full flex-col items-center justify-center px-4 text-center mt-12 md:mt-16"
    >
      <h1 className="text-4xl font-bold mb-4">¡Bienvenido a mi Portfolio!</h1>

      <p className="mb-12 max-w-lg text-strong">
        Aquí encontrarás mis proyectos, experiencia, conocimientos y formas de
        contactarme.
      </p>

      <div className="grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
        <CardButton href="/about" label="Sobre mí" Icon={User} />
        <CardButton href="/projects" label="Proyectos" Icon={Laptop} />
        <CardButton href="/contact" label="Contacto" Icon={Mail} />
        <CardButton href="/skills" label="Habilidades" Icon={Wrench} />
      </div>
    </section>
  );
}
