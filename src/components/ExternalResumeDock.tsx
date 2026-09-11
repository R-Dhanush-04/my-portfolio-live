import React, { useState } from 'react';
import { 
  FileText, 
  ExternalLink, 
  X, 
  Download, 
  Check, 
  Share2, 
  Eye,
  GraduationCap
} from 'lucide-react';
import { soundFx } from '../utils/audio';

interface ExternalResumeDockProps {
  onScrollToResumeSection?: () => void;
}

export const ExternalResumeDock: React.FC<ExternalResumeDockProps> = ({
  onScrollToResumeSection,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const resumePdfPath = '/Dhanush_R_Resume_4.pdf';

  const handleToggle = () => {
    soundFx.playClick();
    setIsOpen(!isOpen);
  };

  const handleCopyLink = () => {
    soundFx.playClick();
    const fullUrl = `${window.location.origin}${resumePdfPath}`;
    navigator.clipboard.writeText(fullUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="externalResumeDock" className="relative z-40 flex flex-col items-end" aria-live="polite">
      
      {/* Pop-up Panel Upper Set Above AI Bot */}
      {isOpen && (
        <div 
          id="externalResumePanel"
          className="mb-3 w-80 sm:w-88 rounded-2xl bg-[#100b24]/95 backdrop-blur-xl border border-purple-500/40 p-4 sm:p-5 shadow-[0_15px_45px_rgba(0,0,0,0.8),0_0_30px_rgba(168,85,247,0.3)] animate-in fade-in zoom-in-95 duration-200"
        >
          {/* Panel Header */}
          <div className="flex items-center justify-between pb-3 border-b border-purple-500/20 mb-3.5">
            <div className="flex items-center gap-2 text-white">
              <div className="w-7 h-7 rounded-lg bg-purple-600/30 border border-purple-400/40 flex items-center justify-center text-purple-300">
                <FileText className="w-4 h-4" />
              </div>
              <div className="external-resume-panel-title font-['Outfit',sans-serif] font-bold text-sm text-purple-100 flex items-center gap-1.5">
                <span>Dhanush R Resume</span>
                <span className="text-[10px] font-['JetBrains_Mono',monospace] px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  PDF
                </span>
              </div>
            </div>

            <button
              onClick={handleToggle}
              className="p-1 rounded-lg text-purple-300 hover:text-white hover:bg-purple-900/50 transition-colors"
              title="Close Panel"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Info Card */}
          <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/25 mb-3.5 space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-['Outfit',sans-serif] font-bold text-xs text-white">
                Dhanush R
              </span>
              <span className="text-[10px] font-['JetBrains_Mono',monospace] text-emerald-400 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Immediate Joiner
              </span>
            </div>
            <p className="text-[11px] text-purple-300/80 font-['JetBrains_Mono',monospace]">
              Java Full Stack Developer • B.E. CSE 8.1 CGPA
            </p>
            <p className="text-[10px] text-purple-400/70 font-['JetBrains_Mono',monospace] pt-0.5">
              Login360 Internship • Prime Vector (2 Mos Sales)
            </p>
          </div>

          {/* Primary Action Button: Open External Resume */}
          <div className="space-y-2 mb-3">
            <a
              id="externalResumeLink"
              href={resumePdfPath}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playSuccess()}
              className="external-resume-link w-full py-2.5 px-4 rounded-xl font-['Outfit',sans-serif] font-bold text-xs bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white shadow-[0_4px_20px_rgba(168,85,247,0.4)] flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-95 no-underline"
            >
              <FileText className="w-4 h-4" />
              <span>Open Resume (PDF)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {/* Secondary Actions */}
            <div className="grid grid-cols-2 gap-2">
              <a
                href={resumePdfPath}
                download="Dhanush_R_Resume.pdf"
                onClick={() => soundFx.playSuccess()}
                className="py-2 px-2.5 rounded-lg text-[11px] font-['JetBrains_Mono',monospace] font-semibold bg-purple-950/60 hover:bg-purple-900/80 border border-purple-500/30 text-purple-200 hover:text-white flex items-center justify-center gap-1.5 transition-colors no-underline"
              >
                <Download className="w-3 h-3 text-purple-400" />
                <span>Download</span>
              </a>

              <button
                type="button"
                onClick={handleCopyLink}
                className="py-2 px-2.5 rounded-lg text-[11px] font-['JetBrains_Mono',monospace] font-semibold bg-purple-950/60 hover:bg-purple-900/80 border border-purple-500/30 text-purple-200 hover:text-white flex items-center justify-center gap-1.5 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3 h-3 text-purple-400" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>
            </div>

            <button
              type="button"
              onClick={() => {
                soundFx.playClick();
                setIsOpen(false);
                if (onScrollToResumeSection) {
                  onScrollToResumeSection();
                } else {
                  const el = document.getElementById('resume');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full py-1.5 rounded-lg text-[10px] font-['JetBrains_Mono',monospace] text-purple-300/80 hover:text-purple-100 transition-colors flex items-center justify-center gap-1"
            >
              <Eye className="w-3 h-3 text-purple-400" />
              <span>View Full Resume Section On-Page</span>
            </button>
          </div>
        </div>
      )}

      {/* EXTERNAL RESUME TOGGLE BUTTON: Placed Upper Set Above AI Bot */}
      <button
        id="externalResumeToggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="externalResumePanel"
        onClick={handleToggle}
        className={`external-resume-toggle group relative flex items-center gap-2 px-3.5 py-2 rounded-full border shadow-[0_6px_25px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95 ${
          isOpen
            ? 'bg-purple-600 border-purple-300 text-white shadow-[0_0_20px_rgba(168,85,247,0.8)]'
            : 'bg-[#100a26]/90 border-purple-500/40 hover:border-purple-400 text-purple-200 hover:text-white hover:bg-purple-900/60'
        }`}
        title="Open External Resume Dossier"
      >
        <span className="relative flex items-center justify-center">
          <FileText className="w-4 h-4 text-purple-300 group-hover:text-white" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-400 animate-ping opacity-75" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-400" />
        </span>
        <span className="font-['Outfit',sans-serif] font-bold text-xs tracking-wide">
          Resume
        </span>
        <span className="text-[10px] font-['JetBrains_Mono',monospace] px-1.5 py-0.2 rounded bg-purple-500/30 text-purple-200 font-semibold">
          PDF
        </span>
      </button>

    </div>
  );
};
