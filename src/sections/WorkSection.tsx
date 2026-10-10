import { useState } from 'react';
import type React from 'react';
import { ArrowRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectMockup } from '../components/ProjectMockup';
import { ProjectCaseStudyModal } from '../components/ProjectCaseStudyModal';
import type { Project } from '../types';

interface WorkSectionProps {
  onHoverSkills?: (skills: string[]) => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ onHoverSkills }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleMouseEnter = (skills: string[]) => {
    onHoverSkills?.(skills);
  };

  const handleMouseLeave = () => {
    onHoverSkills?.([]);
  };

  return (
    <section id="work" className="py-20 sm:py-32 border-t border-white/[0.08] space-y-24 sm:space-y-36" aria-label="Selected Work">
      {/* Section Header */}
      <div className="space-y-4 max-w-3xl">
        <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white tracking-tight leading-[1.08]">
          SELECTED WORK
        </h2>
        <p className="text-lg sm:text-xl text-slate-400 font-light max-w-2xl">
          A selection of software, AI and full-stack systems I've built.
        </p>
      </div>

      {/* Varied Project Compositions */}
      <div className="space-y-32 sm:space-y-44">
        {/* ── PROJECT 01: Smart Campus Automation System (Visual Left, Content Right) ── */}
        {PROJECTS[0] && (
          <article
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center group"
            onMouseEnter={() => handleMouseEnter(PROJECTS[0].techStack)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="lg:col-span-7 cursor-pointer"
              onClick={() => setSelectedProject(PROJECTS[0])}
            >
              <div className="transition-all duration-300 transform group-hover:scale-[1.015] rounded-xl overflow-hidden shadow-2xl">
                <ProjectMockup type={PROJECTS[0].visualType} />
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono">
                <span className="text-blue-400 font-bold text-sm">{PROJECTS[0].number}</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-300 font-semibold uppercase">{PROJECTS[0].category}</span>
                {PROJECTS[0].timeline && (
                  <>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-400">{PROJECTS[0].timeline}</span>
                  </>
                )}
              </div>

              <h3
                onClick={() => setSelectedProject(PROJECTS[0])}
                className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-tight group-hover:text-blue-400 transition-colors cursor-pointer"
              >
                {PROJECTS[0].title}
              </h3>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                {PROJECTS[0].description}
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {PROJECTS[0].techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs sm:text-sm font-mono px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-6 pt-2">
                <button
                  onClick={() => setSelectedProject(PROJECTS[0])}
                  className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-blue-400 transition-colors cursor-pointer uppercase tracking-wider"
                >
                  <span>VIEW CASE STUDY</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                </button>
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                  PROTOTYPE VERIFIED
                </span>
              </div>
            </div>
          </article>
        )}

        {/* ── PROJECT 02: Physiosis (Visual Right, Content Left) ── */}
        {PROJECTS[1] && (
          <article
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center group"
            onMouseEnter={() => handleMouseEnter(PROJECTS[1].techStack)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="lg:col-span-5 lg:order-1 space-y-6">
              <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono">
                <span className="text-blue-400 font-bold text-sm">{PROJECTS[1].number}</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-300 font-semibold uppercase">{PROJECTS[1].category}</span>
                {PROJECTS[1].timeline && (
                  <>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-400">{PROJECTS[1].timeline}</span>
                  </>
                )}
              </div>

              <h3
                onClick={() => setSelectedProject(PROJECTS[1])}
                className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-tight group-hover:text-blue-400 transition-colors cursor-pointer"
              >
                {PROJECTS[1].title}
              </h3>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                {PROJECTS[1].description}
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {PROJECTS[1].techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs sm:text-sm font-mono px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-6 pt-2">
                <button
                  onClick={() => setSelectedProject(PROJECTS[1])}
                  className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-blue-400 transition-colors cursor-pointer uppercase tracking-wider"
                >
                  <span>VIEW CASE STUDY</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                </button>
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                  RESEARCH BUILD
                </span>
              </div>
            </div>

            <div
              className="lg:col-span-7 lg:order-2 cursor-pointer"
              onClick={() => setSelectedProject(PROJECTS[1])}
            >
              <div className="transition-all duration-300 transform group-hover:scale-[1.015] rounded-xl overflow-hidden shadow-2xl">
                <ProjectMockup type={PROJECTS[1].visualType} />
              </div>
            </div>
          </article>
        )}

        {/* ── PROJECT 03: Smart Study Planner (FULL-WIDTH Visual Showcase) ── */}
        {PROJECTS[2] && (
          <article
            className="space-y-8 group"
            onMouseEnter={() => handleMouseEnter(PROJECTS[2].techStack)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Full-width visual presentation */}
            <div
              className="w-full cursor-pointer transition-all duration-300 transform group-hover:scale-[1.01] rounded-xl overflow-hidden shadow-2xl"
              onClick={() => setSelectedProject(PROJECTS[2])}
            >
              <ProjectMockup type={PROJECTS[2].visualType} />
            </div>

            {/* Editorial Information Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
              <div className="lg:col-span-6 space-y-3">
                <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono">
                  <span className="text-blue-400 font-bold text-sm">{PROJECTS[2].number}</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-slate-300 font-semibold uppercase">{PROJECTS[2].category}</span>
                  {PROJECTS[2].timeline && (
                    <>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-400">{PROJECTS[2].timeline}</span>
                    </>
                  )}
                </div>

                <h3
                  onClick={() => setSelectedProject(PROJECTS[2])}
                  className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight group-hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {PROJECTS[2].title}
                </h3>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                  {PROJECTS[2].description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {PROJECTS[2].techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs sm:text-sm font-mono px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 pt-1">
                  <button
                    onClick={() => setSelectedProject(PROJECTS[2])}
                    className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-blue-400 transition-colors cursor-pointer uppercase tracking-wider"
                  >
                    <span>VIEW CASE STUDY</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                  </button>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                    GDG TECHSPRINT 2025
                  </span>
                </div>
              </div>
            </div>
          </article>
        )}

        {/* ── PROJECT 04: Pneumonia Detection (Visual Left, Content Right) ── */}
        {PROJECTS[3] && (
          <article
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center group"
            onMouseEnter={() => handleMouseEnter(PROJECTS[3].techStack)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="lg:col-span-7 cursor-pointer"
              onClick={() => setSelectedProject(PROJECTS[3])}
            >
              <div className="transition-all duration-300 transform group-hover:scale-[1.015] rounded-xl overflow-hidden shadow-2xl">
                <ProjectMockup type={PROJECTS[3].visualType} />
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono">
                <span className="text-blue-400 font-bold text-sm">{PROJECTS[3].number}</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-300 font-semibold uppercase">{PROJECTS[3].category}</span>
                {PROJECTS[3].timeline && (
                  <>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-400">{PROJECTS[3].timeline}</span>
                  </>
                )}
              </div>

              <h3
                onClick={() => setSelectedProject(PROJECTS[3])}
                className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-tight group-hover:text-blue-400 transition-colors cursor-pointer"
              >
                {PROJECTS[3].title}
              </h3>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                {PROJECTS[3].description}
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {PROJECTS[3].techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs sm:text-sm font-mono px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-6 pt-2">
                <button
                  onClick={() => setSelectedProject(PROJECTS[3])}
                  className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-blue-400 transition-colors cursor-pointer uppercase tracking-wider"
                >
                  <span>VIEW CASE STUDY</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                </button>
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                  ACADEMIC RESEARCH
                </span>
              </div>
            </div>
          </article>
        )}
      </div>

      {/* Case Study Deep Dive Modal */}
      <ProjectCaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
