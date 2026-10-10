import { useEffect } from 'react';
import type React from 'react';
import { X, Printer, Mail, ExternalLink, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES, CERTIFICATIONS } from '../data/portfolioData';
import { soundManager } from '../audio/soundEffects';

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
    soundManager.playClick();
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
      <div className="relative w-full max-w-4xl bg-[#0c0e14] border border-white/[0.12] rounded-xl overflow-hidden shadow-2xl my-8 font-sans-clean">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-white/[0.02]">
          <div className="flex items-center gap-2 font-mono-tech text-xs text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <h2 id="resume-modal-title" className="font-semibold uppercase tracking-wider">
              OFFICIAL RESUME VERIFICATION
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono-tech uppercase text-slate-200 border border-white/[0.15] rounded-md bg-white/[0.04] hover:bg-white/[0.08] hover:text-white transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-md border border-white/[0.1] bg-white/[0.03] text-slate-300 hover:text-white hover:border-white/[0.3] transition-colors cursor-pointer"
              aria-label="Close Resume"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Container */}
        <div className="p-6 sm:p-10 space-y-8 max-h-[82vh] overflow-y-auto text-slate-200">
          {/* Header */}
          <div className="border-b border-white/[0.08] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-sans-clean font-extrabold text-white uppercase tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm font-mono-tech text-[--accent-cyan] mt-1">
                {PERSONAL_INFO.title}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                {PERSONAL_INFO.location}
              </p>
            </div>
            <div className="font-mono-tech text-xs space-y-1 text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[--accent-cyan]" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white underline">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <ExternalLink className="w-3.5 h-3.5 text-[--accent-cyan]" />
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white underline"
                >
                  linkedin.com/in/nirvanreddy
                </a>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono-tech text-[--accent-cyan] uppercase tracking-widest border-b border-white/[0.06] pb-1">
              // EDUCATION
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <div className="font-bold text-white text-base">
                  {PERSONAL_INFO.education.degree}
                </div>
                <div className="text-sm text-slate-300">
                  {PERSONAL_INFO.education.institution}
                </div>
              </div>
              <div className="font-mono-tech text-xs text-slate-400 sm:text-right">
                <div>{PERSONAL_INFO.education.period}</div>
                <div className="text-emerald-400 font-bold">
                  CGPA: {PERSONAL_INFO.education.cgpa}
                </div>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono-tech text-[--accent-cyan] uppercase tracking-widest border-b border-white/[0.06] pb-1">
              // TECHNICAL PROJECTS
            </h3>
            <div className="space-y-6">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div className="font-bold text-white text-sm uppercase">
                      {proj.title}
                    </div>
                    <div className="text-xs font-mono-tech text-[--accent-cyan]">
                      {proj.category}
                    </div>
                  </div>
                  <div className="text-xs font-mono-tech text-slate-400">
                    Tech: {proj.techStack.join(' • ')}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    {proj.description}
                  </p>
                  {proj.analyticsNote && (
                    <p className="text-xs font-mono-tech text-slate-400">
                      Extension: {proj.analyticsNote}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono-tech text-[--accent-cyan] uppercase tracking-widest border-b border-white/[0.06] pb-1">
              // TECHNICAL SKILLS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono-tech">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.category} className="space-y-1">
                  <span className="text-white font-semibold block uppercase">
                    {cat.category}:
                  </span>
                  <span className="text-slate-300 font-light">
                    {cat.skills.join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono-tech text-[--accent-cyan] uppercase tracking-widest border-b border-white/[0.06] pb-1">
              // CERTIFICATIONS
            </h3>
            <div className="space-y-2 text-xs font-mono-tech">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="flex items-center justify-between text-slate-300">
                  <span>• {cert.name}</span>
                  <span className="text-emerald-400">{cert.issuer || cert.category}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer note */}
          <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono-tech text-slate-400">
            <div className="flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>VERIFIED 100% FACTUAL RESUME SPECIFICATION</span>
            </div>
            <div>HYDERABAD, TELANGANA, INDIA</div>
          </div>
        </div>
      </div>
    </div>
  );
};
