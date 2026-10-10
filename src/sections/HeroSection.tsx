import { lazy, Suspense } from 'react';
import type React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const SubtleHeroCanvas = lazy(() =>
  import('../three/SubtleHeroCanvas').then((mod) => ({ default: mod.SubtleHeroCanvas }))
);

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-[75vh] lg:min-h-[82vh] flex flex-col justify-center pt-2 sm:pt-6 pb-12 sm:pb-16 select-none"
      aria-label="Introduction"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Direct Editorial Hierarchy (7 cols) */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-7">
          {/* Eyebrow Label (14-16px) */}
          <div className="font-mono text-xs sm:text-sm text-blue-400 font-semibold tracking-widest uppercase">
            COMPUTER SCIENCE ENGINEERING
          </div>

          {/* Large Heading & Statement */}
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-5xl sm:text-7xl lg:text-[88px] font-extrabold text-white tracking-tight leading-[1.04]">
              Hi, I'm Nirvan.
            </h1>
            <p className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-200 tracking-tight leading-snug">
              I build full-stack applications <br className="hidden sm:inline" />
              and AI-powered systems.
            </p>
          </div>

          {/* Factual Supporting Copy (18px) */}
          <p className="text-base sm:text-lg lg:text-[18px] text-slate-400 font-normal leading-relaxed max-w-xl">
            Computer Science Engineering student at{' '}
            <span className="text-white font-medium">
              Gokaraju Rangaraju Institute of Engineering and Technology
            </span>
            , focused on software engineering, AI/ML and computer vision.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <button
              onClick={scrollToWork}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm tracking-wide transition-all shadow-sm cursor-pointer group"
            >
              <span>VIEW MY WORK</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-7 py-3.5 rounded-lg border border-white/[0.18] hover:border-white/[0.35] bg-white/[0.02] hover:bg-white/[0.06] text-white font-semibold text-sm tracking-wide transition-all cursor-pointer"
            >
              <span>RESUME</span>
              <ArrowUpRight className="w-4 h-4 text-blue-400" />
            </button>
          </div>

          {/* Factual Academic Metadata (12-14px) */}
          <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-400 font-mono">
            <span>Hyderabad, India</span>
            <span className="text-slate-600">•</span>
            <span>B.Tech CSE · 2024–2028</span>
            <span className="text-slate-600">•</span>
            <span className="text-white font-medium">CGPA: {PERSONAL_INFO.education.cgpa}</span>
          </div>
        </div>

        {/* Right Column: Engineering System Visual (5 cols) */}
        <div className="lg:col-span-5 flex items-center justify-center relative min-h-[320px] sm:min-h-[400px]">
          <div className="w-full h-full max-w-[440px] aspect-square relative flex items-center justify-center">
            {/* Subtle glow */}
            <div className="absolute inset-0 bg-radial from-blue-600/10 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
            <Suspense fallback={<div className="w-full h-full min-h-[320px]" />}>
              <SubtleHeroCanvas />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};
