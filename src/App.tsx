import { useState } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { WorkSection } from './sections/WorkSection';
import { SkillsSection } from './sections/SkillsSection';
import { EducationSection } from './sections/EducationSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0D10] text-[#f8fafc] font-sans antialiased selection:bg-blue-500/30 selection:text-white">
      {/* Accessible skip to main content */}
      <a href="#main-content" className="sr-only sr-only-focusable">
        Skip to main content
      </a>

      {/* Compact Sticky Top Navigation Header */}
      <HeaderNav onOpenResume={() => setIsResumeOpen(true)} />

      {/* Centered Max-Width Container (1200-1400px range) */}
      <main
        id="main-content"
        tabIndex={-1}
        className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 sm:pt-24 pb-16 focus:outline-none"
      >
        <HeroSection onOpenResume={() => setIsResumeOpen(true)} />
        <AboutSection />
        <WorkSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
        <Footer />
      </main>

      {/* Verified Printable / Downloadable Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
