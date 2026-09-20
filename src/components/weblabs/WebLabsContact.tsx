import { MessageSquare, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

export function WebLabsContact() {
  return (
    <footer id="contact" className="bg-[#1c1713] text-[#f8f3e8] pt-20 pb-12 border-t border-[#3d342b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Header & Cards */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2a231d] border border-[#554a3d] text-xs font-semibold text-[#f8f3e8] mb-4">
            <span>✦</span>
            <span>LET’S BUILD TOGETHER</span>
            <span>✦</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#f8f3e8] tracking-tight mb-4">
            Ready to Put Your Business Online?
          </h2>
          <p className="text-base sm:text-lg text-[#b8ab94] font-sans">
            Reach out via WhatsApp or email for a transparent discussion. No sales pressure, no middlemen, no spam.
          </p>
        </div>

        {/* 4 Direct Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Card 1: WhatsApp */}
          <div className="bg-[#2a231d] border border-[#3d342b] p-6 rounded-lg flex flex-col justify-between hover:border-[#c2410c] transition-colors group">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#1c1713] border border-[#554a3d] flex items-center justify-center text-[#c2410c] mb-4 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#f8f3e8] mb-1">
                WhatsApp Chat
              </h3>
              <p className="text-xs text-[#b8ab94] mb-3">
                Fastest way to get answers or request a free concept mockup.
              </p>
            </div>
            <a
              href="https://wa.me/?text=Hello!%20I%20am%20interested%20in%20building%20a%20website%20with%20WebLabs."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#f8f3e8] bg-[#3d342b] hover:bg-[#c2410c] px-3 py-2 rounded transition-colors"
            >
              <span>[ADD: WhatsApp number]</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: Email */}
          <div className="bg-[#2a231d] border border-[#3d342b] p-6 rounded-lg flex flex-col justify-between hover:border-[#c2410c] transition-colors group">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#1c1713] border border-[#554a3d] flex items-center justify-center text-[#c2410c] mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#f8f3e8] mb-1">
                Direct Email
              </h3>
              <p className="text-xs text-[#b8ab94] mb-3">
                Send your requirements, current website link, or questions.
              </p>
            </div>
            <a
              href="mailto:[ADD: Email address]?subject=Website Enquiry - WebLabs"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#f8f3e8] bg-[#3d342b] hover:bg-[#c2410c] px-3 py-2 rounded transition-colors"
            >
              <span className="truncate">[ADD: Email address]</span>
              <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
            </a>
          </div>

          {/* Card 3: Location */}
          <div className="bg-[#2a231d] border border-[#3d342b] p-6 rounded-lg flex flex-col justify-between hover:border-[#c2410c] transition-colors group">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#1c1713] border border-[#554a3d] flex items-center justify-center text-[#c2410c] mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#f8f3e8] mb-1">
                Base Location
              </h3>
              <p className="text-xs text-[#b8ab94] mb-3">
                Serving businesses across India with remote video/audio consultations.
              </p>
            </div>
            <div className="text-xs font-mono text-[#b8ab94] bg-[#1c1713] px-3 py-2 rounded border border-[#3d342b]">
              <span>[ADD: City, State, India]</span>
            </div>
          </div>

          {/* Card 4: Working Hours */}
          <div className="bg-[#2a231d] border border-[#3d342b] p-6 rounded-lg flex flex-col justify-between hover:border-[#c2410c] transition-colors group">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#1c1713] border border-[#554a3d] flex items-center justify-center text-[#c2410c] mb-4 group-hover:scale-110 transition-transform">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#f8f3e8] mb-1">
                Working Hours
              </h3>
              <p className="text-xs text-[#b8ab94] mb-3">
                Prompt replies during business hours; messages answered in 24h.
              </p>
            </div>
            <div className="text-xs font-mono text-[#b8ab94] bg-[#1c1713] px-3 py-2 rounded border border-[#3d342b]">
              <span>[ADD: Mon–Sat: 10 AM – 7 PM IST]</span>
            </div>
          </div>
        </div>

        {/* Free Concept Reminder Strip */}
        <div className="bg-[#2a231d] border border-[#554a3d] p-6 rounded-xl mb-16 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#c2410c] font-semibold">
              ✦ No Risk Guarantee ✦
            </span>
            <h4 className="font-serif text-lg sm:text-xl text-[#f8f3e8] font-semibold mt-1">
              Want to see what your site will look like before deciding?
            </h4>
            <p className="text-xs sm:text-sm text-[#b8ab94] mt-0.5">
              Request a tailored 48-hour homepage concept for ₹0 advance payment.
            </p>
          </div>
          <a
            href="#concept"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#c2410c] hover:bg-[#9a3412] text-[#f8f3e8] text-sm font-semibold rounded-md transition-colors flex-shrink-0 shadow-sm"
          >
            <span>Request Free Concept</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Main Footer Links & Ecosystem */}
        <div className="border-t border-[#3d342b] pt-12 pb-8 grid grid-cols-1 md:grid-cols-12 gap-8 text-sm">
          
          {/* Col 1: Brand & Philosophy */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl font-bold tracking-tight text-[#f8f3e8]">
                WebLabs
              </span>
              <span className="text-xs font-mono uppercase px-2 py-0.5 rounded bg-[#2a231d] border border-[#554a3d] text-[#c2410c]">
                by Aixentrix
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#b8ab94] leading-relaxed max-w-sm">
              An independent web development studio building complete, high-speed websites for small and medium businesses in India. From first wireframe to custom domain launch.
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs font-mono text-[#b8ab94]">
              <span>[ADD: LinkedIn URL]</span>
              <span>•</span>
              <span>[ADD: Instagram URL]</span>
              <span>•</span>
              <span>[ADD: Twitter/X URL]</span>
            </div>
          </div>

          {/* Col 2: Navigation Anchors */}
          <div className="md:col-span-4 space-y-2">
            <p className="text-xs font-mono uppercase tracking-wider text-[#b8ab94] font-semibold">
              Page Navigation
            </p>
            <ul className="space-y-1.5 text-xs text-[#d9cdaa]">
              <li>
                <a href="#services" className="hover:text-[#f8f3e8] transition-colors">Services & Deliverables</a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#f8f3e8] transition-colors">5-Step Process</a>
              </li>
              <li>
                <a href="#clients" className="hover:text-[#f8f3e8] transition-colors">Who I Build For (10 Industries)</a>
              </li>
              <li>
                <a href="#checklist" className="hover:text-[#f8f3e8] transition-colors">12-Point Standard Checklist</a>
              </li>
              <li>
                <a href="#concept" className="hover:text-[#f8f3e8] transition-colors">Free Homepage Concept</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#f8f3e8] transition-colors">Frequently Asked Questions</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Aixentrix Ecosystem Cross-Link */}
          <div className="md:col-span-3 space-y-2">
            <p className="text-xs font-mono uppercase tracking-wider text-[#b8ab94] font-semibold">
              Aixentrix Ecosystem
            </p>
            <p className="text-xs text-[#b8ab94] leading-relaxed">
              WebLabs is part of Aixentrix — empowering businesses with intelligent workspace technology and web engineering.
            </p>
            <div className="pt-2">
              <a
                href="/"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#c2410c] hover:text-[#f8f3e8] transition-colors"
              >
                <span>Nexus AI Workspace</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="border-t border-[#3d342b] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#776a58]">
          <div>
            © {new Date().getFullYear()} WebLabs by Aixentrix. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>GSTIN: [ADD: GSTIN / Tax ID if registered]</span>
            <span>•</span>
            <span>Policy: [ADD: Terms & Privacy Policy Link]</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
