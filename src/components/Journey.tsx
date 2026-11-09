import React from 'react';
import { Compass, CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react';
import { ROADMAP_DATA } from '../data/portfolioData';

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-20 md:py-28 bg-[#07091a]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
            05. Progression Roadmap
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            My Learning Journey Toward Becoming an AI Engineer
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            A structured, milestones-driven curriculum guiding my growth from undergraduate freshman
            to a professional capable of architecting and deploying real-world machine intelligence.
          </p>
        </div>

        {/* Roadmap Timeline */}
        <div className="relative border-l border-slate-800 ml-4 md:ml-6 space-y-12">
          {ROADMAP_DATA.map((step) => {
            const isCurrent = step.status === 'In Progress';
            const isGoal = step.status === 'Goal';

            return (
              <div key={step.step} className="relative pl-8 md:pl-10 group">
                {/* Timeline Node Marker */}
                <div
                  className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                    isCurrent
                      ? 'border-blue-500 bg-blue-950 text-blue-400 shadow-md shadow-blue-500/20'
                      : isGoal
                      ? 'border-purple-500 bg-purple-950 text-purple-400'
                      : 'border-slate-700 bg-slate-900 text-slate-400'
                  }`}
                >
                  {isCurrent ? (
                    <Clock className="w-3.5 h-3.5" />
                  ) : isGoal ? (
                    <Target className="w-3.5 h-3.5" />
                  ) : (
                    <span className="text-xs font-mono font-bold">{step.step}</span>
                  )}
                </div>

                {/* Card Container */}
                <div
                  className={`p-6 rounded-2xl border transition-all ${
                    isCurrent
                      ? 'bg-slate-900/90 border-blue-500/30 shadow-xl shadow-blue-950/20'
                      : isGoal
                      ? 'bg-gradient-to-r from-purple-950/20 to-slate-900/80 border-purple-500/30'
                      : 'bg-slate-900/50 border-slate-800'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-blue-400 font-semibold">
                        {step.phase}
                      </span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span
                        className={`text-xs px-2.5 py-0.5 rounded font-mono font-medium ${
                          isCurrent
                            ? 'text-blue-400 bg-blue-500/10 border border-blue-500/20'
                            : isGoal
                            ? 'text-purple-400 bg-purple-500/10 border border-purple-500/20'
                            : 'text-slate-400 bg-slate-800/80 border border-slate-700/50'
                        }`}
                      >
                        {step.status}
                      </span>
                    </div>

                    <span className="text-xs text-slate-500 font-mono">
                      Milestone 0{step.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Skills tags in this phase */}
                  <div className="pt-3 border-t border-slate-800/80">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Target Competencies:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {step.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 text-xs font-mono text-slate-300 bg-slate-950/80 border border-slate-800 rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Commitment Statement */}
        <div className="mt-16 p-6 sm:p-8 bg-slate-900/60 border border-slate-800 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-1">
              Guiding Principle
            </div>
            <div className="text-base font-bold text-white">
              Consistency over haste. Deep foundations over surface buzzwords.
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Tracking my growth publically on GitHub to stay accountable and disciplined.
            </div>
          </div>

          <a
            href="https://github.com/mekalamanoyadav67"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all whitespace-nowrap"
          >
            <span>Follow My GitHub Activity</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
