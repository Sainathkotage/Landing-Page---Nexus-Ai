import { ArrowRight, Smartphone, Shield, MessageSquare, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

export function PortfolioDemo() {
  const projects = [
    {
      title: 'Saffron & Sage Kitchen',
      category: 'Restaurant & Fine Dining',
      badge: 'Demo Concept',
      url: 'saffronandsage.demo.aixentrix.com',
      description:
        'A warm, editorial digital storefront for a modern North Indian dining lounge with an interactive chef menu, seasonal specials, and a 1-tap WhatsApp table reservation flow.',
      desktopPreview: {
        headline: 'Authentic Charcoal Tandoor & Heritage Recipes',
        meta: 'Verified Location • Dine-in & Valet • Sitabuldi, Nagpur',
        highlight: 'Dal Bukhara Slow-Cooked 24h • ₹380',
        cta: 'Book Table on WhatsApp',
      },
      mobileFeatures: ['Instant Food Catalog', 'Location & Valet Directions', 'Direct WhatsApp Table Call'],
    },
    {
      title: 'Lumina Aesthetics & Hair',
      category: 'Luxury Salon & Spa',
      badge: 'Demo Concept',
      url: 'luminaaesthetics.demo.aixentrix.com',
      description:
        'A clean, minimalist beauty studio site featuring transparent service rate cards, stylist portfolios, bridal package inquiries, and instant appointment booking.',
      desktopPreview: {
        headline: 'Bespoke Hair Sculpting & Organic Skin Therapies',
        meta: 'Certified Stylists • By Appointment • Dharampeth, Nagpur',
        highlight: 'Balayage Color & Keratin Infusion • ₹3,200',
        cta: 'Book Stylist Appointment',
      },
      mobileFeatures: ['Categorized Rate Cards', 'Stylist Work Gallery', 'WhatsApp Consultations'],
    },
    {
      title: 'Apex Performance Hub',
      category: 'Gym & Functional Fitness',
      badge: 'Demo Concept',
      url: 'apexperformance.demo.aixentrix.com',
      description:
        'A high-energy fitness studio website designed to drive in-person trial passes with equipment tours, trainer credentials, and membership pricing tiers.',
      desktopPreview: {
        headline: 'Strength, Olympic Lifting & Group Conditioning',
        meta: 'Certified Strength Coaches • Trial Access • Pratap Nagar, Nagpur',
        highlight: 'Unlimited Monthly All-Access • ₹1,699/mo',
        cta: 'Claim 1-Day Free Trial Pass',
      },
      mobileFeatures: ['Virtual Gym Floor Tour', 'Class Schedule Grid', 'Instant Free Trial Form'],
    },
    {
      title: 'Dr. Mehta Orthodontic & Dental Care',
      category: 'Healthcare & Dental Clinic',
      badge: 'Demo Concept',
      url: 'mehtadental.demo.aixentrix.com',
      description:
        'A reassuring, patient-centric clinic portal that builds trust with doctor degrees, patient case reviews, sterilization standards, and emergency consultation contact.',
      desktopPreview: {
        headline: 'Invisible Aligners & Advanced Cosmetic Dentistry',
        meta: 'MDS Orthodontic Specialist • Sterilization Protocol • Ramdaspeth, Nagpur',
        highlight: 'Digital Smile Scan & Consultation • ₹400',
        cta: 'Request Dental Appointment',
      },
      mobileFeatures: ['Doctor Credentials Verification', 'Painless Treatment Explanations', 'WhatsApp Emergency Slot'],
    },
    {
      title: 'The Heritage Manor Suites',
      category: 'Boutique Hotel & Banquets',
      badge: 'Demo Concept',
      url: 'heritagemanor.demo.aixentrix.com',
      description:
        'A rich hospitality website that saves 20% on booking fees with high-definition room suites, banquet hall inquiries, and direct guest communication.',
      desktopPreview: {
        headline: 'Colonial Elegance & Modern Luxury Hospitality',
        meta: 'Heritage Architecture • Direct Booking Guaranteed • Civil Lines, Nagpur',
        highlight: 'Executive Royal Suite • ₹3,400 / night',
        cta: 'Inquire for Direct Booking',
      },
      mobileFeatures: ['Room Photo Gallery', 'Banquet Event Inquiry', 'Direct WhatsApp Reservation'],
    },
    {
      title: 'Skyline Urban Living',
      category: 'Real Estate & Architecture',
      badge: 'Demo Concept',
      url: 'skylineurban.demo.aixentrix.com',
      description:
        'An architectural project showcase built to capture serious homebuyer leads with interactive floor layouts, construction updates, and site visit booking.',
      desktopPreview: {
        headline: 'Ultra-Luxury 3 & 4 BHK Sky Villas with Private Balconies',
        meta: 'RERA Approved • Wardha Road Highway, Nagpur',
        highlight: 'Possession Q4 2026 • From ₹72 Lakhs',
        cta: 'Schedule Private Site Tour',
      },
      mobileFeatures: ['Interactive Floor Plan Viewer', 'Brochure Download on WhatsApp', 'Schedule Site Visit Form'],
    },
  ];

  const handleWantThis = (categoryName: string) => {
    const form = document.getElementById('lead-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const select = document.getElementById('business-type-select') as HTMLSelectElement;
      if (select) {
        select.value = categoryName;
      }
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#07090e] relative border-t border-white/5 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-300">
            <span>PORTFOLIO CONCEPTS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            See what your website could look like.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            Explore these concept architectures designed for real business types. Every website we build is customized from scratch for your brand, services, and local audience.
          </p>
        </div>

        {/* 6 Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-[#0c101d] border border-white/10 hover:border-blue-500/30 rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 shadow-xl shadow-black/40 hover:-translate-y-1 group"
            >
              <div className="space-y-4">
                {/* Header tag & Demo concept badge */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-blue-400 uppercase tracking-wide">
                    {p.category}
                  </span>
                  <span className="text-[9px] font-mono uppercase tracking-wider text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    {p.badge}
                  </span>
                </div>

                {/* Simulated Desktop Preview Card */}
                <div className="bg-[#070a14] rounded-xl border border-white/10 p-3.5 space-y-2 select-none">
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pb-1.5 border-b border-white/5">
                    <span className="truncate max-w-[160px] text-slate-300">{p.url}</span>
                    <span className="text-emerald-400">99 Speed</span>
                  </div>
                  <div className="text-xs font-bold text-white leading-snug">
                    {p.desktopPreview.headline}
                  </div>
                  <div className="text-[11px] text-slate-300 flex items-center gap-1">
                    <Shield className="w-3 h-3 text-blue-400 shrink-0" />
                    <span className="truncate">{p.desktopPreview.meta}</span>
                  </div>
                  <div className="p-2 rounded bg-white/5 border border-white/5 flex items-center justify-between text-[11px]">
                    <span className="text-blue-300 font-mono text-[10px]">{p.desktopPreview.highlight}</span>
                    <span className="text-emerald-400 font-medium text-[10px]">WhatsApp Ready</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {p.description}
                  </p>
                </div>

                {/* Mobile features badge list */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {p.mobileFeatures.map((feat) => (
                    <span
                      key={feat}
                      className="text-[10px] text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/5"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-4 border-t border-white/10">
                <button
                  onClick={() => handleWantThis(p.category)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-200 bg-white/5 hover:bg-blue-600 hover:text-white border border-white/10 hover:border-blue-500 transition-all flex items-center justify-center gap-2 cursor-pointer font-sans"
                >
                  <span>Want one for your business?</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
