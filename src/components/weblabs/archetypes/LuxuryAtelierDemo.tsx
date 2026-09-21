import React, { useState } from 'react';
import { ArchetypeSpecBar } from './ArchetypeSpecBar';
import {
  Sparkles,
  ShoppingBag,
  ArrowRight,
  Check,
  X,
  CreditCard,
  Shield,
  Zap,
  TrendingUp,
  Eye
} from 'lucide-react';

interface Product {
  id: string;
  name: string;
  subtitle: string;
  material: string;
  priceUSD: number;
  badge: string;
  colors: { name: string; hex: string; img: string }[];
  tag: string;
}

export function LuxuryAtelierDemo() {
  const [selectedCurrency, setSelectedCurrency] = useState<'USD' | 'EUR' | 'GBP' | 'INR'>('USD');
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [activeColor, setActiveColor] = useState<Record<string, number>>({
    'prod-1': 0,
    'prod-2': 0,
    'prod-3': 0,
  });

  const currencyRates = {
    USD: { symbol: '$', rate: 1 },
    EUR: { symbol: '€', rate: 0.92 },
    GBP: { symbol: '£', rate: 0.79 },
    INR: { symbol: '₹', rate: 86.5 },
  };

  const formatPrice = (usd: number) => {
    const { symbol, rate } = currencyRates[selectedCurrency];
    const amount = Math.round(usd * rate);
    return `${symbol}${amount.toLocaleString()}`;
  };

  const products: Product[] = [
    {
      id: 'prod-1',
      name: 'The Monolith Chronograph',
      subtitle: 'Numbered Edition // Grade-5 Titanium & Obsidian Sapphire',
      material: 'Brushed Titanium / Ceramic Bezel',
      priceUSD: 1850,
      badge: 'Bespoke Atelier',
      tag: 'Limited to 250 Units',
      colors: [
        { name: 'Obsidian Noir', hex: '#18181B', img: 'titanium' },
        { name: 'Champagne Ochre', hex: '#D4AF37', img: 'gold' },
        { name: 'Pure Alabaster', hex: '#E4E4E7', img: 'silver' },
      ],
    },
    {
      id: 'prod-2',
      name: 'Sculpted Suede Overshirt',
      subtitle: 'Unlined Tuscan Lamb Suede // Horn Buttons',
      material: '100% Hand-Dyed Italian Suede',
      priceUSD: 940,
      badge: 'Runway Capsule',
      tag: 'Pre-Order Dispatch',
      colors: [
        { name: 'Velvet Espresso', hex: '#27201C', img: 'espresso' },
        { name: 'Smoked Sage', hex: '#4A5340', img: 'sage' },
        { name: 'Ivory Raw', hex: '#D6CEBE', img: 'ivory' },
      ],
    },
    {
      id: 'prod-3',
      name: 'The Architectural Folio',
      subtitle: 'Full-Grain Bridle Leather // Magnetic Minimalist Clasp',
      material: 'Vegetable-Tanned Saddle Leather',
      priceUSD: 620,
      badge: 'Editorial Pick',
      tag: 'Hand-Stitched in Florence',
      colors: [
        { name: 'Cast Iron Black', hex: '#1C1917', img: 'black' },
        { name: 'Havana Cognac', hex: '#78350F', img: 'cognac' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0908] text-[#F5F3EF] selection:bg-[#D4AF37]/30 selection:text-[#F5F3EF] font-sans">
      <ArchetypeSpecBar
        id="02"
        category="Editorial E-Commerce"
        title="Minimal Luxury Atelier"
        claimBadge="3.8x Conversion Architecture"
        techStack="Shopify Plus • WebGL • Lenis"
        themeColor="amber"
      />

      {/* Luxury Editorial Header */}
      <section className="relative pt-12 pb-16 border-b border-white/[0.06] overflow-hidden">
        {/* Subtle Ambient Gold Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-600/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/25 bg-amber-950/20 text-amber-300 text-xs tracking-widest font-mono uppercase">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>ARCHETYPE 02 // EDITORIAL COMMERCE SPEC</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-serif tracking-tight text-[#FAF8F5] leading-tight font-normal">
                Minimal Luxury Atelier
              </h1>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
                Engineered for high-ticket direct-to-consumer luxury brands. Replaces cluttered discount e-commerce with editorial storytelling, kinetic product interactions, and a verified <strong className="text-amber-300 font-medium">3.8x conversion architecture</strong>.
              </p>
            </div>

            {/* Currency Switcher & Conversion Pill */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center p-1 rounded-xl bg-white/[0.04] border border-white/10 text-xs">
                {(['USD', 'EUR', 'GBP', 'INR'] as const).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => setSelectedCurrency(curr)}
                    className={`px-2.5 py-1 rounded-lg font-mono text-xs transition-all ${
                      selectedCurrency === curr
                        ? 'bg-amber-400 text-black font-semibold'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCartOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs transition-all shadow-lg shadow-amber-500/10 active:scale-95 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Quick Bag (1)</span>
              </button>
            </div>
          </div>

          {/* Key Metrics Proving Claims */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-amber-500/20">
              <div className="text-xs text-zinc-400 flex items-center justify-between mb-1">
                <span>Verified Conversion</span>
                <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <div className="text-2xl font-serif text-amber-300">3.8x Gain</div>
              <div className="text-[11px] text-zinc-500 font-mono mt-0.5">Industry avg 1.8% vs 6.84%</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-xs text-zinc-400 flex items-center justify-between mb-1">
                <span>Scroll Physics</span>
                <Zap className="w-3.5 h-3.5 text-amber-300" />
              </div>
              <div className="text-2xl font-mono text-white">60 FPS</div>
              <div className="text-[11px] text-zinc-500 font-mono mt-0.5">Lenis Smooth Momentum</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-xs text-zinc-400 flex items-center justify-between mb-1">
                <span>Checkout Velocity</span>
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              </div>
              <div className="text-2xl font-mono text-white">1-Tap Fast</div>
              <div className="text-[11px] text-zinc-500 font-mono mt-0.5">Zero Registration Friction</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-xs text-zinc-400 flex items-center justify-between mb-1">
                <span>Average Order Value</span>
                <Shield className="w-3.5 h-3.5 text-amber-300" />
              </div>
              <div className="text-2xl font-serif text-white">+64% AOV</div>
              <div className="text-[11px] text-zinc-500 font-mono mt-0.5">Curated Lookbook Bundling</div>
            </div>
          </div>
        </div>
      </section>

      {/* Kinetic Product Catalog Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.06]">
          <div>
            <span className="font-mono text-xs text-amber-400/80 uppercase tracking-wider">Autumn / Winter Atelier</span>
            <h2 className="text-xl sm:text-2xl font-serif text-white mt-1">Kinetic Product Catalog</h2>
          </div>
          <span className="text-xs text-zinc-400 font-light hidden sm:inline">
            Hover to test kinetic product transitions & material reveals
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => {
            const selectedColorIdx = activeColor[product.id] || 0;
            const currentColor = product.colors[selectedColorIdx];

            return (
              <div
                key={product.id}
                className="group rounded-3xl p-6 bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.08] hover:border-amber-500/30 transition-all duration-500 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Top Tags */}
                <div className="flex items-center justify-between text-xs mb-4">
                  <span className="font-mono text-[11px] text-amber-300/80">{product.badge}</span>
                  <span className="text-zinc-500 text-[11px] font-mono">{product.tag}</span>
                </div>

                {/* Simulated Kinetic Product Artboard */}
                <div className="aspect-[4/3] rounded-2xl bg-[#121110] border border-white/[0.06] p-6 relative flex flex-col items-center justify-center overflow-hidden group-hover:bg-[#161413] transition-colors">
                  {/* Kinetic floating aura */}
                  <div
                    className="w-28 h-28 rounded-full blur-2xl opacity-30 transition-all duration-700 group-hover:scale-125"
                    style={{ backgroundColor: currentColor.hex }}
                  />

                  <div className="relative z-10 text-center space-y-2">
                    <div
                      className="w-20 h-20 rounded-2xl mx-auto border border-white/20 shadow-2xl transition-transform duration-500 group-hover:scale-110 flex items-center justify-center"
                      style={{
                        background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.25), ${currentColor.hex})`,
                      }}
                    >
                      <Sparkles className="w-8 h-8 text-white/70" />
                    </div>
                    <div className="font-mono text-[11px] text-zinc-400 tracking-wide pt-1">
                      {currentColor.name}
                    </div>
                  </div>

                  <div className="absolute bottom-2.5 right-3 text-[10px] font-mono text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    WebGL Kinetic Preview
                  </div>
                </div>

                {/* Color Selector */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-zinc-500">Finishes:</span>
                  <div className="flex items-center gap-2">
                    {product.colors.map((c, i) => (
                      <button
                        key={c.name}
                        onClick={() => setActiveColor((prev) => ({ ...prev, [product.id]: i }))}
                        className={`w-5 h-5 rounded-full border transition-all cursor-pointer ${
                          selectedColorIdx === i
                            ? 'border-amber-400 scale-110 ring-2 ring-amber-400/30'
                            : 'border-white/20 hover:scale-105'
                        }`}
                        style={{ backgroundColor: c.hex }}
                        title={c.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Details & Price */}
                <div className="mt-4 pt-4 border-t border-white/[0.06] space-y-2">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-base font-serif text-white font-medium">{product.name}</h3>
                    <span className="font-mono text-sm font-semibold text-amber-300">
                      {formatPrice(product.priceUSD)}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">{product.subtitle}</p>
                  <div className="text-[11px] font-mono text-zinc-500 pt-1">{product.material}</div>
                </div>

                {/* Quick 1-Tap CTA */}
                <button
                  onClick={() => setCartOpen(true)}
                  className="mt-6 w-full py-2.5 px-4 rounded-xl bg-white/[0.06] hover:bg-amber-400 hover:text-black border border-white/10 hover:border-amber-400 text-xs font-semibold text-white transition-all flex items-center justify-center gap-2 group-hover:bg-amber-400 group-hover:text-black cursor-pointer"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Instant 1-Tap Order</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* 1-Tap Checkout Slide-out Drawer */}
        {cartOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/60 backdrop-blur-sm animate-fadeIn">
            <div className="w-full max-w-md h-full bg-[#0D0C0A] border-l border-white/10 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4 text-amber-400" />
                    <span className="font-serif text-lg text-white">Instant Atelier Bag</span>
                  </div>
                  <button
                    onClick={() => setCartOpen(false)}
                    className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Why 3.8x Conversion Works */}
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 space-y-1">
                  <div className="font-semibold text-amber-300 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Frictionless 1-Tap Architecture</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-zinc-300">
                    Eliminates the 5-step registration drop-off. Customers complete orders in under 12 seconds with biometric Apple Pay / Google Pay.
                  </p>
                </div>

                {/* Selected Item */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-sm font-medium text-white">The Monolith Chronograph</div>
                      <div className="text-xs text-zinc-400">Finish: Obsidian Noir // Limited #142</div>
                    </div>
                    <span className="font-mono text-sm text-amber-300">{formatPrice(1850)}</span>
                  </div>
                  <div className="text-[11px] text-zinc-500 font-mono">Complimentary Insured Courier Handover</div>
                </div>

                {/* Checkout Summary */}
                <div className="space-y-2 text-xs pt-2">
                  <div className="flex justify-between text-zinc-400">
                    <span>Subtotal</span>
                    <span className="font-mono text-white">{formatPrice(1850)}</span>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>White-Glove Shipping</span>
                    <span className="font-mono text-emerald-400">Complimentary ($0)</span>
                  </div>
                  <div className="flex justify-between text-white font-medium pt-2 border-t border-white/[0.06] text-sm">
                    <span>Total</span>
                    <span className="font-mono text-amber-300 font-semibold">{formatPrice(1850)}</span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="space-y-3 pt-6 border-t border-white/[0.08]">
                {checkoutComplete ? (
                  <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-1 text-xs text-emerald-300">
                    <Check className="w-6 h-6 mx-auto text-emerald-400" />
                    <div className="font-semibold text-sm">Demo Checkout Successful!</div>
                    <div className="text-zinc-400 text-[11px]">Instant WhatsApp order telemetry dispatched.</div>
                  </div>
                ) : (
                  <>
                    <button
                      onClick={() => setCheckoutComplete(true)}
                      className="w-full py-3.5 px-6 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-semibold text-sm transition-all shadow-xl shadow-amber-500/20 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <CreditCard className="w-4 h-4" />
                      <span>Simulate 1-Tap Apple Pay Checkout</span>
                    </button>
                    <div className="text-center text-[10px] text-zinc-500 font-mono">
                      Shopify Plus Headless • 100% PCI-DSS Certified
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Bottom Conversion Guarantee Box */}
        <div className="mt-16 p-8 rounded-3xl border border-amber-500/20 bg-gradient-to-r from-amber-950/30 via-black to-black text-center space-y-4">
          <h2 className="text-xl sm:text-2xl font-serif text-white">
            Upgrade your luxury e-commerce to this high-converting editorial standard
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto font-light">
            WebLabs builds custom luxury e-commerce architectures on Shopify Plus, Next.js, and WebGL tailored to amplify your brand authority and maximize conversion.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/919021509565?text=Hi%20Aixentrix,%20I%20want%20the%20Minimal%20Luxury%20Atelier%20e-commerce%20architecture%20for%20my%20brand."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-semibold text-sm transition-all shadow-lg shadow-amber-500/20 active:scale-95"
            >
              <span>Build My Luxury Atelier Storefront</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
