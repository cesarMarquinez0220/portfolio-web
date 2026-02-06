import guilactImg from '../assets/guilact.png'
import mieventoImg from '../assets/mievento.png'
import desercionImg from '../assets/desercion.png'

export const projects = [
  {
    id: 1,
    title: "GuiLact",
    description: "Aplicación móvil oficial de tesis en la UTP. Plataforma integral de apoyo a la lactancia materna con monitoreo en tiempo real y chat de soporte.",
    tags: ["Flutter", "Firebase", "Mobile"],
    link: "https://www.linkedin.com/in/cesar-marquinez", // Tu LinkedIn por ahora
    isPrimary: true, // Para destacarlo más grande si queremos
    image: guilactImg
  },
  {
    id: 2,
    title: "MiEvento UTP (Gitce)",
    description: "Plataforma de gestión de eventos académicos en producción. Colaboración en la migración y desarrollo de módulos clave en Laravel.",
    tags: ["Laravel", "PHP", "Producción"],
    link: "https://mievento.utp.ac.pa",
    image: mieventoImg
  },
  {
    id: 3,
    title: "Análisis de Deserción",
    description: "Sistema de análisis de datos para identificar patrones de riesgo estudiantil y apoyar la toma de decisiones académicas.",
    tags: ["Python", "Data Analysis", "SQL"],
    link: "#",
    image: desercionImg
  }
];