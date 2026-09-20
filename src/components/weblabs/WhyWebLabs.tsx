import { Check, X, Shield, ArrowRight, Target, Smartphone, Lock } from 'lucide-react';

export function WhyWebLabs() {
  const helpPillars = [
    {
      icon: Shield,
      step: '01',
      title: 'Establish Instant Market Credibility',
      description:
        'When potential customers look up your business, a fast, beautifully designed website with your custom domain, SSL certificate, and verified business address immediately establishes legitimacy over competitors who only have unverified social profiles.',
      benefit: 'Builds customer trust before the first phone call or store visit.',
    },
    {
      icon: Target,
      step: '02',
      title: 'Capture High-Intent Local Searches (SEO)',
      description:
        'Over 76% of customers searching for local services on mobile visit a business within 24 hours. We structure your site with Google LocalBusiness Schema, neighborhood geo-tags, and semantic search indexing so you rank when nearby customers are ready to buy.',
      benefit: 'Turns local Google searches directly into foot traffic and customer leads.',
    },
    {
      icon: Smartphone,
      step: '03',
      title: 'Frictionless 1-Tap Customer Conversion',
      description:
        'Traditional websites lose up to 80% of mobile users due to clunky forms. We engineer direct 1-tap WhatsApp booking buttons, click-to-call triggers, and interactive rate cards or menus that make reaching you completely effortless.',
      benefit: 'Eliminates friction so visitors become paying clients in seconds.',
    },
    {
      icon: Lock,
      step: '04',
      title: '100% Turnkey Delivery with Zero Tech Overhead',
      description:
        'You never have to touch DNS records, domain settings, server configurations, or broken WordPress plugins. We configure your domain, setup HTTPS encryption, deploy to global edge CDN networks, and handle ongoing maintenance.',
      benefit: 'You stay focused on running your business while we handle the technology.',
    },
  ];

  const whyChooseReasons = [
    {
      title: 'Engineered by an AI Software Company',
      description:
        'We are Aixentrix—an AI technology company. We build websites using the same rigorous software standards, ultra-clean code, and modern edge infrastructure that we use for complex enterprise platforms, not cheap pre-packaged templates.',
    },
    {
      title: 'Sub-Second Speed (< 0.8s Load Times)',
      description:
        'Every second of page delay costs up to 20% of conversions. Our lightweight, edge-rendered architecture loads in under 1 second on mobile networks, scoring 95+ Core Web Vitals on Google.',
    },
    {
      title: 'Tailored Directly to Your Business Model',
      description:
        'A clinic needs doctor qualifications and patient booking; a restaurant needs interactive menus and WhatsApp reservations; a salon needs service rate cards. We tailor every layout to how your customers actually buy.',
    },
    {
      title: 'Authentic Credibility — Zero Fake Reviews',
      description:
        'We refuse to fabricate fake reviews, artificial star ratings, or inflated vanity metrics. We build genuine digital authority through verified locations, official licensing, transparent pricing, and real customer inquiries.',
    },
    {
      title: 'Direct Engineering Partnership & Fixed Pricing',
      description:
        'No middleman salespeople, confusing hourly agency fees, or hostage hosting contracts. You collaborate directly with technical builders with upfront, transparent pricing and dedicated post-launch support.',
    },
  ];

  const comparisonRows = [
    {
      feature: 'Approach & Architecture',
      generic: 'Cookie-cutter templates loaded with slow, unoptimized scripts.',
      weblabs: 'Bespoke design engineered around your specific local customer habits.',
    },
    {
      feature: 'Mobile Usability',
      generic: 'Desktop layouts squeezed awkwardly onto phone screens.',
      weblabs: 'Designed mobile-first from day one with intuitive touch targets.',
    },
    {
      feature: 'Customer Conversion',
      generic: 'Passive brochures that do not prompt customer action.',
      weblabs: 'Integrated 1-tap WhatsApp chat, click-to-call, and direct inquiry forms.',
    },
    {
      feature: 'Speed & PageLoad',
      generic: 'Slow, bloated themes that take 4–8 seconds to load on mobile.',
      weblabs: 'Ultra-fast static edge delivery that loads in under 1 second.',
    },
    {
      feature: 'Turnkey Delivery',
      generic: 'You spend 40+ hours figuring out domain records, hosting, and DNS.',
      weblabs: 'We configure your domain, SSL security, hosting, and Google indexing.',
    },
    {
      feature: 'Ongoing Upkeep',
      generic: 'Abandoned after launch until something breaks or plugins fail.',
      weblabs: 'Reliable updates and optional maintenance packages as your business grows.',
    },
    {
      feature: 'Pricing & Trust',
      generic: 'Hidden recurring fees, surprise charges, and inflated promises.',
      weblabs: 'Clear, upfront quotes with zero fake reviews and authentic deliverables.',
    },
  ];

  const scrollToForm = () => {
    const form = document.getElementById('lead-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="why-weblabs" className="py-20 lg:py-28 bg-[#090d18] relative border-t border-white/5 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-300">
            <span>THE WEBLABS ADVANTAGE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            How We Help Businesses The Best
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            A website shouldn't just be an expense — it should be your highest-converting sales asset, answering customer questions 24/7 and building unwavering trust in your market.
          </p>
        </div>

        {/* 4 Pillars: How We Help Businesses The Best */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {helpPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.step}
                className="bg-[#0c101d] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl shadow-black/40 flex flex-col justify-between hover:border-blue-500/30 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-sm font-bold text-slate-400">{pillar.step}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-sans mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-medium text-emerald-400 font-sans">
                  <Check className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span>{pillar.benefit}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why We Are The One You Should Choose */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block">
              Direct & Uncompromising
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Why We Are The One You Should Choose
            </h3>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
              There are thousands of freelancers and generic website builders. Here is why serious businesses choose WebLabs by Aixentrix.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyChooseReasons.slice(0, 3).map((reason, idx) => (
              <div
                key={idx}
                className="bg-[#0b0e1a] border border-white/10 rounded-xl p-6 shadow-md hover:border-blue-500/30 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 font-mono text-xs font-bold">
                  0{idx + 1}
                </div>
                <h4 className="text-base font-bold text-white mb-2">{reason.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">{reason.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {whyChooseReasons.slice(3).map((reason, idx) => (
              <div
                key={idx}
                className="bg-[#0b0e1a] border border-white/10 rounded-xl p-6 shadow-md hover:border-blue-500/30 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 font-mono text-xs font-bold">
                  0{idx + 4}
                </div>
                <h4 className="text-base font-bold text-white mb-2">{reason.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table Card */}
        <div className="bg-[#0c101d] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-black/50 overflow-x-auto mb-16">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white">Side-by-Side Comparison</h3>
            <p className="text-xs text-slate-400 font-sans mt-1">
              How WebLabs compares against generic DIY website builders and outdated agencies.
            </p>
          </div>

          <table className="w-full text-left border-collapse min-w-[550px]">
            <thead>
              <tr className="border-b border-white/10 pb-4">
                <th className="py-3 px-4 text-xs font-mono uppercase text-slate-400 font-semibold w-1/3">
                  Criterion
                </th>
                <th className="py-3 px-4 text-xs font-mono uppercase text-slate-400 font-semibold w-1/3">
                  Generic Website / DIY Builder
                </th>
                <th className="py-3 px-4 text-xs font-mono uppercase text-blue-400 font-semibold w-1/3 bg-blue-500/5 rounded-t-xl">
                  WebLabs by Aixentrix
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-xs sm:text-sm font-sans">
              {comparisonRows.map((row) => (
                <tr key={row.feature} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-4 font-semibold text-white align-top">
                    {row.feature}
                  </td>
                  <td className="py-4 px-4 text-slate-400 align-top">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span>{row.generic}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-slate-200 bg-blue-500/5 align-top">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="font-medium text-white">{row.weblabs}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom CTA note */}
        <div className="text-center">
          <button
            onClick={scrollToForm}
            className="px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 inline-flex items-center gap-2 cursor-pointer font-sans"
          >
            <span>Discuss Your Project With WebLabs</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
