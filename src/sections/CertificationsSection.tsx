import type React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="section-container border-t border-slate-100" aria-label="Certifications">
      <div className="space-y-10">
        {/* Section Heading */}
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Certifications
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full" />
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl pt-1">
            Verified credentials across enterprise cloud administration, machine learning, databases, and analytics.
          </p>
        </div>

        {/* Clean Rows / Cards */}
        <div className="divide-y divide-slate-200 border-y border-slate-200 bg-white rounded-xl shadow-2xs">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/60 transition-colors"
            >
              <div className="flex items-start sm:items-center gap-3.5">
                <div className="p-2 rounded-lg bg-blue-50 text-blue-600 flex-shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-normal">
                    {cert.issuer ? `Issuing Body: ${cert.issuer}` : `Domain: ${cert.category}`}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-700 sm:self-center pl-11 sm:pl-0">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{cert.verificationBadge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
