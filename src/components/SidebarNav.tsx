import { useState, useEffect } from 'react';
import type React from 'react';
import { ArrowUpRight, Menu, X, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface SidebarNavProps {
  onOpenResume: () => void;
}

const NAV_ITEMS = [
  { id: 'about', num: '01', label: 'ABOUT' },
  { id: 'work', num: '02', label: 'WORK' },
  { id: 'skills', num: '03', label: 'SKILLS' },
  { id: 'education', num: '04', label: 'EDUCATION' },
  { id: 'contact', num: '05', label: 'CONTACT' },
];

export const SidebarNav: React.FC<SidebarNavProps> = ({ onOpenResume }) => {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll on mobile menu open
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
      {/* ── MOBILE TOP NAVIGATION BAR (Visible < 1024px) ── */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-[#0c0e12]/95 backdrop-blur-md border-b border-white/[0.08] px-6 py-4 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-base font-bold tracking-tight text-white"
        >
          {PERSONAL_INFO.name}
        </a>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="text-xs font-mono font-medium px-2.5 py-1 rounded border border-white/[0.15] text-slate-300 hover:text-white"
          >
            RESUME ↗
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-slate-400 hover:text-white cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-30 bg-[#0c0e12] lg:hidden transition-all duration-300 flex flex-col justify-between px-8 py-24 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
      >
        <nav className="space-y-6 pt-4">
          <div className="text-[11px] font-mono tracking-widest text-slate-400 uppercase">
            // INDEX NAVIGATION
          </div>
          <div className="flex flex-col space-y-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`flex items-baseline gap-3 text-2xl font-bold tracking-tight py-1 transition-colors ${
                  activeSection === item.id ? 'text-blue-400' : 'text-slate-400 hover:text-white'
                }`}
              >
                <span className="font-mono text-xs text-slate-400">{item.num}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </nav>

        <div className="pt-8 space-y-3 border-t border-white/[0.08]">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="w-full py-3 rounded-lg border border-white/[0.15] bg-white/[0.03] text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <FileText className="w-4 h-4 text-blue-400" />
            <span>VIEW RESUME</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <span>LINKEDIN</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* ── DESKTOP PERSISTENT NARROW LEFT IDENTITY & NAVIGATION PANEL (lg:block) ── */}
      <aside className="hidden lg:flex lg:col-span-4 xl:col-span-4 lg:sticky lg:top-0 lg:h-screen lg:flex-col lg:justify-between py-16 px-8 xl:px-12 border-r border-white/[0.08] select-none">
        {/* Top: Identity Block */}
        <div className="space-y-4">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="block group"
          >
            <h1 className="text-3xl xl:text-4xl font-extrabold tracking-tight text-white group-hover:text-blue-400 transition-colors">
              {PERSONAL_INFO.name}
            </h1>
          </a>

          <div className="space-y-1 font-mono text-xs tracking-wider text-slate-400 uppercase">
            <div className="text-slate-300 font-semibold">{PERSONAL_INFO.sublabel}</div>
            <div className="text-slate-400">{PERSONAL_INFO.sublabelLine2}</div>
          </div>
        </div>

        {/* Middle: Editorial Numbered Section Navigation */}
        <nav className="my-auto py-8" aria-label="Table of Contents">
          <ul className="space-y-4">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className="group flex items-center gap-4 py-1 cursor-pointer transition-all"
                  >
                    {/* Animated Extending Active Indicator Line */}
                    <span
                      className={`h-px transition-all duration-300 ease-out ${
                        isActive
                          ? 'w-12 bg-blue-400'
                          : 'w-6 bg-slate-700 group-hover:w-9 group-hover:bg-slate-400'
                      }`}
                    />

                    {/* Number */}
                    <span
                      className={`font-mono text-xs transition-colors duration-200 ${
                        isActive
                          ? 'text-blue-400 font-semibold'
                          : 'text-slate-400 group-hover:text-slate-300'
                      }`}
                    >
                      {item.num}
                    </span>

                    {/* Label */}
                    <span
                      className={`font-mono text-xs tracking-wider transition-colors duration-200 ${
                        isActive
                          ? 'text-white font-bold'
                          : 'text-slate-400 group-hover:text-slate-200'
                      }`}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom: External Links & Status */}
        <div className="space-y-6 pt-6 border-t border-white/[0.08]">
          <div className="flex items-center gap-6 font-mono text-xs tracking-wider uppercase">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors cursor-pointer group"
            >
              <span>RESUME</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors group"
            >
              <span>LINKEDIN</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div className="font-mono text-[11px] text-slate-400">
            HYDERABAD, IN // 17.5° N, 78.4° E
          </div>
        </div>
      </aside>
    </>
  );
};
