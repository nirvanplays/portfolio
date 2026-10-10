import { useEffect } from 'react';
import type React from 'react';
import { X, Printer, Mail, ExternalLink, ShieldCheck, Check } from 'lucide-react';
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl bg-[#090d16] border border-cyan-500/40 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.9)] my-8">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-cyan-500/20 bg-slate-900/80">
          <div className="flex items-center gap-2 font-mono-tech text-xs text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <h2 id="resume-modal-title" className="font-bold uppercase tracking-wider">OFFICIAL RESUME VERIFICATION</h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono-tech uppercase text-cyan-300 border border-cyan-500/30 rounded bg-cyan-950/40 hover:bg-cyan-900/60 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded border border-slate-700 bg-slate-800 text-slate-300 hover:text-white hover:border-cyan-400 transition-colors cursor-pointer"
              aria-label="Close Resume"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Container */}
        <div className="p-6 sm:p-10 space-y-6 max-h-[82vh] overflow-y-auto font-sans-clean text-slate-200">
          {/* Header */}
          <div className="border-b border-slate-800 pb-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm font-mono-tech text-cyan-400 mt-1">
                {PERSONAL_INFO.title}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                {PERSONAL_INFO.location}
              </p>
            </div>
            <div className="font-mono-tech text-xs space-y-1 text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-cyan-300 underline">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 underline"
                >
                  linkedin.com/in/nirvanreddy
                </a>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono-tech uppercase font-bold tracking-widest text-cyan-400 border-b border-cyan-500/20 pb-1">
              EDUCATION
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
              <span className="font-bold text-white">
                {PERSONAL_INFO.education.institution}
              </span>
              <span className="font-mono-tech text-xs text-slate-400">
                {PERSONAL_INFO.education.period}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-300">
              <span>{PERSONAL_INFO.education.degree}</span>
              <span className="font-mono-tech text-cyan-300 font-semibold">
                CGPA: {PERSONAL_INFO.education.cgpa}
              </span>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono-tech uppercase font-bold tracking-widest text-cyan-400 border-b border-cyan-500/20 pb-1">
              KEY TECHNICAL PROJECTS
            </h2>
            {PROJECTS.map((proj) => (
              <div key={proj.id} className="space-y-1.5 text-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <span className="font-bold text-white text-sm">
                    {proj.title}
                  </span>
                  <span className="font-mono-tech text-[11px] text-cyan-400/90">
                    {proj.category}
                  </span>
                </div>
                <div className="font-mono-tech text-[11px] text-slate-400">
                  Tech: {proj.techStack.join(', ')}
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-300 pl-1 leading-relaxed">
                  {proj.bulletPoints.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
                {proj.analyticsNote && (
                  <p className="text-[11px] text-blue-300 pl-2 border-l border-blue-500/40 mt-1 italic">
                    Note: {proj.analyticsNote}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Skills Breakdown */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono-tech uppercase font-bold tracking-widest text-cyan-400 border-b border-cyan-500/20 pb-1">
              TECHNICAL COMPETENCIES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.category} className="p-2 rounded bg-slate-900/50 border border-slate-800">
                  <span className="font-mono-tech font-bold text-cyan-300 block mb-0.5">
                    {cat.category}:
                  </span>
                  <span className="text-slate-300">{cat.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono-tech uppercase font-bold tracking-widest text-cyan-400 border-b border-cyan-500/20 pb-1">
              CERTIFICATIONS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="flex items-center gap-2 p-2 rounded bg-slate-900/30 border border-slate-800">
                  <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white block">{cert.name}</span>
                    {cert.issuer && (
                      <span className="text-[10px] text-cyan-400 font-mono-tech">{cert.issuer}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Verification Badge */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono-tech text-slate-500">
            <div className="flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>STRICT FACTUAL ADHERENCE TO SOURCE RESUME</span>
            </div>
            <span>HYDERABAD, INDIA</span>
          </div>
        </div>
      </div>
    </div>
  );
};
