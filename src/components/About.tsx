import React from 'react';
import { Target, Compass, BookOpen, Layers, Lightbulb, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#070a1a]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
            01. Background & Vision
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-balance">
            Building Strong Engineering Roots for an AI-Driven Future
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            I am a motivated first-year Computer Science and Engineering student with an unwavering
            focus on Artificial Intelligence. My approach is grounded in understanding mathematical
            fundamentals and computational thinking before applying cutting-edge machine learning models.
          </p>
        </div>

        {/* 3 Pillars / Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Academic Discipline */}
          <div className="p-6 bg-slate-900/70 border border-slate-800 rounded-2xl hover:border-blue-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Academic Foundation</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Enrolled in Bachelor of Technology in Computer Science & Engineering. Currently strengthening
              core coursework in programming, discrete mathematics, digital logic, and algorithmic reasoning.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-800/80 text-xs text-slate-400 flex items-center gap-2">
              <span>Department:</span>
              <span className="text-slate-200 font-medium">CSE (First Year)</span>
            </div>
          </div>

          {/* Card 2: Career Goal */}
          <div className="p-6 bg-slate-900/70 border border-slate-800 rounded-2xl hover:border-purple-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Primary Career Mission</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              My ultimate ambition is to grow into a versatile, high-impact AI Engineer. I seek to build
              intelligent systems that solve genuine societal and business bottlenecks with precision and ethics.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-800/80 text-xs text-slate-400 flex items-center gap-2">
              <span>Goal:</span>
              <span className="text-slate-200 font-medium">Professional AI Engineer</span>
            </div>
          </div>

          {/* Card 3: Learning Philosophy */}
          <div className="p-6 bg-slate-900/70 border border-slate-800 rounded-2xl hover:border-indigo-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Practical Exploration</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Belief in learning by building. From scripting grade calculators in Python to testing modern
              frontend workflows and experimenting with Generative AI tools, each day adds tangible competence.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-800/80 text-xs text-slate-400 flex items-center gap-2">
              <span>Focus:</span>
              <span className="text-slate-200 font-medium">Concept + Practical Code</span>
            </div>
          </div>
        </div>

        {/* Detailed Info Callout */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900/90 via-[#0a0f27] to-slate-900/90 border border-slate-800 rounded-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
                <Lightbulb className="w-3.5 h-3.5" />
                <span>Transparent & Authentic Profile</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Preparing for Future Internship & Research Opportunities
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                As a freshman, I prioritize deep fundamentals over superficial buzzwords. I actively document
                my learning journey, practice daily problem solving, and collaborate with peers on open-source
                repositories. I welcome guidance, code reviews, and internship discussions from experienced engineers.
              </p>
            </div>

            <div className="lg:col-span-4 space-y-2 border-t lg:border-t-0 lg:border-l border-slate-800 pt-4 lg:pt-0 lg:pl-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Solid mathematical & logical aptitude</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Dedicated daily programming practice</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Active Git & GitHub version control</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Clear roadmap towards Machine Learning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
