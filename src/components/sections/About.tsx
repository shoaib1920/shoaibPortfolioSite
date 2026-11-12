import React from 'react';
import { siteConfig } from '@/src/data/siteConfig';
import { MotionReveal } from '@/src/components/ui/MotionReveal';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 border-t border-slate-800/80"
      aria-label="About Muhammad Shoaib"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="text-sm font-medium text-blue-400">About</p>
              <h2 className="mt-2 text-3xl font-bold font-heading text-white tracking-tight [text-wrap:balance]">
                Engineering with precision, shipping with speed.
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-6 text-slate-300 leading-relaxed text-base max-w-[70ch]">
              <p>{siteConfig.summary}</p>
              <p>{siteConfig.aboutExtended}</p>

              {/* Recruiter Quick-Facts Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-5 rounded-xl bg-[#0C111D] border border-slate-800">
                  <p className="text-xs font-medium text-slate-400">Target Roles</p>
                  <p className="text-sm font-semibold text-white mt-1">{siteConfig.targetRoles}</p>
                </div>

                <div className="p-5 rounded-xl bg-[#0C111D] border border-slate-800">
                  <p className="text-xs font-medium text-slate-400">Work Preference</p>
                  <p className="text-sm font-semibold text-white mt-1">{siteConfig.workMode}</p>
                </div>

                <div className="p-5 rounded-xl bg-[#0C111D] border border-slate-800">
                  <p className="text-xs font-medium text-slate-400">Base Location</p>
                  <p className="text-sm font-semibold text-white mt-1">{siteConfig.location}</p>
                </div>

                <div className="p-5 rounded-xl bg-[#0C111D] border border-slate-800">
                  <p className="text-xs font-medium text-slate-400">{siteConfig.education.degree}</p>
                  <p className="text-sm font-semibold text-white mt-1">
                    {siteConfig.education.institution} · CGPA {siteConfig.education.cgpa}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
};
