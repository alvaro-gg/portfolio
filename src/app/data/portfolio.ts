export type Lang = "es" | "en";

export type Project = {
  title: string;
  href: string;
  summary: string;
  highlights: string[];
  tech: string[];
  status: "live";
};

export type Skill = {
  category: string;
  items: string[];
};

export type Contact = {
  label: string;
  href: string;
  icon: string;
};

export const PROJECTS: Record<Lang, Project[]> = {
  es: [
    {
      title: "DiviWatch",
      href: "https://diviwatch-front.vercel.app/",
      summary:
        "Gestor de portfolio de inversiones full-stack con seguimiento de P&L en tiempo real vía Yahoo Finance. Soporta acciones de múltiples mercados internacionales (BME, NYSE, NASDAQ, Europa), fondos de inversión y ETFs.",
      highlights: [
        "Autenticación JWT completa",
        "Caché compartida entre usuarios",
        "Deploy en producción",
        "Soporte multi-mercado",
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
      status: "live",
    },
    {
      title: "Autogym",
      href: "https://autogym-front.vercel.app/login",
      summary:
        "Sistema SaaS para centros deportivos con reservas, gestión de socios, pistas y monitores.",
      highlights: [
        "Calendario interactivo",
        "Gestión de socios",
        "Validaciones en tiempo real",
        "Dashboard con KPIs",
        "100% responsive",
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
      status: "live",
    },
  ],

  en: [
    {
      title: "DiviWatch",
      href: "https://diviwatch-front.vercel.app/",
      summary:
        "Full-stack investment portfolio tracker with real-time P&L monitoring via Yahoo Finance. Supports stocks, ETFs and investment funds from international markets.",
      highlights: [
        "Complete JWT authentication",
        "Shared cache between users",
        "Production deployment",
        "Multi-market support",
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
      status: "live",
    },
    {
      title: "Autogym",
      href: "https://autogym-front.vercel.app/login",
      summary:
        "SaaS management system for sports centers with bookings, members, courts and trainers management.",
      highlights: [
        "Interactive calendar",
        "Member management",
        "Real-time validations",
        "KPI dashboard",
        "100% responsive",
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
      status: "live",
    },
  ],
};

export const SKILLS: Record<Lang, Skill[]> = {
  es: [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "REST APIs", "JWT Auth"],
    },
    {
      category: "Bases de datos",
      items: ["PostgreSQL", "MySQL", "Prisma ORM"],
    },
    {
      category: "Herramientas",
      items: ["Git", "GitHub", "Vercel", "Docker"],
    },
  ],

  en: [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "REST APIs", "JWT Auth"],
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MySQL", "Prisma ORM"],
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "Vercel", "Docker"],
    },
  ],
};

export const CONTACT: Record<Lang, Contact[]> = {
  es: [
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
  ],

  en: [
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
      label: "Download CV",
      href: "/cv.pdf",
      icon: "cv",
    },
  ],
};
