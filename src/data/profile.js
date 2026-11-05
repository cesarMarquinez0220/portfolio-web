export const profile = {
  name: "Cesar Marquínez",
  role: "Desarrollador de Software",
  bio: "Desarrollador de Software enfocado en diseñar y construir aplicaciones móviles y web escalables, con arquitectura limpia y experiencias en tiempo real.",
  location: "Panamá",
  email: "cesarmarquinez847@gmail.com",
  social: {
    linkedin: "https://www.linkedin.com/in/cesar-marquinez",
    github: "https://github.com/cesarMarquinez0220",
  },
  roles: [
    "Desarrollador de Software", 2000,
    "Desarrollador Móvil & Web (Flutter)", 2000,
    "Frontend & Mobile Architect", 2000,
    "Entusiasta de la Robótica 🤖", 2000,
  ],

  cvLink: "cv-cesar-marquinez.pdf",
  skills: [
    { name: "Flutter", color: "text-blue-600 dark:text-blue-400" },
    { name: "React", color: "text-sky-500 dark:text-sky-400" }
  ],
  techStack: [
    {
      category: "Frontend & Mobile",
      skills: [
        "Flutter (Mobile & Web)",
        "Dart & Riverpod",
        "Clean Architecture",
        "React",
        "Tailwind CSS",
        "JavaScript"
      ]
    },
    {
      category: "Integraciones, Backend & Datos",
      skills: [
        "WebSockets (STOMP) & REST APIs",
        "Google ML Kit (OCR / MRZ / QR)",
        "Firebase (FCM / Auth)",
        "Python",
        "Laravel",
        "SQL (MySQL / PostgreSQL)"
      ]
    },
    {
      category: "QA, Herramientas & DevOps",
      skills: [
        "Playwright & Maestro (E2E)",
        "Docker & Nginx",
        "Google Play Console",
        "Git & GitHub",
        "Postman"
      ]
    }
  ],
  experiences: [
    {
      role: "Desarrollador Principal Frontend (Mobile & Web)",
      company: "NAE — Ecosistema de Movilidad y Turismo",
      period: "2025 - Actualidad",
      description: "Arquitectura y desarrollo de App móvil (publicada en Google Play) y consola administrativa Web SPA en Flutter. Implementación de sistema de diseño compartido (nae_ui), motor White-Label multi-región, escaneo óptico OCR/MRZ/PDF417, sincronización en tiempo real con WebSockets/FCM y pruebas E2E con Playwright y Maestro.",
      tech: ["Flutter", "Clean Architecture", "Riverpod", "ML Kit OCR", "WebSockets", "Playwright", "Docker"]
    },
    {
      role: "Desarrollador Móvil (Flutter)",
      company: "Hospital Pacífica Salud",
      period: "2023 - Actualidad",
      description: "Desarrollo de App educativa para lactancia materna con gamificación y Firebase.",
      tech: ["Flutter", "Firebase", "Gamification"]
    },
    {
      role: "Desarrollador Fullstack",
      company: "GITCE (Investigación UTP)",
      period: "May 2025 - Jul 2025",
      description: "Arquitectura de microservicios y dashboard predictivo de deserción con Power BI.",
      tech: ["Microservicios", "Power BI", "Python"]
    },
    {
      role: "Desarrollador Web",
      company: "GITCE",
      period: "2024",
      description: "Plataforma de gestión de eventos bajo metodologías ágiles (Scrum).",
      tech: ["Laravel", "Tailwind", "Scrum"]
    }
  ],
  certifications: [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      date: "2025",
      link: "https://www.credly.com/badges/c44b14d0-8575-4a66-9510-1cf3ce13872b/linked_in?t=sz7ojx",
      icon: "aws" // Identificador para el icono
    }
  ]
};
