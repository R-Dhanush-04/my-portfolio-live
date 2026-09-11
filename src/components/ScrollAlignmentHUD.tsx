import React, { useState, useEffect } from 'react';
import { 
  Crosshair, 
  ChevronUp, 
  ChevronDown, 
  Compass, 
  Layers, 
  Check, 
  Sliders, 
  ArrowDownCircle,
  Eye,
  Maximize2,
  Minimize2
} from 'lucide-react';
import { soundFx } from '../utils/audio';

interface ScrollAlignmentHUDProps {
  activeSection: string;
}

interface SectionMetrics {
  id: string;
  name: string;
  offsetTop: number;
  offsetHeight: number;
  alignmentDelta: number;
  isAligned: boolean;
  visibilityPercent: number;
}

export const ScrollAlignmentHUD: React.FC<ScrollAlignmentHUDProps> = ({ activeSection }) => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [metrics, setMetrics] = useState<SectionMetrics[]>([]);
  const [currentAlignmentInfo, setCurrentAlignmentInfo] = useState({
    name: 'Home',
    id: 'home',
    offset: 0,
    alignment: 'Top-Aligned (0px offset)',
    status: 'In Viewport'
  });

  const sectionIds = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'skills', name: 'Skills' },
    { id: 'projects', name: 'Projects' },
    { id: 'resume', name: 'Resume' },
    { id: 'contact', name: 'Contact' },
  ];

  useEffect(() => {
    const calculateAlignment = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const totalScrollable = document.documentElement.scrollHeight - windowHeight;
      const progress = totalScrollable > 0 ? (currentScrollY / totalScrollable) * 100 : 0;

      setScrollY(Math.round(currentScrollY));
      setScrollProgress(Math.round(progress));

      const updatedMetrics: SectionMetrics[] = sectionIds.map((sec) => {
        const el = document.getElementById(sec.id);
        if (!el) {
          return {
            id: sec.id,
            name: sec.name,
            offsetTop: 0,
            offsetHeight: 0,
            alignmentDelta: 9999,
            isAligned: false,
            visibilityPercent: 0,
          };
        }

        const rect = el.getBoundingClientRect();
        const offsetTop = el.offsetTop;
        const offsetHeight = el.offsetHeight;

        // Delta between viewport target (80px navbar height) and element top
        const delta = Math.abs(rect.top - 80);
        const isAligned = delta < 120;

        // Visibility calculation
        const visibleTop = Math.max(0, rect.top);
        const visibleBottom = Math.min(windowHeight, rect.bottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        const visibilityPercent = Math.min(100, Math.round((visibleHeight / Math.min(windowHeight, rect.height)) * 100));

        return {
          id: sec.id,
          name: sec.name,
          offsetTop: Math.round(offsetTop),
          offsetHeight: Math.round(offsetHeight),
          alignmentDelta: Math.round(delta),
          isAligned,
          visibilityPercent,
        };
      });

      setMetrics(updatedMetrics);

      // Active section details
      const activeObj = updatedMetrics.find((m) => m.id === activeSection) || updatedMetrics[0];
      if (activeObj) {
        setCurrentAlignmentInfo({
          name: activeObj.name,
          id: activeObj.id,
          offset: activeObj.offsetTop,
          alignment: activeObj.isAligned ? 'Optimally Aligned (Snapped)' : `Offset: ${activeObj.alignmentDelta}px`,
          status: `${activeObj.visibilityPercent}% In View`
        });
      }
    };

    window.addEventListener('scroll', calculateAlignment, { passive: true });
    window.addEventListener('resize', calculateAlignment);
    calculateAlignment();

    return () => {
      window.removeEventListener('scroll', calculateAlignment);
      window.removeEventListener('resize', calculateAlignment);
    };
  }, [activeSection]);

  const smoothAlignTo = (id: string) => {
    soundFx.playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-40 font-['JetBrains_Mono',monospace]">
      
      {/* Expanded HUD View */}
      {isExpanded ? (
        <div className="w-80 sm:w-96 rounded-2xl bg-[#090616]/95 border border-purple-500/40 p-4 sm:p-5 shadow-[0_15px_40px_rgba(0,0,0,0.7),0_0_25px_rgba(168,85,247,0.2)] backdrop-blur-xl animate-in fade-in slide-in-from-bottom-3 duration-200">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-purple-500/20 mb-3">
            <div className="flex items-center gap-2">
              <Crosshair className="w-4 h-4 text-purple-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span className="text-xs font-bold text-white font-['Outfit',sans-serif]">
                Scroll & Alignment Properties
              </span>
            </div>

            <button
              onClick={() => {
                soundFx.playClick();
                setIsExpanded(false);
              }}
              className="p-1 rounded-lg hover:bg-purple-900/50 text-purple-400 hover:text-white transition-colors"
              title="Minimize Alignment HUD"
            >
              <Minimize2 className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Real-time Telemetry Metrics Grid */}
          <div className="grid grid-cols-2 gap-2 mb-3 text-[11px]">
            <div className="p-2.5 rounded-xl bg-purple-950/40 border border-purple-500/20">
              <span className="text-purple-400/80 block text-[10px]">SCROLL DEPTH</span>
              <span className="text-white font-bold text-xs">{scrollY}px ({scrollProgress}%)</span>
            </div>

            <div className="p-2.5 rounded-xl bg-purple-950/40 border border-purple-500/20">
              <span className="text-purple-400/80 block text-[10px]">ACTIVE ALIGNMENT</span>
              <span className="text-emerald-400 font-bold text-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                #{currentAlignmentInfo.id}
              </span>
            </div>
          </div>

          {/* Active Alignment Status Bar */}
          <div className="p-2.5 rounded-xl bg-purple-900/20 border border-purple-500/30 mb-3 text-xs flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-purple-200">
              <Compass className="w-3.5 h-3.5 text-fuchsia-400" />
              <span>Status:</span>
              <strong className="text-white font-['Outfit',sans-serif]">{currentAlignmentInfo.alignment}</strong>
            </div>
            <span className="text-[10px] text-purple-300 font-bold px-1.5 py-0.5 rounded bg-purple-500/20">
              {currentAlignmentInfo.status}
            </span>
          </div>

          {/* Quick Alignment Navigator Buttons */}
          <div className="space-y-1.5">
            <div className="text-[10px] text-purple-400 font-semibold uppercase tracking-wider flex items-center justify-between">
              <span>Smooth Align Targets:</span>
              <span className="text-[9px] text-purple-400/60">CSS scroll-margin-top: 6rem</span>
            </div>

            <div className="grid grid-cols-3 gap-1.5">
              {metrics.map((sec) => {
                const isCurrent = sec.id === activeSection;
                return (
                  <button
                    key={sec.id}
                    onClick={() => smoothAlignTo(sec.id)}
                    className={`px-2 py-1.5 rounded-lg text-[11px] font-medium border transition-all duration-150 flex items-center justify-between cursor-pointer ${
                      isCurrent
                        ? 'bg-purple-600 text-white border-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.5)] font-bold'
                        : 'bg-purple-950/30 hover:bg-purple-900/40 text-purple-300 border-purple-500/20 hover:text-white'
                    }`}
                  >
                    <span>{sec.name}</span>
                    {isCurrent && <Check className="w-3 h-3 text-white" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Scroll Behavior Info */}
          <div className="mt-3 pt-2.5 border-t border-purple-500/20 flex items-center justify-between text-[10px] text-purple-400/70">
            <span>scroll-behavior: smooth</span>
            <span className="text-emerald-400">FPS: 60 (Hardware Accel)</span>
          </div>

        </div>
      ) : (
        /* Collapsed Minimal Pill HUD */
        <button
          onClick={() => {
            soundFx.playClick();
            setIsExpanded(true);
          }}
          className="group px-3.5 py-2 rounded-xl bg-[#090616]/90 hover:bg-[#120b2d] border border-purple-500/40 text-purple-200 hover:text-white shadow-[0_8px_25px_rgba(0,0,0,0.6)] backdrop-blur-md flex items-center gap-2.5 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          title="Click to expand Scroll & Alignment HUD"
        >
          <Crosshair className="w-3.5 h-3.5 text-purple-400 group-hover:rotate-90 transition-transform" />
          
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-purple-400 font-bold">#{activeSection}</span>
            <span className="text-purple-500">•</span>
            <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Aligned
            </span>
          </div>

          <div className="text-[10px] px-1.5 py-0.5 rounded bg-purple-950/60 border border-purple-500/30 text-purple-300">
            {scrollProgress}%
          </div>

          <Maximize2 className="w-3 h-3 text-purple-400 opacity-60 group-hover:opacity-100" />
        </button>
      )}

    </div>
  );
};
