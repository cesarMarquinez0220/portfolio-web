import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { title: 'Inicio', href: '#home' },
        { title: 'Habilidades', href: '#skills' },
        { title: 'Experiencia', href: '#experience' },
        { title: 'Certificaciones', href: '#certifications' },
        { title: 'Proyectos', href: '#projects' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border-b border-white/20 dark:border-slate-800">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* LOGO */}
                <a href="#home" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    CM
                </a>

                {/* DESKTOP MENU */}
                <div className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.title}
                            href={link.href}
                            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            {link.title}
                        </a>
                    ))}
                </div>

                {/* MOBILE MENU BUTTON */}
                <button
                    className="md:hidden text-slate-600 dark:text-slate-300"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* MOBILE MENU DROPDOWN */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 absolute top-16 left-0 w-full shadow-lg">
                    <div className="flex flex-col p-6 gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.title}
                                href={link.href}
                                className="text-slate-600 dark:text-slate-300 font-medium hover:text-blue-600 dark:hover:text-blue-400"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.title}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};
