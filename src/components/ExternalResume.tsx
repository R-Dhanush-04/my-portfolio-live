import React from 'react';
import { FileText, ExternalLink, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { soundFx } from '../utils/audio';

const resumePdfPath = '/Dhanush_R_Resume_4.pdf';

export const ExternalResume: React.FC = () => {
  return (
    <section id="resume" className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(90vw,620px)] h-[360px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-['JetBrains_Mono',monospace]">
          <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
          <span>OFFICIAL RESUME • PDF</span>
        </div>

        <h2 className="font-['Syne',sans-serif] font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
          My Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">Resume</span>
        </h2>

        <p className="text-sm sm:text-base text-purple-200/70 leading-relaxed">
          View my original resume PDF with my professional summary, technical skills, experience, projects, education and certifications.
        </p>
      </div>

      <div className="max-w-4xl mx-auto rounded-3xl bg-[#0e0922]/90 border border-purple-500/30 p-1 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl">
        <div className="rounded-[22px] px-6 py-8 sm:px-10 sm:py-10 bg-gradient-to-br from-purple-950/35 via-[#0d091e] to-[#080512] flex flex-col sm:flex-row items-center gap-7 sm:gap-10">
          <div className="w-20 h-24 sm:w-24 sm:h-28 shrink-0 rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 p-[2px] shadow-[0_0_30px_rgba(168,85,247,0.35)]">
            <div className="w-full h-full rounded-[14px] bg-[#0b0717] flex items-center justify-center">
              <FileText className="w-10 h-10 text-purple-300" />
            </div>
          </div>

          <div className="flex-1 text-center sm:text-left">
            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2 mb-2">
              <h3 className="font-['Outfit',sans-serif] font-bold text-xl sm:text-2xl text-white">Dhanush R — Resume</h3>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-['JetBrains_Mono',monospace] font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                ORIGINAL PDF
              </span>
            </div>

            <p className="text-sm text-purple-200/70 leading-relaxed">
              Java Full Stack Developer | Software Engineer
            </p>

            <div className="mt-4 flex flex-wrap justify-center sm:justify-start gap-2 text-[11px] font-['JetBrains_Mono',monospace] text-purple-300/80">
              <span className="px-2.5 py-1 rounded-lg bg-purple-950/50 border border-purple-500/20">Java 21</span>
              <span className="px-2.5 py-1 rounded-lg bg-purple-950/50 border border-purple-500/20">Spring Boot</span>
              <span className="px-2.5 py-1 rounded-lg bg-purple-950/50 border border-purple-500/20">React</span>
              <span className="px-2.5 py-1 rounded-lg bg-purple-950/50 border border-purple-500/20">SQL</span>
            </div>
          </div>

          <a
            href={resumePdfPath}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playSuccess()}
            className="shrink-0 w-full sm:w-auto px-6 py-3.5 rounded-2xl font-['Outfit',sans-serif] font-bold text-sm bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white shadow-[0_6px_24px_rgba(168,85,247,0.4)] hover:shadow-[0_8px_30px_rgba(168,85,247,0.6)] transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] flex items-center justify-center gap-2 no-underline"
          >
            <span>Open Resume PDF</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="px-6 sm:px-10 py-4 border-t border-purple-500/15 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 text-[11px] text-purple-300/70 font-['JetBrains_Mono',monospace]">
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Opens the original uploaded PDF in a new tab</span>
          <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-fuchsia-400" /> No recreated HTML resume</span>
        </div>
      </div>
    </section>
  );
};
