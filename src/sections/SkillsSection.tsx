import type React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-16 sm:py-24 border-t border-white/[0.08] space-y-12" aria-label="Skills">
      {/* Section Header */}
      <div className="space-y-3">
        <div className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-widest">
          TECHNICAL SKILLS
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Technologies & Competencies.
        </h2>
        <p className="text-base text-slate-400 font-light max-w-xl">
          Core languages, frameworks, libraries, and systems I use to build full-stack web platforms and applied AI models.
        </p>
      </div>

      {/* Clean 3-Column Scannable Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {SKILL_CATEGORIES.map((cat) => (
          <div
            key={cat.category}
            className="p-6 rounded-xl bg-[#11141a]/60 border border-white/[0.08] space-y-3.5 hover:border-white/[0.18] transition-colors"
          >
            {/* Category Header */}
            <h3 className="text-xs font-mono font-bold tracking-wider text-slate-200 uppercase">
              {cat.category}
            </h3>

            {/* Clean Technology Chips */}
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-medium px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06] text-slate-300 hover:text-white hover:border-white/[0.2] transition-colors"
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
