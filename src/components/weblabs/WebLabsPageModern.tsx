import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  Play,
  Check,
  ChevronDown,
  ChevronUp,
  MousePointer,
  TrendingUp,
  Zap,
  ShieldCheck,
  Search,
  Award
} from 'lucide-react';

export function WebLabsPageModern() {
  const [activeTab, setActiveTab] = useState<'visits' | 'funnels' | 'conversions'>('visits');
  const [pricingCycle, setPricingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [emailInput, setEmailInput] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Refs for Apple scroll animation targets
  const containerRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const heroStarRef = useRef<SVGSVGElement>(null);
  const bentoRef = useRef<HTMLDivElement>(null);
  const horizontalShowcaseRef = useRef<HTMLDivElement>(null);
  const chartPathRef = useRef<SVGPathElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);
  const statCard1Ref = useRef<HTMLDivElement>(null);
  const statCard2Ref = useRef<HTMLDivElement>(null);
  const statCard3Ref = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLHeadingElement>(null);

  // Apple-style Card Mouse Spotlight
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
    }
  };

  // Initial page reveal transition trigger
  useEffect(() => {
    const timer = setTimeout(() => setPageLoaded(true), 120);
    return () => clearTimeout(timer);
  }, []);

  const isShowcaseHoveredRef = useRef(false);
  const isShowcaseInteractingRef = useRef(false);

  const scrollShowcase = (direction: 'left' | 'right') => {
    if (horizontalShowcaseRef.current) {
      isShowcaseInteractingRef.current = true;
      const scrollAmount = 380;
      horizontalShowcaseRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(() => {
        isShowcaseInteractingRef.current = false;
      }, 1000);
    }
  };

  // Continuous infinite auto-scroll sideways
  useEffect(() => {
    const el = horizontalShowcaseRef.current;
    if (!el) return;

    let animId: number;
    let lastTime = performance.now();

    const loop = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      if (!isShowcaseHoveredRef.current && !isShowcaseInteractingRef.current && el) {
        // Continuous smooth auto-scroll: ~42px per second
        const move = (42 * delta) / 1000;
        el.scrollLeft += move;

        // Loop seamlessly once scrolled through one-fourth of repeated items
        const segment = el.scrollWidth / 4;
        if (segment > 0 && el.scrollLeft >= segment * 2) {
          el.scrollLeft -= segment;
        }
      }
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // 1. Initialize Lenis Buttery Smooth Scroll (Apple-grade inertia)
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 2,
    });

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on('scroll', (e: any) => {
      ScrollTrigger.update();
      if (document.documentElement.scrollHeight > window.innerHeight) {
        const progress = e.scroll / (document.documentElement.scrollHeight - window.innerHeight);
        setScrollProgress(Math.min(Math.max(progress, 0), 1));
      }
    });

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      // Track current active section for smooth visual cues
      const sectionIds = ['hero', 'features', 'archetypes', 'results', 'pricing', 'faq'];
      sectionIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          ScrollTrigger.create({
            trigger: el,
            start: 'top 50%',
            end: 'bottom 50%',
            onEnter: () => setActiveSection(id),
            onEnterBack: () => setActiveSection(id),
          });
        }
      });

      // 2. Apple Hero Parallax & Perspective Recession
      if (heroTextRef.current && heroStarRef.current) {
        gsap.to(heroTextRef.current, {
          scrollTrigger: {
            trigger: heroTextRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
          y: 80,
          opacity: 0.2,
          scale: 0.95,
          ease: 'power1.out',
        });

        // 3D Chrome Star Dynamic Parallax & Rotation
        gsap.to(heroStarRef.current, {
          scrollTrigger: {
            trigger: heroStarRef.current,
            start: 'top 30%',
            end: 'bottom top',
            scrub: 1.2,
          },
          rotate: 45,
          scale: 1.18,
          y: 120,
          ease: 'power2.out',
        });
      }

      // 3. Apple Bento Grid Staggered 3D Reveal
      if (bentoRef.current) {
        const cards = bentoRef.current.querySelectorAll('.bento-card');
        gsap.fromTo(
          cards,
          {
            y: 60,
            opacity: 0,
            rotateX: 8,
            transformPerspective: 1000,
          },
          {
            scrollTrigger: {
              trigger: bentoRef.current,
              start: 'top 78%',
              end: 'top 30%',
              scrub: 1,
            },
            y: 0,
            opacity: 1,
            rotateX: 0,
            stagger: 0.1,
            ease: 'power2.out',
          }
        );
      }

      // 4. Interactive Bezier Chart Draw-in Animation on Scroll
      if (chartPathRef.current) {
        const length = chartPathRef.current.getTotalLength();
        gsap.set(chartPathRef.current, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        gsap.to(chartPathRef.current, {
          scrollTrigger: {
            trigger: chartPathRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          strokeDashoffset: 0,
          duration: 1.8,
          ease: 'power3.out',
        });
      }

      // 5. Apple Achievements Floating Stats Parallax (Multi-layer depth)
      if (achievementsRef.current) {
        if (statCard1Ref.current) {
          gsap.to(statCard1Ref.current, {
            scrollTrigger: {
              trigger: achievementsRef.current,
              start: 'top 80%',
              end: 'bottom 20%',
              scrub: 1.5,
            },
            y: -45,
            rotate: -1,
            ease: 'none',
          });
        }

        if (statCard2Ref.current) {
          gsap.to(statCard2Ref.current, {
            scrollTrigger: {
              trigger: achievementsRef.current,
              start: 'top 80%',
              end: 'bottom 20%',
              scrub: 2,
            },
            y: 35,
            x: -15,
            rotate: 2,
            ease: 'none',
          });
        }

        if (statCard3Ref.current) {
          gsap.to(statCard3Ref.current, {
            scrollTrigger: {
              trigger: achievementsRef.current,
              start: 'top 80%',
              end: 'bottom 20%',
              scrub: 1,
            },
            y: -25,
            rotate: 4,
            ease: 'none',
          });
        }
      }

      // 6. Pricing Cards Elevation Scrub
      if (pricingRef.current) {
        const pCards = pricingRef.current.querySelectorAll('.pricing-card');
        gsap.fromTo(
          pCards,
          { y: 50, opacity: 0.4 },
          {
            scrollTrigger: {
              trigger: pricingRef.current,
              start: 'top 75%',
              end: 'top 35%',
              scrub: 1,
            },
            y: 0,
            opacity: 1,
            stagger: 0.12,
            ease: 'power2.out',
          }
        );
      }

      // 7. Giant Outlined Watermark Bottom Scale Reveal
      if (watermarkRef.current) {
        gsap.fromTo(
          watermarkRef.current,
          { scale: 0.85, opacity: 0.05 },
          {
            scrollTrigger: {
              trigger: watermarkRef.current,
              start: 'top 95%',
              end: 'bottom bottom',
              scrub: 1.5,
            },
            scale: 1,
            opacity: 1,
            ease: 'power2.out',
          }
        );
      }
    }, containerRef);

    return () => {
      ctx.revert();
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi WebLabs! I'd like to discuss building a high-performance website for my business."
    );
    window.open(`https://wa.me/919021509565?text=${message}`, '_blank');
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput) {
      setEmailSubmitted(true);
      setTimeout(() => setEmailSubmitted(false), 4000);
      setEmailInput('');
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-[#070709] text-white font-sans selection:bg-white/20 selection:text-white overflow-hidden"
    >
      {/* ── APPLE SCROLL PROGRESS BAR (Top 2px line) ── */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none bg-white/[0.06]">
        <div
          className="h-full bg-gradient-to-r from-zinc-500 via-white to-zinc-300 shadow-[0_0_12px_rgba(255,255,255,0.75)] transition-transform duration-75 ease-out origin-left"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>

      {/* ── MOUSE SPOTLIGHT (Apple frosted glass effect) ── */}
      <div
        className="fixed inset-0 pointer-events-none z-20 transition-opacity duration-300"
        style={{
          background: `radial-gradient(700px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.035), transparent 45%)`,
        }}
      />

      {/* Background Subtle Grid & Ambient Glass Lighting Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Subtle geometric grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />
        {/* Layered ambient light spots to make glass blur & refraction visibly obvious */}
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-blue-500/10 via-indigo-500/05 to-transparent rounded-full blur-[120px]" />
        <div className="absolute top-[450px] right-[-100px] w-[550px] h-[550px] bg-gradient-to-br from-indigo-500/08 via-purple-500/05 to-transparent rounded-full blur-[140px]" />
        <div className="absolute top-[1200px] left-[-150px] w-[650px] h-[650px] bg-gradient-to-tr from-cyan-500/08 via-blue-500/04 to-transparent rounded-full blur-[150px]" />
        <div className="absolute top-[2000px] right-[-50px] w-[600px] h-[600px] bg-gradient-to-bl from-emerald-500/06 via-teal-500/04 to-transparent rounded-full blur-[140px]" />
        <div className="absolute top-[2900px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-indigo-500/06 via-transparent to-transparent rounded-full blur-[160px]" />
      </div>

      {/* ── CINEMATIC INITIAL REVEAL CURTAIN (Seamless Page Transition) ── */}
      <div
        className={`fixed inset-0 z-50 bg-[#070709] flex items-center justify-center pointer-events-none transition-all duration-700 ease-out ${
          pageLoaded ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'
        }`}
      >
        <div className="flex items-center gap-2 text-white animate-pulse">
          <span className="text-xl font-bold">✦</span>
          <span className="text-sm font-semibold tracking-wider uppercase font-mono">WebLabs</span>
        </div>
      </div>

      {/* ── RIGHT-SIDE SECTION NAVIGATION RAIL (Visual cue for content progression) ── */}
      <div className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-3 pointer-events-auto">
        {[
          { id: 'hero', label: 'Overview' },
          { id: 'features', label: 'Features' },
          { id: 'archetypes', label: 'Archetypes' },
          { id: 'results', label: 'Results' },
          { id: 'pricing', label: 'Pricing' },
          { id: 'faq', label: 'FAQ' },
        ].map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className="group flex items-center gap-2.5 py-1 text-right transition-all"
            >
              <span
                className={`text-[10px] font-mono tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'text-white opacity-100 font-semibold translate-x-0'
                    : 'text-zinc-500 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0'
                }`}
              >
                {sec.label}
              </span>
              <div
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? 'w-2.5 h-2.5 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] scale-110'
                    : 'w-1.5 h-1.5 bg-white/20 group-hover:bg-white/60 group-hover:scale-125'
                }`}
              />
            </a>
          );
        })}
      </div>

      {/* ── 1. FLOATING NAVIGATION BAR (Glassmorphism Panel) ── */}
      <header className="fixed top-0 left-0 right-0 z-40 h-20 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-8">
          <div className="flex items-center justify-between py-3 px-6 rounded-full glass-nav-panel shadow-2xl transition-all duration-300 hover:border-white/25">
            {/* Brand Logo */}
            <a href="/weblabs" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:border-white/50 transition-colors">
                <span className="text-white text-sm font-bold">✦</span>
              </div>
              <span className="text-base font-bold tracking-tight text-white flex items-center gap-1">
                WebLabs<span className="text-zinc-500 font-normal text-xs">.ai</span>
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400 font-medium">
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#archetypes" className="hover:text-white transition-colors">Archetypes</a>
              <a href="#results" className="hover:text-white transition-colors">Results</a>
              <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              <button
                onClick={openWhatsApp}
                className="hidden sm:block text-sm text-zinc-300 hover:text-white font-medium transition-colors cursor-pointer"
              >
                Sign in
              </button>
              <button
                onClick={openWhatsApp}
                className="px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-all shadow-lg hover:shadow-white/10 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                Start a Project
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── 2. HERO SECTION (With Apple Scroll Parallax & Glass Depth) ── */}
      <section id="hero" className="relative pt-40 sm:pt-48 pb-20 lg:pb-32 z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Typography & CTAs (Parallax Target) */}
            <div ref={heroTextRef} className="lg:col-span-7 space-y-6 sm:space-y-8 text-left will-change-transform">
              {/* Pill Announcement Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill-dark text-xs font-medium text-zinc-300 hover:border-white/25 transition-colors">
                <span className="text-xs text-white">✦</span>
                <span className="tracking-wide">Complete Digital Presence & Web Architecture</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-medium tracking-tight text-white leading-[1.04]">
                The online presence <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                  your business needs
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed font-normal">
                WebLabs provides businesses with professional, high-converting websites engineered to establish undeniable credibility, turn visitors into paying clients, and scale your brand.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={openWhatsApp}
                  className="px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-all shadow-xl hover:shadow-white/20 hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Get Your Website</span>
                  <ArrowUpRight className="w-4 h-4 text-black" />
                </button>

                <a
                  href="#features"
                  className="px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider glass-btn text-white transition-all shadow-md inline-flex items-center gap-2.5 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-white text-white" />
                  <span>Explore Solutions</span>
                </a>
              </div>
            </div>

            {/* Right Column: 3D Chrome Star Sculpture Graphic (Dynamic Scroll Target) */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
                <div className="absolute inset-0 bg-radial from-white/[0.08] via-transparent to-transparent rounded-full blur-2xl pointer-events-none" />

                <svg
                  ref={heroStarRef}
                  viewBox="0 0 400 400"
                  className="w-full h-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] filter will-change-transform"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="chromeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="30%" stopColor="#D4D4D8" />
                      <stop offset="50%" stopColor="#71717A" />
                      <stop offset="70%" stopColor="#E4E4E7" />
                      <stop offset="100%" stopColor="#18181B" />
                    </linearGradient>

                    <linearGradient id="chromeGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#F4F4F5" />
                      <stop offset="40%" stopColor="#52525B" />
                      <stop offset="65%" stopColor="#A1A1AA" />
                      <stop offset="100%" stopColor="#27272A" />
                    </linearGradient>

                    <radialGradient id="starGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  <circle cx="250" cy="180" r="140" fill="url(#starGlow)" />

                  {/* Primary 3D Metallic Star */}
                  <g transform="translate(230, 160) rotate(-8)">
                    <path
                      d="M 0,-120 C 5,-35 35,-5 120,0 C 35,5 5,35 0,120 C -5,35 -35,5 -120,0 C -35,-5 -5,-35 0,-120 Z"
                      fill="#09090B"
                      stroke="#3F3F46"
                      strokeWidth="1.5"
                    />
                    <path d="M 0,-120 C 5,-35 35,-5 120,0 L 0,0 Z" fill="url(#chromeGrad1)" opacity="0.9" />
                    <path d="M 120,0 C 35,5 5,35 0,120 L 0,0 Z" fill="url(#chromeGrad2)" opacity="0.75" />
                    <path d="M 0,120 C -5,35 -35,5 -120,0 L 0,0 Z" fill="url(#chromeGrad1)" opacity="0.6" />
                    <path d="M -120,0 C -35,-5 -5,-35 0,-120 L 0,0 Z" fill="url(#chromeGrad2)" opacity="0.85" />
                    <line x1="0" y1="-120" x2="0" y2="120" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.6" />
                    <line x1="-120" y1="0" x2="120" y2="0" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.6" />
                    <circle cx="0" cy="0" r="4" fill="#FFFFFF" opacity="0.9" />
                  </g>

                  {/* Secondary Smaller 3D Metallic Star */}
                  <g transform="translate(130, 90) scale(0.48) rotate(18)">
                    <path
                      d="M 0,-120 C 5,-35 35,-5 120,0 C 35,5 5,35 0,120 C -5,35 -35,5 -120,0 C -35,-5 -5,-35 0,-120 Z"
                      fill="url(#chromeGrad1)"
                      stroke="#52525B"
                      strokeWidth="2"
                    />
                    <line x1="0" y1="-120" x2="0" y2="120" stroke="#FFFFFF" strokeWidth="2" opacity="0.7" />
                    <line x1="-120" y1="0" x2="120" y2="0" stroke="#FFFFFF" strokeWidth="2" opacity="0.7" />
                  </g>

                  {/* Tiny 3rd Star Accent */}
                  <g transform="translate(320, 270) scale(0.24) rotate(45)">
                    <path
                      d="M 0,-120 C 5,-35 35,-5 120,0 C 35,5 5,35 0,120 C -5,35 -35,5 -120,0 C -35,-5 -5,-35 0,-120 Z"
                      fill="url(#chromeGrad2)"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. LOGO CLOUD / SOCIAL PROOF STRIP ── */}
      <section className="relative py-12 border-y border-white/[0.06] bg-[#0A0A0E]/60 z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-wrap items-center justify-between gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
              </svg>
              <span className="font-semibold text-sm tracking-tight">Google</span>
            </div>

            <div className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
              </svg>
              <span className="font-semibold text-sm tracking-tight">Framer</span>
            </div>

            <div className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.47c.56-.68.94-1.63.84-2.58-.81.03-1.8.54-2.38 1.22-.51.59-.96 1.56-.84 2.48.91.07 1.82-.44 2.38-1.12z" />
              </svg>
              <span className="font-semibold text-sm tracking-tight">Apple</span>
            </div>

            <div className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M13.96 0H24v24L13.96 0zM0 0h10.04L0 24V0zm7.1 14.17l2.84-7.07 4.88 12.9H11.5l-1.3-3.41H7.57l1.77-4.47-2.24 2.05z" />
              </svg>
              <span className="font-semibold text-sm tracking-tight">Adobe</span>
            </div>

            <div className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span className="font-semibold text-sm tracking-tight">LinkedIn</span>
            </div>

            <div className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M0 0h11v11H0zM13 0h11v11H13zM0 13h11v11H0zM13 13h11v11H13z" />
              </svg>
              <span className="font-semibold text-sm tracking-tight">Microsoft</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. BENTO FEATURES GRID SECTION (Apple Staggered 3D Reveal) ── */}
      <section id="features" className="relative py-24 lg:py-32 z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-2xl space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill-dark text-xs font-medium text-zinc-300">
              <Sparkles className="w-3 h-3 text-zinc-400" />
              <span>Full-Stack Web Presence</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white leading-tight">
              A Professional Website <br />
              That Converts Visitors
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              From instant brand credibility to automated search discovery and direct WhatsApp inquiries, we provide everything your business needs to win online.
            </p>
          </div>

          {/* Bento Grid */}
          <div ref={bentoRef} className="grid grid-cols-1 md:grid-cols-12 gap-6 perspective-[1000px]">
            {/* Bento Card 1: Metric Selectors */}
            <div className="bento-card glass-card md:col-span-7 rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-8">
                  <button
                    onClick={() => setActiveTab('visits')}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                      activeTab === 'visits'
                        ? 'bg-white text-black font-semibold shadow-lg'
                        : 'glass-pill-dark text-zinc-400 hover:text-white'
                    }`}
                  >
                    Customer visits
                  </button>
                  <button
                    onClick={() => setActiveTab('funnels')}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                      activeTab === 'funnels'
                        ? 'bg-white text-black font-semibold shadow-lg'
                        : 'glass-pill-dark text-zinc-400 hover:text-white'
                    }`}
                  >
                    Page Funnels
                  </button>
                  <button
                    onClick={() => setActiveTab('conversions')}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                      activeTab === 'conversions'
                        ? 'bg-white text-black font-semibold shadow-lg'
                        : 'glass-pill-dark text-zinc-400 hover:text-white'
                    }`}
                  >
                    Conversions
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl glass-card space-y-2">
                    <span className="text-[11px] text-zinc-500 font-medium">Page Impressions</span>
                    <div className="flex items-center gap-1.5 text-white font-mono text-sm tracking-wider">
                      <span>••••••••</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-medium">
                      <TrendingUp className="w-3 h-3" /> +24.8% vs last mo
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl glass-card space-y-2">
                    <span className="text-[11px] text-zinc-500 font-medium">Unique Sessions</span>
                    <div className="flex items-center gap-1.5 text-white font-mono text-sm tracking-wider">
                      <span>••••••••</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-medium">
                      <TrendingUp className="w-3 h-3" /> +18.2% vs last mo
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-8 flex items-center justify-between text-xs text-zinc-500">
                <span>Real-time visitor telemetry</span>
                <span className="text-zinc-400 font-mono">Status: Synced ✦</span>
              </div>
            </div>

            {/* Bento Card 2: Analytics Chart (With Apple Draw-in Animation) */}
            <div className="bento-card glass-card md:col-span-5 rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-zinc-400">Growth Velocity</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-semibold">
                    +18%
                  </span>
                </div>

                <div className="relative h-44 w-full pt-4">
                  <div className="absolute top-2 left-1/3 -translate-x-1/2 px-3 py-1.5 rounded-xl glass-pill-dark text-white text-[11px] font-semibold shadow-xl flex items-center gap-2 z-10">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>12.5k views</span>
                    <span className="text-zinc-400 font-normal">|</span>
                    <span className="text-zinc-400">3.2k clicks</span>
                  </div>

                  <svg viewBox="0 0 300 120" className="w-full h-full overflow-visible">
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    <path
                      d="M 10,95 Q 60,85 100,50 T 180,35 T 290,15 L 290,110 L 10,110 Z"
                      fill="url(#chartGradient)"
                    />

                    <path
                      ref={chartPathRef}
                      d="M 10,95 Q 60,85 100,50 T 180,35 T 290,15"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="2.5"
                    />

                    <circle cx="100" cy="50" r="4" fill="#FFFFFF" />
                    <circle cx="180" cy="35" r="5" fill="#FFFFFF" stroke="#000000" strokeWidth="1.5" />
                    <circle cx="290" cy="15" r="4" fill="#FFFFFF" />
                  </svg>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-500">
                <span>Google Organic Traffic</span>
                <span className="text-white font-medium">99.4% Health</span>
              </div>
            </div>

            {/* Bento Card 3: Google Search Console */}
            <div className="bento-card glass-card md:col-span-5 rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill-dark text-xs font-medium text-zinc-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>Connect with</span>
                </div>

                <div className="pt-2 relative">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Google</span>
                  </div>
                  <span className="text-xs text-zinc-500 block mt-1">Search Console & Core Web Vitals</span>

                  <div className="absolute top-0 right-4 p-2 rounded-full glass-btn shadow-lg animate-bounce">
                    <MousePointer className="w-4 h-4 text-white fill-white" />
                  </div>
                </div>
              </div>

              <div className="pt-8 text-xs text-zinc-400 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>1-click indexing & sitemap dispatch</span>
              </div>
            </div>

            {/* Bento Card 4: 3D Stacked Floating Pills */}
            <div className="bento-card glass-card md:col-span-7 rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Turnkey Digital Infrastructure</span>
                
                <div className="py-6 flex flex-col gap-3 relative">
                  <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl glass-pill-dark text-white text-xs font-medium shadow-xl w-fit transform -rotate-2 hover:rotate-0 transition-transform">
                    <Zap className="w-3.5 h-3.5 text-amber-300" />
                    <span>Ultra-Fast Sub-Second Load Speeds</span>
                  </div>
                  
                  <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white text-black text-xs font-semibold shadow-2xl w-fit ml-8 transform rotate-1 hover:rotate-0 transition-transform">
                    <TrendingUp className="w-3.5 h-3.5 text-black" />
                    <span>Conversion-First UX & WhatsApp CRM</span>
                  </div>

                  <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl glass-pill-dark text-white text-xs font-medium shadow-xl w-fit ml-16 transform -rotate-1 hover:rotate-0 transition-transform">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Domain, SSL, Hosting & Ongoing Support</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-500">
                <span>100% Turnkey Handover</span>
                <span className="text-zinc-400">Zero Technical Hassle</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4.5 HORIZONTAL SCROLL SHOWCASE (Apple-Style Horizontal Snap Carousel) ── */}
      <section id="archetypes" className="relative py-24 z-10 border-t border-white/[0.06] bg-[#09090D]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill-dark text-xs font-medium text-zinc-300">
              <span className="text-xs">✦</span>
              <span>Tailored For Every Industry</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white leading-tight">
              Websites Engineered <br />
              for Your Industry
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl leading-relaxed">
              Every business is unique. We engineer bespoke website architectures tailored to your sector—built to establish market authority and maximize customer inquiries.
            </p>
          </div>

          {/* Horizontal Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollShowcase('left')}
              className="w-10 h-10 rounded-full bg-white/[0.05] hover:bg-white/[0.12] border border-white/10 flex items-center justify-center text-white transition-all cursor-pointer shadow-lg active:scale-95"
              aria-label="Scroll left"
            >
              <ChevronDown className="w-4 h-4 rotate-90" />
            </button>
            <button
              onClick={() => scrollShowcase('right')}
              className="w-10 h-10 rounded-full bg-white text-black hover:bg-zinc-200 flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-95"
              aria-label="Scroll right"
            >
              <ChevronDown className="w-4 h-4 -rotate-90 text-black" />
            </button>
          </div>
        </div>

        {/* Continuous Auto-Scrolling Horizontal Track */}
        <div className="relative w-full overflow-hidden">
          {/* Subtle edge fade masks */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-[#09090D] to-transparent z-20" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-[#09090D] to-transparent z-20" />

          <div
            ref={horizontalShowcaseRef}
            onMouseEnter={() => { isShowcaseHoveredRef.current = true; }}
            onMouseLeave={() => { isShowcaseHoveredRef.current = false; }}
            onTouchStart={() => { isShowcaseInteractingRef.current = true; }}
            onTouchEnd={() => { setTimeout(() => { isShowcaseInteractingRef.current = false; }, 1200); }}
            className="flex gap-6 overflow-x-auto scrollbar-none px-6 sm:px-8 pb-6 select-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[
              {
                id: '01',
                title: 'HyperScale AI & SaaS',
                category: 'Cloud Software',
                perf: '99+ PageSpeed',
                tech: 'Next.js 15 • Tailwind • GSAP',
                gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
                badge: '0.2s TTFB',
                desc: 'High-frequency interactive dashboards with client telemetry, masked metrics, and sub-second navigation.',
                href: '/weblabs/hyperscale-ai',
              },
              {
                id: '02',
                title: 'Minimal Luxury Atelier',
                category: 'Editorial E-Commerce',
                perf: '60 FPS Smooth Scroll',
                tech: 'Shopify Plus • WebGL • Lenis',
                gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
                badge: '3.8x Conversion',
                desc: 'High-converting editorial catalog design with kinetic product cards and instant 1-tap checkout.',
                href: '/weblabs/minimal-luxury-atelier',
              },
              {
                id: '03',
                title: 'Global FinTech Portal',
                category: 'Financial Services',
                perf: 'Bank-Grade Security',
                tech: 'Astro • Supabase • TypeScript',
                gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
                badge: 'Zero Latency',
                desc: 'Real-time telemetry, interactive yield calculators, and enterprise compliance architecture.',
                href: '/weblabs/global-fintech-portal',
              },
              {
                id: '04',
                title: 'Developer Infrastructure',
                category: 'Dev Tools & APIs',
                perf: '100% Core Web Vitals',
                tech: 'React 19 • MDX • Vite',
                gradient: 'from-purple-500/20 via-indigo-500/10 to-transparent',
                badge: 'Automated SEO',
                desc: 'Interactive code sandboxes, lightning search, and documentation engineered for dev velocity.',
                href: '/weblabs/developer-infrastructure',
              },
              {
                id: '01',
                title: 'HyperScale AI & SaaS',
                category: 'Cloud Software',
                perf: '99+ PageSpeed',
                tech: 'Next.js 15 • Tailwind • GSAP',
                gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
                badge: '0.2s TTFB',
                desc: 'High-frequency interactive dashboards with client telemetry, masked metrics, and sub-second navigation.',
                href: '/weblabs/hyperscale-ai',
              },
              {
                id: '02',
                title: 'Minimal Luxury Atelier',
                category: 'Editorial E-Commerce',
                perf: '60 FPS Smooth Scroll',
                tech: 'Shopify Plus • WebGL • Lenis',
                gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
                badge: '3.8x Conversion',
                desc: 'High-converting editorial catalog design with kinetic product cards and instant 1-tap checkout.',
                href: '/weblabs/minimal-luxury-atelier',
              },
              {
                id: '03',
                title: 'Global FinTech Portal',
                category: 'Financial Services',
                perf: 'Bank-Grade Security',
                tech: 'Astro • Supabase • TypeScript',
                gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
                badge: 'Zero Latency',
                desc: 'Real-time telemetry, interactive yield calculators, and enterprise compliance architecture.',
                href: '/weblabs/global-fintech-portal',
              },
              {
                id: '04',
                title: 'Developer Infrastructure',
                category: 'Dev Tools & APIs',
                perf: '100% Core Web Vitals',
                tech: 'React 19 • MDX • Vite',
                gradient: 'from-purple-500/20 via-indigo-500/10 to-transparent',
                badge: 'Automated SEO',
                desc: 'Interactive code sandboxes, lightning search, and documentation engineered for dev velocity.',
                href: '/weblabs/developer-infrastructure',
              },
              {
                id: '01',
                title: 'HyperScale AI & SaaS',
                category: 'Cloud Software',
                perf: '99+ PageSpeed',
                tech: 'Next.js 15 • Tailwind • GSAP',
                gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
                badge: '0.2s TTFB',
                desc: 'High-frequency interactive dashboards with client telemetry, masked metrics, and sub-second navigation.',
                href: '/weblabs/hyperscale-ai',
              },
              {
                id: '02',
                title: 'Minimal Luxury Atelier',
                category: 'Editorial E-Commerce',
                perf: '60 FPS Smooth Scroll',
                tech: 'Shopify Plus • WebGL • Lenis',
                gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
                badge: '3.8x Conversion',
                desc: 'High-converting editorial catalog design with kinetic product cards and instant 1-tap checkout.',
                href: '/weblabs/minimal-luxury-atelier',
              },
              {
                id: '03',
                title: 'Global FinTech Portal',
                category: 'Financial Services',
                perf: 'Bank-Grade Security',
                tech: 'Astro • Supabase • TypeScript',
                gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
                badge: 'Zero Latency',
                desc: 'Real-time telemetry, interactive yield calculators, and enterprise compliance architecture.',
                href: '/weblabs/global-fintech-portal',
              },
              {
                id: '04',
                title: 'Developer Infrastructure',
                category: 'Dev Tools & APIs',
                perf: '100% Core Web Vitals',
                tech: 'React 19 • MDX • Vite',
                gradient: 'from-purple-500/20 via-indigo-500/10 to-transparent',
                badge: 'Automated SEO',
                desc: 'Interactive code sandboxes, lightning search, and documentation engineered for dev velocity.',
                href: '/weblabs/developer-infrastructure',
              },
            ].map((project, idx) => (
              <a
                key={idx}
                href={project.href}
                className="shrink-0 w-[310px] sm:w-[380px] rounded-3xl p-7 glass-card relative overflow-hidden flex flex-col justify-between group cursor-pointer transition-all duration-300 hover:border-white/30 hover:-translate-y-1 block"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 pointer-events-none group-hover:opacity-75 transition-opacity duration-500`} />
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-zinc-500">{project.id} // {project.category}</span>
                    <span className="px-2.5 py-0.5 rounded-full glass-pill-dark text-[10px] font-semibold text-white font-mono">
                      {project.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-medium text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-300 transition-all">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                    {project.desc}
                  </p>
                </div>

                <div className="relative z-10 pt-8 border-t border-white/[0.06] mt-6 flex items-center justify-between text-xs">
                  <span className="font-mono text-[11px] text-zinc-500">{project.tech}</span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.08] group-hover:bg-white text-white group-hover:text-black font-medium transition-all shadow-sm">
                    <span>Inspect</span>
                    <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. ACHIEVEMENTS / STATS SECTION (Apple Multi-layer Parallax & Glass Depth) ── */}
      <section ref={achievementsRef} id="results" className="relative py-24 lg:py-32 z-10 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill-dark text-xs font-medium text-zinc-300">
                <Award className="w-3 h-3 text-zinc-400" />
                <span>Proven Business Impact</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white leading-tight">
                Measurable Growth <br />
                & Market Credibility
              </h2>

              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-lg">
                From local businesses establishing their first online footprint to scaling companies upgrading their digital presence, we deliver tangible business growth and qualified inquiries.
              </p>

              <div className="pt-4 flex flex-col gap-3">
                <div className="flex items-center gap-3 text-xs text-zinc-300">
                  <div className="w-5 h-5 rounded-full glass-pill-dark flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span>Google PageSpeed score guaranteed 95+ with sub-second loads</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-zinc-300">
                  <div className="w-5 h-5 rounded-full glass-pill-dark flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span>Built-in local search visibility, verified Schema & Google Maps indexing</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-zinc-300">
                  <div className="w-5 h-5 rounded-full glass-pill-dark flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span>Full ownership: code, domain, hosting, and all brand assets</span>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Stacked Floating Stat Cards with Parallax Physics */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="relative w-full max-w-[460px] h-[340px]">
                {/* Floating Card 1 */}
                <div
                  ref={statCard1Ref}
                  className="absolute top-0 right-4 w-52 p-5 rounded-2xl glass-card transform rotate-3 will-change-transform"
                >
                  <div className="flex items-center justify-between mb-3">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span className="text-[10px] uppercase font-mono text-zinc-500">Growth</span>
                  </div>
                  <div className="text-3xl font-bold tracking-tight text-white mb-1">200%</div>
                  <div className="text-xs text-zinc-400">Organic Traffic Lift</div>
                </div>

                {/* Floating Card 2 */}
                <div
                  ref={statCard2Ref}
                  className="absolute top-24 left-4 w-56 p-5 rounded-2xl glass-card transform -rotate-3 will-change-transform"
                >
                  <div className="flex items-center justify-between mb-3">
                    <Search className="w-4 h-4 text-white" />
                    <span className="text-[10px] uppercase font-mono text-zinc-500">Reach</span>
                  </div>
                  <div className="text-3xl font-bold tracking-tight text-white mb-1">50K+</div>
                  <div className="text-xs text-zinc-400">Search Queries Ranked</div>
                </div>

                {/* Floating Card 3 */}
                <div
                  ref={statCard3Ref}
                  className="absolute bottom-2 right-12 w-48 p-4 rounded-2xl glass-card transform rotate-2 will-change-transform"
                >
                  <div className="flex items-center justify-between mb-2">
                    <Zap className="w-4 h-4 text-amber-300" />
                    <span className="text-[10px] uppercase font-mono text-zinc-500">Speed</span>
                  </div>
                  <div className="text-2xl font-bold tracking-tight text-white mb-1">99+</div>
                  <div className="text-[11px] text-zinc-400">Core Web Vitals</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. PRICING SECTION (Apple Scrubbing Elevation) ── */}
      <section ref={pricingRef} id="pricing" className="relative py-24 lg:py-32 z-10 border-t border-white/[0.06] overflow-hidden">
        {/* Ambient Gradient Glow for Glass Refraction */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-emerald-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill-dark text-xs font-medium text-zinc-300">
              <span className="text-xs">✦</span>
              <span>Pricing Plans</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">
              Turnkey Website Plans <br />
              for Every Business
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Whether you need a credible business website or a scalable custom web application, we have a plan built for you.
            </p>

            <div className="pt-2 flex items-center justify-center">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-pill-dark">
                <span className={`text-xs ${pricingCycle === 'monthly' ? 'text-white font-medium' : 'text-zinc-400'}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setPricingCycle(pricingCycle === 'monthly' ? 'yearly' : 'monthly')}
                  className="w-11 h-6 rounded-full bg-white/10 border border-white/20 p-0.5 relative transition-colors cursor-pointer"
                >
                  <div
                    className={`w-4.5 h-4.5 rounded-full bg-white transition-transform ${
                      pricingCycle === 'yearly' ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
                <span className={`text-xs ${pricingCycle === 'yearly' ? 'text-white font-medium' : 'text-zinc-400'}`}>
                  Yearly <span className="text-[10px] text-emerald-400 font-mono">(Save 20%)</span>
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            {/* Card 1: Starter Concept */}
            <div className="pricing-card rounded-3xl p-8 glass-card flex flex-col justify-between transition-all duration-300">
              <div className="space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">Starter Concept</span>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-bold text-white">$0</span>
                    <span className="text-xs text-zinc-400">/ mockup</span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-2">
                    Test the waters with a bespoke, interactive design preview tailored to your business.
                  </p>
                </div>

                <ul className="space-y-3 pt-4 border-t border-white/[0.08] text-xs text-zinc-300">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-3.5 h-3.5 text-white" />
                    <span>Custom interactive preview mockup</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-3.5 h-3.5 text-white" />
                    <span>Digital presence & SEO audit</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-3.5 h-3.5 text-white" />
                    <span>Technical stack consultation</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-zinc-500">
                    <span className="w-3.5 h-3.5 text-center leading-none">—</span>
                    <span>Custom domain & hosting</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <button
                  onClick={openWhatsApp}
                  className="w-full py-3 rounded-full text-xs font-semibold uppercase tracking-wider glass-btn transition-all cursor-pointer"
                >
                  Request Free Mockup
                </button>
              </div>
            </div>

            {/* Card 2: Pro (Center Highlighted) */}
            <div className="pricing-card rounded-3xl p-8 bg-white text-black shadow-2xl flex flex-col justify-between relative transform md:-translate-y-2 transition-transform duration-300 hover:scale-[1.02]">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black text-white text-[10px] font-semibold uppercase tracking-widest">
                Most Popular
              </div>

              <div className="space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-wider text-zinc-600 font-semibold">Turnkey Pro</span>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-bold text-black">
                      ${pricingCycle === 'monthly' ? '19' : '15'}
                    </span>
                    <span className="text-xs text-zinc-600">/ month</span>
                  </div>
                  <p className="text-xs text-zinc-600 mt-2">
                    Complete turnkey website designed, engineered, hosted, and launched with zero hassle.
                  </p>
                </div>

                <ul className="space-y-3 pt-4 border-t border-zinc-200 text-xs text-zinc-800">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-3.5 h-3.5 text-black" />
                    <span className="font-medium">Complete responsive website</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-3.5 h-3.5 text-black" />
                    <span>Domain, SSL & high-speed hosting</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-3.5 h-3.5 text-black" />
                    <span>Google Search & Maps indexing</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-3.5 h-3.5 text-black" />
                    <span>WhatsApp lead capture & CRM</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-3.5 h-3.5 text-black" />
                    <span>Sub-second load speed guarantee</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <button
                  onClick={openWhatsApp}
                  className="w-full py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-black hover:bg-zinc-800 text-white transition-all shadow-lg cursor-pointer"
                >
                  Launch Your Website
                </button>
              </div>
            </div>

            {/* Card 3: Premium */}
            <div className="pricing-card rounded-3xl p-8 glass-card flex flex-col justify-between transition-all duration-300">
              <div className="space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">Enterprise Suite</span>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-bold text-white">
                      ${pricingCycle === 'monthly' ? '39' : '32'}
                    </span>
                    <span className="text-xs text-zinc-400">/ month</span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-2">
                    For scaling companies requiring custom web applications, APIs, and dedicated support.
                  </p>
                </div>

                <ul className="space-y-3 pt-4 border-t border-white/[0.08] text-xs text-zinc-300">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-3.5 h-3.5 text-white" />
                    <span>Everything in Turnkey Pro tier</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-3.5 h-3.5 text-white" />
                    <span>Custom API & database integration</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-3.5 h-3.5 text-white" />
                    <span>Automated conversion analytics</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-3.5 h-3.5 text-white" />
                    <span>Dedicated 24/7 priority support</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <button
                  onClick={openWhatsApp}
                  className="w-full py-3 rounded-full text-xs font-semibold uppercase tracking-wider glass-btn transition-all cursor-pointer"
                >
                  Build Custom Solution
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. FAQ SECTION ── */}
      <section id="faq" className="relative py-24 lg:py-32 z-10 border-t border-white/[0.06] overflow-hidden">
        {/* Ambient Gradient Glow for Glass Refraction */}
        <div className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-gradient-to-br from-indigo-500/10 to-cyan-500/08 rounded-full blur-[130px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill-dark text-xs font-medium text-zinc-300">
                <span className="text-xs">✦</span>
                <span>FAQ</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white leading-tight">
                Your Questions <br />
                Answered
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Everything you need to know about our design process, turnaround time, deliverables, and technical handoff.
              </p>
              <div className="pt-4">
                <button
                  onClick={openWhatsApp}
                  className="text-xs font-semibold text-white hover:text-zinc-300 inline-flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Have another question? Chat with us</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3">
              {[
                {
                  q: "How long does it take to build and launch our website?",
                  a: "Most single-page to 5-page business websites are fully designed, developed, and deployed in 7 to 14 business days. We provide a live staging preview link within 72 hours of receiving your brief."
                },
                {
                  q: "Do you provide the domain, hosting, and SSL certificate?",
                  a: "Yes! All turnkey packages include domain registration assistance, ultra-fast global CDN hosting with automatic SSL, and professional business email setup."
                },
                {
                  q: "Can I edit and update content myself after launch?",
                  a: "Absolutely. We build with lightweight, modern headless content management options or clean modular code, giving you full control over text, images, blog posts, and products."
                },
                {
                  q: "How does the SEO optimization and Google indexing work?",
                  a: "We configure Google Search Console, submit your sitemap, structure rich JSON-LD schema (for local business, products, or services), optimize meta tags, and ensure your site scores 95+ on Google PageSpeed."
                },
                {
                  q: "What is your revision and payment process?",
                  a: "We work with a clear milestone process: 50% upfront to initiate wireframes and design, and 50% upon final approval right before domain pointing and launch. Unlimited design revisions during the staging phase."
                }
              ].map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl transition-all ${
                      isOpen
                        ? 'glass-card border-white/25 shadow-xl'
                        : 'glass-card hover:border-white/20 opacity-90 hover:opacity-100'
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full py-4.5 px-6 flex items-center justify-between text-left cursor-pointer"
                    >
                      <span className="text-sm font-medium text-white pr-4">{faq.q}</span>
                      <div className="w-6 h-6 rounded-full bg-white/[0.08] border border-white/10 flex items-center justify-center shrink-0">
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-white" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-zinc-400" />
                        )}
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-white/[0.08]">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. FOOTER WITH MASSIVE OUTLINED BRAND WATERMARK ── */}
      <footer className="relative pt-20 pb-12 border-t border-white/[0.08] bg-[#050507] z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="pb-16 border-b border-white/[0.06] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-sm font-semibold text-white">Ready to elevate your digital presence?</span>
              <p className="text-xs text-zinc-400">Get a free architecture consultation and interactive preview within 24 hours.</p>
            </div>
            
            <form onSubmit={handleSubscribe} className="flex items-center gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your work email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                required
                className="px-4 py-2.5 rounded-full glass-pill-dark text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 w-full sm:w-64 transition-all"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-all cursor-pointer whitespace-nowrap"
              >
                {emailSubmitted ? 'Received!' : 'Request Concept'}
              </button>
            </form>
          </div>

          <div className="py-14 grid grid-cols-2 sm:grid-cols-4 gap-8 text-xs">
            <div className="space-y-3">
              <span className="font-semibold text-white uppercase tracking-wider text-[11px]">Solutions</span>
              <ul className="space-y-2 text-zinc-400">
                <li><a href="#features" className="hover:text-white transition-colors">Headless Web</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Core Web Vitals</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">E-Commerce</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Custom SaaS Portals</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="font-semibold text-white uppercase tracking-wider text-[11px]">Deliverables</span>
              <ul className="space-y-2 text-zinc-400">
                <li><a href="#results" className="hover:text-white transition-colors">Turnkey Launch</a></li>
                <li><a href="#results" className="hover:text-white transition-colors">Google Maps & SEO</a></li>
                <li><a href="#results" className="hover:text-white transition-colors">WhatsApp CRM</a></li>
                <li><a href="#results" className="hover:text-white transition-colors">Domain & Hosting</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="font-semibold text-white uppercase tracking-wider text-[11px]">Company</span>
              <ul className="space-y-2 text-zinc-400">
                <li><a href="/" className="hover:text-white transition-colors">Aixentrix Studio</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing Plans</a></li>
                <li><a href="#archetypes" className="hover:text-white transition-colors">Archetypes</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="font-semibold text-white uppercase tracking-wider text-[11px]">Connect</span>
              <ul className="space-y-2 text-zinc-400">
                <li>
                  <button onClick={openWhatsApp} className="hover:text-white transition-colors cursor-pointer text-left">
                    WhatsApp Chat
                  </button>
                </li>
                <li><a href="mailto:contact@aixentrix.com" className="hover:text-white transition-colors">contact@aixentrix.com</a></li>
                <li><span className="text-zinc-500">Available Mon-Sat</span></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 pb-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
            <div>
              © {new Date().getFullYear()} WebLabs by Aixentrix. All rights reserved.
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-zinc-400">All systems operational</span>
            </div>
          </div>

          {/* Massive Outlined Brand Watermark with Apple Scroll Scale & Reveal */}
          <div className="pt-4 pb-2 text-center select-none pointer-events-none overflow-hidden">
            <h2
              ref={watermarkRef}
              className="text-[14vw] font-black tracking-tighter leading-none uppercase will-change-transform"
              style={{
                WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.15)',
                color: 'transparent',
              }}
            >
              WebLabs
            </h2>
          </div>
        </div>
      </footer>
    </div>
  );
}
