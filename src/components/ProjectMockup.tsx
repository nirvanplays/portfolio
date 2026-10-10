import type React from 'react';
import { Users, FileCheck, Vote, Activity, Calendar, ListTodo, Clock, Bell, LineChart, Layers } from 'lucide-react';

interface ProjectMockupProps {
  type: 'campus' | 'physiosis' | 'planner' | 'pneumonia';
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ type }) => {
  switch (type) {
    case 'campus':
      return (
        <div className="w-full h-full min-h-[340px] p-5 sm:p-7 bg-[#11141A] border border-white/[0.08] rounded-xl flex flex-col justify-between select-none shadow-2xl">
          {/* Top Window Bar: Product Identity & Role-Based Access */}
          <div className="flex flex-wrap items-center justify-between border-b border-white/[0.08] pb-4 gap-2">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-white tracking-wide">
                Campus Management Platform
              </span>
            </div>

            {/* Role-Based Access Tabs */}
            <div className="flex items-center gap-1.5 text-[11px] font-mono">
              <span className="px-2.5 py-1 rounded bg-blue-600/20 text-blue-400 border border-blue-500/30 font-semibold">
                ADMIN
              </span>
              <span className="px-2.5 py-1 rounded bg-white/[0.03] text-slate-400 border border-white/[0.06]">
                FACULTY
              </span>
              <span className="px-2.5 py-1 rounded bg-white/[0.03] text-slate-400 border border-white/[0.06]">
                STUDENT
              </span>
            </div>
          </div>

          {/* Core Modules: Student Management, Leave Management, Campus Voting */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 my-auto py-4">
            {/* Module 1: Student Management */}
            <div className="p-4 bg-[#0A0C0F] rounded-lg border border-white/[0.06] space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-white">
                <Users className="w-4 h-4 text-blue-400" />
                <span>STUDENT MANAGEMENT</span>
              </div>
              <div className="space-y-1.5 text-xs text-slate-400">
                <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                  Academic Directory
                </div>
                <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                  Department Enrollment
                </div>
              </div>
            </div>

            {/* Module 2: Leave Management */}
            <div className="p-4 bg-[#0A0C0F] rounded-lg border border-white/[0.06] space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-white">
                <FileCheck className="w-4 h-4 text-blue-400" />
                <span>LEAVE MANAGEMENT</span>
              </div>
              <div className="space-y-1.5 text-xs text-slate-400">
                <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                  Petition Workflow
                </div>
                <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                  Faculty Approvals
                </div>
              </div>
            </div>

            {/* Module 3: Campus Voting */}
            <div className="p-4 bg-[#0A0C0F] rounded-lg border border-white/[0.06] space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-white">
                <Vote className="w-4 h-4 text-blue-400" />
                <span>CAMPUS VOTING</span>
              </div>
              <div className="space-y-1.5 text-xs text-slate-400">
                <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                  Representative Elections
                </div>
                <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                  Secure Ballot System
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Conceptual Spec Bar */}
          <div className="flex items-center justify-between text-xs text-slate-400 border-t border-white/[0.08] pt-3 font-mono">
            <span>ROLE-BASED ARCHITECTURE</span>
            <span className="text-slate-500">REACT · NODE · EXPRESS · MONGODB</span>
          </div>
        </div>
      );

    case 'physiosis':
      return (
        <div className="w-full h-full min-h-[340px] p-5 sm:p-7 bg-[#11141A] border border-white/[0.08] rounded-xl flex flex-col justify-between select-none shadow-2xl">
          {/* Top Window Bar */}
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
            <div className="flex items-center gap-2.5">
              <Activity className="w-4 h-4 text-blue-400" />
              <span className="text-xs sm:text-sm font-semibold text-white tracking-wide">
                Gait Analysis System
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
              COMPUTER VISION
            </span>
          </div>

          {/* Central Pose Vector Viewport */}
          <div className="relative h-44 my-auto flex items-center justify-center bg-[#0A0C0F] rounded-lg border border-white/[0.06] overflow-hidden">
            <svg
              className="w-full h-full max-h-40 text-slate-500"
              viewBox="0 0 240 130"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {/* Torso & Head */}
              <circle cx="120" cy="20" r="8" stroke="#3b82f6" strokeWidth="2" fill="#1e293b" />
              <line x1="120" y1="28" x2="120" y2="70" stroke="#64748b" strokeWidth="2" />
              {/* Shoulders & Arms */}
              <line x1="95" y1="38" x2="145" y2="38" stroke="#64748b" strokeWidth="2" />
              <line x1="95" y1="38" x2="80" y2="65" stroke="#475569" />
              <line x1="145" y1="38" x2="160" y2="65" stroke="#475569" />
              {/* Pelvis & Legs */}
              <line x1="120" y1="70" x2="100" y2="96" stroke="#3b82f6" strokeWidth="2" />
              <line x1="100" y1="96" x2="90" y2="120" stroke="#3b82f6" strokeWidth="2" />
              <line x1="120" y1="70" x2="140" y2="96" stroke="#3b82f6" strokeWidth="2" />
              <line x1="140" y1="96" x2="150" y2="120" stroke="#3b82f6" strokeWidth="2" />
              {/* Articulation Nodes */}
              <circle cx="100" cy="96" r="3" fill="#60a5fa" />
              <circle cx="140" cy="96" r="3" fill="#60a5fa" />
              <circle cx="90" cy="120" r="2.5" fill="#38bdf8" />
              <circle cx="150" cy="120" r="2.5" fill="#38bdf8" />
            </svg>

            {/* 4 Conceptual Analysis Markers */}
            <div className="absolute top-2.5 left-3 px-2.5 py-1 rounded bg-[#0A0C0F]/90 border border-white/[0.1] text-[10px] font-mono text-slate-300">
              POSE DETECTION
            </div>
            <div className="absolute top-2.5 right-3 px-2.5 py-1 rounded bg-[#0A0C0F]/90 border border-white/[0.1] text-[10px] font-mono text-slate-300">
              JOINT ANGLES
            </div>
            <div className="absolute bottom-2.5 left-3 px-2.5 py-1 rounded bg-[#0A0C0F]/90 border border-white/[0.1] text-[10px] font-mono text-slate-300">
              GAIT ANALYSIS
            </div>
            <div className="absolute bottom-2.5 right-3 px-2.5 py-1 rounded bg-[#0A0C0F]/90 border border-white/[0.1] text-[10px] font-mono text-slate-300">
              MOVEMENT ASSESSMENT
            </div>
          </div>

          {/* Bottom Conceptual Spec Bar */}
          <div className="flex items-center justify-between text-xs text-slate-400 border-t border-white/[0.08] pt-3 font-mono">
            <span>KINEMATIC TRACKING PIPELINE</span>
            <span className="text-slate-500">PYTHON · OPENCV · MEDIAPIPE</span>
          </div>
        </div>
      );

    case 'planner':
      return (
        <div className="w-full h-full min-h-[340px] p-5 sm:p-7 bg-[#11141A] border border-white/[0.08] rounded-xl flex flex-col justify-between select-none shadow-2xl">
          {/* Top Window Bar */}
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
            <div className="flex items-center gap-2.5">
              <Calendar className="w-4 h-4 text-blue-400" />
              <span className="text-xs sm:text-sm font-semibold text-white tracking-wide">
                Adaptive Study Planner
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
              TECHSPRINT HACKATHON
            </span>
          </div>

          {/* 5 Conceptual Modules: SUBJECTS, TASKS, SCHEDULE, REMINDERS, PRODUCTIVITY */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5 my-auto py-4">
            <div className="p-3 bg-[#0A0C0F] rounded-lg border border-white/[0.06] text-center space-y-1.5">
              <ListTodo className="w-4 h-4 text-blue-400 mx-auto" />
              <div className="text-[11px] font-semibold text-white">SUBJECTS</div>
              <div className="text-[10px] text-slate-400">Course Syllabus</div>
            </div>

            <div className="p-3 bg-[#0A0C0F] rounded-lg border border-white/[0.06] text-center space-y-1.5">
              <Clock className="w-4 h-4 text-blue-400 mx-auto" />
              <div className="text-[11px] font-semibold text-white">TASKS</div>
              <div className="text-[10px] text-slate-400">Priority Queues</div>
            </div>

            <div className="p-3 bg-[#0A0C0F] rounded-lg border border-blue-500/30 bg-blue-500/5 text-center space-y-1.5">
              <Calendar className="w-4 h-4 text-blue-400 mx-auto" />
              <div className="text-[11px] font-semibold text-white">SCHEDULE</div>
              <div className="text-[10px] text-slate-400">Adaptive Intervals</div>
            </div>

            <div className="p-3 bg-[#0A0C0F] rounded-lg border border-white/[0.06] text-center space-y-1.5">
              <Bell className="w-4 h-4 text-blue-400 mx-auto" />
              <div className="text-[11px] font-semibold text-white">REMINDERS</div>
              <div className="text-[10px] text-slate-400">Focus Prompts</div>
            </div>

            <div className="p-3 bg-[#0A0C0F] rounded-lg border border-white/[0.06] text-center space-y-1.5">
              <LineChart className="w-4 h-4 text-blue-400 mx-auto" />
              <div className="text-[11px] font-semibold text-white">PRODUCTIVITY</div>
              <div className="text-[10px] text-slate-400">Habit Tracking</div>
            </div>
          </div>

          {/* Bottom Conceptual Spec Bar */}
          <div className="flex items-center justify-between text-xs text-slate-400 border-t border-white/[0.08] pt-3 font-mono">
            <span>ADAPTIVE PRODUCTIVITY WORKFLOW</span>
            <span className="text-slate-500">FIREBASE · JAVASCRIPT</span>
          </div>
        </div>
      );

    case 'pneumonia':
      return (
        <div className="w-full h-full min-h-[340px] p-5 sm:p-7 bg-[#11141A] border border-white/[0.08] rounded-xl flex flex-col justify-between select-none shadow-2xl">
          {/* Top Window Bar */}
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
            <div className="flex items-center gap-2.5">
              <Layers className="w-4 h-4 text-blue-400" />
              <span className="text-xs sm:text-sm font-semibold text-white tracking-wide">
                Deep Learning Model Pipeline
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
              ACADEMIC RESEARCH
            </span>
          </div>

          {/* 4 Pipeline Stages: INPUT, PREPROCESSING, FEATURE EXTRACTION, CLASSIFICATION */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 my-auto py-4">
            <div className="p-3.5 bg-[#0A0C0F] rounded-lg border border-white/[0.06] text-center space-y-1.5">
              <div className="text-[10px] font-mono text-blue-400 font-semibold">STAGE 01</div>
              <div className="text-xs font-bold text-white">INPUT</div>
              <div className="text-[10px] text-slate-400">Radiograph Scans</div>
            </div>

            <div className="p-3.5 bg-[#0A0C0F] rounded-lg border border-white/[0.06] text-center space-y-1.5">
              <div className="text-[10px] font-mono text-blue-400 font-semibold">STAGE 02</div>
              <div className="text-xs font-bold text-white">PREPROCESSING</div>
              <div className="text-[10px] text-slate-400">Spatial Normalization</div>
            </div>

            <div className="p-3.5 bg-[#0A0C0F] rounded-lg border border-blue-500/30 bg-blue-500/5 text-center space-y-1.5">
              <div className="text-[10px] font-mono text-blue-400 font-semibold">STAGE 03</div>
              <div className="text-xs font-bold text-white">FEATURE EXTRACTION</div>
              <div className="text-[10px] text-slate-400">EfficientNet Backbone</div>
            </div>

            <div className="p-3.5 bg-[#0A0C0F] rounded-lg border border-white/[0.06] text-center space-y-1.5">
              <div className="text-[10px] font-mono text-blue-400 font-semibold">STAGE 04</div>
              <div className="text-xs font-bold text-white">CLASSIFICATION</div>
              <div className="text-[10px] text-slate-400">Binary Output Head</div>
            </div>
          </div>

          {/* Bottom Conceptual Spec Bar */}
          <div className="flex items-center justify-between text-xs text-slate-400 border-t border-white/[0.08] pt-3 font-mono">
            <span>CONVNET INFERENCE WORKFLOW</span>
            <span className="text-slate-500">PYTORCH · TENSORFLOW · OPENCV</span>
          </div>
        </div>
      );
  }
};
