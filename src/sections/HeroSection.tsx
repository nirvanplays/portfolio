import { useState, useRef, useEffect } from 'react';
import type React from 'react';
import { ExternalLink, FileText, ChevronDown } from 'lucide-react';
import { HeroCanvas } from '../three/HeroCanvas';
import { GlowingButton } from '../components/UI/GlowingButton';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundManager } from '../audio/soundEffects';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Track scroll to pass to Three.js canvas for scroll-reactive camera
  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const height = section.clientHeight;
      const progress = Math.min(1, window.scrollY / height);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProjects = () => {
    soundManager.playClick();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToNext = () => {
    soundManager.playClick();
    document.getElementById('system')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* ── Three.js 3D Environment ── */}
      <HeroCanvas scrollProgress={scrollProgress} interactive />

      {/* ── Subtle radial vignette ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 75% 75% at 50% 50%, transparent 30%, rgba(3,5,10,0.65) 70%, rgba(3,5,10,0.95) 100%)',
        }}
      />

      {/* ── Scan-line texture ── */}
      <div className="absolute inset-0 scanline-overlay pointer-events-none opacity-60" />

      {/* ── HUD corner — left side technical metadata ── */}
      <div className="absolute top-[88px] left-6 hidden lg:flex flex-col gap-1 font-mono-tech text-[10px] pointer-events-none z-10 select-none">
        <div className="flex items-center gap-1.5 text-[--accent-cyan]/80">
          <span className="w-1.5 h-1.5 rounded-full bg-[--accent-cyan] animate-pulse" />
          <span>WORKSTATION.01 // HYDERABAD</span>
        </div>
        <div className="text-[--text-muted]">ARCH: REACT + THREE.JS + GSAP</div>
        <div className="text-[--text-muted]">TARGET: FULL STACK + AI/ML</div>
      </div>

      {/* ── HUD corner — right side coordinates ── */}
      <div className="absolute top-[88px] right-6 hidden lg:flex flex-col gap-1 font-mono-tech text-[10px] pointer-events-none z-10 text-right select-none">
        <div className="text-[--accent-cyan]/80">{PERSONAL_INFO.systemProfile.coordinates}</div>
        <div className="text-[--text-muted]">STATUS: UNDERGRADUATE ACTIVE</div>
        <div className="text-emerald-400/90 font-bold">
          CGPA {PERSONAL_INFO.education.cgpa} · GRIET
        </div>
      </div>

      {/* ── Central foreground content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center pt-24 pb-20 sm:pt-32 sm:pb-24">

        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[--accent-cyan]/20 bg-[--accent-cyan]/5 backdrop-blur-sm font-mono-tech text-[10px] text-[--accent-cyan]/80 tracking-[0.18em] uppercase mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-[--accent-cyan] animate-pulse flex-shrink-0" />
          Portfolio · Engineering Workstation · 2026
        </div>

        {/* Primary Name — the most important element */}
        <h1
          className="font-display font-black uppercase text-white leading-[0.9] tracking-[-0.03em] mb-6 glow-text-white"
          style={{ fontSize: 'clamp(2.8rem, 9vw, 7.5rem)' }}
        >
          {/* Split for individual line styling */}
          <span className="block">Koppela</span>
          <span
            className="block glow-text-cyan"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #a5f3fc 40%, #00d4ff 70%, #7c3aed 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Nirvan Reddy
          </span>
        </h1>

        {/* Headline — secondary hierarchy */}
        <p
          className="font-sans-clean font-light text-[--text-secondary] leading-[1.55] mb-4 max-w-2xl"
          style={{ fontSize: 'clamp(1rem, 2.2vw, 1.35rem)' }}
        >
          {PERSONAL_INFO.headline}
        </p>

        {/* Role chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 font-mono-tech text-[10px] tracking-widest text-[--text-muted] uppercase">
          <span>Computer Science Engineering</span>
          <span className="w-1 h-1 rounded-full bg-[--text-muted]/40" />
          <span>Full Stack Developer</span>
          <span className="w-1 h-1 rounded-full bg-[--text-muted]/40" />
          <span>AI / ML Enthusiast</span>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <GlowingButton
            variant="primary"
            size="lg"
            onClick={scrollToProjects}
          >
            Explore Projects
          </GlowingButton>

          <GlowingButton
            variant="ghost"
            size="lg"
            icon={<FileText className="w-4 h-4" />}
            onClick={onOpenResume}
          >
            View Resume
          </GlowingButton>

          <GlowingButton
            variant="ghost"
            size="lg"
            icon={<ExternalLink className="w-4 h-4" />}
            href={PERSONAL_INFO.linkedin}
            target="_blank"
          >
            LinkedIn
          </GlowingButton>
        </div>

        {/* Scroll prompt */}
        <button
          onClick={scrollToNext}
          className="mt-20 flex flex-col items-center gap-2 text-[--text-muted] hover:text-[--accent-cyan] transition-colors duration-300 group"
          aria-label="Scroll to explore"
          data-cursor="hover"
        >
          <span className="font-mono-tech text-[9px] tracking-[0.25em] uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce opacity-70" />
        </button>
      </div>

      {/* ── Bottom fade ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(3,5,10,0.95))',
        }}
      />
    </section>
  );
};
