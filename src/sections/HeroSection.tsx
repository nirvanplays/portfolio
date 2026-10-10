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
      className="min-h-[78vh] lg:min-h-[85vh] flex flex-col justify-center pt-4 sm:pt-8 pb-12 select-none relative"
      aria-label="Introduction"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Identity, Direct Message & Purpose (55% / 7 cols) */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-7">
          {/* Eyebrow Label */}
          <div className="font-mono text-xs sm:text-sm text-blue-400 font-semibold tracking-widest uppercase">
            COMPUTER SCIENCE ENGINEERING
          </div>

          {/* Primary Headline & Direct Statement */}
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-5xl sm:text-7xl lg:text-[84px] font-extrabold text-white tracking-tight leading-[1.02]">
              Hi, I'm Nirvan.
            </h1>
            <p className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-200 tracking-tight leading-snug">
              I build software across the full stack — <br className="hidden sm:inline" />
              from web applications to AI and computer vision.
            </p>
          </div>

          {/* Direct Supporting Copy */}
          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed max-w-xl">
            Computer Science Engineering student at{' '}
            <span className="text-white font-medium">
              Gokaraju Rangaraju Institute of Engineering and Technology
            </span>
            , focused on building practical software systems and exploring AI/ML and computer vision.
          </p>

          {/* Action CTAs */}
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

          {/* Factual Academic Metadata */}
          <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-400 font-mono">
            <span>Hyderabad, India</span>
            <span className="text-slate-600">•</span>
            <span>B.Tech CSE · 2024–2028</span>
            <span className="text-slate-600">•</span>
            <span className="text-white font-medium">CGPA: {PERSONAL_INFO.education.cgpa}</span>
          </div>

          {/* Current Focus Indicator (Simple inline structure) */}
          <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono pt-0.5">
            <span className="text-slate-500 uppercase tracking-wider font-semibold">CURRENT FOCUS:</span>
            <span className="text-slate-300 font-medium">FULL STACK DEVELOPMENT</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300 font-medium">AI / MACHINE LEARNING</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300 font-medium">COMPUTER VISION</span>
          </div>

          {/* Visual Anchor: Thin Blue Vertical Accent Line (100–140px) */}
          <div className="hidden lg:flex items-center gap-3 pt-6 text-slate-400">
            <div className="w-[1.5px] h-28 bg-gradient-to-b from-blue-500 via-blue-500/60 to-transparent relative overflow-hidden">
              <div className="w-full h-8 bg-blue-300/80 animate-pulse" />
            </div>
            <span className="font-mono text-[11px] tracking-widest uppercase text-slate-400">
              SCROLL TO EXPLORE
            </span>
          </div>
        </div>

        {/* Right Column: 3D Engineering System Visual (45% / 5 cols, 350-450px container) */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          <div className="w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] relative flex items-center justify-center">
            {/* Extremely subtle atmosphere glow */}
            <div className="absolute inset-0 bg-radial from-blue-600/10 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
            <Suspense fallback={<div className="w-full h-full min-h-[360px]" />}>
              <SubtleHeroCanvas />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};
