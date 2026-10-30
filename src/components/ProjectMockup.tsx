'use client';

import { useState } from 'react';
import type React from 'react';
import {
  Lock,
  ExternalLink,
  Sparkles,
  Maximize2,
  Users,
  FileCheck,
  Vote,
  Activity,
  Calendar,
  ListTodo,
  Clock,
  Bell,
  LineChart,
  Layers,
  Zap,
} from 'lucide-react';
import type { Project } from '../types';

interface ProjectMockupProps {
  project?: Project;
  type?: 'campus' | 'physiosis' | 'planner' | 'pneumonia';
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ project, type: rawType }) => {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Derive visual type and properties
  const visualType = rawType || project?.visualType || (project?.id?.includes('physiosis') ? 'physiosis' : project?.id?.includes('planner') ? 'planner' : project?.id?.includes('pneumonia') ? 'pneumonia' : 'campus');
  const imageSrc = project?.imageSrc || `/projects/${visualType === 'campus' ? 'smart-campus' : visualType === 'planner' ? 'smart-study' : visualType}.png`;
  const displayUrl = project?.liveUrl || (visualType === 'campus' ? 'https://smart-campus-automation-rho.vercel.app' : visualType === 'physiosis' ? 'https://physiosis-sandy-shores.vercel.app' : visualType === 'planner' ? 'https://smart-study-planner-86f98.web.app' : 'https://github.com/nirvanplays/portfolio');
  const title = project?.title || (visualType === 'campus' ? 'Smart Campus Automation' : visualType === 'physiosis' ? 'Physiosis AI Kinematics' : visualType === 'planner' ? 'Smart Study Planner' : 'Pneumonia Detection Neural Network');

  // Fallback procedural mockup when image is missing or failed
  const renderFallbackMockup = () => {
    switch (visualType) {
      case 'campus':
        return (
          <div className="w-full h-full min-h-[300px] p-5 bg-[#0a0d18] flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-purple-500/20 pb-3">
              <span className="text-xs font-mono font-bold text-cyan-300">CAMPUS OPERATIONS DASHBOARD</span>
              <div className="flex gap-1.5 text-[10px] font-mono">
                <span className="px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/40 text-cyan-300">ADMIN</span>
                <span className="px-2 py-0.5 rounded bg-purple-950/80 border border-purple-500/40 text-purple-300">FACULTY</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 my-auto py-3">
              <div className="p-3 bg-[#110e2e]/60 rounded-lg border border-purple-500/30 text-center space-y-1">
                <Users className="w-4 h-4 text-cyan-400 mx-auto" />
                <div className="text-[11px] font-bold text-white">STUDENTS</div>
                <div className="text-[10px] text-slate-400">4,820 Active</div>
              </div>
              <div className="p-3 bg-[#110e2e]/60 rounded-lg border border-purple-500/30 text-center space-y-1">
                <FileCheck className="w-4 h-4 text-emerald-400 mx-auto" />
                <div className="text-[11px] font-bold text-white">LEAVES</div>
                <div className="text-[10px] text-slate-400">14 Verified</div>
              </div>
              <div className="p-3 bg-[#110e2e]/60 rounded-lg border border-purple-500/30 text-center space-y-1">
                <Vote className="w-4 h-4 text-purple-400 mx-auto" />
                <div className="text-[11px] font-bold text-white">ELECTIONS</div>
                <div className="text-[10px] text-slate-400">100% Cryptographic</div>
              </div>
            </div>
            <div className="text-[10px] font-mono text-slate-400 border-t border-purple-500/20 pt-2 flex justify-between">
              <span>EXPRESS REST API</span>
              <span className="text-cyan-300">&lt;85ms LATENCY</span>
            </div>
          </div>
        );

      case 'physiosis':
        return (
          <div className="w-full h-full min-h-[300px] p-5 bg-[#060913] flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-cyan-500/20 pb-3">
              <span className="text-xs font-mono font-bold text-cyan-300 flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
                <span>3D KINEMATICS ENGINE // MEDIAPIPE</span>
              </span>
              <span className="text-[10px] font-mono text-emerald-400">30+ FPS REAL-TIME</span>
            </div>
            <div className="relative h-36 my-auto flex items-center justify-center bg-[#0d1224]/80 rounded-lg border border-cyan-500/30">
              <svg className="w-full h-full max-h-32 text-cyan-400" viewBox="0 0 240 130" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="120" cy="20" r="8" stroke="#38bdf8" strokeWidth="2" fill="#0369a1" />
                <line x1="120" y1="28" x2="120" y2="70" stroke="#38bdf8" strokeWidth="2" />
                <line x1="95" y1="38" x2="145" y2="38" stroke="#818cf8" strokeWidth="2" />
                <line x1="95" y1="38" x2="80" y2="65" stroke="#818cf8" />
                <line x1="145" y1="38" x2="160" y2="65" stroke="#818cf8" />
                <line x1="120" y1="70" x2="100" y2="96" stroke="#22d3ee" strokeWidth="2" />
                <line x1="100" y1="96" x2="90" y2="120" stroke="#22d3ee" strokeWidth="2" />
                <line x1="120" y1="70" x2="140" y2="96" stroke="#22d3ee" strokeWidth="2" />
                <line x1="140" y1="96" x2="150" y2="120" stroke="#22d3ee" strokeWidth="2" />
                <circle cx="100" cy="96" r="3" fill="#38bdf8" />
                <circle cx="140" cy="96" r="3" fill="#38bdf8" />
              </svg>
              <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/60 border border-cyan-500/30 text-[9px] font-mono text-cyan-300">
                KNEE FLEXION: 138°
              </div>
              <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-black/60 border border-purple-500/30 text-[9px] font-mono text-purple-300">
                SYMMETRY: 96.8%
              </div>
            </div>
            <div className="text-[10px] font-mono text-slate-400 border-t border-cyan-500/20 pt-2 flex justify-between">
              <span>33 SKELETAL LANDMARKS</span>
              <span className="text-cyan-300">&lt;35ms FRAME TIME</span>
            </div>
          </div>
        );

      case 'planner':
        return (
          <div className="w-full h-full min-h-[300px] p-5 bg-[#0a071c] flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-purple-500/20 pb-3">
              <span className="text-xs font-mono font-bold text-purple-300 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-purple-400" />
                <span>ADAPTIVE STUDY PLANNER // FIRESTORE</span>
              </span>
              <span className="text-[10px] font-mono text-emerald-400">🔥 24-DAY STREAK</span>
            </div>
            <div className="grid grid-cols-4 gap-2 my-auto py-3">
              <div className="p-2.5 bg-[#170e3a]/60 rounded-lg border border-purple-500/30 text-center space-y-1">
                <Clock className="w-3.5 h-3.5 text-cyan-400 mx-auto" />
                <div className="text-[10px] font-bold text-white">POMODORO</div>
                <div className="text-[9px] text-slate-400">25m Focus</div>
              </div>
              <div className="p-2.5 bg-[#170e3a]/60 rounded-lg border border-purple-500/30 text-center space-y-1">
                <ListTodo className="w-3.5 h-3.5 text-purple-400 mx-auto" />
                <div className="text-[10px] font-bold text-white">TASKS</div>
                <div className="text-[9px] text-slate-400">Adaptive Queue</div>
              </div>
              <div className="p-2.5 bg-[#170e3a]/60 rounded-lg border border-purple-500/30 text-center space-y-1">
                <Bell className="w-3.5 h-3.5 text-amber-400 mx-auto" />
                <div className="text-[10px] font-bold text-white">NOTIFICATIONS</div>
                <div className="text-[9px] text-slate-400">Dynamic Alerts</div>
              </div>
              <div className="p-2.5 bg-[#170e3a]/60 rounded-lg border border-purple-500/30 text-center space-y-1">
                <LineChart className="w-3.5 h-3.5 text-emerald-400 mx-auto" />
                <div className="text-[10px] font-bold text-white">SCORE</div>
                <div className="text-[9px] text-slate-400">94/100</div>
              </div>
            </div>
            <div className="text-[10px] font-mono text-slate-400 border-t border-purple-500/20 pt-2 flex justify-between">
              <span>GDG TECHSPRINT HACKATHON</span>
              <span className="text-cyan-300">&lt;400ms SYNC</span>
            </div>
          </div>
        );

      case 'pneumonia':
        return (
          <div className="w-full h-full min-h-[300px] p-5 bg-[#050811] flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-cyan-500/20 pb-3">
              <span className="text-xs font-mono font-bold text-cyan-300 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                <span>EFFICIENTNET-B0 // GRAD-CAM ATTENTION</span>
              </span>
              <span className="text-[10px] font-mono text-emerald-400">94.2% ACCURACY</span>
            </div>
            <div className="grid grid-cols-3 gap-2.5 my-auto py-3">
              <div className="p-2.5 bg-[#0c1428]/80 rounded-lg border border-cyan-500/30 text-center space-y-1">
                <div className="text-[9px] font-mono text-cyan-400">BACKBONE</div>
                <div className="text-[10px] font-bold text-white">EfficientNet-B0</div>
                <div className="text-[9px] text-slate-400">5.3M Parameters</div>
              </div>
              <div className="p-2.5 bg-[#0c1428]/80 rounded-lg border border-cyan-500/30 text-center space-y-1">
                <div className="text-[9px] font-mono text-emerald-400">CONFIDENCE</div>
                <div className="text-[10px] font-bold text-white">96.4% Detection</div>
                <div className="text-[9px] text-slate-400">p &lt; 0.001</div>
              </div>
              <div className="p-2.5 bg-[#0c1428]/80 rounded-lg border border-cyan-500/30 text-center space-y-1">
                <div className="text-[9px] font-mono text-purple-400">EXPLAINABILITY</div>
                <div className="text-[10px] font-bold text-white">Grad-CAM Heatmap</div>
                <div className="text-[9px] text-slate-400">Lower Lobe Opacity</div>
              </div>
            </div>
            <div className="text-[10px] font-mono text-slate-400 border-t border-cyan-500/20 pt-2 flex justify-between">
              <span>TENSORFLOW / PYTORCH</span>
              <span className="text-cyan-300">18ms INFERENCE</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden border border-purple-500/30 bg-[#09051d]/90 shadow-[0_12px_45px_rgba(112,66,248,0.22)] group/mockup transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_16px_60px_rgba(6,182,212,0.25)] select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Browser / macOS Window Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#10072b]/95 border-b border-purple-500/20 gap-3">
        {/* Left: Window Traffic Lights */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e] inline-block shadow-sm" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123] inline-block shadow-sm" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29] inline-block shadow-sm" />
        </div>

        {/* Center: Fake URL Address Bar */}
        <div className="flex-1 max-w-[340px] mx-auto flex items-center justify-center gap-1.5 px-3 py-1 rounded-md bg-[#050212]/70 border border-purple-500/20 text-[11px] font-mono text-slate-300 truncate">
          <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
          <span className="truncate">{displayUrl.replace('https://', '')}</span>
        </div>

        {/* Right: Live Signal Badge */}
        <div className="flex items-center gap-1.5 text-[10px] font-mono font-semibold text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="hidden sm:inline">LIVE</span>
        </div>
      </div>

      {/* Main Mockup Viewport */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#060317] flex items-center justify-center">
        {!imageError ? (
          <img
            src={imageSrc}
            alt={`${title} Interface Preview`}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover/mockup:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          renderFallbackMockup()
        )}

        {/* Ambient Cosmic Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09051d] via-transparent to-transparent opacity-40 pointer-events-none" />

        {/* Hover Action Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-[#07031e]/90 via-[#07031e]/60 to-transparent transition-opacity duration-300 flex items-center justify-center p-6 ${
            isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-purple-950/90 border border-cyan-400/70 text-cyan-300 font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(6,182,212,0.5)] backdrop-blur-md transform transition-transform group-hover/mockup:scale-105">
            <Maximize2 className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>EXPAND FULL CASE STUDY</span>
          </div>
        </div>

        {/* Corner Telemetry Floating Tag */}
        <div className="absolute bottom-3 left-3 px-3 py-1 rounded-lg bg-[#0a0520]/85 border border-purple-500/40 text-[10px] font-mono text-cyan-300 backdrop-blur-md shadow-md flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-cyan-400" />
          <span className="font-semibold uppercase tracking-wider">{visualType.toUpperCase()} ARCHITECTURE</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectMockup;