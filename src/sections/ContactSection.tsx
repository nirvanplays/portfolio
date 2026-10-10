import { useState } from 'react';
import type React from 'react';
import { Mail, ArrowRight, ArrowUpRight, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 sm:py-36 border-t border-white/[0.08] space-y-20" aria-label="Contact">
      <div className="space-y-8 max-w-4xl">
        {/* Eyebrow */}
        <span className="font-mono text-xs sm:text-sm text-blue-400 font-semibold uppercase tracking-widest block">
          CONTACT
        </span>

        {/* Large Confident Heading */}
        <div className="space-y-5">
          <h2 className="text-4xl sm:text-6xl lg:text-[76px] font-extrabold text-white tracking-tight leading-[1.04]">
            LET'S BUILD <br />
            SOMETHING USEFUL.
          </h2>

          <p className="text-xl sm:text-2xl text-slate-300 font-light max-w-2xl leading-relaxed">
            Interested in software engineering, AI/ML and technically challenging projects.
          </p>

          <p className="text-base text-slate-400 max-w-xl">
            Open for full-stack engineering and AI/ML internship roles. Reach out directly via email or connect on LinkedIn.
          </p>
        </div>

        {/* Direct Actions: No Form */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base tracking-wide transition-all shadow-lg shadow-blue-600/20 group"
          >
            <Mail className="w-4 h-4" />
            <span>EMAIL ME</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-white/[0.18] hover:border-white/[0.35] bg-white/[0.02] hover:bg-white/[0.06] text-white font-semibold text-base tracking-wide transition-all"
          >
            <span>LINKEDIN</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2.5 px-5 py-4 rounded-xl border border-white/[0.12] hover:border-white/[0.25] text-sm font-mono text-slate-300 hover:text-white transition-colors cursor-pointer bg-white/[0.02]"
            title="Copy email to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 font-medium">COPIED TO CLIPBOARD</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-400" />
                <span>{PERSONAL_INFO.email}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Subtle Personal Signature Line */}
      <div className="pt-10 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-slate-400">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-blue-500" />
          <span className="text-white font-bold tracking-widest uppercase">
            NIRVAN REDDY
          </span>
          <span className="text-slate-600">/</span>
          <span className="text-slate-400">
            CSE · FULL STACK · AI / ML
          </span>
        </div>
        <div className="text-slate-400">
          HYDERABAD, INDIA
        </div>
      </div>
    </section>
  );
};
