import { useState } from 'react';
import { SidebarNav } from './components/SidebarNav';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { WorkSection } from './sections/WorkSection';
import { SkillsSection } from './sections/SkillsSection';
import { EducationSection } from './sections/EducationSection';
import { HowIBuildSection } from './sections/HowIBuildSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0c0e12] text-[#f8fafc] font-sans antialiased selection:bg-blue-500/30 selection:text-white">
      {/* Skip to Main Content for Accessibility */}
      <a href="#main-content" className="sr-only sr-only-focusable">
        Skip to main content
      </a>

      {/* Main 2-Column Responsive Layout */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
        {/* Left Column: Persistent Narrow Identity & Navigation (Sticky desktop, top mobile) */}
        <SidebarNav onOpenResume={() => setIsResumeOpen(true)} />

        {/* Right Column: Scrollable Main Content */}
        <main
          id="main-content"
          tabIndex={-1}
          className="lg:col-span-8 xl:col-span-8 pt-24 lg:pt-16 pb-16 space-y-28 focus:outline-none"
        >
          <HeroSection onOpenResume={() => setIsResumeOpen(true)} />
          <AboutSection />
          <WorkSection />
          <SkillsSection />
          <EducationSection />
          <HowIBuildSection />
          <ContactSection />
          <Footer />
        </main>
      </div>

      {/* Official Verified Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
