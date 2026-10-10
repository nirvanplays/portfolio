import { lazy, Suspense } from 'react';
import type React from 'react';
import { ArrowRight, FileText, ArrowUpRight } from 'lucide-react';
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
    <section id="hero" className="pt-8 sm:pt-16 pb-12 sm:pb-20 select-none" aria-label="Introduction">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Editorial Headline & Actions (7 cols) */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8">
          {/* Small Top Label */}
          <div className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-blue-400 tracking-wider uppercase font-medium">
            <span>COMPUTER SCIENCE ENGINEERING</span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-300">FULL STACK · AI / ML</span>
          </div>

          {/* Large Headline & Focus */}
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
              Hi, I'm Nirvan.
            </h1>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-200 tracking-tight leading-snug">
              I build full-stack applications <br className="hidden sm:inline" />
              and AI-powered systems.
            </p>
          </div>

          {/* Supporting Paragraph */}
          <p className="text-base sm:text-lg text-slate-400 font-light leading-relaxed max-w-xl">
            Computer Science Engineering student at{' '}
            <span className="text-slate-200 font-normal">
              Gokaraju Rangaraju Institute of Engineering and Technology
            </span>
            , interested in software engineering, AI/ML and computer vision.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={scrollToWork}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm tracking-wide transition-all shadow-sm cursor-pointer group"
            >
              <span>VIEW MY WORK</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/[0.16] hover:border-white/[0.3] bg-white/[0.03] hover:bg-white/[0.08] text-white font-medium text-sm tracking-wide transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4 text-blue-400" />
              <span>DOWNLOAD RESUME</span>
            </button>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-3 text-slate-400 hover:text-white font-medium text-sm transition-colors"
            >
              <span>LINKEDIN</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Small Supporting Information */}
          <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400">
            <span>Hyderabad, India</span>
            <span className="text-slate-600">•</span>
            <span>2024–2028</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300">CGPA: {PERSONAL_INFO.education.cgpa}</span>
          </div>
        </div>

        {/* Right Column: Subtle Abstract Engineering Visualization (5 cols) */}
        <div className="lg:col-span-5 flex items-center justify-center relative min-h-[320px] sm:min-h-[400px]">
          <div className="w-full h-full max-w-[420px] aspect-square relative flex items-center justify-center">
            <Suspense fallback={<div className="w-full h-full min-h-[320px]" />}>
              <SubtleHeroCanvas />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};
