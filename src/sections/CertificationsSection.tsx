import type React from 'react';
import { Award, ShieldCheck, Cloud, Database, BarChart3, Binary, Brain } from 'lucide-react';
import { SectionHeading } from '../components/UI/SectionHeading';
import { CERTIFICATIONS } from '../data/portfolioData';
import { soundManager } from '../audio/soundEffects';

export const CertificationsSection: React.FC = () => {
  const getCertIcon = (id: string) => {
    switch (id) {
      case 'cert-ml-ds':
        return <Brain className="w-5 h-5 text-[--accent-cyan]" />;
      case 'cert-openshift':
        return <Cloud className="w-5 h-5 text-red-400" />;
      case 'cert-python':
        return <Binary className="w-5 h-5 text-amber-400" />;
      case 'cert-sql-dbms':
        return <Database className="w-5 h-5 text-blue-400" />;
      case 'cert-powerbi':
        return <BarChart3 className="w-5 h-5 text-emerald-400" />;
      default:
        return <Award className="w-5 h-5 text-[--accent-cyan]" />;
    }
  };

  return (
    <section id="certifications" className="section-container section-reveal" aria-label="Certifications">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          systemCode="SYS.MOD.05 // CREDENTIALS"
          title="Certifications"
          subtitle="Verified qualifications across enterprise cloud administration, machine learning pipelines, relational databases, and business telemetry."
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTIFICATIONS.map((cert, index) => (
            <div
              key={cert.id}
              onMouseEnter={() => soundManager.playHover()}
              data-cursor="hover"
              className="cert-card-reveal hud-panel rounded-xl p-6 border border-white/[0.07] hover:border-[--accent-cyan]/35 hover:shadow-[0_0_30px_rgba(0,212,255,0.1)] transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              <span className="corner-bracket corner-tl !w-2 !h-2" />
              <span className="corner-bracket corner-br !w-2 !h-2" />

              <div className="space-y-4">
                {/* Header: icon + ID */}
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] group-hover:border-[--accent-cyan]/25 transition-colors">
                    {getCertIcon(cert.id)}
                  </div>
                  <span className="font-mono-tech text-[10px] text-[--accent-cyan]/60 font-bold">
                    AUTH / {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Title + Issuer */}
                <div className="space-y-1.5">
                  <h3 className="font-display font-bold text-base text-white group-hover:text-[--accent-cyan] transition-colors uppercase leading-snug">
                    {cert.name}
                  </h3>
                  {cert.issuer && (
                    <p className="font-mono-tech text-[11px] text-[--accent-cyan]/70">
                      {cert.issuer}
                    </p>
                  )}
                  <p className="text-[11px] text-[--text-muted] font-mono-tech uppercase tracking-wide">
                    {cert.category}
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono-tech">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{cert.verificationBadge}</span>
                </span>
                <span className="text-[--text-muted]">VALID</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
