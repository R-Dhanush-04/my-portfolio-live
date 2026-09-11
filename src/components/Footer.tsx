import React from 'react';
import { 
  ArrowUp, 
  Heart, 
  Linkedin, 
  Github, 
  Mail, 
  MessageSquareShare, 
  Phone,
  Code2
} from 'lucide-react';
import { soundFx } from '../utils/audio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#05030a] border-t border-purple-500/20 py-12 px-4 sm:px-6 lg:px-8 text-center text-xs text-purple-300/70 font-['JetBrains_Mono',monospace]">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Brand */}
        <div className="space-y-1">
          <h3 className="font-['Syne',sans-serif] font-bold text-xl text-white">
            Dhanush <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">R</span>
          </h3>
          <p className="text-purple-400/80 text-xs">
            Java Full Stack Developer • Spring Boot & React Specialist
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-3">
          <a
            href="https://www.linkedin.com/in/dhanush-r-44394229b/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playClick()}
            className="w-9 h-9 rounded-xl bg-purple-950/40 hover:bg-purple-600/30 border border-purple-500/20 hover:border-purple-400 flex items-center justify-center text-purple-300 hover:text-white transition-all"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href="https://github.com/dhanutech04"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playClick()}
            className="w-9 h-9 rounded-xl bg-purple-950/40 hover:bg-purple-600/30 border border-purple-500/20 hover:border-purple-400 flex items-center justify-center text-purple-300 hover:text-white transition-all"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href="mailto:dhanutech04@gmail.com"
            onClick={() => soundFx.playClick()}
            className="w-9 h-9 rounded-xl bg-purple-950/40 hover:bg-purple-600/30 border border-purple-500/20 hover:border-purple-400 flex items-center justify-center text-purple-300 hover:text-white transition-all"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <a
            href="https://wa.me/919361902056"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playClick()}
            className="w-9 h-9 rounded-xl bg-purple-950/40 hover:bg-emerald-600/30 border border-purple-500/20 hover:border-emerald-400 flex items-center justify-center text-emerald-400 hover:text-white transition-all"
            title="WhatsApp"
          >
            <MessageSquareShare className="w-4 h-4" />
          </a>

          <a
            href="tel:+919361902056"
            onClick={() => soundFx.playClick()}
            className="w-9 h-9 rounded-xl bg-purple-950/40 hover:bg-purple-600/30 border border-purple-500/20 hover:border-purple-400 flex items-center justify-center text-purple-300 hover:text-white transition-all"
            title="Phone"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>

        {/* Divider */}
        <div className="w-24 h-px bg-purple-500/30 mx-auto" />

        {/* Bottom Credits & Scroll to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-2xl mx-auto pt-2">
          <p>© 2026 Dhanush R. All Rights Reserved.</p>
          <div className="flex items-center gap-1.5 text-purple-300">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-fuchsia-400 fill-current" />
            <span>by Dhanush R</span>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
