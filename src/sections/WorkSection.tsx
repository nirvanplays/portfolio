import { useState } from 'react';
import type React from 'react';
import { ArrowRight, Eye } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectMockup } from '../components/ProjectMockup';
import { ProjectCaseStudyModal } from '../components/ProjectCaseStudyModal';
import type { Project } from '../types';

export const WorkSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="space-y-12 pt-8 border-t border-white/[0.08]" aria-label="Selected Work">
      {/* Section Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-3 font-mono text-xs text-slate-400 uppercase tracking-widest">
          <span className="text-blue-400">02</span>
          <span className="w-8 h-px bg-white/[0.2]" />
          <span>SELECTED WORK</span>
        </div>
        <p className="text-sm text-slate-400 font-light">
          A selection of systems and applications I've built.
        </p>
      </div>

      {/* Large Horizontal Project Rows */}
      <div className="space-y-12">
        {PROJECTS.map((project) => (
          <article
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group relative rounded-2xl border border-white/[0.08] hover:border-white/[0.2] bg-[#12151c]/70 hover:bg-[#12151c] p-6 sm:p-8 lg:p-9 transition-all duration-200 cursor-pointer overflow-hidden select-none"
          >
            {/* Subtle Top Accent Hairline on Hover */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Text Column (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                {/* Number & Category */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-blue-400 tracking-wider">
                    {project.number}
                  </span>
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                    {project.status}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight uppercase group-hover:text-blue-400 transition-colors duration-200">
                  {project.title}
                </h3>

                {/* Category Subtitle */}
                <div className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                  {project.category}
                </div>

                {/* One-Sentence Description */}
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-1 transition-opacity duration-200">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-slate-300 group-hover:border-white/[0.15]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action CTA */}
                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-white group-hover:text-blue-400 transition-colors">
                    <Eye className="w-3.5 h-3.5 text-blue-400" />
                    <span>VIEW PROJECT</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>

              {/* Visual Mockup Column (5 cols) */}
              <div className="lg:col-span-5 transform transition-transform duration-200 group-hover:scale-[1.015]">
                <ProjectMockup type={project.visualType} />
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
