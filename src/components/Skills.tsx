import React, { useState } from 'react';
import { 
  Code2, 
  Database, 
  Layout, 
  Layers, 
  Server, 
  Sparkles, 
  CheckCircle, 
  BarChart3, 
  Info,
  Terminal,
  Cpu
} from 'lucide-react';
import { soundFx } from '../utils/audio';
import { SkillItem } from '../types';

export const Skills: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'backend' | 'frontend' | 'database'>('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills: SkillItem[] = [
    {
      name: 'Core Java 21',
      category: 'backend',
      proficiency: 90,
      iconName: 'java',
      level: 'Advanced / Mastered',
      description: 'Object-Oriented Design, Collections Framework, Multithreading, Exception Handling, File I/O, Sockets.',
    },
    {
      name: 'Spring Boot',
      category: 'backend',
      proficiency: 82,
      iconName: 'spring',
      level: 'Proficient / Production',
      description: 'REST Controllers, Spring MVC, Dependency Injection, JPA / Hibernate ORM, Microservice Architectures.',
    },
    {
      name: 'SQL & Relational Databases',
      category: 'database',
      proficiency: 80,
      iconName: 'database',
      level: 'Proficient',
      description: 'MySQL, SQLite, 3NF Schema Normalization, Complex Joins, Indexing, Transaction ACID properties.',
    },
    {
      name: 'React.js',
      category: 'frontend',
      proficiency: 78,
      iconName: 'react',
      level: 'Proficient',
      description: 'Functional Components, Custom Hooks (useState, useEffect), State Architecture, Event Binding.',
    },
    {
      name: 'JavaScript (ES6+)',
      category: 'frontend',
      proficiency: 85,
      iconName: 'js',
      level: 'Proficient',
      description: 'Async/Await, Promises, Closures, DOM Manipulation, Event Loop, Modern ESNext Standards.',
    },
    {
      name: 'HTML5 / CSS3 & Modern Styling',
      category: 'frontend',
      proficiency: 88,
      iconName: 'html',
      level: 'Advanced',
      description: 'Responsive Fluid Grid, Flexbox, Tailwind CSS, 3D Transforms, Web Accessibility Standards.',
    },
  ];

  const filteredSkills = skills.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  const radarData = [
    { label: 'Java', score: 90, x: 130, y: 45, color: '#c084fc' },
    { label: 'Spring Boot', score: 82, x: 195, y: 85, color: '#a855f7' },
    { label: 'SQL', score: 80, x: 195, y: 155, color: '#d8b4fe' },
    { label: 'React', score: 78, x: 130, y: 190, color: '#818cf8' },
    { label: 'JavaScript', score: 85, x: 65, y: 155, color: '#f472b6' },
    { label: 'HTML/CSS', score: 88, x: 65, y: 85, color: '#e879f9' },
  ];

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-purple-500/10">
      
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-['JetBrains_Mono',monospace] font-semibold bg-purple-950/50 border border-purple-500/30 text-purple-300">
          <Cpu className="w-3.5 h-3.5 text-purple-400" />
          <span>TECHNICAL EXPERTISE</span>
        </div>
        <h2 className="font-['Syne',sans-serif] text-4xl sm:text-5xl font-extrabold text-white">
          Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-300">Technologies</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full mx-auto shadow-[0_0_12px_#c084fc]" />
        <p className="text-sm sm:text-base text-purple-200/70 max-w-xl mx-auto font-normal">
          Enterprise tools and core computer science capabilities applied across full stack software systems.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {(['all', 'backend', 'frontend', 'database'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundFx.playClick();
                setFilter(cat);
              }}
              className={`px-5 py-2 rounded-xl text-xs font-['JetBrains_Mono',monospace] uppercase font-bold transition-all duration-200 ${
                filter === cat
                  ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-[0_4px_16px_rgba(168,85,247,0.4)] scale-105'
                  : 'bg-purple-950/40 border border-purple-500/20 text-purple-300 hover:text-white hover:border-purple-400/40'
              }`}
            >
              {cat === 'all' ? 'All Technologies' : cat}
            </button>
          ))}
        </div>

        {/* Skills Main Layout: List + Radar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Progress Meters List */}
          <div className="lg:col-span-8 rounded-3xl bg-gradient-to-b from-purple-950/30 via-[#0d091e] to-[#070510] border border-purple-500/30 p-6 sm:p-8 shadow-[0_15px_35px_rgba(0,0,0,0.5)] flex flex-col justify-between">
            
            <div className="flex items-center justify-between pb-4 border-b border-purple-500/20 mb-6">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-purple-400" />
                <span className="font-['Outfit',sans-serif] font-bold text-white text-base">
                  Technical Proficiency Matrix
                </span>
              </div>
              <span className="text-xs font-['JetBrains_Mono',monospace] text-emerald-400 font-semibold px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30">
                Average: 83.8%
              </span>
            </div>

            <div className="space-y-6">
              {filteredSkills.map((skill) => (
                <div 
                  key={skill.name}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className="p-3.5 rounded-2xl bg-purple-950/20 border border-purple-500/15 hover:border-purple-400/40 transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-purple-400" />
                      <span className="font-['Outfit',sans-serif] font-bold text-white text-sm sm:text-base">
                        {skill.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-['JetBrains_Mono',monospace] text-purple-300/80">
                        {skill.level}
                      </span>
                      <span className="font-['JetBrains_Mono',monospace] font-bold text-sm text-purple-300">
                        {skill.proficiency}%
                      </span>
                    </div>
                  </div>

                  {/* Meter Track */}
                  <div className="w-full h-2.5 rounded-full bg-purple-950/80 border border-purple-500/20 overflow-hidden relative">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-violet-600 via-purple-400 to-fuchsia-400 shadow-[0_0_12px_rgba(192,132,252,0.6)] transition-all duration-1000 ease-out"
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>

                  <p className="mt-2 text-xs text-purple-200/60 font-['JetBrains_Mono',monospace] leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Right: Interactive SVG Tech Radar */}
          <div className="lg:col-span-4 rounded-3xl bg-gradient-to-b from-purple-950/30 via-[#0d091e] to-[#070510] border border-purple-500/30 p-6 flex flex-col justify-between items-center text-center shadow-[0_15px_35px_rgba(0,0,0,0.5)]">
            
            <div className="w-full flex items-center justify-between pb-3 border-b border-purple-500/20 mb-4">
              <span className="font-['Outfit',sans-serif] font-bold text-white text-sm">
                Skill Vectors
              </span>
              <span className="text-[11px] font-['JetBrains_Mono',monospace] text-purple-400 font-semibold">
                Radar View
              </span>
            </div>

            {/* Radar Canvas SVG */}
            <div className="py-2 my-auto">
              <svg width="250" height="230" viewBox="0 0 260 240" className="overflow-visible">
                {/* Concentric reference polygons */}
                <polygon points="130,30 205,73 205,157 130,200 55,157 55,73" fill="none" stroke="rgba(168,85,247,0.15)" strokeWidth="1" strokeDasharray="3,3" />
                <polygon points="130,55 185,87 185,143 130,175 75,143 75,87" fill="none" stroke="rgba(168,85,247,0.18)" strokeWidth="1" strokeDasharray="3,3" />
                <polygon points="130,80 165,100 165,130 130,150 95,130 95,100" fill="none" stroke="rgba(168,85,247,0.22)" strokeWidth="1" strokeDasharray="3,3" />

                {/* Axis Radial Lines */}
                <line x1="130" y1="115" x2="130" y2="30" stroke="rgba(168,85,247,0.25)" />
                <line x1="130" y1="115" x2="205" y2="73" stroke="rgba(168,85,247,0.25)" />
                <line x1="130" y1="115" x2="205" y2="157" stroke="rgba(168,85,247,0.25)" />
                <line x1="130" y1="115" x2="130" y2="200" stroke="rgba(168,85,247,0.25)" />
                <line x1="130" y1="115" x2="55" y2="157" stroke="rgba(168,85,247,0.25)" />
                <line x1="130" y1="115" x2="55" y2="73" stroke="rgba(168,85,247,0.25)" />

                {/* Filled Radar Polygon in Glowing Violet */}
                <polygon
                  points="130,38 195,80 190,149 130,181 66,151 63,79"
                  fill="rgba(168, 85, 247, 0.28)"
                  stroke="#c084fc"
                  strokeWidth="2.5"
                  className="filter drop-shadow-[0_0_12px_rgba(192,132,252,0.6)]"
                />

                {/* Nodes */}
                {radarData.map((node) => (
                  <circle
                    key={node.label}
                    cx={node.x}
                    cy={node.y}
                    r={hoveredSkill === node.label ? 6.5 : 4.5}
                    fill={node.color}
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    className="cursor-pointer transition-all duration-200"
                    onMouseEnter={() => setHoveredSkill(node.label)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  />
                ))}

                {/* Axis Labels */}
                <text x="130" y="18" textAnchor="middle" fill="#c084fc" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">Java (90%)</text>
                <text x="215" y="75" textAnchor="start" fill="#a855f7" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">Spring</text>
                <text x="215" y="162" textAnchor="start" fill="#d8b4fe" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">SQL</text>
                <text x="130" y="220" textAnchor="middle" fill="#818cf8" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">React</text>
                <text x="45" y="162" textAnchor="end" fill="#f472b6" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">JS</text>
                <text x="45" y="75" textAnchor="end" fill="#e879f9" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">HTML</text>
              </svg>
            </div>

            {/* Radar Status Helper */}
            <div className="w-full pt-3 border-t border-purple-500/20 text-xs text-purple-300/80 font-['JetBrains_Mono',monospace]">
              <div className="flex items-center justify-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-purple-400" />
                <span>
                  {hoveredSkill ? `Inspecting: ${hoveredSkill}` : 'Hover nodes to inspect details'}
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Additional Technologies Pill Cloud */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
          {[
            'RESTful Web Services',
            'Microservices Architecture',
            'Hibernate / JPA',
            'MySQL Server',
            'SQLite Embedded',
            'Git & GitHub',
            'Maven Build Tool',
            'Postman API Testing',
            'Responsive Design',
            'Agile & Clean Architecture',
          ].map((tech) => (
            <span
              key={tech}
              className="px-3.5 py-1.5 rounded-full text-xs font-['JetBrains_Mono',monospace] bg-purple-950/40 border border-purple-500/20 text-purple-200/80 shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>

    </section>
  );
};
