import type React from 'react';

interface ProjectDiagramProps {
  type: 'campus' | 'physiosis' | 'planner' | 'pneumonia';
}

export const ProjectDiagram: React.FC<ProjectDiagramProps> = ({ type }) => {
  // ── 1. SMART CAMPUS: Clean Technical System Architecture ──
  if (type === 'campus') {
    return (
      <div className="w-full h-full min-h-[260px] sm:min-h-[340px] flex items-center justify-center p-6 bg-[#0a0c12] rounded-lg border border-white/[0.08] relative overflow-hidden select-none">
        <svg viewBox="0 0 400 280" className="w-full h-full max-w-[400px]" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Subtle bounding grid */}
          <line x1="40" y1="140" x2="360" y2="140" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="200" y1="30" x2="200" y2="250" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />

          {/* Bus Interconnect Conduits */}
          <path d="M 110 75 L 170 140" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
          <path d="M 290 75 L 230 140" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
          <path d="M 110 205 L 170 140" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
          <path d="M 290 205 L 230 140" stroke="rgba(56,189,248,0.4)" strokeWidth="1" />

          {/* Central Core: REST API & MongoDB Cluster */}
          <rect x="160" y="115" width="80" height="50" rx="4" fill="#111520" stroke="#38bdf8" strokeWidth="1.2" />
          <text x="200" y="137" textAnchor="middle" fill="#ffffff" fontSize="9" fontFamily="JetBrains Mono" fontWeight="600">CORE SERVER</text>
          <text x="200" y="152" textAnchor="middle" fill="#64748b" fontSize="7.5" fontFamily="JetBrains Mono">REST / MONGO</text>

          {/* Module 1: Student Registry */}
          <rect x="50" y="55" width="85" height="40" rx="3" fill="#0d1017" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          <text x="92" y="74" textAnchor="middle" fill="#f1f5f9" fontSize="8" fontFamily="JetBrains Mono" fontWeight="600">STUDENT MGMT</text>
          <text x="92" y="87" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="JetBrains Mono">RBAC MODULE</text>

          {/* Module 2: Leave Workflow */}
          <rect x="265" y="55" width="85" height="40" rx="3" fill="#0d1017" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          <text x="307" y="74" textAnchor="middle" fill="#f1f5f9" fontSize="8" fontFamily="JetBrains Mono" fontWeight="600">LEAVE PORTAL</text>
          <text x="307" y="87" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="JetBrains Mono">APPROVAL FLOW</text>

          {/* Module 3: Campus Voting */}
          <rect x="50" y="185" width="85" height="40" rx="3" fill="#0d1017" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          <text x="92" y="204" textAnchor="middle" fill="#f1f5f9" fontSize="8" fontFamily="JetBrains Mono" fontWeight="600">CAMPUS VOTING</text>
          <text x="92" y="217" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="JetBrains Mono">JWT AUTH</text>

          {/* Module 4: Power BI Analytics Pipeline */}
          <rect x="265" y="185" width="85" height="40" rx="3" fill="#0d1017" stroke="rgba(56,189,248,0.3)" strokeWidth="1" />
          <text x="307" y="204" textAnchor="middle" fill="#f1f5f9" fontSize="8" fontFamily="JetBrains Mono" fontWeight="600">ANALYTICS</text>
          <text x="307" y="217" textAnchor="middle" fill="#38bdf8" fontSize="7" fontFamily="JetBrains Mono">SQL + POWER BI</text>

          {/* Data Transfer Indicator Points */}
          <circle cx="140" cy="108" r="2.5" fill="#38bdf8" />
          <circle cx="260" cy="172" r="2.5" fill="#38bdf8" />
        </svg>

        <div className="absolute bottom-3 left-4 font-mono-tech text-[10px] text-slate-400">
          SYS // DISTRIBUTED INSTITUTIONAL TOPOLOGY
        </div>
      </div>
    );
  }

  // ── 2. PHYSIOSIS: Kinematic Joint Coordinate Frame ──
  if (type === 'physiosis') {
    return (
      <div className="w-full h-full min-h-[260px] sm:min-h-[340px] flex items-center justify-center p-6 bg-[#0a0c12] rounded-lg border border-white/[0.08] relative overflow-hidden select-none">
        <svg viewBox="0 0 400 280" className="w-full h-full max-w-[400px]" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Ground Contact Reference Line */}
          <line x1="60" y1="245" x2="340" y2="245" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          <text x="345" y="248" fill="#64748b" fontSize="7" fontFamily="JetBrains Mono">Z=0</text>

          {/* Kinematic Skeleton Vectors */}
          {/* Head */}
          <circle cx="200" cy="45" r="14" stroke="#ffffff" strokeWidth="1.2" fill="#0d1017" />
          <circle cx="200" cy="45" r="2" fill="#38bdf8" />

          {/* Spine */}
          <line x1="200" y1="59" x2="200" y2="135" stroke="#ffffff" strokeWidth="1.2" />

          {/* Shoulder Girdle */}
          <line x1="165" y1="80" x2="235" y2="80" stroke="#94a3b8" strokeWidth="1" />
          <circle cx="165" cy="80" r="3" fill="#ffffff" />
          <circle cx="235" cy="80" r="3" fill="#ffffff" />

          {/* Arms (Counter-swing) */}
          <line x1="165" y1="80" x2="145" y2="120" stroke="#64748b" strokeWidth="1" />
          <line x1="145" y1="120" x2="135" y2="160" stroke="#64748b" strokeWidth="1" />
          <line x1="235" y1="80" x2="255" y2="120" stroke="#64748b" strokeWidth="1" />
          <line x1="255" y1="120" x2="265" y2="160" stroke="#64748b" strokeWidth="1" />

          {/* Pelvis */}
          <line x1="180" y1="135" x2="220" y2="135" stroke="#ffffff" strokeWidth="1.2" />

          {/* Stance Leg (Left) */}
          <line x1="180" y1="135" x2="175" y2="190" stroke="#38bdf8" strokeWidth="1.4" />
          <line x1="175" y1="190" x2="170" y2="245" stroke="#38bdf8" strokeWidth="1.4" />
          <circle cx="180" cy="135" r="3" fill="#ffffff" />
          <circle cx="175" cy="190" r="3.5" fill="#38bdf8" />
          <circle cx="170" cy="245" r="3" fill="#ffffff" />

          {/* Swing Leg (Right) */}
          <line x1="220" y1="135" x2="240" y2="185" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="240" y1="185" x2="230" y2="235" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="220" cy="135" r="3" fill="#ffffff" />
          <circle cx="240" cy="185" r="3" fill="#94a3b8" />
          <circle cx="230" cy="235" r="3" fill="#94a3b8" />

          {/* Joint Angle Telemetry Box */}
          <rect x="70" y="175" width="80" height="30" rx="3" fill="#0d1017" stroke="rgba(56,189,248,0.3)" strokeWidth="1" />
          <text x="110" y="188" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="JetBrains Mono">L-KNEE ANGLE</text>
          <text x="110" y="199" textAnchor="middle" fill="#38bdf8" fontSize="8.5" fontFamily="JetBrains Mono" fontWeight="600">θ = 142.4°</text>

          {/* Coordinate Crosshairs */}
          <line x1="175" y1="180" x2="175" y2="200" stroke="#38bdf8" strokeWidth="0.8" />
          <line x1="165" y1="190" x2="185" y2="190" stroke="#38bdf8" strokeWidth="0.8" />
        </svg>

        <div className="absolute bottom-3 left-4 font-mono-tech text-[10px] text-slate-400">
          KINEMATICS // 33-POINT POSE LANDMARK EXTRACTION
        </div>
      </div>
    );
  }

  // ── 3. SMART STUDY PLANNER: Adaptive Chrono-Schedule Grid ──
  if (type === 'planner') {
    return (
      <div className="w-full h-full min-h-[260px] sm:min-h-[340px] flex items-center justify-center p-6 bg-[#0a0c12] rounded-lg border border-white/[0.08] relative overflow-hidden select-none">
        <svg viewBox="0 0 400 280" className="w-full h-full max-w-[400px]" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Time axis */}
          <line x1="50" y1="190" x2="350" y2="190" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          <text x="50" y="208" fill="#64748b" fontSize="7.5" fontFamily="JetBrains Mono">08:00</text>
          <text x="130" y="208" fill="#64748b" fontSize="7.5" fontFamily="JetBrains Mono">11:00</text>
          <text x="210" y="208" fill="#64748b" fontSize="7.5" fontFamily="JetBrains Mono">14:00</text>
          <text x="290" y="208" fill="#64748b" fontSize="7.5" fontFamily="JetBrains Mono">17:00</text>

          {/* Focus Load Curve */}
          <path d="M 50 140 C 90 90, 120 70, 160 110 S 240 60, 290 120 S 330 140, 350 150" stroke="rgba(56,189,248,0.4)" strokeWidth="1.2" fill="none" />

          {/* Planned Session Intervals */}
          <rect x="60" y="115" width="70" height="60" rx="3" fill="#0d1017" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <text x="95" y="140" textAnchor="middle" fill="#ffffff" fontSize="8" fontFamily="JetBrains Mono" fontWeight="600">DEEP WORK</text>
          <text x="95" y="154" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="JetBrains Mono">DSA INTERVAL</text>

          <rect x="150" y="95" width="90" height="80" rx="3" fill="#0e131d" stroke="#38bdf8" strokeWidth="1.2" />
          <text x="195" y="130" textAnchor="middle" fill="#ffffff" fontSize="8.5" fontFamily="JetBrains Mono" fontWeight="600">AI / ML SPRINT</text>
          <text x="195" y="145" textAnchor="middle" fill="#38bdf8" fontSize="7" fontFamily="JetBrains Mono">ADAPTIVE PRIORITY</text>

          <rect x="260" y="130" width="75" height="45" rx="3" fill="#0d1017" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <text x="297" y="152" textAnchor="middle" fill="#ffffff" fontSize="8" fontFamily="JetBrains Mono" fontWeight="600">REVISION</text>
          <text x="297" y="164" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="JetBrains Mono">TRACKED</text>

          {/* State Sync Pip */}
          <circle cx="195" cy="80" r="3" fill="#38bdf8" />
          <line x1="195" y1="83" x2="195" y2="95" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" />
        </svg>

        <div className="absolute bottom-3 left-4 font-mono-tech text-[10px] text-slate-400">
          SCHEDULING // CLOUD FIRESTORE REAL-TIME LISTENER
        </div>
      </div>
    );
  }

  // ── 4. PNEUMONIA DETECTION: Convolutional Neural Network Workflow ──
  return (
    <div className="w-full h-full min-h-[260px] sm:min-h-[340px] flex items-center justify-center p-6 bg-[#0a0c12] rounded-lg border border-white/[0.08] relative overflow-hidden select-none">
      <svg viewBox="0 0 400 280" className="w-full h-full max-w-[400px]" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Layer 1: Input Radiograph Frame */}
        <rect x="45" y="60" width="80" height="120" rx="3" fill="#0d1017" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <text x="85" y="50" textAnchor="middle" fill="#64748b" fontSize="7.5" fontFamily="JetBrains Mono">CHEST X-RAY</text>

        {/* Minimal Thoracic Radiographic Symmetry */}
        <ellipse cx="72" cy="120" rx="14" ry="28" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
        <ellipse cx="98" cy="120" rx="14" ry="28" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />

        {/* Feature Inspection ROI Box */}
        <rect x="62" y="105" width="22" height="26" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" fill="none" />

        {/* Pipeline Arrow */}
        <line x1="135" y1="120" x2="165" y2="120" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

        {/* Layer 2: Convolutional Feature Maps */}
        <rect x="175" y="75" width="45" height="90" rx="2" fill="#0d1017" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <rect x="183" y="67" width="45" height="90" rx="2" fill="#111624" stroke="#38bdf8" strokeWidth="1" />
        <text x="205" y="57" textAnchor="middle" fill="#64748b" fontSize="7.5" fontFamily="JetBrains Mono">CONV2D</text>

        {/* Pipeline Arrow */}
        <line x1="238" y1="112" x2="268" y2="112" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

        {/* Layer 3: Dense Latent Representation */}
        <rect x="275" y="80" width="30" height="65" rx="2" fill="#0d1017" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <text x="290" y="70" textAnchor="middle" fill="#64748b" fontSize="7.5" fontFamily="JetBrains Mono">EFFICIENTNET</text>

        {/* Pipeline Arrow */}
        <line x1="315" y1="112" x2="335" y2="112" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

        {/* Layer 4: Binary Classification Output Node */}
        <circle cx="348" cy="112" r="10" fill="#0d1017" stroke="#38bdf8" strokeWidth="1.2" />
        <text x="348" y="115" textAnchor="middle" fill="#38bdf8" fontSize="7" fontFamily="JetBrains Mono" fontWeight="600">P(x)</text>
      </svg>

      <div className="absolute bottom-3 left-4 font-mono-tech text-[10px] text-slate-400">
        PIPELINE // TRANSFER LEARNING & CLASSIFICATION
      </div>
    </div>
  );
};
