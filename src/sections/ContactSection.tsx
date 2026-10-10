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
    <section id="contact" className="py-20 sm:py-28 border-t border-white/[0.08] space-y-12" aria-label="Contact">
      {/* Small Section Label */}
      <div className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-widest">
        CONTACT
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Human Editorial Heading & Direct Links (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            LET'S BUILD SOMETHING.
          </h2>

          <p className="text-lg sm:text-xl text-slate-300 font-light max-w-xl leading-relaxed">
            Interested in software engineering, AI/ML and technically challenging projects?
          </p>

          <p className="text-sm sm:text-base text-slate-400 font-light max-w-lg leading-relaxed">
            I'm currently seeking software engineering and AI/ML internship opportunities. Whether you have a project idea, question, or want to discuss a role, feel free to reach out.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm tracking-wide transition-all shadow-sm group"
            >
              <Mail className="w-4 h-4" />
              <span>EMAIL ME</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/[0.16] hover:border-white/[0.3] bg-white/[0.02] hover:bg-white/[0.06] text-white font-medium text-sm tracking-wide transition-all"
            >
              <span>LINKEDIN</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-white/[0.1] hover:border-white/[0.2] text-xs font-mono text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">COPIED</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>{PERSONAL_INFO.email}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Column: Clean, Approachable Message Form (5 cols) */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-xl bg-[#11141a]/60 border border-white/[0.08] space-y-5">
          <h3 className="text-base font-bold text-white tracking-tight">
            Send a direct message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4 text-sm">
            <div>
              <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1.5">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Alex Chen"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#0b0d10] border border-white/[0.1] text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1.5">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alex@company.com"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#0b0d10] border border-white/[0.1] text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hi Nirvan, I reviewed your portfolio and would like to talk about..."
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#0b0d10] border border-white/[0.1] text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
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
