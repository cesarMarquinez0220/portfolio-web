import { projects } from './data/projects';
import { ProjectCard } from './components/ProjectCard';

function App() {
  return (
    <div className="min-h-screen max-w-5xl mx-auto px-6 py-20">
      
      {/* HEADER */}
      <header className="mb-20 animate-fade-in">
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
          César Marquínez
        </h1>
        <p className="text-xl text-slate-500 font-light max-w-2xl">
          Desarrollador de Software enfocado en transformar ideas en aplicaciones móviles y web escalables. 
          <span className="block mt-2 font-medium text-slate-800">
            📍 Panamá • 🎓 Tesista UTP
          </span>
        </p>
      </header>

      {/* GRID DE PROYECTOS */}
      <main>
        <h2 className="text-2xl font-bold text-slate-800 mb-8 border-l-4 border-blue-500 pl-4">
          Proyectos Destacados
        </h2>
        
        {/* Aquí ocurre la magia de React: Mapeo de datos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="mt-24 pt-8 border-t border-slate-200 text-center text-slate-400 text-sm">
        © 2026 César Marquínez. Construido con React & Tailwind.
      </footer>

    </div>
  )
}

export default App