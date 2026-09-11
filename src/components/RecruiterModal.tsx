import React from 'react';
import { 
  X, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Phone, 
  Mail, 
  MessageSquareShare, 
  CheckCircle2, 
  MapPin, 
  Calendar,
  Sparkles
} from 'lucide-react';
import { soundFx } from '../utils/audio';

interface RecruiterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RecruiterModal: React.FC<RecruiterModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={() => {
          soundFx.playClick();
          onClose();
        }}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl rounded-3xl bg-gradient-to-b from-[#160d33] via-[#0f0923] to-[#070512] border border-purple-500/40 p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(168,85,247,0.2)] z-10 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-purple-500/20 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl overflow-hidden border border-purple-400/80 shadow-[0_0_15px_rgba(168,85,247,0.4)] flex-shrink-0">
              <img 
                src="/mine2.jpeg" 
                alt="Dhanush R" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80';
                }}
              />
            </div>
            <div>
              <h3 className="font-['Outfit',sans-serif] font-bold text-xl text-white">
                Dhanush R — Fast-Track Candidate Dossier
              </h3>
              <p className="text-xs font-['JetBrains_Mono',monospace] text-purple-300">
                Java Full Stack Developer • Chennai, India
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="p-2 rounded-xl bg-purple-950/50 border border-purple-500/30 text-purple-300 hover:text-white hover:border-purple-400 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="space-y-5 text-left">
          
          {/* Top Quick Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/20">
              <div className="text-[10px] font-['JetBrains_Mono',monospace] text-purple-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5" />
                DEGREE & INSTITUTION
              </div>
              <div className="text-sm font-bold text-white">B.E. Computer Science & Eng.</div>
              <div className="text-xs text-purple-200/70 mt-0.5">ACET (2022–2026, 8.1 CGPA)</div>
            </div>

            <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/20">
              <div className="text-[10px] font-['JetBrains_Mono',monospace] text-purple-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5" />
                CORE STACK FOCUS
              </div>
              <div className="text-sm font-bold text-white">Java 21, Spring Boot, React, SQL</div>
              <div className="text-xs text-purple-200/70 mt-0.5">Login360 Internship (Skills Building)</div>
            </div>
          </div>

          {/* Highlights Checklist */}
          <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-500/20">
            <h4 className="font-['Outfit',sans-serif] font-bold text-sm text-white mb-2.5 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-purple-400" />
              Candidate Highlights for Hiring Managers
            </h4>
            <ul className="space-y-2 text-xs text-purple-200/80 font-['Plus_Jakarta_Sans',sans-serif] leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Solid command over Core Java 21 (OOP, Collections, Multithreading, Sockets, and Exception Handling).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Hands-on experience architecting REST microservices in Spring Boot and relational schema modeling in MySQL/SQLite.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Frontend agility building responsive single-page web applications with React.js and modern JavaScript (ES6+).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Interpersonal communication and commercial pitching skills honed during a 2-month sales & marketing internship at Prime Vector Private Limited.</span>
              </li>
            </ul>
          </div>

          {/* Logistics */}
          <div className="p-3.5 rounded-xl bg-purple-950/40 border border-purple-500/20 flex flex-wrap items-center justify-between gap-3 text-xs font-['JetBrains_Mono',monospace]">
            <div className="flex items-center gap-1.5 text-purple-300">
              <MapPin className="w-3.5 h-3.5 text-purple-400" />
              <span>Location: Chennai, India</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-300 font-semibold">
              <Calendar className="w-3.5 h-3.5 text-emerald-400" />
              <span>Availability: Immediate Joining</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap gap-2.5 justify-end">
            <a
              href="tel:+919361902056"
              onClick={() => soundFx.playClick()}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold font-['JetBrains_Mono',monospace] bg-purple-950/60 border border-purple-500/30 text-purple-200 hover:text-white hover:border-purple-400 flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-purple-400" />
              <span>+91 9361902056</span>
            </a>

            <a
              href="mailto:dhanutech04@gmail.com"
              onClick={() => soundFx.playClick()}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold font-['JetBrains_Mono',monospace] bg-purple-950/60 border border-purple-500/30 text-purple-200 hover:text-white hover:border-purple-400 flex items-center gap-1.5 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-purple-400" />
              <span>dhanutech04@gmail.com</span>
            </a>

            <a
              href="https://wa.me/919361902056"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick()}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold font-['JetBrains_Mono',monospace] bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-1.5 shadow-[0_2px_12px_rgba(16,185,129,0.35)] transition-colors"
            >
              <MessageSquareShare className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
