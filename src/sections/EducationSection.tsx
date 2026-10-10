import type React from 'react';
import { GraduationCap, MapPin, Calendar, Award, BookOpen } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="section-container border-t border-slate-100" aria-label="Education">
      <div className="space-y-10">
        {/* Section Heading */}
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Education
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full" />
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl pt-1">
            Academic foundation and university coursework in Computer Science & Engineering.
          </p>
        </div>

        {/* Professional Resume-Style Education Presentation */}
        <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-slate-100 pb-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
                <GraduationCap className="w-4 h-4" />
                <span>Undergraduate Degree</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                {PERSONAL_INFO.education.degree}
              </h3>
              <p className="text-base font-medium text-slate-700">
                {PERSONAL_INFO.education.institution}
              </p>
            </div>

            <div className="flex flex-col sm:items-end gap-1.5 font-mono text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>{PERSONAL_INFO.education.period}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{PERSONAL_INFO.education.location}</span>
              </div>
              <div className="pt-1">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-700">
                  <Award className="w-3 h-3" />
                  <span>CGPA: {PERSONAL_INFO.education.cgpa}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Key Coursework */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5 text-blue-600" />
              <span>Core Coursework & Foundations</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {PERSONAL_INFO.education.coursework.map((course) => (
                <span
                  key={course}
                  className="px-3 py-1 rounded-md bg-slate-50 border border-slate-200/80 text-xs font-medium text-slate-700"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
