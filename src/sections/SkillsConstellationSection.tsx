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

  const handleCategorySelect = (category: string | null) => {
    soundManager.playClick();
    setSelectedCategory(category);
  };

  const handleHoverSkill = (skillName: string | null, category: string | null) => {
    if (skillName && skillName !== hoveredSkill.name) {
      soundManager.playHover();
    }
    setHoveredSkill({ name: skillName, category });
  };

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <SectionHeading
          systemCode="SYS.MOD.02 // SKILLS_CONSTELLATION"
          title="TECHNICAL CONSTELLATION & SKILLS"
          subtitle="Explore the multi-dimensional ecosystem of programming languages, artificial intelligence frameworks, and full-stack engineering tools."
          badge="INTERACTIVE_3D_GRAPH"
        />

        {/* View Mode Toggle (3D Graph vs Matrix Grid) */}
        <div className="flex items-center gap-2 font-mono-tech text-xs bg-slate-900/80 p-1.5 rounded-lg border border-cyan-500/20 self-start md:self-end">
          <button
            onClick={() => {
              soundManager.playClick();
              setViewMode('3d');
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-all cursor-pointer ${
              viewMode === '3d'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_10px_rgba(0,240,255,0.3)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Network className="w-3.5 h-3.5" />
            <span>3D Constellation</span>
          </button>
          <button
            onClick={() => {
              soundManager.playClick();
              setViewMode('grid');
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-all cursor-pointer ${
              viewMode === 'grid'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_10px_rgba(0,240,255,0.3)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Matrix Grid</span>
          </button>
        </div>
      </div>

      {/* Category Filter Badges */}
      <div className="flex flex-wrap items-center gap-2 mb-8 font-mono-tech text-xs">
        <button
          onClick={() => handleCategorySelect(null)}
          className={`px-3 py-1.5 rounded border transition-all cursor-pointer ${
            selectedCategory === null
              ? 'border-cyan-400 bg-cyan-500/20 text-cyan-200 shadow-[0_0_12px_rgba(0,240,255,0.3)] font-bold'
              : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-600 hover:text-slate-200'
          }`}
        >
          ALL ECOSYSTEMS
        </button>
        {SKILL_CATEGORIES.map((cat) => (
          <button
            key={cat.category}
            onClick={() => handleCategorySelect(cat.category === selectedCategory ? null : cat.category)}
            className={`px-3 py-1.5 rounded border transition-all cursor-pointer ${
              selectedCategory === cat.category
                ? 'border-cyan-400 bg-cyan-500/20 text-cyan-200 shadow-[0_0_12px_rgba(0,240,255,0.3)] font-bold'
                : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-600 hover:text-slate-200'
            }`}
          >
            {cat.category.toUpperCase()}
          </button>
        ))}
      </div>

      {viewMode === '3d' ? (
        /* 3D Constellation Viewport */
        <div className="relative hud-panel rounded-2xl overflow-hidden border border-cyan-500/30 p-2 sm:p-4 min-h-[520px] flex flex-col justify-between">
          <span className="corner-bracket corner-tl !w-3 !h-3" />
          <span className="corner-bracket corner-tr !w-3 !h-3" />
          <span className="corner-bracket corner-bl !w-3 !h-3" />
          <span className="corner-bracket corner-br !w-3 !h-3" />

          {/* Three.js Canvas Container */}
          <div className="w-full h-[460px] sm:h-[520px]">
            <SkillsCanvas
              selectedCategory={selectedCategory}
              onHoverSkill={handleHoverSkill}
            />
          </div>

          {/* Floating Live Telemetry HUD Bar */}
          <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 rounded-lg border border-cyan-500/30 bg-[#070b13]/90 backdrop-blur-md pointer-events-none">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
              <div>
                <span className="text-[10px] font-mono-tech text-cyan-500 block uppercase">
                  NODE TELEMETRY INSPECTOR
                </span>
                <span className="text-sm font-display font-bold text-white uppercase">
                  {hoveredSkill.name || (selectedCategory ? `FILTER: ${selectedCategory}` : 'HOVER ANY 3D NODE TO INSPECT')}
                </span>
              </div>
            </div>

            <div className="text-xs font-mono-tech text-slate-400">
              {hoveredSkill.category ? (
                <span className="text-cyan-300 font-bold uppercase">
                  [CATEGORY: {hoveredSkill.category}]
                </span>
              ) : (
                <span>DRAG / MOVE CURSOR TO ROTATE CONSTELLATION</span>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* Accessible Matrix Grid View */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat) => {
            const isMatch = !selectedCategory || selectedCategory === cat.category;
            if (!isMatch) return null;

            return (
              <div
                key={cat.category}
                className="hud-panel rounded-xl p-6 space-y-4 border border-cyan-500/20 hover:border-cyan-400/50 transition-all group"
              >
                <span className="corner-bracket corner-tl !w-2 !h-2" />
                <span className="corner-bracket corner-br !w-2 !h-2" />

                <div className="flex items-center justify-between border-b border-cyan-500/20 pb-3">
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-cyan-300 transition-colors uppercase">
                    {cat.category}
                  </h3>
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.color }} />
                </div>

                <p className="text-xs text-slate-400 font-sans-clean leading-relaxed">
                  {cat.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill) => (
                    <TechBadge key={skill} label={skill} variant="cyan" />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
