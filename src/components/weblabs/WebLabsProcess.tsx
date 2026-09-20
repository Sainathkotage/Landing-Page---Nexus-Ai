import { CheckCircle2 } from 'lucide-react';

export function WebLabsProcess() {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      duration: 'Day 1–2',
      summary: 'Understanding your business, target audience, and key offerings.',
      description:
        'We have an honest, straightforward conversation about your business. You share your existing social links, price list, menu, photos, and preferred color tones. No complicated technical jargon or paperwork.',
      deliverables: ['Goals alignment', 'Content & photo intake', 'Structure outline'],
    },
    {
      num: '02',
      title: 'Design',
      duration: 'Day 3–4',
      summary: 'Crafting a bespoke, mobile-first design mockup.',
      description:
        'I design a custom visual layout of your homepage and key pages tailored to your brand. You review the design mockup on your own phone or computer before any coding begins, ensuring you love the look.',
      deliverables: ['Custom mobile mockup', 'Typography & color system', 'Your feedback & revisions'],
    },
    {
      num: '03',
      title: 'Build',
      duration: 'Day 5–7',
      summary: 'Hand-coding fast, responsive web pages and interactive flows.',
      description:
        'I code your website for blazing speed, mobile accessibility, and clean structure. I integrate 1-tap WhatsApp chat buttons, Google Maps location embeds, click-to-call, and inquiry forms.',
      deliverables: ['Clean semantic code', 'WhatsApp & Maps hookup', 'Sub-second speed optimization'],
    },
    {
      num: '04',
      title: 'Launch',
      duration: 'Day 8–9',
      summary: 'Connecting your domain, setting up SSL, and Google indexing.',
      description:
        'I configure your custom domain (.com or .in), attach SSL security encryption, deploy to global cloud edge hosting, and submit your sitemap to Google Search Console so your business appears in search results.',
      deliverables: ['Custom domain & SSL setup', 'Global edge CDN deployment', 'Google Search Console indexing'],
    },
    {
      num: '05',
      title: 'Support',
      duration: 'Ongoing',
      summary: 'Complete ownership handover and post-launch maintenance.',
      description:
        'You receive 100% ownership of your domain, website code, and assets. I provide 30 days of included post-launch bug fixes and support, plus optional simple monthly maintenance for future menu or price updates.',
      deliverables: ['100% Asset & code handover', '30 Days bug-fix warranty', 'Ongoing maintenance options'],
    },
  ];

  return (
    <section id="process" className="py-20 lg:py-28 paper-texture border-t border-ink-900/10 bg-cream-100/40">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="vintage-divider text-xs font-semibold uppercase tracking-[0.3em] mb-4 text-ink-500 font-sans">
            <span className="flourish text-base">✦</span>
            <span className="mx-3">Our 5-Step Process</span>
            <span className="flourish text-base">✦</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink-900 leading-tight">
            How we take your website from <span class="italic font-normal">idea</span> to <span class="italic font-normal">live reality</span>.
          </h2>

          <p className="text-base sm:text-lg text-ink-700 font-sans leading-relaxed">
            A clear, predictable workflow with zero guessing. You always know exactly what is happening, what to review, and when your website goes live.
          </p>
        </div>

        {/* 5-Step Progress Timeline */}
        <div className="space-y-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-cream-50/80 border border-ink-900/15 rounded-sm p-6 sm:p-8 shadow-sm hover:border-ink-900/30 transition-all vintage-border flex flex-col md:flex-row gap-6 md:items-start"
            >
              {/* Left Column: Number & Duration */}
              <div className="md:w-48 shrink-0 flex md:flex-col justify-between md:justify-start items-center md:items-start gap-2">
                <span className="font-mono text-xs font-bold text-accent-600 tracking-widest uppercase bg-accent-500/10 border border-accent-500/20 px-2 py-0.5 rounded">
                  Step {step.num}
                </span>
                <span className="font-mono text-xs text-ink-500">
                  Timeline: {step.duration}
                </span>
              </div>

              {/* Middle Column: Title & Body */}
              <div className="flex-1 space-y-2">
                <h3 className="font-serif text-2xl font-semibold text-ink-900">
                  {step.title}
                </h3>
                <div className="text-xs font-semibold text-accent-700 font-sans">
                  {step.summary}
                </div>
                <p className="text-xs sm:text-sm text-ink-600 font-sans leading-relaxed pt-1">
                  {step.description}
                </p>
              </div>

              {/* Right Column: Key Deliverables */}
              <div className="md:w-64 shrink-0 pt-4 md:pt-0 md:border-l border-ink-900/10 md:pl-6 space-y-2">
                <div className="text-[11px] font-mono uppercase text-ink-500 font-semibold">
                  What You Receive:
                </div>
                {step.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-ink-700 font-sans">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
