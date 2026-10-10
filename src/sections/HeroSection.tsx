import type React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { AbstractSystemGraphic } from '../three/AbstractSystemGraphic';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="space-y-12 select-none" aria-label="Hero Overview">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-center">
        {/* Left / Main Text Column (7 cols) */}
        <div className="xl:col-span-7 space-y-6">
          {/* Subtle Status Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs font-mono text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>AVAILABLE FOR INTERNSHIPS & ROLES</span>
          </div>

          {/* Headline */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
              Hi, I'm Nirvan.
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-300 tracking-tight leading-snug">
              I build full-stack applications and AI-powered systems.
            </p>
          </div>

          {/* Supporting Copy */}
          <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed max-w-xl">
            Computer Science Engineering student at{' '}
            <span className="text-slate-200 font-normal">
              Gokaraju Rangaraju Institute of Engineering and Technology
            </span>{' '}
            (CGPA <span className="font-mono text-white font-semibold">8.01</span>), interested in full-stack development, AI/ML and computer vision.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={scrollToWork}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-[#0c0e12] hover:bg-slate-200 font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer group shadow-sm"
            >
              <span>VIEW MY WORK</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/[0.15] bg-white/[0.02] hover:bg-white/[0.06] text-slate-200 hover:text-white font-mono text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4 text-blue-400" />
              <span>DOWNLOAD RESUME</span>
            </button>
          </div>

          {/* Status Meta Area */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/[0.08] text-xs font-mono">
            <div className="space-y-1">
              <span className="text-slate-400 block text-[10px] uppercase tracking-wider">
                CURRENTLY BUILDING
              </span>
              <span className="text-slate-200 font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                {PERSONAL_INFO.statusValue}
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-slate-400 block text-[10px] uppercase tracking-wider">
                LOCATION
              </span>
              <span className="text-slate-200 font-medium">
                {PERSONAL_INFO.location}
              </span>
            </div>
          </div>
        </div>

        {/* Right / Visual Column: Abstract System Graphic (5 cols, Desktop only) */}
        <div className="hidden xl:flex xl:col-span-5 items-center justify-center">
          <div className="w-full aspect-square max-w-[320px] rounded-2xl border border-white/[0.08] bg-[#12151c]/60 p-4 relative flex items-center justify-center">
            {/* Minimal corner reticles */}
            <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/[0.2]" />
            <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/[0.2]" />
            <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/[0.2]" />
            <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/[0.2]" />

            <div className="absolute top-3 left-4 font-mono text-[9px] text-slate-400 uppercase tracking-widest">
              SYS // ABSTRACT_GEOMETRY
            </div>

            <div className="w-full h-full pt-4">
              <AbstractSystemGraphic />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
