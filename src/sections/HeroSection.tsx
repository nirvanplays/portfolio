'use client';

import type React from 'react';
import { ArrowRight, ArrowUpRight, Sparkles, ShieldCheck, Terminal, Award, Cpu } from 'lucide-react';
import { Realistic3DPhotoCanvas } from '../three/Realistic3DPhotoCanvas';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="overview"
      className="relative min-h-[92vh] flex flex-col justify-center pt-24 sm:pt-28 pb-16 select-none"
      aria-label="Overview & Mission Introduction"
    >
      {/* Background Cosmic Radial Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Identity, Value Proposition & Placement Pitch (7 cols) */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-7">
          {/* Animated Cosmic Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#13072e]/80 border border-purple-500/40 text-xs font-mono text-cyan-300 shadow-[0_0_20px_rgba(112,66,248,0.3)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
            <span className="font-semibold tracking-wider uppercase">
              Computer Science Engineering • GRIET
            </span>
          </div>

          {/* Primary Cosmic Title */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-black tracking-tight leading-[1.05] text-white">
              Providing The Best <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-cyan-400 drop-shadow-[0_0_35px_rgba(112,66,248,0.4)]">
                Project Experience.
              </span>
            </h1>

            <p className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight flex items-center gap-3">
              <span>Hi, I'm Nirvan Reddy.</span>
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee] animate-pulse" />
            </p>
          </div>

          {/* Direct Placement Pitch */}
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
            B.Tech Computer Science Engineering student at{' '}
            <span className="text-white font-semibold">
              Gokaraju Rangaraju Institute of Engineering and Technology (GRIET)
            </span>
            , Hyderabad. Specialized in building high-throughput full-stack web applications, real-time computer vision kinematics, and deep learning neural pipelines.
          </p>

          {/* Placement Quick HUD (4 scannable telemetry blocks) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
            <div className="p-3 rounded-xl bg-[#0b0523]/80 border border-purple-500/30 backdrop-blur-sm space-y-1">
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>ACADEMICS</span>
              </div>
              <div className="text-base font-black text-white">8.01 CGPA</div>
              <div className="text-[10px] text-slate-400 font-mono">B.Tech CSE '28</div>
            </div>

            <div className="p-3 rounded-xl bg-[#0b0523]/80 border border-purple-500/30 backdrop-blur-sm space-y-1">
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-400">
                <Terminal className="w-3.5 h-3.5" />
                <span>PROJECTS</span>
              </div>
              <div className="text-base font-black text-white">4 Systems</div>
              <div className="text-[10px] text-slate-400 font-mono">Web • CV • AI</div>
            </div>

            <div className="p-3 rounded-xl bg-[#0b0523]/80 border border-purple-500/30 backdrop-blur-sm space-y-1">
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-400">
                <Award className="w-3.5 h-3.5" />
                <span>CREDENTIALS</span>
              </div>
              <div className="text-base font-black text-white">5 Verified</div>
              <div className="text-[10px] text-slate-400 font-mono">Red Hat • ML</div>
            </div>

            <div className="p-3 rounded-xl bg-[#0b0523]/80 border border-purple-500/30 backdrop-blur-sm space-y-1">
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-400">
                <Cpu className="w-3.5 h-3.5" />
                <span>FOCUS</span>
              </div>
              <div className="text-base font-black text-white">Full Stack</div>
              <div className="text-[10px] text-slate-400 font-mono">& Applied AI</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold text-sm sm:text-base tracking-wide transition-all shadow-[0_0_25px_rgba(112,66,248,0.4)] cursor-pointer group hover:scale-[1.02]"
            >
              <span>EXPLORE MISSIONS</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-purple-500/40 hover:border-cyan-400 bg-[#0e0728]/80 hover:bg-[#150a3c] text-white font-bold text-sm sm:text-base tracking-wide transition-all shadow-sm cursor-pointer hover:scale-[1.02]"
            >
              <span className="text-cyan-300">PLACEMENT RESUME</span>
              <ArrowUpRight className="w-4 h-4 text-cyan-400" />
            </button>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-4 rounded-xl border border-white/[0.12] hover:border-white/[0.3] text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              <span>LINKEDIN</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Current Mission Status */}
          <div className="pt-3 flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>CURRENT STATUS: Available for Software Engineering & AI/ML Placements & Internships</span>
          </div>
        </div>

        {/* Right Column: 3D Realistic Portrait Canvas of Nirvan Reddy (5 cols) */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          {/* Cosmic aura behind photo */}
          <div className="absolute inset-0 bg-radial from-purple-600/25 via-cyan-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* 3D Realistic Photo Canvas */}
          <div className="w-full relative z-10">
            <Realistic3DPhotoCanvas imageSrc="/nirvan.jpg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export const SpaceHeroSection = HeroSection;
export default HeroSection;
