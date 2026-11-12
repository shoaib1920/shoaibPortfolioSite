import React, { useState } from 'react';
import { Layers, Globe } from 'lucide-react';

interface ProjectThumbnailProps {
  title: string;
  category: 'ai' | 'client';
  thumbnail?: string;
}

export const ProjectThumbnail: React.FC<ProjectThumbnailProps> = ({
  title,
  category,
  thumbnail,
}) => {
  const [imgError, setImgError] = useState(false);

  if (thumbnail && !imgError) {
    return (
      <div className="relative w-full aspect-[4/3] bg-slate-950 border-b border-slate-800/80 overflow-hidden">
        <img
          src={thumbnail}
          alt={`${title} visual preview`}
          referrerPolicy="no-referrer"
          loading="lazy"
          onError={() => setImgError(true)}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0C111D]/60 via-transparent to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-[#0F172A] to-[#080B11] border-b border-slate-800/80 flex flex-col items-center justify-center p-6 overflow-hidden">
      <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-blue-400 mb-3">
        {category === 'ai' ? (
          <Layers className="w-5 h-5" aria-hidden="true" />
        ) : (
          <Globe className="w-5 h-5" aria-hidden="true" />
        )}
      </div>
      <p className="text-sm font-semibold text-slate-200 font-heading text-center line-clamp-1">
        {title}
      </p>
      <span className="text-xs text-slate-500 mt-1">
        {category === 'ai' ? 'AI System Architecture' : 'Production Web Platform'}
      </span>
    </div>
  );
};
