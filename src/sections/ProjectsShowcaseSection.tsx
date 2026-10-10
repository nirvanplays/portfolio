import { useState } from 'react';
import type React from 'react';
import { Eye } from 'lucide-react';
import { SectionHeading } from '../components/UI/SectionHeading';
import { TechBadge } from '../components/UI/TechBadge';
import { GlowingButton } from '../components/UI/GlowingButton';
import { ProjectVisualizer } from '../three/ProjectVisualizer';
import { ProjectModal } from '../components/ProjectModal';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../types';
import { soundManager } from '../audio/soundEffects';

export const ProjectsShowcaseSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenProject = (project: Project) => {
    soundManager.playClick();
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="section-container section-reveal" aria-label="Projects">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          systemCode="SYS.MOD.03 // SHOWCASE"
          title="Engineered Modules"
          subtitle="Four production-grade builds spanning institutional full-stack systems, real-time computer vision, and deep learning diagnostics."
          className="mb-16"
        />

        {/* Project list — large cinematic cards */}
        <div className="space-y-20 sm:space-y-28">
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className="project-card-reveal group"
                data-cursor="project"
              >
                {/* Project number watermark */}
                <div
                  className="font-display font-black text-white/[0.03] select-none pointer-events-none mb-2 leading-none"
                  style={{ fontSize: 'clamp(4rem, 12vw, 9rem)' }}
                  aria-hidden="true"
                >
                  {project.number}
                </div>

                {/* Main card */}
                <div
                  className="relative rounded-2xl border border-white/[0.07] bg-white/[0.02] overflow-hidden -mt-8 transition-all duration-500 hover:border-[--accent-cyan]/25 hover:shadow-[0_0_60px_rgba(0,212,255,0.06)]"
                >
                  {/* Scan-line accent at top */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[--accent-cyan]/30 to-transparent" />

                  <div className={`grid grid-cols-1 lg:grid-cols-12 items-stretch`}>
                    {/* ── Text content ── */}
                    <div className={`lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between gap-7 ${
                      isEven ? 'order-1' : 'order-1 lg:order-2'
                    }`}>
                      <div className="space-y-5">
                        {/* Header row */}
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="font-mono-tech text-[10px] font-bold tracking-widest px-2.5 py-1 rounded border border-[--accent-cyan]/30 bg-[--accent-cyan]/8 text-[--accent-cyan]">
                            MODULE {project.number}
                          </span>
                          <span className="font-mono-tech text-[10px] text-[--text-muted] uppercase tracking-wider">
                            {project.category}
                          </span>
                          <span className="font-mono-tech text-[9px] text-[--text-muted]/60 ml-auto uppercase hidden sm:block">
                            {project.status}
                          </span>
                        </div>

                        {/* Title */}
                        <h3
                          className="font-display font-black uppercase text-white leading-[0.92] tracking-tight group-hover:text-[--accent-cyan] transition-colors duration-500"
                          style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)' }}
                        >
                          {project.title}
                        </h3>

                        {/* Subtitle */}
                        <p className="font-mono-tech text-[11px] text-[--text-muted]">
                          {project.subtitle}
                        </p>

                        {/* Description */}
                        <p className="font-sans-clean text-sm text-[--text-secondary] leading-[1.75]">
                          {project.description}
                        </p>

                        {/* 3 bullet highlights */}
                        <ul className="space-y-2">
                          {project.bulletPoints.slice(0, 3).map((pt, i) => (
                            <li key={i} className="flex items-start gap-3 text-[12px] text-[--text-muted]">
                              <span className="w-1 h-1 rounded-full bg-[--accent-cyan]/60 flex-shrink-0 mt-[6px]" />
                              {pt}
                            </li>
                          ))}
                        </ul>

                        {/* Analytics note */}
                        {project.analyticsNote && (
                          <div className="p-3 rounded-lg border border-blue-500/15 bg-blue-500/4 font-mono-tech text-[11px] text-blue-300/80">
                            <span className="text-blue-400/80 font-bold block text-[9px] uppercase mb-0.5">
                              Data Pipeline Extension:
                            </span>
                            {project.analyticsNote}
                          </div>
                        )}
                      </div>

                      {/* Footer: stack + CTA */}
                      <div className="space-y-4 pt-5 border-t border-white/[0.05]">
                        <div className="flex flex-wrap gap-1.5">
                          {project.techStack.map((tech) => (
                            <TechBadge key={tech} label={tech} variant="cyan" size="sm" />
                          ))}
                        </div>
                        <div>
                          <GlowingButton
                            variant="primary"
                            size="md"
                            icon={<Eye className="w-3.5 h-3.5" />}
                            onClick={() => handleOpenProject(project)}
                          >
                            Inspect Architecture
                          </GlowingButton>
                        </div>
                      </div>
                    </div>

                    {/* ── 3D Viewport ── */}
                    <div
                      className={`lg:col-span-5 min-h-[280px] sm:min-h-[340px] relative bg-[#030508] flex flex-col border-l border-white/[0.04] overflow-hidden ${
                        isEven ? 'order-2' : 'order-2 lg:order-1'
                      }`}
                    >
                      {/* Viewport header */}
                      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.05] font-mono-tech text-[10px]">
                        <div className="flex items-center gap-1.5 text-[--accent-cyan]/70">
                          <span className="w-1.5 h-1.5 rounded-full bg-[--accent-cyan] animate-ping flex-shrink-0" />
                          <span>3D VISUAL // KINEMATIC SIM</span>
                        </div>
                        <span className="text-[--text-muted]">GPU RENDERED</span>
                      </div>

                      {/* Three.js scene */}
                      <div className="flex-1 relative">
                        <ProjectVisualizer type={project.visualType} />
                      </div>

                      {/* Viewport footer label */}
                      <div className="px-4 py-2.5 border-t border-white/[0.05] font-mono-tech text-[9px] text-[--text-muted] flex items-center justify-between">
                        <span className="truncate max-w-[200px]">{project.visualMetaphor}</span>
                        <span className="text-[--text-muted]/40 flex-shrink-0 ml-2">VISUAL METAPHOR</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project deep-dive modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
