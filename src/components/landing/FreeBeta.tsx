import { Check, ArrowUpRight } from 'lucide-react';

const DASHBOARD_URL = import.meta.env.PUBLIC_DASHBOARD_URL || 'https://nexus-ai-ivory-eta.vercel.app';

export function FreeBeta() {
  const benefits = [
    'Full access to all beta features',
    'Early influence on product direction',
    'Direct access to the founding team',
    'Priority onboarding and support',
    'No credit card required'
  ];

  const handleStart = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `${DASHBOARD_URL}/?auth=signup`;
  };

  return (
    <section id="pricing" className="py-24 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative bg-cream-50 rounded-sm border border-ink-900/15 shadow-2xl p-8 md:p-12 vintage-border overflow-hidden">
          {/* Subtle warm wash */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent pointer-events-none" />

          <div className="relative z-10 text-center max-w-2xl mx-auto mb-10">
            <div className="vintage-divider text-xs font-semibold uppercase tracking-[0.3em] mb-6 text-ink-500 font-sans">
              <span className="flourish text-base">✦</span>
              <span className="mx-3">Beta Program</span>
              <span className="flourish text-base">✦</span>
            </div>
            <h2 className="font-serif text-5xl font-medium text-ink-900 leading-[1.1] mb-6">
              Free for Our Beta Users
            </h2>
            <p className="text-sm text-ink-600 leading-relaxed font-sans">
              We're currently offering Nexus AI Beta free of charge to early adopters while we refine the platform and build the future of organizational intelligence.
            </p>
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center border-t border-ink-900/10 pt-10">
            {/* Left side: list of points */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-ink-800 font-sans">
                Early Adopter Benefits
              </h4>
              <ul className="space-y-3">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-ink-700 font-sans">
                    <div className="w-4 h-4 rounded-full bg-accent-500/10 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-accent-600" strokeWidth={3} />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side: large CTA box */}
            <div className="p-6 bg-cream-100 rounded-sm border border-ink-900/10 text-center">
              <div className="text-[10px] font-bold text-accent-600 uppercase tracking-widest mb-1 font-sans">
                Early Access
              </div>
              <div className="font-serif text-3xl font-medium text-ink-900 mb-2">
                $0 <span className="text-xs text-ink-500 font-sans font-normal">/ month</span>
              </div>
              <p className="text-xs text-ink-500 leading-relaxed mb-6 font-sans">
                Claim your workspace today. No contracts or credit card details required.
              </p>
              
              <button
                onClick={handleStart}
                className="group w-full py-3.5 bg-ink-900 hover:bg-accent-600 text-cream-100 text-xs font-semibold rounded-sm transition-all inline-flex items-center justify-center gap-2 font-sans cursor-pointer border-0 shadow-md"
              >
                Join the Beta
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
