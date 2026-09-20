import { ArrowUpRight } from 'lucide-react';

export function WebLabsFooter() {
  return (
    <footer className="bg-[#05070c] border-t border-white/10 text-slate-400 py-16 text-xs font-sans">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <a href="/" className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors">
                <img src="/logo.png" className="w-6 h-6 object-contain" alt="Aixentrix Logo" />
                <span className="font-sans font-bold text-white text-base">Aixentrix</span>
              </a>
              <span className="text-slate-600 font-mono">/</span>
              <span className="font-sans font-semibold text-blue-400 text-sm">WebLabs</span>
            </div>

            <p className="text-slate-400 max-w-sm leading-relaxed text-xs">
              WebLabs is an Aixentrix service building modern digital storefronts and bespoke web engineering solutions for traditional and local businesses.
            </p>

            <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>All Systems Operational • Nagpur, India</span>
            </div>
          </div>

          {/* Col 1: WebLabs Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              WebLabs
            </h4>
            <ul className="space-y-2">
              <li><a href="#work" className="hover:text-white transition-colors">Website Design</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Website Development</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Website Redesign</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">WhatsApp Integration</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Local Business SEO</a></li>
            </ul>
          </div>

          {/* Col 2: Aixentrix Ecosystem */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Aixentrix
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Aixentrix Corporate</span>
                </a>
              </li>
              <li>
                <a href="/weblabs" className="text-blue-400 hover:text-blue-300 font-medium">
                  WebLabs Agency
                </a>
              </li>
              <li>
                <a href="/nexus" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span>Nexus AI Workspace</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-white" />
                </a>
              </li>
              <li><a href="/pricing" className="hover:text-white transition-colors">Pricing Plans</a></li>
              <li><a href="/docs" className="hover:text-white transition-colors">Documentation</a></li>
            </ul>
          </div>

          {/* Col 3: Company & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Company
            </h4>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-white transition-colors">About Aixentrix</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="/roadmap" className="hover:text-white transition-colors">Roadmap</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Aixentrix, Inc. All rights reserved. WebLabs is an Aixentrix offering.</p>
          <div className="flex items-center gap-4">
            <a href="https://x.com/AixentrixNexus" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">Twitter</a>
            <span>•</span>
            <a href="https://github.com/Sainathkotage/Nexus-Ai" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">GitHub</a>
            <span>•</span>
            <a href="https://www.linkedin.com/in/sainathkotage/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
