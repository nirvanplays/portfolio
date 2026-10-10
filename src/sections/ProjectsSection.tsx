import { useState } from 'react';
import type React from 'react';
import { ArrowUpRight, Eye } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectDiagram } from '../components/ProjectDiagram';
import { ProjectModal } from '../components/ProjectModal';
import type { Project } from '../types';

export const ProjectsSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-container border-t border-slate-100" aria-label="Selected Projects">
      <div className="space-y-12">
        {/* Section Heading */}
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Selected Projects
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full" />
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl pt-1">
            A selection of software, AI and full-stack systems I've built.
          </p>
        </div>

        {/* 4 Large Clean Project Rows */}
        <div className="space-y-16 sm:space-y-20">
          {PROJECTS.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <article
                key={project.id}
                className="p-6 sm:p-8 lg:p-10 rounded-2xl border border-slate-200/90 bg-white shadow-xs hover:border-slate-300 hover:shadow-md transition-all duration-200"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Text Column (7 cols) */}
                  <div className={`space-y-5 ${isEven ? 'lg:col-span-7 order-1' : 'lg:col-span-7 order-1 lg:order-2'}`}>
                    {/* Index & Category */}
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-blue-600">
                        {project.number}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="text-xs font-mono font-medium text-slate-500 uppercase tracking-wider">
                        {project.subtitle}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      onClick={() => setActiveProject(project)}
                      className="text-2xl sm:text-3xl font-bold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer tracking-tight"
                    >
                      {project.title}
                    </h3>

                    {/* Factual Resume Description */}
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      {project.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-slate-100/80 border border-slate-200/60 text-xs font-mono font-medium text-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Button */}
                    <div className="pt-2">
                      <button
                        onClick={() => setActiveProject(project)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-800 font-medium text-xs border border-slate-200 hover:border-blue-200 transition-all cursor-pointer shadow-2xs group"
                      >
                        <Eye className="w-3.5 h-3.5 text-blue-600" />
                        <span>View Architecture & Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                    </div>
                  </div>

                  {/* Visual Column (5 cols) */}
                  <div
                    onClick={() => setActiveProject(project)}
                    className={`cursor-pointer transition-transform duration-200 hover:scale-[1.01] ${
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
