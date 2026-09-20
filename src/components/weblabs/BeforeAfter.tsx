import { useState } from 'react';
import { XCircle, CheckCircle2, MessageSquare, MapPin, Globe, Sparkles, ArrowRight } from 'lucide-react';

export function BeforeAfter() {
  const [activeView, setActiveView] = useState<'both' | 'before' | 'after'>('both');

  return (
    <section className="py-20 lg:py-28 bg-[#090d18] relative border-t border-white/5 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-300">
            <span>THE REAL TRANSFORMATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            From "we're on Instagram" to "we have a website."
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            See the practical difference between asking customers to piece together scattered social links versus giving them an authoritative digital home.
          </p>

          {/* Toggle buttons for mobile or preference */}
          <div className="inline-flex items-center gap-1.5 p-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium">
            <button
              onClick={() => setActiveView('both')}
              className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                activeView === 'both' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Side by Side
            </button>
            <button
              onClick={() => setActiveView('before')}
              className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                activeView === 'before' ? 'bg-rose-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Before (Social Only)
            </button>
            <button
              onClick={() => setActiveView('after')}
              className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                activeView === 'after' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              After (With WebLabs)
            </button>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* BEFORE CARD */}
          {(activeView === 'both' || activeView === 'before') && (
            <div className="bg-[#0f121d] border border-rose-500/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl shadow-black/60 relative overflow-hidden">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2 text-rose-400 font-bold text-base">
                    <XCircle className="w-5 h-5" />
                    <span>BEFORE: Scattered Presence</span>
                  </div>
                  <span className="text-[10px] font-mono text-rose-300 bg-rose-500/10 px-2.5 py-1 rounded-full border border-rose-500/20 uppercase">
                    High Friction
                  </span>
                </div>

                {/* Simulated Clunky Social Profile Mockup */}
                <div className="bg-[#080a12] p-4 sm:p-5 rounded-2xl border border-white/10 space-y-4 font-sans text-xs select-none">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 to-rose-500 flex items-center justify-center font-bold text-sm text-white">
                      SM
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">@sourdough_nagpur</div>
                      <div className="text-slate-400 text-[11px]">Baking & Dining (No Website)</div>
                    </div>
                  </div>

                  <p className="text-slate-300 leading-relaxed text-[11px] bg-white/5 p-2.5 rounded-lg border border-white/5">
                    "📍 Civil Lines | 🕒 DM for timings | 📱 WhatsApp 98xxxxxxx for menu pdf | ⚠️ Closed on Tuesdays maybe | Linktree in bio for orders"
                  </p>

                  <div className="space-y-2 pt-1">
                    <div className="flex items-center justify-between p-2 rounded bg-rose-950/20 border border-rose-500/20 text-rose-300 text-[11px]">
                      <span>Menu Link (25MB PDF download)</span>
                      <span className="text-rose-400 font-mono">Bounces 40%</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-rose-950/20 border border-rose-500/20 text-rose-300 text-[11px]">
                      <span>Instagram DM response time</span>
                      <span className="text-rose-400 font-mono">3–6 hours</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-rose-950/20 border border-rose-500/20 text-rose-300 text-[11px]">
                      <span>Google search finding</span>
                      <span className="text-rose-400 font-mono">Third-party directories</span>
                    </div>
                  </div>
                </div>

                {/* Bullet list of issues */}
                <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>Customers have to download a slow, awkward PDF just to see your prices.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>Customer inquiries get lost in message requests and personal chat history.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>No permanent, credible brand identity when searched on Google.</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* AFTER CARD */}
          {(activeView === 'both' || activeView === 'after') && (
            <div className="bg-[#0f172a] border border-emerald-500/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl shadow-black/60 relative overflow-hidden">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-base">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>AFTER: WebLabs Digital Storefront</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-300 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 uppercase">
                    High Conversion
                  </span>
                </div>

                {/* Simulated Clean Storefront Mockup */}
                <div className="bg-[#080b14] p-4 sm:p-5 rounded-2xl border border-white/10 space-y-4 font-sans text-xs select-none">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center font-bold text-xs text-white">
                        H
                      </span>
                      <span className="font-bold text-white text-xs">hearthkitchen.com</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-mono">Live • 0.3s load</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-bold text-sm">Hearth Wood-Fired Kitchen</span>
                      <span className="text-[11px] text-amber-400 font-medium">4.9 ★ (Google Verified)</span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      Instant interactive menu • Real food photography • Exact table reservations
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[11px] font-medium flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>1-Tap WhatsApp Booking</span>
                    </div>
                    <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[11px] font-medium flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Google Map Directions</span>
                    </div>
                  </div>
                </div>

                {/* Bullet list of advantages */}
                <div className="space-y-2.5 text-xs sm:text-sm text-slate-200">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>One clean link that answers all customer questions in under 10 seconds.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Pre-filled WhatsApp inquiries bring qualified customer orders with zero friction.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Permanent corporate authority that ranks properly on Google search.</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
