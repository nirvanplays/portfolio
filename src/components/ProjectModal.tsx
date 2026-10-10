import { useEffect } from 'react';
import type React from 'react';
import { X, Layers, ArrowRight, CheckCircle2 } from 'lucide-react';
import type { Project } from '../types';
import { ProjectDiagram } from './ProjectDiagram';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
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
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl bg-white border border-slate-300 rounded-2xl overflow-hidden shadow-2xl my-8 font-sans">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-blue-700 px-2 py-0.5 rounded bg-blue-100">
              Project {project.number}
            </span>
            <span className="text-xs font-mono text-slate-500 uppercase">
              {project.status}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg border border-slate-200 bg-white text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-colors cursor-pointer"
            aria-label="Close Project Detail Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-7 max-h-[82vh] overflow-y-auto">
          {/* Main Title & Diagram Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs font-mono font-semibold text-blue-600 uppercase tracking-wider">
                {project.subtitle}
              </span>
              <h2 id="project-modal-title" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Custom Vector Diagram */}
            <div className="lg:col-span-5 rounded-xl border border-slate-200 bg-slate-50 relative overflow-hidden flex items-center justify-center p-2">
              <ProjectDiagram type={project.visualType} />
            </div>
          </div>

          {/* Tech Stack Matrix */}
          <div className="space-y-2.5 pt-2 border-t border-slate-200">
            <div className="text-xs font-semibold text-slate-700 uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              <span>Technology Stack & Modules</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Architectural Breakdown (Problem -> Solution) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Problem Statement */}
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2">
              <div className="text-xs font-semibold text-rose-700 uppercase tracking-wider">
                Problem Addressed
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                {project.problem}
              </p>
            </div>

            {/* Solution Architecture */}
            <div className="p-5 rounded-xl border border-slate-200 bg-blue-50/30 space-y-2">
              <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
                Engineering Solution
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Implementation Highlights */}
          <div className="space-y-3 p-5 rounded-xl border border-slate-200 bg-white">
            <div className="text-xs font-semibold text-slate-800 uppercase tracking-wider">
              Implementation Specification & Key Details
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {project.implementation.map((step, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <ArrowRight className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Analytics Note if present */}
          {project.analyticsNote && (
            <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/50 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-xs text-slate-700">
                <span className="font-semibold block text-slate-900 mb-0.5">
                  Data Analytics Pipeline Extension:
                </span>
                {project.analyticsNote}
              </div>
            </div>
          )}

          {/* Bottom Action Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-200">
            <div className="text-xs text-slate-500 font-mono">
              Factual Project Record
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 border border-slate-300 hover:border-slate-400 rounded-lg bg-white transition-colors cursor-pointer shadow-2xs"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
