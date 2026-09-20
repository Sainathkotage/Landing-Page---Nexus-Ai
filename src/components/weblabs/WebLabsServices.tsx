import { CheckCircle2, ArrowRight, MessageSquare } from 'lucide-react';

export function WebLabsServices() {
  const serviceCards = [
    {
      num: '01',
      title: 'Bespoke Architecture & Design',
      description:
        'Custom layouts crafted specifically around your exact brand character, menu or catalog depth, and customer expectations. No generic templates.',
      deliverables: [
        'Custom desktop, tablet, and mobile layouts',
        'Story, catalog, and conversion pages',
        'Editorial visual hierarchy for immediate trust',
      ],
    },
    {
      num: '02',
      title: 'Hand-Coded Performance',
      description:
        'Over 78% of local Indian searches happen on smartphones. Every page is hand-coded to load in under 600ms with zero bloated third-party plugins.',
      deliverables: [
        '100% Mobile-first responsive codebase',
        'Cross-browser tested (Safari, Chrome, Firefox)',
        'Ultra-lightweight assets and clean CSS',
      ],
    },
    {
      num: '03',
      title: 'Domain, Hosting & SSL Setup',
      description:
        'Complete end-to-end infrastructure deployment. Your website is secured with HTTPS, fast globally, and configured on your custom domain.',
      deliverables: [
        'Custom domain setup (.com, .in, .co.in)',
        'Automated SSL security certificate',
        'Global edge CDN deployment with 99.9% uptime',
      ],
    },
    {
      num: '04',
      title: 'WhatsApp & Direct Conversions',
      description:
        'Frictionless inquiry pathways that route high-intent visitors directly to your WhatsApp or phone dialer without intermediate forms.',
      deliverables: [
        '1-Tap WhatsApp chat with pre-filled inquiries',
        'Direct click-to-call mobile phone link',
        'Clean booking or reservation inquiry forms',
      ],
    },
    {
      num: '05',
      title: 'Google Maps & Local SEO',
      description:
        'Ensure local customers searching nearby find your store or studio immediately on Google Search and Google Maps.',
      deliverables: [
        'Interactive Google Maps directions routing',
        'Search Engine Optimization (structured schema)',
        'Submission to Google Search Console for indexing',
      ],
    },
    {
      num: '06',
      title: 'Launch & 100% Code Ownership',
      description:
        'Launch with full confidence. You receive 100% code and domain ownership with zero ongoing platform subscription lock-in.',
      deliverables: [
        'Full domain and repository handover',
        'Privacy-respecting analytics setup',
        '30 days of included post-launch technical support',
      ],
    },
  ];

  return (
    <section id="services" className="py-24 sm:py-36 bg-[#F6F4EF] border-t border-black/[0.06] text-[#1A1918] font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/70 border border-black/[0.06] text-[11px] font-mono uppercase tracking-widest text-[#736E65] backdrop-blur-md">
            <span>04 · COMPLETE DELIVERABLES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-normal tracking-tight text-[#1A1918] leading-tight">
            Everything required for a complete, launched website.
          </h2>

          <p className="text-sm sm:text-base text-[#63605A] font-sans leading-relaxed">
            We handle the entire journey from initial wireframe to live domain configuration, Google indexing, and WhatsApp integration.
          </p>
        </div>

        {/* Services Grid (Warm Stone / Frosted Glass Feel) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCards.map((card) => (
            <div
              key={card.num}
              className="bg-[#FAF8F5] border border-black/[0.06] rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 ease-editorial hover:-translate-y-[2px] hover:border-black/[0.12] hover:shadow-[0_20px_45px_rgba(30,25,20,0.06)]"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-xs font-medium text-[#1A1918] uppercase tracking-widest bg-[#EFECE4] px-2.5 py-0.5 rounded-full">
                    {card.num}
                  </span>
                  <span className="text-[10px] font-mono text-[#8C877D] uppercase tracking-wider">
                    Included
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1A1918] mb-3">
                  {card.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#63605A] font-sans leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              <div className="pt-5 border-t border-black/[0.06] space-y-2.5">
                {card.deliverables.map((d, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#4A4742] font-sans">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2D6A4F] shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Scoping Banner */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-[#FAF8F5] border border-black/[0.06] text-center max-w-2xl mx-auto space-y-5 shadow-[0_15px_40px_rgba(30,25,20,0.04)]">
          <div className="font-serif text-xl sm:text-2xl font-normal text-[#1A1918]">
            Transparent Scoping · Zero Hidden Costs
          </div>
          <p className="text-xs sm:text-sm text-[#63605A] font-sans leading-relaxed">
            Every business has different requirements — some need a focused 1-page digital presence, while others require extensive menu catalogs or booking workflows. I provide upfront, fixed quotes scoped specifically to your project.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/919021509565?text=Hello!%20I%20would%20like%20to%20get%20a%20quote%20for%20a%20website%20with%20WebLabs."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1A1918] hover:bg-[#2C2A28] text-[#F6F4EF] text-xs sm:text-sm font-medium rounded-full transition-all duration-200 ease-editorial hover:-translate-y-[1px] shadow-xs active:translate-y-0"
            >
              <MessageSquare className="w-4 h-4 text-[#2D6A4F]" />
              <span>Request Fixed Quote on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="text-[11px] font-mono text-[#8C877D]">
            Direct freelance engineering · No sales reps · +91-9021509565
          </div>
        </div>

      </div>
    </section>
  );
}
