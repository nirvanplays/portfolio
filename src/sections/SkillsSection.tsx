import { useState } from 'react';
import type React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { soundManager } from '../audio/soundEffects';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(SKILL_CATEGORIES[0].category);

  const currentCategoryData = SKILL_CATEGORIES.find((cat) => cat.category === activeCategory) || SKILL_CATEGORIES[0];

  return (
    <section id="skills" className="section-container" aria-label="Technical Skills">
      <div className="border-t border-white/[0.1] pt-16 sm:pt-24 space-y-16">
        {/* Section Header */}
        <div className="flex items-center gap-3 font-mono-tech text-xs text-slate-400 uppercase tracking-widest">
          <span className="text-[--accent-cyan]">02</span>
          <span className="w-8 h-px bg-white/[0.2]" />
          <span>TECHNICAL ECOSYSTEM</span>
        </div>

        <div className="space-y-4 max-w-3xl">
          <h2 className="text-4xl sm:text-6xl font-sans-clean font-bold tracking-tight text-white uppercase leading-none">
            ENGINEERING STACK.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed">
            Proficiencies across full-stack software development, machine learning frameworks, data persistence engines, and computer science fundamentals.
          </p>
        </div>

        {/* Interactive Split View Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-8 border-t border-white/[0.08]">
          {/* Left Column: Category Selector */}
          <div className="lg:col-span-5 space-y-2">
            <span className="font-mono-tech text-[11px] text-slate-400 uppercase tracking-widest block mb-4">
              // DOMAIN SELECTION
            </span>

            <div className="space-y-1">
              {SKILL_CATEGORIES.map((cat) => {
                const isActive = cat.category === activeCategory;
                return (
                  <button
                    key={cat.category}
                    onClick={() => {
                      soundManager.playClick();
                      setActiveCategory(cat.category);
                    }}
                    onMouseEnter={() => soundManager.playHover()}
                    className={`w-full text-left py-3.5 px-4 rounded-md font-mono-tech text-sm sm:text-base tracking-wider uppercase transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                      isActive
                        ? 'bg-white/[0.08] text-white border-l-2 border-[--accent-cyan] pl-5'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.02]'
                    }`}
                  >
                    <span>{cat.category}</span>
                    <span className={`text-xs font-mono-tech transition-opacity ${isActive ? 'text-[--accent-cyan] opacity-100' : 'opacity-0 group-hover:opacity-40'}`}>
                      {cat.skills.length} MODULES
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Central System Line with Branching Nodes */}
          <div className="lg:col-span-7 editorial-panel rounded-xl p-8 sm:p-10 space-y-8 relative overflow-hidden">
            <div className="space-y-2 border-b border-white/[0.08] pb-6">
              <div className="flex items-center justify-between">
                <span className="font-mono-tech text-xs text-[--accent-cyan] tracking-widest uppercase">
                  ACTIVE DOMAIN // {currentCategoryData.category}
                </span>
                <span className="font-mono-tech text-xs text-slate-400">
                  {currentCategoryData.skills.length} VERIFIED TECHNOLOGIES
                </span>
              </div>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                {currentCategoryData.description}
              </p>
            </div>

            {/* Central Vertical System Line & Branching Nodes */}
            <div className="relative pl-6 sm:pl-8 space-y-4">
              {/* Vertical Conductor Line */}
              <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-[--accent-cyan] via-white/[0.15] to-transparent" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentCategoryData.skills.map((skill, index) => (
                  <div
                    key={skill}
                    onMouseEnter={() => soundManager.playHover()}
                    className="relative group p-4 rounded-lg border border-white/[0.06] bg-white/[0.02] hover:border-[--accent-cyan]/40 hover:bg-white/[0.05] transition-all duration-200"
                  >
                    {/* Horizontal Branching Pip */}
                    <div className="absolute -left-6 sm:-left-8 top-1/2 -translate-y-1/2 w-4 h-px bg-white/[0.2] group-hover:bg-[--accent-cyan] transition-colors" />
                    <div className="absolute -left-[27px] sm:-left-[35px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-[--accent-cyan] transition-colors" />

                    <div className="flex items-center justify-between">
                      <span className="font-sans-clean font-semibold text-white text-base group-hover:text-[--accent-cyan] transition-colors">
                        {skill}
                      </span>
                      <span className="font-mono-tech text-[10px] text-slate-400">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
