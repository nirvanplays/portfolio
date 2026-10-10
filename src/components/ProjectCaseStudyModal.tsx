import { useEffect } from 'react';
import type React from 'react';
import { X, Layers, ArrowRight, ShieldCheck, Cpu, Code2 } from 'lucide-react';
import type { Project } from '../types';
import { ProjectMockup } from './ProjectMockup';

interface ProjectCaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectCaseStudyModal: React.FC<ProjectCaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl bg-[#0e1117] border border-white/[0.12] rounded-2xl overflow-hidden shadow-2xl my-8 font-sans">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#141822]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-blue-400 px-2.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/30">
              PROJECT {project.number}
            </span>
            <span className="text-xs font-mono text-slate-400 uppercase hidden sm:inline">
              {project.status}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg border border-white/[0.1] bg-white/[0.03] text-slate-400 hover:text-white hover:border-white/[0.3] transition-colors cursor-pointer"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Case Study Body */}
        <div className="p-6 sm:p-10 space-y-9 max-h-[82vh] overflow-y-auto text-slate-300">
          {/* Header & Visual Mockup */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-white/[0.08] pb-8">
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider block">
                {project.category}
              </span>
              <h2 id="case-study-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                {project.overview}
              </p>
            </div>

            <div className="lg:col-span-5 rounded-xl overflow-hidden">
              <ProjectMockup type={project.visualType} />
            </div>
          </div>

          {/* Tech Stack Matrix */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-slate-400 uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-blue-400" />
              <span>Technology Stack</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-3 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* What I Built */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-blue-400 uppercase tracking-wider">
              <Code2 className="w-3.5 h-3.5" />
              <span>What I Built</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.whatIBuilt.map((point, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works & Key Challenge */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl border border-white/[0.08] bg-[#121620] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold">
                <Cpu className="w-3.5 h-3.5" />
                <span>How It Works</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                {project.howItWorks}
              </p>
            </div>

            <div className="p-5 rounded-xl border border-white/[0.08] bg-[#121620] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider font-semibold">
                <span>Key Technical Challenge</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                {project.challenge}
              </p>
            </div>
          </div>

          {/* Implementation Details */}
          <div className="space-y-3 p-5 rounded-xl border border-white/[0.08] bg-white/[0.02]">
            <div className="font-mono text-xs text-slate-400 uppercase tracking-wider">
              // Implementation Details
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {project.implementation.map((step, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <ArrowRight className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Extension Note if present */}
          {project.analyticsNote && (
            <div className="p-4 rounded-xl border border-blue-500/30 bg-blue-500/5 text-xs text-slate-200">
              <span className="font-mono text-blue-400 font-bold block mb-1">
                Data Pipeline Extension:
              </span>
              {project.analyticsNote}
            </div>
          )}

          {/* Footer Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
            <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Verified Engineering Project Specification</span>
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg border border-white/[0.15] bg-white/[0.03] hover:bg-white/[0.08] text-xs font-mono font-medium text-slate-200 hover:text-white transition-colors cursor-pointer"
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
