import { useState, useEffect } from 'react';
import { useLenisScroll } from './hooks/useLenisScroll';
import { CinematicLoader } from './components/CinematicLoader';
import { CustomCursor } from './components/CustomCursor';
import { FuturisticNavbar } from './components/FuturisticNavbar';
import { FuturisticFooter } from './components/FuturisticFooter';
import { ResumeModal } from './components/ResumeModal';
import { TelemetryRail } from './components/UI/TelemetryRail';
import { SectionDividerConduit } from './components/UI/SectionDividerConduit';
import { initScrollAnimations, killScrollAnimations } from './animations/scrollAnimations';

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

  useLenisScroll();

  // Initialize GSAP scroll animations after boot loader completes
  useEffect(() => {
    if (loading) return;
    const timeout = setTimeout(() => {
      initScrollAnimations();
    }, 150);
    return () => {
      clearTimeout(timeout);
      killScrollAnimations();
    };
  }, [loading]);

  // Pause animations when tab is hidden (performance optimization)
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        document.body.classList.add('tab-hidden');
      } else {
        document.body.classList.remove('tab-hidden');
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  return (
    <div className="grain-overlay relative min-h-screen bg-[#03050a] text-[--text-primary] overflow-x-hidden selection:bg-[--accent-cyan]/20 selection:text-white">
      {/* Cinematic boot sequence */}
      {loading && <CinematicLoader onComplete={() => setLoading(false)} />}

      {/* Bespoke interactive cursor */}
      <CustomCursor />

      {/* Floating telemetry navigation rail */}
      <TelemetryRail />

      {/* Floating navbar with active section tracking */}
      <FuturisticNavbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Continuous cinematic journey main workflow */}
      <main className="relative z-10 flex flex-col">
        <HeroSection onOpenResume={() => setIsResumeOpen(true)} />

        <SectionDividerConduit sourceModule="HERO.01" targetModule="IDENTITY.02" />
        <SystemProfileSection />

        <SectionDividerConduit sourceModule="IDENTITY.02" targetModule="CONSTELLATION.03" />
        <SkillsConstellationSection />

        <SectionDividerConduit sourceModule="CONSTELLATION.03" targetModule="MODULES.04" />
        <ProjectsShowcaseSection />

        <SectionDividerConduit sourceModule="MODULES.04" targetModule="CHRONO.05" />
        <BuildTimelineSection />

        <SectionDividerConduit sourceModule="CHRONO.05" targetModule="CREDENTIALS.06" />
        <CertificationsSection />

        <SectionDividerConduit sourceModule="CREDENTIALS.06" targetModule="FOCUS.07" />
        <CurrentFocusSection />

        <SectionDividerConduit sourceModule="FOCUS.07" targetModule="TERMINAL.08" />
        <ContactTerminalSection />
      </main>

      <FuturisticFooter />

      {/* Verified official resume modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
