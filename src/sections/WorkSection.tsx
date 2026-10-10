import { useState, useEffect } from 'react';
import type React from 'react';
import { ArrowRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectMockup } from '../components/ProjectMockup';
import { ProjectCaseStudyModal } from '../components/ProjectCaseStudyModal';
import type { Project } from '../types';

interface WorkSectionProps {
  onHoverSkills?: (skills: string[]) => void;
}

const PROJECT_INDEX = [
  { id: 'project-01', number: '01', shortName: 'SMART CAMPUS' },
  { id: 'project-02', number: '02', shortName: 'PHYSIOSIS' },
  { id: 'project-03', number: '03', shortName: 'SMART STUDY' },
  { id: 'project-04', number: '04', shortName: 'PNEUMONIA' },
];

export const WorkSection: React.FC<WorkSectionProps> = ({ onHoverSkills }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.45;
      const projectElements = [
        document.getElementById('project-01'),
        document.getElementById('project-02'),
        document.getElementById('project-03'),
        document.getElementById('project-04'),
      ];

      for (let i = projectElements.length - 1; i >= 0; i--) {
        const el = projectElements[i];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerPoint) {
            setActiveIndex(i);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProject = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleMouseEnter = (skills: string[]) => {
    onHoverSkills?.(skills);
  };

  const handleMouseLeave = () => {
    onHoverSkills?.([]);
  };

  return (
    <section id="work" className="py-24 sm:py-36 border-t border-white/[0.08] space-y-20 sm:space-y-28" aria-label="Selected Work">
      {/* Section Header */}
      <div className="space-y-4 max-w-3xl">
        <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white tracking-tight leading-[1.08]">
          SELECTED WORK
        </h2>
        <p className="text-lg sm:text-xl text-slate-400 font-light max-w-2xl">
          A selection of software, AI and full-stack systems I've built.
        </p>
      </div>

      {/* Main Container with Fixed/Sticky Project Index on Left */}
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
        {/* Fixed / Sticky Project Index on Left (2 cols) */}
        <aside className="hidden lg:block lg:col-span-2 select-none" aria-label="Project Index">
          <div className="sticky top-32 space-y-6">
            <div className="text-[11px] font-mono font-bold tracking-widest text-slate-500 uppercase">
              INDEX
            </div>
            <nav className="space-y-4">
              {PROJECT_INDEX.map((proj, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={proj.id}
                    onClick={() => scrollToProject(proj.id)}
                    className={`group flex flex-col text-left transition-all cursor-pointer pl-3 border-l-2 ${
                      isActive
                        ? 'border-blue-500 text-blue-400'
                        : 'border-transparent text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    <span
                      className={`font-mono text-xs font-bold transition-colors ${
                        isActive ? 'text-blue-400' : 'text-slate-600 group-hover:text-slate-400'
                      }`}
                    >
                      {proj.number}
                    </span>
                    <span
                      className={`text-xs font-semibold tracking-wider uppercase transition-colors ${
                        isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'
                      }`}
                    >
                      {proj.shortName}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Project Stories (10 cols on lg) */}
        <div className="lg:col-span-10 space-y-40 sm:space-y-48">
          {/* ── PROJECT 01: Smart Campus Automation System ── */}
          {PROJECTS[0] && (
            <article
              id="project-01"
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center group pt-4"
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

              <div className="lg:col-span-5 space-y-5">
                {/* 01 + Category */}
                <div className="space-y-1">
                  <span className="font-mono text-xs font-bold text-blue-400 uppercase tracking-widest block">
                    {PROJECTS[0].number}
                  </span>
                  <span className="font-mono text-xs text-slate-400 font-semibold uppercase tracking-wider block">
                    {PROJECTS[0].category}
                  </span>
                </div>

                {/* White Project Title */}
                <h3
                  onClick={() => setSelectedProject(PROJECTS[0])}
                  className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight leading-tight group-hover:text-slate-100 transition-colors cursor-pointer"
                >
                  SMART CAMPUS <br />
                  AUTOMATION SYSTEM
                </h3>

                {/* Tech Stack String */}
                <div className="text-xs sm:text-sm font-mono text-slate-300">
                  {PROJECTS[0].techStack.join(' · ')}
                </div>

                {/* Description */}
                <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                  {PROJECTS[0].description}
                </p>

                {/* Blue Interactive Action */}
                <div className="pt-2">
                  <button
                    onClick={() => setSelectedProject(PROJECTS[0])}
                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer uppercase tracking-wider group/btn"
                  >
                    <span>VIEW CASE STUDY</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1.5" />
                  </button>
                </div>
              </div>
            </article>
          )}

          {/* ── PROJECT 02: Physiosis ── */}
          {PROJECTS[1] && (
            <article
              id="project-02"
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center group pt-4"
              onMouseEnter={() => handleMouseEnter(PROJECTS[1].techStack)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="lg:col-span-5 lg:order-1 space-y-5">
                {/* 02 + Category */}
                <div className="space-y-1">
                  <span className="font-mono text-xs font-bold text-blue-400 uppercase tracking-widest block">
                    {PROJECTS[1].number}
                  </span>
                  <span className="font-mono text-xs text-slate-400 font-semibold uppercase tracking-wider block">
                    {PROJECTS[1].category}
                  </span>
                </div>

                {/* White Project Title */}
                <h3
                  onClick={() => setSelectedProject(PROJECTS[1])}
                  className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight leading-tight group-hover:text-slate-100 transition-colors cursor-pointer"
                >
                  PHYSIOSIS GAIT <br />
                  ANALYSIS SYSTEM
                </h3>

                {/* Tech Stack String */}
                <div className="text-xs sm:text-sm font-mono text-slate-300">
                  {PROJECTS[1].techStack.join(' · ')}
                </div>

                {/* Description */}
                <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                  {PROJECTS[1].description}
                </p>

                {/* Blue Interactive Action */}
                <div className="pt-2">
                  <button
                    onClick={() => setSelectedProject(PROJECTS[1])}
                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer uppercase tracking-wider group/btn"
                  >
                    <span>VIEW CASE STUDY</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1.5" />
                  </button>
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

          {/* ── PROJECT 03: Smart Study Planner (Full-Width Visual Showcase) ── */}
          {PROJECTS[2] && (
            <article
              id="project-03"
              className="space-y-8 group pt-4"
              onMouseEnter={() => handleMouseEnter(PROJECTS[2].techStack)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="w-full cursor-pointer transition-all duration-300 transform group-hover:scale-[1.01] rounded-xl overflow-hidden shadow-2xl"
                onClick={() => setSelectedProject(PROJECTS[2])}
              >
                <ProjectMockup type={PROJECTS[2].visualType} />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
                <div className="lg:col-span-6 space-y-4">
                  {/* 03 + Category */}
                  <div className="space-y-1">
                    <span className="font-mono text-xs font-bold text-blue-400 uppercase tracking-widest block">
                      {PROJECTS[2].number}
                    </span>
                    <span className="font-mono text-xs text-slate-400 font-semibold uppercase tracking-wider block">
                      {PROJECTS[2].category}
                    </span>
                  </div>

                  {/* White Project Title */}
                  <h3
                    onClick={() => setSelectedProject(PROJECTS[2])}
                    className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight group-hover:text-slate-100 transition-colors cursor-pointer"
                  >
                    SMART STUDY PLANNER & <br />
                    PRODUCTIVITY TRACKER
                  </h3>

                  {/* Tech Stack String */}
                  <div className="text-xs sm:text-sm font-mono text-slate-300">
                    {PROJECTS[2].techStack.join(' · ')}
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-4">
                  <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                    {PROJECTS[2].description}
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={() => setSelectedProject(PROJECTS[2])}
                      className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer uppercase tracking-wider group/btn"
                    >
                      <span>VIEW CASE STUDY</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1.5" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* ── PROJECT 04: Pneumonia Detection ── */}
          {PROJECTS[3] && (
            <article
              id="project-04"
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center group pt-4"
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

              <div className="lg:col-span-5 space-y-5">
                {/* 04 + Category */}
                <div className="space-y-1">
                  <span className="font-mono text-xs font-bold text-blue-400 uppercase tracking-widest block">
                    {PROJECTS[3].number}
                  </span>
                  <span className="font-mono text-xs text-slate-400 font-semibold uppercase tracking-wider block">
                    {PROJECTS[3].category}
                  </span>
                </div>

                {/* White Project Title */}
                <h3
                  onClick={() => setSelectedProject(PROJECTS[3])}
                  className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight leading-tight group-hover:text-slate-100 transition-colors cursor-pointer"
                >
                  PNEUMONIA DETECTION <br />
                  USING DEEP LEARNING
                </h3>

                {/* Tech Stack String */}
                <div className="text-xs sm:text-sm font-mono text-slate-300">
                  {PROJECTS[3].techStack.join(' · ')}
                </div>

                {/* Description */}
                <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                  {PROJECTS[3].description}
                </p>

                {/* Blue Interactive Action */}
                <div className="pt-2">
                  <button
                    onClick={() => setSelectedProject(PROJECTS[3])}
                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer uppercase tracking-wider group/btn"
                  >
                    <span>VIEW CASE STUDY</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1.5" />
                  </button>
                </div>
              </div>
            </article>
          )}
        </div>
      </div>

      {/* Case Study Deep Dive Modal */}
      <ProjectCaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
