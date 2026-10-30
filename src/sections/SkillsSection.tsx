'use client';

import type React from 'react';
import {
  Sparkles,
  Code2,
  Layers,
  Server,
  Database,
  Brain,
  Wrench,
  BookOpen,
  Cloud,
  Cpu,
  Binary,
  CheckCircle2,
  Terminal,
  Zap,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  LANGUAGES: <Code2 className="w-4 h-4 text-cyan-400" />,
  'GOOGLE TECH & CLOUD': <Cloud className="w-4 h-4 text-cyan-400" />,
  'CORE CS & DSA': <Binary className="w-4 h-4 text-cyan-400" />,
  FRONTEND: <Layers className="w-4 h-4 text-cyan-400" />,
  BACKEND: <Server className="w-4 h-4 text-cyan-400" />,
  DATABASES: <Database className="w-4 h-4 text-cyan-400" />,
  'AI / ML': <Brain className="w-4 h-4 text-cyan-400" />,
  'TOOLS & PRACTICES': <Wrench className="w-4 h-4 text-cyan-400" />,
  TOOLS: <Wrench className="w-4 h-4 text-cyan-400" />,
  CORE: <BookOpen className="w-4 h-4 text-cyan-400" />,
};

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 sm:py-32 border-t border-purple-500/20 space-y-16 select-none relative" aria-label="Technical Skills">
      {/* Background Cosmic Glow */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-xs font-mono text-cyan-400">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>TECHNICAL CONSTELLATIONS & ENGINEERING READINESS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-black text-white tracking-tight leading-[1.08]">
          Skills & Core CS <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-cyan-400">
            Competencies.
          </span>
        </h2>
        <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
          Robust computer science foundations, algorithmic problem-solving capabilities, and applied engineering across the Google ecosystem, distributed databases, and real-time machine learning pipelines.
        </p>
      </div>

      {/* Google Placement & SWE Architectural Readiness Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0d0728]/90 via-[#070e28]/90 to-[#0d0728]/90 border border-cyan-500/30 backdrop-blur-2xl shadow-[0_0_40px_rgba(6,182,212,0.15)] space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-purple-500/20 pb-4">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee] animate-pulse" />
            <span className="font-mono text-xs sm:text-sm font-bold text-white tracking-wider uppercase">
              Google SWE & Placement Readiness Highlights
            </span>
          </div>
          <span className="px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-[11px] font-mono text-cyan-300 font-semibold self-start sm:self-auto">
            SWE INTERN / JUNIOR DEV READY
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-4 rounded-xl bg-[#030014]/70 border border-purple-500/30 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400">
              <Binary className="w-4 h-4 text-cyan-400" />
              <span>DSA & ALGORITHMIC DEPTH</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Active problem solver across Trees, Graphs, Dynamic Programming, Heaps, Two Pointers, and Binary Search with rigorous time & space complexity ($O(N)$ runtime / memory) guarantees.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#030014]/70 border border-purple-500/30 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400">
              <Cloud className="w-4 h-4 text-cyan-400" />
              <span>GOOGLE ECOSYSTEM ALIGNMENT</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Hands-on production integration of <span className="text-white font-semibold">Google MediaPipe Pose</span> (33 3D skeletal landmarks), <span className="text-white font-semibold">Google Cloud Firestore</span>, Firebase Auth, and TensorFlow neural pipelines.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#030014]/70 border border-purple-500/30 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>LOW-LATENCY SCALE & METRICS</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Proven ability to engineer low-latency software: sub-35ms computer vision inference, 60 FPS Three.js rendering loops, and indexed MongoDB/PostgreSQL schemas.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {SKILL_CATEGORIES.map((cat) => (
          <div
            key={cat.category}
            className="p-6 sm:p-7 rounded-2xl bg-[#07031c]/65 border border-purple-500/20 hover:border-cyan-400/50 backdrop-blur-xl transition-all duration-300 space-y-4 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] group"
          >
            {/* Category Header */}
            <div className="flex items-center justify-between border-b border-purple-500/20 pb-3">
              <div className="flex items-center gap-2.5">
                {CATEGORY_ICONS[cat.category] || <Code2 className="w-4 h-4 text-cyan-400" />}
                <h3 className="font-mono text-xs font-bold tracking-wider text-slate-200 uppercase group-hover:text-cyan-300 transition-colors">
                  {cat.category}
                </h3>
              </div>
              <span className="text-[10px] font-mono text-purple-400">
                {cat.skills.length} MODULES
              </span>
            </div>

            {/* Tech Chips */}
            <div className="flex flex-wrap gap-2 pt-1">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs sm:text-sm font-medium px-3 py-1.5 rounded-lg bg-purple-900/20 border border-purple-500/25 text-slate-200 hover:text-white hover:border-cyan-400/60 hover:bg-cyan-900/20 transition-all duration-200 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const SpaceSkillsSection = SkillsSection;
export default SkillsSection;
