import { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, MessageSquare } from 'lucide-react';

interface Props {
  isDarkHero?: boolean;
}

export function WebLabsNavbarModern({ isDarkHero = true }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(isDarkHero);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleThemeChange = (e: CustomEvent<{ isDark: boolean }>) => {
      if (typeof e.detail?.isDark === 'boolean') {
        setIsDark(e.detail.isDark);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('weblabs-theme-change' as any, handleThemeChange as EventListener);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('weblabs-theme-change' as any, handleThemeChange as EventListener);
    };
  }, []);

  const navLinks = [
    { label: 'Showcase', href: '#hero-showcase' },
    { label: 'Capabilities', href: '#features-tabs' },
    { label: 'Architecture', href: '#case-studies' },
    { label: 'Philosophy', href: '#editorial-statement' },
    { label: 'Deliverables', href: '#services' },
  ];

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const activeDark = isDark;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 font-sans transition-all duration-500 ease-editorial ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
      } ${
        activeDark
          ? scrolled
            ? 'h-15 sm:h-16 bg-[#09090B]/85 backdrop-blur-xl border-b border-white/10 text-white shadow-xl'
            : 'h-16 sm:h-20 bg-transparent text-white'
          : scrolled
          ? 'h-15 sm:h-16 glass-nav-scrolled text-[#171717]'
          : 'h-16 sm:h-20 glass-nav text-[#171717]'
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Studio Monogram Lockup (Geometric Circle + Dot inspired by Imagica reference) */}
        <div className="flex items-center gap-3">
          <a
            href="/weblabs"
            className="flex items-center gap-2.5 group transition-transform duration-200"
          >
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all ${
                activeDark
                  ? 'border-white/40 bg-white/10 group-hover:border-white'
                  : 'border-[#171717]/30 bg-[#171717] group-hover:bg-[#2A2A2A]'
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full transition-colors ${
                  activeDark ? 'bg-white' : 'bg-[#FAF8F5]'
                }`}
              />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span
                className={`font-semibold text-sm tracking-tight transition-colors ${
                  activeDark ? 'text-white' : 'text-[#171717]'
                }`}
              >
                weblabs
              </span>
              <span
                className={`text-[11px] font-medium transition-colors ${
                  activeDark ? 'text-zinc-400' : 'text-[#78726A]'
                }`}
              >
                studio
              </span>
            </div>
          </a>
        </div>

        {/* Center: Minimal Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className={`text-[13px] font-medium tracking-tight transition-colors duration-200 cursor-pointer ${
                activeDark
                  ? 'text-zinc-400 hover:text-white'
                  : 'text-[#524E48] hover:text-[#171717]'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right: Tactile Actions */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="https://wa.me/?text=Hi%20WebLabs,%20I%20would%20like%20to%20inquire%20about%20a%20website%20for%20my%20business."
            target="_blank"
            rel="noreferrer"
            className={`text-xs font-medium px-3.5 py-1.5 rounded-full border transition-all duration-200 ${
              activeDark
                ? 'border-white/20 text-zinc-300 hover:bg-white/10 hover:text-white'
                : 'border-black/[0.1] text-[#524E48] hover:text-[#171717] hover:bg-black/[0.04]'
            }`}
          >
            Consultation
          </a>

          <button
            onClick={() =>
              window.open(
                'https://wa.me/?text=Hi%20WebLabs,%20I%20would%20like%20to%20request%20a%20free%2048-hour%20homepage%20concept%20for%20my%20business.',
                '_blank'
              )
            }
            className={`text-xs font-semibold px-4 py-1.5 rounded-full transition-all duration-300 ease-editorial flex items-center gap-2 cursor-pointer shadow-xs hover:-translate-y-[1px] active:translate-y-0 ${
              activeDark
                ? 'bg-white text-black hover:bg-zinc-200'
                : 'bg-[#171717] hover:bg-[#2A2A2A] text-[#F6F4EF]'
            }`}
          >
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors cursor-pointer ${
            activeDark ? 'text-white hover:bg-white/10' : 'text-[#171717] hover:bg-black/[0.04]'
          }`}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 py-6 bg-[#F6F4EF]/95 backdrop-blur-2xl border-b border-black/[0.08] text-[#171717] shadow-lg">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-left text-sm font-medium py-1 text-[#524E48] hover:text-[#171717] cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 border-t border-black/[0.08] flex flex-col gap-3">
              <a
                href="https://wa.me/?text=Hi%20WebLabs,%20I%20would%20like%20to%20inquire%20about%20a%20website%20for%20my%20business."
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium text-[#2D6A4F] flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp: [ADD: WhatsApp number]</span>
              </a>
              <button
                onClick={() =>
                  window.open(
                    'https://wa.me/?text=Hi%20WebLabs,%20I%20would%20like%20to%20request%20a%20free%2048-hour%20homepage%20concept%20for%20my%20business.',
                    '_blank'
                  )
                }
                className="w-full py-2.5 rounded-full bg-[#171717] text-[#F6F4EF] font-medium text-xs flex items-center justify-center gap-1.5 shadow-xs"
              >
                <span>Request Free 48-Hour Concept</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
