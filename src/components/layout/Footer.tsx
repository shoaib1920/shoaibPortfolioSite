import React from 'react';
import { siteConfig } from '@/src/data/siteConfig';

// Hide social links until they point to a real profile (not a bare domain).
const isRealProfile = (url: string) => {
  try {
    const { pathname } = new URL(url);
    return pathname.replace(/\/+$/, '').split('/').filter(Boolean).filter((p) => p !== 'in').length > 0;
  } catch {
    return false;
  }
};

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-[#06080E] text-slate-400 text-sm py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="text-slate-200 font-semibold font-heading">
            {siteConfig.name}
          </p>
          <p className="text-xs text-slate-500 mt-1">
            {siteConfig.title} · {siteConfig.location}
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm">
          {isRealProfile(siteConfig.githubUrl) && (
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
          )}
          {isRealProfile(siteConfig.linkedinUrl) && (
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          )}
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            WhatsApp
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="hover:text-white transition-colors"
          >
            Email
          </a>
        </div>

        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
