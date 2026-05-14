export const i18n = {
  es: {
    nav: {
      home: "Inicio",
      projects: "Proyectos",
      skills: "Habilidades",
      about: "Sobre mí",
      contact: "Contacto",
    },
    hero: {
      available: "Disponible para trabajar",
      description:
        "Construyo productos web completos, desde la base de datos hasta la interfaz. Me enfoco en código limpio, buenas prácticas y experiencias de usuario que funcionan de verdad.",
      cta: "Ver proyectos",
      cv: "Descargar CV",
    },
    projects: {
      label: "Proyectos",
      title: "Lo que he construido",
      viewApp: "Ver aplicación ↗",
      wip: "en desarrollo",
      autoplanify: "Autoplanify — Próximamente",
    },
    skills: {
      label: "Stack",
      title: "Habilidades técnicas",
    },
    about: {
      label: "Sobre mí",
      title: "Hola, soy Álvaro",

      p1: "Soy desarrollador full-stack especializado en software de gestión para negocios. Mi experiencia trabajando dentro de empresas de transporte y formación vial me enseñó a entender los problemas operativos antes de escribir una sola línea de código. Esa experiencia me ayuda a crear software centrado en necesidades reales de negocio, no solo en características técnicas.",

      p2_pre: "He construido ",

      p2_mid:
        ", una plataforma SaaS multi-tenant para la gestión de autoescuelas, y ",

      p2_post:
        ", un sistema de gestión para centros deportivos con reservas de pistas, monitores y socios en tiempo real. Ambos productos siguen la misma filosofía: convertir procesos de negocio caóticos en software que realmente funciona.",

      p3_pre:
        "Eso es exactamente en lo que me especializo. Si tienes un negocio de servicios con calendarios, reservas, múltiples recursos o sedes, y lo estás gestionando con ",

      p3_highlight: "Excel o WhatsApp",

      p3_post:
        ", puedo ayudarte a crear una solución que se adapte a tu forma de trabajar.",
    },

    contact: {
      label: "Contacto",
      title: "¿Hablamos?",
      description:
        "Ayudo a negocios a transformar procesos manuales en soluciones de software escalables. Si tienes un proyecto en mente, estaré encantado de hablar contigo.",
    },
    footer: "Hecho con Next.js",
    codePreview: {
      focus: '"productos reales"',
      features: [
        "Frontend cuidado",
        "Backend funcional",
        "Deploy en producción",
      ],
    },
  },
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      skills: "Skills",
      about: "About",
      contact: "Contact",
    },
    hero: {
      available: "Available for work",
      description:
        "I build complete web products, from the database to the interface. I focus on clean code, best practices and user experiences that actually work.",
      cta: "View projects",
      cv: "Download CV",
    },
    projects: {
      label: "Projects",
      title: "What I've built",
      viewApp: "View app ↗",
      wip: "in development",
      autoplanify: "Autoplanify — Coming soon",
    },
    skills: {
      label: "Stack",
      title: "Technical skills",
    },
    about: {
      label: "About me",
      title: "Hi, I'm Álvaro",

      p1: "I'm a full-stack developer specialized in business management software. My experience working inside transport and driving school companies taught me to understand operational problems before writing a single line of code. That experience helps me build software focused on real business needs, not just technical features.",
      p2_pre: "I've built ",

      p2_mid:
        ", a multi-tenant SaaS platform for driving school management, and ",

      p2_post:
        ", a sports center management system with real-time court bookings, instructors, and memberships. Both products follow the same philosophy: turning chaotic business processes into software that actually works.",
      p3_pre:
        "That's exactly what I specialize in. If you run a service business with calendars, bookings, multiple resources or locations, and you're managing it with ",

      p3_highlight: "Excel or WhatsApp",

      p3_post: ", I can build a solution that fits your workflow.",
    },
    contact: {
      label: "Contact",
      title: "Let's talk?",
      description:
        "I help businesses turn manual processes into scalable software solutions. If you have a project in mind, I'd be happy to talk.",
    },
    footer: "Built with Next.js",
    codePreview: {
      focus: '"real products"',
      features: [
        "Polished frontend",
        "Functional backend",
        "Production deploy",
      ],
    },
  },
} as const;

export type Lang = keyof typeof i18n;
export type I18n = typeof i18n.es;
