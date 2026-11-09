import React from 'react';
import { ArrowRight, Mail, Sparkles, Terminal, Code2, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenGradeCalculator?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial gradient glow (dark navy/electric blue/purple) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-blue-600/10 via-purple-600/10 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-blue-500/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Academic Status Label */}
            <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 bg-blue-950/40 border border-blue-800/50 px-3 py-1.5 rounded-md">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>B.Tech Computer Science & Engineering</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-400">Class of 2028</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] text-balance">
              {PERSONAL_INFO.heroHeading}
            </h1>

            {/* Subtitle */}
            <div className="text-lg sm:text-xl lg:text-2xl font-semibold bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              {PERSONAL_INFO.heroSubtitle}
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.heroDescription}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.98] rounded-xl shadow-lg shadow-blue-600/25 transition-all"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/90 border border-slate-700 hover:border-slate-500 active:scale-[0.98] rounded-xl transition-all"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Active Tech In Progress */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <span className="text-slate-500 font-medium">Currently Focusing On:</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Terminal className="w-3.5 h-3.5 text-blue-400" /> Python Logic & OOP
              </span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Code2 className="w-3.5 h-3.5 text-purple-400" /> Web Fundamentals
              </span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Cpu className="w-3.5 h-3.5 text-indigo-400" /> Generative AI Concepts
              </span>
            </div>
          </div>

          {/* Right Column: AI-Inspired Visual */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] aspect-square">
              {/* Outer glowing orbital rings */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-600/20 via-purple-600/20 to-transparent p-[1px] shadow-2xl shadow-blue-900/30">
                <div className="w-full h-full bg-[#090d22] rounded-3xl overflow-hidden relative group">
                  {/* AI Neural Image */}
                  <img
                    src="/src/assets/images/ai_hero_neural_core_1794240387112.jpg"
                    alt="AI Neural Network Core with synaptic nodes and electric pathways"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* High-contrast subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060815] via-transparent to-transparent opacity-80" />

                  {/* Corner Accent Label */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md border border-slate-700/60 rounded-md text-[11px] font-mono text-blue-300">
                    Neural Synapse Core · AI Paradigm
                  </div>

                  {/* Bottom Insight Card */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 bg-slate-900/80 backdrop-blur-md border border-slate-700/70 rounded-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-semibold text-white">Continuous Growth</div>
                        <div className="text-[11px] text-slate-400">1st Year CSE → AI Specialization</div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-mono font-bold text-purple-400">2024 - 2028</span>
                        <div className="text-[10px] text-slate-500">Academic Journey</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Subtle Orbit Accents */}
              <div className="absolute -top-3 -right-3 w-16 h-16 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-purple-500/10 rounded-full blur-xl pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Fact Strip below hero split as per portfolio design guide */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="text-2xl font-bold font-mono text-white">1st Year</div>
            <div className="text-xs text-slate-400 mt-0.5">B.Tech Undergrad (CSE)</div>
          </div>
          <div>
            <div className="text-2xl font-bold font-mono text-blue-400">6+</div>
            <div className="text-xs text-slate-400 mt-0.5">Core Technical Focus Areas</div>
          </div>
          <div>
            <div className="text-2xl font-bold font-mono text-purple-400">100%</div>
            <div className="text-xs text-slate-400 mt-0.5">Committed to AI Path</div>
          </div>
          <div>
            <div className="text-2xl font-bold font-mono text-emerald-400">Open</div>
            <div className="text-xs text-slate-400 mt-0.5">To Internships & Mentorship</div>
          </div>
        </div>
      </div>
    </section>
  );
};
