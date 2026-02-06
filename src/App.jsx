import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { projects } from './data/projects';
import { profile } from './data/profile';
import { ProjectCard } from './components/ProjectCard';
import { Skills } from './components/Skills';
import { TypeAnimation } from 'react-type-animation';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';

import { Navbar } from './components/Navbar';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white font-sans selection:bg-blue-200 dark:selection:bg-blue-900">

      <Navbar />

      {/* Background Gradients/Blobs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-screen animate-blob"></div>
        <div className="absolute top-20 -left-20 w-72 h-72 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-20 w-80 h-80 bg-emerald-400/20 dark:bg-emerald-600/10 rounded-full blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-4000"></div>
      </div>

      {/* Botón flotante del tema (Ajustado posición para no chocar con Navbar en móvil) */}
      <button
        onClick={toggleTheme}
        className="fixed top-24 right-6 p-3 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md shadow-lg border border-slate-200 dark:border-slate-700 hover:scale-110 transition-transform z-50 text-xl"
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24" id="home">

        {/* HEADER DINÁMICO */}
        <header className="mb-32 animate-fade-in flex flex-col-reverse md:flex-row justify-between items-center gap-12">

          {/* SECCIÓN DE TEXTO (IZQUIERDA) */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block px-3 py-1 mb-4 text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-100 rounded-full dark:bg-blue-900/30 dark:text-blue-400">
              Portfolio 2026
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              Hola, soy <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                {profile.name}
              </span>
              <span className="inline-block animate-wave origin-bottom-right ml-4">👋</span>
            </h1>

            {/* Animación de Texto */}
            <div className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 font-light mb-8 h-12">
              <span className="mr-2">Soy</span>
              <TypeAnimation
                sequence={profile.roles} // Usamos los datos de profile.js
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-semibold text-blue-600 dark:text-blue-400 border-b-2 border-blue-500"
              />
            </div>

            {/* Descripción Corta */}
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto md:mx-0 leading-relaxed mb-10">
              {profile.bio}
            </p>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href={`${import.meta.env.BASE_URL}${profile.cvLink}`}
                download
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
              >
                <span>Download CV</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
              </a>

              <div className="flex gap-4 items-center justify-center bg-white dark:bg-slate-800/50 px-6 py-3 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
                <SocialButton href={profile.social.github} icon={<FaGithub size={22} />} />
                <SocialButton href={profile.social.linkedin} icon={<FaLinkedin size={22} />} />
                <SocialButton href={`mailto:${profile.email}`} icon={<FaEnvelope size={22} />} />
              </div>
            </div>
          </div>

          {/* FOTO DE PERFIL / AVATAR (DERECHA) - Placeholder o Imagen real si existe */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-white dark:bg-slate-800 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl flex items-center justify-center">
              <img
                src={`${import.meta.env.BASE_URL}cesar.png`}
                alt={profile.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </header>

        <section id="skills" className="scroll-mt-24">
          <Skills categories={profile.techStack} />
        </section>

        <section id="experience" className="scroll-mt-24">
          <Experience />
        </section>

        <section id="certifications" className="scroll-mt-24">
          <Certifications certifications={profile.certifications} />
        </section>

        {/* GRID DE PROYECTOS */}
        <main id="projects" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Proyectos Destacados
            </h2>
            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </main>

        {/* FOOTER DINÁMICO */}
        <footer className="mt-32 pt-12 border-t border-slate-200 dark:border-slate-800 pb-8 text-center text-slate-500 text-sm">
          <p className="mb-4">© {new Date().getFullYear()} {profile.name}.</p>
          <p className="opacity-75">Built with React, Tailwind, from Panama.</p>
        </footer>

      </div>
    </div>
  )
}

// Pequeño componente interno para no repetir clases en los botones sociales
const SocialButton = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="p-2 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors transform hover:scale-110"
  >
    {icon}
  </a>
);

export default App