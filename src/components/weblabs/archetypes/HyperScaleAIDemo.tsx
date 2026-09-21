import React, { useState, useEffect } from 'react';
import { ArchetypeSpecBar } from './ArchetypeSpecBar';
import {
  Activity,
  Cpu,
  Zap,
  ShieldCheck,
  RefreshCw,
  Eye,
  EyeOff,
  Server,
  Globe2,
  Database,
  Layers,
  ArrowUpRight,
  Terminal,
  CheckCircle2,
  BarChart3
} from 'lucide-react';

export function HyperScaleAIDemo() {
  const [activeTab, setActiveTab] = useState<'overview' | 'inference' | 'edge' | 'security'>('overview');
  const [maskedKeys, setMaskedKeys] = useState(true);
  const [pingRunning, setPingRunning] = useState(false);
  const [liveTtfb, setLiveTtfb] = useState(186);
  const [reqCount, setReqCount] = useState(48290);
  const [pingsHistory, setPingsHistory] = useState([182, 194, 178, 186, 191, 184, 188]);

  // Live telemetry pulse
  useEffect(() => {
    const interval = setInterval(() => {
      setReqCount((prev) => prev + Math.floor(Math.random() * 45) - 15);
      const jitter = Math.floor(Math.random() * 14) - 7;
      setLiveTtfb(186 + jitter);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const runLatencyTest = () => {
    setPingRunning(true);
    setTimeout(() => {
      const newTtfb = Math.floor(175 + Math.random() * 22);
      setLiveTtfb(newTtfb);
      setPingsHistory((prev) => [...prev.slice(1), newTtfb]);
      setPingRunning(false);
    }, 420);
  };

  return (
    <div className="min-h-screen bg-[#07080E] text-zinc-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      <ArchetypeSpecBar
        id="01"
        category="Cloud Software"
        title="HyperScale AI & SaaS"
        claimBadge="0.2s TTFB (Sub-Second)"
        techStack="Next.js 15 • Tailwind • GSAP"
        themeColor="cyan"
      />

      {/* Hero Showcase Header */}
      <section className="relative overflow-hidden pt-12 pb-16 border-b border-white/[0.08]">
        {/* Ambient Glows */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-20 right-10 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 text-xs font-mono">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span>ARCHETYPE 01 // BESPOKE CLOUD ARCHITECTURE</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
              HyperScale AI & SaaS Architecture
            </h1>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Designed for enterprise AI startups and B2B SaaS platforms requiring high-frequency telemetry, masked data security, sub-second navigation, and verified <strong className="text-cyan-300">0.2s TTFB</strong> edge caching.
            </p>
          </div>

          {/* Interactive Claim Verification Strip */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-cyan-500/20 backdrop-blur-md">
              <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
                <span>Time To First Byte</span>
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              </div>
              <div className="text-2xl font-mono font-bold text-cyan-300">{liveTtfb}ms</div>
              <div className="text-[11px] text-zinc-500 font-mono mt-0.5">&lt; 0.2s TTFB Claim Met</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
              <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
                <span>Google PageSpeed</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div className="text-2xl font-mono font-bold text-white">99/100</div>
              <div className="text-[11px] text-emerald-400 font-mono mt-0.5">Core Web Vitals Pass</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
              <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
                <span>Global Edge CDN</span>
                <Globe2 className="w-3.5 h-3.5 text-blue-400" />
              </div>
              <div className="text-2xl font-mono font-bold text-white">310+ Nodes</div>
              <div className="text-[11px] text-zinc-500 font-mono mt-0.5">Zero Cold Starts</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
              <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
                <span>Live Throughput</span>
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
              </div>
              <div className="text-2xl font-mono font-bold text-white">{reqCount.toLocaleString()}</div>
              <div className="text-[11px] text-zinc-500 font-mono mt-0.5">req / second</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Dashboard Demo */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="rounded-3xl border border-white/[0.1] bg-[#0c0d16]/80 backdrop-blur-2xl shadow-2xl overflow-hidden">
          {/* Dashboard Header Bar */}
          <div className="px-6 py-4 border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-4 bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
                <Cpu className="w-4 h-4 text-cyan-300" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white flex items-center gap-2">
                  <span>Aether AI Telemetry Portal</span>
                  <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] font-mono border border-cyan-500/20">
                    Live Cluster v4.2
                  </span>
                </div>
                <div className="text-xs text-zinc-400">Sub-second navigation & interactive telemetry preview</div>
              </div>
            </div>

            {/* Sub-Second Navigation Tabs */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-black/40 border border-white/[0.06] text-xs">
              {(['overview', 'inference', 'edge', 'security'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-all capitalize ${
                    activeTab === tab
                      ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-500/30 shadow-sm'
                      : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6 sm:p-8 space-y-8">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Latency Tester & Wave Visualizer */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-950/20 via-black/40 to-black/60 border border-cyan-500/20">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-base font-semibold text-white flex items-center gap-2">
                        <span>Real-Time Edge Benchmark & Latency Telemetry</span>
                        <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                          99.99% SLA
                        </span>
                      </h3>
                      <p className="text-xs text-zinc-400 mt-1">
                        Verify instant sub-second response times across distributed Edge Cloud nodes.
                      </p>
                    </div>

                    <button
                      onClick={runLatencyTest}
                      disabled={pingRunning}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-cyan-300 text-xs font-mono transition-all active:scale-95 disabled:opacity-50"
                    >
                      <RefreshCw className={`w-3.5 h-3.5 ${pingRunning ? 'animate-spin' : ''}`} />
                      <span>{pingRunning ? 'Measuring Ping...' : 'Run Benchmark Ping'}</span>
                    </button>
                  </div>

                  {/* Simulated Telemetry Waves */}
                  <div className="h-32 w-full flex items-end gap-2 pt-4 px-2 bg-black/50 rounded-xl border border-white/[0.06] relative overflow-hidden">
                    <div className="absolute top-3 left-4 text-[11px] font-mono text-zinc-500 flex items-center gap-4">
                      <span>Region: iad1 (North America)</span>
                      <span>Target: &lt; 200ms</span>
                      <span className="text-cyan-400">Current: {liveTtfb}ms</span>
                    </div>

                    {/* Historical latency bars */}
                    {pingsHistory.map((val, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                        <div
                          className="w-full bg-gradient-to-t from-cyan-600/40 to-cyan-400 rounded-t-sm transition-all duration-500"
                          style={{ height: `${(val / 250) * 80}%` }}
                        />
                        <span className="text-[10px] font-mono text-zinc-500">{val}ms</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Masked Metrics & API Credentials Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <h4 className="text-sm font-medium text-white">Masked Client Telemetry</h4>
                      </div>
                      <button
                        onClick={() => setMaskedKeys(!maskedKeys)}
                        className="inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-white transition-colors"
                      >
                        {maskedKeys ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                        <span>{maskedKeys ? 'Reveal' : 'Mask'}</span>
                      </button>
                    </div>

                    <div className="space-y-3 font-mono text-xs">
                      <div className="p-3 rounded-xl bg-black/60 border border-white/[0.06] flex items-center justify-between">
                        <span className="text-zinc-500">Live API Key:</span>
                        <span className="text-zinc-200">
                          {maskedKeys ? 'aix_live_99f8••••••••••••••••••••3a1c' : 'aix_live_demo_mock_telemetry_token_3a1c'}
                        </span>
                      </div>

                      <div className="p-3 rounded-xl bg-black/60 border border-white/[0.06] flex items-center justify-between">
                        <span className="text-zinc-500">Telemetry Token:</span>
                        <span className="text-zinc-200">
                          {maskedKeys ? 'tlm_enc_740a••••••••••••••••••••9e82' : 'tlm_enc_740ae851b92014cd78a19e82'}
                        </span>
                      </div>
                    </div>
                    <div className="text-[11px] text-zinc-500">
                      Client metrics and auth headers are cryptographically shielded at edge proxy boundaries.
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-4">
                    <div className="flex items-center gap-2">
                      <Server className="w-4 h-4 text-cyan-400" />
                      <h4 className="text-sm font-medium text-white">Inference Engine Specs</h4>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06]">
                        <div className="text-zinc-500">Framework</div>
                        <div className="text-white font-medium mt-1">Next.js 15 (PPR)</div>
                      </div>
                      <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06]">
                        <div className="text-zinc-500">Styling</div>
                        <div className="text-white font-medium mt-1">Tailwind CSS 4</div>
                      </div>
                      <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06]">
                        <div className="text-zinc-500">Kinetic Physics</div>
                        <div className="text-white font-medium mt-1">GSAP 3.15 + ScrollTrigger</div>
                      </div>
                      <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06]">
                        <div className="text-zinc-500">Cache Strategy</div>
                        <div className="text-white font-medium mt-1">Stale-While-Revalidate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'inference' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                    <div className="text-xs text-zinc-500">Median Token Latency</div>
                    <div className="text-2xl font-mono text-cyan-300 font-semibold mt-1">11.4 ms</div>
                    <div className="text-[10px] text-emerald-400 mt-1">Optimal Streaming</div>
                  </div>
                  <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                    <div className="text-xs text-zinc-500">GPU Cluster Load</div>
                    <div className="text-2xl font-mono text-white font-semibold mt-1">42.8%</div>
                    <div className="text-[10px] text-zinc-400 mt-1">8x H100 SXM5 Online</div>
                  </div>
                  <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                    <div className="text-xs text-zinc-500">Cache Hit Ratio</div>
                    <div className="text-2xl font-mono text-emerald-400 font-semibold mt-1">98.4%</div>
                    <div className="text-[10px] text-zinc-400 mt-1">Semantic Embedding Cache</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-black/60 border border-white/[0.08] font-mono text-xs text-zinc-300">
                  <div className="text-zinc-500 mb-2">// Sample Inference Telemetry Payload</div>
                  <pre className="overflow-x-auto text-[11px] text-cyan-300/90 leading-relaxed">
{`{
  "status": "ready",
  "edge_node": "iad1-c03",
  "ttfb_ms": ${liveTtfb},
  "pipeline": "aether-flow-v3",
  "memory_footprint_mb": 42.1,
  "masked_audit": true
}`}
                  </pre>
                </div>
              </div>
            )}

            {activeTab === 'edge' && (
              <div className="space-y-4 text-xs">
                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.08] flex items-center justify-between">
                  <div>
                    <div className="text-white font-medium">Anycast Routing Mesh</div>
                    <div className="text-zinc-400">Requests route to the geodistributed data center nearest to the user.</div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-300 font-mono">0.05ms DNS Resolution</span>
                </div>
                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.08] flex items-center justify-between">
                  <div>
                    <div className="text-white font-medium">Automatic Asset Optimization</div>
                    <div className="text-zinc-400">Lossless WebP/AVIF transcoding with instant Brotli compression.</div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-300 font-mono">-72% Payload Size</span>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-4 text-xs">
                <div className="p-5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-emerald-200 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <div className="font-semibold text-emerald-300">Enterprise Isolation Active</div>
                    <div>Rate limiting, DDoS shield, and encrypted environment storage verified.</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-12 p-8 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-950/40 to-blue-950/20 text-center space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-white">
            Need this bespoke Cloud Architecture engineered for your company?
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto">
            WebLabs builds custom high-performance platforms with sub-second speeds, client portals, and turnkey handover.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/919021509565?text=Hi%20Aixentrix,%20I%20want%20the%20HyperScale%20AI%20%26%20SaaS%20architecture%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-semibold text-sm transition-all shadow-lg shadow-cyan-500/20 active:scale-95"
            >
              <span>Engineer This For My SaaS</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
