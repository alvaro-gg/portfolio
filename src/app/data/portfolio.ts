export const PROJECTS = [
  {
    title: "DiviWatch",
    href: "https://diviwatch-front.vercel.app/",
    summary:
      "Gestor de portfolio de inversiones full-stack con seguimiento de P&L en tiempo real vía Yahoo Finance. Soporta acciones de múltiples mercados internacionales (BME, NYSE, NASDAQ, Europa), fondos de inversión y ETFs. Incluye importación automática de dividendos históricos, sincronización automática de precios y sistema de watchlist.",

    highlights: [
      "Autenticación JWT completa",

      "Caché compartida entre usuarios",

      "Deploy en producción",

      "Soporte multi-mercado (España, USA, Europa, Asia...)",

      "100% responsive, mobile-first",
    ],
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Tailwind",
    ],
    status: "live" as const,
  },
];

export const SKILLS = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Java", "REST APIs", "JWT Auth"],
  },
  {
    category: "Bases de datos",
    items: ["PostgreSQL", "MySQL", "Prisma ORM"],
  },
  {
    category: "Herramientas",
    items: ["Git", "GitHub", "Vercel", "Docker básico"],
  },
];

export const CONTACT = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alvaro-gg",
    icon: "li",
  },
  {
    label: "GitHub",
    href: "https://github.com/alvaro-gg",
    icon: "gh",
  },
  {
    label: "alvarogg.dev@gmail.com",
    href: "mailto:alvarogg.dev@gmail.com",
    icon: "mail",
  },
  {
    label: "Descargar CV",
    href: "/cv.pdf",
    icon: "cv",
  },
];
