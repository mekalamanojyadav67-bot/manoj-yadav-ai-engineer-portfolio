import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, Play, Code, ArrowUpRight, Cpu, Layers } from 'lucide-react';
import { PROJECTS_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { GradeCalculatorModal } from './GradeCalculatorModal';

export const Projects: React.FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const featuredProject = PROJECTS_DATA.find((p) => p.id === 'student-grade-calculator');
  const futureProjects = PROJECTS_DATA.filter((p) => p.id !== 'student-grade-calculator');

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#060817]/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
              03. Applied Projects
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Featured Work & AI Research Pipeline
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              From foundational software utilities to planned artificial intelligence architectures.
              Each project is built with clean code and transparent problem definitions.
            </p>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700/80 rounded-xl hover:bg-slate-800 hover:text-white transition-all self-start md:self-auto"
          >
            <Github className="w-4 h-4 text-blue-400" />
            <span>Explore All Repositories</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
          </a>
        </div>

        {/* Featured Project Showcase: Student Grade Calculator */}
        {featuredProject && (
          <div className="mb-20">
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider mb-4">
              <span>Featured Showcase</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-400">Completed Project</span>
            </div>

            <div className="bg-gradient-to-br from-slate-900/90 via-[#0a0f28]/80 to-slate-900/90 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl hover:border-blue-500/30 transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
                {/* Media Column */}
                <div className="lg:col-span-6 relative aspect-video lg:h-full overflow-hidden bg-slate-950">
                  <img
                    src={featuredProject.image || '/src/assets/images/grade_calculator_preview_1794240387970.jpg'}
                    alt="Student Grade Calculator software preview"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  
                  {/* Quick Overlay Action */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-slate-300 border border-slate-700/50">
                      Python & Web Stack
                    </span>
                    <button
                      onClick={() => setIsDemoModalOpen(true)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-blue-600/90 hover:bg-blue-600 backdrop-blur-md rounded-lg shadow transition-all"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>Live Demo</span>
                    </button>
                  </div>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 space-y-6">
                  <div>
                    <div className="text-xs font-mono text-purple-400 mb-1">
                      Academic Performance Tool
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {featuredProject.title}
                    </h3>
                    <p className="text-sm font-medium text-blue-300 mt-1">
                      {featuredProject.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {featuredProject.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Key Capabilities:
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {featuredProject.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-400 mt-0.5">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="pt-2">
                    <div className="text-xs text-slate-400 mb-2">Technologies Used:</div>
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-mono text-slate-300 bg-slate-800/80 border border-slate-700/60 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setIsDemoModalOpen(true)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-md shadow-blue-600/20 transition-all"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Launch Interactive Demo</span>
                    </button>

                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-700 hover:border-slate-500 rounded-xl transition-all"
                    >
                      <Github className="w-3.5 h-3.5 text-blue-400" />
                      <span>GitHub Repository</span>
                      <ExternalLink className="w-3 h-3 text-slate-500" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Future AI & Machine Learning Projects Section */}
        <div>
          <div className="max-w-2xl mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Future AI & Machine Learning Pipeline</span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Upcoming AI Projects in Research & Development
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Conceptualized architectures and upcoming implementations as I progress through mathematics,
              deep learning, and neural network coursework.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {futureProjects.map((project) => (
              <div
                key={project.id}
                className="p-6 bg-slate-900/60 border border-slate-800/80 rounded-2xl flex flex-col justify-between hover:border-purple-500/40 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 text-purple-300">
                      {project.status}
                    </span>
                    <Cpu className="w-4 h-4 text-purple-400/80" />
                  </div>

                  <h4 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h4>
                  <div className="text-xs text-slate-400 mt-1 mb-3">
                    {project.tagline}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-slate-800/80 mb-4">
                    <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                      Planned Scope:
                    </div>
                    {project.highlights.map((h, i) => (
                      <div key={i} className="text-xs text-slate-300 flex items-start gap-1.5">
                        <span className="text-purple-400">•</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[11px] font-mono text-slate-300 bg-slate-800/70 border border-slate-700/50 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Follow development on GitHub</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-500" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Grade Calculator Modal */}
      <GradeCalculatorModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        githubUrl={featuredProject?.githubUrl || PERSONAL_INFO.github}
      />
    </section>
  );
};
