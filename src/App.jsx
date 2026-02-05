import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { projects } from './data/projects';
import { profile } from './data/profile'; 
import { ProjectCard } from './components/ProjectCard';

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
    <div className="min-h-screen transition-colors duration-300 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white">
      
      {/* Botón flotante del tema */}
      <button 
        onClick={toggleTheme}
        className="fixed top-6 right-6 p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 hover:scale-110 transition-transform z-50 text-xl"
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>

      <div className="max-w-5xl mx-auto px-6 py-20">
        
        {/* HEADER DINÁMICO (Usando profile.js) */}
        <header className="mb-20 animate-fade-in flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-5xl font-extrabold tracking-tight mb-4">
              {profile.name}
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 font-light max-w-2xl">
              {profile.role} • 
              {profile.skills.map((skill, index) => (
                <span key={skill.name} className={`font-medium ${skill.color} ml-1`}>
                  {skill.name} {index < profile.skills.length - 1 ? '& ' : ''}
                </span>
              ))}
            </p>
          </div>

          {/* REDES SOCIALES DINÁMICAS */}
          <div className="flex gap-4">
            <SocialButton href={profile.social.github} icon={<FaGithub size={24} />} />
            <SocialButton href={profile.social.linkedin} icon={<FaLinkedin size={24} />} />
            <SocialButton href={`mailto:${profile.email}`} icon={<FaEnvelope size={24} />} />
          </div>
        </header>

        {/* GRID DE PROYECTOS */}
        <main>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 border-l-4 border-blue-500 pl-4">
            Proyectos Destacados
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </main>

        {/* FOOTER DINÁMICO */}
        <footer className="mt-24 pt-8 border-t border-slate-200 dark:border-slate-700 text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} {profile.name}. Construido con React & Tailwind.
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
    className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-blue-600 transition-colors"
  >
    {icon}
  </a>
);

export default App