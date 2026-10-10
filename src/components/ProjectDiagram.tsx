import type React from 'react';

interface ProjectDiagramProps {
  type: 'campus' | 'physiosis' | 'planner' | 'pneumonia';
}

export const ProjectDiagram: React.FC<ProjectDiagramProps> = ({ type }) => {
  switch (type) {
    case 'campus':
      return (
        <div className="w-full h-full min-h-[260px] p-5 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between select-none">
          {/* Top Window Bar */}
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            </div>
            <span className="text-[11px] font-mono text-slate-500 font-medium">
              campus-system.local // dashboard
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-semibold">
              JWT AUTH
            </span>
          </div>

          {/* Realistic Dashboard Mockup Grid */}
          <div className="grid grid-cols-3 gap-3 my-auto py-2">
            <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-2xs space-y-2">
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                Student Module
              </div>
              <div className="text-base font-bold text-slate-800">Records & Profiles</div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-full w-4/5" />
              </div>
            </div>

            <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-2xs space-y-2">
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                Leave Workflow
              </div>
              <div className="text-base font-bold text-slate-800">Approvals & Routing</div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-600 h-full w-3/5" />
              </div>
            </div>

            <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-2xs space-y-2">
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                Campus Voting
              </div>
              <div className="text-base font-bold text-slate-800">Secure Balloting</div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-indigo-600 h-full w-full" />
              </div>
            </div>
          </div>

          {/* Bottom Telemetry Bar */}
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 border-t border-slate-200 pt-2.5">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              REST API: 200 OK
            </span>
            <span>MongoDB Cluster: Synchronized</span>
          </div>
        </div>
      );

    case 'physiosis':
      return (
        <div className="w-full h-full min-h-[260px] p-5 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between select-none">
          {/* Top Video Header */}
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span className="text-[11px] font-mono text-slate-700 font-semibold uppercase">
                VIDEO FEED // 30 FPS
              </span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-semibold">
              MediaPipe Pose · 33 Landmarks
            </span>
          </div>

          {/* Skeletal Pose Vector Illustration */}
          <div className="relative h-32 my-auto flex items-center justify-center">
            <svg
              className="w-full h-full max-h-32 text-slate-400"
              viewBox="0 0 240 120"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {/* Torso & Head */}
              <circle cx="120" cy="20" r="10" stroke="#2563eb" strokeWidth="2" fill="#eff6ff" />
              <line x1="120" y1="30" x2="120" y2="70" stroke="#475569" strokeWidth="2" />
              {/* Shoulders & Arms */}
              <line x1="90" y1="40" x2="150" y2="40" stroke="#475569" strokeWidth="2" />
              <line x1="90" y1="40" x2="75" y2="70" stroke="#64748b" />
              <line x1="150" y1="40" x2="165" y2="70" stroke="#64748b" />
              {/* Hips & Legs */}
              <line x1="120" y1="70" x2="100" y2="95" stroke="#2563eb" strokeWidth="2" />
              <line x1="100" y1="95" x2="90" y2="115" stroke="#2563eb" strokeWidth="2" />
              <line x1="120" y1="70" x2="140" y2="95" stroke="#2563eb" strokeWidth="2" />
              <line x1="140" y1="95" x2="155" y2="115" stroke="#2563eb" strokeWidth="2" />
              {/* Joint Keypoint Nodes */}
              <circle cx="100" cy="95" r="3.5" fill="#2563eb" />
              <circle cx="140" cy="95" r="3.5" fill="#2563eb" />
              <circle cx="90" cy="115" r="3" fill="#0284c7" />
              <circle cx="155" cy="115" r="3" fill="#0284c7" />
            </svg>

            {/* Readout callouts */}
            <div className="absolute top-2 left-2 px-2 py-1 rounded bg-white border border-slate-200 text-[10px] font-mono text-slate-700 shadow-2xs">
              Knee Angle: <span className="font-bold text-blue-600">142.4°</span>
            </div>
            <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-white border border-slate-200 text-[10px] font-mono text-slate-700 shadow-2xs">
              Gait Cycle: <span className="font-bold text-emerald-600">Stance Phase</span>
            </div>
          </div>

          {/* Bottom Stream Status */}
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 border-t border-slate-200 pt-2.5">
            <span>FastAPI Server: Ingestion Active</span>
            <span>Joint Vector Calculations: Real-Time</span>
          </div>
        </div>
      );

    case 'planner':
      return (
        <div className="w-full h-full min-h-[260px] p-5 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between select-none">
          {/* Top Header */}
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <span className="text-[11px] font-mono text-slate-700 font-semibold uppercase">
              STUDY PLANNER // SCHEDULE MATRIX
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-semibold">
              Cloud Firestore Sync
            </span>
          </div>

          {/* Calendar & Task Blocks */}
          <div className="space-y-2.5 my-auto py-2">
            <div className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-slate-200 shadow-2xs">
              <div className="space-y-0.5">
                <div className="text-xs font-semibold text-slate-800">
                  Data Structures: Binary Trees & Graphs
                </div>
                <div className="text-[10px] font-mono text-slate-500">
                  Adaptive Focus Session · 90 min
                </div>
              </div>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                Completed
              </span>
            </div>

            <div className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-slate-200 shadow-2xs">
              <div className="space-y-0.5">
                <div className="text-xs font-semibold text-slate-800">
                  Computer Vision: OpenCV Spatial Filtering
                </div>
                <div className="text-[10px] font-mono text-slate-500">
                  Deep Work Block · 60 min
                </div>
              </div>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                In Progress
              </span>
            </div>
          </div>

          {/* Bottom Hackathon Marker */}
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 border-t border-slate-200 pt-2.5">
            <span>Presented @ GDG TechSprint Hackathon</span>
            <span>Real-time Listeners Active</span>
          </div>
        </div>
      );

    case 'pneumonia':
      return (
        <div className="w-full h-full min-h-[260px] p-5 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between select-none">
          {/* Top Header */}
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <span className="text-[11px] font-mono text-slate-700 font-semibold uppercase">
              DEEP LEARNING // PIPELINE
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-semibold">
              EfficientNet · Transfer Learning
            </span>
          </div>

          {/* CNN Architecture Steps */}
          <div className="grid grid-cols-3 gap-2 my-auto py-2">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200 shadow-2xs text-center space-y-1">
              <div className="text-[10px] font-mono text-slate-500 uppercase">Input</div>
              <div className="text-xs font-bold text-slate-800">Chest X-Ray</div>
              <div className="text-[9px] font-mono text-slate-400">OpenCV Preprocess</div>
            </div>

            <div className="p-2.5 bg-white rounded-lg border border-blue-200 bg-blue-50/30 text-center space-y-1">
              <div className="text-[10px] font-mono text-blue-600 uppercase">Backbone</div>
              <div className="text-xs font-bold text-slate-800">Conv Layers</div>
              <div className="text-[9px] font-mono text-slate-400">Feature Extraction</div>
            </div>

            <div className="p-2.5 bg-white rounded-lg border border-slate-200 shadow-2xs text-center space-y-1">
              <div className="text-[10px] font-mono text-slate-500 uppercase">Output</div>
              <div className="text-xs font-bold text-slate-800">Classification</div>
              <div className="text-[9px] font-mono text-slate-400">Pneumonia / Normal</div>
            </div>
          </div>

          {/* Bottom Evaluation Framework */}
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 border-t border-slate-200 pt-2.5">
            <span>Framework: PyTorch & TensorFlow</span>
            <span>Academic Benchmark Build</span>
          </div>
        </div>
      );
  }
};
