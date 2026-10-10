import { useState, useEffect } from 'react';
import type React from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { soundManager } from '../audio/soundEffects';

interface NavbarProps {
  onOpenResume: () => void;
}

const NAV_ITEMS = [
  { id: 'about', index: '01', label: 'ABOUT' },
  { id: 'skills', index: '02', label: 'SKILLS' },
  { id: 'work', index: '03', label: 'WORK' },
  { id: 'journey', index: '04', label: 'JOURNEY' },
  { id: 'contact', index: '05', label: 'CONTACT' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Track active section via IntersectionObserver
    const observers: IntersectionObserver[] = [];
    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(item.id);
            }
          });
        },
        { threshold: 0.3 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  // Lock scroll on mobile menu
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setMenuOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [menuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    soundManager.playClick();
    setMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'py-4 bg-[#090a0d]/90 backdrop-blur-md border-b border-white/[0.06]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Mark */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 group"
          >
            <span className="font-mono-tech text-xs tracking-widest text-slate-400 group-hover:text-white transition-colors">
              //
            </span>
            <span className="font-sans-clean font-bold tracking-tight text-white text-sm sm:text-base group-hover:text-[--accent-cyan] transition-colors">
              NIRVAN
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-mono-tech text-xs" aria-label="Primary Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`flex items-center gap-1.5 transition-colors ${
                    isActive ? 'text-[--accent-cyan] font-semibold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <span className="text-[10px] text-slate-400 opacity-60">{item.index}</span>
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action: Resume */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => {
                soundManager.playClick();
                onOpenResume();
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/[0.12] bg-white/[0.03] text-white hover:border-white/[0.3] hover:bg-white/[0.06] font-mono-tech text-xs tracking-wider transition-all duration-200 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-slate-400" />
              <span>RESUME</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => {
              soundManager.playClick();
              setMenuOpen(!menuOpen);
            }}
            className="p-2 text-slate-400 hover:text-white md:hidden"
            aria-label={menuOpen ? 'Close Menu' : 'Open Navigation Menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Overlay Menu */}
      <div
        className={`fixed inset-0 z-30 bg-[#090a0d] md:hidden transition-all duration-300 flex flex-col justify-between px-8 py-20 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        <div className="space-y-6">
          <div className="font-mono-tech text-xs text-slate-400 tracking-widest uppercase border-b border-white/[0.08] pb-3">
            // NAVIGATION
          </div>

          <nav className="flex flex-col space-y-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className="flex items-baseline gap-3 text-2xl font-bold tracking-tight text-white hover:text-[--accent-cyan] py-1 border-b border-white/[0.04]"
              >
                <span className="font-mono-tech text-xs text-slate-400">{item.index}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-8 space-y-3">
          <button
            onClick={() => {
              setMenuOpen(false);
              onOpenResume();
            }}
            className="w-full py-3.5 rounded-lg border border-white/[0.15] bg-white/[0.05] text-white font-mono-tech text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 cursor-pointer"
          >
            <FileText className="w-4 h-4 text-slate-400" />
            VIEW RESUME
          </button>
          <div className="text-center font-mono-tech text-[10px] text-slate-400">
            KOPPELA NIRVAN REDDY · HYDERABAD, IN
          </div>
        </div>
      </div>
    </>
  );
};
