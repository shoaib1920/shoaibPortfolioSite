import React from 'react';
import { Download } from 'lucide-react';
import { siteConfig } from '@/src/data/siteConfig';

interface DownloadCvButtonProps {
  variant?: 'outline' | 'primary' | 'compact';
  className?: string;
  onClick?: () => void;
}

export const DownloadCvButton: React.FC<DownloadCvButtonProps> = ({
  variant = 'outline',
  className = '',
  onClick,
}) => {
  const baseClasses =
    'group inline-flex items-center justify-center gap-2 font-medium whitespace-nowrap shrink-0 transition-all duration-150 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080B11] active:scale-[0.98]';

  const variantClasses = {
    outline:
      'border border-slate-700 bg-slate-900/70 text-slate-100 hover:bg-slate-800 hover:border-slate-500 px-4 py-2 text-sm',
    primary:
      'bg-blue-600 text-white hover:bg-blue-500 px-5 py-2.5 text-sm',
    compact:
      'border border-slate-700 bg-transparent text-slate-200 hover:bg-slate-800/80 px-3 py-1.5 text-xs',
  };

  return (
    <a
      href={siteConfig.cvPath}
      download={siteConfig.cvFileName}
      aria-label="Download Muhammad Shoaib's CV (PDF)"
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      <Download className="w-4 h-4 text-blue-400 shrink-0" aria-hidden="true" />
      <span>Download CV</span>
    </a>
  );
};
