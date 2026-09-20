import { useState } from 'react';
import { Utensils, Coffee, Scissors, Dumbbell, Hotel, GraduationCap, Stethoscope, Building2, Store, Briefcase, ArrowRight, MessageSquare, Shield, Clock, MapPin } from 'lucide-react';

export function WebsiteTypes() {
  const categories = [
    {
      id: 'restaurant',
      title: 'Restaurants & Dining',
      icon: Utensils,
      tagline: 'Menu → Location → Reviews → WhatsApp → Done.',
      desc: 'Showcase your complete food menu with high-res photos, opening hours, live Google ratings, and a 1-tap WhatsApp table booking button.',
      features: ['Digital Menu (No PDF download required)', 'Direct WhatsApp Reservation', 'Google Maps Location & Directions'],
      sampleName: 'Spice & Sizzle Bistro',
      sampleHero: 'Authentic Charcoal Grills & Biryanis',
      sampleMeta: '4.8 ★ (620+ Google Reviews) • Sitabuldi, Nagpur',
      sampleBadge: 'Restaurant & Dining',
      samplePrice: 'Avg Meal ₹350 / person',
    },
    {
      id: 'cafe',
      title: 'Cafes & Bakeries',
      icon: Coffee,
      tagline: 'Vibe → Brews → Desserts → Orders.',
      desc: 'Let customers experience your cafe atmosphere before they visit. Highlight specialty roasts, artisan pastries, Wi-Fi availability, and takeaway ordering.',
      features: ['Specialty Beverage & Bakery Menu', 'Ambience & Interior Gallery', 'Takeaway Pre-order on WhatsApp'],
      sampleName: 'The Bean Collective',
      sampleHero: 'Single Origin Roasts & Artisan Bakes',
      sampleMeta: '4.9 ★ (380+ Google Reviews) • Dharampeth, Nagpur',
      sampleBadge: 'Cafe & Roastery',
      samplePrice: 'Coffee from ₹160 • Free Fast Wi-Fi',
    },
    {
      id: 'salon',
      title: 'Salons, Spas & Barbers',
      icon: Scissors,
      tagline: 'Services → Stylists → Price List → Bookings.',
      desc: 'Clear, transparent service menus for haircuts, spa therapies, styling packages, with direct appointment scheduling so clients do not wait.',
      features: ['Categorized Treatment & Hair Rate Cards', 'Stylist & Portfolio Showcase', 'Instant Appointment Booking via WhatsApp'],
      sampleName: 'Velvet & Blade Studio',
      sampleHero: 'Luxury Hair & Botanical Spa Sanctuary',
      sampleMeta: '4.9 ★ (410+ Google Reviews) • Ramdaspeth, Nagpur',
      sampleBadge: 'Salon & Spa',
      samplePrice: 'Haircut & Styling from ₹450',
    },
    {
      id: 'gym',
      title: 'Gyms & Fitness Hubs',
      icon: Dumbbell,
      tagline: 'Equipment → Trainers → Plans → Free Trials.',
      desc: 'Turn fitness searchers into gym memberships. Feature your workout zones, trainer certifications, class timings, and a 1-day free trial form.',
      features: ['Equipment & Facility Tour', 'Trainer Bios & Transformations', '1-Day Free Trial Pass Form'],
      sampleName: 'IronForge Athletics',
      sampleHero: 'Strength, CrossFit & High-Intensity Conditioning',
      sampleMeta: '4.8 ★ (540+ Google Reviews) • Pratap Nagar, Nagpur',
      sampleBadge: 'Fitness Center',
      samplePrice: 'Monthly Memberships from ₹1,499',
    },
    {
      id: 'clinic',
      title: 'Clinics & Dental Care',
      icon: Stethoscope,
      tagline: 'Doctor Credentials → Specializations → Consultation.',
      desc: 'Build instant patient trust with doctor qualifications, clinic hygiene standards, specialization breakdowns, and quick appointment requests.',
      features: ['Doctor Profiles & Degrees', 'Patient Care Reviews & Testimonials', 'Simple Consultation Booking Request'],
      sampleName: 'Apex Dental & Maxillofacial Care',
      sampleHero: 'Painless Dentistry & Advanced Orthodontics',
      sampleMeta: '4.9 ★ (320+ Google Reviews) • Sadar, Nagpur',
      sampleBadge: 'Dental Clinic',
      samplePrice: 'Initial Consultation: ₹300',
    },
    {
      id: 'coaching',
      title: 'Coaching & Tuition Centers',
      icon: GraduationCap,
      tagline: 'Courses → Results → Faculty → Inquiries.',
      desc: 'Highlight student scorecards, batch timings, teacher profiles, and download links for syllabus brochures, with instant inquiry forms for parents.',
      features: ['Batch Schedules & Course Modules', 'Hall of Fame & Past Results', 'Direct Parent Inquiry Capture Form'],
      sampleName: 'Prism Academy of Science',
      sampleHero: 'Engineering & Medical Foundation Batches',
      sampleMeta: '4.8 ★ (290+ Google Reviews) • Wardha Road, Nagpur',
      sampleBadge: 'Coaching Institute',
      samplePrice: 'Admissions Open for 2026-27',
    },
    {
      id: 'hotel',
      title: 'Hotels & Guest Houses',
      icon: Hotel,
      tagline: 'Rooms → Amenities → Rates → Direct Inquiries.',
      desc: 'Avoid hefty OTA commission fees with a clean website showing your room categories, tariff cards, parking details, and direct inquiry buttons.',
      features: ['Room Photos & Bedding Details', 'Amenities & Conference Hall Info', 'Zero-Commission WhatsApp Booking'],
      sampleName: 'The Grand Heritage Suites',
      sampleHero: 'Executive Boutique Stays in the City Center',
      sampleMeta: '4.7 ★ (810+ Google Reviews) • Central Avenue, Nagpur',
      sampleBadge: 'Boutique Hotel',
      samplePrice: 'Deluxe Rooms from ₹2,200 / night',
    },
    {
      id: 'realestate',
      title: 'Real Estate & Interiors',
      icon: Building2,
      tagline: 'Projects → Floor Plans → Gallery → Site Visits.',
      desc: 'Showcase ready-to-move flats, plotted developments, or architectural portfolios with floor plans, site location maps, and site visit booking.',
      features: ['Interactive Project & Property Gallery', 'Floor Plans & Specification Lists', 'Schedule a Site Visit Form'],
      sampleName: 'Horizon Signature Spaces',
      sampleHero: '2 & 3 BHK Contemporary Gated Communities',
      sampleMeta: 'RERA Registered • Manish Nagar, Nagpur',
      sampleBadge: 'Real Estate Developer',
      samplePrice: 'Units Starting at ₹48 Lakhs',
    },
    {
      id: 'local',
      title: 'Local Retail & Furniture',
      icon: Store,
      tagline: 'Catalog → Showroom Tour → WhatsApp Inquiry.',
      desc: 'Bring your physical store catalog online so locals can browse your furniture, clothing, or electronics collections before visiting in person.',
      features: ['Product Catalog with Price Ranges', 'Showroom Location & Virtual Tour', 'Inquire for Stock Availability'],
      sampleName: 'TimberCraft Wood Works',
      sampleHero: 'Custom Teakwood Furniture & Home Decor',
      sampleMeta: '4.8 ★ (210+ Google Reviews) • Hingna Road, Nagpur',
      sampleBadge: 'Furniture Showroom',
      samplePrice: 'Made-to-Order Living Sets',
    },
    {
      id: 'professional',
      title: 'Professional Services',
      icon: Briefcase,
      tagline: 'Expertise → Case Studies → Client Consultations.',
      desc: 'For architects, chartered accountants, legal advisors, and consultants who need a serious, credible home to win high-ticket clients.',
      features: ['Practice Areas & Capability Deck', 'Client Case Studies & Testimonials', 'Direct Initial Consultation Booking'],
      sampleName: 'Nexus Advisors & Associates',
      sampleHero: 'Tax Strategy, Corporate Compliance & Audit',
      sampleMeta: 'Serving Businesses Since 2018 • Civil Lines',
      sampleBadge: 'Professional Firm',
      samplePrice: 'Schedule 30-min Strategy Call',
    },
  ];

  const [activeId, setActiveId] = useState('restaurant');
  const active = categories.find((c) => c.id === activeId) || categories[0];

  const handleSelectType = (typeName: string) => {
    const form = document.getElementById('lead-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Pre-fill business type if input exists
      const select = document.getElementById('business-type-select') as HTMLSelectElement;
      if (select) {
        select.value = typeName;
      }
    }
  };

  return (
    <section id="work" className="py-20 lg:py-28 bg-[#0a0e1c] relative border-t border-white/5 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-300">
            <span>WHAT WE BUILD</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Tailored websites for real business models.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            Every category has unique customer expectations. We don't use generic one-size-fits-all templates — we design for how your customers actually make buying decisions.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((c) => {
            const Icon = c.icon;
            const isSelected = c.id === activeId;
            return (
              <button
                key={c.id}
                onClick={() => setActiveId(c.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all inline-flex items-center gap-2 cursor-pointer font-sans ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-400/30 scale-105'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-slate-400'}`} />
                <span>{c.title}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Detail Showcase Card */}
        <div className="bg-[#0f1527] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-black/60 grid lg:grid-cols-12 gap-8 items-center">
          {/* Left: Category Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 inline-block">
                {active.tagline}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {active.title}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
              {active.desc}
            </p>

            {/* Feature Bullets */}
            <div className="space-y-2.5 pt-2">
              <div className="text-xs font-mono uppercase text-slate-400">Key Conversion Triggers:</div>
              {active.features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={() => handleSelectType(active.title)}
                className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all shadow-md shadow-blue-500/25 inline-flex items-center gap-2 cursor-pointer font-sans"
              >
                <span>Build a {active.title} Website</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Simulated Miniature Website Preview */}
          <div className="lg:col-span-6 bg-[#070a14] rounded-2xl border border-white/10 p-5 sm:p-6 shadow-inner space-y-4">
            {/* Mini Browser Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-slate-500 truncate max-w-[200px]">demo.{active.id}.aixentrix.com</span>
              <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">
                SSL Secured
              </span>
            </div>

            {/* Inner Mockup Content */}
            <div className="space-y-4 select-none">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-blue-400 uppercase tracking-wide block">
                    {active.sampleBadge}
                  </span>
                  <div className="text-lg font-bold text-white">{active.sampleName}</div>
                </div>
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Shield className="w-4 h-4 text-blue-400" />
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <div className="text-sm font-semibold text-slate-100">{active.sampleHero}</div>
                <div className="text-xs text-slate-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0" />
                  <span>{active.sampleMeta}</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-blue-950/40 border border-blue-500/20 text-xs">
                <span className="text-slate-300 font-mono">{active.samplePrice}</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <MessageSquare className="w-3.5 h-3.5" /> 1-Tap WhatsApp
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
