'use client';

import { useState } from 'react';
import type React from 'react';
import { ArrowRight, Sparkles, ExternalLink, ArrowUpRight, Activity, ShieldCheck } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectMockup } from '../components/ProjectMockup';
import { ProjectCaseStudyModal } from '../components/ProjectCaseStudyModal';
import { GithubIcon } from '../components/GithubIcon';
import type { Project } from '../types';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 sm:py-32 border-t border-purple-500/20 space-y-20 select-none relative" aria-label="Projects">
      {/* Background Section Glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-900/40 border border-purple-500/40 text-xs font-mono text-cyan-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>FEATURED MISSIONS • PRODUCTION DEPLOYMENTS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            ENGINEERED SYSTEMS &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-cyan-400">
              DEPLOYMENTS.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Real production systems built with full-stack scalability, real-time computer vision kinematics, and deep neural diagnostic networks. All projects include live deployments and public source code.
          </p>
        </div>

        <div className="text-xs font-mono text-slate-400 md:text-right space-y-1">
          <div className="text-cyan-300 font-bold">4 VERIFIED MISSIONS</div>
          <div>FULL-STACK • CV • AI/ML</div>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-16 sm:space-y-24">
        {PROJECTS.map((project, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <article
              key={project.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-8 rounded-3xl bg-[#07031e]/70 border border-purple-500/20 backdrop-blur-xl hover:border-purple-500/50 transition-all duration-300 shadow-[0_4px_30px_rgba(112,66,248,0.1)] group`}
            >
              {/* Left/Right UI Mockup (7 cols) */}
              <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <div
                  onClick={() => setSelectedProject(project)}
                  className="cursor-pointer transition-transform duration-300 group-hover:scale-[1.01]"
                  title="Click to view deep-dive architecture case study"
                >
                  <ProjectMockup project={project} />
                </div>
              </div>

              {/* Right/Left Content (5 cols) */}
              <div className={`lg:col-span-5 space-y-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                {/* Mission Index + Category */}
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-1 rounded-md">
                    MISSION 0{idx + 1}
                  </span>
                  <span className="text-xs font-mono text-purple-300 uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-cyan-200 transition-colors">
                  {project.title}
                </h3>

                {/* Google Tech Highlight Badge */}
                {project.googleTech && project.googleTech.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300 bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5 text-amber-400" />
                      <span>Google Tech</span>
                    </span>
                    {project.googleTech.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Quantified System Metrics */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid grid-cols-3 gap-2 pt-0.5">
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="px-2.5 py-1.5 rounded-lg bg-[#0c0528]/80 border border-purple-500/25 text-left"
                      >
                        <div className="text-[10px] font-mono text-slate-400 uppercase truncate">
                          {m.label}
                        </div>
                        <div className="text-xs font-mono font-bold text-cyan-300 truncate">
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-0.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-purple-900/30 border border-purple-500/30 text-purple-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                  {project.description}
                </p>

                {/* Action Row: Live Demo + GitHub + Case Study */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:scale-[1.03] cursor-pointer"
                      title={`Open live deployed project: ${project.title}`}
                    >
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                      <span>LIVE DEMO</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-purple-500/40 hover:border-cyan-400 bg-purple-950/40 hover:bg-purple-900/40 text-slate-200 hover:text-white font-mono text-xs uppercase tracking-wider transition-all hover:scale-[1.02] cursor-pointer"
                      title={`Inspect source code on GitHub: ${project.title}`}
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
                      <span>GITHUB</span>
                      <ArrowUpRight className="w-3 h-3 text-slate-400" />
                    </a>
                  )}

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-white/[0.12] hover:border-white/[0.3] bg-white/[0.03] hover:bg-white/[0.06] text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer group/btn"
                  >
                    <span>CASE STUDY</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1 text-cyan-400" />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Case Study Modal */}
      <ProjectCaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export const SpaceProjectsSection = ProjectsSection;
export default ProjectsSection;