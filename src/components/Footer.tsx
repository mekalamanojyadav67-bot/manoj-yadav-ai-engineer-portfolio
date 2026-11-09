import React from 'react';
import { Github, Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-800/80 bg-[#040610] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-sm font-bold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </div>
            <p className="text-slate-500">
              {PERSONAL_INFO.role} · First-Year B.Tech CSE Undergrad
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#about"
              className="text-slate-400 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#education"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Education
            </a>
            <a
              href="#journey"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Journey
            </a>
            <a
              href="#contact"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub Profile"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Email Manoj"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 text-center text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Designed & Built with modern React, TypeScript & Tailwind CSS.</span>
          <span>© {new Date().getFullYear()} Manoj Yadav. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};
