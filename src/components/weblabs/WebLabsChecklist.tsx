import { CheckCircle2, HelpCircle, ArrowRight } from 'lucide-react';

export function WebLabsChecklist() {
  const inclusions = [
    {
      num: '01',
      title: 'Custom Responsive Design',
      detail: 'Tailored specifically for desktop, tablet, and mobile displays. No generic templates or cloned designs.',
    },
    {
      num: '02',
      title: 'Free SSL Certificate',
      detail: 'Automatic HTTPS padlock security installed, protecting visitor data and boosting Google search trust.',
    },
    {
      num: '03',
      title: 'Fast Cloud Edge Hosting',
      detail: 'Global cloud edge network deployment guaranteeing sub-second page loads anywhere in India and worldwide.',
    },
    {
      num: '04',
      title: 'Custom Domain Setup',
      detail: 'Full DNS setup and linking for your .in, .com, or existing domain with zero technical headaches.',
    },
    {
      num: '05',
      title: '1-Tap WhatsApp Integration',
      detail: 'Direct chat button with a customized enquiry message so customers can order or inquire in one tap.',
    },
    {
      num: '06',
      title: 'Google Maps Directions Embed',
      detail: 'Interactive location map and 1-click turn-by-turn navigation so customers find your storefront easily.',
    },
    {
      num: '07',
      title: 'On-Page SEO Essentials',
      detail: 'Proper page titles, meta descriptions, image alt tags, and social media preview cards configured.',
    },
    {
      num: '08',
      title: 'Google Search Console Indexing',
      detail: 'Automated XML sitemap submitted directly to Google so your business gets crawled and indexed faster.',
    },
    {
      num: '09',
      title: 'Privacy Visitor Analytics',
      detail: 'Lightweight traffic dashboard to see how many visitors view your site, their top pages, and search referrers.',
    },
    {
      num: '10',
      title: 'Direct Contact Form',
      detail: 'Clean enquiry form delivered straight to your email inbox, protected against spam bots and junk mail.',
    },
    {
      num: '11',
      title: '100% Code & Asset Ownership',
      detail: 'You own every file, image, and line of code. No proprietary platform lock-in, recurring builder fees, or hostage terms.',
    },
    {
      num: '12',
      title: '30 Days Post-Launch Support',
      detail: 'Complete peace of mind. Any post-launch bugs, layout adjustments, or text tweaks are handled promptly for free.',
    },
  ];

  return (
    <section id="checklist" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-[#e8dfc5] relative bg-[#f2ebd9]/40">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f2ebd9] border border-[#d9cdaa] text-xs font-semibold text-[#7c2d12] mb-4">
            <span>✦</span>
            <span>STANDARD INCLUSIONS</span>
            <span>✦</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1c1713] tracking-tight mb-4">
            What’s Included With Every Website
          </h2>
          <p className="text-base sm:text-lg text-[#554a3d] font-sans">
            No hidden add-ons or surprise fees. Every single website project built by WebLabs includes all 12 core technical essentials from day one.
          </p>
        </div>

        {/* 12-Item Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {inclusions.map((item) => (
            <div
              key={item.num}
              className="bg-[#f8f3e8] border border-[#e8dfc5] p-6 rounded-lg shadow-sm hover:border-[#c2410c]/40 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-semibold text-[#7c2d12] bg-[#f2ebd9] px-2 py-0.5 rounded border border-[#d9cdaa]">
                    Item {item.num}
                  </span>
                  <CheckCircle2 className="w-5 h-5 text-[#9a3412] group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#1c1713] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#554a3d] leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons and Pricing Transparency Banner */}
        <div className="bg-[#f8f3e8] border border-[#d9cdaa] rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-[#7c2d12] text-xs font-mono font-semibold uppercase tracking-wider">
                <HelpCircle className="w-4 h-4" />
                <span>Need Advanced Functionality?</span>
              </div>
              <h4 className="font-serif text-xl text-[#1c1713] font-semibold">
                E-Commerce, Booking Portals & Custom Integrations
              </h4>
              <p className="text-sm text-[#554a3d]">
                Need online Razorpay payments, automated booking calendars, or custom CRM syncing? Advanced features are quoted transparently based on your business workflow.
              </p>
              <div className="inline-flex items-center gap-2 mt-2 px-2.5 py-1 rounded bg-[#f2ebd9] border border-[#d9cdaa] text-xs font-mono text-[#554a3d]">
                <span className="font-semibold text-[#7c2d12]">Pricing Note:</span>
                <span>Custom add-on scope available via <span className="underline font-bold text-[#1c1713]">Get a quote</span> · [ADD: Specific add-on pricing tiers if applicable]</span>
              </div>
            </div>

            <div className="w-full md:w-auto flex-shrink-0">
              <a
                href="#concept"
                className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3.5 bg-[#1c1713] text-[#f8f3e8] hover:bg-[#c2410c] text-sm font-semibold rounded-md transition-colors shadow-sm"
              >
                <span>Request Free Concept</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
