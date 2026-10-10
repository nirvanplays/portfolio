import { useState } from 'react';
import type React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { soundManager } from '../audio/soundEffects';

export const SkillsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterOptions = [
    { id: 'all', label: 'ALL DISCIPLINES', count: SKILL_CATEGORIES.reduce((acc, c) => acc + c.skills.length, 0) },
    { id: 'AI / ML', label: 'AI & ML', count: SKILL_CATEGORIES.find(c => c.category === 'AI / ML')?.skills.length || 0 },
    { id: 'Backend', label: 'BACKEND', count: SKILL_CATEGORIES.find(c => c.category === 'Backend')?.skills.length || 0 },
    { id: 'Frontend', label: 'FRONTEND', count: SKILL_CATEGORIES.find(c => c.category === 'Frontend')?.skills.length || 0 },
    { id: 'Databases', label: 'DATABASES', count: SKILL_CATEGORIES.find(c => c.category === 'Databases')?.skills.length || 0 },
    { id: 'Languages', label: 'LANGUAGES', count: SKILL_CATEGORIES.find(c => c.category === 'Languages')?.skills.length || 0 },
    { id: 'Tools & DevOps', label: 'TOOLS & CLOUD', count: SKILL_CATEGORIES.find(c => c.category === 'Tools & DevOps')?.skills.length || 0 },
    { id: 'Core Computer Science', label: 'CORE CS', count: SKILL_CATEGORIES.find(c => c.category === 'Core Computer Science')?.skills.length || 0 },
  ];

  const displayedCategories = selectedFilter === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(cat => cat.category === selectedFilter);

  return (
    <section id="skills" className="section-container" aria-label="Technical Skills">
      <div className="border-t border-white/[0.1] pt-16 sm:pt-24 space-y-12">
        {/* Section Header */}
        <div className="flex items-center gap-3 font-mono-tech text-xs text-slate-400 uppercase tracking-widest">
          <span className="text-[--accent-cyan]">02</span>
          <span className="w-8 h-px bg-white/[0.2]" />
          <span>TECHNICAL COMPETENCY MATRIX</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-3xl sm:text-5xl font-sans-clean font-bold tracking-tight text-white uppercase leading-none">
              ENGINEERING STACK.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed">
              Comprehensive proficiencies across applied AI frameworks, full-stack server runtimes, data storage systems, and foundational computer science.
            </p>
          </div>

          <div className="font-mono-tech text-xs text-slate-400">
            TOTAL VERIFIED TECHNOLOGIES:{' '}
            <span className="text-white font-semibold">
              {SKILL_CATEGORIES.reduce((acc, c) => acc + c.skills.length, 0)}
            </span>
          </div>
        </div>

        {/* Quick Discipline Filters */}
        <div className="flex flex-wrap gap-2 pt-2 border-b border-white/[0.08] pb-6">
          {filterOptions.map((opt) => {
            const isActive = selectedFilter === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => {
                  soundManager.playClick();
                  setSelectedFilter(opt.id);
                }}
                className={`px-3.5 py-1.5 rounded-md font-mono-tech text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-white text-[#090a0d] font-bold shadow-sm'
                    : 'bg-white/[0.03] text-slate-400 border border-white/[0.08] hover:text-white hover:border-white/[0.2]'
                }`}
              >
                <span>{opt.label}</span>
                <span className={`text-[10px] font-mono-tech ${isActive ? 'text-slate-700' : 'text-slate-400'}`}>
                  {opt.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Multi-Column Technical Grid Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {displayedCategories.map((cat, idx) => (
            <div
              key={cat.category}
              className="editorial-panel rounded-xl p-6 space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Category Header */}
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <span className="font-mono-tech text-xs text-[--accent-cyan] uppercase tracking-wider font-semibold">
                    0{idx + 1} // {cat.category}
                  </span>
                  <span className="font-mono-tech text-[10px] text-slate-400">
                    {cat.skills.length} MODULES
                  </span>
                </div>

                <p className="text-xs text-slate-400 font-light leading-relaxed min-h-[32px]">
                  {cat.description}
                </p>
              </div>

              {/* Skills Badge Wrap */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    onMouseEnter={() => soundManager.playHover()}
                    className="font-mono-tech text-xs px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.08] text-slate-200 hover:border-[--accent-cyan]/50 hover:text-white transition-colors cursor-default"
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
