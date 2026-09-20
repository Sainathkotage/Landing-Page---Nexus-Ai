import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ArrowRight, Sparkles } from 'lucide-react';

export function WebLabsNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#process', label: 'Process' },
    { href: '#clients', label: 'Who I Build For' },
    { href: '#checklist', label: "What's Included" },
    { href: '#free-concept', label: 'Free Concept' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToConcept = () => {
    setOpen(false);
    const el = document.getElementById('free-concept');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${
        scrolled
          ? 'bg-cream-100/90 backdrop-blur-xl border-b border-ink-900/10 py-3 shadow-sm'
          : 'bg-cream-50/70 backdrop-blur-md border-b border-ink-900/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Lockup */}
        <div className="flex items-center gap-3">
          <a href="/weblabs" className="flex items-center gap-2 group">
            <span className="w-7 h-7 rounded-sm bg-ink-900 flex items-center justify-center text-cream-50 font-serif font-bold text-sm shadow-sm group-hover:bg-accent-600 transition-colors">
              W
            </span>
            <span className="font-serif font-semibold text-ink-900 text-xl tracking-tight">
              WebLabs
            </span>
          </a>

          <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-accent-500/10 text-accent-700 border border-accent-500/20 font-medium">
            Freelance Web Studio • [ADD: City, State]
          </span>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="px-3 py-1.5 text-xs text-ink-700 hover:text-accent-600 transition-colors rounded-sm hover:bg-ink-900/5 font-sans font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={scrollToConcept}
            className="group px-4 py-2 text-xs font-medium text-cream-50 bg-ink-900 hover:bg-accent-600 rounded-full transition-all inline-flex items-center gap-1.5 font-sans shadow-sm hover:shadow hover:scale-[1.02] active:scale-[0.98] cursor-pointer border-0"
          >
            <span>Get a Free Homepage Concept</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="lg:hidden p-2 rounded-sm text-ink-900 hover:bg-ink-900/5 transition-colors border-0 bg-transparent cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close Menu' : 'Open Menu'}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="lg:hidden bg-cream-100/95 backdrop-blur-xl border-t border-ink-900/10 mt-3 shadow-xl animate-fade-in">
          <div className="px-6 py-5 flex flex-col gap-1.5">
            <div className="pb-2 mb-2 border-b border-ink-900/5 text-xs text-ink-500 font-mono">
              Location: <span className="text-accent-600 font-semibold">[ADD: City, State]</span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="px-3 py-2 text-sm text-ink-800 hover:bg-ink-900/5 rounded-sm font-sans"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={scrollToConcept}
              className="mt-4 px-4 py-3 text-xs font-semibold text-cream-50 bg-ink-900 hover:bg-accent-600 rounded-sm text-center font-sans cursor-pointer border-0 w-full transition-colors flex items-center justify-center gap-2"
            >
              <span>Get a Free Homepage Concept</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
