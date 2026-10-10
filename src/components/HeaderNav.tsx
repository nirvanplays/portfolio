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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const scrollPosition = window.scrollY + 200;
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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 select-none ${
          isScrolled
            ? 'bg-[#0B0D10]/95 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-sm'
            : 'bg-[#0B0D10]/60 backdrop-blur-sm py-5 border-b border-white/[0.04]'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Left: Candidate Name */}
          <div className="flex items-center gap-3">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="font-bold text-sm sm:text-base tracking-tight text-white hover:text-blue-400 transition-colors"
            >
              {PERSONAL_INFO.name}
            </a>
            <span className="hidden sm:inline-block text-xs text-slate-400 pl-3 border-l border-white/[0.1] font-normal tracking-wide">
              SOFTWARE ENGINEER
            </span>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-2" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium tracking-wider transition-colors uppercase ${
                    isActive
                      ? 'text-white bg-white/[0.06] font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.03]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 hover:text-white border border-white/[0.14] hover:border-white/[0.28] rounded-md bg-white/[0.02] hover:bg-white/[0.06] transition-all cursor-pointer"
            >
              <span>RESUME</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
            >
              <span>LINKEDIN</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="px-2.5 py-1 text-xs font-medium text-slate-200 border border-white/[0.15] rounded bg-white/[0.04]"
            >
              RESUME ↗
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-300 hover:text-white cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-30 bg-[#0B0D10]/98 backdrop-blur-xl md:hidden transition-all duration-300 flex flex-col justify-between px-6 py-24 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
      >
        <nav className="space-y-4 pt-4">
          <div className="text-xs font-medium text-slate-400 tracking-wider uppercase mb-2">
            NAVIGATION
          </div>
          <div className="flex flex-col space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`text-xl font-bold tracking-tight py-1 transition-colors ${
                  activeSection === link.id ? 'text-blue-400' : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
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
            className="w-full py-3 rounded-lg border border-white/[0.15] bg-white/[0.04] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <FileText className="w-4 h-4 text-blue-400" />
            <span>VIEW RESUME</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <span>LINKEDIN</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </>
  );
};
