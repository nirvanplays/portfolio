import type React from 'react';

interface ProjectMockupProps {
  type: 'campus' | 'physiosis' | 'planner' | 'pneumonia';
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ type }) => {
  switch (type) {
    case 'campus':
      return (
        <div className="w-full h-full min-h-[300px] p-5 bg-[#12151c] border border-white/[0.08] rounded-xl flex flex-col justify-between select-none font-sans">
          {/* Top Window Bar with Role Identity */}
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              </div>
              <span className="text-[11px] font-mono text-slate-300 font-semibold pl-2">
                GRIET Campus Portal // v1.2
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30 font-semibold">
                ROLE: ADMIN
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                JWT VALID
              </span>
            </div>
          </div>

          {/* Sub Navigation Tabs */}
          <div className="flex items-center gap-3 sm:gap-4 border-b border-white/[0.06] py-2 text-[10px] font-mono text-slate-400 overflow-x-auto whitespace-nowrap scrollbar-none">
            <span className="text-white font-semibold border-b border-blue-400 pb-1 flex-shrink-0">
              [ Students (2,480) ]
            </span>
            <span className="hover:text-slate-200 cursor-default flex-shrink-0">
              [ Leaves (14 Pending) ]
            </span>
            <span className="hover:text-slate-200 cursor-default flex-shrink-0">
              [ Elections (Live) ]
            </span>
            <span className="hover:text-slate-200 cursor-default flex-shrink-0">
              [ Power BI Analytics ]
            </span>
          </div>

          {/* Rich Modular Content View */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-auto py-2">
            {/* Student Records Summary */}
            <div className="p-3 bg-[#0a0c10] rounded-lg border border-white/[0.06] space-y-2">
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>STUDENT ROSTER</span>
                <span className="text-blue-400">ID: #24-CSE</span>
              </div>
              <div className="text-xs font-semibold text-white">B.Tech CSE Registry</div>
              <div className="space-y-1 text-[10px] font-mono text-slate-400">
                <div className="flex justify-between">
                  <span>Enrolled:</span>
                  <span className="text-slate-200">2,480 Active</span>
                </div>
                <div className="flex justify-between">
                  <span>Verification:</span>
                  <span className="text-emerald-400">Synchronized</span>
                </div>
              </div>
            </div>

            {/* Leave Workflow Card */}
            <div className="p-3 bg-[#0a0c10] rounded-lg border border-white/[0.06] space-y-2">
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>LEAVE ROUTING</span>
                <span className="text-emerald-400">#L-842</span>
              </div>
              <div className="text-xs font-semibold text-white">Medical Petition</div>
              <div className="space-y-1 text-[10px] font-mono text-slate-400">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="text-slate-200">2 Days</span>
                </div>
                <div className="flex justify-between">
                  <span>Status:</span>
                  <span className="text-emerald-400 font-semibold">Faculty Approved</span>
                </div>
              </div>
            </div>

            {/* Campus Election Ballot */}
            <div className="p-3 bg-[#0a0c10] rounded-lg border border-white/[0.06] space-y-2">
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>VOTING MODULE</span>
                <span className="text-blue-400">LIVE</span>
              </div>
              <div className="text-xs font-semibold text-white">Council Ballot #04</div>
              <div className="space-y-1 text-[10px] font-mono text-slate-400">
                <div className="flex justify-between">
                  <span>Turnout:</span>
                  <span className="text-slate-200 font-semibold">84.2%</span>
                </div>
                <div className="flex justify-between">
                  <span>Audit Hash:</span>
                  <span className="text-blue-400 font-mono text-[9px]">sha256:7f83b...</span>
                </div>
              </div>
            </div>
          </div>

          {/* Telemetry Footer */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[10px] font-mono text-slate-400 border-t border-white/[0.08] pt-2.5 gap-1.5">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
              <span className="truncate">MongoDB ReplicaSet: Synced · Express REST API: 200 OK</span>
            </div>
            <span className="text-[9px] text-slate-500 uppercase font-semibold flex-shrink-0">
              [ SYSTEM INTERFACE MOCKUP ]
            </span>
          </div>
        </div>
      );

    case 'physiosis':
      return (
        <div className="w-full h-full min-h-[300px] p-5 bg-[#12151c] border border-white/[0.08] rounded-xl flex flex-col justify-between select-none font-sans">
          {/* Top Video Header */}
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span className="text-[11px] font-mono text-slate-200 font-semibold uppercase">
                VIDEO FEED // 30 FPS // KINEMATICS
              </span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30 font-semibold">
              MediaPipe Pose · 33 Keypoints
            </span>
          </div>

          {/* Skeletal Pose Telemetry Viewport */}
          <div className="relative h-36 my-auto flex items-center justify-center">
            {/* Camera crosshairs background */}
            <div className="absolute inset-0 border border-dashed border-white/[0.08] rounded flex items-center justify-center pointer-events-none">
              <div className="w-4 h-4 border-t border-b border-blue-500/40" />
              <div className="h-4 w-4 border-l border-r border-blue-500/40" />
            </div>

            <svg
              className="w-full h-full max-h-36 text-slate-500"
              viewBox="0 0 240 130"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {/* Torso & Head */}
              <circle cx="120" cy="20" r="10" stroke="#3b82f6" strokeWidth="2" fill="#1e293b" />
              <line x1="120" y1="30" x2="120" y2="75" stroke="#64748b" strokeWidth="2" />
              {/* Shoulders & Arms */}
              <line x1="90" y1="42" x2="150" y2="42" stroke="#64748b" strokeWidth="2" />
              <line x1="90" y1="42" x2="75" y2="72" stroke="#475569" />
              <line x1="150" y1="42" x2="165" y2="72" stroke="#475569" />
              {/* Hips & Lower Kinematic Extremities */}
              <line x1="120" y1="75" x2="100" y2="102" stroke="#3b82f6" strokeWidth="2" />
              <line x1="100" y1="102" x2="90" y2="125" stroke="#3b82f6" strokeWidth="2" />
              <line x1="120" y1="75" x2="140" y2="102" stroke="#3b82f6" strokeWidth="2" />
              <line x1="140" y1="102" x2="155" y2="125" stroke="#3b82f6" strokeWidth="2" />
              {/* Keypoint Joint Nodes */}
              <circle cx="100" cy="102" r="3.5" fill="#60a5fa" />
              <circle cx="140" cy="102" r="3.5" fill="#60a5fa" />
              <circle cx="90" cy="125" r="3" fill="#38bdf8" />
              <circle cx="155" cy="125" r="3" fill="#38bdf8" />
            </svg>

            {/* Readout Callouts */}
            <div className="absolute top-1 left-2 px-2.5 py-1 rounded bg-[#0a0c10]/90 border border-white/[0.1] text-[10px] font-mono text-slate-300">
              Knee Flexion: <span className="font-bold text-blue-400">142.4°</span> (Normal)
            </div>
            <div className="absolute bottom-1 right-2 px-2.5 py-1 rounded bg-[#0a0c10]/90 border border-white/[0.1] text-[10px] font-mono text-slate-300">
              Gait Cycle: <span className="font-bold text-emerald-400">Stance Phase (62%)</span>
            </div>
            <div className="absolute top-1 right-2 px-2.5 py-1 rounded bg-[#0a0c10]/90 border border-white/[0.1] text-[10px] font-mono text-slate-300">
              Hip Vector: <span className="font-bold text-blue-400">168.1°</span>
            </div>
          </div>

          {/* Telemetry Footer */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[10px] font-mono text-slate-400 border-t border-white/[0.08] pt-2.5 gap-1.5">
            <span className="truncate">FastAPI Ingestion (18ms) · OpenCV v4.8 Spatial Filter</span>
            <span className="text-[9px] text-slate-500 uppercase font-semibold flex-shrink-0">
              [ CV TELEMETRY MOCKUP ]
            </span>
          </div>
        </div>
      );

    case 'planner':
      return (
        <div className="w-full h-full min-h-[300px] p-5 bg-[#12151c] border border-white/[0.08] rounded-xl flex flex-col justify-between select-none font-sans">
          {/* Top Window Header */}
          <div className="flex flex-wrap items-center justify-between border-b border-white/[0.08] pb-3 gap-2">
            <span className="text-[11px] font-mono text-slate-200 font-semibold uppercase">
              STUDY INTELLIGENCE // ADAPTIVE TIMETABLE
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30 font-semibold">
              Cloud Firestore Synced
            </span>
          </div>

          {/* Timetable Session Blocks & Productivity Bar */}
          <div className="space-y-2.5 my-auto py-2">
            <div className="flex items-center justify-between p-2.5 bg-[#0a0c10] rounded-lg border border-white/[0.06]">
              <div className="space-y-0.5">
                <div className="text-xs font-semibold text-white">
                  09:00 - 10:30 · Data Structures: Dynamic Programming & Trees
                </div>
                <div className="text-[10px] font-mono text-slate-400">
                  Adaptive Focus Session · 90 min
                </div>
              </div>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex-shrink-0">
                Completed
              </span>
            </div>

            <div className="flex items-center justify-between p-2.5 bg-[#0a0c10] rounded-lg border border-white/[0.06]">
              <div className="space-y-0.5">
                <div className="text-xs font-semibold text-white">
                  11:00 - 12:30 · Computer Vision: OpenCV Spatial Convolution
                </div>
                <div className="text-[10px] font-mono text-slate-400">
                  Active Deep Work Block · 60 min · Focus Interval
                </div>
              </div>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/30 animate-pulse flex-shrink-0">
                In Progress
              </span>
            </div>

            {/* Daily Productivity Score Progress Bar */}
            <div className="p-2 bg-[#0a0c10] rounded-lg border border-white/[0.06] space-y-1">
              <div className="flex justify-between text-[10px] font-mono text-slate-300">
                <span>Daily Focus Completion Target</span>
                <span className="text-emerald-400 font-bold">78% (3.5 hrs)</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-[78%]" />
              </div>
            </div>
          </div>

          {/* Telemetry Footer */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[10px] font-mono text-slate-400 border-t border-white/[0.08] pt-2.5 gap-1.5">
            <span className="truncate">Presented @ GDG on Campus TechSprint Hackathon 2025</span>
            <span className="text-[9px] text-slate-500 uppercase font-semibold flex-shrink-0">
              [ PRODUCT MOCKUP ]
            </span>
          </div>
        </div>
      );

    case 'pneumonia':
      return (
        <div className="w-full h-full min-h-[300px] p-5 bg-[#12151c] border border-white/[0.08] rounded-xl flex flex-col justify-between select-none font-sans">
          {/* Top Window Header */}
          <div className="flex flex-wrap items-center justify-between border-b border-white/[0.08] pb-3 gap-2">
            <span className="text-[11px] font-mono text-slate-200 font-semibold uppercase">
              DEEP LEARNING // CONVNET INFERENCE WORKFLOW
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30 font-semibold">
              EfficientNet · Transfer Learning
            </span>
          </div>

          {/* ML Pipeline Stages Representation */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 my-auto py-2">
            <div className="p-2.5 bg-[#0a0c10] rounded-lg border border-white/[0.06] text-center space-y-1">
              <div className="text-[10px] font-mono text-blue-400 uppercase font-bold">Stage 01</div>
              <div className="text-xs font-bold text-white">Chest X-Ray</div>
              <div className="text-[9px] font-mono text-slate-400">OpenCV Preprocess (224×224)</div>
            </div>

            <div className="p-2.5 bg-[#0a0c10] rounded-lg border border-blue-500/40 bg-blue-500/5 text-center space-y-1">
              <div className="text-[10px] font-mono text-blue-400 uppercase font-bold">Stage 02</div>
              <div className="text-xs font-bold text-white">Conv Backbone</div>
              <div className="text-[9px] font-mono text-slate-400">EfficientNet Features</div>
            </div>

            <div className="p-2.5 bg-[#0a0c10] rounded-lg border border-white/[0.06] text-center space-y-1">
              <div className="text-[10px] font-mono text-blue-400 uppercase font-bold">Stage 03</div>
              <div className="text-xs font-bold text-white">Classifier Head</div>
              <div className="text-[9px] font-mono text-slate-400">Binary Output Probability</div>
            </div>
          </div>

          {/* Loss Convergence & Frameworks Telemetry */}
          <div className="p-2 bg-[#0a0c10] rounded-lg border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[10px] font-mono text-slate-300">
            <span>Loss Function: Binary Cross-Entropy</span>
            <span className="text-blue-400 font-semibold">PyTorch & TensorFlow Dual Validation</span>
          </div>

          {/* Telemetry Footer */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[10px] font-mono text-slate-400 border-t border-white/[0.08] pt-2.5 gap-1.5">
            <span className="truncate">Academic Deep Learning Benchmark Build</span>
            <span className="text-[9px] text-slate-500 uppercase font-semibold flex-shrink-0">
              [ ML PIPELINE MOCKUP ]
            </span>
          </div>
        </div>
      );
  }
};
