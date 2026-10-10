import { Users, FileCheck, Calendar, Clock, Sparkles } from 'lucide-react';

interface ProjectMockupProps {
  type: 'campus' | 'physiosis' | 'planner' | 'pneumonia';
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ type }) => {
  switch (type) {
    case 'campus':
      return (
        <div className="w-full h-full min-h-[320px] p-5 sm:p-6 bg-[#11141a] border border-white/[0.08] rounded-xl flex flex-col justify-between select-none shadow-xl">
          {/* Top Window Header */}
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3.5">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              </div>
              <span className="text-xs font-semibold text-slate-200 pl-1.5">
                Campus Portal
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                Administrator
              </span>
            </div>
          </div>

          {/* Clean App Navigation */}
          <div className="flex items-center gap-4 border-b border-white/[0.06] py-2.5 text-xs text-slate-400">
            <span className="text-white font-medium border-b-2 border-blue-500 pb-1.5 -mb-2.5">
              Student Directory
            </span>
            <span className="hover:text-slate-200 cursor-default">
              Leave Requests (14)
            </span>
            <span className="hover:text-slate-200 cursor-default">
              Campus Elections
            </span>
            <span className="hover:text-slate-200 cursor-default hidden sm:inline">
              Reports
            </span>
          </div>

          {/* Main Content: Student Records Table & Quick Workflow */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 my-auto py-3">
            {/* Student Records Table (7 cols) */}
            <div className="sm:col-span-7 p-3.5 bg-[#0b0d12] rounded-lg border border-white/[0.06] space-y-2.5">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-medium text-slate-300 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-blue-400" />
                  Recent Enrollments
                </span>
                <span className="text-[11px]">2,480 Active</span>
              </div>

              <div className="space-y-1.5 text-xs">
                <div className="flex items-center justify-between p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                  <div>
                    <span className="font-medium text-white block">Aditya Varma</span>
                    <span className="text-[10px] text-slate-400">B.Tech CSE · Roll #24-012</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-medium">
                    Enrolled
                  </span>
                </div>

                <div className="flex items-center justify-between p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                  <div>
                    <span className="font-medium text-white block">Sneha Patel</span>
                    <span className="text-[10px] text-slate-400">B.Tech CSE · Roll #24-089</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-medium">
                    Enrolled
                  </span>
                </div>
              </div>
            </div>

            {/* Leave Action Card (5 cols) */}
            <div className="sm:col-span-5 p-3.5 bg-[#0b0d12] rounded-lg border border-white/[0.06] flex flex-col justify-between space-y-2">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-300">
                  <FileCheck className="w-3.5 h-3.5 text-blue-400" />
                  <span>Leave Workflow</span>
                </div>
                <div className="text-[11px] text-slate-400">
                  Medical Petition #842
                </div>
              </div>

              <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04] text-[11px] text-slate-300">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="text-white font-medium">2 Days</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span>Status:</span>
                  <span className="text-emerald-400 font-medium">Approved</span>
                </div>
              </div>

              <div className="pt-1 flex gap-1.5">
                <button className="w-full py-1 rounded bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-medium transition-colors">
                  View Petition
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Clean Footer */}
          <div className="flex items-center justify-between text-xs text-slate-400 border-t border-white/[0.08] pt-3">
            <span>React.js Frontend · Express REST API · MongoDB</span>
            <span className="text-[11px] text-slate-400">Full-Stack Application</span>
          </div>
        </div>
      );

    case 'physiosis':
      return (
        <div className="w-full h-full min-h-[320px] p-5 sm:p-6 bg-[#11141a] border border-white/[0.08] rounded-xl flex flex-col justify-between select-none shadow-xl">
          {/* Top Window Header */}
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3.5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
              <span className="text-xs font-semibold text-white">
                Physiosis Gait Analysis Feed
              </span>
            </div>
            <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              MediaPipe Pose Tracking
            </span>
          </div>

          {/* Center: Kinematic Skeletal Pose Viewport */}
          <div className="relative h-40 my-auto flex items-center justify-center bg-[#0b0d12] rounded-lg border border-white/[0.06] overflow-hidden">
            <svg
              className="w-full h-full max-h-36 text-slate-500"
              viewBox="0 0 240 130"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {/* Torso & Head */}
              <circle cx="120" cy="20" r="9" stroke="#3b82f6" strokeWidth="2" fill="#1e293b" />
              <line x1="120" y1="29" x2="120" y2="72" stroke="#64748b" strokeWidth="2" />
              {/* Shoulders & Arms */}
              <line x1="95" y1="40" x2="145" y2="40" stroke="#64748b" strokeWidth="2" />
              <line x1="95" y1="40" x2="80" y2="68" stroke="#475569" />
              <line x1="145" y1="40" x2="160" y2="68" stroke="#475569" />
              {/* Hips & Legs */}
              <line x1="120" y1="72" x2="102" y2="98" stroke="#3b82f6" strokeWidth="2" />
              <line x1="102" y1="98" x2="92" y2="122" stroke="#3b82f6" strokeWidth="2" />
              <line x1="120" y1="72" x2="138" y2="98" stroke="#3b82f6" strokeWidth="2" />
              <line x1="138" y1="98" x2="150" y2="122" stroke="#3b82f6" strokeWidth="2" />
              {/* Keypoint Joints */}
              <circle cx="102" cy="98" r="3" fill="#60a5fa" />
              <circle cx="138" cy="98" r="3" fill="#60a5fa" />
              <circle cx="92" cy="122" r="2.5" fill="#38bdf8" />
              <circle cx="150" cy="122" r="2.5" fill="#38bdf8" />
            </svg>

            {/* Readout Badges */}
            <div className="absolute top-2 left-3 px-2 py-1 rounded bg-[#0b0d12]/90 border border-white/[0.1] text-[11px] text-slate-300">
              Knee Flexion: <span className="font-semibold text-blue-400">142.4°</span>
            </div>
            <div className="absolute top-2 right-3 px-2 py-1 rounded bg-[#0b0d12]/90 border border-white/[0.1] text-[11px] text-slate-300">
              Hip Angle: <span className="font-semibold text-blue-400">168.1°</span>
            </div>
            <div className="absolute bottom-2 right-3 px-2 py-1 rounded bg-[#0b0d12]/90 border border-white/[0.1] text-[11px] text-slate-300">
              Gait Phase: <span className="font-semibold text-emerald-400">Stance Phase</span>
            </div>
          </div>

          {/* Bottom Clean Footer */}
          <div className="flex items-center justify-between text-xs text-slate-400 border-t border-white/[0.08] pt-3">
            <span>Python · OpenCV · MediaPipe · FastAPI</span>
            <span className="text-[11px] text-slate-400">Computer Vision Pipeline</span>
          </div>
        </div>
      );

    case 'planner':
      return (
        <div className="w-full h-full min-h-[320px] p-5 sm:p-6 bg-[#11141a] border border-white/[0.08] rounded-xl flex flex-col justify-between select-none shadow-xl">
          {/* Top Window Header */}
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3.5">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-semibold text-white">
                Smart Study Planner & Schedule
              </span>
            </div>
            <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              Firebase Firestore
            </span>
          </div>

          {/* Timetable Session Blocks & Progress */}
          <div className="space-y-2.5 my-auto py-3">
            <div className="p-3 bg-[#0b0d12] rounded-lg border border-white/[0.06] flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="text-xs font-semibold text-white">
                  Data Structures: Trees & Dynamic Programming
                </div>
                <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-slate-500" />
                  <span>09:00 - 10:30 · 90 min Focus Interval</span>
                </div>
              </div>
              <span className="text-[10px] font-medium px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Completed
              </span>
            </div>

            <div className="p-3 bg-[#0b0d12] rounded-lg border border-white/[0.06] flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="text-xs font-semibold text-white">
                  Computer Vision: Spatial Filters & Feature Extraction
                </div>
                <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-slate-500" />
                  <span>11:00 - 12:30 · Active Block</span>
                </div>
              </div>
              <span className="text-[10px] font-medium px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 animate-pulse">
                In Progress
              </span>
            </div>

            {/* Daily Productivity Completion Bar */}
            <div className="p-3 bg-[#0b0d12] rounded-lg border border-white/[0.06] space-y-1.5">
              <div className="flex justify-between text-xs text-slate-300">
                <span className="font-medium">Daily Target Progress</span>
                <span className="text-emerald-400 font-semibold">78% Completed</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-[78%]" />
              </div>
            </div>
          </div>

          {/* Bottom Clean Footer */}
          <div className="flex items-center justify-between text-xs text-slate-400 border-t border-white/[0.08] pt-3">
            <span>TechSprint Hackathon Prototype</span>
            <span className="text-[11px] text-slate-400">Productivity System</span>
          </div>
        </div>
      );

    case 'pneumonia':
      return (
        <div className="w-full h-full min-h-[320px] p-5 sm:p-6 bg-[#11141a] border border-white/[0.08] rounded-xl flex flex-col justify-between select-none shadow-xl">
          {/* Top Window Header */}
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3.5">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-semibold text-white">
                Deep Learning Model Inference Pipeline
              </span>
            </div>
            <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              EfficientNet Backbone
            </span>
          </div>

          {/* 3 Pipeline Stages */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-auto py-3">
            <div className="p-3 bg-[#0b0d12] rounded-lg border border-white/[0.06] text-center space-y-1">
              <div className="text-[10px] font-semibold text-blue-400 uppercase">Stage 01</div>
              <div className="text-xs font-bold text-white">Chest Radiograph</div>
              <div className="text-[11px] text-slate-400">OpenCV Preprocessing (224×224)</div>
            </div>

            <div className="p-3 bg-[#0b0d12] rounded-lg border border-blue-500/30 bg-blue-500/5 text-center space-y-1">
              <div className="text-[10px] font-semibold text-blue-400 uppercase">Stage 02</div>
              <div className="text-xs font-bold text-white">Feature Extractor</div>
              <div className="text-[11px] text-slate-400">EfficientNet Convolutional Weights</div>
            </div>

            <div className="p-3 bg-[#0b0d12] rounded-lg border border-white/[0.06] text-center space-y-1">
              <div className="text-[10px] font-semibold text-blue-400 uppercase">Stage 03</div>
              <div className="text-xs font-bold text-white">Classifier Head</div>
              <div className="text-[11px] text-slate-400">Binary Output Probability</div>
            </div>
          </div>

          {/* Framework Validation Note */}
          <div className="p-2.5 bg-[#0b0d12] rounded-lg border border-white/[0.06] flex items-center justify-between text-xs text-slate-300">
            <span>Validation Frameworks:</span>
            <span className="text-blue-400 font-medium">PyTorch & TensorFlow Benchmarking</span>
          </div>

          {/* Bottom Clean Footer */}
          <div className="flex items-center justify-between text-xs text-slate-400 border-t border-white/[0.08] pt-3">
            <span>Python · PyTorch · TensorFlow · OpenCV</span>
            <span className="text-[11px] text-slate-400">Deep Learning Project</span>
          </div>
        </div>
      );
  }
};
