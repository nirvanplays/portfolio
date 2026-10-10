import type React from 'react';
import { ExternalLink, FileText, Compass } from 'lucide-react';
import { HeroCanvas } from '../three/HeroCanvas';
import { GlowingButton } from '../components/UI/GlowingButton';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundManager } from '../audio/soundEffects';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const scrollToProjects = () => {
    soundManager.playClick();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      {/* 3D Three.js Interactive Core Canvas */}
      <HeroCanvas />

      {/* Cyber Grid & Atmospheric Overlays */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />
      <div className="absolute inset-0 scanline-overlay pointer-events-none" />
      <div className="absolute inset-0 bg-radial from-transparent via-[#05070b]/60 to-[#05070b] pointer-events-none" />

      {/* Technical HUD Floating Telemetry Markers (Top/Sides) */}
      <div className="absolute top-28 left-6 hidden lg:block font-mono-tech text-[10px] text-slate-400 space-y-1 z-10 pointer-events-none">
        <div className="flex items-center gap-1.5 text-cyan-400">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span>WORKSTATION // HYD.01</span>
        </div>
        <div>SYS.ARCH: AMD64 // NODE.JS</div>
        <div>TARGET: AI & FULL-STACK</div>
      </div>

      <div className="absolute top-28 right-6 hidden lg:block font-mono-tech text-[10px] text-slate-400 space-y-1 text-right z-10 pointer-events-none">
        <div className="text-cyan-400">COORD: {PERSONAL_INFO.systemProfile.coordinates}</div>
        <div>STATUS: ACTIVE UNDERGRADUATE</div>
        <div className="text-emerald-400 font-bold">CGPA: {PERSONAL_INFO.education.cgpa} // GRIET</div>
      </div>

      {/* Central Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6 sm:space-y-8 mt-4">
        {/* System Pill Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 backdrop-blur-md font-mono-tech text-xs text-cyan-300">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="tracking-widest uppercase text-[11px] sm:text-xs">
            PORTFOLIO // ADVANCED ENGINEERING WORKSTATION
          </span>
        </div>

        {/* Hero Name with Holographic Gradient */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black tracking-tight text-white uppercase select-none glow-cyan">
            {PERSONAL_INFO.name}
          </h1>

          {/* Subtitle / Headline */}
          <p className="text-lg sm:text-2xl md:text-3xl font-display font-medium text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-cyan-200 to-blue-300 max-w-4xl mx-auto leading-tight">
            "{PERSONAL_INFO.headline}"
          </p>
        </div>

        {/* Small Supporting Text */}
        <p className="text-xs sm:text-sm md:text-base font-mono-tech text-cyan-400/90 tracking-wide max-w-2xl mx-auto uppercase">
          {PERSONAL_INFO.title}
        </p>

        {/* Interactive Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4 sm:pt-6">
          {/* Explore Projects Button */}
          <GlowingButton
            variant="primary"
            size="lg"
            icon={<Compass className="w-4 h-4" />}
            onClick={scrollToProjects}
          >
            Explore Projects
          </GlowingButton>

          {/* View Resume Button */}
          <GlowingButton
            variant="secondary"
            size="lg"
            icon={<FileText className="w-4 h-4" />}
            onClick={onOpenResume}
          >
            View Resume
          </GlowingButton>

          {/* LinkedIn Button */}
          <GlowingButton
            variant="ghost"
            size="lg"
            icon={<ExternalLink className="w-4 h-4" />}
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </GlowingButton>
        </div>

        {/* Subtle Scroll to Explore Indicator */}
        <div className="pt-12 sm:pt-16 flex flex-col items-center justify-center space-y-2 select-none">
          <button
            onClick={scrollToProjects}
            className="group flex flex-col items-center gap-1.5 text-slate-400 hover:text-cyan-300 transition-colors font-mono-tech text-[11px] tracking-widest uppercase cursor-pointer"
            aria-label="Scroll to explore"
          >
            <span>SCROLL TO EXPLORE</span>
            <div className="w-5 h-8 rounded-full border border-cyan-500/40 flex items-start justify-center p-1 group-hover:border-cyan-400 transition-colors">
              <div className="w-1 h-2 rounded-full bg-cyan-400 animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
