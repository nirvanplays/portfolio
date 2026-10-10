import type React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="space-y-8 pt-8 border-t border-white/[0.08]" aria-label="Technical Stack">
      {/* Section Header */}
      <div className="flex items-center gap-3 font-mono text-xs text-slate-400 uppercase tracking-widest">
        <span className="text-blue-400">03</span>
        <span className="w-8 h-px bg-white/[0.2]" />
        <span>TECHNICAL STACK</span>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Engineering Matrix & Competencies.
        </h2>
        <p className="text-sm text-slate-400 font-light">
          Tools, languages, and systems I use to design and deploy software.
        </p>
      </div>

      {/* Elegant Typographic Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        {SKILL_CATEGORIES.map((cat) => (
          <div
            key={cat.category}
            className="editorial-card rounded-xl p-5 space-y-3 hover:border-white/[0.18] transition-colors"
          >
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
              <span className="font-mono text-xs font-bold text-white tracking-wider">
                {cat.category}
              </span>
              <span className="font-mono text-[10px] text-slate-400">
                {cat.skills.length} MODULES
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-xs px-2.5 py-1 rounded bg-white/[0.02] border border-white/[0.08] text-slate-300 hover:text-white hover:border-blue-400/50 hover:bg-white/[0.04] transition-all cursor-default"
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
