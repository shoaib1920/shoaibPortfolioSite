import React from 'react';
import { experienceData } from '@/src/data/experience';
import { MotionReveal } from '@/src/components/ui/MotionReveal';

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-20 border-t border-slate-800/80"
      aria-label="Experience"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <div>
            <p className="text-sm font-medium text-blue-400">Experience</p>
            <h2 className="mt-2 text-3xl font-bold font-heading text-white tracking-tight">
              Engineering &amp; production delivery
            </h2>
          </div>
        </MotionReveal>

        <div className="mt-12 space-y-6 max-w-4xl">
          {experienceData.map((item, index) => (
            <MotionReveal key={index} delay={0.05}>
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0C111D] border border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-5 border-b border-slate-800/80">
                  <div>
                    <h3 className="text-xl font-bold font-heading text-white">
                      {item.role}
                    </h3>
                    <p className="text-sm font-medium text-blue-400 mt-0.5">
                      {item.company}
                    </p>
                  </div>
                  <div className="text-xs text-slate-400 font-mono tabular-nums">
                    <span>{item.period}</span>
                    <span className="mx-2 text-slate-600" aria-hidden="true">·</span>
                    <span>{item.location}</span>
                  </div>
                </div>

                <ul className="mt-5 space-y-3">
                  {item.highlights.map((highlight, hIdx) => (
                    <li
                      key={hIdx}
                      className="text-slate-300 text-sm sm:text-base leading-relaxed flex items-start gap-3"
                    >
                      <span
                        className="text-blue-400 font-mono text-xs mt-1.5 shrink-0"
                        aria-hidden="true"
                      >
                        0{hIdx + 1}.
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
