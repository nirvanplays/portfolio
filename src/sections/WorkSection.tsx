import { useState } from 'react';
import type React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectMockup } from '../components/ProjectMockup';
import { ProjectCaseStudyModal } from '../components/ProjectCaseStudyModal';
import type { Project } from '../types';

export const WorkSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-16 sm:py-24 border-t border-white/[0.08] space-y-20 sm:space-y-28" aria-label="Projects">
      {/* Section Header */}
      <div className="space-y-3">
        <div className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-widest">
          FEATURED PROJECTS
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Systems & Products I've Built.
        </h2>
        <p className="text-base text-slate-400 font-light max-w-2xl">
          Four applied systems spanning full-stack web platforms, real-time computer vision kinematics, and deep learning pipelines.
        </p>
      </div>

      {/* 4 Large Alternating Project Presentations */}
      <div className="space-y-28 sm:space-y-36">
        {PROJECTS.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <article
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
            >
              {/* Visual Presentation (7 cols) */}
              <div
                className={`lg:col-span-7 cursor-pointer group ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}
                onClick={() => setSelectedProject(project)}
              >
                <div className="transition-all duration-300 transform group-hover:scale-[1.01] group-hover:border-white/[0.18]">
                  <ProjectMockup type={project.visualType} />
                </div>
              </div>

              {/* Content Description (5 cols) */}
              <div
                className={`lg:col-span-5 space-y-6 ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                {/* Number & Category */}
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-blue-400">
                    {project.number}
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3
                  onClick={() => setSelectedProject(project)}
                  className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                  {project.description}
                </p>

                {/* Technology Chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action CTA Buttons */}
                <div className="flex items-center gap-4 pt-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-blue-400 transition-colors cursor-pointer group uppercase tracking-wider"
                  >
                    <span>VIEW PROJECT</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>

                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors uppercase tracking-wider"
                    >
                      <span>GITHUB</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : null}
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
