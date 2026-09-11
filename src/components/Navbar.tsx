import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Volume2, 
  VolumeX, 
  Mic, 
  MicOff, 
  Briefcase, 
  FileText, 
  Code2, 
  Layers, 
  User, 
  Mail, 
  Terminal,
  Sparkles
} from 'lucide-react';
import { soundFx } from '../utils/audio';

interface NavbarProps {
  activeSection: string;
  onOpenRecruiterModal: () => void;
  onOpenVoiceModal: () => void;
  onOpenEntrance?: () => void;
  isVoiceSpeaking: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onOpenRecruiterModal,
  onOpenVoiceModal,
  onOpenEntrance,
  isVoiceSpeaking
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(soundFx.enabled);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    soundFx.enabled = !soundFx.enabled;
    setSoundEnabled(soundFx.enabled);
    if (soundFx.enabled) {
      soundFx.playSuccess();
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home', icon: Terminal },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code2 },
    { name: 'Projects', href: '#projects', icon: Layers },
    { name: 'Resume', href: '#resume', icon: FileText },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const handleNavClick = (href: string) => {
    soundFx.playClick();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Laser Progress Bar with Ultra Pro Violetic Gradient */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-violet-600 via-purple-400 to-fuchsia-400 z-50 transition-all duration-150 ease-out shadow-[0_0_15px_rgba(168,85,247,0.9)] pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
      />

      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#090714]/85 backdrop-blur-xl border-b border-purple-500/20 shadow-[0_10px_35px_rgba(0,0,0,0.5)]' 
            : 'bg-transparent border-b border-white/5'
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Logo Identity */}
          <a 
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="group flex min-w-0 items-center gap-2.5 sm:gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-xl p-1"
          >
            <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-purple-500/80 shadow-[0_0_20px_rgba(168,85,247,0.4)] group-hover:shadow-[0_0_28px_rgba(168,85,247,0.7)] group-hover:rotate-6 transition-all duration-300">
              <img 
                src="/mine2.jpeg" 
                alt="Dhanush R" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-['Syne',sans-serif] font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-purple-300 transition-colors">
                  Dhanush <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">R</span>
                </span>
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#34d399]" />
              </div>
              <p className="hidden sm:block text-[11px] font-['JetBrains_Mono',monospace] text-purple-300/80 tracking-wide font-medium">
                Java Full Stack Developer
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex flex-1 justify-center items-center gap-1 2xl:gap-2 whitespace-nowrap">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.name.toLowerCase();
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-white bg-purple-950/60 border border-purple-500/40 shadow-[0_0_16px_rgba(168,85,247,0.25)]'
                      : 'text-purple-200/70 hover:text-white hover:bg-purple-900/20'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-purple-400' : 'text-purple-300/60'}`} />
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-gradient-to-r from-purple-400 to-fuchsia-400 rounded-full shadow-[0_0_8px_#c084fc]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Controls & Fast-Track */}
          <div className="hidden xl:flex items-center justify-end gap-2 shrink-0">
            {/* Entrance AI Doll Greeting Replay Trigger */}
            {onOpenEntrance && (
              <button
                id="btn-entrance-greeting"
                onClick={() => { soundFx.playClick(); onOpenEntrance(); }}
                title="View AI Doll Welcome Greeting"
                className="px-3 py-2 rounded-xl border border-purple-500/30 bg-purple-950/40 text-purple-300 hover:border-purple-400 hover:text-white transition-all duration-200 flex items-center gap-1.5 text-xs font-['JetBrains_Mono',monospace]"
              >
                <span className="text-sm">👋</span>
                <span className="hidden xl:inline">AI Welcome</span>
              </button>
            )}

            {/* Interactive Voice Welcome narration button */}
            <button
              id="btn-voice-tour"
              onClick={() => { soundFx.playClick(); onOpenVoiceModal(); }}
              title={isVoiceSpeaking ? 'Voice Narrator Active' : 'Listen to Voice Narration'}
              className={`p-2.5 rounded-xl border transition-all duration-200 flex items-center gap-1.5 text-xs font-['JetBrains_Mono',monospace] ${
                isVoiceSpeaking
                  ? 'bg-purple-600/30 border-purple-400 text-purple-200 shadow-[0_0_18px_rgba(168,85,247,0.5)] animate-pulse'
                  : 'bg-purple-950/40 border-purple-500/30 text-purple-300 hover:border-purple-400 hover:text-white'
              }`}
            >
              <Sparkles className={`w-4 h-4 ${isVoiceSpeaking ? 'text-purple-300 animate-spin' : 'text-purple-400'}`} />
              <span className="hidden lg:inline">{isVoiceSpeaking ? 'Voice Playing...' : 'Voice Tour'}</span>
            </button>

            {/* Audio Sound FX Toggle */}
            <button
              id="btn-sound-toggle"
              onClick={toggleSound}
              title={soundEnabled ? 'Audio FX Enabled' : 'Audio FX Muted'}
              className={`p-2.5 rounded-xl border transition-all duration-200 ${
                soundEnabled
                  ? 'bg-purple-950/40 border-purple-500/30 text-purple-300 hover:border-purple-400 hover:text-white'
                  : 'bg-black/40 border-white/10 text-neutral-500 hover:text-neutral-300'
              }`}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-purple-400" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Recruiter Fast-Track Modal Trigger */}
            <button
              id="btn-hr-fast-track"
              onClick={() => { soundFx.playClick(); onOpenRecruiterModal(); }}
              className="px-4 py-2 rounded-xl text-xs font-semibold font-['Outfit',sans-serif] tracking-wider uppercase bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white shadow-[0_4px_20px_rgba(139,92,246,0.35)] hover:shadow-[0_6px_25px_rgba(168,85,247,0.5)] transition-all duration-200 flex items-center gap-1.5 active:scale-95"
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>HR Fast-Track</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex xl:hidden items-center gap-2 shrink-0">
            <button
              onClick={() => { soundFx.playClick(); onOpenVoiceModal(); }}
              className="p-2 rounded-lg bg-purple-950/50 border border-purple-500/30 text-purple-300"
              title="Voice Tour"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
            </button>
            <button
              onClick={() => { soundFx.playClick(); setMobileMenuOpen(!mobileMenuOpen); }}
              className="p-2.5 rounded-xl bg-purple-950/50 border border-purple-500/30 text-purple-200 hover:text-white hover:border-purple-400 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          <div className="fixed top-[5.5rem] left-4 right-4 max-h-[calc(100dvh-7rem)] overflow-y-auto bg-[#0d091e] border border-purple-500/30 rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-50 animate-in fade-in slide-in-from-top duration-200">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.name.toLowerCase();
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive 
                        ? 'bg-purple-600/30 text-white border border-purple-500/40 shadow-[0_0_15px_rgba(168,85,247,0.3)]' 
                        : 'text-purple-200/80 hover:bg-purple-900/20 hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-purple-400" />
                    <span>{link.name}</span>
                  </a>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-purple-500/20 flex flex-col gap-2.5">
              <button
                onClick={() => { soundFx.playClick(); setMobileMenuOpen(false); onOpenRecruiterModal(); }}
                className="w-full py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-[0_4px_20px_rgba(139,92,246,0.35)] flex items-center justify-center gap-2"
              >
                <Briefcase className="w-4 h-4" />
                <span>HR Fast-Track Summary</span>
              </button>

              <div className="flex items-center justify-between px-2 pt-1 text-xs text-purple-300/80 font-['JetBrains_Mono',monospace]">
                <span>Audio FX Feedback</span>
                <button
                  onClick={toggleSound}
                  className="px-3 py-1 rounded-lg bg-purple-950 border border-purple-500/30 text-purple-300"
                >
                  {soundEnabled ? 'Enabled' : 'Muted'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
