import React, { useState } from 'react';
import { siteConfig } from '@/src/data/siteConfig';
import { DownloadCvButton } from '@/src/components/ui/DownloadCvButton';
import { CopyButton } from '@/src/components/ui/CopyButton';
import { Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { MotionReveal } from '@/src/components/ui/MotionReveal';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in your name, email address, and message.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-20 border-t border-slate-800/80 bg-[#06080E]"
      aria-label="Contact Information"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Direct channels */}
            <div className="lg:col-span-5">
              <p className="text-sm font-medium text-blue-400">Contact</p>
              <h2 className="mt-2 text-3xl font-bold font-heading text-white tracking-tight [text-wrap:balance]">
                Let&apos;s connect about engineering roles.
              </h2>
              <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
                Available immediately for full-time, hybrid, or remote Full-Stack and AI Software
                Engineering positions.
              </p>

              <div className="mt-8 space-y-3">
                <div className="flex items-center justify-between gap-3 p-4 rounded-xl bg-[#0C111D] border border-slate-800">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors min-w-0"
                  >
                    <Mail className="w-5 h-5 text-blue-400 shrink-0" aria-hidden="true" />
                    <span className="text-sm truncate">{siteConfig.email}</span>
                  </a>
                  <CopyButton
                    text={siteConfig.email}
                    label="Copy"
                    copiedLabel="Copied"
                    className="text-xs px-2.5 py-1.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
                  />
                </div>

                <div className="flex items-center justify-between gap-3 p-4 rounded-xl bg-[#0C111D] border border-slate-800">
                  <a
                    href={siteConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-300 hover:text-emerald-400 transition-colors min-w-0"
                  >
                    <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0" aria-hidden="true" />
                    <span className="text-sm truncate">{siteConfig.phone} (WhatsApp)</span>
                  </a>
                  <CopyButton
                    text={siteConfig.phone}
                    label="Copy"
                    copiedLabel="Copied"
                    className="text-xs px-2.5 py-1.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
                  />
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800">
                <p className="text-xs text-slate-400 mb-3">
                  Need a PDF copy of my resume?
                </p>
                <DownloadCvButton variant="outline" />
              </div>
            </div>

            {/* Validated Contact Form */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0C111D] border border-slate-800">
                {submitted ? (
                  <div className="py-12 text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" aria-hidden="true" />
                    <h3 className="text-xl font-bold text-white font-heading">Message Received</h3>
                    <p className="text-sm text-slate-400 max-w-sm mx-auto">
                      Thank you, {formData.name}. Your message has been noted—I will reply directly
                      to {formData.email}.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', message: '' });
                      }}
                      className="mt-4 text-xs font-medium text-blue-400 hover:text-blue-300 underline underline-offset-4"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    {error && (
                      <p role="alert" className="text-xs text-rose-400 bg-rose-950/40 border border-rose-900/60 rounded-lg px-3.5 py-2.5">
                        {error}
                      </p>
                    )}

                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jane Doe"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#080B11] border border-slate-800 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#080B11] border border-slate-800 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Role / Interview Details
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Share details about the engineering role, team, or next steps..."
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#080B11] border border-slate-800 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 w-full py-3 px-6 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      <span>Send Message</span>
                      <Send className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
};
