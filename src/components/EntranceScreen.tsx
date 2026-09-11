import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Volume2, 
  VolumeX, 
  CheckCircle2, 
  Code2, 
  GraduationCap, 
  Briefcase,
  Play
} from 'lucide-react';
import { soundFx } from '../utils/audio';

interface EntranceScreenProps {
  isOpen: boolean;
  onEnter: () => void;
}

export const EntranceScreen: React.FC<EntranceScreenProps> = ({ isOpen, onEnter }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [countdown, setCountdown] = useState(12);
  const [waveCount, setWaveCount] = useState(0);

  // Auto-enter timer countdown
  useEffect(() => {
    if (!isOpen) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleEnter();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  const handleEnter = () => {
    soundFx.playSuccess();
    setIsExiting(true);
    setTimeout(() => {
      onEnter();
      setIsExiting(false);
    }, 600);
  };

  const handleVoiceHi = () => {
    soundFx.playClick();
    setIsSpeaking(true);
    setWaveCount((prev) => prev + 1);
    soundFx.speak(
      "Hi there! Welcome to Dhanush's engineering portfolio. He is a Java Full Stack Developer specializing in Core Java 21, Spring Boot, MySQL, and React. Enjoy exploring his verified projects and resume!",
      () => {
        setIsSpeaking(false);
      }
    );
  };

  if (!isOpen && !isExiting) return null;

  return (
    <div
      id="entrancePortal"
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#06040f]/95 backdrop-blur-2xl transition-all duration-700 ${
        isExiting ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      style={{ minHeight: '100vh' }}
    >
      {/* Background Animated Neon Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/25 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main Entrance Card Container */}
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#0c081e]/90 border border-purple-500/40 p-6 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(168,85,247,0.3)] backdrop-blur-xl text-center my-auto overflow-hidden">
        
        {/* Top Accent Gradient Line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-violet-600 via-purple-400 to-fuchsia-400" />

        {/* Header Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/70 border border-purple-500/30 text-xs font-['JetBrains_Mono',monospace] text-purple-300 mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
          <span>PORTFOLIO ENTRANCE GATEWAY</span>
          <span className="text-purple-400/50">•</span>
          <span className="text-purple-300">Auto-enter in {countdown}s</span>
        </div>

        {/* AI Doll Character Presentation */}
        <div className="relative flex flex-col items-center justify-center mb-6">
          
          {/* Glowing Aura Behind Avatar */}
          <div className="absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full bg-gradient-to-tr from-purple-500/30 via-fuchsia-500/20 to-violet-600/25 blur-xl pointer-events-none animate-pulse" />

          {/* Animated Speech Bubble */}
          <div className="relative mb-3 px-4 py-2 sm:px-5 sm:py-2.5 rounded-2xl bg-gradient-to-r from-purple-950/90 to-[#180e38]/90 border border-purple-400/60 shadow-[0_8px_25px_rgba(0,0,0,0.5)] text-center animate-bounce">
            <div className="flex items-center justify-center gap-2">
              <span className="text-xl sm:text-2xl animate-spin" style={{ animationDuration: '3s' }}>👋</span>
              <span className="font-['Outfit',sans-serif] font-bold text-sm sm:text-base text-white">
                Hi there! Welcome!
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-purple-200/90 font-['Plus_Jakarta_Sans',sans-serif] mt-0.5">
              I'm the AI guide for Dhanush's engineering portfolio.
            </p>
            {/* Bubble Tail */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-[#180e38]" />
          </div>

          {/* AI Doll Avatar Image */}
          <div className="relative w-36 h-48 sm:w-44 sm:h-56 flex items-center justify-center filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.7)] hover:scale-105 transition-transform duration-300">
            <img
              src="/welcome-boy.png"
              alt="AI Welcome Companion"
              className="w-full h-full object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/welcome-boy.png';
              }}
            />

            {/* Speaking Pulse Badge */}
            {isSpeaking && (
              <span className="absolute -top-1 -right-1 px-2.5 py-1 rounded-full bg-purple-600 border border-purple-300 text-white text-[10px] font-['JetBrains_Mono',monospace] animate-pulse flex items-center gap-1 shadow-[0_0_15px_rgba(168,85,247,0.8)]">
                <Volume2 className="w-3 h-3 animate-spin" />
                Speaking...
              </span>
            )}
          </div>
        </div>

        {/* Engineer Name & Credentials */}
        <div className="space-y-2 mb-6">
          <h1 className="font-['Syne',sans-serif] font-black text-3xl sm:text-4xl text-white tracking-tight">
            Dhanush <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-violet-300">R</span>
          </h1>

          <p className="text-sm sm:text-base font-semibold font-['Outfit',sans-serif] text-purple-200">
            Java Full Stack Developer • Spring Boot & React
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-xs font-['JetBrains_Mono',monospace] text-purple-300/80">
            <span className="px-2.5 py-1 rounded-lg bg-purple-950/60 border border-purple-500/30 flex items-center gap-1">
              <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
              B.E. CSE (8.1 CGPA)
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-purple-950/60 border border-purple-500/30 flex items-center gap-1">
              <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
              Login360 Internship
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Immediate Joiner
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          {/* Main Enter Portfolio Button */}
          <button
            id="btnEnterPortfolio"
            onClick={handleEnter}
            className="w-full sm:w-auto px-8 py-3.5 rounded-2xl font-['Outfit',sans-serif] font-bold text-sm text-white bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 shadow-[0_6px_25px_rgba(168,85,247,0.5)] hover:shadow-[0_8px_35px_rgba(168,85,247,0.7)] transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Enter Portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Hear AI Greeting Button */}
          <button
            id="btnHearAiGreeting"
            onClick={handleVoiceHi}
            className={`w-full sm:w-auto px-5 py-3.5 rounded-2xl font-['JetBrains_Mono',monospace] text-xs font-semibold border transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
              isSpeaking
                ? 'bg-purple-900/60 border-purple-400 text-white shadow-[0_0_20px_rgba(168,85,247,0.6)] animate-pulse'
                : 'bg-purple-950/50 hover:bg-purple-900/50 border-purple-500/40 text-purple-200 hover:text-white'
            }`}
          >
            <Volume2 className={`w-4 h-4 ${isSpeaking ? 'text-fuchsia-300' : 'text-purple-400'}`} />
            <span>{isSpeaking ? 'Narrating Greeting...' : 'Say Hi (Voice Greeting)'}</span>
          </button>
        </div>

        {/* Skip note footer */}
        <div className="mt-6 pt-4 border-t border-purple-500/20 flex items-center justify-between text-[11px] font-['JetBrains_Mono',monospace] text-purple-400/70">
          <span>Smooth scroll navigation enabled</span>
          <button
            onClick={handleEnter}
            className="hover:text-purple-200 underline transition-colors"
          >
            Skip Intro →
          </button>
        </div>

      </div>
    </div>
  );
};
