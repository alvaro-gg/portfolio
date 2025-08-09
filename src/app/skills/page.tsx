"use client";

import Link from "next/link";
import { Code2, Server, Database, Wrench, ArrowLeft } from "lucide-react";
import {
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiVuedotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { IconType } from "react-icons";
import "./skills.css";

type Item = { label: string; Icon: IconType };
type Section = {
  title: string;
  Icon: IconType;
  items: Item[];
  description: string;
};

const SECTIONS: Section[] = [
  {
    title: "Frontend",
    Icon: Code2,
    description:
      "Desarrollo de interfaces modernas, accesibles y altamente optimizadas utilizando tecnologías como React, Vue, TypeScript y Tailwind CSS. Me enfoco en crear experiencias de usuario fluidas, responsivas y mantenibles.",
    items: [
      { label: "TypeScript", Icon: SiTypescript },
      { label: "React.js", Icon: SiReact },
      { label: "Tailwind", Icon: SiTailwindcss },
      { label: "Vue.js", Icon: SiVuedotjs },
    ],
  },
  {
    title: "Backend",
    Icon: Server,
    description:
      "Implementación de APIs robustas, seguras y escalables con Node.js y Java. Aplico principios de arquitectura limpia, buenas prácticas de desarrollo y patrones de diseño para garantizar rendimiento y mantenibilidad.",
    items: [
      { label: "Node.js", Icon: SiNodedotjs },
      { label: "Java", Icon: SiOpenjdk },
    ],
  },
  {
    title: "Bases de Datos",
    Icon: Database,
    description:
      "Diseño y gestión de esquemas relacionales eficientes con PostgreSQL y MySQL. Optimización de consultas, normalización de datos y uso de índices para garantizar integridad, rendimiento y escalabilidad.",
    items: [
      { label: "PostgreSQL", Icon: SiPostgresql },
      { label: "MySQL", Icon: SiMysql },
    ],
  },
  {
    title: "Herramientas",
    Icon: Wrench,
    description:
      "Dominio de herramientas de control de versiones como Git y plataformas colaborativas como GitHub. Fomento flujos de trabajo ágiles, integración continua y colaboración efectiva en equipos de desarrollo.",
    items: [
      { label: "Git", Icon: SiGit },
      { label: "GitHub", Icon: SiGithub },
    ],
  },
];

export default function SkillsPage() {
  return (
    <section className="skills-page">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-strong hover:opacity-80"
      >
        <ArrowLeft className="w-5 h-5" /> Volver
      </Link>

      <h1 className="text-3xl font-bold mt-4 mb-6 text-strong">
        Mis Habilidades
      </h1>

      <div className="skills-grid">
        {SECTIONS.map(({ title, Icon, items, description }) => (
          <div
            key={title}
            className="flip-card"
            aria-label={`Ver descripción de ${title}`}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front bg-primary border border-black/10 shadow-sm p-5 flex flex-col rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="w-6 h-6 text-strong" />
                  <h2 className="text-lg font-semibold text-strong">{title}</h2>
                </div>
                <div className="mt-auto flex flex-wrap gap-2">
                  {items.map(({ label, Icon }) => (
                    <span
                      key={label}
                      className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm border border-black/10 text-strong hover:bg-dark hover:text-light transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flip-card-back bg-dark text-light border border-black/10 shadow-sm p-6 rounded-xl flex items-center justify-center text-center">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="opacity-90 leading-relaxed">{description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
