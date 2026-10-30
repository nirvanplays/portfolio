import { useEffect } from 'react';
import type React from 'react';
import {
  X,
  Layers,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Code2,
  Server,
  CheckCircle2,
  ArrowUpRight,
  Activity,
  Sparkles,
} from 'lucide-react';
import type { Project } from '../types';
import { ProjectMockup } from './ProjectMockup';
import { GithubIcon } from './GithubIcon';

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
      <div className="relative w-full max-w-4xl bg-[#0a0520] border border-purple-500/30 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(112,66,248,0.25)] my-8 font-sans">
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between px-6 py-4 border-b border-purple-500/20 bg-[#120833]/90 gap-3">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-cyan-300 px-2.5 py-1 rounded-lg bg-cyan-950/60 border border-cyan-500/40">
              MISSION SPECS // {project.number}
            </span>
            <span className="text-xs font-mono text-purple-300 uppercase hidden sm:inline">
              {project.status}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span>LIVE DEMO</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-purple-500/40 bg-purple-900/30 text-cyan-300 hover:text-white font-mono text-xs uppercase tracking-wider transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>CODE</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            )}

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg border border-white/[0.1] bg-white/[0.04] text-slate-400 hover:text-white hover:border-cyan-400 transition-colors cursor-pointer"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Case Study Body */}
        <div className="p-6 sm:p-10 space-y-10 max-h-[82vh] overflow-y-auto text-slate-300">
          {/* Header & Visual Mockup */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-purple-500/20 pb-8">
            <div className="lg:col-span-7 space-y-3.5">
              <span className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider block">
                {project.category}
              </span>
              <h2 id="case-study-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                {project.description}
              </p>

              {/* Direct Link Badges */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-semibold hover:border-emerald-400 transition-all"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Hosted Live: {new URL(project.liveUrl).hostname}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-purple-950/60 border border-purple-500/40 text-cyan-300 text-xs font-mono font-semibold hover:border-cyan-400 transition-all"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Repository on GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            <div className="lg:col-span-5 rounded-xl overflow-hidden shadow-2xl border border-white/[0.08]">
              <ProjectMockup type={project.visualType} />
            </div>
          </div>

          {/* Quantified System Benchmarks & Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="space-y-3 p-5 rounded-2xl bg-gradient-to-r from-purple-950/40 via-cyan-950/30 to-purple-950/40 border border-cyan-500/30">
              <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-wider font-bold">
                <Activity className="w-4 h-4 text-cyan-400" />
                <span>QUANTIFIED SYSTEM BENCHMARKS & TELEMETRY</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                {project.metrics.map((m) => (
                  <div key={m.label} className="p-3.5 rounded-xl bg-[#07031c]/80 border border-purple-500/30 space-y-1">
                    <div className="text-[11px] font-mono text-slate-400 uppercase">
                      {m.label}
                    </div>
                    <div className="text-base font-mono font-extrabold text-cyan-300">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 1. OVERVIEW */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-wider font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>01 // MISSION OVERVIEW</span>
            </div>
            <p className="text-sm text-slate-300 font-normal leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* 2. WHAT IT DOES */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-wider font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>02 // CAPABILITIES & OPERATIONAL SPECIFICATIONS</span>
            </div>
            <div className="grid grid-cols-1 gap-2.5">
              {project.whatItDoes.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl border border-purple-500/20 bg-purple-950/20 flex items-start gap-3 text-xs sm:text-sm text-slate-200 leading-relaxed"
                >
                  <ArrowRight className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3. TECHNOLOGY */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-wider font-semibold">
              <Layers className="w-3.5 h-3.5" />
              <span>03 // TECHNOLOGY & CLOUD INFRASTRUCTURE</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technology.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-3 py-1.5 rounded-lg bg-purple-900/30 border border-purple-500/30 text-purple-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 4. ARCHITECTURE */}
          <div className="space-y-3 p-5 rounded-xl border border-purple-500/25 bg-[#0e0728]/70">
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-wider font-semibold">
              <Server className="w-3.5 h-3.5" />
              <span>04 // SYSTEM ARCHITECTURE & DATA FLOW</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 font-light leading-relaxed">
              {project.architecture}
            </p>
          </div>

          {/* 5. KEY MODULES */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-wider font-semibold">
              <Cpu className="w-3.5 h-3.5" />
              <span>05 // CORE SUBSYSTEM MODULES</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {project.keyModules.map((mod, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-purple-500/20 bg-[#07031c]/60 space-y-1.5"
                >
                  <div className="text-xs font-mono font-bold text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{mod.name}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {mod.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 6. IMPLEMENTATION */}
          <div className="space-y-3 p-5 rounded-xl border border-purple-500/25 bg-[#07031c]/60">
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-wider font-semibold">
              <Code2 className="w-3.5 h-3.5" />
              <span>06 // IMPLEMENTATION HIGHLIGHTS</span>
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

          {/* Extension Note if present */}
          {project.analyticsNote && (
            <div className="p-4 rounded-xl border border-cyan-500/30 bg-cyan-950/20 text-xs text-slate-200">
              <span className="font-mono text-cyan-400 font-bold block mb-1">
                Data Pipeline & Analytical Extension:
              </span>
              {project.analyticsNote}
            </div>
          )}

          {/* Footer Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-purple-500/20">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Verified Engineering Project Specification • Nirvan Reddy</span>
            </div>

            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5"
                >
                  <span>OPEN LIVE APP</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-lg border border-purple-500/40 bg-purple-900/30 hover:bg-purple-900/50 text-xs font-mono font-medium text-slate-200 hover:text-white transition-colors cursor-pointer"
              >
                CLOSE SPECIFICATION
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
