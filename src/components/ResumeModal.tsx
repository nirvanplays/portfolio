import { useEffect } from 'react';
import type React from 'react';
import { X, Printer, Mail, ExternalLink, ShieldCheck, Globe, Zap, Cpu } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES, CERTIFICATIONS } from '../data/portfolioData';
import { GithubIcon } from './GithubIcon';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl bg-[#0e1117] border border-white/[0.12] rounded-2xl overflow-hidden shadow-2xl my-8 font-sans">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#141822]">
          <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <h2 id="resume-modal-title" className="font-semibold uppercase tracking-wider">
              Official Placement Resume Specification
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold text-slate-200 border border-white/[0.15] rounded-lg bg-white/[0.04] hover:bg-white/[0.08] transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg border border-white/[0.1] bg-white/[0.03] text-slate-400 hover:text-white hover:border-white/[0.3] transition-colors cursor-pointer"
              aria-label="Close Resume"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Container */}
        <div className="p-6 sm:p-10 space-y-7 max-h-[82vh] overflow-y-auto text-slate-200 bg-[#0e1117]">
          {/* Header */}
          <div className="border-b border-white/[0.08] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-white tracking-tight">
                {PERSONAL_INFO.fullName}
              </h1>
              <p className="text-sm font-mono text-blue-400 mt-1">
                Computer Science Engineering Student • Full Stack Systems & Applied AI/ML
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                {PERSONAL_INFO.location}
              </p>
            </div>
            <div className="font-mono text-xs space-y-1.5 text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white hover:text-blue-400 underline">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <a
                  href={PERSONAL_INFO.portfolioUrl || 'https://nirvan-portfolio.vercel.app'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-cyan-400 underline"
                >
                  nirvan-portfolio.vercel.app
                </a>
              </div>
              <div className="flex items-center gap-2">
                <GithubIcon className="w-3.5 h-3.5 text-purple-400" />
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-400 underline"
                >
                  github.com/nirvanplays
                </a>
              </div>
              <div className="flex items-center gap-2">
                <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 underline"
                >
                  linkedin.com/in/nirvanreddy
                </a>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono text-blue-400 uppercase tracking-widest border-b border-white/[0.06] pb-1">
              // EDUCATION & ACADEMICS
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pt-1">
              <div>
                <div className="font-bold text-white text-sm">
                  {PERSONAL_INFO.education.degree}
                </div>
                <div className="text-xs text-slate-300">
                  {PERSONAL_INFO.education.institution} · {PERSONAL_INFO.education.location}
                </div>
              </div>
              <div className="font-mono text-xs text-slate-400 sm:text-right">
                <div>{PERSONAL_INFO.education.period}</div>
                <div className="text-emerald-400 font-bold">
                  CGPA: {PERSONAL_INFO.education.cgpa} / 10.0
                </div>
              </div>
            </div>
          </div>

          {/* Technical Projects */}
          <div className="space-y-5">
            <h3 className="text-xs font-mono text-blue-400 uppercase tracking-widest border-b border-white/[0.06] pb-1">
              // TECHNICAL PROJECTS & PRODUCTION DEPLOYMENTS
            </h3>
            <div className="space-y-5">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="space-y-2 p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-white text-sm">
                        {proj.title}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/30">
                        {proj.category}
                      </span>
                    </div>

                    {/* Direct Links */}
                    <div className="flex items-center gap-2 text-xs font-mono">
                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-cyan-950/40 border border-cyan-500/40 text-cyan-300 hover:text-white hover:bg-cyan-900/50 transition-colors"
                        >
                          <Globe className="w-3 h-3 text-cyan-400" />
                          <span>Live Demo ↗</span>
                        </a>
                      )}
                      {proj.githubUrl && (
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-purple-950/40 border border-purple-500/40 text-purple-300 hover:text-white hover:bg-purple-900/50 transition-colors"
                        >
                          <GithubIcon className="w-3 h-3 text-purple-400" />
                          <span>GitHub ↗</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Quantified System Metrics & Google Tech */}
                  <div className="flex flex-wrap items-center gap-2 pt-0.5">
                    {proj.metrics?.map((m, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-300"
                      >
                        <Zap className="w-2.5 h-2.5 text-emerald-400" />
                        <span>{m.label}: {m.value}</span>
                      </span>
                    ))}
                    {proj.googleTech?.map((tech, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/10 border border-blue-500/30 text-blue-300"
                      >
                        <Cpu className="w-2.5 h-2.5 text-blue-400" />
                        <span>Google Tech: {tech}</span>
                      </span>
                    ))}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {proj.description}
                  </p>

                  <div className="text-[11px] font-mono text-slate-400">
                    <span className="text-slate-300 font-medium">Tech Stack:</span> {proj.techStack.join(' • ')}
                  </div>

                  {proj.analyticsNote && (
                    <p className="text-[11px] font-mono text-purple-300/80">
                      Architecture & Scale Note: {proj.analyticsNote}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono text-blue-400 uppercase tracking-widest border-b border-white/[0.06] pb-1">
              // TECHNICAL SKILLS & COMPUTER SCIENCE FOUNDATIONS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono pt-1">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.category} className="space-y-0.5 p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                  <span className="text-white font-semibold block text-[11px]">
                    {cat.category}:
                  </span>
                  <span className="text-slate-300 font-light text-[11px]">
                    {cat.skills.join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono text-blue-400 uppercase tracking-widest border-b border-white/[0.06] pb-1">
              // VERIFIED CERTIFICATIONS & CREDENTIALS
            </h3>
            <div className="space-y-1 text-xs font-mono pt-1">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="flex items-center justify-between text-slate-300 py-1 border-b border-white/[0.03]">
                  <span>• {cert.name}</span>
                  <span className="text-emerald-400 font-semibold">{cert.issuer || cert.category}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer note */}
          <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-slate-400">
            <div className="flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified 100% Factual Specification • Ready for Placement & Engineering Interviews</span>
            </div>
            <div>HYDERABAD, INDIA</div>
          </div>
        </div>
      </div>
    </div>
  );
};