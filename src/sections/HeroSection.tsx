import type React from 'react';
import { ArrowDown, FileText, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { MinimalHeroGraphic } from '../three/MinimalHeroGraphic';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-center pt-28 pb-16 px-6 sm:px-8 max-w-6xl mx-auto w-full"
      aria-label="Introduction"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        {/* Left Column: Clear, Professional Copy */}
        <div className="md:col-span-8 lg:col-span-8 space-y-6">
          {/* Subtle status tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Available for Internships & Software Engineering Roles</span>
          </div>

          {/* Headings */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {PERSONAL_INFO.heroHeadline}
            </h1>
            <p className="text-2xl sm:text-3xl font-semibold text-slate-700 tracking-tight">
              {PERSONAL_INFO.heroSubheadline}
            </p>
          </div>

          {/* Supporting Bio */}
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
            {PERSONAL_INFO.heroBio}
          </p>

          {/* Action Buttons & Links */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm shadow-sm hover:shadow transition-all cursor-pointer"
            >
              <span>View My Work</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 font-medium text-sm shadow-2xs transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4 text-slate-500" />
              <span>Download Resume</span>
            </button>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-3 text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Right Column: Subtle Minimal Three.js Graphic (Desktop Only) */}
        <div className="hidden md:flex md:col-span-4 lg:col-span-4 items-center justify-center">
          <div className="relative p-2 rounded-2xl bg-slate-50/60 border border-slate-200/60 shadow-2xs">
            <MinimalHeroGraphic />
          </div>
        </div>
      </div>
    </section>
  );
};
