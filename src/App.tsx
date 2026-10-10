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
    <div className="min-h-screen bg-[#0A0C0F] text-[#F5F7FA] font-sans antialiased selection:bg-blue-600/30 selection:text-white">
      {/* Accessible skip to main content */}
      <a href="#main-content" className="sr-only sr-only-focusable">
        Skip to main content
      </a>

      {/* Sticky Compact Top Navigation (56-72px) */}
      <HeaderNav onOpenResume={() => setIsResumeOpen(true)} />

      {/* Centered Content Container (1280px-1400px) */}
      <main
        id="main-content"
        tabIndex={-1}
        className="w-full max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16 pt-16 sm:pt-20 pb-16 focus:outline-none"
      >
        <HeroSection onOpenResume={() => setIsResumeOpen(true)} />
        <AboutSection />
        <WorkSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
        <Footer />
      </main>

      {/* Verified Official Printable / Downloadable Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
