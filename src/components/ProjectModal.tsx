import { useEffect, useRef } from 'react';
import type React from 'react';
import { X, Layers, ArrowRight, ShieldCheck, Activity } from 'lucide-react';
import type { Project } from '../types';
import { ProjectDiagram } from './ProjectDiagram';
import { soundManager } from '../audio/soundEffects';
import gsap from 'gsap';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;

    document.body.style.overflow = 'hidden';
    soundManager.playActivate();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // Subtle GSAP modal scale-in
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, scale: 0.98, y: 15 },
        { opacity: 1, scale: 1, y: 0, duration: 0.3, ease: 'power2.out' }
      );
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project]);

  if (!project) return null;

  const handleClose = () => {
    soundManager.playClick();
    if (contentRef.current) {
      gsap.to(contentRef.current, {
        opacity: 0,
        scale: 0.98,
        y: 10,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: onClose,
      });
    } else {
      onClose();
    }
  };

  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={(e) => {
        if (e.target === modalRef.current) handleClose();
      }}
    >
      <div
        ref={contentRef}
        className="relative w-full max-w-4xl bg-[#0c0e14] border border-white/[0.12] rounded-xl overflow-hidden shadow-2xl my-8 font-sans-clean"
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-white/[0.02]">
          <div className="flex items-center gap-3 font-mono-tech text-xs">
            <span className="text-[--accent-cyan] font-semibold tracking-widest px-2.5 py-0.5 rounded border border-[--accent-cyan]/30 bg-[--accent-cyan]/10">
              MODULE // {project.number}
            </span>
            <span className="text-slate-400 uppercase hidden sm:inline">
              {project.status}
            </span>
          </div>

          <button
            onClick={handleClose}
            className="p-1.5 rounded-md border border-white/[0.1] bg-white/[0.03] text-slate-300 hover:text-white hover:border-white/[0.3] transition-colors cursor-pointer"
            aria-label="Close Project Detail Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[82vh] overflow-y-auto">
          {/* Main Title & Diagram Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <span className="inline-block text-xs font-mono-tech uppercase tracking-widest text-[--accent-cyan]">
                {project.category}
              </span>
              <h2 id="project-modal-title" className="text-2xl sm:text-3xl font-sans-clean font-bold text-white uppercase tracking-tight">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Custom Vector Diagram */}
            <div className="lg:col-span-5 h-56 rounded-lg border border-white/[0.08] bg-[#08090d] relative overflow-hidden flex items-center justify-center">
              <ProjectDiagram type={project.visualType} />
            </div>
          </div>

          {/* Tech Stack Matrix */}
          <div className="space-y-3 pt-2 border-t border-white/[0.08]">
            <div className="text-xs font-mono-tech text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-[--accent-cyan]" />
              <span>Technology Stack & Modules</span>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono-tech text-[11px] px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Architectural Breakdown (Problem -> Solution) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Problem Statement */}
            <div className="p-5 rounded-lg border border-white/[0.08] bg-white/[0.02] space-y-2">
              <div className="flex items-center gap-2 text-rose-400 font-mono-tech text-xs uppercase font-semibold tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                Problem Statement
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* Solution Architecture */}
            <div className="p-5 rounded-lg border border-white/[0.08] bg-white/[0.02] space-y-2">
              <div className="flex items-center gap-2 text-[--accent-cyan] font-mono-tech text-xs uppercase font-semibold tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[--accent-cyan]" />
                Engineering Solution
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Implementation Highlights */}
          <div className="space-y-3 p-5 rounded-lg border border-white/[0.08] bg-white/[0.02]">
            <div className="text-xs font-mono-tech text-[--accent-cyan] uppercase tracking-wider">
              // IMPLEMENTATION SPECIFICATION & WORKFLOW
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {project.implementation.map((step, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <ArrowRight className="w-3.5 h-3.5 text-[--accent-cyan] flex-shrink-0 mt-0.5" />
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Analytics Note if present */}
          {project.analyticsNote && (
            <div className="p-4 rounded-lg border border-[--accent-cyan]/25 bg-[--accent-cyan]/5 flex items-start gap-3">
              <Activity className="w-4 h-4 text-[--accent-cyan] flex-shrink-0 mt-0.5" />
              <div className="text-xs text-slate-200">
                <span className="font-bold uppercase tracking-wider block font-mono-tech text-[10px] text-[--accent-cyan] mb-0.5">
                  DATA ANALYTICS EXTENSION:
                </span>
                {project.analyticsNote}
              </div>
            </div>
          )}

          {/* Bottom Action Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
            <div className="flex items-center gap-2 text-[11px] font-mono-tech text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% VERIFIED RESUME SPECIFICATION</span>
            </div>

            <button
              onClick={handleClose}
              className="w-full sm:w-auto px-5 py-2 text-xs font-mono-tech uppercase tracking-wider text-slate-300 hover:text-white border border-white/[0.15] hover:border-white/[0.3] rounded-md bg-white/[0.02] transition-colors cursor-pointer"
            >
              CLOSE MODULE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
