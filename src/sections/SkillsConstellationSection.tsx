import { useState } from 'react';
import type React from 'react';
import { Network, LayoutGrid } from 'lucide-react';
import { SectionHeading } from '../components/UI/SectionHeading';
import { SkillsCanvas } from '../three/SkillsCanvas';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { TechBadge } from '../components/UI/TechBadge';
import { soundManager } from '../audio/soundEffects';

export const SkillsConstellationSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<{ name: string | null; category: string | null }>({
    name: null,
    category: null,
  });
  const [viewMode, setViewMode] = useState<'3d' | 'grid'>('3d');

  const handleCategorySelect = (cat: string | null) => {
    soundManager.playClick();
    setSelectedCategory(cat === selectedCategory ? null : cat);
  };

  const handleHoverSkill = (skillName: string | null, category: string | null) => {
    if (skillName && skillName !== hoveredSkill.name) soundManager.playHover();
    setHoveredSkill({ name: skillName, category });
  };

  return (
    <section id="skills" className="section-container section-reveal" aria-label="Skills">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <SectionHeading
            systemCode="SYS.MOD.02 // SKILLS"
            title="Technical Constellation"
            subtitle="Hover or select a domain to explore the technology ecosystem."
            className="md:flex-1"
          />

          {/* View mode toggle */}
          <div className="flex items-center gap-1.5 font-mono-tech text-[11px] bg-white/[0.03] p-1 rounded-lg border border-white/[0.07] self-start md:self-end flex-shrink-0">
            <button
              onClick={() => { soundManager.playClick(); setViewMode('3d'); }}
              data-cursor="hover"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                viewMode === '3d'
                  ? 'bg-[--accent-cyan]/12 text-[--accent-cyan] border border-[--accent-cyan]/30'
                  : 'text-[--text-muted] hover:text-white'
              }`}
            >
              <Network className="w-3.5 h-3.5" />
              3D Graph
            </button>
            <button
              onClick={() => { soundManager.playClick(); setViewMode('grid'); }}
              data-cursor="hover"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                viewMode === 'grid'
                  ? 'bg-[--accent-cyan]/12 text-[--accent-cyan] border border-[--accent-cyan]/30'
                  : 'text-[--text-muted] hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              Grid
            </button>
          </div>
        </div>

        {/* Category filter pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => handleCategorySelect(null)}
            data-cursor="hover"
            className={`skill-cat-btn font-mono-tech text-[10px] uppercase tracking-[0.12em] px-3 py-1.5 rounded-full border transition-all ${
              selectedCategory === null
                ? 'border-[--accent-cyan]/50 bg-[--accent-cyan]/10 text-[--accent-cyan] font-bold'
                : 'border-white/[0.1] bg-white/[0.03] text-[--text-muted] hover:text-white hover:border-white/[0.2]'
            }`}
          >
            All
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.category}
              onClick={() => handleCategorySelect(cat.category)}
              data-cursor="hover"
              className={`skill-cat-btn font-mono-tech text-[10px] uppercase tracking-[0.12em] px-3 py-1.5 rounded-full border transition-all ${
                selectedCategory === cat.category
                  ? 'border-[--accent-cyan]/50 bg-[--accent-cyan]/10 text-[--accent-cyan] font-bold'
                  : 'border-white/[0.1] bg-white/[0.03] text-[--text-muted] hover:text-white hover:border-white/[0.2]'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {viewMode === '3d' ? (
          /* 3D Constellation */
          <div className="relative hud-panel rounded-2xl overflow-hidden border border-white/[0.07]">
            <span className="corner-bracket corner-tl !w-3 !h-3" />
            <span className="corner-bracket corner-tr !w-3 !h-3" />
            <span className="corner-bracket corner-bl !w-3 !h-3" />
            <span className="corner-bracket corner-br !w-3 !h-3" />

            {/* Canvas */}
            <div className="w-full h-[480px] sm:h-[560px]">
              <SkillsCanvas
                selectedCategory={selectedCategory}
                onHoverSkill={handleHoverSkill}
              />
            </div>

            {/* Live HUD readout at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between bg-gradient-to-t from-[--bg-void]/90 via-[--bg-void]/50 to-transparent">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[--accent-cyan] animate-ping flex-shrink-0" />
                <div className="font-mono-tech text-[11px]">
                  <span className="text-[--accent-cyan]/60 block text-[9px] uppercase tracking-widest">
                    NODE INSPECTOR
                  </span>
                  <span className="text-white font-bold">
                    {hoveredSkill.name || (selectedCategory ? `Domain: ${selectedCategory}` : 'Move cursor over any node')}
                  </span>
                </div>
              </div>
              {hoveredSkill.category && (
                <span className="font-mono-tech text-[10px] text-[--accent-cyan]/70 uppercase tracking-wider">
                  [{hoveredSkill.category}]
                </span>
              )}
            </div>
          </div>
        ) : (
          /* Matrix Grid View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SKILL_CATEGORIES.filter(cat =>
              !selectedCategory || cat.category === selectedCategory
            ).map((cat) => (
              <div
                key={cat.category}
                className="glass-card rounded-xl p-5 space-y-4 hover:border-[--accent-cyan]/20 transition-all duration-300 group"
                data-cursor="hover"
              >
                <span className="corner-bracket corner-tl !w-2 !h-2" />
                <span className="corner-bracket corner-br !w-2 !h-2" />

                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <h3 className="font-display font-bold text-white text-sm uppercase group-hover:text-[--accent-cyan] transition-colors">
                    {cat.category}
                  </h3>
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: cat.color }}
                  />
                </div>

                <p className="text-[11px] text-[--text-muted] font-sans-clean leading-relaxed">
                  {cat.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <TechBadge key={skill} label={skill} variant="cyan" size="sm" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
