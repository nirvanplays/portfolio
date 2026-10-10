import type React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

interface SkillsSectionProps {
  highlightedSkills?: string[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ highlightedSkills = [] }) => {
  const languages = SKILL_CATEGORIES.find((c) => c.category === 'LANGUAGES')?.skills || [];
  const frontend = SKILL_CATEGORIES.find((c) => c.category === 'FRONTEND')?.skills || [];
  const backend = SKILL_CATEGORIES.find((c) => c.category === 'BACKEND')?.skills || [];
  const databases = SKILL_CATEGORIES.find((c) => c.category === 'DATABASES')?.skills || [];
  const aiMl = SKILL_CATEGORIES.find((c) => c.category === 'AI / ML')?.skills || [];
  const tools = SKILL_CATEGORIES.find((c) => c.category === 'TOOLS')?.skills || [];
  const core = SKILL_CATEGORIES.find((c) => c.category === 'CORE')?.skills || [];

  const isHighlighted = (skill: string): boolean => {
    if (!highlightedSkills || highlightedSkills.length === 0) return false;
    const target = skill.toLowerCase().trim();
    return highlightedSkills.some((hs) => {
      const h = hs.toLowerCase().trim();
      return (
        target === h ||
        target.includes(h) ||
        h.includes(target) ||
        (h.startsWith('react') && target.startsWith('react')) ||
        (h.startsWith('node') && target.startsWith('node')) ||
        (h.startsWith('express') && target.startsWith('express')) ||
        (h.startsWith('firebase') && target.startsWith('firebase')) ||
        (h === 'html' && target.startsWith('html')) ||
        (h === 'css' && target.startsWith('css'))
      );
    });
  };

  const renderBadge = (skill: string) => {
    const active = isHighlighted(skill);
    return (
      <span
        key={skill}
        className={`inline-flex items-center text-xs sm:text-sm px-3.5 py-1.5 rounded-lg border transition-all duration-200 ${
          active
            ? 'bg-blue-600/25 border-blue-500 text-white font-semibold shadow-[0_0_16px_rgba(59,130,246,0.35)] scale-[1.04]'
            : 'bg-white/[0.03] border-white/[0.08] text-slate-300 hover:text-white hover:border-white/[0.2]'
        }`}
      >
        {active && <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2 animate-pulse" />}
        {skill}
      </span>
    );
  };

  return (
    <section id="skills" className="py-24 sm:py-36 border-t border-white/[0.08] space-y-16" aria-label="Technical Stack">
      {/* Section Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="font-mono text-xs sm:text-sm text-blue-400 font-semibold uppercase tracking-widest block">
          TECHNICAL STACK
        </span>
        <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white tracking-tight leading-[1.08]">
          Technologies & Competencies.
        </h2>
        <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
          Languages, frameworks, databases, and computer science fundamentals I use to engineer full-stack systems and applied AI models. Hover over projects in Selected Work to see corresponding skills highlighted.
        </p>
      </div>

      <div className="space-y-8">
        {/* Top Row: 2-Column Focus (Languages on Left, Frontend & Backend on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Languages (5 cols) */}
          <div className="lg:col-span-5 p-7 sm:p-8 rounded-xl bg-[#12151B]/80 border border-white/[0.08] flex flex-col justify-between hover:border-white/[0.18] transition-colors">
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <h3 className="font-mono text-xs font-bold tracking-wider text-slate-300 uppercase">
                  LANGUAGES
                </h3>
                <span className="text-[11px] font-mono text-slate-500 uppercase">Primary Tools</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400">
                Core programming languages for algorithmic problem-solving, backend APIs, and systems engineering.
              </p>
              <div className="flex flex-wrap gap-2.5 pt-1">
                {languages.map(renderBadge)}
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-white/[0.06] text-xs font-mono text-slate-500">
              Proficient in OOP, Data Structures & Systems Programming
            </div>
          </div>

          {/* Right Column: Frontend & Backend (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Frontend Block */}
            <div className="p-7 rounded-xl bg-[#12151B]/80 border border-white/[0.08] space-y-4 hover:border-white/[0.18] transition-colors">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <h3 className="font-mono text-xs font-bold tracking-wider text-slate-300 uppercase">
                  FRONTEND
                </h3>
                <span className="text-[11px] font-mono text-slate-500 uppercase">UI & Client</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400">
                Building responsive, accessible web interfaces and state-driven single-page applications.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {frontend.map(renderBadge)}
              </div>
            </div>

            {/* Backend Block */}
            <div className="p-7 rounded-xl bg-[#12151B]/80 border border-white/[0.08] space-y-4 hover:border-white/[0.18] transition-colors">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <h3 className="font-mono text-xs font-bold tracking-wider text-slate-300 uppercase">
                  BACKEND
                </h3>
                <span className="text-[11px] font-mono text-slate-500 uppercase">APIs & Services</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400">
                Developing secure REST APIs, role-based auth, and performant server-side services.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {backend.map(renderBadge)}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: 4 Horizontal Clusters (Databases, AI/ML, Tools, Core) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Databases */}
          <div className="p-6 rounded-xl bg-[#12151B]/80 border border-white/[0.08] space-y-3.5 hover:border-white/[0.18] transition-colors">
            <h3 className="font-mono text-xs font-bold tracking-wider text-slate-300 uppercase border-b border-white/[0.08] pb-2.5">
              DATABASES
            </h3>
            <div className="flex flex-wrap gap-2 pt-1">
              {databases.map(renderBadge)}
            </div>
          </div>

          {/* AI / ML */}
          <div className="p-6 rounded-xl bg-[#12151B]/80 border border-white/[0.08] space-y-3.5 hover:border-white/[0.18] transition-colors">
            <h3 className="font-mono text-xs font-bold tracking-wider text-slate-300 uppercase border-b border-white/[0.08] pb-2.5">
              AI / ML
            </h3>
            <div className="flex flex-wrap gap-2 pt-1">
              {aiMl.map(renderBadge)}
            </div>
          </div>

          {/* Tools */}
          <div className="p-6 rounded-xl bg-[#12151B]/80 border border-white/[0.08] space-y-3.5 hover:border-white/[0.18] transition-colors">
            <h3 className="font-mono text-xs font-bold tracking-wider text-slate-300 uppercase border-b border-white/[0.08] pb-2.5">
              TOOLS
            </h3>
            <div className="flex flex-wrap gap-2 pt-1">
              {tools.map(renderBadge)}
            </div>
          </div>

          {/* Core Fundamentals */}
          <div className="p-6 rounded-xl bg-[#12151B]/80 border border-white/[0.08] space-y-3.5 hover:border-white/[0.18] transition-colors">
            <h3 className="font-mono text-xs font-bold tracking-wider text-slate-300 uppercase border-b border-white/[0.08] pb-2.5">
              CORE FUNDAMENTALS
            </h3>
            <div className="flex flex-wrap gap-2 pt-1">
              {core.map(renderBadge)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
