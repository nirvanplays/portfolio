import { useState } from 'react';
import type React from 'react';
import { Mail, ExternalLink, Copy, Check, Send } from 'lucide-react';
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
    <section id="contact" className="section-container border-t border-slate-100" aria-label="Contact">
      <div className="space-y-12">
        {/* Section Heading & Statement */}
        <div className="space-y-3 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Let's build something useful.
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full" />
          <p className="text-base sm:text-lg text-slate-600 pt-1 leading-relaxed">
            I'm interested in software engineering, AI/ML and challenging technical projects.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Links & Action Cards (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm shadow-xs transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email Me</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-slate-300 hover:border-slate-400 bg-white text-slate-700 hover:text-slate-900 font-medium text-sm shadow-2xs transition-colors"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>

            {/* Email Address Card with Copy Button */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 flex items-center justify-between gap-3">
              <div className="truncate">
                <span className="block text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                  Direct Email
                </span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-sm font-medium text-slate-800 hover:text-blue-600 transition-colors truncate block"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg border border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-all cursor-pointer shadow-2xs flex-shrink-0"
                aria-label="Copy Email Address"
                title="Copy Email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Academic & Geographic Base */}
            <div className="p-4 rounded-xl border border-slate-200 bg-white text-xs text-slate-600 space-y-1">
              <div>
                <span className="font-semibold text-slate-800">Location:</span> Hyderabad, Telangana, India
              </div>
              <div>
                <span className="font-semibold text-slate-800">Academic Standing:</span> GRIET (2024–2028) · CGPA 8.01
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form (7 cols) */}
          <div className="md:col-span-7 p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-5">
            <h3 className="text-base font-semibold text-slate-900">
              Send a Message
            </h3>

            <form onSubmit={handleSendMessage} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="block text-xs font-medium text-slate-700">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none text-slate-900 placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="block text-xs font-medium text-slate-700">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="jane@example.com"
                    className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none text-slate-900 placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="block text-xs font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your role or project..."
                  className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none text-slate-900 placeholder:text-slate-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm transition-colors cursor-pointer shadow-xs"
              >
                {sent ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Opening Mail Client...</span>
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
      </div>
    </section>
  );
};
