import type React from 'react';

interface ProjectDiagramProps {
  type: 'campus' | 'physiosis' | 'planner' | 'pneumonia';
}

export const ProjectDiagram: React.FC<ProjectDiagramProps> = ({ type }) => {
  // ── 1. SMART CAMPUS: Campus Data Topology Diagram ──
  if (type === 'campus') {
    return (
      <div className="w-full h-full min-h-[260px] sm:min-h-[340px] flex items-center justify-center p-6 bg-[#08090d] rounded-lg border border-white/[0.06] relative overflow-hidden select-none">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-grid-faint opacity-40 pointer-events-none" />

        <svg viewBox="0 0 400 300" className="w-full h-full max-w-[420px]" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background concentric network rings */}
          <circle cx="200" cy="150" r="110" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
          <circle cx="200" cy="150" r="70" stroke="rgba(0,229,255,0.12)" />

          {/* Connected Pathway Lines from Satellites to Mainframe */}
          <line x1="200" y1="150" x2="100" y2="70" stroke="rgba(0,229,255,0.3)" strokeWidth="1.5" />
          <line x1="200" y1="150" x2="300" y2="70" stroke="rgba(0,229,255,0.3)" strokeWidth="1.5" />
          <line x1="200" y1="150" x2="90" y2="220" stroke="rgba(0,229,255,0.3)" strokeWidth="1.5" />
          <line x1="200" y1="150" x2="310" y2="220" stroke="rgba(0,229,255,0.3)" strokeWidth="1.5" />

          {/* Central Mainframe Hub */}
          <rect x="165" y="120" width="70" height="60" rx="6" fill="#0f172a" stroke="#00e5ff" strokeWidth="1.5" />
          <text x="200" y="145" textAnchor="middle" fill="#00e5ff" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">CENTRAL</text>
          <text x="200" y="162" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="JetBrains Mono">REST / MONGO</text>

          {/* Node 1: Student Management */}
          <circle cx="100" cy="70" r="28" fill="#0e131f" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <text x="100" y="68" textAnchor="middle" fill="#ffffff" fontSize="9" fontFamily="JetBrains Mono" fontWeight="bold">STUDENT</text>
          <text x="100" y="80" textAnchor="middle" fill="#94a3b8" fontSize="7" fontFamily="JetBrains Mono">MODULE</text>

          {/* Node 2: Leave Management */}
          <circle cx="300" cy="70" r="28" fill="#0e131f" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <text x="300" y="68" textAnchor="middle" fill="#ffffff" fontSize="9" fontFamily="JetBrains Mono" fontWeight="bold">LEAVE</text>
          <text x="300" y="80" textAnchor="middle" fill="#94a3b8" fontSize="7" fontFamily="JetBrains Mono">WORKFLOW</text>

          {/* Node 3: Campus Voting */}
          <circle cx="90" cy="220" r="28" fill="#0e131f" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <text x="90" y="218" textAnchor="middle" fill="#ffffff" fontSize="9" fontFamily="JetBrains Mono" fontWeight="bold">VOTING</text>
          <text x="90" y="230" textAnchor="middle" fill="#94a3b8" fontSize="7" fontFamily="JetBrains Mono">SECURE JWT</text>

          {/* Node 4: Power BI Analytics Pipeline */}
          <circle cx="310" cy="220" r="28" fill="#0e131f" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <text x="310" y="218" textAnchor="middle" fill="#ffffff" fontSize="9" fontFamily="JetBrains Mono" fontWeight="bold">ANALYTICS</text>
          <text x="310" y="230" textAnchor="middle" fill="#38bdf8" fontSize="7" fontFamily="JetBrains Mono">SQL / BI</text>

          {/* Traveling Data Packet Indicators */}
          <circle cx="150" cy="110" r="3.5" fill="#00e5ff" className="animate-ping" />
          <circle cx="255" cy="185" r="3.5" fill="#00e5ff" className="animate-ping" />
        </svg>

        <div className="absolute bottom-3 left-4 font-mono-tech text-[10px] text-slate-400">
          CAMPUS ARCHITECTURE // REST API + JWT + MONGODB
        </div>
      </div>
    );
  }

  // ── 2. PHYSIOSIS: Biomechanical Gait Kinematics ──
  if (type === 'physiosis') {
    return (
      <div className="w-full h-full min-h-[260px] sm:min-h-[340px] flex items-center justify-center p-6 bg-[#08090d] rounded-lg border border-white/[0.06] relative overflow-hidden select-none">
        <div className="absolute inset-0 bg-grid-faint opacity-40 pointer-events-none" />

        <svg viewBox="0 0 400 300" className="w-full h-full max-w-[420px]" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Ground locomotion line */}
          <line x1="60" y1="260" x2="340" y2="260" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />

          {/* Head & Spine */}
          <circle cx="200" cy="50" r="16" stroke="#00e5ff" strokeWidth="1.5" fill="#0a101d" />
          <line x1="200" y1="66" x2="200" y2="150" stroke="#00e5ff" strokeWidth="2" />

          {/* Shoulders & Arms */}
          <line x1="160" y1="95" x2="240" y2="95" stroke="#38bdf8" strokeWidth="2" />
          <line x1="160" y1="95" x2="140" y2="140" stroke="#38bdf8" strokeWidth="1.5" />
          <line x1="140" y1="140" x2="130" y2="185" stroke="#38bdf8" strokeWidth="1.5" />
          <line x1="240" y1="95" x2="260" y2="140" stroke="#38bdf8" strokeWidth="1.5" />
          <line x1="260" y1="140" x2="270" y2="185" stroke="#38bdf8" strokeWidth="1.5" />

          {/* Pelvis & Gait Locomotion Legs (Left stance, Right swing) */}
          <line x1="175" y1="150" x2="225" y2="150" stroke="#00e5ff" strokeWidth="2" />

          {/* Left Leg */}
          <line x1="180" y1="150" x2="170" y2="205" stroke="#00e5ff" strokeWidth="2" />
          <line x1="170" y1="205" x2="165" y2="260" stroke="#00e5ff" strokeWidth="2" />

          {/* Right Leg in Gait Cycle */}
          <line x1="220" y1="150" x2="245" y2="195" stroke="#6366f1" strokeWidth="2" />
          <line x1="245" y1="195" x2="230" y2="250" stroke="#6366f1" strokeWidth="2" />

          {/* Joint Keypoint Markers */}
          <circle cx="170" cy="205" r="4" fill="#00e5ff" />
          <circle cx="245" cy="195" r="4" fill="#6366f1" />
          <circle cx="165" cy="260" r="4" fill="#00e5ff" />
          <circle cx="230" cy="250" r="4" fill="#6366f1" />

          {/* Knee Joint Angle Measurement Arc */}
          <path d="M 160 195 A 15 15 0 0 1 185 200" stroke="#00e5ff" strokeWidth="1.5" fill="none" strokeDasharray="2 2" />
          <text x="120" y="205" fill="#00e5ff" fontSize="9" fontFamily="JetBrains Mono">θ = 142°</text>

          <path d="M 235 185 A 15 15 0 0 1 255 200" stroke="#6366f1" strokeWidth="1.5" fill="none" strokeDasharray="2 2" />
          <text x="260" y="200" fill="#a5b4fc" fontSize="9" fontFamily="JetBrains Mono">θ = 118°</text>
        </svg>

        <div className="absolute bottom-3 left-4 font-mono-tech text-[10px] text-slate-400">
          KINEMATIC POSE ANALYSIS // MEDIAPIPE + OPENCV + FASTAPI
        </div>
      </div>
    );
  }

  // ── 3. SMART STUDY PLANNER: Adaptive Scheduling & Time Grids ──
  if (type === 'planner') {
    return (
      <div className="w-full h-full min-h-[260px] sm:min-h-[340px] flex items-center justify-center p-6 bg-[#08090d] rounded-lg border border-white/[0.06] relative overflow-hidden select-none">
        <div className="absolute inset-0 bg-grid-faint opacity-40 pointer-events-none" />

        <svg viewBox="0 0 400 300" className="w-full h-full max-w-[420px]" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Time axis */}
          <line x1="50" y1="220" x2="350" y2="220" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
          <text x="50" y="240" fill="#64748b" fontSize="8" fontFamily="JetBrains Mono">08:00</text>
          <text x="150" y="240" fill="#64748b" fontSize="8" fontFamily="JetBrains Mono">12:00</text>
          <text x="250" y="240" fill="#64748b" fontSize="8" fontFamily="JetBrains Mono">16:00</text>
          <text x="330" y="240" fill="#64748b" fontSize="8" fontFamily="JetBrains Mono">20:00</text>

          {/* Adaptive Study Session Blocks */}
          <rect x="60" y="140" width="75" height="60" rx="4" fill="rgba(0,229,255,0.12)" stroke="#00e5ff" strokeWidth="1.5" />
          <text x="97" y="165" textAnchor="middle" fill="#00e5ff" fontSize="9" fontFamily="JetBrains Mono" fontWeight="bold">BLOCK A</text>
          <text x="97" y="180" textAnchor="middle" fill="#94a3b8" fontSize="7" fontFamily="JetBrains Mono">DEEP FOCUS</text>

          <rect x="155" y="120" width="90" height="80" rx="4" fill="rgba(99,102,241,0.12)" stroke="#6366f1" strokeWidth="1.5" />
          <text x="200" y="155" textAnchor="middle" fill="#a5b4fc" fontSize="9" fontFamily="JetBrains Mono" fontWeight="bold">BLOCK B</text>
          <text x="200" y="170" textAnchor="middle" fill="#94a3b8" fontSize="7" fontFamily="JetBrains Mono">DSA SPRINT</text>

          <rect x="265" y="150" width="70" height="50" rx="4" fill="rgba(56,189,248,0.12)" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="300" y="175" textAnchor="middle" fill="#38bdf8" fontSize="9" fontFamily="JetBrains Mono" fontWeight="bold">BLOCK C</text>
          <text x="300" y="190" textAnchor="middle" fill="#94a3b8" fontSize="7" fontFamily="JetBrains Mono">REVIEW</text>

          {/* Productivity Waveform */}
          <path d="M 50 90 Q 100 40, 160 80 T 260 50 T 350 90" stroke="rgba(0,229,255,0.4)" strokeWidth="2" fill="none" />
          <circle cx="160" cy="80" r="4" fill="#00e5ff" />
          <circle cx="260" cy="50" r="4" fill="#6366f1" />
        </svg>

        <div className="absolute bottom-3 left-4 font-mono-tech text-[10px] text-slate-400">
          ADAPTIVE SCHEDULING ENGINE // FIREBASE + FIRESTORE
        </div>
      </div>
    );
  }

  // ── 4. PNEUMONIA DETECTION: Medical Radiograph Convolutional Slices ──
  return (
    <div className="w-full h-full min-h-[260px] sm:min-h-[340px] flex items-center justify-center p-6 bg-[#08090d] rounded-lg border border-white/[0.06] relative overflow-hidden select-none">
      <div className="absolute inset-0 bg-grid-faint opacity-40 pointer-events-none" />

      <svg viewBox="0 0 400 300" className="w-full h-full max-w-[420px]" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Layer 1: Raw Radiograph Frame */}
        <rect x="60" y="50" width="120" height="150" rx="4" fill="rgba(15,23,42,0.6)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        <text x="120" y="40" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="JetBrains Mono">INPUT X-RAY</text>

        {/* Anatomical thoracic silhouette abstraction */}
        <ellipse cx="100" cy="125" rx="20" ry="35" stroke="rgba(0,229,255,0.4)" strokeWidth="1.5" fill="none" />
        <ellipse cx="140" cy="125" rx="20" ry="35" stroke="rgba(0,229,255,0.4)" strokeWidth="1.5" fill="none" />

        {/* Convolutional Feature Map Extraction Pipeline */}
        <path d="M 190 125 L 230 125" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />

        {/* Layer 2: Feature Map Conv2D Layers */}
        <rect x="235" y="70" width="55" height="110" rx="3" fill="rgba(99,102,241,0.15)" stroke="#6366f1" strokeWidth="1.5" />
        <rect x="245" y="60" width="55" height="110" rx="3" fill="rgba(0,229,255,0.15)" stroke="#00e5ff" strokeWidth="1.5" />

        {/* Layer 3: Binary Classification Dense Layer */}
        <path d="M 310 115 L 340 115" stroke="#38bdf8" strokeWidth="1.5" />
        <circle cx="355" cy="115" r="14" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
        <text x="355" y="119" textAnchor="middle" fill="#10b981" fontSize="8" fontFamily="JetBrains Mono" fontWeight="bold">SIG</text>

        {/* Diagnostic Bounding Box */}
        <rect x="85" y="105" width="30" height="35" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="2 2" fill="none" />
        <text x="100" y="100" textAnchor="middle" fill="#f43f5e" fontSize="7" fontFamily="JetBrains Mono">ROI</text>
      </svg>

      <div className="absolute bottom-3 left-4 font-mono-tech text-[10px] text-slate-400">
        CONVOLUTIONAL PIPELINE // TENSORFLOW + PYTORCH + EFFICIENTNET
      </div>
    </div>
  );
};
