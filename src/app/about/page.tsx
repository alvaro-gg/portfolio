import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = { title: "Sobre mí" };

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-strong hover:opacity-80"
      >
        <ArrowLeft className="w-5 h-5" /> Volver
      </Link>

      <h1 className="mt-4 text-3xl font-bold text-strong">Sobre mí</h1>

      <div className="mt-6 grid md:grid-cols-[256px_1fr] items-start gap-6 md:gap-8">
        <div className="flex justify-center md:justify-start">
          <div className="relative h-80 w-64 overflow-hidden rounded-2xl">
            <Image
              src="/about/avatar.png"
              alt="Foto de Álvaro"
              fill
              sizes="(max-width: 768px) 256px, 288px"
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="rounded-2xl border border-black/10 bg-primary p-5 md:p-6 leading-relaxed text-black/80">
          <p className="mb-4">
            Hola, soy Álvaro. Estoy dando mis primeros pasos como{" "}
            <strong className="text-strong">desarrollador</strong> y tengo muchas ganas de aprender y crecer dentro de un equipo. 
            Me gusta escribir código <strong className="text-strong">claro</strong> y <strong className="text-strong">ordenado</strong>, 
            y cuidar cada detalle de las interfaces para que sean agradables de usar.
          </p>
          <p className="mb-4">
            En los últimos meses he trabajado en{" "}
            <strong className="text-strong">proyectos personales</strong> y en{" "}
            <strong className="text-strong">las prácticas de empresa</strong>, 
            lo que me ha ayudado a afianzar lo que sé y a descubrir nuevas formas de resolver problemas.
          </p>
          <p>
            Me interesa especialmente el desarrollo{" "}
            <strong className="text-strong">frontend</strong> con{" "}
            <strong className="text-strong">React</strong> y{" "}
            <strong className="text-strong">TypeScript</strong>, aunque también disfruto cuando toca meterme en el{" "}
            <strong className="text-strong">backend</strong>. 
            Valoro la <em>comunicación sencilla</em>, el <em>trabajo colaborativo</em> y ver cómo un proyecto evoluciona poco a poco 
            hasta convertirse en algo útil y bien hecho.
          </p>
        </div>
      </div>
    </section>
  );
}
