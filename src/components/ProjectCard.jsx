import React from 'react';

export const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Encabezado de la tarjeta */}
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-slate-800 dark: text-white">{project.title}</h3>
        {/* Icono de flecha saliendo */}
        <a href={project.link} target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-800">
          🔗
        </a>
      </div>

      {/* Descripción */}
      <p className="text-slate-600 dark:text-slate-300 mb-6 text-sm leading-relaxed">
        {project.description}
      </p>

      {/* Etiquetas (Tags) */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};