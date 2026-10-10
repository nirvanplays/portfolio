import { useEffect } from 'react';
import type React from 'react';
import { X, Printer, Mail, ExternalLink, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES, CERTIFICATIONS } from '../data/portfolioData';

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl bg-white border border-slate-300 rounded-2xl overflow-hidden shadow-2xl my-8 font-sans">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <h2 id="resume-modal-title" className="uppercase tracking-wider">
              Resume View & PDF Export
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 border border-slate-300 rounded-lg bg-white hover:bg-slate-50 transition-colors cursor-pointer shadow-2xs"
            >
              <Printer className="w-3.5 h-3.5 text-slate-500" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg border border-slate-200 bg-white text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-colors cursor-pointer"
              aria-label="Close Resume"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Container */}
        <div className="p-6 sm:p-10 space-y-7 max-h-[82vh] overflow-y-auto text-slate-800 bg-white">
          {/* Header */}
          <div className="border-b border-slate-200 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm font-medium text-blue-600 mt-1">
                {PERSONAL_INFO.title}
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                {PERSONAL_INFO.location}
              </p>
            </div>
            <div className="text-xs space-y-1 text-slate-600">
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-800 hover:text-blue-600 underline">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-800 hover:text-blue-600 underline"
                >
                  linkedin.com/in/nirvanreddy
                </a>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1">
              Education
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pt-1">
              <div>
                <div className="font-bold text-slate-900 text-sm">
                  {PERSONAL_INFO.education.degree}
                </div>
                <div className="text-xs text-slate-600">
                  {PERSONAL_INFO.education.institution} · {PERSONAL_INFO.education.location}
                </div>
              </div>
              <div className="text-xs text-slate-600 sm:text-right">
                <div>{PERSONAL_INFO.education.period}</div>
                <div className="text-emerald-700 font-bold">
                  CGPA: {PERSONAL_INFO.education.cgpa}
                </div>
              </div>
            </div>
          </div>

          {/* Technical Projects */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1">
              Technical Projects
            </h3>
            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div className="font-bold text-slate-900 text-sm">
                      {proj.title}
                    </div>
                    <div className="text-xs text-blue-600 font-medium">
                      {proj.subtitle}
                    </div>
                  </div>
                  <div className="text-xs font-mono text-slate-500">
                    Tech Stack: {proj.techStack.join(' • ')}
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {proj.description}
                  </p>
                  {proj.analyticsNote && (
                    <p className="text-xs text-slate-500 italic">
                      Extension: {proj.analyticsNote}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-1">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.category} className="space-y-0.5">
                  <span className="text-slate-900 font-semibold block">
                    {cat.category}:
                  </span>
                  <span className="text-slate-600">
                    {cat.skills.join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1">
              Certifications
            </h3>
            <div className="space-y-1 text-xs pt-1">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="flex items-center justify-between text-slate-700">
                  <span>• {cert.name}</span>
                  <span className="text-slate-500">{cert.issuer || cert.category}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer note */}
          <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-400">
            <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Official Academic & Technical Specification</span>
            </div>
            <div>Hyderabad, Telangana, India</div>
          </div>
        </div>
      </div>
    </div>
  );
};
