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
    tag: 'ACADEMIC FOUNDATION',
    title: 'B.Tech in Computer Science and Engineering',
    subtitle: 'Gokaraju Rangaraju Institute of Engineering and Technology (GRIET)',
    description:
      'Commenced undergraduate engineering curriculum in Hyderabad, establishing core theoretical foundations across Data Structures & Algorithms, Object-Oriented Analysis, and Discrete Mathematics.',
    bullets: [
      'Maintaining an academic cumulative CGPA of 8.01',
      'Rigorous coursework across Computer Networks, Operating Systems, DBMS, and Systems Engineering',
    ],
  },
  {
    year: '2025',
    tag: 'HACKATHON PROTOTYPING',
    title: 'GDG on Campus TechSprint Hackathon',
    subtitle: 'Google Developer Groups on Campus',
    description:
      'Architected and demonstrated the Smart Study Planner & Productivity Tracker prototype, implementing dynamic scheduling logic with Firebase Firestore real-time cloud persistence under intense hackathon sprint conditions.',
    bullets: [
      'Engineered dynamic JavaScript scheduling algorithms with cloud document synchronization',
      'Presented functional prototype demonstrating real-time data sync and reminder automation',
    ],
  },
  {
    year: '2026',
    tag: 'SYSTEMS ENGINEERING',
    title: 'Full-Stack Platforms & Applied Computer Vision Builds',
    subtitle: 'Production Prototypes & Applied Research',
    description:
      'Engineered scalable institutional management systems and computer vision research platforms addressing tangible operational and kinematic workflows.',
    bullets: [
      'Smart Campus Automation System: Modular portal with role-based JWT governance and Power BI analytics',
      'Physiosis: Real-time physiotherapy gait analysis with MediaPipe pose landmarks and OpenCV spatial geometry',
      'Pneumonia Detection: Deep learning chest X-ray classification using EfficientNet transfer learning',
    ],
  },
  {
    year: '2028',
    tag: 'ANTICIPATED GRADUATION',
    title: 'Undergraduate Program Completion',
    subtitle: 'B.Tech in Computer Science and Engineering',
    description:
      'Anticipated completion of B.Tech CSE degree at GRIET, transitioning to advanced software engineering roles, distributed systems, and applied AI design.',
    bullets: [
      'Four-year comprehensive engineering portfolio and verified credentials',
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
          <span>BACKGROUND & MILESTONES</span>
        </div>

        <div className="space-y-4 max-w-3xl">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans-clean font-bold tracking-tight text-white uppercase leading-none">
            ENGINEERING TIMELINE.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed">
            Documenting academic rigor, competitive hackathon prototyping, and software engineering milestones.
          </p>
        </div>

        {/* Minimal Editorial Vertical Timeline */}
        <div className="relative border-l border-white/[0.12] ml-3 sm:ml-40 space-y-12 pl-6 sm:pl-12">
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

              {/* Node on Timeline Axis */}
              <div className="absolute -left-[31px] sm:-left-[55px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#090a0d] border border-white/[0.3] group-hover:border-[--accent-cyan] group-hover:bg-[--accent-cyan] transition-all" />

              {/* Mobile Year Badge */}
              <div className="sm:hidden font-mono-tech text-sm font-bold text-[--accent-cyan] mb-1">
                {item.year}
              </div>

              {/* Milestone Editorial Block */}
              <div className="editorial-panel rounded-xl p-6 sm:p-8 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.06] pb-3">
                  <span className="font-mono-tech text-xs font-semibold text-[--accent-cyan] tracking-wider uppercase">
                    {item.tag}
                  </span>
                  <span className="font-mono-tech text-xs text-slate-400">
                    {item.subtitle}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-sans-clean font-bold text-white tracking-tight group-hover:text-[--accent-cyan] transition-colors">
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
