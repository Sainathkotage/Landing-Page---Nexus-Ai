import React from 'react';
import { ArrowLeft, ExternalLink, ShieldCheck, Zap, Sparkles, MessageSquare } from 'lucide-react';

interface ArchetypeSpecBarProps {
  id: string;
  category: string;
  title: string;
  claimBadge: string;
  techStack: string;
  themeColor?: 'cyan' | 'amber' | 'emerald' | 'purple';
}

export function ArchetypeSpecBar({
  id,
  category,
  title,
  claimBadge,
  techStack,
  themeColor = 'cyan',
}: ArchetypeSpecBarProps) {
  const getBadgeStyle = () => {
    switch (themeColor) {
      case 'amber':
        return 'border-amber-500/30 bg-amber-500/10 text-amber-300';
      case 'emerald':
        return 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300';
      case 'purple':
        return 'border-purple-500/30 bg-purple-500/10 text-purple-300';
      case 'cyan':
      default:
        return 'border-cyan-500/30 bg-cyan-500/10 text-cyan-300';
    }
  };

  const getCtaStyle = () => {
    switch (themeColor) {
      case 'amber':
        return 'bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black shadow-amber-500/20';
      case 'emerald':
        return 'bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-black shadow-emerald-500/20';
      case 'purple':
        return 'bg-gradient-to-r from-purple-400 to-indigo-500 hover:from-purple-300 hover:to-indigo-400 text-white shadow-purple-500/20';
      case 'cyan':
      default:
        return 'bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-black shadow-cyan-500/20';
    }
  };

  const contactUrl = `https://wa.me/919021509565?text=${encodeURIComponent(
    `Hi Aixentrix WebLabs team, I inspected the ${id} // ${title} (${category}) archetype and I want to engineer a bespoke website tailored to my business.`
  )}`;

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-black/75 border-b border-white/[0.08] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left: Back Link & Spec Identity */}
        <div className="flex items-center gap-4 min-w-0">
          <a
            href="/weblabs#archetypes"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-400 hover:text-white transition-colors py-1.5 px-3 rounded-lg hover:bg-white/[0.06] border border-transparent hover:border-white/10 shrink-0"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden xs:inline">Back to</span>
            <span className="font-semibold text-white">WebLabs</span>
          </a>

          <div className="h-4 w-[1px] bg-white/10 hidden sm:block" />

          <div className="hidden md:flex items-center gap-2.5 truncate">
            <span className="font-mono text-xs text-zinc-500 shrink-0">
              {id} // {category}
            </span>
            <span className="text-zinc-600 text-xs">•</span>
            <span className="text-xs font-medium text-zinc-200 truncate">{title}</span>
          </div>
        </div>

        {/* Center: Live Claim Verification Badge */}
        <div className="flex items-center gap-2">
          <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-mono font-medium shadow-sm ${getBadgeStyle()}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            <span>CLAIM VERIFIED: {claimBadge}</span>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href="/weblabs#contact"
            className="hidden lg:inline-flex text-xs text-zinc-400 hover:text-white px-3 py-1.5 rounded-lg transition-colors font-medium"
          >
            Explore All Archetypes
          </a>

          <a
            href={contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-md active:scale-95 ${getCtaStyle()}`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Claim This</span> Architecture
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>
        </div>
      </div>
    </header>
  );
}
