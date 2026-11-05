import naeArchitectureImg from '../assets/nae-architecture.svg'
import guilactImg from '../assets/guilact.png'
import mieventoImg from '../assets/mievento.png'
import desercionImg from '../assets/desercion.png'

export const projects = [
  {
    id: 1,
    title: "NAE — Movilidad, Control Turístico y Gestión de Flotas",
    period: "Mayo 2026 – Octubre 2026",
    description: "Caso de Estudio: Ecosistema multiplataforma (App Móvil Android/iOS y Consola Web SPA) en producción para el control de transporte terrestre y marítimo, trazabilidad de pasajeros con escaneo OCR/MRZ y operación multi-región en tiempo real.",
    tags: [
      "Flutter (Mobile & Web)",
      "Clean Architecture",
      "Riverpod",
      "ML Kit (OCR / MRZ / PDF417)",
      "WebSockets & FCM",
      "Playwright & Maestro",
      "Docker & Nginx"
    ],
    link: "https://play.google.com/store/apps/details?id=app.nae.com&hl=es",
    playStoreUrl: "https://play.google.com/store/apps/details?id=app.nae.com&hl=es",
    isPrimary: true,
    isPrivate: true,
    image: naeArchitectureImg,
    caseStudy: {
      badge: "Caso de Estudio · Mayo 2026 – Octubre 2026",
      subtitle: "Plataforma integral para la digitalización del transporte turístico, control de abordaje en campo y administración financiera multi-región.",
      privacyNote: "Proyecto privado bajo acuerdo de confidencialidad: se presenta mediante diagrama de arquitectura técnica sin exponer código fuente propietario ni datos sensibles.",
      problem: "El control de transporte terrestre y marítimo, el registro de visitantes y la liquidación de tasas operativas en territorios turísticos se realizaban mediante procesos manuales y manifiestos en papel. Esto generaba filas en los puntos de control, errores en la captura de identidad de pasajeros nacionales y extranjeros, y falta de visibilidad financiera y operativa en tiempo real.",
      role: "Desarrollador Flutter (Móvil y Web). Diseñé el monorepo con Clean Architecture y la librería de UI compartida (nae_ui), implementé personalización multi-región/marca blanca, escaneo óptico de documentos (MRZ, PDF417 y QR), sincronización en tiempo real, pruebas E2E y la publicación en Google Play y App Store.",
      technologies: [
        {
          category: "Arquitectura & UI Multiplataforma",
          items: ["Flutter (Android, iOS & Web SPA)", "Dart", "Riverpod 3", "Clean Architecture", "Monorepo (nae_ui Design System)", "Multi-Región / Marca Blanca (JWT & RBAC)"]
        },
        {
          category: "Hardware, Tiempo Real & Documentos",
          items: ["Google ML Kit (OCR MRZ Pasaportes)", "Escaneo PDF417 (Cédulas) y QR", "WebSockets (STOMP) & GPS", "Firebase Cloud Messaging (FCM)", "Manifiestos locales en PDF y Excel"]
        },
        {
          category: "Calidad (QA E2E) & Despliegue",
          items: ["Playwright (E2E Web)", "Maestro (E2E Mobile)", "Docker & Nginx (Web SPA)", "Google Play & App Store Release"]
        }
      ],
      achievements: [
        "Publicación oficial en producción en Google Play y App Store (app.nae.com), gestionando versionado, firmas criptográficas, builds multi-entorno y políticas de las tiendas.",
        "Reducción drástica del tiempo de registro en campo mediante escaneo de documentos oficiales (pasaportes MRZ, cédulas PDF417 y QR) con Google ML Kit y generación local de manifiestos en PDF/Excel.",
        "Diseño de un Monorepo con Clean Architecture y librería de UI compartida (tokens, temas y componentes) con personalización multi-región/marca blanca en tiempo de ejecución.",
        "Sincronización operativa en tiempo real vía WebSockets (STOMP) y notificaciones push con FCM, respaldada por pruebas E2E automatizadas con Playwright (web) y Maestro (móvil)."
      ]
    }
  },
  {
    id: 2,
    title: "GuiLact — Hospital Pacífica Salud",
    period: "2023 – 2025",
    description: "Aplicación móvil oficial de tesis en la UTP desarrollada junto al Hospital Pacífica Salud. Plataforma educativa para promover la lactancia materna exclusiva con monitoreo en tiempo real, multimedia y mecánicas de gamificación.",
    tags: ["Flutter", "Firebase (Auth, Firestore, Storage)", "Gamification", "Mobile"],
    link: "https://www.linkedin.com/in/cesar-marquinez",
    isPrimary: false,
    image: guilactImg
  },
  {
    id: 3,
    title: "Análisis de Deserción (UTP – GITCE)",
    period: "Mayo 2025 – Julio 2025",
    description: "Plataforma de predicción de deserción universitaria con arquitectura de microservicios, integrando un modelo de machine learning y tableros interactivos en Power BI para apoyar la toma de decisiones académicas.",
    tags: ["Python", "Microservicios", "Machine Learning", "Power BI", "SQL"],
    link: "#",
    image: desercionImg
  },
  {
    id: 4,
    title: "MiEvento UTP (GITCE)",
    period: "2024",
    description: "Plataforma integral de gestión de eventos académicos en producción. Desarrollo de registro de usuarios, notificaciones y paneles administrativos responsivos con Laravel, Livewire y Tailwind CSS bajo metodología Scrum.",
    tags: ["Laravel", "Livewire", "Tailwind CSS", "PHP", "Scrum"],
    link: "https://mievento.utp.ac.pa",
    image: mieventoImg
  }
];
