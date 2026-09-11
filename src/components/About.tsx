import React, { useState } from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  BookOpen, 
  MapPin, 
  Mail, 
  Phone, 
  User, 
  Calendar, 
  Sparkles, 
  Award, 
  CheckCircle2, 
  Clock, 
  Volume2
} from 'lucide-react';
import { soundFx } from '../utils/audio';

interface AboutProps {
  onVoiceNarrateAbout: () => void;
}

export const About: React.FC<AboutProps> = ({ onVoiceNarrateAbout }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'education' | 'employment' | 'learning'>('all');

  const timelineData = [
    {
      type: 'education',
      period: '2022 – 2026',
      title: 'Bachelor of Engineering (B.E.)',
      subtitle: 'Computer Science and Engineering',
      institution: 'Asian College of Engineering and Technology',
      score: '8.1 CGPA / 10.0',
      description:
        'Built a solid foundation in software engineering, Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Database Management Systems (DBMS), and distributed web architecture.',
      icon: GraduationCap,
      badge: 'Academic Excellence',
    },
    {
      type: 'learning',
      period: 'Present (Active Internship)',
      title: 'Java Full Stack Development Internship',
      subtitle: 'Learning & Building Core Software Skills',
      institution: 'Login360, Chennai',
      score: 'Active Internship',
      description:
        'Undergoing an active internship to learn and build practical engineering skills across Core Java 21, Spring Boot microservices, RESTful API design, Hibernate/JPA, MySQL schema architecture, and React.js.',
      icon: BookOpen,
      badge: 'Active Internship',
    },
    {
      type: 'employment',
      period: '2 Months Internship',
      title: 'Sales & Marketing Internship',
      subtitle: 'Commercial Outreach & Client Engagement',
      institution: 'Prime Vector Private Limited',
      score: 'Completed (2 Months)',
      description:
        'Completed a 2-month internship trained in sales, commercial marketing outreach, business communication, client engagement strategies, and teamwork in a corporate setting.',
      icon: Briefcase,
      badge: 'Internship Experience',
    },
  ];

  const filteredTimeline = timelineData.filter((item) => {
    if (activeTab === 'all') return true;
    return item.type === activeTab;
  });

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-purple-500/10">
      
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-['JetBrains_Mono',monospace] font-semibold bg-purple-950/50 border border-purple-500/30 text-purple-300">
          <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />
          <span>GET TO KNOW</span>
        </div>
        <h2 className="font-['Syne',sans-serif] text-4xl sm:text-5xl font-extrabold text-white">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-300">Dhanush R</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full mx-auto shadow-[0_0_12px_#c084fc]" />
      </div>

      <div className="max-w-7xl mx-auto">
        
        {/* Main Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* Developer Visual & Highlights Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl bg-gradient-to-b from-purple-950/40 via-[#0d091e] to-[#080512] border border-purple-500/30 p-6 sm:p-8 shadow-[0_15px_35px_rgba(0,0,0,0.5)]">
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-purple-400/80 shadow-[0_0_20px_rgba(168,85,247,0.4)] flex-shrink-0">
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
                    Dhanush R
                  </h3>
                  <span className="text-xs font-['JetBrains_Mono',monospace] text-purple-300">
                    Java Full Stack Engineer
                  </span>
                  <div className="flex items-center gap-1.5 mt-1 text-[11px] text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Open for Employment</span>
                  </div>
                </div>
              </div>

              {/* Quick Details Matrix */}
              <div className="grid grid-cols-2 gap-3.5 pt-4 border-t border-purple-500/20 text-xs font-['JetBrains_Mono',monospace]">
                
                <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/20">
                  <div className="text-purple-400/70 text-[10px] uppercase font-bold tracking-wider mb-1 flex items-center gap-1">
                    <User className="w-3 h-3" />
                    ROLE
                  </div>
                  <div className="text-white font-semibold">Java Developer</div>
                </div>

                <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/20">
                  <div className="text-purple-400/70 text-[10px] uppercase font-bold tracking-wider mb-1 flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    ACADEMIC
                  </div>
                  <div className="text-white font-semibold">8.1 CGPA (CSE)</div>
                </div>

                <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/20">
                  <div className="text-purple-400/70 text-[10px] uppercase font-bold tracking-wider mb-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    LOCATION
                  </div>
                  <div className="text-white font-semibold">Chennai, India</div>
                </div>

                <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/20">
                  <div className="text-purple-400/70 text-[10px] uppercase font-bold tracking-wider mb-1 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    STATUS
                  </div>
                  <div className="text-emerald-400 font-semibold">Immediate Joiner</div>
                </div>

              </div>

              {/* Voice narration button */}
              <button
                onClick={() => {
                  soundFx.playClick();
                  onVoiceNarrateAbout();
                }}
                className="mt-6 w-full py-2.5 rounded-xl border border-purple-500/30 hover:border-purple-400/60 bg-purple-950/40 hover:bg-purple-900/40 text-purple-200 text-xs font-['JetBrains_Mono',monospace] font-semibold transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <Volume2 className="w-4 h-4 text-purple-400" />
                <span>Listen to About Audio Overview</span>
              </button>

            </div>
          </div>

          {/* Right Narrative Story */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-900/30 border border-purple-500/30 text-xs font-['JetBrains_Mono',monospace] text-purple-300">
              <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />
              <span>Full Stack Development • Clean Architecture</span>
            </div>

            <h3 className="font-['Outfit',sans-serif] text-3xl sm:text-4xl font-bold text-white leading-tight">
              Turning Complex Logic Into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-300">
                Smooth Digital Experiences.
              </span>
            </h3>

            <p className="text-purple-200/75 text-base sm:text-lg leading-relaxed font-normal">
              I am a driven Java Full Stack Developer with an engineering degree in Computer Science (8.1 CGPA) from Asian College of Engineering and Technology. My core technical grounding centers on building robust REST microservices in <strong className="text-white">Core Java 21 & Spring Boot</strong>, structured relational schemas in <strong className="text-white">MySQL & SQLite</strong>, and responsive interfaces in <strong className="text-white">React.js</strong>.
            </p>

            <p className="text-purple-200/75 text-base sm:text-lg leading-relaxed font-normal">
              My engineering philosophy focuses on writing clean, maintainable, and well-tested code that delivers real user value. Having completed a 2-month internship in sales and marketing at Prime Vector Private Limited, and currently interning at Login360 to learn and build enterprise full-stack skills, I pair technical precision with clear communication, team collaboration, and proactive problem-solving.
            </p>

            {/* Core Values / Competency Badges */}
            <div className="pt-2 flex flex-wrap gap-2.5">
              {[
                'OOP Architecture',
                'Spring MVC & REST APIs',
                'Concurrency & Multithreading',
                'React Component Lifecycle',
                'Database Normalization (3NF)',
                'Network Sockets & Security',
              ].map((pill, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-['JetBrains_Mono',monospace] font-medium bg-purple-950/40 border border-purple-500/30 text-purple-200"
                >
                  ✓ {pill}
                </span>
              ))}
            </div>

          </div>

        </div>

        {/* Career & Academic Timeline */}
        <div className="mt-12">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-purple-500/20 pb-4">
            <div>
              <h3 className="font-['Outfit',sans-serif] font-bold text-2xl text-white">
                Academic Journey & Experience
              </h3>
              <p className="text-xs font-['JetBrains_Mono',monospace] text-purple-300/70 mt-1">
                Chronological track of degrees, professional tenures, and technical training.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-purple-950/50 border border-purple-500/20">
              {(['all', 'education', 'learning', 'employment'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    soundFx.playClick();
                    setActiveTab(tab);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-['JetBrains_Mono',monospace] uppercase font-semibold transition-all ${
                    activeTab === tab
                      ? 'bg-purple-600 text-white shadow-[0_0_12px_rgba(168,85,247,0.5)]'
                      : 'text-purple-300/70 hover:text-white hover:bg-purple-900/30'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Timeline Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredTimeline.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl p-6 bg-gradient-to-b from-purple-950/30 to-[#0c081d] border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-purple-900/50 border border-purple-500/30 text-purple-300 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-['JetBrains_Mono',monospace] font-semibold bg-purple-900/40 border border-purple-500/30 text-purple-300">
                        {item.badge}
                      </span>
                    </div>

                    <div className="text-[11px] font-['JetBrains_Mono',monospace] text-purple-400 font-semibold mb-1 flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      <span>{item.period}</span>
                    </div>

                    <h4 className="font-['Outfit',sans-serif] font-bold text-lg text-white mb-1">
                      {item.title}
                    </h4>

                    <div className="text-sm font-medium text-purple-300 mb-2">
                      {item.subtitle}
                    </div>

                    <div className="text-xs text-purple-200/60 font-semibold mb-3">
                      {item.institution}
                    </div>

                    <p className="text-xs text-purple-200/70 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-purple-500/20 flex items-center justify-between text-xs font-['JetBrains_Mono',monospace]">
                    <span className="text-purple-400/70">Outcome:</span>
                    <span className="font-bold text-purple-200">{item.score}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>

    </section>
  );
};
