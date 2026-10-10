import { useState } from 'react';
import type React from 'react';
import { Mail, ArrowUpRight, Copy, Check, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${senderName}`);
    const body = encodeURIComponent(
      `Name: ${senderName}\nEmail: ${senderEmail}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setSenderName('');
      setSenderEmail('');
      setMessage('');
    }, 3000);
  };

  return (
    <section id="contact" className="space-y-10 pt-8 border-t border-white/[0.08]" aria-label="Contact">
      {/* Section Header */}
      <div className="flex items-center gap-3 font-mono text-xs text-slate-400 uppercase tracking-widest">
        <span className="text-blue-400">05</span>
        <span className="w-8 h-px bg-white/[0.2]" />
        <span>CONTACT</span>
      </div>

      {/* Huge Heading */}
      <div className="space-y-4 max-w-2xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.05]">
          HAVE AN INTERESTING PROBLEM TO BUILD?
        </h2>
        <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
          I'm interested in software engineering, AI/ML and technically challenging projects.
        </p>
      </div>

      {/* Contact Grid: Actions on Left, Form on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
        {/* Left Column: Direct Action Buttons & Email Box (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <Mail className="w-4 h-4" />
              <span>EMAIL ME</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-white/[0.15] bg-white/[0.02] hover:bg-white/[0.06] text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors group"
            >
              <span>LINKEDIN</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Email Copy Card */}
          <div className="p-4 rounded-xl border border-white/[0.08] bg-[#12151c] flex items-center justify-between gap-3">
            <div className="truncate">
              <span className="block font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                Direct Email
              </span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="font-mono text-xs text-white hover:text-blue-400 transition-colors truncate block"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>
            <button
              onClick={handleCopyEmail}
              className="p-2 rounded-lg border border-white/[0.1] bg-white/[0.03] text-slate-300 hover:text-white hover:border-white/[0.3] transition-all cursor-pointer flex-shrink-0"
              aria-label="Copy Email"
              title="Copy Email"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Right Column: Direct Message Form (7 cols) */}
        <div className="lg:col-span-7 editorial-card rounded-xl p-6 sm:p-8 space-y-5">
          <div className="font-mono text-xs text-slate-400 uppercase tracking-wider">
            // SEND A DIRECT MESSAGE
          </div>

          <form onSubmit={handleSendMessage} className="space-y-4 font-mono">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <input
                  type="text"
                  required
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="YOUR NAME"
                  className="w-full text-xs px-4 py-3 rounded-lg bg-white/[0.02] border border-white/[0.1] focus:border-blue-500 focus:outline-none text-white placeholder-slate-400"
                />
              </div>

              <div className="space-y-1">
                <input
                  type="email"
                  required
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  placeholder="YOUR EMAIL"
                  className="w-full text-xs px-4 py-3 rounded-lg bg-white/[0.02] border border-white/[0.1] focus:border-blue-500 focus:outline-none text-white placeholder-slate-400"
                />
              </div>
            </div>

            <div>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="YOUR MESSAGE OR INQUIRY..."
                className="w-full text-xs px-4 py-3 rounded-lg bg-white/[0.02] border border-white/[0.1] focus:border-blue-500 focus:outline-none text-white placeholder-slate-400 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white text-[#0c0e12] hover:bg-slate-200 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              {sent ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>OPENING CLIENT...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>SEND MESSAGE</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
