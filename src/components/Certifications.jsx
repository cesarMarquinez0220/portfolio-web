import React from 'react';
import { FaAws, FaExternalLinkAlt, FaCertificate } from 'react-icons/fa';

export const Certifications = ({ certifications }) => {
    if (!certifications || certifications.length === 0) return null;

    const getIcon = (iconName) => {
        switch (iconName) {
            case 'aws': return <FaAws className="text-[#FF9900]" size={40} />;
            default: return <FaCertificate className="text-slate-400" size={40} />;
        }
    };

    return (
        <section className="mb-24">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 mb-12 flex items-center gap-3">
                <span className="w-2 h-8 bg-purple-500 rounded-full"></span>
                Certificaciones
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                    <div
                        key={index}
                        className="group relative bg-white dark:bg-slate-800/60 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-purple-400 dark:hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex items-start gap-4"
                    >
                        {/* Icono */}
                        <div className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl border border-slate-100 dark:border-slate-600 group-hover:scale-110 transition-transform duration-300">
                            {getIcon(cert.icon)}
                        </div>

                        {/* Contenido */}
                        <div className="flex-1">
                            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                {cert.title}
                            </h3>
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">
                                {cert.issuer} • {cert.date}
                            </p>

                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
                            >
                                Ver Credencial <FaExternalLinkAlt size={12} />
                            </a>
                        </div>

                        {/* Decorative blob inside card */}
                        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-colors"></div>
                    </div>
                ))}
            </div>
        </section>
    );
};
