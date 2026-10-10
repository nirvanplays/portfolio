import { useState } from 'react';
import type React from 'react';
import { Mail, ArrowRight, ArrowUpRight, Copy, Check, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setName('');
      setEmail('');
      setMessage('');
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 sm:py-36 border-t border-white/[0.08] space-y-16" aria-label="Contact">
      {/* Small Section Label */}
      <span className="font-mono text-xs sm:text-sm text-blue-400 font-semibold uppercase tracking-widest block">
        CONTACT
      </span>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Bold Visual Moment (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-6xl lg:text-[72px] font-extrabold text-white tracking-tight leading-[1.04]">
              LET'S BUILD <br />
              SOMETHING USEFUL.
            </h2>

            <p className="text-xl sm:text-2xl text-slate-300 font-light max-w-xl leading-relaxed">
              Interested in software engineering, AI/ML and challenging technical projects.
            </p>
          </div>

          <div className="space-y-2 text-base text-slate-400">
            <p>
              Open for full-stack engineering and AI/ML internship roles. Reach out directly via email or connect on LinkedIn.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm sm:text-base tracking-wide transition-all shadow-sm group"
            >
              <Mail className="w-4 h-4" />
              <span>EMAIL ME</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-white/[0.18] hover:border-white/[0.35] bg-white/[0.02] hover:bg-white/[0.06] text-white font-semibold text-sm sm:text-base tracking-wide transition-all"
            >
              <span>LINKEDIN</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-3.5 rounded-lg border border-white/[0.12] hover:border-white/[0.25] text-xs sm:text-sm font-mono text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">COPIED</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>{PERSONAL_INFO.email}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Column: Approachable Message Box (5 cols) */}
        <div className="lg:col-span-5 p-7 sm:p-9 rounded-2xl bg-[#12151B]/80 border border-white/[0.08] space-y-6">
          <h3 className="text-lg font-bold text-white tracking-tight">
            Send a direct inquiry
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4 text-sm">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider font-mono">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Alex Chen"
                className="w-full px-4 py-3 rounded-lg bg-[#0A0C0F] border border-white/[0.12] text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider font-mono">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alex@company.com"
                className="w-full px-4 py-3 rounded-lg bg-[#0A0C0F] border border-white/[0.12] text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider font-mono">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hi Nirvan, I'm reaching out regarding a software engineering role..."
                className="w-full px-4 py-3 rounded-lg bg-[#0A0C0F] border border-white/[0.12] text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              {sent ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Launching Email Client...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
