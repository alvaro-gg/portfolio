import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = { title: "Proyectos" };

const PROJECTS = [
  {
    title: "Gestor de Prácticas",
    href: "#",
    img: "/projects/gestorpracticas.png",
    summary:
      "Aplicación web desarrollada con Vue, TypeScript y Tailwind para la gestión integral de prácticas en institutos. Permite crear y administrar perfiles de empresas y alumnos, asignar y retirar prácticas, y visualizar información detallada de cada empresa con estadísticas y gráficos (alumnos por año, aptos/no aptos). Facilita el seguimiento y organización de las prácticas de manera ágil y centralizada.",
    tech: ["Vue", "TypeScript", "Tailwind"],
  },

  {
    title: "Gestor Clínico Multisede",
    href: "#",
    img: "/projects/multiclinic.png",
    summary:
      "Aplicación web desarrollada con Vue, TypeScript y Tailwind para la gestión integral de clínicas con múltiples sedes y servicios (incluyendo atención a pacientes y mascotas). Cuenta con tres niveles de acceso: el gerente general, que puede crear nuevas sedes, asignar coordinadores y gestionar la red completa; el coordinador, que administra su sede (pacientes, empleados, citas y servicios); y el empleado, que gestiona clientes, agenda y confirma citas. Un sistema escalable y organizado que optimiza la administración clínica.",
    tech: ["Vue", "TypeScript", "Tailwind"],
  },
];

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-strong hover:opacity-80"
      >
        <ArrowLeft className="w-5 h-5" /> Volver
      </Link>

      <h1 className="mt-4 text-3xl font-bold text-strong">Proyectos</h1>
      <p className="mt-2 mb-8 text-black/80">
        Aquí encontrarás algunos de los proyectos en los que he trabajado,
        mostrando mis habilidades y experiencia.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {PROJECTS.map(({ title, href, img, summary, tech }) => (
          <Link
            key={title}
            href={href}
            className="group rounded-xl border border-black/10 bg-primary overflow-hidden shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
          >
            <div className="relative aspect-[16/9]">
              <Image
                src={img}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
                unoptimized={true}
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity">
                <div className="h-full w-full flex flex-col items-center justify-center px-4 text-center text-light">
                  <p className="text-sm opacity-90">{summary}</p>
                  <div className="mt-3 flex flex-wrap justify-center gap-2">
                    {tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs rounded-full border border-white/30 px-2 py-0.5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4">
              <h2 className="text-lg font-semibold text-strong">{title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
