'use client';

import { useState } from 'react';
import type React from 'react';
import { ArrowRight, Sparkles, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectMockup } from '../components/ProjectMockup';
import { ProjectCaseStudyModal } from '../components/ProjectCaseStudyModal';
import type { Project } from '../types';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 sm:py-32 border-t border-purple-500/20 space-y-20 select-none relative" aria-label="Projects">
      {/* Background Nebula Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-xs font-mono text-cyan-400">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>MISSION DEPLOYMENTS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-black text-white tracking-tight leading-[1.08]">
          Featured Projects & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Systems Engineering.
          </span>
        </h2>
        <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
          Full-stack web applications, real-time computer vision kinematics, and deep learning diagnostics engineered for high reliability and scale. Click any project to inspect architectural case studies.
        </p>
      </div>

      {/* Project Deployments Grid */}
      <div className="space-y-24 sm:space-y-32">
        {PROJECTS.map((project, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <article
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center group p-6 sm:p-8 rounded-2xl bg-[#07031c]/60 border border-purple-500/25 hover:border-cyan-400/50 backdrop-blur-xl transition-all duration-300 shadow-[0_0_30px_rgba(112,66,248,0.15)] hover:shadow-[0_0_40px_rgba(6,182,212,0.25)]"
            >
              {/* Visual Mockup Container (7 cols) */}
              <div
                className={`lg:col-span-7 cursor-pointer ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                onClick={() => setSelectedProject(project)}
              >
                <div className="transition-all duration-300 transform group-hover:scale-[1.015] rounded-xl overflow-hidden shadow-2xl border border-white/[0.08] group-hover:border-purple-400/40">
                  <ProjectMockup type={project.visualType} />
                </div>
              </div>

              {/* Information & Case Study Launcher (5 cols) */}
              <div className={`lg:col-span-5 space-y-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                {/* Mission Header */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-cyan-400 font-bold tracking-wider">
                    MISSION {project.number}
                  </span>
                  <span className="text-slate-400 uppercase tracking-widest text-[11px]">
                    {project.timeline || 'VERIFIED BUILD'}
                  </span>
                </div>

                {/* Project Title */}
                <h3
                  onClick={() => setSelectedProject(project)}
                  className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-white tracking-tight leading-tight group-hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  {project.title}
                </h3>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-1">
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
                <p className="text-base text-slate-300 font-normal leading-relaxed">
                  {project.description}
                </p>

                {/* Action Trigger */}
                <div className="pt-2 flex items-center gap-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(112,66,248,0.3)] cursor-pointer group/btn"
                  >
                    <span>VIEW CASE STUDY</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <span>SYSTEM SPECS</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Case Study Deep Dive Modal */}
      <ProjectCaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export const SpaceProjectsSection = ProjectsSection;
export default ProjectsSection;
