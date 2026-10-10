import { useState, useEffect } from 'react';
import type React from 'react';
import { Volume2, VolumeX, Menu, X, FileText, ExternalLink } from 'lucide-react';
import { soundManager } from '../audio/soundEffects';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FuturisticNavbarProps {
  onOpenResume: () => void;
}

export const FuturisticNavbar: React.FC<FuturisticNavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    setIsMuted(soundManager.getMuted());

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const muted = soundManager.toggleMute();
    setIsMuted(muted);
  };

  const navLinks = [
    { name: 'System', href: '#system' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Focus', href: '#focus' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    soundManager.playClick();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 font-mono-tech ${
          scrolled
            ? 'py-3 bg-[#05070b]/85 backdrop-blur-md border-b border-cyan-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.7)]'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Telemetry */}
          <a
            href="#"
            className="flex items-center gap-3 group cursor-pointer"
            onClick={() => soundManager.playHover()}
          >
            <div className="w-8 h-8 rounded border border-cyan-400/60 bg-cyan-950/40 flex items-center justify-center relative overflow-hidden group-hover:border-cyan-300 transition-colors">
              <span className="corner-bracket corner-tl !w-1.5 !h-1.5" />
              <span className="corner-bracket corner-br !w-1.5 !h-1.5" />
              <span className="font-display font-black text-cyan-400 text-xs tracking-tighter">
                NR
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white tracking-wider group-hover:text-cyan-300 transition-colors">
                KOPPELA NIRVAN REDDY
              </span>
              <span className="text-[10px] text-cyan-400/80 tracking-widest flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                SYS.ONLINE // HYD
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 backdrop-blur-md px-3 py-1.5 rounded-full">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                onMouseEnter={() => soundManager.playHover()}
                className="text-xs uppercase tracking-wider text-slate-300 hover:text-cyan-300 px-3 py-1 rounded-full hover:bg-cyan-500/10 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions (Audio, Resume, LinkedIn) */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              className={`p-2 rounded border transition-all cursor-pointer ${
                !isMuted
                  ? 'border-cyan-400/60 bg-cyan-500/15 text-cyan-300 shadow-[0_0_12px_rgba(0,240,255,0.3)]'
                  : 'border-slate-800 bg-slate-900/40 text-slate-400 hover:text-white'
              }`}
              title={isMuted ? 'Enable Sound FX' : 'Mute Sound FX'}
              aria-label="Toggle Sound"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
            </button>

            {/* Resume Button */}
            <button
              onClick={() => {
                soundManager.playClick();
                onOpenResume();
              }}
              onMouseEnter={() => soundManager.playHover()}
              className="flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold px-3.5 py-1.5 rounded border border-cyan-500/40 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,240,255,0.25)] transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* LinkedIn Quick Link */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => soundManager.playHover()}
              className="text-slate-400 hover:text-cyan-400 transition-colors p-2"
              title="LinkedIn Profile"
              aria-label="LinkedIn"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu & Sound Trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleSound}
              className="p-2 text-slate-400 hover:text-cyan-300"
              aria-label="Toggle Sound"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
            </button>
            <button
              onClick={() => {
                soundManager.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 text-slate-300 hover:text-cyan-400"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#05070b]/95 backdrop-blur-xl pt-24 px-6 md:hidden flex flex-col justify-between pb-8">
          <div className="space-y-4 font-mono-tech">
            <div className="text-[11px] text-cyan-400 tracking-widest border-b border-cyan-500/20 pb-2">
              NAVIGATION CONSOLE
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-lg font-display uppercase tracking-wider text-slate-200 hover:text-cyan-400 py-2 border-b border-slate-800/40"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded border border-cyan-500/40 bg-cyan-500/10 text-cyan-300 font-bold uppercase tracking-wider"
              >
                <FileText className="w-4 h-4" />
                View Verified Resume
              </button>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded border border-slate-800 bg-slate-900/60 text-slate-300 font-bold uppercase tracking-wider"
              >
                <ExternalLink className="w-4 h-4" />
                LinkedIn Profile
              </a>
            </div>
          </div>
          <div className="text-[11px] text-slate-400 font-mono-tech text-center">
            SYS.STATUS // READY
          </div>
        </div>
      )}
    </>
  );
};
