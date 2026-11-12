import React from 'react';
import { skillGroups } from '@/src/data/skills';
import { MotionReveal } from '@/src/components/ui/MotionReveal';

interface SkillsProps {
  activeTechFilter?: string;
  onSelectTech?: (tech: string) => void;
}

export const Skills: React.FC<SkillsProps> = ({ activeTechFilter = '', onSelectTech }) => {
  const handleSkillClick = (skill: string) => {
    if (!onSelectTech) return;
    // Extract core keyword for matching (e.g. "Firebase / Firestore" -> "Firebase")
    const keyword = skill.split(' (')[0].split(' /')[0];
    onSelectTech(keyword);
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="skills"
      className="py-20 border-t border-slate-800/80 bg-[#06080E]"
      aria-label="Technical Skills"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-blue-400">Capabilities</p>
              <h2 className="mt-2 text-3xl font-bold font-heading text-white tracking-tight">
                Technical stack &amp; engineering domains
              </h2>
            </div>
            <p className="text-xs text-slate-400">
              Select a technology to filter matching projects
            </p>
          </div>
        </MotionReveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, idx) => (
            <MotionReveal key={group.category} delay={idx * 0.03}>
              <div className="h-full p-6 rounded-xl bg-[#0C111D] border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="flex items-baseline justify-between gap-4 mb-4">
                  <h3 className="text-base font-semibold font-heading text-white">
                    {group.category}
                  </h3>
                  <span className="text-xs text-slate-500 font-mono tabular-nums">
                    {group.skills.length}
                  </span>
                </div>
                <div className="flex flex-wrap gap-x-2 gap-y-1.5 text-sm text-slate-300 leading-relaxed">
                  {group.skills.map((skill, sIdx) => {
                    const keyword = skill.split(' (')[0].split(' /')[0];
                    const isSelected =
                      activeTechFilter.toLowerCase() === keyword.toLowerCase();
                    return (
                      <React.Fragment key={skill}>
                        <button
                          type="button"
                          onClick={() => handleSkillClick(skill)}
                          className={`text-left transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                            isSelected
                              ? 'text-blue-400 font-semibold underline underline-offset-4'
                              : 'hover:text-white hover:underline underline-offset-4 decoration-slate-600'
                          }`}
                        >
                          {skill}
                        </button>
                        {sIdx < group.skills.length - 1 && (
                          <span className="text-slate-600 select-none" aria-hidden="true">
                            ·
                          </span>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
