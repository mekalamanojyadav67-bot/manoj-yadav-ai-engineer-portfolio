import React from 'react';
import { GraduationCap, BookOpen, Calendar, CheckCircle2, Award, FileCode } from 'lucide-react';
import { COURSEWORK_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
            04. Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Bachelor of Technology in Computer Science & Engineering
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Currently pursuing undergraduate engineering with emphasis on algorithmic foundations,
            discrete mathematics, and computational systems.
          </p>
        </div>

        {/* Education Hero Card */}
        <div className="mb-12 p-6 sm:p-8 bg-gradient-to-br from-slate-900/90 via-[#0a0e24] to-slate-900/90 border border-slate-800 rounded-3xl shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-md text-xs font-mono">
                  Undergraduate Degree
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span>2024 – 2028 (4-Year Degree)</span>
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  B.Tech in Computer Science and Engineering
                </h3>
                <div className="text-sm sm:text-base text-blue-300 font-medium mt-1">
                  Department of Computer Science & Engineering (CSE) · 1st Year Undergrad
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                The Computer Science and Engineering curriculum provides rigorous foundational preparation
                in software engineering, computational complexity, digital system architecture, and mathematical
                analysis—the core building blocks needed to build state-of-the-art AI and machine learning systems.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Current Standing: 1st Year
                </span>
                <span aria-hidden="true" className="text-slate-700">·</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Focus: Python, DSA & Discrete Math
                </span>
                <span aria-hidden="true" className="text-slate-700">·</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Full-time Degree
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-950/70 border border-slate-800 rounded-2xl p-5 space-y-3">
              <div className="text-xs font-mono uppercase text-slate-400">Academic Commitments</div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <GraduationCap className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>Rigorous lab coursework in C and Python programming</span>
                </li>
                <li className="flex items-start gap-2">
                  <BookOpen className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>Mathematical modeling: Matrices, calculus, and linear systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCode className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span>Hands-on implementation of core algorithms and logic circuits</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Coursework Modules Grid */}
        <div>
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span>Core First-Year Coursework Modules</span>
            </h3>
            <span className="text-xs text-slate-400 font-mono">Academic Year 2024-2025</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {COURSEWORK_DATA.map((course) => (
              <div
                key={course.code}
                className="p-5 bg-slate-900/60 border border-slate-800 rounded-xl hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                  <span>{course.code}</span>
                  <span className="text-emerald-400 font-medium">In Progress</span>
                </div>
                <h4 className="text-sm font-bold text-white mb-2">{course.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{course.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
