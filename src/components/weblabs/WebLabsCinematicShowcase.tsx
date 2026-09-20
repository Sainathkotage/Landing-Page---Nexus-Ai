import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  CheckCircle2, 
  ArrowRight, 
  ChevronDown, 
  Star, 
  MessageSquare, 
  Sparkles, 
  Cpu,
  Code2,
  Zap,
  Layers,
  Play,
  Search,
  Check,
  ShieldCheck
} from "lucide-react";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Props {
  onThemeChange?: (isDark: boolean) => void;
}

export function WebLabsCinematicShowcase({ onThemeChange }: Props) {
  // Pinned Master Container Ref
  const pinnedSectionRef = useRef<HTMLDivElement>(null);

  // Background Atmospheric Layers
  const darkBgRef = useRef<HTMLDivElement>(null);
  const pastelBgRef = useRef<HTMLDivElement>(null);

  // Hero Text Elements
  const heroTextBlockRef = useRef<HTMLDivElement>(null);
  const stage1EyebrowRef = useRef<HTMLDivElement>(null);
  const stage1TitleRef = useRef<HTMLHeadingElement>(null);
  const stage1FooterRef = useRef<HTMLDivElement>(null);

  // Physical 3D Studio Laptop Assembly Refs
  const laptopAssemblyRef = useRef<HTMLDivElement>(null);
  const laptopHingeRef = useRef<HTMLDivElement>(null);
  const laptopBaseRef = useRef<HTMLDivElement>(null);
  const laptopLidRef = useRef<HTMLDivElement>(null);
  const laptopLidExteriorRef = useRef<HTMLDivElement>(null);
  const laptopScreenRef = useRef<HTMLDivElement>(null);
  const laptopContentRef = useRef<HTMLDivElement>(null);

  // The Signature Glowing Aperture Strip on the Laptop Lip
  const glowingStripRef = useRef<HTMLDivElement>(null);
  const stripGlowFloorRef = useRef<HTMLDivElement>(null);

  // Cursor Ref for live screen interaction
  const cursorPointerRef = useRef<HTMLDivElement>(null);

  // Subsequent Editorial & Case Studies Refs
  const editorialSectionRef = useRef<HTMLDivElement>(null);
  const editorialHeadlineRef = useRef<HTMLDivElement>(null);
  const caseStudiesSectionRef = useRef<HTMLDivElement>(null);
  const project1VisualRef = useRef<HTMLDivElement>(null);
  const project2VisualRef = useRef<HTMLDivElement>(null);
  const project3VisualRef = useRef<HTMLDivElement>(null);
  const project4VisualRef = useRef<HTMLDivElement>(null);

  // Interactive UI State
  const [activeTab, setActiveTab] = useState<number>(0);
  const [selectedPromptChip, setSelectedPromptChip] = useState<string>('Artisanal Bistro');
  const [promptText, setPromptText] = useState<string>('Bespoke Bistro & Pizzeria with 1-tap WhatsApp reservations');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [laptopIsOpen, setLaptopIsOpen] = useState<boolean>(false);

  // Feature Tabs Data (Replicating Frames 00600.jpg - 01125.jpg)
  const featureTabs = [
    {
      id: 0,
      title: 'Zero-Code Bloat',
      badge: 'Performance First',
      description: '100% hand-crafted Astro & Tailwind code. 0 KB unused JS, instant loading, sub-second TTFB.',
      icon: Code2,
    },
    {
      id: 1,
      title: 'Real-Time WhatsApp Routing',
      badge: 'Conversion Engine',
      description: 'Convert high-intent traffic instantly with smart pre-filled WhatsApp routing and 1-tap table booking.',
      icon: MessageSquare,
    },
    {
      id: 2,
      title: 'Omnichannel Integrations',
      badge: 'Ecosystem Ready',
      description: 'Seamlessly linked to Google Maps Local SEO, Instagram bookings, Stripe/UPI, and verified customer reviews.',
      icon: Layers,
    },
    {
      id: 3,
      title: 'Speed of Execution',
      badge: 'Turnkey 7-Day Handover',
      description: 'From initial brand architecture to live production deployment in under 7 business days with full source code ownership.',
      icon: Zap,
    },
  ];

  // Quick category prompt chips
  const promptChips = [
    { label: 'Artisanal Bistro', query: 'Bespoke Bistro & Pizzeria with 1-tap WhatsApp reservations' },
    { label: 'Specialty Healthcare', query: 'Premium Dental Clinic with 30-min patient discovery booking' },
    { label: 'Modern E-Commerce', query: 'Indie Coffee Roastery with roast batch tracking and UPI QuickPay' },
    { label: 'Architecture Studio', query: 'Luxury Interior & Architectural Lookbook with high-res galleries' },
    { label: 'B2B Advisory', query: 'Corporate Tax Advisory with GST workflows and direct partner desk' },
  ];

  const handleChipClick = (chip: typeof promptChips[0]) => {
    setSelectedPromptChip(chip.label);
    setPromptText(chip.query);
  };

  /* ═══════════════════════════════════════════════════════════════════
     GSAP ANIMATION ENGINE — LAPTOP OPENING & SCREEN CONTENTS SCROLL TIMELINE
     ═══════════════════════════════════════════════════════════════════ */
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      /* ─────────────────────────────────────────────────────────────
         INITIAL LOAD ENTRANCE (Closed Strip in Cosmic Dark Mode)
         ───────────────────────────────────────────────────────────── */
      const initialLoadTl = gsap.timeline({
        defaults: { ease: 'power3.out', duration: 0.8 },
        delay: 0.1,
      });

      initialLoadTl
        .fromTo(
          stage1EyebrowRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6 }
        )
        .fromTo(
          stage1TitleRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.85 },
          '-=0.4'
        )
        .fromTo(
          laptopAssemblyRef.current,
          { opacity: 0, scale: 0.94, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: 'power2.out' },
          '-=0.5'
        )
        .fromTo(
          stage1FooterRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        );

      /* ─────────────────────────────────────────────────────────────
         DESKTOP PINNED MASTER SCROLL TIMELINE (Screen width >= 768px)
         ═════════════════════════════════════════════════════════════
         PHYSICAL LAPTOP OPENING:
         - Closed state: The lid rests flat over the base (rotateX: -118deg).
           The front edge of the closed lid forms the vibrant glowing strip!
         - Scrubbing scroll: The lid rotates UPWARD and BACKWARD around
           the rear hinge (rotateX: -118deg -> 8deg).
         - The glowing strip expands/dissolves as the inside screen turns on!
         - The contents are revealed INSIDE THE SCREEN OF THE LAPTOP!
         ───────────────────────────────────────────────────────────── */
      mm.add('(min-width: 768px)', () => {
        const laptopTl = gsap.timeline({
          scrollTrigger: {
            trigger: pinnedSectionRef.current,
            start: 'top top',
            end: '+=4200',
            scrub: 1.1,
            pin: true,
            anticipatePin: 1,
            onUpdate: (self) => {
              const p = self.progress;
              const isDark = p < 0.60;
              setLaptopIsOpen(p > 0.18);

              // Notify theme change to navbar and parent
              if (onThemeChange) onThemeChange(isDark);
              window.dispatchEvent(
                new CustomEvent('weblabs-theme-change', { detail: { isDark } })
              );

              // Auto-advance active tab in later stage of scroll
              if (p >= 0.65) {
                const tabProgress = (p - 0.65) / (1.0 - 0.65);
                const nextTab = Math.min(3, Math.floor(tabProgress * 4));
                setActiveTab(nextTab);
              }
            },
          },
        });

        /* ===========================================================
           STEP 1: HERO TEXT COMPACTS & RELEASES FOCUS TO THE LAPTOP
           (Scroll progress 0.00 to 0.20)
           =========================================================== */
        laptopTl.to(
          heroTextBlockRef.current,
          {
            y: -60,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.in',
          },
          0
        );

        laptopTl.to(
          stage1FooterRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.in',
          },
          0
        );

        /* ===========================================================
           STEP 2: PHYSICAL LAPTOP OPENING (THE STRIP OPENS INTO SCREEN)
           (Scroll progress 0.00 to 0.45)
           =========================================================== */
        // 1. Lid Rotation: Physical opening around rear bottom hinge
        // Closed at -118deg (resting flat on base) -> Opens up & back to +8deg (natural upright viewing angle)
        laptopTl.fromTo(
          laptopLidRef.current,
          { rotateX: -118 },
          { rotateX: 8, duration: 2.8, ease: 'power2.inOut' },
          0
        );

        // 2. Glowing front strip dissolves and unrolls as the lid lifts past horizontal
        laptopTl.fromTo(
          glowingStripRef.current,
          { opacity: 1, scale: 1 },
          { opacity: 0, scale: 1.1, duration: 0.9, ease: 'power1.out' },
          0.3
        );

        // 3. Floor ambient glow softly spreads as lid opens
        laptopTl.to(
          stripGlowFloorRef.current,
          { opacity: 0.3, scale: 1.4, duration: 1.5 },
          0
        );

        // 4. Exterior Lid Shell: Fades out as the display lifts up towards viewer
        laptopTl.fromTo(
          laptopLidExteriorRef.current,
          { opacity: 1 },
          { opacity: 0, duration: 0.8, ease: 'power1.out' },
          0.35
        );

        // 5. Laptop Screen Glass & Contents: Powers on and faces forward
        laptopTl.fromTo(
          laptopScreenRef.current,
          { opacity: 0, filter: 'brightness(0.5)' },
          { opacity: 1, filter: 'brightness(1.0)', duration: 1.2, ease: 'power2.out' },
          0.55
        );

        // 6. Base deck settles naturally in perspective
        laptopTl.fromTo(
          laptopBaseRef.current,
          { rotateX: 58, y: 0 },
          { rotateX: 54, y: 10, duration: 2.8, ease: 'power2.inOut' },
          0
        );

        // 7. Master Laptop Assembly scales up to center stage
        laptopTl.to(
          laptopAssemblyRef.current,
          {
            y: -25,
            scale: 1.08,
            duration: 2.8,
            ease: 'power2.inOut',
          },
          0
        );

        /* ===========================================================
           STEP 3: LIVE SCREEN INTERACTION (CURSOR & WEBSITE REVEAL)
           (Scroll progress 0.45 to 0.65)
           =========================================================== */
        // Progressive disclosure of contents inside the screen
        laptopTl.fromTo(
          laptopContentRef.current?.querySelector('.screen-header'),
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
          1.8
        );

        laptopTl.fromTo(
          laptopContentRef.current?.querySelector('.screen-body'),
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
          2.1
        );

        laptopTl.fromTo(
          laptopContentRef.current?.querySelector('.screen-footer'),
          { opacity: 0 },
          { opacity: 1, duration: 0.6, ease: 'power2.out' },
          2.5
        );

        // Simulated interactive cursor clicking on the website inside screen
        laptopTl.fromTo(
          cursorPointerRef.current,
          { x: -60, y: 80, opacity: 0 },
          { x: 140, y: 20, opacity: 1, duration: 0.8, ease: 'power2.out' },
          2.6
        );

        /* ===========================================================
           STEP 4: ATMOSPHERE TRANSITION & FEATURE MODES
           (Scroll progress 0.65 to 1.00)
           =========================================================== */
        // Background crossfade: Dark `#09090B` -> Luminous Pastel Aurora
        laptopTl.to(
          darkBgRef.current,
          { opacity: 0, duration: 1.0, ease: 'power2.inOut' },
          2.8
        );

        laptopTl.to(
          pastelBgRef.current,
          { opacity: 1, duration: 1.0, ease: 'power2.inOut' },
          2.8
        );

        /* ===========================================================
           EDITORIAL STATEMENT SUBTLE SCROLL PARALLAX
           =========================================================== */
        gsap.fromTo(
          editorialHeadlineRef.current,
          { y: 35, opacity: 0.4 },
          {
            y: -25,
            opacity: 1,
            scrollTrigger: {
              trigger: editorialSectionRef.current,
              start: 'top 80%',
              end: 'bottom 40%',
              scrub: 0.8,
            },
          }
        );

        /* ===========================================================
           CASE STUDIES CLIP-PATH REVEALS
           =========================================================== */
        const visuals = [
          project1VisualRef.current,
          project2VisualRef.current,
          project3VisualRef.current,
          project4VisualRef.current,
        ];

        visuals.forEach((visual) => {
          if (!visual) return;
          gsap.fromTo(
            visual,
            {
              clipPath: 'inset(5% 5% 5% 5% round 24px)',
              scale: 1.02,
              opacity: 0.5,
            },
            {
              clipPath: 'inset(0% 0% 0% 0% round 24px)',
              scale: 1.0,
              opacity: 1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: visual,
                start: 'top 85%',
                end: 'top 45%',
                scrub: 0.8,
              },
            }
          );
        });
      });

      /* ─────────────────────────────────────────────────────────────
         MOBILE FALLBACK (Screen width < 768px)
         ───────────────────────────────────────────────────────────── */
      mm.add('(max-width: 767px)', () => {
        ScrollTrigger.create({
          trigger: pinnedSectionRef.current,
          start: 'top center',
          onEnter: () => {
            if (onThemeChange) onThemeChange(false);
            window.dispatchEvent(
              new CustomEvent('weblabs-theme-change', { detail: { isDark: false } })
            );
          },
          onLeaveBack: () => {
            if (onThemeChange) onThemeChange(true);
            window.dispatchEvent(
              new CustomEvent('weblabs-theme-change', { detail: { isDark: true } })
            );
          },
        });
      });
    }, pinnedSectionRef);

    return () => ctx.revert();
  }, [onThemeChange]);

  return (
    <div className="relative w-full bg-[#09090B] font-sans selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* ══════════════════════════════════════════════════════════════════
          PINNED MASTER VIEWPORT CONTAINER
          Contains the physical 3D opening laptop hero
          ══════════════════════════════════════════════════════════════════ */}
      <section
        ref={pinnedSectionRef}
        id="hero-showcase"
        className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center select-none"
      >
        {/* 1. DARK COSMIC ATMOSPHERE BACKGROUND */}
        <div
          ref={darkBgRef}
          className="absolute inset-0 bg-[#09090B] pointer-events-none z-0 transition-opacity duration-700"
        >
          {/* Deep Indigo Radial Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_45%,rgba(20,30,60,0.5)_0%,rgba(9,9,11,1)_85%)]" />
          {/* Subtle Star / Particle Speckles */}
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>

        {/* 2. LUMINOUS PASTEL AURORA BACKGROUND (Fades in during later scroll) */}
        <div
          ref={pastelBgRef}
          className="absolute inset-0 opacity-0 pointer-events-none z-0 transition-opacity duration-700"
          style={{
            background: 'linear-gradient(135deg, #F0EBFA 0%, #E3F2FD 45%, #FBF9FE 100%)',
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(225,215,255,0.6)_0%,transparent_50%),radial-gradient(circle_at_80%_60%,rgba(195,235,255,0.6)_0%,transparent_55%)]" />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white/70 to-transparent" />
        </div>

        {/* ════════════════════════════════════════════════════════════════
            HERO TYPOGRAPHY (Crafted at the Speed of Thought)
            ════════════════════════════════════════════════════════════════ */}
        <div
          ref={heroTextBlockRef}
          className="absolute top-16 sm:top-20 z-20 max-w-4xl mx-auto px-4 text-center flex flex-col items-center pointer-events-none will-change-transform"
        >
          {/* Letterspaced Eyebrow Badge */}
          <div
            ref={stage1EyebrowRef}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-md mb-4 pointer-events-auto"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-zinc-300">
              Engineered Digital Experiences From Scratch
            </span>
          </div>

          {/* Display Headline */}
          <h1
            ref={stage1TitleRef}
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08]"
          >
            Crafted at the <br />
            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Speed of Thought
            </span>
          </h1>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            THE 3D STUDIO LAPTOP ASSEMBLY
            The glowing strip IS the closed laptop!
            As you scroll, the strip opens upward as the laptop screen,
            and the live website contents are revealed inside the screen!
            ════════════════════════════════════════════════════════════════ */}
        <div
          ref={laptopAssemblyRef}
          className="relative z-10 w-full max-w-4xl px-4 flex flex-col items-center justify-center will-change-transform mt-14 sm:mt-18"
          style={{ perspective: '1200px' }}
        >
          {/* Ambient Floor Glow Reflection underneath the laptop */}
          <div
            ref={stripGlowFloorRef}
            className="absolute top-[48%] -translate-y-1/2 w-[80%] max-w-[580px] h-28 bg-gradient-to-r from-[#FF2A6D]/45 via-[#05D9E8]/55 to-[#D300C5]/45 blur-3xl opacity-80 pointer-events-none"
          />

          {/* ─────────────────────────────────────────────────────────────
              COMMON REAR HINGE LINE (Horizontal Axis at Center)
              Both Base and Screen rotate around this exact axis!
              ───────────────────────────────────────────────────────────── */}
          <div
            className="relative w-full max-w-[340px] sm:max-w-[580px] lg:max-w-[740px] h-0"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* 1. LAPTOP BASE (Bottom Keyboard & Trackpad Deck) */}
            <div
              ref={laptopBaseRef}
              className="absolute top-0 left-0 right-0 h-[220px] sm:h-[320px] lg:h-[380px] rounded-b-2xl sm:rounded-b-3xl border border-white/10 bg-gradient-to-b from-[#1C1B1A] via-[#141312] to-[#0D0C0C] shadow-[0_35px_80px_-15px_rgba(0,0,0,0.85)] p-3 sm:p-5 flex flex-col justify-between will-change-transform z-10"
              style={{
                transformOrigin: 'top center',
                transform: 'rotateX(58deg)',
              }}
            >
              {/* Keyboard Row with Acoustic Speaker Grilles */}
              <div className="w-full flex items-stretch gap-2 sm:gap-3">
                {/* Left Speaker Grille */}
                <div className="w-3 sm:w-6 h-full flex flex-col justify-between py-1 opacity-20 select-none">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="flex justify-between gap-0.5">
                      <span className="w-0.5 h-0.5 rounded-full bg-white" />
                      <span className="w-0.5 h-0.5 rounded-full bg-white" />
                    </div>
                  ))}
                </div>

                {/* Recessed Keyboard Deck (Apple-style Pro layout) */}
                <div className="flex-1 bg-[#121110] border border-white/[0.06] rounded-xl p-2 sm:p-2.5 shadow-inner">
                  {/* Function Keys */}
                  <div className="grid gap-1 mb-1" style={{ gridTemplateColumns: '1.4fr repeat(12, 1fr) 1.2fr' }}>
                    <div className="h-1.5 sm:h-2 rounded-xs bg-[#242322] border border-white/[0.04]" />
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div key={i} className="h-1.5 sm:h-2 rounded-xs bg-[#1F1E1D] border border-white/[0.04]" />
                    ))}
                    <div className="h-1.5 sm:h-2 rounded-xs bg-[#2B2927] border border-white/[0.08]" />
                  </div>

                  {/* Key Rows */}
                  {[13, 12, 11, 10].map((count, rIdx) => (
                    <div key={rIdx} className="grid gap-1 mb-1" style={{ gridTemplateColumns: `repeat(${count}, 1fr)` }}>
                      {Array.from({ length: count }).map((_, i) => (
                        <div key={i} className="h-2 sm:h-3.5 rounded-xs bg-[#201F1E] border border-white/[0.04] shadow-xs" />
                      ))}
                    </div>
                  ))}

                  {/* Spacebar Row */}
                  <div className="flex items-center gap-1">
                    <div className="w-6 sm:w-8 h-2 sm:h-3.5 rounded-xs bg-[#201F1E] border border-white/[0.04]" />
                    <div className="w-6 sm:w-8 h-2 sm:h-3.5 rounded-xs bg-[#201F1E] border border-white/[0.04]" />
                    <div className="flex-1 h-2 sm:h-3.5 rounded-xs bg-[#222120] border border-white/[0.05]" />
                    <div className="w-6 sm:w-8 h-2 sm:h-3.5 rounded-xs bg-[#201F1E] border border-white/[0.04]" />
                    <div className="w-10 sm:w-14 h-2 sm:h-3.5 rounded-xs bg-[#201F1E] border border-white/[0.04]" />
                  </div>
                </div>

                {/* Right Speaker Grille */}
                <div className="w-3 sm:w-6 h-full flex flex-col justify-between py-1 opacity-20 select-none">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="flex justify-between gap-0.5">
                      <span className="w-0.5 h-0.5 rounded-full bg-white" />
                      <span className="w-0.5 h-0.5 rounded-full bg-white" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Force Touch Trackpad */}
              <div className="relative flex items-center justify-center mt-1 sm:mt-2">
                <div className="w-36 sm:w-56 h-12 sm:h-18 rounded-xl bg-[#171615] border border-white/[0.08] shadow-inner" />
              </div>

              {/* Front Notch */}
              <div className="w-full flex justify-center -mb-1">
                <div className="w-14 sm:w-20 h-1.5 rounded-b-md bg-[#2B2A28] border-x border-b border-white/[0.08]" />
              </div>
            </div>

            {/* 2. REAR HINGE CYLINDER */}
            <div
              ref={laptopHingeRef}
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[94%] h-2.5 sm:h-3.5 bg-gradient-to-r from-[#2B2A28] via-[#3D3B37] to-[#2B2A28] rounded-full border-t border-b border-white/15 z-25 shadow-xs"
            />

            {/* 3. LAPTOP LID & SCREEN (Standard 16:10 Aspect Ratio) */}
            <div
              ref={laptopLidRef}
              className="absolute bottom-0 left-0 right-0 h-[240px] sm:h-[340px] lg:h-[420px] rounded-t-2xl sm:rounded-t-3xl border border-white/15 bg-[#121110] shadow-2xl overflow-hidden will-change-transform z-30"
              style={{
                transformOrigin: 'bottom center',
                transformStyle: 'preserve-3d',
                transform: 'rotateX(-118deg)', // Closed flat over the base!
              }}
            >
              {/* 3a. EXTERIOR LID SHELL (Seen when closed, facing user) */}
              <div
                ref={laptopLidExteriorRef}
                className="absolute inset-0 bg-gradient-to-b from-[#1E1D1C] via-[#171615] to-[#121110] rounded-t-2xl sm:rounded-t-3xl flex flex-col items-center justify-center p-6 z-40 pointer-events-none border border-white/10"
                style={{
                  transform: 'rotate(180deg)',
                }}
              >
                {/* Logo lockup on outer shell */}
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-2 shadow-xs">
                  <div className="w-3 h-3 rounded-full bg-white/80" />
                </div>
                <span className="text-[11px] tracking-widest text-zinc-400 uppercase font-medium">
                  WebLabs Studio Display
                </span>
                <span className="text-[10px] text-zinc-500 mt-1">
                  Scroll to open screen
                </span>
              </div>

              {/* 3b. THE GLOWING APERTURE STRIP ON THE FRONT LIP
                  This is the exact glowing strip from media_1789768320059.png!
                  When the laptop is closed, this strip sits right at the front lip facing the user! */}
              <div
                ref={glowingStripRef}
                className="absolute top-0 left-0 right-0 h-9 sm:h-11 rounded-t-xl overflow-hidden z-50 pointer-events-none border-b border-white/40 backdrop-blur-md"
                style={{
                  boxShadow: '0 8px 35px rgba(0,242,254,0.45), inset 0 1px 2px rgba(255,255,255,0.7)',
                }}
              >
                {/* Luminous High-Saturation Multi-Stop Gradient Bar */}
                <div
                  className="w-full h-full bg-gradient-to-r from-[#FF2A6D] via-[#05D9E8] via-[#0056FF] to-[#D300C5]"
                  style={{ filter: 'contrast(1.18) saturate(1.25)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-black/30" />
              </div>

              {/* 3c. THE INTERIOR DISPLAY SCREEN (THE CONTENTS ARE INSIDE HERE!) */}
              <div
                ref={laptopScreenRef}
                className="relative w-full h-full p-2.5 sm:p-3 bg-[#0A0A0B] flex flex-col justify-between opacity-0 z-30"
              >
                {/* Top Bezel with Camera Dot & Browser Bar */}
                <div className="w-full bg-[#18181B] px-3.5 py-1.5 rounded-t-xl border-b border-white/[0.08] flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                    <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                    <span className="w-2 h-2 rounded-full bg-[#27C93F]" />
                  </div>

                  {/* Centered Glass Browser Address Pill */}
                  <div className="flex items-center gap-2 px-3 py-0.5 rounded-full bg-black/50 border border-white/10 text-[10px] sm:text-[11px] text-zinc-300 max-w-xs truncate">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="truncate">https://oliveandthyme.weblabs.studio</span>
                  </div>

                  {/* Camera Dot */}
                  <div className="w-2 h-2 rounded-full bg-zinc-800 border border-white/20 flex items-center justify-center">
                    <div className="w-0.5 h-0.5 rounded-full bg-emerald-400" />
                  </div>
                </div>

                {/* Live Website Demo Inside Screen Glass */}
                <div
                  ref={laptopContentRef}
                  className="relative flex-1 bg-[#FAF8F5] text-[#171717] rounded-b-lg p-4 sm:p-6 flex flex-col justify-between overflow-hidden shadow-inner border border-black/[0.04]"
                >
                  {/* Header */}
                  <div className="screen-header flex items-center justify-between pb-2 sm:pb-3 border-b border-black/[0.06]">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#171717] text-xs sm:text-base">
                        Olive & Thyme Kitchen
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#99582A]/10 text-[#99582A] font-medium border border-[#99582A]/20">
                        Bistro & Pizzeria
                      </span>
                    </div>
                    <div className="text-[11px] text-emerald-700 font-medium hidden sm:block">
                      ● Open Today 12:00–23:30
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="screen-body my-auto py-2 space-y-2 text-left">
                    <div className="inline-flex items-center gap-1 text-[11px] text-[#99582A] bg-[#99582A]/10 border border-[#99582A]/20 px-2 py-0.5 rounded-full font-medium">
                      <Star className="w-3 h-3 fill-[#99582A]" />
                      <span>4.9 ★ (340+ Verified Pune Reviews)</span>
                    </div>

                    <h3 className="text-base sm:text-xl lg:text-2xl font-bold text-[#171717] leading-tight">
                      Wood-fired sourdough pizzas, artisanal pasta & vineyard wines.
                    </h3>

                    <p className="text-[11px] sm:text-xs text-[#5E5952] leading-relaxed hidden sm:block max-w-lg">
                      Engineered to turn social media food traffic into guaranteed weekend table reservations with 1-tap WhatsApp booking.
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      {['Sub-Second Load Time', '1-Tap WhatsApp Booking', 'Google Maps SEO'].map((feat) => (
                        <span
                          key={feat}
                          className="text-[10px] bg-black/[0.04] border border-black/[0.06] px-2 py-0.5 rounded-full text-[#4A4742]"
                        >
                          ✓ {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Screen Footer & WhatsApp Action */}
                  <div className="screen-footer flex items-center justify-between pt-2 sm:pt-3 border-t border-black/[0.06] text-[11px] text-[#5E5952]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      <span className="font-medium">Core Web Vitals: 99/100 · 0.28s TTFB</span>
                    </div>

                    <a
                      href="https://wa.me/919021509565?text=Hi%20WebLabs,%20I%20would%20like%20a%20website%20like%20Olive%20%26%20Thyme."
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-1 rounded-full bg-[#171717] text-[#FAF8F5] font-medium text-xs flex items-center gap-1.5 shadow-xs hover:bg-[#2A2A2A] transition-colors"
                    >
                      <MessageSquare className="w-3 h-3 text-emerald-400" />
                      <span>Book Table</span>
                    </a>
                  </div>

                  {/* Simulated Moving Studio Cursor inside the screen */}
                  <div
                    ref={cursorPointerRef}
                    className="absolute pointer-events-none z-30 transition-transform duration-200"
                    style={{ top: '60%', left: '48%' }}
                  >
                    <div className="flex items-center gap-1">
                      <div className="w-3.5 h-3.5 text-[#171717] drop-shadow-md">
                        <svg viewBox="0 0 24 24" fill="currentColor" stroke="white" strokeWidth="1.5">
                          <path d="M4 4l7 17 2.5-6.5L20 12 4 4z" />
                        </svg>
                      </div>
                      <span className="px-1.5 py-0.5 rounded bg-[#171717] text-[#FAF8F5] text-[9px] font-semibold tracking-wide shadow-md">
                        Click to Book
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            FOOTER ACTIONS UNDER THE LAPTOP (Shown in initial closed state)
            ════════════════════════════════════════════════════════════════ */}
        <div
          ref={stage1FooterRef}
          className="absolute bottom-10 z-20 flex flex-col items-center gap-2.5 text-center pointer-events-auto"
        >
          <span className="text-xs text-zinc-400 font-normal tracking-wide">
            We allocate 4 bespoke client build slots every month
          </span>

          <div className="flex items-center gap-4 mt-0.5">
            <button
              onClick={() => {
                window.scrollBy({ top: 900, behavior: 'smooth' });
              }}
              className="px-6 py-2 rounded-full border border-white/20 bg-white/[0.06] hover:bg-white/12 text-zinc-200 hover:text-white text-xs font-medium tracking-wide transition-all backdrop-blur-md cursor-pointer hover:border-white/40 shadow-xs flex items-center gap-1.5"
            >
              <span>Scroll to open laptop</span>
              <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
            </button>

            <button
              onClick={() => {
                window.open(
                  'https://wa.me/919021509565?text=Hi%20WebLabs,%20I%20would%20like%20to%20see%20a%20live%20demo%20of%20your%20websites.',
                  '_blank'
                );
              }}
              className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <Play className="w-3 h-3 fill-current text-zinc-300" />
              <span>Play Demo</span>
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          FEATURE MODES & ARCHITECTURE SHOWCASE (The Simplest Way to Build)
          Replicating Reference Frames 00600.jpg - 01125.jpg
          ══════════════════════════════════════════════════════════════════ */}
      <section
        id="features-tabs"
        className="relative py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto space-y-12"
      >
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.04] text-xs text-zinc-300">
            <span>01 · Conversion Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#FAF8F5]">
            The simplest way to build a high-performance website
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Every component engineered with mathematical precision, tactile restraint, and direct WhatsApp conversions.
          </p>
        </div>

        {/* Split Two-Column Grid matching reference frame 00600.jpg */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
          {/* Left Column: Interactive Feature Selector Tabs */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {featureTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const Icon = tab.icon;

              return (
                <div
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`cursor-pointer transition-all duration-300 rounded-2xl p-4 sm:p-5 ${
                    isActive
                      ? 'bg-white/10 backdrop-blur-xl border border-white/25 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.5)] ring-1 ring-white/10'
                      : 'bg-transparent hover:bg-white/[0.04] border border-transparent hover:border-white/10'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? 'bg-white text-zinc-950 shadow-xs'
                          : 'bg-white/5 text-zinc-400'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3
                          className={`text-sm sm:text-base font-semibold tracking-tight transition-colors ${
                            isActive ? 'text-white' : 'text-zinc-400'
                          }`}
                        >
                          {tab.title}
                        </h3>
                        {isActive && (
                          <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                            {tab.badge}
                          </span>
                        )}
                      </div>
                      {isActive && (
                        <p className="text-xs text-zinc-300 leading-relaxed pt-0.5">
                          {tab.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Interactive Sandbox Screen + Dynamic Floating Cards */}
          <div className="lg:col-span-7 relative flex items-center justify-center min-h-[380px] sm:min-h-[440px]">
            {/* Background Studio Display Sandbox */}
            <div className="w-full bg-[#18181B] p-2.5 sm:p-3 rounded-2xl shadow-2xl border border-white/10">
              <div className="w-full bg-[#27272A] px-3.5 py-1.5 rounded-t-xl flex items-center justify-between border-b border-white/[0.08]">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                  <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                  <div className="w-2 h-2 rounded-full bg-[#27C93F]" />
                </div>
                <span className="text-[10px] text-zinc-400 font-mono">weblabs.architecture.engine</span>
                <div className="w-3" />
              </div>
              <div className="bg-[#FAF8F5] text-[#171717] rounded-b-xl p-5 sm:p-8 min-h-[300px] flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs text-[#78726A] pb-3 border-b border-black/[0.06]">
                  <span>Live Production Sandbox</span>
                  <span className="text-emerald-600 font-medium">● 99.9% Uptime SLA</span>
                </div>
                <div className="space-y-2 my-auto max-w-sm">
                  <div className="h-4 w-3/4 bg-black/[0.06] rounded-sm" />
                  <div className="h-3 w-full bg-black/[0.04] rounded-sm" />
                  <div className="h-3 w-5/6 bg-black/[0.04] rounded-sm" />
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-black/[0.06] text-[11px] text-[#78726A]">
                  <span>Zero WordPress Plugins</span>
                  <span>100% Client Owned</span>
                </div>
              </div>
            </div>

            {/* DYNAMIC FLOATING WIDGET 0: Zero-Code Telemetry Card */}
            {activeTab === 0 && (
              <div className="absolute right-4 sm:right-8 -bottom-4 sm:-bottom-6 w-64 sm:w-72 bg-white/95 backdrop-blur-2xl border border-white/80 rounded-2xl p-4 shadow-[0_25px_50px_-15px_rgba(0,0,0,0.5)] space-y-3 z-30 animate-in fade-in zoom-in-95 duration-300 text-[#171717]">
                <div className="flex items-center justify-between text-xs font-semibold text-[#171717] border-b border-black/[0.06] pb-2">
                  <span>Core Web Vitals Audit</span>
                  <span className="text-emerald-600">Grade: A+</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#5E5952]">Performance Score</span>
                    <span className="font-bold text-emerald-600">99 / 100</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#5E5952]">Time to First Byte</span>
                    <span className="font-bold text-[#171717]">0.28s</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#5E5952]">Unused JS Overhead</span>
                    <span className="font-bold text-[#171717]">0.0 KB</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-black/[0.06] flex items-center gap-1 text-[11px] text-[#78726A]">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Certified Google PageSpeed</span>
                </div>
              </div>
            )}

            {/* DYNAMIC FLOATING WIDGET 1: Smartphone WhatsApp Conversation (frame 01000.jpg) */}
            {activeTab === 1 && (
              <div className="absolute right-4 sm:right-10 -bottom-6 w-60 sm:w-68 bg-[#18181B] p-2.5 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] border border-white/15 z-30 animate-in fade-in zoom-in-95 duration-300">
                <div className="bg-[#EFEAE2] rounded-2xl p-3.5 space-y-3 text-left">
                  <div className="flex items-center gap-2 pb-2 border-b border-black/[0.08]">
                    <div className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center text-white">
                      <MessageSquare className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#171717]">Olive & Thyme</div>
                      <div className="text-[10px] text-[#25D366]">Online · Table Desk</div>
                    </div>
                  </div>

                  <div className="bg-white p-2.5 rounded-xl rounded-tl-xs shadow-xs text-xs text-[#171717] space-y-1">
                    <p>Hi! I'd like to book an outdoor table for 4 this Saturday at 8 PM.</p>
                    <div className="text-[9px] text-[#78726A] text-right">20:14 ✓✓</div>
                  </div>

                  <div className="bg-[#DCF8C6] p-2.5 rounded-xl rounded-tr-xs shadow-xs text-xs text-[#171717] space-y-1 ml-4">
                    <p>Confirmed! Table for 4 is reserved under your name. See you Saturday!</p>
                    <div className="text-[9px] text-[#2D6A4F] text-right">20:15 ✓✓</div>
                  </div>

                  <div className="text-center pt-1">
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                      1-Tap WhatsApp Routing Active
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* DYNAMIC FLOATING WIDGET 2: Omnichannel Integrations Card (frame 00600.jpg) */}
            {activeTab === 2 && (
              <div className="absolute right-4 sm:right-10 -bottom-4 w-64 sm:w-72 bg-white/95 backdrop-blur-2xl border border-white/80 rounded-2xl p-4 shadow-[0_25px_50px_-15px_rgba(0,0,0,0.5)] space-y-3 z-30 animate-in fade-in zoom-in-95 duration-300 text-[#171717]">
                <div className="text-xs font-semibold text-[#171717] border-b border-black/[0.06] pb-2">
                  Connected Channels
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { name: 'Google Maps', role: 'Local SEO 4.9★' },
                    { name: 'WhatsApp', role: '1-Tap Lead Line' },
                    { name: 'Instagram', role: 'Booking Sticker' },
                    { name: 'UPI & Stripe', role: 'Instant Pay' },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className="bg-black/[0.03] border border-black/[0.04] p-2 rounded-xl text-left"
                    >
                      <div className="text-xs font-semibold text-[#171717]">{item.name}</div>
                      <div className="text-[10px] text-[#78726A]">{item.role}</div>
                    </div>
                  ))}
                </div>
                <div className="text-[10px] text-[#78726A] text-center pt-1">
                  Native API integration without external subscription fees
                </div>
              </div>
            )}

            {/* DYNAMIC FLOATING WIDGET 3: 7-Day Turnkey Handover */}
            {activeTab === 3 && (
              <div className="absolute right-4 sm:right-8 -bottom-4 sm:-bottom-6 w-64 sm:w-72 bg-white/95 backdrop-blur-2xl border border-white/80 rounded-2xl p-4 shadow-[0_25px_50px_-15px_rgba(0,0,0,0.5)] space-y-2.5 z-30 animate-in fade-in zoom-in-95 duration-300 text-[#171717]">
                <div className="flex justify-between items-center text-xs font-semibold text-[#171717] border-b border-black/[0.06] pb-2">
                  <span>7-Day Turnkey Protocol</span>
                  <span className="text-xs text-[#2D6A4F]">On Schedule</span>
                </div>
                <div className="space-y-1.5 text-xs text-[#5E5952]">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Day 1–2: Brand Concept & Copy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Day 3–4: Astro Engineering</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Day 5–6: WhatsApp & SEO Wire</span>
                  </div>
                  <div className="flex items-center gap-2 font-semibold text-[#171717]">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Day 7: Live Domain Launch</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 5: EDITORIAL STATEMENT
          ══════════════════════════════════════════════════════════════════ */}
      <section
        ref={editorialSectionRef}
        id="editorial-statement"
        className="relative py-28 sm:py-40 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center"
      >
        <div ref={editorialHeadlineRef} className="space-y-8 will-change-transform">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.04] text-xs font-medium text-zinc-400">
            02 · Craftsmanship & Philosophy
          </div>

          <p className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#FAF8F5] leading-tight">
            "Most web agencies sell bloated, slow templates. We engineer bespoke digital storefronts with the tactile restraint and precision of industrial design."
          </p>

          <p className="text-base sm:text-lg text-zinc-400 font-normal max-w-2xl mx-auto leading-relaxed">
            Every business has a distinct character that cannot be squeezed into a generic theme. We craft custom typography, hand-code responsive components, and wire 1-tap WhatsApp conversions so your brand commands immediate respect.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 6: CLIENT CASE STUDIES
          ══════════════════════════════════════════════════════════════════ */}
      <section
        ref={caseStudiesSectionRef}
        id="case-studies"
        className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-36"
      >
        <div className="border-b border-white/[0.08] pb-6 flex items-baseline justify-between">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-xs font-medium text-zinc-400 mb-2">
              03 · Selected Client Architectures
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#FAF8F5]">
              Case Studies in Digital Craft
            </h2>
          </div>
          <span className="text-xs text-zinc-400 font-medium hidden sm:inline">
            4 Tailored Implementations
          </span>
        </div>

        {/* CASE STUDY 01: Centered Showroom Visual */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs text-[#E0A96D] font-medium">
                Case 01 · Restaurant & Culinary Studio
              </span>
              <h3 className="text-3xl sm:text-4xl font-semibold text-[#FAF8F5] tracking-tight mt-1">
                Olive & Thyme Kitchen
              </h3>
            </div>
            <div className="border border-white/10 bg-white/[0.05] px-3.5 py-1.5 rounded-full text-xs text-zinc-300">
              Koregaon Park, Pune · WhatsApp Reservations & Local SEO
            </div>
          </div>

          <div
            ref={project1VisualRef}
            className="w-full bg-[#FAF8F5] border border-black/[0.06] rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] transition-transform duration-500 hover:scale-[1.01] will-change-transform text-[#171717]"
          >
            <div className="p-8 sm:p-14 bg-gradient-to-br from-[#FAF8F5] via-[#F4F1EA] to-[#EFECE4] min-h-[400px] flex flex-col justify-between">
              <div className="flex items-center justify-between pb-6 border-b border-black/[0.06]">
                <span className="px-3 py-1 rounded-full text-xs text-[#99582A] font-medium bg-[#99582A]/10 border border-[#99582A]/20">
                  Custom Dine-In & Wine Architecture
                </span>
                <span className="text-xs text-[#5E5952]">Lighthouse Score: 99</span>
              </div>

              <div className="my-8 max-w-xl space-y-3">
                <span className="inline-flex items-center text-xs text-[#99582A] bg-[#99582A]/10 border border-[#99582A]/20 px-3 py-1 rounded-full font-medium">
                  4.9 ★ (340+ Verified Reviews)
                </span>
                <h4 className="text-2xl sm:text-3xl font-semibold text-[#171717] tracking-tight">
                  "The new website tripled our weekend table reservations directly over WhatsApp."
                </h4>
                <p className="text-xs sm:text-sm text-[#5E5952] leading-relaxed">
                  Custom seasonal menu architecture with tap-to-order WhatsApp integration and direct Google Maps routing for Pune food patrons.
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-black/[0.06] text-xs">
                <span className="text-[#78726A]">Tech: Astro 6 + TypeScript + Tailwind v4</span>
                <a
                  href="https://wa.me/919021509565?text=Hi%20WebLabs,%20tell%20me%20about%20a%20website%20like%20Olive%20%26%20Thyme."
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#171717] hover:text-[#99582A] transition-colors flex items-center gap-1 font-medium"
                >
                  <span>Inquire About This Format</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CASE STUDY 02: Asymmetric Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs text-emerald-400 font-medium">
                Case 02 · Specialty Roastery & Slow Bar
              </span>
              <h3 className="text-3xl sm:text-4xl font-semibold text-[#FAF8F5] tracking-tight mt-1">
                Monsoon Coffee Co.
              </h3>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              <p>
                <strong className="text-white font-medium">The Challenge:</strong> Local coffee enthusiasts in Indiranagar wanted to pre-order freshly roasted single-origin batches for morning pickup, but navigating a clunky third-party app caused 60% cart drop-offs.
              </p>
              <p>
                <strong className="text-white font-medium">The Solution:</strong> We hand-coded a lightning-fast catalog with instant roast date filters and a 1-tap WhatsApp checkout that routes directly to the head barista's order queue.
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-white/[0.08]">
              {['Single-Origin Bean Catalog', 'Roast Batch Tracker', '1-Tap UPI QuickPay'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-zinc-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/919021509565?text=Hi%20WebLabs,%20tell%20me%20about%20a%20website%20like%20Monsoon%20Coffee."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs text-emerald-400 hover:text-emerald-300 pt-2 font-medium"
            >
              <span>View Roastery Specification</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div
            ref={project2VisualRef}
            className="lg:col-span-7 bg-[#FAF8F5] border border-black/[0.06] rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] transition-transform duration-500 hover:scale-[1.01] will-change-transform text-[#171717]"
          >
            <div className="p-8 sm:p-12 bg-gradient-to-br from-[#FAF8F5] via-[#F2EFE8] to-[#E9E4DC] min-h-[380px] flex flex-col justify-between">
              <div className="flex items-center justify-between pb-4 border-b border-black/[0.06] text-xs text-[#5E5952]">
                <span className="bg-black/[0.05] px-3 py-1 rounded-full">Indiranagar · Bengaluru</span>
                <span className="text-[#2D6A4F] font-medium">4.8 ★ (280+ Reviews)</span>
              </div>

              <div className="my-6 space-y-3 text-left">
                <span className="text-xs text-[#2D6A4F] font-medium">
                  Batch #204 Roasted Today
                </span>
                <h4 className="text-2xl font-semibold text-[#171717] tracking-tight">
                  "Our wholesale beans inquiries surged 4x within 30 days of launch."
                </h4>
                <p className="text-xs text-[#5E5952] leading-relaxed">
                  Customers scan QR codes at cafe tables to open the roast menu in under 400 milliseconds.
                </p>
              </div>

              <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs text-[#78726A]">
                <span>Zero Subscription Fees</span>
                <span className="text-[#171717] font-medium">100% Owned Domain & Code</span>
              </div>
            </div>
          </div>
        </div>

        {/* CASE STUDY 03: Full-Width Panoramic Visual */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs text-rose-400 font-medium">
                Case 03 · Luxury Wellness & Bridal Artistry
              </span>
              <h3 className="text-3xl sm:text-4xl font-semibold text-[#FAF8F5] tracking-tight mt-1">
                Luxe Hair & Skin Studio
              </h3>
            </div>
            <div className="border border-white/10 bg-white/[0.05] px-3.5 py-1.5 rounded-full text-xs text-zinc-300">
              Bandra West, Mumbai · Bespoke Styling Consultations
            </div>
          </div>

          <div
            ref={project3VisualRef}
            className="w-full bg-[#FAF8F5] border border-black/[0.06] rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] transition-transform duration-500 hover:scale-[1.01] will-change-transform text-[#171717]"
          >
            <div className="p-8 sm:p-14 bg-gradient-to-r from-[#FAF8F5] via-[#F4F0E8] to-[#EFEAE2] min-h-[380px] flex flex-col justify-between">
              <div className="flex items-center justify-between pb-6 border-b border-black/[0.06]">
                <span className="px-3 py-1 rounded-full text-xs text-[#A84242] font-medium bg-[#A84242]/10 border border-[#A84242]/20">
                  Editorial Portfolio & Service Price Matrix
                </span>
                <span className="text-xs text-[#5E5952]">Bespoke Bridal Consultations</span>
              </div>

              <div className="my-8 max-w-2xl space-y-4 text-left">
                <span className="inline-flex items-center text-xs text-[#A84242] bg-[#A84242]/10 border border-[#A84242]/20 px-3 py-1 rounded-full font-medium">
                  4.9 ★ (510+ Verified Mumbai Reviews)
                </span>
                <h4 className="text-2xl sm:text-3xl font-semibold text-[#171717] tracking-tight leading-snug">
                  High-fashion editorial layout designed for brides and styling clients who demand perfection.
                </h4>
                <p className="text-xs sm:text-sm text-[#5E5952] leading-relaxed">
                  Replaced a slow PDF brochure with an interactive lookbook, transparent service tiers, and 1-tap stylist booking on WhatsApp.
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-black/[0.06] text-xs text-[#78726A]">
                <span>Direct WhatsApp Consultation Gateway</span>
                <a
                  href="https://wa.me/919021509565?text=Hi%20WebLabs,%20tell%20me%20about%20a%20website%20like%20Luxe%20Studio."
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#171717] hover:text-[#A84242] transition-colors flex items-center gap-1 font-medium"
                >
                  <span>Request Luxury Studio Format</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CASE STUDY 04: Corporate Advisory */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div
            ref={project4VisualRef}
            className="lg:col-span-7 bg-[#FAF8F5] border border-black/[0.06] rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] transition-transform duration-500 hover:scale-[1.01] will-change-transform order-2 lg:order-1 text-[#171717]"
          >
            <div className="p-8 sm:p-12 bg-gradient-to-br from-[#FAF8F5] via-[#F2EFE8] to-[#EAE6DE] min-h-[380px] flex flex-col justify-between">
              <div className="flex items-center justify-between pb-4 border-b border-black/[0.06] text-xs text-[#5E5952]">
                <span className="bg-black/[0.05] px-3 py-1 rounded-full">Connaught Place · New Delhi</span>
                <span className="text-[#3A5A40] font-medium">5.0 ★ Client Rating</span>
              </div>

              <div className="my-6 space-y-3 text-left">
                <span className="text-xs text-[#3A5A40] font-medium">
                  Corporate Advisory Architecture
                </span>
                <h4 className="text-2xl font-semibold text-[#171717] tracking-tight">
                  "Our consultation bookings increased by 240% in our first quarter."
                </h4>
                <p className="text-xs text-[#5E5952] leading-relaxed">
                  Clean editorial typography, clear GST compliance workflows, and frictionless direct-dial partner communication.
                </p>
              </div>

              <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs text-[#78726A]">
                <span>Enterprise Security & SSL</span>
                <span className="text-[#171717] font-medium">Zero Third-Party Tracking</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
            <div>
              <span className="text-xs text-emerald-400 font-medium">
                Case 04 · Corporate Tax & Financial Advisory
              </span>
              <h3 className="text-3xl sm:text-4xl font-semibold text-[#FAF8F5] tracking-tight mt-1">
                Verma & Associates
              </h3>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              <p>
                <strong className="text-white font-medium">The Challenge:</strong> High-net-worth founders and startups needed immediate assurance of credibility and direct access to senior partners without filling out endless generic forms.
              </p>
              <p>
                <strong className="text-white font-medium">The Solution:</strong> An authoritative editorial website featuring transparent practice area overviews and a friction-free 30-minute discovery scheduler.
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-white/[0.08]">
              {['GST & Tax Compliance Matrix', '30-Minute Partner Discovery', 'Direct Senior Advisory Desk'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-zinc-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/919021509565?text=Hi%20WebLabs,%20tell%20me%20about%20a%20website%20like%20Verma%20%26%20Associates."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs text-emerald-400 hover:text-emerald-300 pt-2 font-medium"
            >
              <span>View Professional Format</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          FINAL STUDIO ACTION BANNER
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] bg-[#0E0E11] text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.05] text-xs text-zinc-300">
            <span>No Obligation · Direct to Developer</span>
          </div>

          <h3 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight">
            See your business as a modern digital storefront.
          </h3>

          <p className="text-xs sm:text-sm text-zinc-400 max-w-lg mx-auto leading-relaxed">
            Send me your current business details or existing website. I will craft a bespoke 48-hour homepage concept for you at zero upfront cost.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/919021509565?text=Hi%20WebLabs,%20I%20would%20like%20to%20request%20a%20free%2048-hour%20homepage%20concept%20for%20my%20business."
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3.5 rounded-full bg-white text-zinc-950 font-medium text-xs sm:text-sm tracking-tight flex items-center gap-2 shadow-xs transition-all duration-200 hover:bg-zinc-200 hover:-translate-y-[1px] active:translate-y-0"
            >
              <span>Request Free 48-Hour Concept</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="mailto:[ADD: Email address]?subject=Website Enquiry - WebLabs"
              className="px-7 py-3.5 rounded-full border border-white/20 bg-white/[0.04] text-white font-medium text-xs sm:text-sm tracking-tight transition-all duration-200 hover:bg-white/10 hover:-translate-y-[1px]"
            >
              Email Scoping Request
            </a>
          </div>

          <div className="text-xs text-zinc-500 pt-2">
            ₹0 advance fee · Direct WhatsApp engineering · Full code ownership
          </div>
        </div>
      </section>
    </div>
  );
}
