import type React from 'react';
import { GraduationCap, MapPin, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-container border-t border-slate-100" aria-label="About Me">
      <div className="space-y-10">
        {/* Section Heading */}
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            About Me
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full" />
        </div>

        {/* Concise Statement */}
        <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl">
          <p>
            I'm a Computer Science Engineering student focused on building practical software systems and exploring AI/ML applications.
          </p>
          <p>
            I enjoy working across the stack — from frontend interfaces and backend APIs to databases, computer vision and machine learning.
          </p>
        </div>

        {/* Compact Information Panel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {/* Education Card */}
          <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
            <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-slate-900 text-base">
                {PERSONAL_INFO.education.institution}
              </h3>
              <p className="text-sm text-slate-600">
                {PERSONAL_INFO.education.degree} ({PERSONAL_INFO.education.period})
              </p>
              <div className="pt-2">
                <span className="inline-block px-2.5 py-1 rounded bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-700">
                  CGPA: {PERSONAL_INFO.education.cgpa}
                </span>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
            <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
              <MapPin className="w-4 h-4" />
              <span>Location</span>
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-slate-900 text-base">
                {PERSONAL_INFO.location}
              </h3>
              <p className="text-sm text-slate-600">
                Open to local roles in Hyderabad as well as remote opportunities.
              </p>
            </div>
          </div>

          {/* Interests Card */}
          <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
            <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Interests</span>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {PERSONAL_INFO.interests.map((interest) => (
                <span
                  key={interest}
                  className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-medium text-slate-700 shadow-2xs"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
