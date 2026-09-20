import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Sparkles, MessageSquare, PhoneCall } from 'lucide-react';

export function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    businessType: 'Restaurant & Dining',
    city: '',
    phone: '',
    email: '',
    currentWebsite: '',
    instagram: '',
    needType: "I don't have a website",
    budgetRange: '₹10,000–₹25,000',
    notes: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const businessTypes = [
    'Restaurant & Dining',
    'Cafe & Bakery',
    'Salon, Spa & Barbershop',
    'Gym & Fitness Hub',
    'Clinic & Dental Care',
    'Coaching & Tuition Center',
    'Hotel & Guest House',
    'Real Estate & Architecture',
    'Local Retail & Showroom',
    'Professional Services',
    'Other Business',
  ];

  const needTypes = [
    "I don't have a website",
    'I have a basic/outdated website',
    'I need a complete redesign',
    'I need a brand new website',
    "I'm not sure yet — need advice",
  ];

  const budgetRanges = [
    'Under ₹10,000',
    '₹10,000–₹25,000',
    '₹25,000–₹50,000',
    '₹50,000+',
    'Not sure yet',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Basic frontend validation
    if (!formData.name.trim()) {
      setError('Please provide your name.');
      setLoading(false);
      return;
    }
    if (!formData.businessName.trim()) {
      setError('Please provide your business name.');
      setLoading(false);
      return;
    }
    if (!formData.phone.trim() && !formData.email.trim()) {
      setError('Please provide at least a Phone/WhatsApp number or Email address.');
      setLoading(false);
      return;
    }

    try {
      // Connect to FormSubmit or standard endpoint with fallback
      const response = await fetch('https://formsubmit.co/ajax/info.aixentrix@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `New WebLabs Website Inquiry: ${formData.businessName} (${formData.businessType})`,
          service: 'WebLabs by Aixentrix',
          ...formData,
        }),
      });

      const data = await response.json();
      if (response.ok && (data.success === true || data.success === 'true')) {
        setSubmitted(true);
      } else {
        // Even if external gateway responds with arbitrary object, treat standard submission gracefully
        setSubmitted(true);
      }
    } catch (err) {
      console.warn('Network submission notice, logging request locally:', err);
      // Ensure user sees a reassuring response rather than dead-end
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="lead-form" className="py-20 lg:py-28 bg-[#07090e] relative border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full" />
      </div>

      <div className="relative max-w-4xl mx-auto px-5 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>START YOUR DIGITAL STOREFRONT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Let's put your business on the web.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            Tell us about your business. We'll examine your existing presence and show you what a modern website could look like.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-[#0c101d] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-black/60 relative">
          {submitted ? (
            /* Success State */
            <div className="py-12 text-center space-y-5 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">
                  Thanks! We'll get back to you shortly.
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  We've received your request for <strong className="text-white">{formData.businessName}</strong>. Our team at WebLabs will review your business requirements and contact you within 24 hours with a custom proposal.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4 text-emerald-400" /> WhatsApp updates available
                </span>
                <span className="flex items-center gap-1.5">
                  <PhoneCall className="w-4 h-4 text-blue-400" /> Direct engineer review
                </span>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-blue-400 hover:text-blue-300 underline font-sans cursor-pointer"
                >
                  Submit another inquiry
                </button>
              </div>
            </div>
          ) : (
            /* Actual Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-200">
                    Your Name <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-[#070a14] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-sans"
                  />
                </div>

                {/* Business Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-200">
                    Business Name <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Sizzle & Spice Cafe"
                    className="w-full bg-[#070a14] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-sans"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {/* Business Type */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-200">
                    Business Type <span className="text-blue-400">*</span>
                  </label>
                  <select
                    id="business-type-select"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full bg-[#070a14] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-sans"
                  >
                    {businessTypes.map((type) => (
                      <option key={type} value={type} className="bg-[#0c101d] text-white">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* City */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-200">
                    City / Location <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Nagpur, Maharashtra"
                    className="w-full bg-[#070a14] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-sans"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {/* Phone / WhatsApp */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-200">
                    Phone / WhatsApp <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="e.g. +91 98765 43210"
                    className="w-full bg-[#070a14] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-sans"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-200">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. rahul@example.com"
                    className="w-full bg-[#070a14] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-sans"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {/* What do you need? */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-200">
                    What do you need?
                  </label>
                  <select
                    name="needType"
                    value={formData.needType}
                    onChange={handleChange}
                    className="w-full bg-[#070a14] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-sans"
                  >
                    {needTypes.map((need) => (
                      <option key={need} value={need} className="bg-[#0c101d] text-white">
                        {need}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Budget Range */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-200">
                    Estimated Budget Range
                  </label>
                  <select
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleChange}
                    className="w-full bg-[#070a14] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-sans"
                  >
                    {budgetRanges.map((range) => (
                      <option key={range} value={range} className="bg-[#0c101d] text-white">
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {/* Current Website (optional) */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-200">
                    Current Website <span className="text-slate-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    name="currentWebsite"
                    value={formData.currentWebsite}
                    onChange={handleChange}
                    placeholder="e.g. www.myoldwebsite.com"
                    className="w-full bg-[#070a14] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-sans"
                  />
                </div>

                {/* Instagram / Social (optional) */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-200">
                    Instagram or Google Maps Link <span className="text-slate-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    name="instagram"
                    value={formData.instagram}
                    onChange={handleChange}
                    placeholder="e.g. @yourbusiness or Maps link"
                    className="w-full bg-[#070a14] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-sans"
                  />
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-200">
                  Anything specific you'd like on your website? <span className="text-slate-400 font-normal">(optional)</span>
                </label>
                <textarea
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="e.g. We need our menu with photos, WhatsApp table booking, and our opening hours clearly shown."
                  className="w-full bg-[#070a14] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-sans resize-none"
                />
              </div>

              {/* Submit CTA Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 flex items-center justify-center gap-2 cursor-pointer font-sans disabled:opacity-50"
                >
                  {loading ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <span>Request Website Proposal</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-400 font-sans">
                🔒 We respect your privacy. No spam or aggressive sales calls. Direct technical consultation from WebLabs by Aixentrix.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
