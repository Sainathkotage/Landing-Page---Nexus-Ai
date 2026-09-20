import { useState } from 'react';
import { Send, Clock, CheckCircle2, Sparkles, MessageSquare, Mail } from 'lucide-react';

export function WebLabsConcept() {
  const [formData, setFormData] = useState({
    businessName: '',
    category: 'Restaurant / Cafe',
    city: '',
    whatsapp: '',
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const categories = [
    'Restaurant / Cafe / Cloud Kitchen',
    'Bakery & Dessert Studio',
    'Salon, Spa & Beauty Care',
    'Fitness Center & Gym',
    'Medical Clinic & Doctor',
    'Coaching & Education Academy',
    'Real Estate Agent / Builder',
    'Interior Designer & Architect',
    'Boutique Hotel & Homestay',
    'Local Retailer & Specialty Store',
    'Professional / Freelancer / Consultant',
    'Other Small Business',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = encodeURIComponent(
      `Hello! I would like to request a Free Homepage Concept for my business:\n\n` +
      `• Business Name: ${formData.businessName || 'N/A'}\n` +
      `• Category: ${formData.category}\n` +
      `• City: ${formData.city || 'N/A'}\n` +
      `• WhatsApp: ${formData.whatsapp || 'N/A'}\n` +
      `• Notes / Existing Links: ${formData.details || 'None'}\n\n` +
      `Looking forward to seeing the 48-hour mockup!`
    );

    // Open WhatsApp with pre-filled enquiry text
    const whatsappUrl = `https://wa.me/919021509565?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="concept" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-[#e8dfc5] relative bg-[#f8f3e8]">
      <div id="free-concept" className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: The Offer & Reassurances */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f2ebd9] border border-[#d9cdaa] text-xs font-semibold text-[#7c2d12]">
              <span>✦</span>
              <span>ZERO RISK · NO UPFRONT PAYMENT</span>
              <span>✦</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1c1713] tracking-tight leading-tight">
              See Your Website Before You Pay a Single Rupee
            </h2>

            <p className="text-base sm:text-lg text-[#554a3d] font-sans leading-relaxed">
              Most businesses hesitate because they don't know what their website will actually look like. Instead of making empty promises or showing stock mockups, I will design an interactive, custom homepage concept for your exact business.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 bg-[#f2ebd9]/50 border border-[#e8dfc5] p-4 rounded-lg">
                <Clock className="w-5 h-5 text-[#9a3412] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-serif text-base font-semibold text-[#1c1713]">
                    Ready in 48 Hours
                  </h4>
                  <p className="text-xs sm:text-sm text-[#554a3d] mt-1">
                    Send me your business name, what you sell, and your city. You'll receive a tailored interactive preview link in 2 days.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#f2ebd9]/50 border border-[#e8dfc5] p-4 rounded-lg">
                <Sparkles className="w-5 h-5 text-[#9a3412] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-serif text-base font-semibold text-[#1c1713]">
                    100% Honest & Obligation-Free
                  </h4>
                  <p className="text-xs sm:text-sm text-[#554a3d] mt-1">
                    If you love the concept and want to build the complete site, we move forward. If you don't love it, you walk away owing ₹0.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#f2ebd9]/50 border border-[#e8dfc5] p-4 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-[#9a3412] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-serif text-base font-semibold text-[#1c1713]">
                    Built Around Real Business Goals
                  </h4>
                  <p className="text-xs sm:text-sm text-[#554a3d] mt-1">
                    Your concept includes genuine local navigation, 1-tap WhatsApp hooks, Google Maps integration, and mobile layout.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Contact Fallbacks */}
            <div className="pt-4 border-t border-[#e8dfc5] flex flex-wrap items-center gap-4 text-xs font-mono text-[#554a3d]">
              <span>Prefer direct chat?</span>
              <a
                href="https://wa.me/919021509565?text=Hello!%20I%20would%20like%20to%20request%20a%20Free%20Homepage%20Concept."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[#7c2d12] hover:text-[#1c1713] font-semibold underline underline-offset-4"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp: +91-9021509565</span>
              </a>
              <span className="text-[#d9cdaa]">|</span>
              <a
                href="mailto:[ADD: Email address]?subject=Free Homepage Concept Request"
                className="inline-flex items-center gap-1.5 text-[#554a3d] hover:text-[#1c1713]"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>[ADD: Email address]</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Request Form */}
          <div className="lg:col-span-6">
            <div className="bg-[#f2ebd9]/80 border border-[#d9cdaa] p-6 sm:p-8 rounded-xl shadow-md relative">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#e8dfc5]">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-[#1c1713]">
                    Request Your Free Concept
                  </h3>
                  <p className="text-xs text-[#554a3d] mt-0.5">
                    Takes under 60 seconds · No credit card · No advance fee
                  </p>
                </div>
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#f8f3e8] border border-[#d9cdaa] text-[#7c2d12] font-semibold">
                  48-Hour Turnaround
                </span>
              </div>

              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#1c1713] text-[#f8f3e8] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6 text-[#c2410c]" />
                  </div>
                  <h4 className="font-serif text-2xl text-[#1c1713] font-bold">
                    Request Received!
                  </h4>
                  <p className="text-sm text-[#554a3d] max-w-md mx-auto">
                    Thank you, <span className="font-semibold text-[#1c1713]">{formData.businessName || 'friend'}</span>. A pre-filled WhatsApp window has opened to connect directly with WebLabs.
                  </p>
                  
                  <div className="bg-[#f8f3e8] border border-[#e8dfc5] p-4 rounded text-left text-xs font-mono text-[#554a3d] space-y-2 mt-4">
                    <p className="font-semibold text-[#1c1713]">Next Steps:</p>
                    <p>1. We review your local industry & nearby competitors.</p>
                    <p>2. We build an interactive, tailored homepage mockup.</p>
                    <p>3. You receive a private preview link on WhatsApp within 48 hours.</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono text-[#7c2d12] underline hover:text-[#1c1713] pt-2"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#3d342b] mb-1">
                      Business Name <span className="text-[#9a3412]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Royal Sweets & Bakery"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#f8f3e8] border border-[#d9cdaa] rounded-md text-sm text-[#1c1713] placeholder-[#9a8d78] focus:outline-none focus:border-[#9a3412] focus:ring-1 focus:ring-[#9a3412]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#3d342b] mb-1">
                        Industry / Category
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-3 py-2.5 bg-[#f8f3e8] border border-[#d9cdaa] rounded-md text-sm text-[#1c1713] focus:outline-none focus:border-[#9a3412]"
                      >
                        {categories.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#3d342b] mb-1">
                        City / Location <span className="text-[#9a3412]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Pune, Maharashtra"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#f8f3e8] border border-[#d9cdaa] rounded-md text-sm text-[#1c1713] placeholder-[#9a8d78] focus:outline-none focus:border-[#9a3412] focus:ring-1 focus:ring-[#9a3412]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#3d342b] mb-1">
                      WhatsApp Number <span className="text-[#9a3412]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#f8f3e8] border border-[#d9cdaa] rounded-md text-sm text-[#1c1713] placeholder-[#9a8d78] focus:outline-none focus:border-[#9a3412] focus:ring-1 focus:ring-[#9a3412]"
                    />
                    <span className="text-[11px] text-[#776a58] mt-1 block">
                      Preview link will be sent directly to this WhatsApp number.
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#3d342b] mb-1">
                      Any existing links or notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Instagram handle, Google Maps link, or specific services you offer..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full px-3.5 py-2 bg-[#f8f3e8] border border-[#d9cdaa] rounded-md text-sm text-[#1c1713] placeholder-[#9a8d78] focus:outline-none focus:border-[#9a3412] focus:ring-1 focus:ring-[#9a3412]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1c1713] text-[#f8f3e8] hover:bg-[#c2410c] text-sm font-semibold rounded-md transition-colors shadow-sm cursor-pointer"
                  >
                    <span>Request Free Homepage Concept</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-center text-[#776a58] pt-1">
                    No spam. No salespeople. Direct chat with independent developer · <span className="font-mono">+91-9021509565</span>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
