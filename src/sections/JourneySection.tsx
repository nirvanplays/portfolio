import type React from 'react';
import { soundManager } from '../audio/soundEffects';

interface Milestone {
  year: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
}

const MILESTONES: Milestone[] = [
  {
    year: '2024',
    tag: 'ACADEMIC COMMENCEMENT',
    title: 'B.Tech in Computer Science and Engineering',
    subtitle: 'Gokaraju Rangaraju Institute of Engineering and Technology (GRIET)',
    description:
      'Began comprehensive undergraduate engineering curriculum in Hyderabad, establishing core foundations across Data Structures & Algorithms, Object-Oriented Programming, and discrete mathematics.',
    bullets: [
      'Maintaining an academic CGPA of 8.01',
      'Coursework in Computer Networks, Operating Systems, DBMS, and Systems Engineering',
    ],
  },
  {
    year: '2025',
    tag: 'INNOVATION SPRINT',
    title: 'GDG on Campus TechSprint Hackathon',
    subtitle: 'Google Developer Groups on Campus',
    description:
      'Engineered and pitched the Smart Study Planner & Productivity Tracker prototype, implementing adaptive study interval algorithms with Cloud Firestore synchronization.',
    bullets: [
      'Built reactive JavaScript scheduling algorithms with Firebase Firestore cloud persistence',
      'Presented functional prototype demonstrating real-time data sync and reminder automation',
    ],
  },
  {
    year: '2026',
    tag: 'ACTIVE BUILDS & RESEARCH',
    title: 'Full Stack & Deep Learning Engineering Builds',
    subtitle: 'Production Prototypes & Applied Research',
    description:
      'Architected institutional systems and computer vision research platforms addressing real-world operational and kinematic workflows.',
    bullets: [
      'Smart Campus Automation System: Full stack portal with role-based JWT governance and Power BI analytics',
      'Physiosis: Real-time physiotherapy gait analysis with MediaPipe pose landmarks and OpenCV spatial geometry',
      'Pneumonia Detection: Deep learning chest X-ray classification using EfficientNet transfer learning',
    ],
  },
  {
    year: '2028',
    tag: 'FUTURE HORIZON',
    title: 'Expected Undergraduate Graduation',
    subtitle: 'B.Tech in Computer Science and Engineering',
    description:
      'Anticipated completion of B.Tech CSE degree at GRIET, transitioning to advanced software engineering, AI/ML system design, and large-scale architectural challenges.',
    bullets: [
      'Cumulative four-year engineering portfolio and verified credentials',
    ],
  },
];

export const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="section-container" aria-label="Engineering Journey">
      <div className="border-t border-white/[0.1] pt-16 sm:pt-24 space-y-16">
        {/* Section Header */}
        <div className="flex items-center gap-3 font-mono-tech text-xs text-slate-400 uppercase tracking-widest">
          <span className="text-[--accent-cyan]">04</span>
          <span className="w-8 h-px bg-white/[0.2]" />
          <span>CHRONOLOGICAL TELEMETRY</span>
        </div>

        <div className="space-y-4 max-w-3xl">
          <h2 className="text-4xl sm:text-6xl font-sans-clean font-bold tracking-tight text-white uppercase leading-none">
            ENGINEERING JOURNEY.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed">
            Documenting academic rigor, competitive hackathon prototyping, and software engineering milestones.
          </p>
        </div>

        {/* Minimal Editorial Vertical Timeline */}
        <div className="relative border-l border-white/[0.12] ml-3 sm:ml-40 space-y-14 pl-6 sm:pl-12">
          {MILESTONES.map((item) => (
            <div
              key={item.year}
              onMouseEnter={() => soundManager.playHover()}
              className="relative group transition-all duration-200"
            >
              {/* Year Marker on Left (Desktop) */}
              <div className="hidden sm:block absolute -left-52 top-0.5 w-36 text-right font-mono-tech text-base font-bold text-white group-hover:text-[--accent-cyan] transition-colors">
                {item.year}
              </div>

              {/* Glowing Node on Timeline Axis */}
              <div className="absolute -left-[31px] sm:-left-[55px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#090a0d] border border-white/[0.3] group-hover:border-[--accent-cyan] group-hover:bg-[--accent-cyan] transition-all" />

              {/* Mobile Year Badge */}
              <div className="sm:hidden font-mono-tech text-sm font-bold text-[--accent-cyan] mb-1">
                {item.year}
              </div>

              {/* Milestone Editorial Block */}
              <div className="editorial-panel rounded-lg p-6 sm:p-8 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.06] pb-3">
                  <span className="font-mono-tech text-xs font-semibold text-[--accent-cyan] tracking-wider uppercase">
                    {item.tag}
                  </span>
                  <span className="font-mono-tech text-xs text-slate-400">
                    {item.subtitle}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-sans-clean font-bold text-white uppercase tracking-tight group-hover:text-[--accent-cyan] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  {item.description}
                </p>

                <ul className="space-y-1.5 pt-2">
                  {item.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-400 font-light">
                      <span className="w-1 h-1 rounded-full bg-[--accent-cyan] flex-shrink-0 mt-1.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
