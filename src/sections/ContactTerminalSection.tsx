import React from 'react';
import { SectionHeading } from '../components/UI/SectionHeading';
import { TerminalConsole } from '../components/TerminalConsole';

export const ContactTerminalSection: React.FC = () => {
  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <SectionHeading
        systemCode="SYS.MOD.07 // INITIATE_CONNECTION"
        title="CONNECTION STATION & TERMINAL"
        subtitle="Initialize direct communication channels, run terminal directives, or dispatch encrypted messages."
        badge="SECURE_CHANNEL"
      />

      <TerminalConsole />
    </section>
  );
};
