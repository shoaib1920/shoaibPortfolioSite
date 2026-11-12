import React, { useState } from 'react';
import { ArrowRight, Code2 } from 'lucide-react';
import { siteConfig } from '@/src/data/siteConfig';
import { DownloadCvButton } from '@/src/components/ui/DownloadCvButton';
import { CopyButton } from '@/src/components/ui/CopyButton';
import { MotionReveal } from '@/src/components/ui/MotionReveal';

export const Hero: React.FC = () => {
  const [heroImgError, setHeroImgError] = useState(false);

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24" aria-label="Introduction">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split-Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <MotionReveal direction="up" delay={0.05}>
              <p className="text-sm font-medium text-emerald-400 mb-4">
                {siteConfig.availability}
                <span className="text-slate-600 mx-2" aria-hidden="true">·</span>
                <span className="text-slate-400">{siteConfig.location}</span>
              </p>
            </MotionReveal>

            <MotionReveal direction="up" delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-white font-heading leading-[1.08] [text-wrap:balance]">
                Full-Stack &amp; AI Engineer building{' '}
                <span className="text-blue-400">production software</span>.
              </h1>
            </MotionReveal>

            <MotionReveal direction="up" delay={0.15}>
              <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                I&apos;m <span className="text-white font-semibold">{siteConfig.name}</span>—a
                software engineer shipping end-to-end React, Next.js, TypeScript, Node.js, and
                Python applications alongside LLM, RAG, and automation systems.
              </p>
            </MotionReveal>

            <MotionReveal direction="up" delay={0.2}>
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080B11]"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <DownloadCvButton variant="outline" className="py-3 px-5" />
                <CopyButton
                  text={siteConfig.email}
                  label="Copy Email"
                  copiedLabel="Email Copied"
                  className="px-4 py-3 rounded-lg border border-slate-800 bg-[#0C111D] text-slate-300 hover:text-white hover:border-slate-700 text-sm font-medium"
                />
              </div>
            </MotionReveal>
          </div>

          {/* Right Column: Editorial Visual Container */}
          <div className="lg:col-span-5">
            <MotionReveal direction="up" delay={0.15} className="h-full">
              <div className="h-full min-h-[280px] rounded-2xl overflow-hidden border border-slate-800 bg-[#0C111D]">
                {!heroImgError ? (
                  <img
                    src={siteConfig.heroImage}
                    alt="Software engineering workstation displaying distributed architecture diagrams"
                    referrerPolicy="no-referrer"
                    onError={() => setHeroImgError(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#0F172A] to-[#080B11]">
                    <Code2 className="w-10 h-10 text-blue-400 mb-3" aria-hidden="true" />
                    <p className="text-sm font-medium text-slate-300 font-heading">
                      {siteConfig.name} · {siteConfig.title}
                    </p>
                  </div>
                )}
              </div>
            </MotionReveal>
          </div>
        </div>

        {/* Full-Width Key Metrics Row Below Split */}
        <MotionReveal direction="up" delay={0.25}>
          <div className="mt-14 pt-10 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <p className="text-3xl sm:text-4xl font-bold font-heading text-white tabular-nums">
                {siteConfig.stats.liveWebsites}
              </p>
              <p className="text-sm text-slate-400 mt-1">
                Production Websites Shipped
              </p>
            </div>

            <div>
              <p className="text-3xl sm:text-4xl font-bold font-heading text-white tabular-nums">
                {siteConfig.stats.aiProducts}
              </p>
              <p className="text-sm text-slate-400 mt-1">
                AI &amp; Automation Systems Built
              </p>
            </div>

            <div>
              <p className="text-3xl sm:text-4xl font-bold font-heading text-white tabular-nums">
                {siteConfig.stats.countriesServed}
              </p>
              <p className="text-sm text-slate-400 mt-1">
                Countries Delivered (PK, US, CN)
              </p>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
};
