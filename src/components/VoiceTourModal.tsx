import React, { useState, useEffect } from 'react';
import { 
  X, 
  Volume2, 
  VolumeX, 
  Play, 
  Square, 
  Sparkles, 
  Mic, 
  Radio, 
  Code2, 
  Layers, 
  User
} from 'lucide-react';
import { soundFx } from '../utils/audio';

interface VoiceTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  isSpeaking: boolean;
  setIsSpeaking: (speaking: boolean) => void;
}

export const VoiceTourModal: React.FC<VoiceTourModalProps> = ({
  isOpen,
  onClose,
  isSpeaking,
  setIsSpeaking,
}) => {
  const [selectedTopic, setSelectedTopic] = useState<string>('intro');

  const tourTopics = [
    {
      id: 'intro',
      title: 'Welcome & Portfolio Introduction',
      icon: Sparkles,
      script:
        'Hello and welcome! I am Dhanush R, a Java Full Stack Developer and Computer Science Engineering graduate with an 8.1 CGPA. I specialize in building enterprise backend microservices with Core Java 21 and Spring Boot, combined with fluid modern interfaces in React.js and reliable SQL databases.',
    },
    {
      id: 'skills',
      title: 'Technical Skills & Architecture Stack',
      icon: Code2,
      script:
        'My primary technical competencies center on Core Java 21 with deep understanding of Object Oriented Programming, multithreading, and socket programming. In addition, I build RESTful APIs using Spring Boot and Spring Data JPA, model normalized relational databases in MySQL and SQLite, and develop interactive user interfaces with React and modern JavaScript.',
    },
    {
      id: 'projects',
      title: 'Flagship Projects Overview',
      icon: Layers,
      script:
        'I have developed three flagship projects: First, a high-concurrency Movie Ticket Booking System built in Java and Spring Boot with dynamic seat matrix reservation. Second, RedStore, a responsive commercial e-commerce storefront crafted in React. And third, a multi-threaded Firewall Threat Detection engine in Core Java that analyzes socket traffic and logs security audits to SQL.',
    },
    {
      id: 'hiring',
      title: 'Recruiter & Hiring Fast-Track',
      icon: User,
      script:
        'I am based in Chennai, India, and available for immediate joining in full-time Software Engineer or Java Developer roles. I am open to on-site, hybrid, remote, and relocation opportunities across India and globally. Let us connect to discuss your engineering goals!',
    },
  ];

  const handlePlayTopic = (script: string, id: string) => {
    soundFx.playClick();
    setSelectedTopic(id);
    setIsSpeaking(true);
    soundFx.speak(script, () => {
      setIsSpeaking(false);
    });
  };

  const handleStop = () => {
    soundFx.playClick();
    soundFx.stopSpeaking();
    setIsSpeaking(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={() => {
          soundFx.playClick();
          handleStop();
          onClose();
        }}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-xl rounded-3xl bg-gradient-to-b from-[#180e38] via-[#100a26] to-[#080512] border border-purple-500/40 p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(168,85,247,0.25)] z-10 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-purple-500/20 mb-6">
          <div className="flex items-center gap-3">
            <div className={`w-11 h-11 rounded-2xl flex items-center justify-center border ${
              isSpeaking
                ? 'bg-purple-600/30 border-purple-400 text-purple-200 shadow-[0_0_18px_rgba(168,85,247,0.5)] animate-pulse'
                : 'bg-purple-950/60 border-purple-500/30 text-purple-400'
            }`}>
              <Radio className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-['Outfit',sans-serif] font-bold text-xl text-white">
                Interactive Voice Narrator
              </h3>
              <p className="text-xs font-['JetBrains_Mono',monospace] text-purple-300">
                Speech Synthesis Guided Tour
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              soundFx.playClick();
              handleStop();
              onClose();
            }}
            className="p-2 rounded-xl bg-purple-950/50 border border-purple-500/30 text-purple-300 hover:text-white hover:border-purple-400 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dynamic Voice Visualizer Wave */}
        <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/25 flex flex-col items-center justify-center gap-3 mb-6">
          <div className="flex items-center justify-center gap-1.5 h-10">
            {[14, 28, 42, 22, 36, 18, 32, 45, 20, 38, 16].map((h, i) => (
              <span
                key={i}
                className={`w-1 rounded-full bg-gradient-to-t from-violet-500 to-fuchsia-400 transition-all duration-200 ${
                  isSpeaking ? 'animate-pulse' : 'opacity-30'
                }`}
                style={{
                  height: isSpeaking ? `${h}px` : '6px',
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
          <span className="text-xs font-['JetBrains_Mono',monospace] text-purple-300 font-medium">
            {isSpeaking ? '● Voice Audio Playing Now...' : 'Select a topic below to begin voice narration'}
          </span>
        </div>

        {/* Topics List */}
        <div className="space-y-3 mb-6 text-left">
          {tourTopics.map((topic) => {
            const Icon = topic.icon;
            const isCurrentPlaying = isSpeaking && selectedTopic === topic.id;
            return (
              <div
                key={topic.id}
                className={`p-4 rounded-2xl border transition-all ${
                  isCurrentPlaying
                    ? 'bg-purple-950/60 border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                    : 'bg-purple-950/20 border-purple-500/20 hover:border-purple-400/40'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 text-purple-400" />
                    <span className="font-['Outfit',sans-serif] font-bold text-sm text-white">
                      {topic.title}
                    </span>
                  </div>

                  {isCurrentPlaying ? (
                    <button
                      onClick={handleStop}
                      className="px-3 py-1.5 rounded-lg text-xs font-['JetBrains_Mono',monospace] font-bold bg-rose-600 hover:bg-rose-500 text-white flex items-center gap-1 shadow-sm"
                    >
                      <Square className="w-3 h-3 fill-current" />
                      <span>Stop</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => handlePlayTopic(topic.script, topic.id)}
                      className="px-3 py-1.5 rounded-lg text-xs font-['JetBrains_Mono',monospace] font-bold bg-purple-600 hover:bg-purple-500 text-white flex items-center gap-1 shadow-sm transition-transform active:scale-95"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>Play</span>
                    </button>
                  )}
                </div>

                <p className="mt-2 text-xs text-purple-200/60 font-['JetBrains_Mono',monospace] line-clamp-2">
                  {topic.script}
                </p>
              </div>
            );
          })}
        </div>

        {/* Global Stop Button */}
        <div className="pt-3 border-t border-purple-500/20 flex justify-end">
          <button
            onClick={() => {
              handleStop();
              onClose();
            }}
            className="px-5 py-2.5 rounded-xl font-semibold text-xs font-['Outfit',sans-serif] bg-purple-950/60 hover:bg-purple-900 border border-purple-500/30 text-purple-200 hover:text-white transition-colors"
          >
            Close Narrator
          </button>
        </div>

      </div>
    </div>
  );
};
