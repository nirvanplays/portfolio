'use client';

import { useState } from 'react';
import { StarBackgroundCanvas } from './three/StarBackgroundCanvas';
import { SpaceNavbar } from './components/SpaceNavbar';
import { SpaceHeroSection } from './sections/SpaceHeroSection';
import { SpaceProjectsSection } from './sections/SpaceProjectsSection';
import { SpaceSkillsSection } from './sections/SpaceSkillsSection';
import { SpaceEducationSection } from './sections/SpaceEducationSection';
import { SpaceContactSection } from './sections/SpaceContactSection';
import { SpaceFooter } from './components/SpaceFooter';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#030014] text-[#f8fafc] font-sans antialiased selection:bg-purple-600/40 selection:text-white overflow-x-hidden">
      {/* Three.js Global 3D Starfield & Space Atmosphere */}
      <StarBackgroundCanvas />

      {/* Accessible skip link */}
      <a href="#main-content" className="sr-only sr-only-focusable">
        Skip to main content
      </a>

      {/* Cosmic Glass Navigation Bar */}
      <SpaceNavbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Centered Space Content Container */}
      <main
        id="main-content"
        tabIndex={-1}
        className="w-full max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 pt-16 sm:pt-20 pb-16 focus:outline-none relative z-10"
      >
        <SpaceHeroSection onOpenResume={() => setIsResumeOpen(true)} />
        <SpaceProjectsSection />
        <SpaceSkillsSection />
        <SpaceEducationSection />
        <SpaceContactSection onOpenResume={() => setIsResumeOpen(true)} />
        <SpaceFooter />
      </main>

      {/* Verified Printable / Downloadable Placement Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
