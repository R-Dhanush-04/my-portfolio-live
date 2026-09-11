import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Send, 
  Linkedin, 
  Github, 
  Mail, 
  Phone, 
  Sparkles, 
  RotateCw, 
  Volume2, 
  Code2, 
  CheckCircle2, 
  Cpu, 
  FolderGit2, 
  GraduationCap, 
  Zap,
  MessageSquareShare
} from 'lucide-react';
import { soundFx } from '../utils/audio';

interface HeroProps {
  onOpenRecruiterModal: () => void;
  onVoiceGreeting: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRecruiterModal, onVoiceGreeting }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [waveReceived, setWaveReceived] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const welcomeVoicePlayed = useRef(false);

  const roles = [
    'Java Full Stack Developer',
    'Spring Boot & Microservices',
    'React.js & Frontend Architecture',
    'SQL Relational Architectures',
    'Cybersecurity & Network Engines',
  ];

  // Dynamic Typewriter Effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (charIndex < currentRole.length) {
        timeout = setTimeout(() => {
          setTypewriterText(currentRole.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        }, 75);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setTypewriterText(currentRole.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const handleCardFlip = () => {
    soundFx.playFlip();
    const nextState = !isFlipped;
    setIsFlipped(nextState);

    if (nextState && !welcomeVoicePlayed.current) {
      welcomeVoicePlayed.current = true;
      soundFx.speak('Hi there! Welcome to Dhanush\'s portfolio. Enjoy exploring my projects and skills!');
    }
  };

  const handleSayHiBack = (e: React.MouseEvent) => {
    e.stopPropagation();
    soundFx.playSuccess();
    setWaveReceived(true);
    soundFx.speak('Thank you for connecting! Let\'s build something extraordinary together.');
    setTimeout(() => setWaveReceived(false), 3500);
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-center overflow-hidden">
      
      {/* Subtle Violet Ambient Aurora Glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse duration-1000" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-fuchsia-600/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-['JetBrains_Mono',monospace] text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
              <span className="font-semibold text-purple-200">Available for Immediate Joining & Full-Time Roles</span>
            </div>

            {/* Eyebrow Label */}
            <div className="flex items-center gap-2.5 text-xs font-['JetBrains_Mono',monospace] tracking-wider text-purple-400 font-semibold uppercase">
              <span className="w-8 h-[2px] bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full shadow-[0_0_8px_#c084fc]" />
              <span>Full Stack Software Engineer</span>
            </div>

            {/* Primary Display Name */}
            <h1 className="font-['Syne',sans-serif] text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
              Dhanush{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-300 drop-shadow-[0_0_25px_rgba(192,132,252,0.4)]">
                R
              </span>
            </h1>

            {/* Typewriter Subtitle */}
            <div className="h-10 flex items-center text-xl sm:text-2xl font-['Outfit',sans-serif] font-semibold text-purple-200/90 gap-2">
              <span className="text-purple-400/80">I engineer with</span>
              <span className="text-white border-b-2 border-purple-500/80 pb-0.5 font-bold">
                {typewriterText}
              </span>
              <span className="inline-block w-0.5 h-6 bg-purple-400 animate-pulse" />
            </div>

            {/* Professional Summary */}
            <p className="text-base sm:text-lg text-purple-200/70 font-normal leading-relaxed max-w-2xl">
              Computer Science & Engineering graduate (2022–2026, <strong className="text-white font-semibold">8.1 CGPA</strong>) specialized in 
              <span className="text-purple-300 font-medium"> Core Java 21, Spring Boot microservices, React.js, and SQL database architecture</span>. 
              Dedicated to designing scalable enterprise backends and fluid, modern digital experiences.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  soundFx.playClick();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white shadow-[0_4px_25px_rgba(139,92,246,0.35)] hover:shadow-[0_8px_30px_rgba(168,85,247,0.5)] transition-all duration-200 flex items-center gap-2 active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  soundFx.playClick();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3.5 rounded-xl font-semibold text-sm bg-purple-950/40 hover:bg-purple-900/40 border border-purple-500/30 hover:border-purple-400 text-purple-200 hover:text-white transition-all duration-200 flex items-center gap-2 backdrop-blur-sm active:scale-95"
              >
                <span>Let's Connect</span>
                <Send className="w-4 h-4 text-purple-400" />
              </a>

              {/* Voice Tour Trigger */}
              <button
                onClick={() => {
                  soundFx.playClick();
                  onVoiceGreeting();
                }}
                className="px-4 py-3.5 rounded-xl font-semibold text-sm bg-purple-950/30 hover:bg-purple-900/30 border border-purple-500/20 hover:border-purple-400/50 text-purple-300 hover:text-white transition-all duration-200 flex items-center gap-2 active:scale-95"
                title="Hear Dhanush's voice greeting"
              >
                <Volume2 className="w-4 h-4 text-fuchsia-400" />
                <span className="hidden sm:inline">Voice Intro</span>
              </button>
            </div>

            {/* Social Channels Dock */}
            <div className="pt-3 flex items-center gap-3">
              <span className="text-xs font-['JetBrains_Mono',monospace] text-purple-400/70 mr-2">CHANNELS:</span>
              
              <a 
                href="https://www.linkedin.com/in/dhanush-r-44394229b/" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="w-10 h-10 rounded-xl bg-purple-950/40 hover:bg-purple-600/30 border border-purple-500/20 hover:border-purple-400 flex items-center justify-center text-purple-300 hover:text-white transition-all duration-200 hover:-translate-y-1 shadow-sm"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a 
                href="https://github.com/dhanutech04" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="w-10 h-10 rounded-xl bg-purple-950/40 hover:bg-purple-600/30 border border-purple-500/20 hover:border-purple-400 flex items-center justify-center text-purple-300 hover:text-white transition-all duration-200 hover:-translate-y-1 shadow-sm"
                title="GitHub Repositories"
              >
                <Github className="w-4 h-4" />
              </a>

              <a 
                href="mailto:dhanutech04@gmail.com" 
                onClick={() => soundFx.playClick()}
                className="w-10 h-10 rounded-xl bg-purple-950/40 hover:bg-purple-600/30 border border-purple-500/20 hover:border-purple-400 flex items-center justify-center text-purple-300 hover:text-white transition-all duration-200 hover:-translate-y-1 shadow-sm"
                title="Send Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a 
                href="https://wa.me/919361902056" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="w-10 h-10 rounded-xl bg-purple-950/40 hover:bg-emerald-600/30 border border-purple-500/20 hover:border-emerald-400 flex items-center justify-center text-emerald-400 hover:text-white transition-all duration-200 hover:-translate-y-1 shadow-sm"
                title="WhatsApp Direct"
              >
                <MessageSquareShare className="w-4 h-4" />
              </a>

              <a 
                href="tel:+919361902056" 
                onClick={() => soundFx.playClick()}
                className="w-10 h-10 rounded-xl bg-purple-950/40 hover:bg-purple-600/30 border border-purple-500/20 hover:border-purple-400 flex items-center justify-center text-purple-300 hover:text-white transition-all duration-200 hover:-translate-y-1 shadow-sm"
                title="Direct Phone Call"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Hero Column: 3D Interactive Profile Flip Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[390px] [perspective:1400px]">
              
              {/* Flip Card Container */}
              <div 
                onClick={handleCardFlip}
                className={`relative w-full min-h-[520px] sm:min-h-[540px] cursor-pointer transition-transform duration-[1100ms] ease-in-out [transform-style:preserve-3d] ${
                  isFlipped ? '[transform:rotateY(180deg)]' : ''
                }`}
                title="Click to flip between Developer Profile and Welcome Avatar!"
              >
                
                {/* FRONT FACE: Dhanush R Developer Portrait */}
                <div className="absolute inset-0 [backface-visibility:hidden] rounded-3xl bg-gradient-to-b from-[#130c2c] via-[#0d091e] to-[#070510] border border-purple-500/30 p-6 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_30px_rgba(168,85,247,0.15)] group hover:border-purple-400/60 transition-colors">
                  
                  {/* Card Header Tags */}
                  <div className="flex items-center justify-between w-full">
                    <span className="px-3 py-1 rounded-full text-[11px] font-['JetBrains_Mono',monospace] font-semibold bg-purple-900/50 border border-purple-400/30 text-purple-200 flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-purple-400" />
                      Java Full Stack
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-['JetBrains_Mono',monospace] font-semibold bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Active
                    </span>
                  </div>

                  {/* Profile Portrait Frame */}
                  <div className="my-auto py-2 flex flex-col items-center text-center">
                    <div className="relative w-52 h-52 sm:w-56 sm:h-56 lg:w-60 lg:h-60 rounded-2xl p-1 bg-gradient-to-tr from-violet-600 via-purple-400 to-fuchsia-500 shadow-[0_0_25px_rgba(168,85,247,0.4)] group-hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] transition-all duration-300">
                      <img 
                        src="/mine2.jpeg" 
                        alt="Dhanush R" 
                        className="w-full h-full object-cover rounded-xl"
                      />
                      <div className="absolute -bottom-3 -right-2 px-3 py-1 rounded-lg bg-[#090714] border border-purple-400 text-[11px] font-['JetBrains_Mono',monospace] text-purple-300 font-bold shadow-lg flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-fuchsia-400" />
                        <span>Core Java 21</span>
                      </div>
                    </div>

                    <h3 className="mt-5 font-['Outfit',sans-serif] font-bold text-2xl text-white">
                      Dhanush <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">R</span>
                    </h3>
                    <p className="text-xs font-['JetBrains_Mono',monospace] text-purple-300/80 mt-1">
                      Chennai, India • B.E. CSE 2022–2026
                    </p>
                  </div>

                  {/* Card Bottom Hint */}
                  <div className="pt-3 border-t border-purple-500/20 flex items-center justify-between text-xs text-purple-300/70 font-['JetBrains_Mono',monospace]">
                    <span className="flex items-center gap-1 text-purple-400">
                      <RotateCw className="w-3.5 h-3.5" />
                      Click card to flip
                    </span>
                    <span className="text-[11px] text-purple-400/80 font-medium">Say Hi to Welcome Boy 👋</span>
                  </div>

                </div>

                {/* BACK FACE: The Iconic welcome-boy.png Avatar */}
                <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-3xl bg-gradient-to-b from-[#170e36] via-[#100a26] to-[#080512] border border-purple-400/50 p-6 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(192,132,252,0.3)]">
                  
                  {/* Header Badge */}
                  <div className="flex items-center justify-between w-full">
                    <span className="px-3 py-1 rounded-full text-xs font-['JetBrains_Mono',monospace] font-bold bg-purple-500/20 border border-purple-400/50 text-purple-200 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />
                      WELCOME VISITOR
                    </span>
                    <span className="text-[11px] font-['JetBrains_Mono',monospace] text-purple-300/70">
                      Click to return ↺
                    </span>
                  </div>

                  {/* Character Avatar Container */}
                  <div className="relative my-auto flex flex-col items-center justify-center">
                    
                    {/* Glowing Halo behind character */}
                    <div className="absolute w-56 h-56 rounded-full bg-gradient-to-r from-purple-500/25 via-fuchsia-500/20 to-indigo-500/20 blur-2xl pointer-events-none" />

                    {/* Speech Bubble */}
                    <div className="relative mb-2 px-4 py-2 rounded-2xl bg-purple-950/90 border border-purple-400/60 shadow-[0_8px_20px_rgba(0,0,0,0.4)] text-center animate-bounce">
                      <strong className="block text-sm font-['Outfit',sans-serif] font-bold text-white">
                        Hi there! 👋
                      </strong>
                      <span className="text-[11px] font-['JetBrains_Mono',monospace] text-purple-300">
                        Welcome to Dhanush's Portfolio!
                      </span>
                    </div>

                    {/* The Full Avatar Image */}
                    <div className="relative w-48 h-64 flex items-center justify-center">
                      <img 
                        src="/welcome-boy.png" 
                        alt="Welcome Boy Avatar" 
                        className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] animate-pulse"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/images/welcome-boy.png';
                        }}
                      />
                    </div>

                  </div>

                  {/* Interactive Wave Back Button */}
                  <div className="pt-3 border-t border-purple-500/20">
                    <button
                      onClick={handleSayHiBack}
                      className="w-full py-2.5 rounded-xl font-semibold text-xs font-['Outfit',sans-serif] bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white shadow-[0_4px_15px_rgba(168,85,247,0.4)] flex items-center justify-center gap-2 transition-transform active:scale-95"
                    >
                      {waveReceived ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <span>Wave Received! 🎉</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4" />
                          <span>Say Hi Back! (Voice Trigger)</span>
                        </>
                      )}
                    </button>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Quick Metrics Ribbon */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          
          <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-500/20 backdrop-blur-md text-center hover:border-purple-400/50 hover:-translate-y-1 transition-all duration-200">
            <div className="w-8 h-8 mx-auto mb-2 rounded-xl bg-purple-900/50 text-purple-400 flex items-center justify-center">
              <Cpu className="w-4 h-4" />
            </div>
            <div className="font-['Syne',sans-serif] font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">
              6+
            </div>
            <div className="text-xs text-purple-300/70 font-['JetBrains_Mono',monospace] mt-0.5">
              Core Tech Stack
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-500/20 backdrop-blur-md text-center hover:border-purple-400/50 hover:-translate-y-1 transition-all duration-200">
            <div className="w-8 h-8 mx-auto mb-2 rounded-xl bg-purple-900/50 text-purple-400 flex items-center justify-center">
              <FolderGit2 className="w-4 h-4" />
            </div>
            <div className="font-['Syne',sans-serif] font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">
              3
            </div>
            <div className="text-xs text-purple-300/70 font-['JetBrains_Mono',monospace] mt-0.5">
              Flagship Projects
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-500/20 backdrop-blur-md text-center hover:border-purple-400/50 hover:-translate-y-1 transition-all duration-200">
            <div className="w-8 h-8 mx-auto mb-2 rounded-xl bg-purple-900/50 text-purple-400 flex items-center justify-center">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div className="font-['Syne',sans-serif] font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">
              8.1
            </div>
            <div className="text-xs text-purple-300/70 font-['JetBrains_Mono',monospace] mt-0.5">
              B.E. CSE CGPA
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-500/20 backdrop-blur-md text-center hover:border-purple-400/50 hover:-translate-y-1 transition-all duration-200">
            <div className="w-8 h-8 mx-auto mb-2 rounded-xl bg-purple-900/50 text-purple-400 flex items-center justify-center">
              <Zap className="w-4 h-4" />
            </div>
            <div className="font-['Syne',sans-serif] font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">
              100%
            </div>
            <div className="text-xs text-purple-300/70 font-['JetBrains_Mono',monospace] mt-0.5">
              Problem-Solving Drive
            </div>
          </div>

        </div>

        {/* Infinite Marquee Stream */}
        <div className="mt-12 overflow-hidden py-3 border-y border-purple-500/20 bg-purple-950/20 relative">
          <div className="flex gap-4 w-max animate-[marquee_30s_linear_infinite] whitespace-nowrap">
            {[
              'Core Java 21 (90%)',
              'Spring Boot (82%)',
              'React.js (78%)',
              'SQL & Relational Databases (80%)',
              'Firewall Threat Detection',
              'Movie Ticket Booking System',
              'RedStore E-Commerce',
              'RESTful Microservices',
              'Git & GitHub Version Control',
              'HTML5 • CSS3 • Tailwind',
              // duplicate for continuous loop
              'Core Java 21 (90%)',
              'Spring Boot (82%)',
              'React.js (78%)',
              'SQL & Relational Databases (80%)',
              'Firewall Threat Detection',
              'Movie Ticket Booking System',
              'RedStore E-Commerce',
              'RESTful Microservices',
            ].map((tag, idx) => (
              <span
                key={idx}
                className="px-4 py-1.5 rounded-full text-xs font-['JetBrains_Mono',monospace] font-semibold bg-purple-950/50 border border-purple-500/30 text-purple-200 shadow-sm inline-flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};
