import { useState } from 'react';
import type React from 'react';
import { ArrowUpRight, Eye } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectDiagram } from '../components/ProjectDiagram';
import { ProjectModal } from '../components/ProjectModal';
import type { Project } from '../types';
import { soundManager } from '../audio/soundEffects';

export const ProjectsSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const handleSelectProject = (project: Project) => {
    soundManager.playClick();
    setActiveProject(project);
  };

  return (
    <section id="work" className="section-container" aria-label="Selected Engineering Work">
      <div className="border-t border-white/[0.1] pt-16 sm:pt-24 space-y-20">
        {/* Section Header */}
        <div className="flex items-center gap-3 font-mono-tech text-xs text-slate-400 uppercase tracking-widest">
          <span className="text-[--accent-cyan]">03</span>
          <span className="w-8 h-px bg-white/[0.2]" />
          <span>ENGINEERED SOFTWARE & AI SYSTEMS</span>
        </div>

        <div className="space-y-4 max-w-3xl">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-sans-clean font-bold tracking-tight text-white uppercase leading-none">
            SELECTED WORK.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed">
            Four production-grade engineering builds spanning institutional full-stack systems, real-time computer vision kinematics, and deep learning diagnostics.
          </p>
        </div>

        {/* Vertical Cinematic Projects Showcase */}
        <div className="space-y-28 sm:space-y-36">
          {PROJECTS.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <article
                key={project.id}
                className="group relative border-t border-white/[0.08] pt-12 sm:pt-16 transition-all duration-300"
              >
                {/* Thin Animated Accent Line on Hover */}
                <div className="absolute top-0 left-0 w-0 h-px bg-gradient-to-r from-[--accent-cyan] to-[--accent-violet] group-hover:w-full transition-all duration-500 ease-out" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                  {/* Text Column (7 cols) */}
                  <div className={`space-y-6 ${isEven ? 'lg:col-span-7 order-1' : 'lg:col-span-7 order-1 lg:order-2'}`}>
                    {/* Project Header Row */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono-tech text-xs font-semibold text-[--accent-cyan] tracking-widest uppercase transition-transform group-hover:translate-x-1.5 duration-200">
                        // PROJECT {project.number}
                      </span>
                      <span className="font-mono-tech text-[10px] text-slate-400 uppercase tracking-wider">
                        {project.status}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3
                      onClick={() => handleSelectProject(project)}
                      className="text-3xl sm:text-4xl lg:text-5xl font-sans-clean font-bold text-white uppercase tracking-tight group-hover:text-[--accent-cyan] transition-colors duration-200 cursor-pointer"
                    >
                      {project.title}
                    </h3>

                    {/* Subtitle / Category */}
                    <p className="font-mono-tech text-xs text-slate-400 uppercase tracking-wider">
                      {project.category}
                    </p>

                    {/* Resume Factual Description */}
                    <p className="text-base text-slate-300 font-light leading-relaxed max-w-xl">
                      {project.description}
                    </p>

                    {/* Data analytics note if present (from resume) */}
                    {project.analyticsNote && (
                      <div className="p-3.5 rounded bg-white/[0.02] border-l-2 border-[--accent-cyan] font-mono-tech text-xs text-slate-300">
                        <span className="text-[--accent-cyan] font-bold block mb-1">
                          DATA PIPELINE EXTENSION:
                        </span>
                        {project.analyticsNote}
                      </div>
                    )}

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono-tech text-[11px] px-3 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Hover CTA Button */}
                    <div className="pt-4">
                      <button
                        onClick={() => handleSelectProject(project)}
                        className="inline-flex items-center gap-2 font-mono-tech text-xs font-bold uppercase tracking-wider text-white hover:text-[--accent-cyan] border-b border-white/[0.3] hover:border-[--accent-cyan] pb-1 transition-all group/btn cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 text-[--accent-cyan]" />
                        <span>VIEW ARCHITECTURE & IMPLEMENTATION</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </button>
                    </div>
                  </div>

                  {/* Visual Diagram Column (5 cols) */}
                  <div
                    onClick={() => handleSelectProject(project)}
                    className={`cursor-pointer transition-transform duration-300 group-hover:scale-[1.01] ${
                      isEven ? 'lg:col-span-5 order-2' : 'lg:col-span-5 order-2 lg:order-1'
                    }`}
                  >
                    <ProjectDiagram type={project.visualType} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Project Deep-Dive Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
