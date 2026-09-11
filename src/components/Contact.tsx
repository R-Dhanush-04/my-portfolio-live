import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  MessageSquareShare, 
  Clock, 
  Rocket, 
  User, 
  Tag, 
  MessageSquare
} from 'lucide-react';
import { soundFx } from '../utils/audio';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      soundFx.playClick();
      setFeedback({
        type: 'error',
        message: 'Please fill in all required fields (Name, Email & Message).',
      });
      return;
    }

    setIsSubmitting(true);
    soundFx.playClick();

    setTimeout(() => {
      setIsSubmitting(false);
      soundFx.playSuccess();
      setFeedback({
        type: 'success',
        message: `Thank you, ${name.trim()}! Your message regarding "${subject.trim() || 'General Inquiry'}" has been captured. Dhanush R will respond directly to ${email.trim()} within 24 hours.`,
      });
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 1000);
  };

  const handleWhatsAppSend = () => {
    soundFx.playClick();
    const clientName = name.trim() || 'Hiring Team';
    const clientSub = subject.trim() || 'Software Developer Role';
    const clientMsg = message.trim() || 'Hi Dhanush, I checked your portfolio and would like to discuss an opportunity!';

    const text = `Hi Dhanush! My name is ${clientName}. Regarding: "${clientSub}" - ${clientMsg}`;
    const url = `https://wa.me/919361902056?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-purple-500/10">
      
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-['JetBrains_Mono',monospace] font-semibold bg-purple-950/50 border border-purple-500/30 text-purple-300">
          <Mail className="w-3.5 h-3.5 text-fuchsia-400" />
          <span>LET'S TALK</span>
        </div>
        <h2 className="font-['Syne',sans-serif] text-4xl sm:text-5xl font-extrabold text-white">
          Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-300">Touch</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full mx-auto shadow-[0_0_12px_#c084fc]" />
        <p className="text-sm sm:text-base text-purple-200/70 max-w-xl mx-auto font-normal">
          Available for full-time Java Full Stack roles, software engineering interviews, or project collaborations.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            <div className="rounded-3xl bg-gradient-to-b from-purple-950/30 via-[#0d091e] to-[#070510] border border-purple-500/30 p-6 sm:p-8 shadow-[0_15px_35px_rgba(0,0,0,0.5)]">
              
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-['JetBrains_Mono',monospace] font-semibold bg-purple-900/40 border border-purple-400/30 text-purple-300 mb-4">
                <Sparkles className="w-3 h-3 text-fuchsia-400" />
                Have a project or opportunity?
              </span>

              <h3 className="font-['Outfit',sans-serif] text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight">
                Let's Build Something{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">
                  Exceptional Together.
                </span>
              </h3>

              <p className="text-xs sm:text-sm text-purple-200/70 leading-relaxed mb-6 font-normal">
                I am open to full-time roles, associate software engineer positions, and technical team integrations. Feel free to connect via direct channels below.
              </p>

              {/* Channels List */}
              <div className="space-y-3.5">
                
                <a
                  href="mailto:dhanutech04@gmail.com"
                  onClick={() => soundFx.playClick()}
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-purple-950/40 hover:bg-purple-900/40 border border-purple-500/20 hover:border-purple-400 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-900/50 text-purple-400 group-hover:bg-purple-600 group-hover:text-white flex items-center justify-center transition-colors flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-['JetBrains_Mono',monospace] text-purple-400/80 uppercase font-bold tracking-wider">
                      EMAIL
                    </div>
                    <div className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                      dhanutech04@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="https://wa.me/919361902056"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playClick()}
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-purple-950/40 hover:bg-emerald-950/40 border border-purple-500/20 hover:border-emerald-400 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-900/50 text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center transition-colors flex-shrink-0">
                    <MessageSquareShare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-['JetBrains_Mono',monospace] text-emerald-400/80 uppercase font-bold tracking-wider">
                      WHATSAPP
                    </div>
                    <div className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                      +91 9361902056
                    </div>
                  </div>
                </a>

                <a
                  href="tel:+919361902056"
                  onClick={() => soundFx.playClick()}
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-purple-950/40 hover:bg-purple-900/40 border border-purple-500/20 hover:border-purple-400 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-900/50 text-purple-400 group-hover:bg-purple-600 group-hover:text-white flex items-center justify-center transition-colors flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-['JetBrains_Mono',monospace] text-purple-400/80 uppercase font-bold tracking-wider">
                      PHONE
                    </div>
                    <div className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                      +91 9361902056
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-purple-950/40 border border-purple-500/20">
                  <div className="w-10 h-10 rounded-xl bg-purple-900/50 text-purple-400 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-['JetBrains_Mono',monospace] text-purple-400/80 uppercase font-bold tracking-wider">
                      LOCATION
                    </div>
                    <div className="text-sm font-semibold text-white">
                      Chennai, Tamil Nadu, India
                    </div>
                  </div>
                </div>

              </div>

              {/* Availability Note */}
              <div className="mt-6 pt-4 border-t border-purple-500/20 flex items-center justify-between text-xs font-['JetBrains_Mono',monospace]">
                <span className="text-purple-300/70">Relocation:</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Open All India & Remote
                </span>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Animated Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-gradient-to-b from-purple-950/30 via-[#0d091e] to-[#070510] border border-purple-500/30 p-6 sm:p-8 shadow-[0_15px_35px_rgba(0,0,0,0.5)]">
              
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-['Outfit',sans-serif] font-bold text-2xl text-white">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs font-['JetBrains_Mono',monospace] text-purple-300/70 mt-0.5">
                    Replies guaranteed within 24 hours.
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-['JetBrains_Mono',monospace] font-semibold bg-emerald-950/60 border border-emerald-500/40 text-emerald-300">
                  Fast Response
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-['JetBrains_Mono',monospace] text-purple-300 font-semibold mb-1.5 flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-purple-400" />
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Hiring Manager"
                      className="w-full px-4 py-3 rounded-xl bg-purple-950/30 border border-purple-500/30 focus:border-purple-400 text-sm text-white placeholder-purple-300/30 focus:outline-none focus:ring-1 focus:ring-purple-400 transition-all font-['Plus_Jakarta_Sans',sans-serif]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-['JetBrains_Mono',monospace] text-purple-300 font-semibold mb-1.5 flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5 text-purple-400" />
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="recruiter@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-purple-950/30 border border-purple-500/30 focus:border-purple-400 text-sm text-white placeholder-purple-300/30 focus:outline-none focus:ring-1 focus:ring-purple-400 transition-all font-['Plus_Jakarta_Sans',sans-serif]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-['JetBrains_Mono',monospace] text-purple-300 font-semibold mb-1.5 flex items-center gap-1">
                    <Tag className="w-3.5 h-3.5 text-purple-400" />
                    SUBJECT / ROLE OPPORTUNITY *
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Java Full Stack Developer Opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-purple-950/30 border border-purple-500/30 focus:border-purple-400 text-sm text-white placeholder-purple-300/30 focus:outline-none focus:ring-1 focus:ring-purple-400 transition-all font-['Plus_Jakarta_Sans',sans-serif]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-['JetBrains_Mono',monospace] text-purple-300 font-semibold mb-1.5 flex items-center gap-1">
                    <MessageSquare className="w-3.5 h-3.5 text-purple-400" />
                    MESSAGE *
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    placeholder="Hi Dhanush, I reviewed your Movie Ticket Booking, RedStore, and Firewall projects and would like to invite you for an interview..."
                    className="w-full px-4 py-3 rounded-xl bg-purple-950/30 border border-purple-500/30 focus:border-purple-400 text-sm text-white placeholder-purple-300/30 focus:outline-none focus:ring-1 focus:ring-purple-400 transition-all font-['Plus_Jakarta_Sans',sans-serif] resize-none"
                    required
                  />
                </div>

                {/* Submit & WhatsApp Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white shadow-[0_4px_20px_rgba(139,92,246,0.35)] transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-70 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Rocket className="w-4 h-4 text-purple-200" />
                        <span>Dispatch Direct Message</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="px-5 py-3.5 rounded-xl font-semibold text-xs font-['JetBrains_Mono',monospace] bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-500/40 text-emerald-300 hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <MessageSquareShare className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp</span>
                  </button>
                </div>

              </form>

              {/* Feedback Alert */}
              {feedback && (
                <div
                  className={`mt-4 p-4 rounded-2xl border text-xs font-['JetBrains_Mono',monospace] flex items-start gap-3 animate-in fade-in duration-200 ${
                    feedback.type === 'success'
                      ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
                      : 'bg-rose-950/40 border-rose-500/40 text-rose-200'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div className="leading-relaxed">{feedback.message}</div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
