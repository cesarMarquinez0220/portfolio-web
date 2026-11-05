import naeArchitectureImg from '../assets/nae-architecture.svg'
import guilactImg from '../assets/guilact.png'
import mieventoImg from '../assets/mievento.png'
import desercionImg from '../assets/desercion.png'

export const projects = [
  {
    id: 1,
    title: "NAE — Movilidad, Control Turístico y Gestión de Flotas",
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
      badge: "Caso de Estudio · Proyecto Privado en Producción",
      subtitle: "Plataforma integral para la digitalización del transporte turístico, control de abordaje en campo y administración financiera multi-región.",
      privacyNote: "Proyecto privado bajo acuerdo de confidencialidad: se presenta mediante diagrama de arquitectura técnica sin exponer código fuente propietario ni datos sensibles.",
      problem: "El control de transporte terrestre y marítimo, el registro de visitantes y la liquidación de tasas operativas en territorios turísticos se realizaban mediante procesos manuales y manifiestos en papel. Esto generaba filas en los puntos de control, errores en la captura de identidad de pasajeros nacionales y extranjeros, y falta de visibilidad financiera y operativa en tiempo real.",
      role: "Desarrollador Principal Frontend (Mobile & Web) y Arquitecto Cliente Multiplataforma. Lideré la arquitectura e implementación de la aplicación móvil (Android/iOS) y el panel administrativo web (Flutter Web SPA), el sistema de diseño compartido (nae_ui), la integración de lectura óptica de documentos en campo, la sincronización en tiempo real y la ingeniería de lanzamiento en Google Play Store.",
      technologies: [
        {
          category: "Arquitectura & UI Multiplataforma",
          items: ["Flutter (Android, iOS & Web SPA)", "Dart", "Riverpod 3", "Clean Architecture", "Monorepo (nae_ui Design System)", "Motor White-Label Multi-Región"]
        },
        {
          category: "Hardware, Tiempo Real & Documentos",
          items: ["Google ML Kit (OCR MRZ Pasaportes)", "Escaneo PDF417 (Cédulas) y QR", "WebSockets (STOMP)", "Firebase Cloud Messaging (FCM)", "Generación nativa de PDF y Excel"]
        },
        {
          category: "Calidad (QA E2E) & Despliegue",
          items: ["Playwright (E2E Web)", "Maestro (E2E Mobile)", "Docker & Nginx (Cache-Busting SPA)", "Google Play Console Release (.aab)"]
        }
      ],
      achievements: [
        "Publicación oficial en producción en Google Play Store (app.nae.com), administrando el ciclo completo de firmado criptográfico, permisos de cámara/hardware y cumplimiento de políticas de la tienda.",
        "Reducción drástica del tiempo de check-in y abordaje en campo mediante lectura óptica OCR de zonas MRZ en pasaportes (ICAO 9303), decodificación PDF417 de cédulas y validación instantánea de pases QR.",
        "Diseño de un Monorepo con paquete visual compartido (nae_ui con +25 componentes atómicos) y motor White-Label capaz de adaptar identidad visual, reglas de negocio y aislamiento de datos para múltiples regiones desde un solo código base.",
        "Sincronización operativa en vivo vía WebSockets (STOMP) y notificaciones push (FCM), emisión en cliente de manifiestos de viaje en PDF/Excel y aseguramiento de calidad con pruebas E2E automatizadas (Playwright y Maestro)."
      ]
    }
  },
  {
    id: 2,
    title: "GuiLact",
    description: "Aplicación móvil oficial de tesis en la UTP. Plataforma integral de apoyo a la lactancia materna con monitoreo en tiempo real y chat de soporte.",
    tags: ["Flutter", "Firebase", "Mobile"],
    link: "https://www.linkedin.com/in/cesar-marquinez",
    isPrimary: false,
    image: guilactImg
  },
  {
    id: 3,
    title: "MiEvento UTP (Gitce)",
    description: "Plataforma de gestión de eventos académicos en producción. Colaboración en la migración y desarrollo de módulos clave en Laravel.",
    tags: ["Laravel", "PHP", "Producción"],
    link: "https://mievento.utp.ac.pa",
    image: mieventoImg
  },
  {
    id: 4,
    title: "Análisis de Deserción",
    description: "Sistema de análisis de datos para identificar patrones de riesgo estudiantil y apoyar la toma de decisiones académicas.",
    tags: ["Python", "Data Analysis", "SQL"],
    link: "#",
    image: desercionImg
  }
];
