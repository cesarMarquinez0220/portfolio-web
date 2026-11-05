import React, { useState, useEffect } from 'react';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaGooglePlay,
  FaSitemap,
  FaLock,
  FaCheckCircle,
  FaTimes,
  FaUserTie,
  FaLightbulb,
  FaCogs,
  FaTrophy
} from 'react-icons/fa';

export const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hasCaseStudy = Boolean(project.caseStudy);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <>
      <div
        className={`group relative flex flex-col bg-white dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
          hasCaseStudy ? 'md:col-span-2 lg:flex-row' : 'h-full'
        }`}
      >
        {/* IMAGEN / DIAGRAMA DEL PROYECTO */}
        <div
          className={`relative overflow-hidden bg-slate-900 ${
            hasCaseStudy
              ? 'lg:w-7/12 min-h-[260px] sm:min-h-[340px] flex items-center justify-center p-3 sm:p-5 cursor-pointer'
              : 'h-48'
          }`}
          onClick={() => hasCaseStudy && setIsModalOpen(true)}
          title={hasCaseStudy ? 'Clic para abrir el Caso de Estudio y ampliar el diagrama' : project.title}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className={`w-full h-full transform group-hover:scale-105 transition-transform duration-700 ${
                hasCaseStudy ? 'object-contain rounded-xl shadow-lg' : 'object-cover'
              }`}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center">
              <span className="text-4xl">🚀</span>
            </div>
          )}

          {/* BADGES FLOTANTES EN EL DIAGRAMA */}
          {hasCaseStudy && (
            <div className="absolute top-4 left-4 right-4 flex flex-wrap justify-between items-center gap-2 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-600/90 text-white backdrop-blur-md shadow-md">
                <FaSitemap size={12} />
                Diagrama de Arquitectura
              </span>
              {project.isPrivate && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/90 text-slate-200 border border-slate-700 backdrop-blur-md">
                  <FaLock size={10} className="text-amber-400" />
                  Proyecto Privado (Sin código expuesto)
                </span>
              )}
            </div>
          )}

          {/* OVERLAY DARK ON HOVER */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 pointer-events-none" />
        </div>

        {/* CONTENIDO */}
        <div className={`flex-1 p-6 sm:p-8 flex flex-col ${hasCaseStudy ? 'lg:w-5/12' : ''}`}>
          {hasCaseStudy && (
            <div className="mb-2">
              <span className="inline-block px-3 py-1 text-xs font-bold tracking-wide uppercase bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 rounded-full border border-emerald-300/50 dark:border-emerald-700/50">
                {project.caseStudy.badge}
              </span>
            </div>
          )}

          <div className="flex justify-between items-start gap-3 mb-3">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <div className="flex gap-3 shrink-0 mt-1">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                  title="Ver Código"
                >
                  <FaGithub size={20} />
                </a>
              )}
              {project.link && project.link !== '#' && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                  title={project.playStoreUrl ? 'Ver en Google Play' : 'Ver Proyecto'}
                >
                  <FaExternalLinkAlt size={18} />
                </a>
              )}
            </div>
          </div>

          <p className={`text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-5 ${hasCaseStudy ? '' : 'line-clamp-3'}`}>
            {project.description}
          </p>

          {/* RESUMEN RÁPIDO DEL CASO DE ESTUDIO EN LA TARJETA */}
          {hasCaseStudy && (
            <div className="space-y-3 mb-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700/80 text-xs sm:text-sm">
              <div>
                <span className="font-bold text-blue-600 dark:text-blue-400">Mi Rol: </span>
                <span className="text-slate-700 dark:text-slate-300">
                  Desarrollador Principal Frontend (Mobile & Web) y Arquitecto Cliente Multiplataforma.
                </span>
              </div>
              <div>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">Impacto: </span>
                <span className="text-slate-700 dark:text-slate-300">
                  App publicada en Google Play, escaneo óptico OCR/MRZ/PDF417 en campo, monorepo White-Label multi-región y sincronización en tiempo real.
                </span>
              </div>
            </div>
          )}

          {/* BOTONES DE ACCIÓN (CASO DE ESTUDIO + GOOGLE PLAY) */}
          {(hasCaseStudy || project.playStoreUrl) && (
            <div className="flex flex-wrap gap-3 mb-6">
              {hasCaseStudy && (
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <FaSitemap size={15} />
                  <span>Ver Caso de Estudio</span>
                </button>
              )}

              {project.playStoreUrl && (
                <a
                  href={project.playStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold bg-slate-900 hover:bg-slate-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white shadow-md hover:shadow-lg transition-all"
                >
                  <FaGooglePlay size={15} />
                  <span>Google Play Store</span>
                </a>
              )}
            </div>
          )}

          {/* TAGS & FOOTER */}
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-700">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-semibold bg-slate-50 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 rounded-md border border-slate-200 dark:border-slate-600"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MODAL DE CASO DE ESTUDIO COMPLETO */}
      {hasCaseStudy && isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón Cerrar */}
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="sticky top-2 float-right p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/40 dark:hover:text-red-400 transition-colors z-10 cursor-pointer"
              aria-label="Cerrar Caso de Estudio"
            >
              <FaTimes size={18} />
            </button>

            {/* Encabezado */}
            <div className="mb-6 pr-10">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-3 py-1 text-xs font-bold uppercase bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 rounded-full">
                  {project.caseStudy.badge}
                </span>
                {project.isPrivate && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 rounded-full">
                    <FaLock size={11} />
                    Repositorio Privado
                  </span>
                )}
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
                {project.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
                {project.caseStudy.subtitle}
              </p>
            </div>

            {/* Diagrama de Arquitectura Ampliado */}
            <div className="mb-8 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-950 p-2 sm:p-4">
              <img
                src={project.image}
                alt={`Arquitectura de ${project.title}`}
                className="w-full h-auto rounded-xl"
              />
              {project.caseStudy.privacyNote && (
                <p className="mt-3 text-xs text-slate-400 text-center italic px-2">
                  🔒 {project.caseStudy.privacyNote}
                </p>
              )}
            </div>

            {/* Grid: Problema & Mi Rol */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2.5 text-amber-600 dark:text-amber-400 font-bold text-lg mb-3">
                  <FaLightbulb size={20} />
                  <h3>1. ¿Qué problema resolvía?</h3>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                  {project.caseStudy.problem}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2.5 text-blue-600 dark:text-blue-400 font-bold text-lg mb-3">
                  <FaUserTie size={20} />
                  <h3>2. ¿Cuál fue mi rol?</h3>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                  {project.caseStudy.role}
                </p>
              </div>
            </div>

            {/* Tecnologías Utilizadas */}
            <div className="mb-8 p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2.5 text-purple-600 dark:text-purple-400 font-bold text-lg mb-4">
                <FaCogs size={20} />
                <h3>3. ¿Qué tecnologías usé?</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.caseStudy.technologies.map((group) => (
                  <div
                    key={group.category}
                    className="p-4 rounded-lg bg-white dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-700/80"
                  >
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
                      {group.category}
                    </h4>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Logros y Resultados */}
            <div className="mb-8 p-5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/60">
              <div className="flex items-center gap-2.5 text-emerald-700 dark:text-emerald-400 font-bold text-lg mb-4">
                <FaTrophy size={20} />
                <h3>4. ¿Qué logré?</h3>
              </div>
              <ul className="space-y-3">
                {project.caseStudy.achievements.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                    <FaCheckCircle className="text-emerald-500 mt-1 shrink-0" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer del Modal con botón a Google Play */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
              <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Aplicación verificada y disponible públicamente en la tienda oficial de Android.
              </span>
              <div className="flex gap-3 w-full sm:w-auto justify-end">
                {project.playStoreUrl && (
                  <a
                    href={project.playStoreUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg transition-all"
                  >
                    <FaGooglePlay size={16} />
                    <span>Ver en Google Play Store</span>
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-semibold bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors cursor-pointer"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
