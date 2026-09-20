import { ArrowRight, MessageSquare, CheckCircle2, MapPin, Zap } from 'lucide-react';

export function WebLabsHero() {
  const scrollToConcept = () => {
    const el = document.getElementById('free-concept');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openWhatsApp = () => {
    // Uses placeholder number until user provides real WhatsApp number
    const message = encodeURIComponent("Hi WebLabs, I would like to inquire about building a website for my business.");
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-20 lg:pb-28 overflow-hidden paper-texture">
      {/* Warm glow background */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[800px] h-[450px] rounded-full bg-gradient-to-br from-amber-300/25 via-orange-200/15 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        
        {/* Top Flourish Badge */}
        <div className="text-center mb-6">
          <div className="vintage-divider text-xs font-semibold uppercase tracking-[0.3em] mb-4 text-ink-500 font-sans">
            <span className="flourish text-base">✦</span>
            <span className="mx-3">Freelance Web Studio • India</span>
            <span className="flourish text-base">✦</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-700 text-xs font-mono font-medium">
            <span>Operating from [ADD: City, State]</span>
            <span className="text-accent-500/40">•</span>
            <span>Building for Indian SMBs</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-ink-900 leading-[1.08]">
            Complete websites, from <span class="italic font-normal">first sketch</span> to <span class="italic font-normal">launch</span>.
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-ink-700 font-sans leading-relaxed max-w-2xl mx-auto">
            I design and build fast, mobile-friendly websites for small and medium businesses in India that don't have one — or have one that no longer works. From custom layout to domain setup, WhatsApp orders, and Google Search indexing.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openWhatsApp}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-cream-50 bg-ink-900 hover:bg-accent-600 transition-all shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] inline-flex items-center justify-center gap-2 font-sans cursor-pointer border-0"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Chat on WhatsApp ([ADD: WhatsApp number])</span>
            </button>

            <button
              onClick={scrollToConcept}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-ink-900 bg-cream-100 hover:bg-cream-200 border border-ink-900/15 transition-all inline-flex items-center justify-center gap-2 font-sans cursor-pointer"
            >
              <span>Get Free Concept</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Trust points row */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-ink-600 font-sans">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-accent-600" />
              No Generic Templates
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-accent-600" />
              100% Turnkey (Domain + Hosting + SSL)
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-accent-600" />
              Direct Independent Developer Access
            </span>
          </div>
        </div>

        {/* Code-built UI Mockup Frame */}
        <div className="mt-14 sm:mt-18 relative max-w-4xl mx-auto">
          {/* Main Desktop Browser Frame */}
          <div className="rounded-sm bg-cream-50 border border-ink-900/15 shadow-2xl vintage-border overflow-hidden">
            {/* Chrome Bar */}
            <div className="bg-cream-100/90 px-4 py-3 border-b border-ink-900/10 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-ink-900/20 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-ink-900/20 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-ink-900/20 inline-block" />
              </div>

              {/* Address bar */}
              <div className="flex items-center gap-2 bg-[#fdfaf5] px-4 py-1 rounded border border-ink-900/10 text-xs font-mono text-ink-700 w-64 sm:w-96 justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                <span className="text-ink-400">https://</span>
                <span className="text-ink-900 font-medium">yourbusiness.com</span>
                <span className="text-[10px] text-emerald-700 bg-emerald-500/10 px-1.5 py-0.2 rounded font-sans font-semibold">SSL</span>
              </div>

              <div className="text-[10px] font-mono text-ink-500 uppercase tracking-widest hidden sm:block">
                Sample Layout
              </div>
            </div>

            {/* Inner Sample Storefront Preview */}
            <div className="p-6 sm:p-8 bg-[#fbf8f2] text-ink-900 select-none">
              {/* Fake Nav */}
              <div className="flex items-center justify-between pb-5 border-b border-ink-900/10">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-ink-900 text-cream-50 font-serif font-bold text-xs flex items-center justify-center">
                    B
                  </span>
                  <span className="font-serif font-semibold text-sm text-ink-900">Your Business Name</span>
                </div>
                <div className="hidden sm:flex items-center gap-5 text-xs text-ink-600 font-sans">
                  <span className="text-ink-900 font-medium">About</span>
                  <span>Services & Menu</span>
                  <span>Location</span>
                  <span>Contact</span>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-700 text-cream-50 text-[11px] font-sans font-medium flex items-center gap-1.5 shadow-sm">
                  <MessageSquare className="w-3 h-3" />
                  <span>WhatsApp Enquiry</span>
                </div>
              </div>

              {/* Fake Hero Body */}
              <div className="py-8 grid sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-7 space-y-3.5">
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-medium text-accent-700 bg-accent-500/10 px-2 py-0.5 rounded border border-accent-500/20">
                    <MapPin className="w-3 h-3 text-accent-600" />
                    <span>[ADD: Your Business Neighborhood, City]</span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-ink-900 leading-tight">
                    Authentic Service, Professional Quality & Direct Booking.
                  </h2>

                  <p className="text-xs sm:text-sm text-ink-600 leading-relaxed font-sans">
                    Clear service lists, transparent pricing, verified working hours, and an instant 1-tap WhatsApp consultation flow designed specifically for local customers.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-3 py-1.5 rounded bg-ink-900 text-cream-50 text-xs font-sans font-medium">
                      View Offerings <span>→</span>
                    </span>
                    <span className="px-3 py-1.5 rounded border border-ink-900/15 text-ink-800 text-xs font-sans font-medium">
                      Get Google Map Directions
                    </span>
                  </div>
                </div>

                {/* Simulated Business Card Block */}
                <div className="sm:col-span-5 bg-cream-100/60 border border-ink-900/10 rounded p-4 space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-ink-500 font-mono text-[10px] uppercase">Business Status</span>
                    <span className="text-emerald-700 font-mono text-xs font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" /> Open Today
                    </span>
                  </div>
                  <div className="border border-ink-900/5 bg-[#fefcf8] rounded p-3 text-xs space-y-1">
                    <div className="font-semibold text-ink-900">Direct Contact & Consultation</div>
                    <div className="text-ink-600 text-[11px]">Click below to initiate pre-filled chat:</div>
                    <div className="text-emerald-800 font-mono text-[11px] font-medium pt-1">
                      [ADD: WhatsApp Click-to-Chat Link]
                    </div>
                  </div>
                  <div className="text-[11px] text-ink-500 font-sans flex items-center justify-between pt-1">
                    <span>Indexed on Google Search</span>
                    <span className="text-accent-600 font-semibold">100% Mobile Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Badges around mockup */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 text-center">
            <div className="p-2.5 rounded bg-cream-100/70 border border-ink-900/10 shadow-sm text-xs font-sans">
              <span className="font-semibold text-ink-900 block">Mobile First</span>
              <span className="text-[11px] text-ink-600">Tested on phones & tablets</span>
            </div>
            <div className="p-2.5 rounded bg-cream-100/70 border border-ink-900/10 shadow-sm text-xs font-sans">
              <span className="font-semibold text-ink-900 block">Sub-1s Load</span>
              <span className="text-[11px] text-ink-600">Edge cloud delivery</span>
            </div>
            <div className="p-2.5 rounded bg-cream-100/70 border border-ink-900/10 shadow-sm text-xs font-sans">
              <span className="font-semibold text-ink-900 block">1-Tap WhatsApp</span>
              <span className="text-[11px] text-ink-600">Pre-filled inquiry flow</span>
            </div>
            <div className="p-2.5 rounded bg-cream-100/70 border border-ink-900/10 shadow-sm text-xs font-sans">
              <span className="font-semibold text-ink-900 block">Local SEO</span>
              <span className="text-[11px] text-ink-600">Google Schema & Maps</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
