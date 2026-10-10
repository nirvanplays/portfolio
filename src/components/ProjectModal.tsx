import { useEffect, useRef } from 'react';
import type React from 'react';
import { X, Terminal, Layers, ArrowRight, ShieldCheck, Activity } from 'lucide-react';
import type { Project } from '../types';
import { TechBadge } from './UI/TechBadge';
import { ProjectVisualizer } from '../three/ProjectVisualizer';
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

    soundManager.playActivate();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // GSAP entrance animation
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, scale: 0.95, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'power3.out' }
      );
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project]);

  if (!project) return null;

  const handleClose = () => {
    soundManager.playClick();
    if (contentRef.current) {
      gsap.to(contentRef.current, {
        opacity: 0,
        scale: 0.96,
        y: 20,
        duration: 0.25,
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xl overflow-y-auto"
      onClick={(e) => {
        if (e.target === modalRef.current) handleClose();
      }}
    >
      <div
        ref={contentRef}
        className="relative w-full max-w-4xl hud-panel bg-[#090d16]/95 border border-cyan-500/40 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.9)] my-8"
      >
        {/* Corner Accents */}
        <span className="corner-bracket corner-tl !w-3 !h-3" />
        <span className="corner-bracket corner-tr !w-3 !h-3" />
        <span className="corner-bracket corner-bl !w-3 !h-3" />
        <span className="corner-bracket corner-br !w-3 !h-3" />

        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-cyan-500/20 bg-slate-900/60">
          <div className="flex items-center gap-3">
            <span className="font-mono-tech text-xs text-cyan-400 font-bold tracking-widest px-2 py-0.5 rounded border border-cyan-500/30 bg-cyan-950/40">
              MODULE // {project.number}
            </span>
            <span className="text-xs text-slate-400 font-mono-tech uppercase hidden sm:inline">
              {project.status}
            </span>
          </div>

          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg border border-slate-700 bg-slate-800/60 text-slate-300 hover:text-white hover:border-cyan-400 transition-colors cursor-pointer"
            aria-label="Close Project Detail Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          {/* Main Title & Category */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-3">
              <span className="inline-block text-xs font-mono-tech uppercase tracking-widest text-cyan-400">
                {project.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white uppercase tracking-tight">
                {project.title}
              </h2>
              <p className="text-sm text-slate-300 font-sans-clean leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Embedded 3D Kinematic Visualizer */}
            <div className="lg:col-span-5 h-56 rounded-lg border border-cyan-500/20 bg-[#06080e] relative overflow-hidden flex items-center justify-center">
              <div className="absolute top-2 left-2 text-[10px] font-mono-tech text-cyan-500/80 uppercase">
                TELEMETRY VIEWPORT
              </div>
              <ProjectVisualizer type={project.visualType} />
              <div className="absolute bottom-2 right-2 text-[9px] font-mono-tech text-slate-500">
                {project.visualMetaphor}
              </div>
            </div>
          </div>

          {/* Tech Stack Matrix */}
          <div className="space-y-2 pt-2 border-t border-slate-800/80">
            <div className="text-xs font-mono-tech text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>Technology Stack & Modules</span>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {project.techStack.map((tech) => (
                <TechBadge key={tech} label={tech} variant="cyan" />
              ))}
            </div>
          </div>

          {/* Architectural Breakdown (Problem -> Solution -> Implementation) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Problem Statement */}
            <div className="p-4 rounded-lg border border-rose-500/20 bg-rose-950/10 space-y-2">
              <div className="flex items-center gap-2 text-rose-400 font-mono-tech text-xs uppercase font-bold tracking-wider">
                <span className="w-2 h-2 rounded-full bg-rose-400" />
                Problem Statement
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-sans-clean leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* Solution Architecture */}
            <div className="p-4 rounded-lg border border-cyan-500/20 bg-cyan-950/10 space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 font-mono-tech text-xs uppercase font-bold tracking-wider">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                Engineering Solution
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-sans-clean leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Implementation Highlights */}
          <div className="space-y-3 p-4 rounded-lg border border-slate-800 bg-slate-900/40">
            <div className="text-xs font-mono-tech text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>Implementation Architecture & Workflow</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {project.implementation.map((step, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Analytics Note if present */}
          {project.analyticsNote && (
            <div className="p-3 rounded border border-blue-500/30 bg-blue-950/20 flex items-start gap-3">
              <Activity className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
              <div className="text-xs text-blue-200">
                <span className="font-bold uppercase tracking-wider block font-mono-tech text-[11px]">
                  DATA ANALYTICS EXTENSION:
                </span>
                {project.analyticsNote}
              </div>
            </div>
          )}

          {/* Bottom Action Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-cyan-500/20">
            <div className="flex items-center gap-2 text-[11px] font-mono-tech text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>DOCUMENTED & VERIFIED RESUME SPECIFICATION</span>
            </div>

            <button
              onClick={handleClose}
              className="w-full sm:w-auto px-5 py-2 text-xs font-mono-tech uppercase tracking-wider text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 rounded bg-slate-800/40 transition-colors cursor-pointer"
            >
              CLOSE MODULE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
