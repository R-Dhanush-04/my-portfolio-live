import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  Radio, 
  Volume2, 
  VolumeX, 
  MessageSquareCode
} from 'lucide-react';
import { soundFx } from '../utils/audio';
import { ChatMessage } from '../types';

interface AiAssistantDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AiAssistantDrawer: React.FC<AiAssistantDrawerProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'bot',
      text: 'Hello! I am Dhanush\'s AI Career Assistant. Feel free to ask about his Java background, Spring Boot projects, technical skills, or job availability!',
      timestamp: 'Just now',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const quickTopics = [
    'What are Dhanush\'s core skills?',
    'Tell me about his Movie Booking project',
    'Is Dhanush available for immediate joining?',
    'What is his educational background?',
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const getBotResponse = (query: string): string => {
    const q = query.toLowerCase();
    if (q.includes('skill') || q.includes('stack') || q.includes('tech')) {
      return "Dhanush's core technical stack includes:\n• Core Java 21 (OOP, Collections, Multithreading, Sockets)\n• Spring Boot (REST APIs, MVC, Dependency Injection, JPA)\n• SQL & Relational Databases (MySQL, SQLite, 3NF Normalization)\n• React.js & JavaScript (ES6+, Hooks, Responsive UI)\n• Tools: Git, Maven, Postman, Tailwind CSS.";
    }
    if (q.includes('movie') || q.includes('ticket') || q.includes('booking')) {
      return "The Movie Ticket Booking System is a full-stack cinema ticketing portal built with Java 21, Spring Boot REST controllers, and MySQL. It features a real-time seat availability matrix that prevents double-booking race conditions, dynamic showtimes, and automated PDF invoice generation.";
    }
    if (q.includes('firewall') || q.includes('security') || q.includes('threat')) {
      return "The Firewall Threat Detection System is a multi-threaded cybersecurity engine engineered in Core Java 21. It analyzes network socket streams in real time, checks packet headers against security signatures, flags brute-force or DDoS attacks, and writes audit trails to a SQL database.";
    }
    if (q.includes('redstore') || q.includes('commerce') || q.includes('react')) {
      return "RedStore is a responsive commercial e-commerce storefront created in React and JavaScript. It features an interactive shopping cart engine with tax and coupon logic, multi-category product filtering, and fluid responsive design for all screen sizes.";
    }
    if (q.includes('available') || q.includes('join') || q.includes('hire') || q.includes('location')) {
      return "Dhanush R is available for Immediate Joining in full-time Software Engineer, Java Developer, or Full Stack roles. He is based in Chennai, India, and open to on-site, hybrid, remote, and relocation opportunities.";
    }
    if (q.includes('internship') || q.includes('experience') || q.includes('prime vector') || q.includes('login360') || q.includes('career')) {
      return "Dhanush is currently doing an internship at Login360, actively learning and building practical skills in Java Full Stack development (Core Java 21, Spring Boot, MySQL, React). He also completed a 2-month internship in sales and marketing at Prime Vector Private Limited.";
    }
    if (q.includes('education') || q.includes('college') || q.includes('degree') || q.includes('cgpa')) {
      return "Dhanush completed his Bachelor of Engineering (B.E.) in Computer Science and Engineering from Asian College of Engineering and Technology (2022–2026) with an impressive 8.1 CGPA. He is currently an intern at Login360, building enterprise full-stack skills.";
    }
    if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('reach')) {
      return "You can reach Dhanush directly at dhanutech04@gmail.com, call/WhatsApp him at +91 9361902056, or find him on LinkedIn at linkedin.com/in/dhanush-r-44394229b/.";
    }

    return "Dhanush R is a passionate Java Full Stack Developer specializing in Core Java 21, Spring Boot, React, and SQL database architecture. You can connect directly or review his featured projects in the portfolio!";
  };

  const handleSendMessage = (textToSend: string) => {
    if (!textToSend.trim()) return;
    soundFx.playClick();

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: textToSend.trim(),
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const response = getBotResponse(textToSend);
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: response,
        timestamp: 'Just now',
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
      soundFx.playSuccess();
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={() => {
          soundFx.playClick();
          onClose();
        }}
      />

      {/* Drawer Body */}
      <div className="relative w-full max-w-md h-full bg-[#0d091e] border-l border-purple-500/30 shadow-[0_0_50px_rgba(0,0,0,0.8)] z-10 flex flex-col justify-between p-5 animate-in slide-in-from-right duration-300">
        
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-3.5 border-b border-purple-500/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-900/60 border border-purple-400/50 text-purple-300 flex items-center justify-center shadow-md">
              <Bot className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h3 className="font-['Outfit',sans-serif] font-bold text-base text-white">
                Dhanush AI Assistant
              </h3>
              <div className="flex items-center gap-1.5 text-[11px] font-['JetBrains_Mono',monospace] text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Online & Ready</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="p-2 rounded-xl bg-purple-950/50 border border-purple-500/30 text-purple-300 hover:text-white hover:border-purple-400 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Message Log */}
        <div className="flex-1 overflow-y-auto py-4 space-y-3.5 pr-1">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex items-start gap-2.5 ${m.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs flex-shrink-0 ${
                m.sender === 'user'
                  ? 'bg-purple-600 text-white'
                  : 'bg-purple-950 border border-purple-500/40 text-purple-300'
              }`}>
                {m.sender === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
              </div>

              <div className={`p-3 rounded-2xl max-w-[82%] text-xs leading-relaxed font-['Plus_Jakarta_Sans',sans-serif] whitespace-pre-line ${
                m.sender === 'user'
                  ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-tr-none shadow-md'
                  : 'bg-purple-950/50 border border-purple-500/20 text-purple-100 rounded-tl-none'
              }`}>
                {m.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 p-3 rounded-2xl bg-purple-950/40 border border-purple-500/20 w-fit text-xs text-purple-300 font-['JetBrains_Mono',monospace]">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce" />
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce [animation-delay:0.2s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce [animation-delay:0.4s]" />
              <span className="ml-1">Synthesizing reply...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Pills */}
        <div className="pt-2 border-t border-purple-500/20">
          <div className="text-[10px] font-['JetBrains_Mono',monospace] text-purple-400 font-bold uppercase tracking-wider mb-2">
            SUGGESTED TOPICS:
          </div>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {quickTopics.map((topic, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(topic)}
                className="px-2.5 py-1 rounded-lg text-[10px] font-['JetBrains_Mono',monospace] bg-purple-950/40 hover:bg-purple-900 border border-purple-500/20 text-purple-300 hover:text-white transition-colors text-left"
              >
                {topic}
              </button>
            ))}
          </div>

          {/* Chat Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputValue);
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask anything about Dhanush..."
              className="flex-1 px-4 py-2.5 rounded-xl bg-purple-950/40 border border-purple-500/30 focus:border-purple-400 text-xs text-white placeholder-purple-300/30 focus:outline-none focus:ring-1 focus:ring-purple-400 font-['Plus_Jakarta_Sans',sans-serif]"
            />
            <button
              type="submit"
              className="p-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white hover:brightness-110 transition-all flex items-center justify-center flex-shrink-0"
              title="Send question"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
