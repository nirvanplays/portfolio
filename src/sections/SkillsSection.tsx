import type React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 sm:py-32 border-t border-white/[0.08] space-y-16" aria-label="Skills">
      {/* Section Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="font-mono text-xs sm:text-sm text-blue-400 font-semibold uppercase tracking-widest block">
          TECHNICAL SKILLS
        </span>
        <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white tracking-tight leading-[1.08]">
          Technologies & Competencies.
        </h2>
        <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
          Languages, frameworks, databases, and computer science fundamentals I use to engineer full-stack systems and applied AI models.
        </p>
      </div>

      {/* Clean 3-Column Scannable Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILL_CATEGORIES.map((cat) => (
          <div
            key={cat.category}
            className="p-7 rounded-xl bg-[#12151B]/80 border border-white/[0.08] space-y-4 hover:border-white/[0.18] transition-colors"
          >
            {/* Category Header */}
            <h3 className="font-mono text-xs font-bold tracking-wider text-slate-300 uppercase">
              {cat.category}
            </h3>

            {/* Clean Technology Chips */}
            <div className="flex flex-wrap gap-2.5">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs sm:text-sm font-medium px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-slate-200 hover:text-white hover:border-white/[0.2] transition-colors"
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
