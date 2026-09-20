import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function FAQSection() {
  const faqs = [
    {
      q: 'How much does a website cost?',
      a: 'Pricing depends directly on your business needs, the number of pages, custom interactive features (like digital menus or booking systems), and integrations. A focused, high-converting digital storefront for a local restaurant, clinic, or salon typically ranges between ₹12,000 to ₹35,000. We provide transparent, fixed quotes before starting any work so there are never hidden surprises.',
    },
    {
      q: 'How long does it take to launch?',
      a: 'Most standard local business websites are completed and launched within 7 to 14 business days. The timeline largely depends on how quickly you can share your initial details (such as your photos, price list, or menu). Once we have your core information, our development process is fast and efficient.',
    },
    {
      q: 'Do I need to buy a domain myself?',
      a: 'You do not have to worry about the technical details. If you already own a domain (like yourbusiness.com), we can simply connect to it. If you do not have one yet, WebLabs will guide you in choosing and registering the best available domain name.',
    },
    {
      q: 'Do you provide hosting and SSL security?',
      a: 'Yes. We configure modern cloud hosting on global edge networks (such as Vercel, Cloudflare, or AWS) along with automated SSL certificates (the green padlock in browser bars). This ensures 99.9% uptime, bank-grade encryption, and sub-second load times worldwide.',
    },
    {
      q: 'Can you redesign my existing website?',
      a: 'Yes. If your current website is outdated, slow, or looks broken on mobile phones, we can completely rebuild it from scratch. We preserve your existing domain and Google reputation while giving your business a modern, high-converting visual identity.',
    },
    {
      q: 'Can you integrate WhatsApp for orders and bookings?',
      a: 'Absolutely. WhatsApp is one of the most effective conversion channels for local businesses. We configure pre-formatted WhatsApp chat triggers so customers can message you directly with their table reservation, product inquiry, or appointment request in one tap.',
    },
    {
      q: 'Will my website work well on mobile phones?',
      a: 'Yes. In fact, we design mobile-first. More than 75% of local business searches happen on smartphones. We test every website across iPhones, Android devices, tablets, and desktops to ensure effortless touch navigation and readability.',
    },
    {
      q: 'Will my website appear on Google search?',
      a: 'Yes, we set up all essential SEO fundamentals: clean semantic HTML, fast loading speeds, mobile optimization, and LocalBusiness schema markup. We also submit your sitemap to Google Search Console so Google indexes your pages. While no legitimate engineer can guarantee the #1 ranking on Google, we ensure your business is fully discoverable and properly understood by search engines.',
    },
    {
      q: 'Can you maintain and update the website after launch?',
      a: 'Yes. Once your site is live, we provide flexible ongoing maintenance and content update support. Whether you need to update seasonal menus, adjust pricing, announce holiday hours, or add new photos, WebLabs is available to assist.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#090d18] relative border-t border-white/5 overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-5 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-300">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Clear answers to common questions.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            Transparent expectations and straightforward explanations. No technical jargon.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className="bg-[#0c101d] border border-white/10 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-base font-semibold text-white font-sans">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-blue-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-300 font-sans leading-relaxed border-t border-white/5">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
