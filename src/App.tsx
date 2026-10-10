'use client';

import { useState } from 'react';
import { StarBackgroundCanvas } from './three/StarBackgroundCanvas';
import { CursorParticles } from './components/CursorParticles';
import { MusicPlayer } from './components/MusicPlayer';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { SkillsSection } from './sections/SkillsSection';
import { EducationSection } from './sections/EducationSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#030014] text-[#f8fafc] font-sans antialiased selection:bg-purple-600/40 selection:text-white overflow-x-hidden">
      {/* Three.js Global 3D Starfield & Space Atmosphere */}
      <StarBackgroundCanvas />

      {/* Interactive Cursor Particle Trail & Burst Effects */}
      <CursorParticles />

      {/* Transparent Glass Floating Music Player */}
      <MusicPlayer />

      {/* Accessible skip link */}
      <a href="#main-content" className="sr-only sr-only-focusable">
        Skip to main content
      </a>

      {/* Cosmic Glass Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Centered Space Content Container */}
      <main
        id="main-content"
        tabIndex={-1}
        className="w-full max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 pt-16 sm:pt-20 pb-16 focus:outline-none relative z-10"
      >
        <HeroSection onOpenResume={() => setIsResumeOpen(true)} />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection onOpenResume={() => setIsResumeOpen(true)} />
        <Footer />
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
