export const profile = {
  name: "Cesar Marquínez",
  role: "Desarrollador de Software Fullstack y Móvil (Flutter)",
  bio: "Ingeniero de Sistemas y Computación. Desarrollador móvil y fullstack con aplicaciones Flutter publicadas en Google Play y App Store, integración de APIs REST, Clean Architecture y experiencias en tiempo real.",
  location: "Panamá",
  email: "cesarmarquinez847@gmail.com",
  social: {
    linkedin: "https://www.linkedin.com/in/cesar-marquinez",
    github: "https://github.com/cesarMarquinez0220",
  },
  roles: [
    "Desarrollador de Software", 2000,
    "Desarrollador Móvil & Web (Flutter)", 2000,
    "Fullstack Developer", 2000,
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
        "React & Angular",
        "Laravel & Livewire",
        "Tailwind CSS"
      ]
    },
    {
      category: "Integraciones, Backend & Datos",
      skills: [
        "APIs REST & WebSockets (STOMP)",
        "Google ML Kit (OCR / MRZ / QR)",
        "Firebase (Auth, Firestore, FCM)",
        "Python",
        "SQL (MySQL) & NoSQL",
        "Power BI"
      ]
    },
    {
      category: "Calidad, Seguridad & DevOps",
      skills: [
        "Playwright & Maestro (E2E)",
        "Docker & Nginx",
        "JWT & RBAC",
        "Google Play & App Store",
        "Git & GitHub"
      ]
    }
  ],
  experiences: [
    {
      role: "Desarrollador Flutter (Móvil y Web)",
      company: "Proyecto NAE",
      period: "Mayo 2026 – Octubre 2026",
      description: "Diseño de monorepo con Clean Architecture y librería UI compartida (nae_ui), personalización multi-región/marca blanca, escaneo de documentos oficiales (MRZ, PDF417 y QR) con Google ML Kit, sincronización en tiempo real (WebSockets/STOMP y FCM), pruebas E2E (Playwright y Maestro) y publicación en Google Play y App Store.",
      tech: ["Flutter", "Clean Architecture", "Multi-Tenant", "ML Kit OCR", "WebSockets", "Playwright & Maestro", "Docker & Nginx"]
    },
    {
      role: "Desarrollador Móvil (Flutter)",
      company: "Hospital Pacífica Salud",
      period: "2023 – 2025",
      description: "Desarrollo en Flutter de una app educativa para promover la lactancia materna exclusiva en madres primerizas, integrando Firebase (Authentication, Firestore y Storage), contenido multimedia y mecánicas de gamificación.",
      tech: ["Flutter", "Firebase", "Gamification"]
    },
    {
      role: "Desarrollador Fullstack (Investigación)",
      company: "Universidad Tecnológica de Panamá – GITCE",
      period: "Mayo 2025 – Julio 2025",
      description: "Desarrollo frontend y backend de una plataforma de predicción de deserción universitaria con arquitectura de microservicios, integrando un modelo de machine learning y tableros en Power BI.",
      tech: ["Microservicios", "Machine Learning", "Power BI", "Python"]
    },
    {
      role: "Desarrollador Web",
      company: "GITCE – Grupo de Investigación en Tecnologías Computacionales",
      period: "2024",
      description: "Desarrollo integral (frontend y backend) de una plataforma de gestión de eventos con PHP (Laravel y Livewire), registro de usuarios, notificaciones y paneles administrativos responsivos con Tailwind CSS bajo metodología Scrum.",
      tech: ["Laravel", "Livewire", "Tailwind CSS", "Scrum"]
    }
  ],
  certifications: [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      date: "2025",
      link: "https://www.credly.com/badges/c44b14d0-8575-4a66-9510-1cf3ce13872b/linked_in?t=sz7ojx",
      icon: "aws"
    }
  ]
};
