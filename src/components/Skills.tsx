import React, { useState } from 'react';
import { Terminal, Code2, Globe, Brain, Palette, Layers, CheckCircle } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillItem } from '../types/portfolio';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Languages', 'Web', 'AI & Emerging'];

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === selectedCategory);

  const getSkillIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'python':
        return <Terminal className="w-5 h-5 text-blue-400" />;
      case 'html':
        return <Code2 className="w-5 h-5 text-orange-400" />;
      case 'css':
        return <Palette className="w-5 h-5 text-indigo-400" />;
      case 'javascript':
        return <Code2 className="w-5 h-5 text-yellow-400" />;
      case 'web development':
        return <Globe className="w-5 h-5 text-cyan-400" />;
      case 'generative ai':
        return <Brain className="w-5 h-5 text-purple-400" />;
      default:
        return <Layers className="w-5 h-5 text-blue-400" />;
    }
  };

  const getLevelColor = (level: SkillItem['level']) => {
    switch (level) {
      case 'Beginner':
        return 'text-blue-400 border-blue-500/30 bg-blue-500/10';
      case 'Basic':
        return 'text-indigo-400 border-indigo-500/30 bg-indigo-500/10';
      case 'Learning':
        return 'text-amber-400 border-amber-500/30 bg-amber-500/10';
      case 'Exploring':
        return 'text-purple-400 border-purple-500/30 bg-purple-500/10';
      default:
        return 'text-slate-400 border-slate-700 bg-slate-800';
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
              02. Technical Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Current Skills & Learning Horizons
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              An honest appraisal of my current technical stack as a first-year student.
              No inflated claims—just clear foundations and daily compounding knowledge.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-6 bg-slate-900/60 border border-slate-800 rounded-2xl hover:border-slate-700 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header: Icon, Name, Level */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:border-blue-500/40 transition-colors">
                      {getSkillIcon(skill.name)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                        {skill.name}
                      </h3>
                      <div className="text-xs text-slate-400 flex items-center gap-1.5">
                        <span>{skill.category}</span>
                      </div>
                    </div>
                  </div>

                  <span
                    className={`text-xs px-2.5 py-0.5 rounded border font-medium whitespace-nowrap ${getLevelColor(
                      skill.level
                    )}`}
                  >
                    {skill.level}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {skill.description}
                </p>

                {/* Topics Covered */}
                <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-800/60">
                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                    Core Topics Studied:
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {skill.topics.map((t) => (
                      <div key={t} className="text-xs text-slate-300 flex items-center gap-1.5">
                        <CheckCircle className="w-3 h-3 text-blue-400 shrink-0" />
                        <span className="truncate">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Progress Bar & Numerical Indicator */}
              <div className="pt-3 border-t border-slate-800/80">
                <div className="flex justify-between items-center text-xs mb-1.5">
                  <span className="text-slate-400 font-medium">Proficiency Level</span>
                  <span className="font-mono text-slate-300 font-semibold">{skill.level}</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-500"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Developer Tooling Strip */}
        <div className="mt-12 p-6 bg-slate-900/40 border border-slate-800/80 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-mono uppercase text-blue-400 mb-1">Tools & Environment</div>
            <div className="text-sm font-semibold text-white">
              Git, GitHub, VS Code, Linux/Bash Basics, Jupyter Notebook
            </div>
          </div>
          <div className="text-xs text-slate-400 max-w-md">
            Consistently committing to GitHub, learning command-line workflows, and running Python
            explorations in interactive environments.
          </div>
        </div>
      </div>
    </section>
  );
};
