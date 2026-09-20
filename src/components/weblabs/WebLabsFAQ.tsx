import { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight, MessageSquare } from 'lucide-react';

export function WebLabsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How much does a complete website cost?',
      a: 'Because every business has different needs (a single-page salon menu vs. a multi-branch doctor clinic), pricing is transparently quoted based on exact scope rather than arbitrary packages. Standard business websites start at a fair, one-time investment with zero hidden surprises. [ADD: Starting price, e.g. Starting from ₹X,XXX or "Get a quote"].',
      tag: 'Pricing & Scope',
    },
    {
      q: 'Who owns the domain name and code once launched?',
      a: 'You own 100% of everything. Your domain name is registered under your business name, and all website source code and design assets belong entirely to you. You are never locked into proprietary platforms or held hostage by recurring agency fees.',
      tag: 'Full Ownership',
    },
    {
      q: 'How long does it take from first talk to live launch?',
      a: 'A typical business website takes between 5 to 10 business days from discovery to launch. We start with a Free Homepage Concept in 48 hours, followed by design revisions and mobile-optimized development.',
      tag: 'Timelines',
    },
    {
      q: "What if I don't have high-resolution photos or written copy?",
      a: "That is completely fine and very common. We can pull existing details from your Google Business profile, Instagram page, or existing brochures. We also provide simple interview-style questionnaires to write clean, professional text for you.",
      tag: 'Content & Photos',
    },
    {
      q: 'Are there mandatory recurring monthly fees?',
      a: 'No. There are no compulsory monthly retainers. Your essential ongoing costs are standard domain registration and edge cloud hosting (typically paid annually directly to providers with zero markup). For ongoing content updates or feature additions, we offer optional on-demand support: [ADD: Maintenance terms, e.g. ₹XXX/month or on-demand].',
      tag: 'Ongoing Costs',
    },
    {
      q: 'Can customers order or book appointments via WhatsApp?',
      a: 'Yes, absolutely. WhatsApp is the primary communication channel for Indian customers. We build customized 1-tap WhatsApp buttons with pre-filled messages (e.g. "Hi, I would like to book a table for 4" or "Hi, I have an inquiry about orthodontic aligners") directly from each page.',
      tag: 'WhatsApp Integration',
    },
    {
      q: 'Will my website show up on Google Search and Maps?',
      a: 'Yes. Every website includes foundational on-page local SEO, title and description meta tags, mobile schema markup, and direct sitemap submission to Google Search Console so search engines can crawl and index your pages quickly.',
      tag: 'Google SEO',
    },
    {
      q: 'What happens if I need bug fixes or tweaks after launch?',
      a: 'Every project comes with 30 days of included post-launch warranty and support. If you notice any typographical error, responsive layout quirk, or want a slight adjustment, it will be handled promptly at no extra charge.',
      tag: 'Support & Warranty',
    },
  ];

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-[#e8dfc5] relative bg-[#f2ebd9]/40">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f2ebd9] border border-[#d9cdaa] text-xs font-semibold text-[#7c2d12] mb-4">
            <span>✦</span>
            <span>CLEAR & HONEST ANSWERS</span>
            <span>✦</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1c1713] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-[#554a3d] font-sans">
            Straightforward answers to the most common questions Indian business owners ask before building a website.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#f8f3e8] border border-[#e8dfc5] rounded-lg overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-[#f2ebd9]/40 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#f2ebd9] border border-[#d9cdaa] text-[#7c2d12] font-semibold hidden sm:inline-block">
                      {faq.tag}
                    </span>
                    <span className="font-serif text-base sm:text-lg font-semibold text-[#1c1713]">
                      {faq.q}
                    </span>
                  </div>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#1c1713] text-[#f8f3e8]' : 'bg-[#f2ebd9] text-[#1c1713]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-sm sm:text-base text-[#554a3d] font-sans leading-relaxed border-t border-[#f2ebd9]">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have another question? */}
        <div className="mt-12 text-center p-6 bg-[#f8f3e8] border border-[#d9cdaa] rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-serif text-base sm:text-lg font-semibold text-[#1c1713]">
              Have a specific question about your business?
            </h4>
            <p className="text-xs sm:text-sm text-[#554a3d]">
              Chat directly with me on WhatsApp for immediate advice without sales pressure.
            </p>
          </div>
          <a
            href="https://wa.me/919021509565?text=Hello!%20I%20have%20a%20question%20about%20building%20a%20website%20for%20my%20business."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1c1713] text-[#f8f3e8] hover:bg-[#c2410c] text-xs sm:text-sm font-semibold rounded-md transition-colors flex-shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp: +91-9021509565</span>
          </a>
        </div>
      </div>
    </section>
  );
}
