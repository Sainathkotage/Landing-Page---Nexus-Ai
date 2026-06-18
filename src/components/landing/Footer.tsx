import { Sparkles } from 'lucide-react';

export function Footer() {
  const cols = [
    {
      title: 'Product',
      links: [
        { label: 'Nexus AI App', href: '/nexus' },
        { label: 'Pricing Plans', href: '/pricing' },
        { label: 'Documentation', href: '/docs' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contact Us', href: '/contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms & Conditions', href: '/terms' },
      ],
    },
  ];

  return (
    <footer className="relative border-t border-ink-900/10 bg-cream-100/60">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-3">
            <a href="/" className="flex items-center gap-2 mb-4">
              <img src="/logo.png" className="w-6 h-6 object-contain" alt="Nexus AI Beta Logo" />
              <span className="font-serif font-medium text-ink-900 text-xl flex items-center gap-1.5">
                Nexus AI Beta
                <span className="bg-accent-500/10 text-accent-700 text-[8px] px-1.5 py-0.5 rounded font-sans font-bold">BETA</span>
              </span>
            </a>
            <p className="text-sm text-ink-500 max-w-xs leading-relaxed font-serif italic">
              Your AI Chief of Staff. Documents, tasks, calendar, and email
              unified in one intelligent workspace. Nexus AI Beta is in active development.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-ink-500 font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 animate-pulse-dot" />
              All systems operational
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold text-ink-900 mb-4 uppercase tracking-[0.2em] font-sans">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-ink-500 hover:text-accent-600 transition-colors font-sans"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-ink-900/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-ink-500 font-sans">
            © 2026 Aixentrix, Inc. Crafted with care in Nagpur, India.
          </p>
          <div className="flex items-center gap-4 text-xs text-ink-500 font-sans">
            <a href="#" className="hover:text-accent-600 transition-colors">Twitter</a>
            <span className="text-ink-300">·</span>
            <a href="#" className="hover:text-accent-600 transition-colors">GitHub</a>
            <span className="text-ink-300">·</span>
            <a href="#" className="hover:text-accent-600 transition-colors">LinkedIn</a>
            <span className="text-ink-300">·</span>
            <a href="#" className="hover:text-accent-600 transition-colors">Discord</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
