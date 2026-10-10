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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto">
        {/* Left Column: Typography & Intent */}
        <div className="lg:col-span-7 space-y-8">
          {/* Small Monospace Label */}
          <div className="flex items-center gap-2.5 font-mono-tech text-xs tracking-widest text-slate-400 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[--accent-cyan]" />
            <span>COMPUTER SCIENCE ENGINEERING</span>
            <span className="text-slate-400 opacity-60">//</span>
            <span className="text-slate-300">FULL STACK • AI/ML</span>
          </div>

          {/* Gigantic Primary Name Title */}
          <div className="space-y-1">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-sans-clean font-extrabold tracking-tight text-white leading-[0.92] uppercase">
              <span className="block">KOPPELA</span>
              <span className="block text-gradient-cyan">NIRVAN REDDY</span>
            </h1>
          </div>

          {/* Main Statement */}
          <p className="text-xl sm:text-2xl text-slate-300 font-light leading-snug max-w-xl">
            "I build intelligent software experiences where engineering meets AI."
          </p>

          {/* Supporting Text */}
          <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed max-w-lg">
            Computer Science Engineering student at{' '}
            <span className="text-slate-200 font-normal">
              Gokaraju Rangaraju Institute of Engineering and Technology
            </span>
            , maintaining an academic CGPA of{' '}
            <span className="font-mono-tech text-[--accent-cyan] font-semibold">8.01</span>.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={scrollToWork}
              className="group flex items-center gap-2 px-6 py-3.5 rounded-md bg-white text-[#090a0d] hover:bg-[--accent-cyan] font-mono-tech text-xs font-bold tracking-wider uppercase transition-all duration-200"
            >
              <span>EXPLORE WORK</span>
              <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </button>

            <button
              onClick={() => {
                soundManager.playClick();
                onOpenResume();
              }}
              className="flex items-center gap-2 px-6 py-3.5 rounded-md border border-white/[0.15] bg-white/[0.02] text-slate-200 hover:text-white hover:border-white/[0.3] font-mono-tech text-xs font-semibold tracking-wider uppercase transition-all duration-200"
            >
              <FileText className="w-4 h-4 text-slate-400" />
              <span>VIEW RESUME</span>
            </button>
          </div>
        </div>

        {/* Right Column: Lightweight Abstract Digital Core */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          {/* Subtle Backlight Gradient */}
          <div className="absolute w-72 h-72 rounded-full bg-[--accent-cyan]/5 blur-3xl pointer-events-none" />
          
          <div className="w-full max-w-[420px] aspect-square flex items-center justify-center">
            <HeroCoreCanvas />
          </div>
        </div>
      </div>

      {/* ── Bottom Section Indicator ── */}
      <div className="flex items-center justify-between border-t border-white/[0.08] pt-6 text-[11px] font-mono-tech text-slate-400">
        <div>HYD // 17.5376° N, 78.3842° E</div>
        <button
          onClick={scrollToAbout}
          className="flex items-center gap-1.5 hover:text-[--accent-cyan] transition-colors cursor-pointer"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
