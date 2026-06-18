import { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// Read dashboard url from environment variables (client-side in Astro)
const DASHBOARD_URL = import.meta.env.PUBLIC_DASHBOARD_URL || 'http://localhost:3000';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = [
    { href: '/', label: 'Aixentrix' },
    { href: '/nexus', label: 'Nexus AI' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/docs', label: 'Docs' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const handleSignIn = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `${DASHBOARD_URL}/?auth=signin`;
  };

  const handleStart = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `${DASHBOARD_URL}/?auth=signup`;
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-cream-100/85 backdrop-blur-xl border-b border-ink-900/10 py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <img src="/logo.png" className="w-6 h-6 object-contain" alt="Nexus AI Beta Logo" />
          <span className="font-serif font-medium text-ink-900 text-xl flex items-center gap-1.5">
            Nexus AI Beta
            <span className="bg-accent-500/10 text-accent-700 text-[9px] px-1.5 py-0.5 rounded font-sans font-bold uppercase tracking-wider">Beta</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm text-ink-600 hover:text-accent-600 transition-colors rounded-sm hover:bg-ink-900/5 font-sans"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={handleSignIn}
            className="px-4 py-2 text-sm text-ink-700 hover:text-accent-600 transition-colors font-sans cursor-pointer bg-transparent border-0"
          >
            Sign in
          </button>
          <button
            onClick={handleStart}
            className="group px-5 py-2 text-sm font-medium text-cream-100 bg-ink-900 hover:bg-accent-600 rounded-sm transition-all inline-flex items-center gap-1 font-sans border border-ink-900 cursor-pointer"
          >
            Get started
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        <button
          className="md:hidden p-2 rounded-sm hover:bg-ink-900/5"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-cream-100/95 backdrop-blur-xl border-t border-ink-900/10 mt-3">
          <div className="px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 text-sm text-ink-700 hover:bg-ink-900/5 rounded-sm font-sans"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={handleSignIn}
              className="mt-4 px-4 py-2.5 text-sm text-ink-700 font-medium rounded-sm border border-ink-900/15 text-center font-sans cursor-pointer bg-transparent"
            >
              Sign in
            </button>
            <button
              onClick={handleStart}
              className="mt-2 px-4 py-2.5 text-sm font-medium text-cream-100 bg-ink-900 rounded-sm text-center font-sans cursor-pointer border-0 w-full"
            >
              Get started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
