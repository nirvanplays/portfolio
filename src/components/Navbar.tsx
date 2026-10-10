'use client';

import { useState, useEffect } from 'react';
import type React from 'react';
import { ArrowUpRight, Menu, X, Sparkles, FileText, Compass } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

const NAV_LINKS = [
  { id: 'overview', label: 'OVERVIEW' },
  { id: 'projects', label: 'MISSIONS' },
  { id: 'skills', label: 'CONSTELLATIONS' },
  { id: 'education', label: 'ACADEMICS' },
  { id: 'contact', label: 'MISSION CONTROL' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

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
        setActiveSection('overview');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        className={`fixed top-0 left-0 right-0 z-50 h-16 sm:h-[72px] transition-all duration-300 select-none flex items-center ${
          isScrolled
            ? 'bg-[#030014]/85 backdrop-blur-xl border-b border-[#7042f8]/25 shadow-[0_4px_30px_rgba(112,66,248,0.15)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="w-full max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Left: NR Monogram + Identity */}
          <a
            href="#overview"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3.5 group cursor-pointer"
          >
            {/* Glowing Space Monogram */}
            <div className="relative w-9 h-9 rounded-lg bg-[#0e0728] border border-cyan-500/40 group-hover:border-purple-400 transition-all duration-300 flex items-center justify-center overflow-hidden shadow-[0_0_15px_rgba(6,182,212,0.25)] group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              <span className="font-mono text-xs font-black tracking-wider text-cyan-300 group-hover:text-purple-300 transition-colors">
                NR
              </span>
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-purple-500/20 pointer-events-none" />
            </div>

            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-white group-hover:text-cyan-300 transition-colors leading-none flex items-center gap-1.5">
                <span>NIRVAN REDDY</span>
                <Sparkles className="w-3 h-3 text-cyan-400 opacity-80" />
              </span>
              <span className="text-[10px] font-mono text-slate-400 tracking-wider uppercase pt-1">
                CSE • FULL STACK & AI/ML
              </span>
            </div>
          </a>

          {/* Center: Cosmic Nav Links */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-2 px-3 py-1.5 rounded-full bg-[#0a0520]/60 border border-purple-500/20 backdrop-blur-md" aria-label="Space Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                    isActive
                      ? 'text-cyan-300 bg-purple-600/30 border border-cyan-500/30 shadow-[0_0_12px_rgba(6,182,212,0.25)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right: Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white border border-purple-500/40 hover:border-cyan-400 rounded-lg bg-purple-900/30 hover:bg-purple-800/40 transition-all shadow-[0_0_15px_rgba(112,66,248,0.25)] cursor-pointer group"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-12 transition-transform" />
              <span>RESUME</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-cyan-300" />
            </button>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-cyan-300 border border-white/[0.1] hover:border-cyan-500/40 rounded-lg bg-white/[0.02] transition-colors"
            >
              <span>LINKEDIN</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="px-2.5 py-1 text-xs font-bold text-cyan-300 border border-purple-500/40 rounded bg-purple-900/30"
            >
              RESUME ↗
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-300 hover:text-white cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-[#030014]/98 backdrop-blur-2xl md:hidden transition-all duration-300 flex flex-col justify-between px-6 py-24 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="space-y-4 pt-4">
          <div className="text-xs font-mono font-semibold text-cyan-400 tracking-widest uppercase mb-4 flex items-center gap-2">
            <Compass className="w-4 h-4" />
            <span>MISSION NAVIGATION</span>
          </div>
          <div className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`text-2xl font-bold tracking-tight py-1 transition-colors flex items-center justify-between ${
                  activeSection === link.id ? 'text-cyan-300' : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                {activeSection === link.id && (
                  <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
                )}
              </a>
            ))}
          </div>
        </nav>

        <div className="pt-6 space-y-3 border-t border-purple-500/20">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="w-full py-3.5 rounded-lg border border-purple-500/40 bg-purple-900/30 text-cyan-300 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <FileText className="w-4 h-4" />
            <span>VIEW VERIFIED PLACEMENT RESUME</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <span>CONNECT ON LINKEDIN</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </>
  );
};

export const SpaceNavbar = Navbar;
export default Navbar;
