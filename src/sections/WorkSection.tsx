import { useState } from 'react';
import type React from 'react';
import { ArrowRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectMockup } from '../components/ProjectMockup';
import { ProjectCaseStudyModal } from '../components/ProjectCaseStudyModal';
import type { Project } from '../types';

export const WorkSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="space-y-16 pt-8 border-t border-white/[0.08]" aria-label="Selected Work">
      {/* Section Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-3 font-mono text-xs text-slate-400 uppercase tracking-widest">
          <span className="text-blue-400">01</span>
          <span className="w-8 h-px bg-white/[0.2]" />
          <span>SELECTED WORK</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Systems & Architecture Builds.
        </h2>
        <p className="text-sm text-slate-400 font-light max-w-xl">
          Detailed case studies of full-stack platforms, computer vision pipelines, and machine learning architectures I've built.
        </p>
      </div>

      {/* Mini Case Study Presentation Rows */}
      <div className="space-y-20 sm:space-y-28">
        {PROJECTS.map((project) => (
          <article
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group relative cursor-pointer select-none"
          >
            {/* Animated Underline Across Project Row */}
            <div className="w-full h-px bg-white/[0.08] relative mb-8 overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-0 bg-blue-500/60 transition-all duration-500 ease-out group-hover:w-full" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: [ PROJECT VISUAL ] (6 cols) */}
              <div className="lg:col-span-6 transform transition-transform duration-300 ease-out group-hover:scale-[1.015]">
                <ProjectMockup type={project.visualType} />
              </div>

              {/* Right Column: Mini Case Study Details (6 cols) */}
              <div className="lg:col-span-6 space-y-5">
                {/* Project Number with Subtle Shift */}
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
                  <span className="font-mono text-xs font-bold text-blue-400 tracking-widest transition-transform duration-300 ease-out group-hover:translate-x-1.5 inline-block">
                    {project.number}
                  </span>
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                    {project.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase group-hover:text-blue-400 transition-colors duration-200">
                  {project.title}
                </h3>

                {/* Category */}
                <div className="font-mono text-xs text-slate-400 uppercase tracking-widest font-semibold">
                  {project.category}
                </div>

                {/* Technology Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-slate-300 group-hover:border-white/[0.18] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Short Description */}
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  {project.description}
                </p>

                {/* Action CTA with Animating Arrow */}
                <div className="pt-2">
                  <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-white group-hover:text-blue-400 transition-colors">
                    <span>VIEW CASE STUDY</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-2" />
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Case Study Deep Dive Modal */}
      <ProjectCaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
