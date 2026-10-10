import { useState } from 'react';
import type React from 'react';
import { ExternalLink, Copy, Check, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundManager } from '../audio/soundEffects';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleCopy = () => {
    soundManager.playClick();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    soundManager.playActivate();
    const subject = encodeURIComponent(`Message from ${senderName}`);
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
    }, 4000);
  };

  return (
    <section id="contact" className="section-container" aria-label="Contact">
      <div className="border-t border-white/[0.1] pt-16 sm:pt-24 space-y-16">
        {/* Section Header */}
        <div className="flex items-center gap-3 font-mono-tech text-xs text-slate-400 uppercase tracking-widest">
          <span className="text-[--accent-cyan]">06</span>
          <span className="w-8 h-px bg-white/[0.2]" />
          <span>INITIATE CONTACT</span>
        </div>

        {/* Large Statement */}
        <div className="space-y-6 max-w-4xl">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-sans-clean font-extrabold tracking-tight text-white uppercase leading-[0.95]">
            LET'S BUILD SOMETHING
            <span className="block text-gradient-cyan">INTELLIGENT.</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-xl">
            Open to conversations around software engineering, AI/ML systems research, and collaborative development.
          </p>
        </div>

        {/* Contact Grid: Direct Channels (Left) & Quick Dispatch (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 border-t border-white/[0.08]">
          {/* Left Column: Direct Links */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono-tech text-xs text-[--accent-cyan] uppercase tracking-widest block">
              // DIRECT CHANNELS
            </span>

            {/* Email Box */}
            <div className="p-5 rounded-lg border border-white/[0.08] bg-white/[0.02] flex items-center justify-between gap-4">
              <div className="space-y-1 truncate">
                <span className="font-mono-tech text-[10px] text-slate-400 uppercase tracking-wider block">
                  PRIMARY EMAIL
                </span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-mono-tech text-sm text-white hover:text-[--accent-cyan] transition-colors truncate block"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <button
                onClick={handleCopy}
                className="p-2.5 rounded border border-white/[0.12] bg-white/[0.03] text-slate-300 hover:text-white hover:border-[--accent-cyan] transition-colors cursor-pointer flex-shrink-0"
                aria-label="Copy Email"
                title="Copy Email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* LinkedIn Card */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-lg border border-white/[0.08] bg-white/[0.02] hover:border-[--accent-cyan]/40 hover:bg-white/[0.04] transition-all flex items-center justify-between group"
            >
              <div className="space-y-1">
                <span className="font-mono-tech text-[10px] text-slate-400 uppercase tracking-wider block">
                  PROFESSIONAL NETWORK
                </span>
                <span className="font-mono-tech text-sm text-white group-hover:text-[--accent-cyan] transition-colors font-medium">
                  linkedin.com/in/nirvanreddy
                </span>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[--accent-cyan] transition-colors" />
            </a>

            {/* Location & Academic Base */}
            <div className="font-mono-tech text-xs text-slate-400 space-y-1 pt-2">
              <div>LOCATION: Hyderabad, Telangana, India</div>
              <div>ACADEMIC: GRIET (2024–2028) · CGPA: 8.01</div>
            </div>
          </div>

          {/* Right Column: Quick Message Form */}
          <div className="lg:col-span-7 editorial-panel rounded-xl p-8 space-y-6">
            <span className="font-mono-tech text-xs text-[--accent-cyan] uppercase tracking-widest block">
              // SEND DIRECT MESSAGE
            </span>

            <form onSubmit={handleSendMessage} className="space-y-4 font-mono-tech">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    required
                    aria-label="Your Name"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="YOUR NAME"
                    className="w-full text-xs px-4 py-3 rounded bg-white/[0.03] border border-white/[0.1] focus:border-[--accent-cyan] text-white placeholder-slate-400 focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    aria-label="Your Email"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="YOUR EMAIL"
                    className="w-full text-xs px-4 py-3 rounded bg-white/[0.03] border border-white/[0.1] focus:border-[--accent-cyan] text-white placeholder-slate-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <textarea
                  required
                  rows={4}
                  aria-label="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="PROJECT INQUIRY / MESSAGE..."
                  className="w-full text-xs px-4 py-3 rounded bg-white/[0.03] border border-white/[0.1] focus:border-[--accent-cyan] text-white placeholder-slate-400 focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded bg-white text-[#090a0d] hover:bg-[--accent-cyan] font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                {sent ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>TRANSMISSION READY</span>
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
      </div>
    </section>
  );
};
