import React from 'react';
import { siteConfig } from '@/src/data/siteConfig';
import { MotionReveal } from '@/src/components/ui/MotionReveal';

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="py-20 border-t border-slate-800/80"
      aria-label="Education"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <p className="text-sm font-medium text-blue-400">Academic Background</p>
              <h2 className="mt-2 text-3xl font-bold font-heading text-white tracking-tight">
                Formal Education
              </h2>
            </div>

            <div className="lg:col-span-8">
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0C111D] border border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <h3 className="text-xl font-bold font-heading text-white">
                    {siteConfig.education.degree}
                  </h3>
                  <span className="text-xs font-mono text-slate-400 tabular-nums">
                    {siteConfig.education.period}
                  </span>
                </div>

                <p className="text-slate-300 text-sm mt-2">
                  {siteConfig.education.institution} · {siteConfig.education.location}
                </p>

                <p className="text-sm text-slate-400 mt-4 font-mono tabular-nums">
                  CGPA: <strong className="text-white">{siteConfig.education.cgpa}</strong>
                </p>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
};
