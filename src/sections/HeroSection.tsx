import type React from 'react';
import { ArrowDownRight, FileText, ArrowDown } from 'lucide-react';
import { HeroCoreCanvas } from '../three/HeroCoreCanvas';
import { soundManager } from '../audio/soundEffects';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const scrollToWork = () => {
    soundManager.playClick();
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    soundManager.playClick();
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 px-6 sm:px-8 max-w-7xl mx-auto w-full select-none"
      aria-label="Introduction"
    >
      {/* ── Main Hero Editorial Grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center my-auto">
        {/* Left Column: Typography & Engineering Identity */}
        <div className="lg:col-span-7 space-y-7">
          {/* Status & Discipline Tag */}
          <div className="flex items-center gap-2.5 font-mono-tech text-xs tracking-wider text-slate-400">
            <span className="w-2 h-2 rounded-full bg-[--accent-cyan]" />
            <span className="font-semibold text-slate-300">B.TECH COMPUTER SCIENCE & ENGINEERING</span>
            <span className="text-slate-600">//</span>
            <span>FULL STACK & APPLIED AI/ML</span>
          </div>

          {/* Primary Name Headline */}
          <div className="space-y-1">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans-clean font-bold tracking-tight text-white leading-[1.05]">
              Koppela Nirvan Reddy
            </h1>
          </div>

          {/* Statement */}
          <p className="text-xl sm:text-2xl text-slate-200 font-light leading-snug max-w-xl">
            Engineering robust full-stack software and applied machine learning systems.
          </p>

          {/* Factual Context */}
          <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed max-w-lg">
            Undergraduate at{' '}
            <span className="text-slate-200 font-medium">
              Gokaraju Rangaraju Institute of Engineering and Technology
            </span>{' '}
            (CGPA <span className="font-mono-tech text-white font-semibold">8.01</span>).
            Focused on modular web architectures, real-time computer vision kinematics with OpenCV and MediaPipe, and deep learning classification pipelines.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={scrollToWork}
              className="group flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-white text-[#090a0d] hover:bg-slate-100 font-mono-tech text-xs font-bold tracking-wider uppercase transition-all duration-200 shadow-sm cursor-pointer"
            >
              <span>Explore Selected Work</span>
              <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </button>

            <button
              onClick={() => {
                soundManager.playClick();
                onOpenResume();
              }}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-lg border border-white/[0.15] bg-white/[0.02] text-slate-200 hover:text-white hover:border-white/[0.3] hover:bg-white/[0.05] font-mono-tech text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-slate-400" />
              <span>Official Resume</span>
            </button>
          </div>
        </div>

        {/* Right Column: Refined Digital Core Viewport */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          <div className="w-full max-w-[420px] aspect-square relative rounded-2xl border border-white/[0.07] bg-white/[0.015] flex items-center justify-center p-4">
            {/* Architectural corner reticles */}
            <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/[0.2]" />
            <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/[0.2]" />
            <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/[0.2]" />
            <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/[0.2]" />

            {/* Subtle Viewport Monospace Label */}
            <div className="absolute top-3 left-4 font-mono-tech text-[10px] text-slate-400 tracking-widest uppercase">
              SYS // 3D_CORE_VIEWPORT
            </div>

            <div className="w-full h-full pt-4">
              <HeroCoreCanvas />
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Section Indicator ── */}
      <div className="flex items-center justify-between border-t border-white/[0.08] pt-6 text-[11px] font-mono-tech text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>HYDERABAD, IN // 17.5376° N, 78.3842° E</span>
        </div>
        <button
          onClick={scrollToAbout}
          className="group flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
        </button>
      </div>
    </section>
  );
};
