import { useState, useEffect } from 'react';
import { useLenisScroll } from './hooks/useLenisScroll';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { JourneySection } from './sections/JourneySection';
import { CertificationsSection } from './sections/CertificationsSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { initScrollAnimations, killScrollAnimations } from './animations/scrollAnimations';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Initialize buttery smooth scrolling via Lenis
  useLenisScroll();

  // Initialize clean GSAP scroll animations
  useEffect(() => {
    initScrollAnimations();
    return () => killScrollAnimations();
  }, []);

  return (
    <div className="grain-overlay relative min-h-screen bg-[#090a0d] text-[--text-primary] selection:bg-[--accent-cyan]/25 selection:text-white">
      {/* Skip to Main Content for Accessibility */}
      <a href="#main-content" className="sr-only sr-only-focusable">
        Skip to main content
      </a>

      {/* Minimal Editorial Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Workflow */}
      <main id="main-content" tabIndex={-1} className="relative z-10 focus:outline-none">
        <HeroSection onOpenResume={() => setIsResumeOpen(true)} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <JourneySection />
        <CertificationsSection />
        <ContactSection />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Verified Official Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
