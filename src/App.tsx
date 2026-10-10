import { useState } from 'react';
import { useLenisScroll } from './hooks/useLenisScroll';
import { CinematicLoader } from './components/CinematicLoader';
import { CustomCursor } from './components/CustomCursor';
import { FuturisticNavbar } from './components/FuturisticNavbar';
import { FuturisticFooter } from './components/FuturisticFooter';
import { ResumeModal } from './components/ResumeModal';
import { BackgroundParticles } from './three/BackgroundParticles';

import { HeroSection } from './sections/HeroSection';
import { SystemProfileSection } from './sections/SystemProfileSection';
import { SkillsConstellationSection } from './sections/SkillsConstellationSection';
import { ProjectsShowcaseSection } from './sections/ProjectsShowcaseSection';
import { BuildTimelineSection } from './sections/BuildTimelineSection';
import { CertificationsSection } from './sections/CertificationsSection';
import { CurrentFocusSection } from './sections/CurrentFocusSection';
import { ContactTerminalSection } from './sections/ContactTerminalSection';

export function App() {
  const [loading, setLoading] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Initialize Lenis smooth scroll
  useLenisScroll();

  return (
    <div className="relative min-h-screen bg-[#05070b] text-[#f1f5f9] selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      {/* Cinematic Boot Loader */}
      {loading && <CinematicLoader onComplete={() => setLoading(false)} />}

      {/* Custom Cyber Cursor */}
      <CustomCursor />

      {/* Ambient Low-Power 3D Particles */}
      <BackgroundParticles />

      {/* Floating Futuristic HUD Navbar */}
      <FuturisticNavbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Workflow */}
      <main className="relative z-10 flex flex-col space-y-12 sm:space-y-16">
        <HeroSection onOpenResume={() => setIsResumeOpen(true)} />
        <SystemProfileSection />
        <SkillsConstellationSection />
        <ProjectsShowcaseSection />
        <BuildTimelineSection />
        <CertificationsSection />
        <CurrentFocusSection />
        <ContactTerminalSection />
      </main>

      {/* Minimal Footer */}
      <FuturisticFooter />

      {/* Verified Official Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
