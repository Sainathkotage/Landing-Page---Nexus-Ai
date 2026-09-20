import { Layout, Smartphone, MessageSquare, MapPin, Mail, Search, Zap, Globe, BarChart3 } from 'lucide-react';

export function FeaturesGrid() {
  const features = [
    {
      icon: Layout,
      title: 'Custom Design',
      desc: 'Crafted around your business personality, service menu, and customer habits — never forced into a generic WordPress or Wix template.',
      badge: 'Tailored',
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Experience',
      desc: 'More than 75% of local searches happen on mobile phones. We guarantee butter-smooth scrolling, readable menus, and instant touch responses.',
      badge: 'Essential',
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Integration',
      desc: 'Allow visitors to trigger pre-filled WhatsApp conversations with 1-tap — for orders, table bookings, quote requests, and fast responses.',
      badge: 'Conversion',
    },
    {
      icon: MapPin,
      title: 'Google Maps & Location',
      desc: 'Embed accurate directions, landmark callouts, and opening hours so new customers can navigate straight to your physical door.',
      badge: 'Foot Traffic',
    },
    {
      icon: Mail,
      title: 'Spam-Protected Contact Forms',
      desc: 'Capture customer requirements and quotation requests directly into your email or phone inbox with zero spam bot interruptions.',
      badge: 'Inquiries',
    },
    {
      icon: Search,
      title: 'Search Engine Fundamentals',
      desc: 'Structured business schema (LocalBusiness JSON-LD), Open Graph social previews, and semantic markup so Google understands your services.',
      badge: 'Visibility',
    },
    {
      icon: Zap,
      title: 'Sub-Second Performance',
      desc: 'Zero bloated plugins or heavy frameworks. Static edge delivery ensures near-instant page loads even on spotty 4G mobile connections.',
      badge: 'Speed',
    },
    {
      icon: Globe,
      title: 'Domain & Cloud Hosting',
      desc: 'We assist with custom domain registration (.com, .in), SSL encryption certificates, and global edge hosting setup for zero downtime.',
      badge: 'Turnkey',
    },
    {
      icon: BarChart3,
      title: 'Privacy-Friendly Analytics',
      desc: 'Understand how many people visit your website, what pages they view, and which buttons they click without intrusive cookie banners.',
      badge: 'Insights',
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#07090e] relative border-t border-white/5 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-300">
            <span>TURNKEY DELIVERABLES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Everything your business needs to get online.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            We handle the design, code, hosting, and integrations so you can focus on running your business.
          </p>
        </div>

        {/* 9 Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="bg-[#0c101d] border border-white/10 hover:border-blue-500/30 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-lg shadow-black/40 hover:-translate-y-1 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                      {f.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {f.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
