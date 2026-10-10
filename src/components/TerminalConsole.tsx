import { useState, useRef, useEffect } from 'react';
import type React from 'react';
import { Send, Check, Copy, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES } from '../data/portfolioData';
import { soundManager } from '../audio/soundEffects';

interface TerminalLine {
  id: string;
  type: 'input' | 'output' | 'system' | 'success' | 'error';
  content: string;
}

export const TerminalConsole: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [transmissionSuccess, setTransmissionSuccess] = useState(false);

  // Form states
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [messageContent, setMessageContent] = useState('');

  const [history, setHistory] = useState<TerminalLine[]>([
    {
      id: '1',
      type: 'system',
      content: 'CONNECTION_DAEMON v2.6.4 INITIALIZED // SECURE CHANNEL ESTABLISHED',
    },
    {
      id: '2',
      type: 'system',
      content: 'NODE: HYDERABAD, TELANGANA, INDIA // LATENCY: 24ms',
    },
    {
      id: '3',
      type: 'output',
      content: 'Type "help" to inspect terminal commands, or dispatch transmission below.',
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCopyEmail = () => {
    soundManager.playClick();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);

    setHistory((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        type: 'success',
        content: `[CLIPBOARD] Address copied: ${PERSONAL_INFO.email}`,
      },
    ]);
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    soundManager.playClick();
    const newLines: TerminalLine[] = [
      { id: Date.now().toString(), type: 'input', content: `nirvan@hyd-terminal:~$ ${inputVal}` },
    ];

    switch (cmd) {
      case 'help':
        newLines.push({
          id: (Date.now() + 1).toString(),
          type: 'output',
          content: 'AVAILABLE PROTOCOLS:\n  • initiate_connection() - Launch direct email dispatch\n  • skills                - Enumerate technical competencies\n  • projects              - List verified engineering modules\n  • identity              - View system identity & academic status\n  • clear                 - Purge terminal buffer\n  • contact               - Reveal direct communication endpoints',
        });
        break;
      case 'initiate_connection()':
      case 'initiate_connection':
      case 'connect':
      case 'contact':
        newLines.push({
          id: (Date.now() + 1).toString(),
          type: 'success',
          content: `TARGET ENDPOINTS:\n  • Email:    ${PERSONAL_INFO.email}\n  • LinkedIn: ${PERSONAL_INFO.linkedin}\n  • Location: ${PERSONAL_INFO.location}`,
        });
        window.location.href = `mailto:${PERSONAL_INFO.email}?subject=Project Collaboration / Inquiry`;
        break;
      case 'skills':
        newLines.push({
          id: (Date.now() + 1).toString(),
          type: 'output',
          content: SKILL_CATEGORIES.map((c) => `[${c.category.toUpperCase()}]: ${c.skills.join(', ')}`).join('\n'),
        });
        break;
      case 'projects':
        newLines.push({
          id: (Date.now() + 1).toString(),
          type: 'output',
          content: PROJECTS.map((p) => `[${p.number}] ${p.title} (${p.category})`).join('\n'),
        });
        break;
      case 'identity':
      case 'whoami':
        newLines.push({
          id: (Date.now() + 1).toString(),
          type: 'output',
          content: `NAME: ${PERSONAL_INFO.name}\nROLE: ${PERSONAL_INFO.title}\nINSTITUTION: ${PERSONAL_INFO.education.institution}\nPERIOD: ${PERSONAL_INFO.education.period} (CGPA: ${PERSONAL_INFO.education.cgpa})`,
        });
        break;
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;
      default:
        newLines.push({
          id: (Date.now() + 1).toString(),
          type: 'error',
          content: `Command not recognized: "${cmd}". Type "help" for valid directives.`,
        });
        break;
    }

    setHistory((prev) => [...prev, ...newLines]);
    setInputVal('');
  };

  const handleTransmitMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName || !senderEmail || !messageContent) return;

    soundManager.playActivate();
    setIsTransmitting(true);

    setTimeout(() => {
      setIsTransmitting(false);
      setTransmissionSuccess(true);

      setHistory((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          type: 'success',
          content: `[PAYLOAD_DISPATCHED] Message packaged from ${senderName} <${senderEmail}>. Launching mail client...`,
        },
      ]);

      // Open mailto with populated content
      const subject = encodeURIComponent(`Transmission from ${senderName}`);
      const body = encodeURIComponent(
        `Sender: ${senderName}\nEmail: ${senderEmail}\n\nMessage:\n${messageContent}`
      );
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

      setTimeout(() => {
        setTransmissionSuccess(false);
        setSenderName('');
        setSenderEmail('');
        setMessageContent('');
      }, 4000);
    }, 1200);
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      {/* Prominent Call-to-Action */}
      <div className="text-center space-y-4">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 uppercase tracking-tight">
          "Let's build something intelligent."
        </h3>
        <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto font-sans-clean">
          Open to collaborative engineering, AI/ML research projects, full-stack systems architecture, and high-performance software exploration.
        </p>
      </div>

      {/* Terminal + Form Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Terminal Screen (Left 7 Cols) */}
        <div className="lg:col-span-7 hud-panel rounded-xl border border-cyan-500/30 overflow-hidden flex flex-col font-mono-tech shadow-[0_0_30px_rgba(0,0,0,0.6)]">
          {/* Terminal Titlebar */}
          <div className="px-4 py-2.5 bg-slate-900/90 border-b border-cyan-500/20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[11px] text-slate-400 tracking-wider ml-2">
                nirvan@hyd-terminal:~ [BASH]
              </span>
            </div>
            <div className="text-[10px] text-cyan-400/80 tracking-widest uppercase">
              PORT: 443 // ENCRYPTED
            </div>
          </div>

          {/* Terminal Stream Buffer */}
          <div className="p-4 sm:p-5 flex-1 min-h-[300px] max-h-[380px] overflow-y-auto space-y-2 text-xs bg-[#05070c]/90">
            {history.map((line) => (
              <div
                key={line.id}
                className={`whitespace-pre-wrap leading-relaxed ${
                  line.type === 'system'
                    ? 'text-slate-400 text-[11px]'
                    : line.type === 'input'
                    ? 'text-cyan-300 font-bold'
                    : line.type === 'success'
                    ? 'text-emerald-400'
                    : line.type === 'error'
                    ? 'text-rose-400'
                    : 'text-slate-300'
                }`}
              >
                {line.content}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Interactive Command Input Line */}
          <form
            onSubmit={handleCommand}
            className="p-3 bg-slate-900/50 border-t border-cyan-500/20 flex items-center gap-2"
          >
            <span className="text-cyan-400 font-bold text-xs select-none">&gt;</span>
            <input
              type="text"
              aria-label="Terminal command input"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder='Type "help" or "initiate_connection()"...'
              className="flex-1 bg-transparent text-xs text-white placeholder-slate-400 focus:outline-none font-mono-tech"
            />
            <button
              type="submit"
              className="text-[11px] text-cyan-400 hover:text-white px-2 py-1 rounded bg-cyan-950/40 border border-cyan-500/30 transition-colors cursor-pointer"
            >
              EXECUTE
            </button>
          </form>
        </div>

        {/* Direct Contact Form & Links (Right 5 Cols) */}
        <div className="lg:col-span-5 hud-panel rounded-xl border border-cyan-500/30 p-6 flex flex-col justify-between space-y-6">
          {/* Quick Direct Links */}
          <div className="space-y-3">
            <span className="text-xs font-mono-tech text-cyan-400 uppercase tracking-widest block border-b border-cyan-500/20 pb-1">
              DIRECT CHANNELS
            </span>

            {/* Email Address One-Click Copy */}
            <div className="p-3 rounded-lg border border-slate-800 bg-slate-900/60 flex items-center justify-between gap-3">
              <div className="truncate">
                <span className="text-[10px] font-mono-tech text-slate-400 block uppercase">
                  PRIMARY EMAIL
                </span>
                <span className="text-xs font-mono-tech text-white font-semibold truncate">
                  {PERSONAL_INFO.email}
                </span>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2 rounded border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 hover:text-white hover:bg-cyan-900/60 transition-colors flex-shrink-0 cursor-pointer"
                title="Copy Email"
                aria-label="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* LinkedIn Connection */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-blue-500/30 bg-blue-950/20 hover:bg-blue-900/30 transition-all flex items-center justify-between group"
            >
              <div>
                <span className="text-[10px] font-mono-tech text-blue-400 block uppercase">
                  PROFESSIONAL NETWORK
                </span>
                <span className="text-xs font-mono-tech text-white font-semibold">
                  linkedin.com/in/nirvanreddy
                </span>
              </div>
              <ExternalLink className="w-4 h-4 text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Quick Transmission Dispatch Form */}
          <form onSubmit={handleTransmitMessage} className="space-y-3 font-mono-tech">
            <span className="text-xs text-cyan-400 uppercase tracking-widest block border-b border-cyan-500/20 pb-1">
              DISPATCH PAYLOAD
            </span>

            <div>
              <input
                type="text"
                required
                aria-label="Your Name or Callsign"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="YOUR NAME / CALLSIGN"
                className="w-full text-xs px-3 py-2 rounded bg-slate-900/80 border border-slate-700 focus:border-cyan-400 text-white placeholder-slate-400 focus:outline-none"
              />
            </div>

            <div>
              <input
                type="email"
                required
                aria-label="Your Email Address"
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                placeholder="YOUR EMAIL COORDINATES"
                className="w-full text-xs px-3 py-2 rounded bg-slate-900/80 border border-slate-700 focus:border-cyan-400 text-white placeholder-slate-400 focus:outline-none"
              />
            </div>

            <div>
              <textarea
                required
                rows={3}
                aria-label="Transmission Message"
                value={messageContent}
                onChange={(e) => setMessageContent(e.target.value)}
                placeholder="TRANSMISSION MESSAGE..."
                className="w-full text-xs px-3 py-2 rounded bg-slate-900/80 border border-slate-700 focus:border-cyan-400 text-white placeholder-slate-400 focus:outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isTransmitting}
              className="w-full py-2.5 px-4 rounded border border-cyan-500/50 bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 hover:text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(0,240,255,0.2)]"
            >
              {isTransmitting ? (
                <>
                  <span className="w-3 h-3 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
                  <span>TRANSMITTING...</span>
                </>
              ) : transmissionSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>TRANSMISSION COMPLETE</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>DISPATCH TRANSMISSION</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
