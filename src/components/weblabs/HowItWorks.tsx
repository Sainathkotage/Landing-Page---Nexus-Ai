import { Compass, Palette, Code2, Rocket, ArrowRight, CheckCircle2 } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      num: '01',
      tag: 'Discovery',
      icon: Compass,
      title: 'Tell Us About Your Business',
      desc: 'We learn about your business, customers, services, and goals. Share your current social handles, photos, price lists, or menu — no technical paperwork required.',
      deliverables: ['Goals & Audience Analysis', 'Content & Asset Organization', 'Competitive Review'],
    },
    {
      num: '02',
      tag: 'Design',
      icon: Palette,
      title: 'We Design Your Website',
      desc: 'We create a clean, modern design tailored to your business identity. Every section is architected to showcase your work and turn visitors into enquiries.',
      deliverables: ['Custom Mobile & Desktop Layouts', 'Brand-Matched Typography', 'Conversion-Focused Structure'],
    },
    {
      num: '03',
      tag: 'Build',
      icon: Code2,
      title: 'We Build Everything',
      desc: 'We code your site for blazing-fast mobile performance. We hook up 1-tap WhatsApp chat buttons, Google Maps, click-to-call, contact forms, and SEO basics.',
      deliverables: ['Ultra-Fast Clean Code', 'WhatsApp & Maps Integrations', 'Lead Capture & Security'],
    },
    {
      num: '04',
      tag: 'Launch',
      icon: Rocket,
      title: 'Go Live on Your Domain',
      desc: 'Your website goes online with your custom domain (e.g., yourname.com) and global cloud hosting configured. You receive a professional, permanent home on the web.',
      deliverables: ['Domain & SSL Security Setup', 'Google Search Console Verification', 'Full Handover & Support'],
    },
  ];

  const scrollToForm = () => {
    const form = document.getElementById('lead-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#07090e] relative overflow-hidden border-t border-white/5">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-300">
            <span>OUR 4-STEP PROCESS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            We turn your business into a proper online presence.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            From the first design to the final deployment, WebLabs handles the entire website. No DIY website builder headaches, no learning curve.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={s.num}
                className="relative bg-[#0c101d] border border-white/10 hover:border-blue-500/30 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 shadow-xl shadow-black/40 hover:-translate-y-1 group"
              >
                {/* Top Number & Tag */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-mono font-extrabold text-blue-500/80 group-hover:text-blue-400 transition-colors">
                      {s.num}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2.5">
                    {s.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-6">
                    {s.desc}
                  </p>
                </div>

                {/* Deliverables list */}
                <div className="pt-4 border-t border-white/10 space-y-1.5">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                    Deliverables:
                  </div>
                  {s.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-1.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action bar */}
        <div className="mt-14 text-center">
          <button
            onClick={scrollToForm}
            className="px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-2 cursor-pointer font-sans"
          >
            <span>Start Your Website</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
