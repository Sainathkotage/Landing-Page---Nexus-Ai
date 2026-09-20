import { ArrowRight, Sparkles, PhoneCall, Mail } from 'lucide-react';

export function WebLabsCTA() {
  const scrollToForm = () => {
    const form = document.getElementById('lead-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#07090e] relative border-t border-white/5 overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-t from-blue-600/15 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto px-5 sm:px-6 text-center">
        <div className="bg-gradient-to-b from-[#0e1424] to-[#0a0e1c] border border-blue-500/30 rounded-3xl p-8 sm:p-14 shadow-2xl shadow-black/80 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WEBLABS BY AIXENTRIX</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Your business deserves more than a social-media profile.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed max-w-2xl mx-auto">
            Let's build something your customers can actually find, trust, and use. Tell us about your business, and we'll show you what your modern digital storefront will look like.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={scrollToForm}
              className="w-full sm:w-auto px-9 py-4 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer font-sans"
            >
              <span>Start Your Website</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="mailto:info.aixentrix@gmail.com?subject=Inquiry%20about%20WebLabs%20Website%20Services"
              className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-medium text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2 font-sans"
            >
              <Mail className="w-4 h-4 text-slate-400" />
              <span>Get a Free Consultation</span>
            </a>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
            <span>Direct consultation with lead engineers</span>
            <span>•</span>
            <span>Nagpur, Maharashtra, India</span>
            <span>•</span>
            <span>Remote worldwide delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
}
