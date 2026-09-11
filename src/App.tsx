import React, { useState, useEffect } from 'react';
import { ParticleCanvas } from './components/ParticleCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ExternalResume } from './components/ExternalResume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { RecruiterModal } from './components/RecruiterModal';
import { ProjectModal } from './components/ProjectModal';
import { VoiceTourModal } from './components/VoiceTourModal';
import { AiAssistantDrawer } from './components/AiAssistantDrawer';
import { EntranceScreen } from './components/EntranceScreen';
import { ScrollAlignmentHUD } from './components/ScrollAlignmentHUD';
import { ProjectItem } from './types';
import { soundFx } from './utils/audio';
import { Bot, Volume2, ArrowUp } from 'lucide-react';

export default function App() {
  const [isEntranceOpen, setIsEntranceOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [recruiterModalOpen, setRecruiterModalOpen] = useState(false);
  const [voiceModalOpen, setVoiceModalOpen] = useState(false);
  const [aiAssistantOpen, setAiAssistantOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isVoiceSpeaking, setIsVoiceSpeaking] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Track active section via intersection / scroll and trigger on-scroll reveal animations
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 450);

      const sections = ['home', 'about', 'skills', 'projects', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    // IntersectionObserver for next-next section dynamic scroll entry animations
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -12% 0px',
      threshold: 0.08,
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-reveal-visible');
        }
      });
    }, observerOptions);

    const targetSections = document.querySelectorAll('section');
    targetSections.forEach((sec) => {
      sec.classList.add('scroll-reveal-init');
      // If home is already at viewport top on load, reveal immediately
      if (sec.id === 'home' || sec.getBoundingClientRect().top < window.innerHeight) {
        sec.classList.add('scroll-reveal-visible');
      }
      revealObserver.observe(sec);
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      targetSections.forEach((sec) => revealObserver.unobserve(sec));
    };
  }, []);

  const handleVoiceGreeting = () => {
    soundFx.playSuccess();
    setIsVoiceSpeaking(true);
    soundFx.speak(
      'Hello and welcome! I am Dhanush R, a Java Full Stack Developer specializing in Core Java 21, Spring Boot, React, and SQL database systems. Please explore my projects and connect with me!',
      () => {
        setIsVoiceSpeaking(false);
      }
    );
  };

  const handleVoiceNarrateAbout = () => {
    soundFx.playSuccess();
    setIsVoiceSpeaking(true);
    soundFx.speak(
      'Dhanush R is a Computer Science and Engineering graduate from Asian College of Engineering and Technology with an 8.1 CGPA. He completed a 2-month sales and marketing internship at Prime Vector Private Limited and is currently doing an internship at Login360, actively learning and building full-stack skills in Java 21, Spring Boot, MySQL, and React.',
      () => {
        setIsVoiceSpeaking(false);
      }
    );
  };

  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#06050c] text-white selection:bg-purple-600 selection:text-white overflow-x-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Interactive Background Particle Constellations */}
      <ParticleCanvas />

      {/* Ambient Violet Neon Radial Illumination Orbs */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Main Navigation */}
      <Navbar
        activeSection={activeSection}
        onOpenRecruiterModal={() => setRecruiterModalOpen(true)}
        onOpenVoiceModal={() => setVoiceModalOpen(true)}
        onOpenEntrance={() => setIsEntranceOpen(true)}
        isVoiceSpeaking={isVoiceSpeaking}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero
          onOpenRecruiterModal={() => setRecruiterModalOpen(true)}
          onVoiceGreeting={handleVoiceGreeting}
        />

        <About onVoiceNarrateAbout={handleVoiceNarrateAbout} />

        <Skills />

        <Projects onSelectProject={(p) => setSelectedProject(p)} />

        <ExternalResume />

        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons Dock */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        
        {/* Floating Voice Narrator Button */}
        <button
          onClick={() => {
            soundFx.playClick();
            setVoiceModalOpen(true);
          }}
          className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-[0_8px_25px_rgba(0,0,0,0.5)] transition-all duration-200 hover:scale-110 active:scale-95 ${
            isVoiceSpeaking
              ? 'bg-purple-600 border-purple-300 text-white shadow-[0_0_25px_rgba(168,85,247,0.7)] animate-pulse'
              : 'bg-purple-950/80 border-purple-500/40 text-purple-300 hover:text-white hover:border-purple-400 backdrop-blur-md'
          }`}
          title="Interactive Voice Narrator"
        >
          <Volume2 className={`w-5 h-5 ${isVoiceSpeaking ? 'animate-spin' : ''}`} />
        </button>

        {/* Floating AI Assistant Chat Button */}
        <button
          onClick={() => {
            soundFx.playClick();
            setAiAssistantOpen(true);
          }}
          className="relative w-14 h-14 rounded-2xl bg-gradient-to-tr from-violet-600 via-purple-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white shadow-[0_8px_30px_rgba(139,92,246,0.5)] flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 group"
          title="Chat with Dhanush AI Assistant"
        >
          <Bot className="w-6 h-6 group-hover:rotate-6 transition-transform" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-[#06050c] rounded-full animate-pulse shadow-[0_0_8px_#34d399]" />
        </button>

        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl bg-purple-950/70 border border-purple-500/30 text-purple-300 hover:text-white hover:border-purple-400 flex items-center justify-center transition-all duration-200 hover:-translate-y-1 backdrop-blur-md shadow-md"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

      </div>

      {/* Modals & Drawers */}
      <RecruiterModal
        isOpen={recruiterModalOpen}
        onClose={() => setRecruiterModalOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <VoiceTourModal
        isOpen={voiceModalOpen}
        onClose={() => setVoiceModalOpen(false)}
        isSpeaking={isVoiceSpeaking}
        setIsSpeaking={setIsVoiceSpeaking}
      />

      <AiAssistantDrawer
        isOpen={aiAssistantOpen}
        onClose={() => setAiAssistantOpen(false)}
      />

      {/* Floating Real-time Scroll & Section Alignment HUD */}
      <ScrollAlignmentHUD activeSection={activeSection} />

      {/* Interactive AI Doll & Engineer Name Entrance Gateway */}
      <EntranceScreen
        isOpen={isEntranceOpen}
        onEnter={() => setIsEntranceOpen(false)}
      />

    </div>
  );
}
