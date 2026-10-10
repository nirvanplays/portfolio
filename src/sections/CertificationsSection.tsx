import type React from 'react';
import { Award, ShieldCheck, Cloud, Database, BarChart3, Binary, Brain } from 'lucide-react';
import { SectionHeading } from '../components/UI/SectionHeading';
import { CERTIFICATIONS } from '../data/portfolioData';
import { soundManager } from '../audio/soundEffects';

export const CertificationsSection: React.FC = () => {
  const getCertIcon = (id: string) => {
    switch (id) {
      case 'cert-ml-ds':
        return <Brain className="w-5 h-5 text-cyan-400" />;
      case 'cert-openshift':
        return <Cloud className="w-5 h-5 text-red-400" />;
      case 'cert-python':
        return <Binary className="w-5 h-5 text-amber-400" />;
      case 'cert-sql-dbms':
        return <Database className="w-5 h-5 text-blue-400" />;
      case 'cert-powerbi':
        return <BarChart3 className="w-5 h-5 text-emerald-400" />;
      default:
        return <Award className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="certifications" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <SectionHeading
        systemCode="SYS.MOD.05 // CREDENTIALS"
        title="CERTIFICATIONS & SYSTEM VALIDATIONS"
        subtitle="Verified qualifications across enterprise cloud administration, machine learning pipelines, relational databases, and business telemetry."
        badge="VERIFIED_CREDENTIALS"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CERTIFICATIONS.map((cert, index) => (
          <div
            key={cert.id}
            onMouseEnter={() => soundManager.playHover()}
            className="hud-panel rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(0,240,255,0.18)] transition-all duration-300 flex flex-col justify-between space-y-4 group"
          >
            {/* Corner Brackets */}
            <span className="corner-bracket corner-tl !w-2 !h-2" />
            <span className="corner-bracket corner-br !w-2 !h-2" />

            <div className="space-y-4">
              {/* Card Header & Icon */}
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-cyan-500/40 transition-colors">
                  {getCertIcon(cert.id)}
                </div>
                <span className="font-mono-tech text-[10px] text-cyan-400/80 font-bold">
                  AUTH_ID // 0{index + 1}
                </span>
              </div>

              {/* Title & Issuer */}
              <div className="space-y-1.5">
                <h3 className="font-display font-bold text-lg text-white group-hover:text-cyan-200 transition-colors uppercase leading-snug">
                  {cert.name}
                </h3>
                {cert.issuer && (
                  <p className="font-mono-tech text-xs text-red-300 font-semibold">
                    ISSUER: {cert.issuer}
                  </p>
                )}
                <p className="text-xs text-slate-400 font-sans-clean">
                  Domain: {cert.category}
                </p>
              </div>
            </div>

            {/* Bottom Verification Status */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono-tech">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{cert.verificationBadge}</span>
              </span>
              <span className="text-slate-500">VALID</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
