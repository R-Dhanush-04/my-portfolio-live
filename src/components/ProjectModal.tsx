import React from 'react';
import { 
  X, 
  Github, 
  ExternalLink, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  Database,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { ProjectItem } from '../types';
import { soundFx } from '../utils/audio';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={() => {
          soundFx.playClick();
          onClose();
        }}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl rounded-3xl bg-gradient-to-b from-[#160d33] via-[#0f0923] to-[#070512] border border-purple-500/40 p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(168,85,247,0.2)] z-10 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-purple-500/20 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-['JetBrains_Mono',monospace] font-bold bg-purple-900/50 border border-purple-400/30 text-purple-300 mb-1">
              <Cpu className="w-3 h-3 text-purple-400" />
              <span>SYSTEM ARCHITECTURE</span>
            </div>
            <h3 className="font-['Outfit',sans-serif] font-bold text-2xl text-white">
              {project.title}
            </h3>
          </div>

          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="p-2 rounded-xl bg-purple-950/50 border border-purple-500/30 text-purple-300 hover:text-white hover:border-purple-400 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-5 text-left">
          
          {/* Tagline & Image */}
          <div className="relative h-44 sm:h-52 w-full rounded-2xl overflow-hidden border border-purple-500/20">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0923] via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/80 border border-purple-400/40 text-xs font-['JetBrains_Mono',monospace] text-purple-200">
              {project.status}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-purple-200/80 font-normal leading-relaxed">
            {project.description}
          </p>

          {/* Architectural Design Breakdown */}
          <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/25">
            <h4 className="font-['Outfit',sans-serif] font-bold text-sm text-white mb-2 flex items-center gap-1.5">
              <Database className="w-4 h-4 text-purple-400" />
              Engine Architecture & Database Schema
            </h4>
            <p className="text-xs font-['JetBrains_Mono',monospace] text-purple-300/90 leading-relaxed">
              {project.architecture}
            </p>
          </div>

          {/* Core Feature Highlights */}
          <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-500/20">
            <h4 className="font-['Outfit',sans-serif] font-bold text-sm text-white mb-2.5 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-fuchsia-400" />
              Key Implementation Features
            </h4>
            <ul className="space-y-2 text-xs text-purple-200/80 font-['Plus_Jakarta_Sans',sans-serif]">
              {project.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack pills */}
          <div>
            <span className="text-[11px] font-['JetBrains_Mono',monospace] text-purple-400 font-semibold block mb-2">
              TECHNOLOGIES DEPLOYED:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg text-xs font-['JetBrains_Mono',monospace] bg-purple-900/40 border border-purple-500/30 text-purple-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-3 border-t border-purple-500/20 flex items-center justify-between">
            <span className="text-xs font-['JetBrains_Mono',monospace] text-purple-400/70">
              Verified Implementation
            </span>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick()}
              className="px-5 py-2.5 rounded-xl font-semibold text-xs font-['Outfit',sans-serif] bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-md flex items-center gap-2 hover:brightness-110 transition-all"
            >
              <Github className="w-4 h-4" />
              <span>Inspect on GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
