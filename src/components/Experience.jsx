import React from 'react';
import { profile } from '../data/profile';



export const Experience = () => {
  return (
    <section className="mb-20">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 border-l-4 border-emerald-500 pl-4">
        Experiencia Laboral
      </h2>
      <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-3 space-y-10">
        {profile.experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 group">
            {/* Bolita del timeline */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-emerald-500 group-hover:scale-125 transition-transform" />

            <h3 className="text-lg font-bold text-slate-800 dark:text-white">{exp.role}</h3>
            <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-2 block">
              {exp.company} • {exp.period}
            </span>
            <p className="text-slate-600 dark:text-slate-300 mb-3 text-sm max-w-2xl">
              {exp.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {exp.tech.map(t => (
                <span key={t} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-500 dark:text-slate-400">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};