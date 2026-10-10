import { useState, useEffect, useRef } from 'react';
import type React from 'react';
import { Volume2, VolumeX, Menu, X, FileText, ExternalLink } from 'lucide-react';
import { soundManager } from '../audio/soundEffects';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FuturisticNavbarProps {
  onOpenResume: () => void;
}

const NAV_SECTIONS = [
  { id: 'system', label: 'System' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'focus', label: 'Focus' },
  { id: 'contact', label: 'Contact' },
];

export const FuturisticNavbar: React.FC<FuturisticNavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [activeSection, setActiveSection] = useState<string>('');

  const indicatorRef = useRef<HTMLDivElement>(null);
  const navItemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    setIsMuted(soundManager.getMuted());

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Intersection Observer to track active section
    const observers: IntersectionObserver[] = [];
    const sectionMap = new Map<Element, string>();

    NAV_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      sectionMap.set(el, id);
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const secId = sectionMap.get(entry.target);
              if (secId) setActiveSection(secId);
            }
          });
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  // Lock body scroll and handle Escape key when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setMobileMenuOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [mobileMenuOpen]);

  // Move the active indicator underline
  useEffect(() => {
    const activeEl = navItemRefs.current[activeSection];
    const indicator = indicatorRef.current;
    if (!indicator || !activeEl) return;

    const rect = activeEl.getBoundingClientRect();
    const parentRect = activeEl.parentElement?.getBoundingClientRect();
    if (!parentRect) return;

    indicator.style.width = `${rect.width}px`;
    indicator.style.transform = `translateX(${rect.left - parentRect.left}px)`;
    indicator.style.opacity = '1';
  }, [activeSection]);

  const toggleSound = () => {
    const muted = soundManager.toggleMute();
    setIsMuted(muted);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    soundManager.playClick();
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      // Lenis owns smooth scroll; dispatch a custom event or just use native scrollIntoView
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 font-mono-tech ${
          scrolled
            ? 'py-3 bg-[#03050a]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_0_rgba(0,212,255,0.08)]'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">

          {/* ── Monogram Brand Mark ── */}
          <a
            href="#"
            className="flex items-center gap-3 group flex-shrink-0"
            onClick={() => soundManager.playHover()}
            data-cursor="hover"
          >
            {/* NR monogram */}
            <div className="relative w-8 h-8 flex items-center justify-center flex-shrink-0">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="group-hover:opacity-90 transition-opacity">
                <rect x="0.75" y="0.75" width="30.5" height="30.5" rx="6.25" stroke="rgba(0,212,255,0.5)" strokeWidth="1.5"/>
                <text x="16" y="22" textAnchor="middle" fontSize="14" fontWeight="800" fill="#00d4ff" fontFamily="Orbitron, sans-serif" letterSpacing="-1">NR</text>
              </svg>
              {/* Online pulse */}
              <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 border border-[#03050a]">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
              </span>
            </div>

            <div className="hidden sm:flex flex-col">
              <span className="text-[11px] font-bold text-white tracking-[0.12em] group-hover:text-cyan-300 transition-colors uppercase">
                Nirvan Reddy
              </span>
              <span className="text-[9px] text-[--accent-cyan]/60 tracking-widest">
                HYD · CSE · AI/ML
              </span>
            </div>
          </a>

          {/* ── Desktop Navigation ── */}
          <nav className="hidden md:flex items-center relative" aria-label="Main Navigation">
            <div className="flex items-center gap-0.5 bg-white/[0.04] border border-white/[0.07] backdrop-blur-md px-2 py-1.5 rounded-full relative">
              {/* Sliding active indicator */}
              <div
                ref={indicatorRef}
                className="absolute bottom-1 h-0.5 bg-[--accent-cyan] rounded-full transition-all duration-300 ease-out opacity-0"
                style={{ transform: 'translateX(0px)' }}
              />

              {NAV_SECTIONS.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  ref={(el) => { navItemRefs.current[id] = el; }}
                  onClick={(e) => handleNavClick(e, id)}
                  onMouseEnter={() => soundManager.playHover()}
                  data-cursor="hover"
                  className={`relative text-[11px] uppercase tracking-[0.12em] px-3 py-1.5 rounded-full transition-all duration-200 ${
                    activeSection === id
                      ? 'text-[--accent-cyan] font-bold'
                      : 'text-[--text-secondary] hover:text-white'
                  }`}
                >
                  {label}
                </a>
              ))}
            </div>
          </nav>

          {/* ── Right Actions ── */}
          <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
            {/* Sound toggle */}
            <button
              onClick={toggleSound}
              data-cursor="hover"
              className={`p-2 rounded-lg border transition-all duration-200 ${
                !isMuted
                  ? 'border-[--accent-cyan]/40 bg-[--accent-cyan]/8 text-[--accent-cyan] shadow-[0_0_12px_rgba(0,212,255,0.2)]'
                  : 'border-white/[0.08] bg-white/[0.03] text-[--text-secondary] hover:text-white hover:border-white/[0.15]'
              }`}
              title={isMuted ? 'Enable Sound' : 'Mute Sound'}
              aria-label="Toggle Sound"
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>

            {/* Resume */}
            <button
              onClick={() => { soundManager.playClick(); onOpenResume(); }}
              onMouseEnter={() => soundManager.playHover()}
              data-cursor="hover"
              className="relative overflow-hidden flex items-center gap-1.5 text-[11px] uppercase tracking-[0.1em] font-bold px-3.5 py-2 rounded-lg border border-[--accent-cyan]/35 bg-[--accent-cyan]/8 text-[--accent-cyan] hover:bg-[--accent-cyan]/15 hover:border-[--accent-cyan]/60 hover:shadow-[0_0_20px_rgba(0,212,255,0.2)] transition-all duration-200 btn-shimmer"
            >
              <FileText className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Resume</span>
            </button>

            {/* LinkedIn */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              onMouseEnter={() => soundManager.playHover()}
              className="p-2 rounded-lg border border-white/[0.08] bg-white/[0.03] text-[--text-secondary] hover:text-white hover:border-white/[0.15] transition-all duration-200"
              aria-label="LinkedIn Profile"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* ── Mobile Hamburger ── */}
          <div className="flex items-center gap-2 sm:hidden">
            <button onClick={toggleSound} className="p-2 text-[--text-secondary]" aria-label="Toggle Sound">
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[--accent-cyan]" />}
            </button>
            <button
              onClick={() => { soundManager.playClick(); setMobileMenuOpen(!mobileMenuOpen); }}
              className="p-2 text-[--text-secondary] hover:text-white"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* ── Section indicator strip at very bottom of header ── */}
        {scrolled && activeSection && (
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[--accent-cyan]/15 to-transparent" />
        )}
      </header>

      {/* ── Mobile Drawer ── */}
      <div
        id="mobile-navigation-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Drawer"
        className={`fixed inset-0 z-30 md:hidden transition-all duration-400 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-[#03050a]/97 backdrop-blur-xl" />
        <div className="relative h-full flex flex-col pt-24 pb-12 px-8 font-mono-tech">
          <div className="text-[10px] text-[--accent-cyan]/60 tracking-widest mb-6 border-b border-white/[0.06] pb-4">
            // NAVIGATION SYSTEM
          </div>

          <nav className="space-y-1 flex-1">
            {NAV_SECTIONS.map(({ id, label }, index) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className={`flex items-center gap-4 py-4 border-b border-white/[0.05] transition-all duration-200 group ${
                  activeSection === id ? 'text-[--accent-cyan]' : 'text-slate-300 hover:text-white'
                }`}
              >
                <span className="text-[10px] text-slate-500 w-5">0{index + 1}</span>
                <span className="text-xl font-display uppercase tracking-wider">{label}</span>
                {activeSection === id && (
                  <span className="ml-auto w-2 h-2 rounded-full bg-[--accent-cyan]" />
                )}
              </a>
            ))}
          </nav>

          <div className="space-y-3 mt-6">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}
              className="w-full py-3 rounded-lg border border-[--accent-cyan]/30 bg-[--accent-cyan]/8 text-[--accent-cyan] font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              View Resume
            </button>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-lg border border-white/[0.08] text-slate-300 font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
