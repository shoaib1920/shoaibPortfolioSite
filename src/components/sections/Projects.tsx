import React, { useState, useEffect, useRef } from 'react';
import { projectsData } from '@/src/data/projects';
import type { Project } from '@/src/types';
import { ExternalLink, Github, X, ArrowUpRight, Search } from 'lucide-react';
import { ProjectThumbnail } from '@/src/components/ui/ProjectThumbnail';
import { MotionReveal } from '@/src/components/ui/MotionReveal';

type FilterType = 'all' | 'ai' | 'client';

interface ProjectsProps {
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({
  searchQuery = '',
  onSearchChange,
}) => {
  const [filter, setFilter] = useState<FilterType>('all');
  const [localSearch, setLocalSearch] = useState('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const modalCloseButtonRef = useRef<HTMLButtonElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const effectiveSearch = onSearchChange ? searchQuery : localSearch;
  const setEffectiveSearch = onSearchChange || setLocalSearch;

  const filteredProjects = projectsData.filter((p) => {
    const matchesCategory = filter === 'all' || p.category === filter;
    if (!matchesCategory) return false;

    const q = effectiveSearch.trim().toLowerCase();
    if (!q) return true;

    return (
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.stack.some((tech) => tech.toLowerCase().includes(q))
    );
  });

  const aiCount = projectsData.filter((p) => p.category === 'ai').length;
  const clientCount = projectsData.filter((p) => p.category === 'client').length;

  const handleOpenModal = (project: Project, e: React.MouseEvent<HTMLButtonElement>) => {
    triggerRef.current = e.currentTarget;
    setActiveModalProject(project);
  };

  const handleCloseModal = () => {
    setActiveModalProject(null);
    setTimeout(() => {
      triggerRef.current?.focus();
    }, 0);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeModalProject) {
        handleCloseModal();
      }
    };

    if (activeModalProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      modalCloseButtonRef.current?.focus();
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModalProject]);

  const filterTabs: { id: FilterType; label: string; count: number }[] = [
    { id: 'all', label: 'All', count: projectsData.length },
    { id: 'ai', label: 'AI Products', count: aiCount },
    { id: 'client', label: 'Client Websites', count: clientCount },
  ];

  return (
    <section
      id="projects"
      className="py-20 border-t border-slate-800/80 bg-[#06080E]"
      aria-label="Projects"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-sm font-medium text-blue-400">Selected Work</p>
              <h2 className="mt-2 text-3xl font-bold font-heading text-white tracking-tight">
                AI Products &amp; Production Websites
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* Live Search Input */}
              <div className="relative">
                <Search
                  className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                  aria-hidden="true"
                />
                <input
                  type="search"
                  value={effectiveSearch}
                  onChange={(e) => setEffectiveSearch(e.target.value)}
                  placeholder="Filter by stack or keyword..."
                  aria-label="Filter projects by stack or keyword"
                  className="w-full sm:w-60 pl-9 pr-8 py-2 rounded-lg bg-[#0C111D] border border-slate-800 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                {effectiveSearch && (
                  <button
                    type="button"
                    onClick={() => setEffectiveSearch('')}
                    aria-label="Clear search filter"
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Interactive Segmented Filter Tabs */}
              <div
                role="tablist"
                aria-label="Filter projects by category"
                className="inline-flex p-1 rounded-lg bg-[#0C111D] border border-slate-800 self-start sm:self-auto"
              >
                {filterTabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={filter === tab.id}
                    onClick={() => setFilter(tab.id)}
                    className={`px-3.5 py-2 rounded-md text-xs font-medium whitespace-nowrap shrink-0 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                      filter === tab.id
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {tab.label} ({tab.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </MotionReveal>

        {/* Empty State */}
        {filteredProjects.length === 0 ? (
          <div className="p-12 rounded-2xl bg-[#0C111D] border border-slate-800 text-center">
            <p className="text-base font-medium text-white">
              No projects match &ldquo;{effectiveSearch}&rdquo;
            </p>
            <p className="text-sm text-slate-400 mt-1">
              Try clearing the search query or switching to All projects.
            </p>
            <button
              type="button"
              onClick={() => {
                setFilter('all');
                setEffectiveSearch('');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-medium hover:bg-blue-500"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          /* Project Cards Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group rounded-2xl bg-[#0C111D] border border-slate-800 hover:border-slate-700 flex flex-col justify-between overflow-hidden transition-colors"
              >
                <div>
                  <ProjectThumbnail
                    title={project.title}
                    category={project.category}
                    thumbnail={project.thumbnail}
                  />

                  <div className="p-6">
                    {/* Unboxed Metadata */}
                    <div className="flex items-center gap-2 text-xs mb-2">
                      <span
                        className={
                          project.tag === 'Live'
                            ? 'text-emerald-400 font-medium'
                            : 'text-blue-400 font-medium'
                        }
                      >
                        {project.tag}
                      </span>
                      <span className="text-slate-600" aria-hidden="true">·</span>
                      <span className="text-slate-400">
                        {project.category === 'ai' ? 'AI Product' : 'Production Website'}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold font-heading text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-400 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    <p className="mt-4 text-xs text-slate-500 font-mono truncate">
                      {project.stack.join(' · ')}
                    </p>
                  </div>
                </div>

                <div className="px-6 py-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={(e) => handleOpenModal(project, e)}
                    className="text-xs font-semibold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                  >
                    <span>Read details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>

                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub repository`}
                        className="text-slate-400 hover:text-white p-1"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live website`}
                        className="text-slate-400 hover:text-white p-1"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Accessible Modal Dialog */}
        {activeModalProject && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={(e) => {
              if (e.target === e.currentTarget) handleCloseModal();
            }}
          >
            <div className="bg-[#0C111D] border border-slate-800 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl p-6 sm:p-8 shadow-2xl relative">
              <button
                ref={modalCloseButtonRef}
                type="button"
                onClick={handleCloseModal}
                aria-label="Close project details dialog"
                className="absolute top-4 right-4 p-2.5 min-w-[40px] min-h-[40px] flex items-center justify-center text-slate-400 hover:text-white rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <X className="w-5 h-5" />
              </button>

              <p className="text-xs font-medium text-blue-400">
                {activeModalProject.category === 'ai' ? 'AI Product' : 'Production Website'} ·{' '}
                {activeModalProject.tag}
                {activeModalProject.role && (
                  <>
                    <span className="text-slate-600 mx-1.5" aria-hidden="true">·</span>
                    <span className="text-slate-300">{activeModalProject.role}</span>
                  </>
                )}
              </p>
              <h3 id="modal-title" className="text-2xl font-bold font-heading text-white mt-1.5 pr-8">
                {activeModalProject.title}
              </h3>

              <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {activeModalProject.detailedDescription || activeModalProject.description}
              </p>

              {activeModalProject.outcomes && activeModalProject.outcomes.length > 0 && (
                <div className="mt-6 pt-5 border-t border-slate-800/80">
                  <h4 className="text-xs font-medium text-slate-400 mb-3">
                    Key Engineering Outcomes
                  </h4>
                  <ul className="space-y-2">
                    {activeModalProject.outcomes.map((outcome, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-slate-300 leading-relaxed flex items-start gap-2.5"
                      >
                        <span className="text-blue-400 font-mono text-xs mt-1 shrink-0" aria-hidden="true">
                          0{idx + 1}.
                        </span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-6 pt-5 border-t border-slate-800/80">
                <h4 className="text-xs font-medium text-slate-400 mb-2">Technology Stack</h4>
                <p className="text-sm text-slate-200 font-mono">
                  {activeModalProject.stack.join(' · ')}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-end gap-3">
                {activeModalProject.liveUrl && (
                  <a
                    href={activeModalProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-medium hover:bg-blue-500"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                )}
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 rounded-lg bg-slate-800 text-slate-200 text-xs font-medium hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
