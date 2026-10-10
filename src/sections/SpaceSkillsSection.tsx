'use client';

import type React from 'react';
import { Sparkles, Code2, Layers, Server, Database, Brain, Wrench, BookOpen } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  LANGUAGES: <Code2 className="w-4 h-4 text-cyan-400" />,
  FRONTEND: <Layers className="w-4 h-4 text-cyan-400" />,
  BACKEND: <Server className="w-4 h-4 text-cyan-400" />,
  DATABASES: <Database className="w-4 h-4 text-cyan-400" />,
  'AI / ML': <Brain className="w-4 h-4 text-cyan-400" />,
  TOOLS: <Wrench className="w-4 h-4 text-cyan-400" />,
  CORE: <BookOpen className="w-4 h-4 text-cyan-400" />,
};

export const SpaceSkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 sm:py-32 border-t border-purple-500/20 space-y-16 select-none relative" aria-label="Technical Skills">
      {/* Background Cosmic Glow */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-xs font-mono text-cyan-400">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>TECHNICAL CONSTELLATIONS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-black text-white tracking-tight leading-[1.08]">
          Skills & Placement <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Competencies.
          </span>
        </h2>
        <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
          Languages, frameworks, databases, and computer science fundamentals leveraged across full-stack architectures and machine learning research.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {SKILL_CATEGORIES.map((cat) => (
          <div
            key={cat.category}
            className="p-6 sm:p-7 rounded-2xl bg-[#07031c]/65 border border-purple-500/20 hover:border-cyan-400/50 backdrop-blur-xl transition-all duration-300 space-y-4 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] group"
          >
            {/* Category Header */}
            <div className="flex items-center justify-between border-b border-purple-500/20 pb-3">
              <div className="flex items-center gap-2.5">
                {CATEGORY_ICONS[cat.category] || <Code2 className="w-4 h-4 text-cyan-400" />}
                <h3 className="font-mono text-xs font-bold tracking-wider text-slate-200 uppercase group-hover:text-cyan-300 transition-colors">
                  {cat.category === 'CORE' ? 'CORE CS FOUNDATIONS' : cat.category}
                </h3>
              </div>
              <span className="text-[10px] font-mono text-purple-400">
                {cat.skills.length} MODULES
              </span>
            </div>

            {/* Tech Chips */}
            <div className="flex flex-wrap gap-2 pt-1">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs sm:text-sm font-medium px-3 py-1.5 rounded-lg bg-purple-900/20 border border-purple-500/25 text-slate-200 hover:text-white hover:border-cyan-400/60 hover:bg-cyan-900/20 transition-all duration-200 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
