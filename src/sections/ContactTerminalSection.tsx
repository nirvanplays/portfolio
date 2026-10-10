import type React from 'react';
import { SectionHeading } from '../components/UI/SectionHeading';
import { TerminalConsole } from '../components/TerminalConsole';

export const ContactTerminalSection: React.FC = () => {
  return (
    <section id="contact" className="section-container section-reveal" aria-label="Contact Terminal">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          systemCode="SYS.MOD.07 // INITIATE_CONNECTION"
          title="Contact Terminal"
          subtitle="Open a channel, run terminal commands to learn more, or dispatch a direct message."
          className="mb-12"
        />

        <TerminalConsole />
      </div>
    </section>
  );
};
