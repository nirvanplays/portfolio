import type React from 'react';

interface ProjectMockupProps {
  type: 'campus' | 'physiosis' | 'planner' | 'pneumonia';
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ type }) => {
  switch (type) {
    case 'campus':
      return (
        <div className="w-full h-full min-h-[280px] p-5 bg-[#141822] border border-white/[0.08] rounded-xl flex flex-col justify-between select-none">
          {/* Top Window Header */}
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            </div>
            <span className="text-[11px] font-mono text-slate-400">
              campus-governance.app // role-router
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
              JWT SECURED
            </span>
          </div>

          {/* Three Role-Based Modules Grid */}
          <div className="grid grid-cols-3 gap-3 my-auto py-3">
            <div className="p-3 bg-[#0d1017] rounded-lg border border-white/[0.06] space-y-2">
              <div className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                Student Mgmt
              </div>
              <div className="text-xs font-semibold text-white">Records & Directory</div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full w-4/5" />
              </div>
            </div>

            <div className="p-3 bg-[#0d1017] rounded-lg border border-white/[0.06] space-y-2">
              <div className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                Leave Workflow
              </div>
              <div className="text-xs font-semibold text-white">Approvals & Petitions</div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-3/5" />
              </div>
            </div>

            <div className="p-3 bg-[#0d1017] rounded-lg border border-white/[0.06] space-y-2">
              <div className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                Campus Voting
              </div>
              <div className="text-xs font-semibold text-white">Verifiable Ballot</div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-indigo-500 h-full w-full" />
              </div>
            </div>
          </div>

          {/* Telemetry Footer */}
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-white/[0.08] pt-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Express REST API · MongoDB Cluster</span>
            </div>
            <span className="text-[9px] text-slate-400 uppercase">UI Mockup Representation</span>
          </div>
        </div>
      );

    case 'physiosis':
      return (
        <div className="w-full h-full min-h-[280px] p-5 bg-[#141822] border border-white/[0.08] rounded-xl flex flex-col justify-between select-none">
          {/* Top Video Header */}
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span className="text-[11px] font-mono text-slate-300 uppercase">
                FRAME STREAM // 30 FPS
              </span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
              MediaPipe · 33 Keypoints
            </span>
          </div>

          {/* Skeletal Pose Telemetry Viewport */}
          <div className="relative h-32 my-auto flex items-center justify-center">
            <svg
              className="w-full h-full max-h-32 text-slate-500"
              viewBox="0 0 240 120"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {/* Torso & Head */}
              <circle cx="120" cy="20" r="10" stroke="#3b82f6" strokeWidth="2" fill="#1e293b" />
              <line x1="120" y1="30" x2="120" y2="70" stroke="#64748b" strokeWidth="2" />
              {/* Shoulders & Arms */}
              <line x1="90" y1="40" x2="150" y2="40" stroke="#64748b" strokeWidth="2" />
              <line x1="90" y1="40" x2="75" y2="70" stroke="#475569" />
              <line x1="150" y1="40" x2="165" y2="70" stroke="#475569" />
              {/* Hips & Lower Kinematic Extremities */}
              <line x1="120" y1="70" x2="100" y2="95" stroke="#3b82f6" strokeWidth="2" />
              <line x1="100" y1="95" x2="90" y2="115" stroke="#3b82f6" strokeWidth="2" />
              <line x1="120" y1="70" x2="140" y2="95" stroke="#3b82f6" strokeWidth="2" />
              <line x1="140" y1="95" x2="155" y2="115" stroke="#3b82f6" strokeWidth="2" />
              {/* Keypoint Joint Nodes */}
              <circle cx="100" cy="95" r="3.5" fill="#60a5fa" />
              <circle cx="140" cy="95" r="3.5" fill="#60a5fa" />
              <circle cx="90" cy="115" r="3" fill="#38bdf8" />
              <circle cx="155" cy="115" r="3" fill="#38bdf8" />
            </svg>

            {/* Readout Callouts */}
            <div className="absolute top-1 left-2 px-2 py-1 rounded bg-[#0d1017]/90 border border-white/[0.08] text-[10px] font-mono text-slate-300">
              Knee Angle: <span className="font-bold text-blue-400">142.4°</span>
            </div>
            <div className="absolute bottom-1 right-2 px-2 py-1 rounded bg-[#0d1017]/90 border border-white/[0.08] text-[10px] font-mono text-slate-300">
              Gait Cycle: <span className="font-bold text-emerald-400">Stance Phase</span>
            </div>
          </div>

          {/* Telemetry Footer */}
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-white/[0.08] pt-3">
            <span>FastAPI Ingestion · Real-Time Vector Math</span>
            <span className="text-[9px] text-slate-400 uppercase">Kinematic Telemetry</span>
          </div>
        </div>
      );

    case 'planner':
      return (
        <div className="w-full h-full min-h-[280px] p-5 bg-[#141822] border border-white/[0.08] rounded-xl flex flex-col justify-between select-none">
          {/* Top Window Header */}
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
            <span className="text-[11px] font-mono text-slate-300 uppercase">
              STUDY PLANNER // ADAPTIVE TIMETABLE
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
              Firestore Synced
            </span>
          </div>

          {/* Timetable Session Blocks */}
          <div className="space-y-2.5 my-auto py-3">
            <div className="flex items-center justify-between p-2.5 bg-[#0d1017] rounded-lg border border-white/[0.06]">
              <div className="space-y-0.5">
                <div className="text-xs font-semibold text-white">
                  Algorithms: Dynamic Programming & Graph Traversals
                </div>
                <div className="text-[10px] font-mono text-slate-400">
                  Adaptive Focus Session · 90 min
                </div>
              </div>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                Completed
              </span>
            </div>

            <div className="flex items-center justify-between p-2.5 bg-[#0d1017] rounded-lg border border-white/[0.06]">
              <div className="space-y-0.5">
                <div className="text-xs font-semibold text-white">
                  Computer Vision: OpenCV Spatial Filtering Pipelines
                </div>
                <div className="text-[10px] font-mono text-slate-400">
                  Deep Work Block · 60 min
                </div>
              </div>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/30">
                In Progress
              </span>
            </div>
          </div>

          {/* Telemetry Footer */}
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-white/[0.08] pt-3">
            <span>Presented @ GDG TechSprint Hackathon</span>
            <span className="text-[9px] text-slate-400 uppercase">Prototype Interface</span>
          </div>
        </div>
      );

    case 'pneumonia':
      return (
        <div className="w-full h-full min-h-[280px] p-5 bg-[#141822] border border-white/[0.08] rounded-xl flex flex-col justify-between select-none">
          {/* Top Window Header */}
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
            <span className="text-[11px] font-mono text-slate-300 uppercase">
              DEEP LEARNING // INFERENCE WORKFLOW
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
              EfficientNet · Transfer Learning
            </span>
          </div>

          {/* ML Pipeline Stages Representation */}
          <div className="grid grid-cols-3 gap-2 my-auto py-3">
            <div className="p-2.5 bg-[#0d1017] rounded-lg border border-white/[0.06] text-center space-y-1">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Stage 01</div>
              <div className="text-xs font-bold text-white">Chest X-Ray</div>
              <div className="text-[9px] font-mono text-slate-400">OpenCV Preprocess</div>
            </div>

            <div className="p-2.5 bg-[#0d1017] rounded-lg border border-blue-500/30 bg-blue-500/5 text-center space-y-1">
              <div className="text-[10px] font-mono text-blue-400 uppercase">Stage 02</div>
              <div className="text-xs font-bold text-white">Conv Layers</div>
              <div className="text-[9px] font-mono text-slate-400">Feature Extraction</div>
            </div>

            <div className="p-2.5 bg-[#0d1017] rounded-lg border border-white/[0.06] text-center space-y-1">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Stage 03</div>
              <div className="text-xs font-bold text-white">Classifier</div>
              <div className="text-[9px] font-mono text-slate-400">Pneumonia / Normal</div>
            </div>
          </div>

          {/* Telemetry Footer */}
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-white/[0.08] pt-3">
            <span>PyTorch & TensorFlow Benchmark Build</span>
            <span className="text-[9px] text-slate-400 uppercase">Pipeline Representation</span>
          </div>
        </div>
      );
  }
};
