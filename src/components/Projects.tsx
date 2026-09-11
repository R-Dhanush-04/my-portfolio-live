import React, { useState } from 'react';
import { 
  Layers, 
  ExternalLink, 
  Github, 
  Code2, 
  Sparkles, 
  Film, 
  ShoppingCart, 
  ShieldAlert, 
  ArrowUpRight,
  Info
} from 'lucide-react';
import { soundFx } from '../utils/audio';
import { ProjectItem } from '../types';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'all' | 'java' | 'web'>('all');

  const projects: ProjectItem[] = [
    {
      id: 'movie-ticket-booking',
      title: 'Movie Ticket Booking System',
      tagline: 'Full-Stack Cinema Concurrency & Ticketing Engine',
      category: 'java',
      badge: 'Java 21 • Spring Boot • MySQL',
      description:
        'A full-stack cinema ticketing platform built with Java 21, Spring Boot REST controllers, and MySQL. Features real-time seat availability matrix, showtime scheduling, booking validation, and automated PDF invoice generation.',
      image:
        'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&auto=format&fit=crop&q=80',
      tech: ['Java 21', 'Spring Boot', 'MySQL', 'Seat Matrix Engine', 'RESTful APIs'],
      features: [
        'Real-time cinema seat lock preventing concurrent double-booking',
        'Spring Boot RESTful microservice controllers',
        'Relational MySQL schema with theater & screen mappings',
        'Automated booking invoice receipt generator',
      ],
      architecture:
        'Layered architecture utilizing Spring Data JPA, Hibernate, relational foreign keys across Movies, Theaters, Screens, and dynamic Seats, with transactional locking during checkouts.',
      status: 'Production Grade Architecture',
      githubUrl: 'https://github.com/dhanutech04',
    },
    {
      id: 'redstore-ecommerce',
      title: 'RedStore E-Commerce Website',
      tagline: 'Responsive Commercial Storefront & Cart Engine',
      category: 'web',
      badge: 'React • Modern JavaScript • CSS Grid',
      description:
        'A responsive commercial e-commerce storefront engineered with React and modern JavaScript. Features multi-category product filtering, dynamic shopping cart calculation engine, customer ratings, instant search, and mobile-first navigation.',
      image:
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80',
      tech: ['React', 'JavaScript ES6+', 'CSS Grid', 'Cart State Engine', 'Responsive UI'],
      features: [
        'Dynamic cart calculation with coupon validation and tax calculations',
        'Instant category filtering & keyword product search',
        'Customer reviews & dynamic star ratings component',
        '100% fluid responsive design for mobile, tablet, and desktop viewports',
      ],
      architecture:
        'Component-driven architecture using React Hooks for state management, pure CSS Grid for responsive storefront layouts, and optimized client-side filtering.',
      status: 'Complete & Responsive',
      githubUrl: 'https://github.com/dhanutech04',
    },
    {
      id: 'firewall-threat-detection',
      title: 'Firewall Threat Detection System',
      tagline: 'Multi-Threaded Socket Packet Inspector & Defender',
      category: 'java',
      badge: 'Core Java 21 • Sockets • SQL Logs',
      description:
        'A multi-threaded cybersecurity packet inspection and anomaly defense engine engineered in Core Java. Analyzes socket traffic, inspects packet headers against threat signatures, flags malicious brute-force/DDoS attempts, and writes audit trails to SQL database.',
      image:
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80',
      tech: ['Java 21', 'Socket Network API', 'Threat Signatures', 'SQL Audit Logs', 'Multithreading'],
      features: [
        'Concurrent worker thread pool monitoring inbound network socket streams',
        'Heuristic inspection of IP packet headers against signature rules',
        'Automated IP blacklisting against brute-force and SYN flood anomalies',
        'Structured SQL database audit log tracking all security events',
      ],
      architecture:
        'Built with Java Socket API and java.util.concurrent thread pools. Compares inbound network packets against signature definitions and writes persistent incident reports to SQL.',
      status: 'Core Java Cybersecurity Engine',
      githubUrl: 'https://github.com/dhanutech04',
    },
  ];

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-purple-500/10">
      
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-['JetBrains_Mono',monospace] font-semibold bg-purple-950/50 border border-purple-500/30 text-purple-300">
          <Layers className="w-3.5 h-3.5 text-fuchsia-400" />
          <span>FEATURED WORK</span>
        </div>
        <h2 className="font-['Syne',sans-serif] text-4xl sm:text-5xl font-extrabold text-white">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-300">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full mx-auto shadow-[0_0_12px_#c084fc]" />
        <p className="text-sm sm:text-base text-purple-200/70 max-w-xl mx-auto font-normal">
          Flagship software applications showcasing Java 21, Spring Boot microservices, React, and SQL databases.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        
        {/* Project Filters */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {(['all', 'java', 'web'] as const).map((cat) => (
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
              {cat === 'all' ? 'All Projects' : cat === 'java' ? 'Java & SQL' : 'Web & React'}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              className="group rounded-3xl bg-gradient-to-b from-purple-950/30 via-[#0d091e] to-[#070510] border border-purple-500/25 hover:border-purple-400/60 overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                {/* Media Image with Overlay Banner */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-black">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d091e] via-transparent to-black/40" />

                  {/* Top Badge */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#090714]/80 border border-purple-400/40 text-[10px] font-['JetBrains_Mono',monospace] font-bold text-purple-200 backdrop-blur-md">
                    0{idx + 1}
                  </div>

                  {/* Bottom Image Tag */}
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-purple-950/90 border border-purple-500/50 text-[11px] font-['JetBrains_Mono',monospace] font-semibold text-purple-200 backdrop-blur-md flex items-center gap-1.5 shadow-md">
                    <Code2 className="w-3 h-3 text-purple-400" />
                    <span>{project.badge}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-['Outfit',sans-serif] font-bold text-xl text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-['JetBrains_Mono',monospace] text-purple-400 font-semibold mt-1 mb-3">
                    {project.tagline}
                  </p>
                  <p className="text-xs text-purple-200/70 leading-relaxed line-clamp-3 mb-4 font-normal">
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-md text-[10px] font-['JetBrains_Mono',monospace] bg-purple-950/60 border border-purple-500/20 text-purple-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-purple-500/15 mt-4 flex items-center justify-between">
                <button
                  onClick={() => {
                    soundFx.playClick();
                    onSelectProject(project);
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-['JetBrains_Mono',monospace] font-semibold text-purple-300 hover:text-white transition-colors"
                >
                  <Info className="w-3.5 h-3.5 text-purple-400" />
                  <span>Architecture</span>
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playClick()}
                  className="px-3 py-1.5 rounded-lg text-xs font-['Outfit',sans-serif] font-semibold bg-purple-950/60 hover:bg-purple-900 border border-purple-500/30 text-white flex items-center gap-1.5 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-purple-400" />
                </a>
              </div>

            </article>
          ))}
        </div>

      </div>

    </section>
  );
};
