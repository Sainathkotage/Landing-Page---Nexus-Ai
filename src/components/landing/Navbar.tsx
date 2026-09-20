import { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

// Read dashboard url from environment variables (client-side in Astro)
const DASHBOARD_URL = import.meta.env.PUBLIC_DASHBOARD_URL || 'https://app.aixentrix.com';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setProductsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const products = [
    {
      num: '01',
      name: 'Nexus AI',
      href: '/nexus-ai',
      tag: 'Beta',
      description: 'The AI Chief of Staff & unified workspace memory.',
    },
    {
      num: '02',
      name: 'WebLabs',
      href: '/weblabs',
      tag: 'New',
      description: 'Next-generation web engineering & intelligent software.',
    },
  ];

  const links = [
    { href: '/', label: 'Aixentrix' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/docs', label: 'Docs' },
    { href: '/help', label: 'Help Centre' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const handleSignIn = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `${DASHBOARD_URL}/?auth=login`;
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
          <img src="/logo.png" className="w-6 h-6 object-contain" alt="Aixentrix Logo" />
          <span className="font-serif font-medium text-ink-900 text-xl flex items-center gap-1.5">
            Aixentrix
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {/* Aixentrix link */}
          <a
            href="/"
            className="px-3 py-2 text-sm text-ink-600 hover:text-accent-600 transition-colors rounded-sm hover:bg-ink-900/5 font-sans"
          >
            Aixentrix
          </a>

          {/* Products Dropdown */}
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              type="button"
              onClick={() => setProductsOpen((prev) => !prev)}
              className={cn(
                'px-3 py-2 text-sm transition-colors rounded-sm font-sans flex items-center gap-1 cursor-pointer bg-transparent border-0',
                productsOpen
                  ? 'text-accent-600 bg-ink-900/5'
                  : 'text-ink-600 hover:text-accent-600 hover:bg-ink-900/5'
              )}
              aria-expanded={productsOpen}
              aria-haspopup="true"
            >
              <span>Products</span>
              <ChevronDown
                className={cn(
                  'w-3.5 h-3.5 transition-transform duration-200',
                  productsOpen && 'rotate-180'
                )}
              />
            </button>

            {productsOpen && (
              <div className="absolute top-full left-0 pt-2 w-72 md:w-80 z-50">
                <div className="bg-cream-100/95 backdrop-blur-xl border border-ink-900/10 shadow-2xl rounded-sm p-2 vintage-border">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-ink-500 px-2.5 py-1 mb-1 border-b border-ink-900/5">
                    Products
                  </div>
                  {products.map((product) => (
                    <a
                      key={product.name}
                      href={product.href}
                      onClick={() => setProductsOpen(false)}
                      className="flex items-start gap-3 p-2.5 rounded-sm hover:bg-ink-900/5 transition-colors group"
                    >
                      <span className="font-mono text-xs font-semibold text-accent-600 mt-0.5 w-5 shrink-0">
                        {product.num}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-serif font-medium text-ink-900 text-sm group-hover:text-accent-600 transition-colors">
                            {product.name}
                          </span>
                          {product.tag && (
                            <span className="bg-accent-500/10 text-accent-700 text-[8px] px-1.5 py-0.5 rounded font-sans font-bold uppercase tracking-wider">
                              {product.tag}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-ink-600 font-sans leading-snug mt-0.5">
                          {product.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Remaining links */}
          {links.slice(1).map((l) => (
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
          aria-label={open ? 'Close Menu' : 'Open Menu'}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-cream-100/95 backdrop-blur-xl border-t border-ink-900/10 mt-3">
          <div className="px-6 py-4 flex flex-col gap-1">
            <a
              href="/"
              className="px-3 py-2 text-sm text-ink-700 hover:bg-ink-900/5 rounded-sm font-sans"
              onClick={() => setOpen(false)}
            >
              Aixentrix
            </a>

            {/* Mobile Products Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileProductsOpen((prev) => !prev)}
                className="w-full flex items-center justify-between px-3 py-2 text-sm text-ink-700 hover:bg-ink-900/5 rounded-sm font-sans bg-transparent border-0 cursor-pointer text-left"
              >
                <span>Products</span>
                <ChevronDown
                  className={cn(
                    'w-4 h-4 transition-transform duration-200',
                    mobileProductsOpen && 'rotate-180'
                  )}
                />
              </button>

              {mobileProductsOpen && (
                <div className="pl-4 pr-2 py-1 flex flex-col gap-1 border-l-2 border-accent-500/20 ml-3 my-1">
                  {products.map((product) => (
                    <a
                      key={product.name}
                      href={product.href}
                      className="px-3 py-2 rounded-sm hover:bg-ink-900/5 flex items-center justify-between font-sans text-sm text-ink-800"
                      onClick={() => setOpen(false)}
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-accent-600 font-semibold">
                          {product.num}
                        </span>
                        <span className="font-medium">{product.name}</span>
                      </div>
                      {product.tag && (
                        <span className="bg-accent-500/10 text-accent-700 text-[8px] px-1.5 py-0.5 rounded font-bold uppercase">
                          {product.tag}
                        </span>
                      )}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Remaining Mobile Links */}
            {links.slice(1).map((l) => (
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
