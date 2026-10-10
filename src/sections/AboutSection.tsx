import type React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GraduationCap, Cpu, Layers, GitBranch } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-container" aria-label="About">
      <div className="border-t border-white/[0.1] pt-16 sm:pt-24 space-y-16">
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 font-mono-tech text-xs text-slate-400 uppercase tracking-widest">
          <span className="text-[--accent-cyan]">01</span>
          <span className="w-8 h-px bg-white/[0.2]" />
          <span>PROFILE & PHILOSOPHY</span>
        </div>

        {/* Large Editorial Headline */}
        <div className="space-y-6 max-w-4xl">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans-clean font-bold tracking-tight text-white uppercase leading-[1.05]">
            Systems Engineering Grounded in First Principles.
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-3xl">
            <p>
              I build software at the intersection of full-stack web engineering, applied machine learning, and computer vision. Rather than treating AI as an isolated black box, I focus on integrating intelligent models into production-ready software architectures—from real-time video kinematic tracking to role-governed web platforms.
            </p>
            <p className="text-slate-400 text-sm sm:text-base">
              Currently an undergraduate at{' '}
              <span className="text-slate-200 font-normal">
                {PERSONAL_INFO.education.institution}
              </span>{' '}
              maintaining an academic standing of{' '}
              <span className="font-mono-tech text-white font-semibold">
                CGPA {PERSONAL_INFO.education.cgpa}
              </span>
              , I balance theoretical computer science rigor with hands-on systems development, hackathon prototyping, and certified cloud infrastructure.
            </p>
          </div>
        </div>

        {/* 4-Pillar Architectural Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-white/[0.08]">
          {/* Pillar 1: Academic Pedigree */}
          <div className="editorial-panel rounded-xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5 font-mono-tech text-xs text-[--accent-cyan] tracking-wider uppercase">
                <GraduationCap className="w-4 h-4" />
                <span>Academic Pedigree</span>
              </div>
              <span className="font-mono-tech text-xs text-emerald-400 font-semibold">
                CGPA: {PERSONAL_INFO.education.cgpa}
              </span>
            </div>

            <div className="space-y-1">
              <h3 className="font-sans-clean font-bold text-white text-lg">
                {PERSONAL_INFO.education.degree}
              </h3>
              <p className="text-sm text-slate-300">
                {PERSONAL_INFO.education.institution} · {PERSONAL_INFO.education.period}
              </p>
            </div>

            <p className="text-xs text-slate-400 font-light leading-relaxed pt-1">
              Core coursework: Data Structures & Algorithms, Object-Oriented Analysis, Operating Systems, Database Management Systems, Computer Networks, and Discrete Mathematics.
            </p>
          </div>

          {/* Pillar 2: Full-Stack Architecture */}
          <div className="editorial-panel rounded-xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5 font-mono-tech text-xs text-[--accent-cyan] tracking-wider uppercase">
                <Layers className="w-4 h-4" />
                <span>Full-Stack Web Systems</span>
              </div>
              <span className="font-mono-tech text-xs text-slate-400">
                MERN & PYTHON
              </span>
            </div>

            <div className="space-y-1">
              <h3 className="font-sans-clean font-bold text-white text-lg">
                Distributed Services & Web Interfaces
              </h3>
              <p className="text-sm text-slate-300">
                Modular React.js, Node.js, Express, MongoDB, and FastAPI runtimes.
              </p>
            </div>

            <p className="text-xs text-slate-400 font-light leading-relaxed pt-1">
              Engineered role-based access control, stateless JWT authentication layers, RESTful schema contracts, and decoupled responsive user interfaces.
            </p>
          </div>

          {/* Pillar 3: Applied AI & Computer Vision */}
          <div className="editorial-panel rounded-xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5 font-mono-tech text-xs text-[--accent-cyan] tracking-wider uppercase">
                <Cpu className="w-4 h-4" />
                <span>Applied AI & Computer Vision</span>
              </div>
              <span className="font-mono-tech text-xs text-slate-400">
                KINEMATICS & DL
              </span>
            </div>

            <div className="space-y-1">
              <h3 className="font-sans-clean font-bold text-white text-lg">
                Kinematics & Deep Learning
              </h3>
              <p className="text-sm text-slate-300">
                MediaPipe, OpenCV, PyTorch, TensorFlow, and EfficientNet.
              </p>
            </div>

            <p className="text-xs text-slate-400 font-light leading-relaxed pt-1">
              Developed real-time video pose detection for physical gait analysis, 33-point anatomical joint angle calculations, and convolutional transfer learning for radiographic classification.
            </p>
          </div>

          {/* Pillar 4: Engineering Mindset & Infrastructure */}
          <div className="editorial-panel rounded-xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5 font-mono-tech text-xs text-[--accent-cyan] tracking-wider uppercase">
                <GitBranch className="w-4 h-4" />
                <span>Systems Discipline</span>
              </div>
              <span className="font-mono-tech text-xs text-slate-400">
                INFRA & ANALYTICS
              </span>
            </div>

            <div className="space-y-1">
              <h3 className="font-sans-clean font-bold text-white text-lg">
                Cloud, Tooling & Analytics
              </h3>
              <p className="text-sm text-slate-300">
                Red Hat OpenShift, Power BI, SQL, Git, and Firebase.
              </p>
            </div>

            <p className="text-xs text-slate-400 font-light leading-relaxed pt-1">
              Validated with Red Hat OpenShift Administration certification. Built administrative analytical pipelines utilizing SQL queries, advanced Excel, and Power BI dashboards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
