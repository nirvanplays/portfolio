'use client';

import { useState } from 'react';
import type React from 'react';
import { Mail, ArrowRight, ArrowUpRight, Copy, Check, Sparkles, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 sm:py-36 border-t border-purple-500/20 space-y-16 select-none relative" aria-label="Mission Control & Contact">
      {/* Background Nebula Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="p-8 sm:p-14 rounded-3xl bg-[#07031c]/80 border border-purple-500/30 backdrop-blur-2xl shadow-[0_0_50px_rgba(112,66,248,0.2)] space-y-10 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-900/40 border border-purple-500/40 text-xs font-mono text-cyan-300">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>MISSION CONTROL • INITIATE CONTACT</span>
        </div>

        {/* Large Confident Heading */}
        <div className="space-y-4 max-w-3xl">
          <h2 className="text-4xl sm:text-6xl lg:text-[70px] font-black text-white tracking-tight leading-[1.05]">
            LET'S LAUNCH SOMETHING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-cyan-400">
              EXTRAORDINARY.
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed">
            Interested in high-impact software engineering roles, full-stack systems development, and applied AI/ML engineering. Open for placement drives, internships, and technical collaborations.
          </p>
        </div>

        {/* Action Row */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold text-sm sm:text-base tracking-wide transition-all shadow-[0_0_25px_rgba(112,66,248,0.4)] group cursor-pointer hover:scale-[1.02]"
          >
            <Mail className="w-4 h-4 text-cyan-200" />
            <span>DISPATCH EMAIL</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-purple-500/40 hover:border-cyan-400 bg-[#0e0728]/80 hover:bg-[#150a3c] text-white font-bold text-sm sm:text-base tracking-wide transition-all shadow-sm hover:scale-[1.02]"
          >
            <span>LINKEDIN</span>
            <ArrowUpRight className="w-4 h-4 text-cyan-400" />
          </a>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-6 py-4 rounded-xl border border-white/[0.15] hover:border-cyan-400/60 bg-white/[0.03] hover:bg-white/[0.06] text-white font-bold text-sm tracking-wide transition-all cursor-pointer"
          >
            <FileText className="w-4 h-4 text-purple-400" />
            <span>VIEW RESUME</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-5 py-4 rounded-xl border border-purple-500/30 hover:border-purple-500/60 text-xs sm:text-sm font-mono text-cyan-300 hover:text-white transition-colors cursor-pointer bg-purple-950/30"
            title="Copy email to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 font-bold">COPIED TO CLIPBOARD</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-400" />
                <span>{PERSONAL_INFO.email}</span>
              </>
            )}
          </button>
        </div>

        {/* Subtle Signature HUD */}
        <div className="pt-8 border-t border-purple-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
            <span className="text-white font-bold tracking-wider">
              KOPPELA NIRVAN REDDY
            </span>
            <span className="text-purple-400">•</span>
            <span>B.TECH CSE (GRIET) • CGPA 8.01</span>
          </div>

          <div className="text-slate-400">
            HYDERABAD, INDIA • EARTH
          </div>
        </div>
      </div>
    </section>
  );
};

export const SpaceContactSection = ContactSection;
export default ContactSection;
