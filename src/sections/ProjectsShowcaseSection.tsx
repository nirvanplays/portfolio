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
    <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <SectionHeading
        systemCode="SYS.MOD.03 // PROJECT_SHOWCASE"
        title="ENGINEERED MODULES & SHOWCASE"
        subtitle="Immersive technological architectures spanning full-stack institutional systems, real-time computer vision biomechanics, and convolutional deep learning models."
        badge="PRODUCTION_PROTOTYPES"
      />

      <div className="space-y-16 sm:space-y-24">
        {PROJECTS.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={project.id}
              className="hud-panel rounded-2xl border border-cyan-500/25 overflow-hidden transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(0,240,255,0.15)] group"
            >
              {/* Corner Brackets */}
              <span className="corner-bracket corner-tl !w-3 !h-3" />
              <span className="corner-bracket corner-tr !w-3 !h-3" />
              <span className="corner-bracket corner-bl !w-3 !h-3" />
              <span className="corner-bracket corner-br !w-3 !h-3" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch p-6 sm:p-10">
                {/* Text Content Column */}
                <div
                  className={`lg:col-span-7 flex flex-col justify-between space-y-6 ${
                    isEven ? 'order-1' : 'order-1 lg:order-2'
                  }`}
                >
                  <div className="space-y-4">
                    {/* Module Number & Category */}
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-2.5 py-1 rounded font-mono-tech text-xs font-bold bg-cyan-950/60 border border-cyan-500/40 text-cyan-300">
                        PROJECT {project.number}
                      </span>
                      <span className="text-xs font-mono-tech text-cyan-400 uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="text-[10px] font-mono-tech text-slate-500 uppercase ml-auto hidden sm:inline">
                        {project.status}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white uppercase tracking-tight group-hover:text-cyan-200 transition-colors">
                      {project.title}
                    </h3>

                    {/* Subtitle / Focus */}
                    <p className="text-xs sm:text-sm font-mono-tech text-slate-400">
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-slate-300 font-sans-clean leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Technical Highlights */}
                    <div className="space-y-2 pt-2">
                      {project.bulletPoints.slice(0, 3).map((pt, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0 mt-1.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>

                    {/* Analytics Note if exists */}
                    {project.analyticsNote && (
                      <div className="p-2.5 rounded bg-blue-950/30 border border-blue-500/25 text-xs text-blue-300 font-mono-tech">
                        <span className="font-bold uppercase text-[10px] block text-blue-400">
                          DATA PIPELINE NOTE:
                        </span>
                        {project.analyticsNote}
                      </div>
                    )}
                  </div>

                  {/* Tech Stack Chips & Action CTA */}
                  <div className="space-y-4 pt-4 border-t border-slate-800">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.techStack.map((tech) => (
                        <TechBadge key={tech} label={tech} variant="cyan" size="sm" />
                      ))}
                    </div>

                    <div className="flex items-center gap-4 pt-2">
                      <GlowingButton
                        variant="primary"
                        size="md"
                        icon={<Eye className="w-4 h-4" />}
                        onClick={() => handleOpenProject(project)}
                      >
                        Inspect Architecture & Details
                      </GlowingButton>
                    </div>
                  </div>
                </div>

                {/* 3D Telemetry Viewport Column */}
                <div
                  className={`lg:col-span-5 rounded-xl border border-cyan-500/20 bg-[#060910] p-4 flex flex-col justify-between relative overflow-hidden min-h-[300px] sm:min-h-[360px] ${
                    isEven ? 'order-2' : 'order-2 lg:order-1'
                  }`}
                >
                  {/* Viewport Top Header */}
                  <div className="flex items-center justify-between text-[11px] font-mono-tech text-cyan-400/80 border-b border-cyan-500/10 pb-2 z-10">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                      <span>3D KINEMATIC SIMULATOR</span>
                    </span>
                    <span className="text-[10px] text-slate-500">60 FPS // GPU</span>
                  </div>

                  {/* 3D Canvas Visualizer */}
                  <div className="flex-1 w-full h-full relative my-2">
                    <ProjectVisualizer type={project.visualType} />
                  </div>

                  {/* Visual Metaphor Notice */}
                  <div className="border-t border-cyan-500/10 pt-2 text-[10px] font-mono-tech text-slate-400 flex items-center justify-between z-10">
                    <span className="truncate">{project.visualMetaphor}</span>
                    <span className="text-[9px] uppercase tracking-wider text-cyan-500/70 ml-2 flex-shrink-0">
                      METAPHOR
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal Popup */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
