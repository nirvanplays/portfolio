import { useState, useEffect } from 'react';
import type React from 'react';
import { ArrowUpRight, Menu, X, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderNavProps {
  onOpenResume: () => void;
}

const NAV_LINKS = [
  { id: 'about', label: 'ABOUT' },
  { id: 'work', label: 'WORK' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'education', label: 'EDUCATION' },
  { id: 'contact', label: 'CONTACT' },
];

export const HeaderNav: React.FC<HeaderNavProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100)));
      }

      const scrollPosition = window.scrollY + 250;
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const item = NAV_LINKS[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(item.id);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-16 sm:h-[68px] transition-all duration-200 select-none flex items-center ${
          isScrolled
            ? 'bg-[#0A0C0F]/90 backdrop-blur-md border-b border-white/[0.08] shadow-sm'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="w-full max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
          {/* Left: NR Monogram + Name */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <span className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.12] group-hover:border-blue-500/50 flex items-center justify-center font-mono text-xs font-bold text-white group-hover:text-blue-400 transition-colors">
              NR
            </span>
            <span className="font-bold text-base tracking-tight text-white group-hover:text-blue-400 transition-colors">
              {PERSONAL_INFO.name}
            </span>
          </a>

          {/* Center: Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-2 relative" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`relative px-3.5 py-2 rounded-md text-xs font-semibold tracking-wider uppercase transition-colors ${
                    isActive
                      ? 'text-white bg-white/[0.08]'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-1 left-3 right-3 h-[2px] bg-blue-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right: Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold text-white border border-white/[0.15] hover:border-white/[0.3] rounded-lg bg-white/[0.02] hover:bg-white/[0.06] transition-all cursor-pointer"
            >
              <span>RESUME</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
            >
              <span>LINKEDIN</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="px-2.5 py-1 text-xs font-semibold text-white border border-white/[0.15] rounded bg-white/[0.04]"
            >
              RESUME ↗
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-300 hover:text-white cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Subtle Horizontal Scroll Indicator along bottom of Header */}
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#0A0C0F]/98 backdrop-blur-2xl md:hidden transition-all duration-300 flex flex-col justify-between px-8 py-24 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
      >
        <nav className="space-y-4 pt-4">
          <div className="text-xs font-mono font-semibold text-slate-400 tracking-widest uppercase mb-4">
            NAVIGATION
          </div>
          <div className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`text-2xl font-bold tracking-tight py-1 transition-colors flex items-center justify-between ${
                  activeSection === link.id ? 'text-blue-400' : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                {activeSection === link.id && (
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                )}
              </a>
            ))}
          </div>
        </nav>

        <div className="pt-6 space-y-3 border-t border-white/[0.08]">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="w-full py-3.5 rounded-lg border border-white/[0.15] bg-white/[0.04] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <FileText className="w-4 h-4 text-blue-400" />
            <span>VIEW RESUME</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <span>LINKEDIN</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </>
  );
};
