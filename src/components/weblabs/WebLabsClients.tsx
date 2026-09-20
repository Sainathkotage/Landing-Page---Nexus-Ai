import { useState } from 'react';
import { Utensils, Cake, Scissors, Dumbbell, Stethoscope, GraduationCap, Building2, Palette, Hotel, Store, CheckCircle2, ArrowRight, MessageSquare, MapPin } from 'lucide-react';

export function WebLabsClients() {
  const categories = [
    {
      id: 'restaurants',
      name: 'Restaurants & Cafes',
      icon: Utensils,
      description: 'Turn hungry local diners searching online into evening tables and direct WhatsApp delivery orders.',
      features: [
        'Interactive digital food & drink menu with high-res food photos',
        'Google Maps location embed with valet and landmark directions',
        '1-Tap WhatsApp table reservation and takeaway ordering',
        'Clean photo gallery showcasing dining ambiance & signature dishes',
      ],
      mockupHeadline: 'Wood-Fired Pizza & Specialty Espresso Lounge',
      mockupHighlight: 'Menu • Timings • Direct WhatsApp Booking',
    },
    {
      id: 'bakeries',
      name: 'Bakeries & Cake Shops',
      icon: Cake,
      description: 'Showcase artisanal bakes, daily fresh loaves, and capture custom celebratory cake orders with zero phone confusion.',
      features: [
        'Daily fresh bread, cake, and dessert catalog with flavor descriptions',
        'Custom birthday & anniversary cake enquiry form with size/flavor options',
        'Direct WhatsApp chat for urgent custom cake requests',
        'Store pickup hours, delivery radius, and allergen indicators',
      ],
      mockupHeadline: 'Handcrafted Birthday Cakes & Artisan Sourdough',
      mockupHighlight: 'Pre-Order Custom Cakes 24h Ahead',
    },
    {
      id: 'salons',
      name: 'Salons & Spas',
      icon: Scissors,
      description: 'Display transparent rate cards and stylist qualifications so new clients can book beauty appointments with confidence.',
      features: [
        'Categorized service menus with transparent pricing & duration',
        'Stylist / therapist credentials and portfolio work galleries',
        'Simple booking inquiry form for bridal & grooming packages',
        '1-Tap WhatsApp consultation button for instant slot inquiries',
      ],
      mockupHeadline: 'Bespoke Hair Sculpting & Organic Skin Therapies',
      mockupHighlight: 'View Rate Card • WhatsApp Stylist Booking',
    },
    {
      id: 'gyms',
      name: 'Gyms & Fitness Centers',
      icon: Dumbbell,
      description: 'Drive high-intent local fitness seekers to claim 1-day trial passes and explore workout facilities.',
      features: [
        'Facility tour with equipment breakdown (weights, cardio, functional)',
        'Weekly group class schedule grid (Zumba, CrossFit, Yoga)',
        'Membership tiers with transparent benefits and pricing',
        '1-Day free trial pass claim form with instant WhatsApp confirmation',
      ],
      mockupHeadline: 'Strength, Functional Conditioning & Olympic Lifting',
      mockupHighlight: 'Claim 1-Day Trial Pass • View Membership Tiers',
    },
    {
      id: 'clinics',
      name: 'Clinics & Healthcare',
      icon: Stethoscope,
      description: 'Establish deep patient trust with verified doctor degrees, clinic hours, and clear appointment booking.',
      features: [
        'Practitioner qualifications, degrees, and specialty experience',
        'Detailed treatment overviews explaining painless procedures',
        'Clinic working hours, landmark directions, and emergency contacts',
        'Simple appointment request form connected directly to reception',
      ],
      mockupHeadline: 'Family Dental Care & Advanced Cosmetic Dentistry',
      mockupHighlight: 'MDS Specialist • Sterilization Protocol • Book Slot',
    },
    {
      id: 'coaching',
      name: 'Coaching & Institutes',
      icon: GraduationCap,
      description: 'Help parents and students explore courses, batch schedules, and faculty credentials without repetitive phone inquiries.',
      features: [
        'Course catalog categorized by grades, competitive exams, or skills',
        'Upcoming batch schedules, timings, and faculty academic profiles',
        'Syllabus overview and study material sample previews',
        'Direct admission inquiry form and WhatsApp helpline link',
      ],
      mockupHeadline: 'IIT-JEE & NEET Foundation Academy',
      mockupHighlight: 'New Batches Starting • Request Syllabus PDF',
    },
    {
      id: 'real-estate',
      name: 'Real Estate Agents',
      icon: Building2,
      description: 'Showcase premier residential and commercial properties with verified RERA documentation and site visit booking.',
      features: [
        'Curated property listings with floor plans, prices, and amenities',
        'Verified RERA numbers and developer background credentials',
        'Neighborhood overview with nearby schools, metro, and hospitals',
        '1-Tap WhatsApp site tour and brochure download request',
      ],
      mockupHeadline: 'Luxury 2 & 3 BHK Living • RERA Approved',
      mockupHighlight: 'Download Floor Plans • Book Private Site Visit',
    },
    {
      id: 'interior',
      name: 'Interior Designers',
      icon: Palette,
      description: 'Showcase real completed residential and commercial spaces with aesthetic photography and project timelines.',
      features: [
        'Filterable portfolio gallery (Living Rooms, Modular Kitchens, Offices)',
        'Clear design process explanation (Consultation -> 3D Render -> Handover)',
        'Estimated project budgets and scope guidelines',
        'Design consultation booking form with floor plan upload',
      ],
      mockupHeadline: 'Contemporary Residential & Commercial Spaces',
      mockupHighlight: 'Explore Portfolios • Schedule Design Sync',
    },
    {
      id: 'hotels',
      name: 'Boutique Hotels & Stays',
      icon: Hotel,
      description: 'Save substantial OTA commissions by encouraging guests to book direct rooms, banquets, and corporate retreats.',
      features: [
        'High-resolution room photo galleries and amenities breakdown',
        'Banquet & event hall capacity chart for weddings & conferences',
        'Nearby local attractions and airport/station transfer details',
        'Direct reservation enquiry form saving guest booking commissions',
      ],
      mockupHeadline: 'Heritage Hospitality & Event Banquets',
      mockupHighlight: 'Direct Booking Advantage • Banquet Inquiries',
    },
    {
      id: 'retailers',
      name: 'Local Retailers & Services',
      icon: Store,
      description: 'Give nearby customers an authoritative place to verify products, check store opening hours, and call your shop.',
      features: [
        'Featured product catalogue with categories and price ranges',
        'Verified store operating hours, holiday calendar, and address',
        'Click-to-call telephone link and Google Maps driving directions',
        '1-Tap WhatsApp stock availability enquiry button',
      ],
      mockupHeadline: 'Premium Hardware & Architectural Fittings',
      mockupHighlight: 'Check In-Stock Items • WhatsApp Store Helpline',
    },
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const scrollToConcept = () => {
    const el = document.getElementById('free-concept');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="clients" className="py-20 lg:py-28 paper-texture border-t border-ink-900/10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="vintage-divider text-xs font-semibold uppercase tracking-[0.3em] mb-4 text-ink-500 font-sans">
            <span className="flourish text-base">✦</span>
            <span className="mx-3">Who I Build For</span>
            <span className="flourish text-base">✦</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink-900 leading-tight">
            Tailored for your <span class="italic font-normal">specific</span> industry.
          </h2>

          <p className="text-base sm:text-lg text-ink-700 font-sans leading-relaxed">
            I do not use generic one-size-fits-all designs. A clinic needs doctor degrees and appointments; a cafe needs a readable menu and WhatsApp table bookings. Here are the business types I build for:
          </p>
          <div className="text-[11px] font-mono text-ink-500 uppercase tracking-wider">
            (Presented as who I build for • Real tailored feature blueprints)
          </div>
        </div>

        {/* Category Pills Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory.id === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-2 rounded-full text-xs font-sans font-medium transition-all inline-flex items-center gap-2 cursor-pointer border ${
                  isSelected
                    ? 'bg-ink-900 text-cream-50 border-ink-900 shadow-sm'
                    : 'bg-cream-100/70 text-ink-700 border-ink-900/10 hover:border-ink-900/30 hover:bg-cream-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Feature Card & Blueprint */}
        <div className="bg-cream-50/90 border border-ink-900/15 rounded-sm p-6 sm:p-10 shadow-lg vintage-border grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Category Features */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-accent-600 uppercase tracking-widest mb-2">
                <span>Industry Blueprint</span>
                <span>•</span>
                <span>{activeCategory.name}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-ink-900">
                {activeCategory.mockupHeadline}
              </h3>
              <p className="text-xs sm:text-sm text-ink-600 font-sans leading-relaxed mt-2">
                {activeCategory.description}
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono font-semibold uppercase text-ink-900 tracking-wider">
                Key Features Included:
              </div>
              {activeCategory.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-800 font-sans">
                  <CheckCircle2 className="w-4 h-4 text-accent-600 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-ink-900/10 flex flex-wrap items-center gap-4">
              <button
                onClick={scrollToConcept}
                className="px-6 py-2.5 rounded-full bg-ink-900 hover:bg-accent-600 text-cream-50 font-sans text-xs font-semibold uppercase tracking-wider transition-all inline-flex items-center gap-1.5 cursor-pointer border-0"
              >
                <span>Request {activeCategory.name} Concept</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <span className="text-xs text-ink-500 font-sans">
                Free 48h Mockup • Zero Commitment
              </span>
            </div>
          </div>

          {/* Right: Abstract Code UI Mockup */}
          <div className="lg:col-span-5 bg-cream-100/70 border border-ink-900/15 rounded p-5 space-y-3 vintage-border shadow-sm">
            <div className="flex items-center justify-between border-b border-ink-900/10 pb-2 text-[11px] font-mono text-ink-500">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                <span>yourbusiness.com</span>
              </span>
              <span className="text-emerald-700 font-semibold">SSL Secured</span>
            </div>

            <div className="space-y-2 pt-2">
              <div className="text-xs font-mono text-accent-600 uppercase font-semibold">
                Storefront Wireframe
              </div>
              <div className="font-serif text-lg font-semibold text-ink-900">
                {activeCategory.name}
              </div>
              <div className="text-xs text-ink-600 font-sans">
                {activeCategory.mockupHighlight}
              </div>
            </div>

            <div className="pt-3 border-t border-ink-900/10 space-y-2 text-xs font-sans">
              <div className="flex justify-between items-center text-ink-700">
                <span>Google Maps Location:</span>
                <span className="font-mono text-ink-900 font-medium">[ADD: Address]</span>
              </div>
              <div className="flex justify-between items-center text-ink-700">
                <span>Direct Contact:</span>
                <span className="text-emerald-700 font-semibold">1-Tap WhatsApp</span>
              </div>
              <div className="flex justify-between items-center text-ink-700">
                <span>Mobile Loading Speed:</span>
                <span className="text-emerald-700 font-semibold">&lt; 1 Second</span>
              </div>
            </div>

            <div className="mt-4 p-3 rounded bg-[#fdfbf7] border border-ink-900/10 text-center">
              <span className="text-[11px] font-serif italic text-ink-600 block">
                "Ready for your menu, price card, or service schedule."
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
