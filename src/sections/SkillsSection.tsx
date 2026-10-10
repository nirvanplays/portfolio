import type React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="section-container border-t border-slate-100" aria-label="Technical Skills">
      <div className="space-y-10">
        {/* Section Heading */}
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Skills
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full" />
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl pt-1">
            Technologies, frameworks, and foundational computer science principles I work with.
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.category}
              className="p-6 rounded-xl border border-slate-200 bg-white hover:border-slate-300 shadow-2xs hover:shadow-xs transition-all space-y-4"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="font-semibold text-slate-900 text-base">
                  {category.category}
                </h3>
                <span className="text-xs font-mono text-slate-400">
                  {category.skills.length} skills
                </span>
              </div>

              {/* Skills Badges */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/80 text-xs font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
