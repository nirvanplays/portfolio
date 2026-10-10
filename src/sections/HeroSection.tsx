import type React from 'react';
import { ArrowDown, FileText, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { InteractiveSystemGraphic } from '../components/InteractiveSystemGraphic';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="space-y-10 select-none" aria-label="Engineering Profile Introduction">
      {/* ── Main Hero Editorial Grid ── */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
        {/* Left Column: Core Statement & Identity (7 cols) */}
        <div className="xl:col-span-7 space-y-6">
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>OPEN FOR SWE & AI/ML INTERNSHIPS</span>
          </div>

          {/* Headline & Focus Statement */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
              {PERSONAL_INFO.headline}
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-slate-300 tracking-tight leading-snug">
              {PERSONAL_INFO.subheadline}
            </p>
          </div>

          {/* Factual Context */}
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-xl">
            Computer Science Engineering undergraduate at{' '}
            <span className="text-white font-medium">
              Gokaraju Rangaraju Institute of Engineering and Technology
            </span>{' '}
            maintaining an academic standing of{' '}
            <span className="font-mono text-emerald-400 font-bold">
              CGPA {PERSONAL_INFO.education.cgpa}
            </span>
            . Experienced in modular web architectures (MERN), real-time computer vision kinematics, and deep learning pipelines.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={scrollToWork}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm group"
            >
              <span>EXPLORE WORK</span>
              <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
            </button>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/[0.18] bg-white/[0.03] hover:bg-white/[0.08] text-white font-mono text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>VIEW RESUME</span>
            </button>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-slate-400 hover:text-white font-mono text-xs transition-colors"
            >
              <span>LINKEDIN</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Right Column: Executive Technical Summary Card (5 cols) */}
        <div className="xl:col-span-5 editorial-card rounded-2xl p-6 space-y-5 relative overflow-hidden">
          {/* Top Reticle and Header */}
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
            <div className="font-mono text-xs text-blue-400 font-semibold tracking-wider uppercase">
              // EXECUTIVE SUMMARY
            </div>
            <span className="font-mono text-[10px] text-emerald-400 font-semibold">
              CGPA: {PERSONAL_INFO.education.cgpa}
            </span>
          </div>

          {/* Fast Facts for Hiring Managers */}
          <div className="space-y-3.5 text-xs font-mono">
            <div>
              <span className="text-slate-400 text-[10px] uppercase block mb-0.5">
                DEGREE & INSTITUTION
              </span>
              <div className="font-semibold text-white">
                B.Tech in Computer Science & Engineering
              </div>
              <div className="text-slate-400 text-[11px]">
                GRIET Hyderabad · Class of 2028
              </div>
            </div>

            <div>
              <span className="text-slate-400 text-[10px] uppercase block mb-0.5">
                PRIMARY CAPABILITIES
              </span>
              <div className="text-slate-200">
                Full-Stack REST APIs · Computer Vision Kinematics · CNN Classification
              </div>
            </div>

            <div>
              <span className="text-slate-400 text-[10px] uppercase block mb-0.5">
                CORE TECHNICAL REPERTOIRE
              </span>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['React.js', 'Node.js', 'Express', 'MongoDB', 'Python', 'OpenCV', 'MediaPipe', 'PyTorch', 'SQL'].map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-[10px] text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Embedded Subtle System Graphic */}
          <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between">
            <span className="text-[10px] font-mono text-slate-400">
              LOCATION: HYDERABAD, IN
            </span>
            <div className="w-12 h-12 flex items-center justify-center opacity-80">
              <InteractiveSystemGraphic />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
