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
    <section id="work" className="py-20 sm:py-32 border-t border-white/[0.08] space-y-24 sm:space-y-36" aria-label="Selected Work">
      {/* Section Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="font-mono text-xs sm:text-sm text-blue-400 font-semibold uppercase tracking-widest block">
          SELECTED WORK
        </span>
        <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white tracking-tight leading-[1.08]">
          A selection of software, AI and full-stack systems I've built.
        </h2>
      </div>

      {/* 4 Large Alternating Project Experiences */}
      <div className="space-y-32 sm:space-y-44">
        {PROJECTS.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <article
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center group"
            >
              {/* Image / UI Visual (7 cols) */}
              <div
                className={`lg:col-span-7 cursor-pointer ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}
                onClick={() => setSelectedProject(project)}
              >
                <div className="transition-all duration-300 transform group-hover:scale-[1.02] rounded-xl overflow-hidden shadow-2xl">
                  <ProjectMockup type={project.visualType} />
                </div>
              </div>

              {/* Project Content Description (5 cols) */}
              <div
                className={`lg:col-span-5 space-y-6 ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                {/* Number & Category */}
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-bold text-blue-400 tracking-wider">
                    {project.number}
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3
                  onClick={() => setSelectedProject(project)}
                  className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight group-hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {project.title}
                </h3>

                {/* Short Description (18px) */}
                <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs sm:text-sm font-medium px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action CTA */}
                <div className="flex items-center gap-6 pt-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-blue-400 transition-colors cursor-pointer uppercase tracking-wider"
                  >
                    <span>VIEW PROJECT</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-400 hover:text-white transition-colors uppercase tracking-wider"
                    >
                      <span>GITHUB</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
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
