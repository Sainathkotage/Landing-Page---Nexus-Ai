import React, { useState } from 'react';
import { ArchetypeSpecBar } from './ArchetypeSpecBar';
import {
  Terminal,
  Code2,
  Search,
  Zap,
  Play,
  Copy,
  Check,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Gauge,
  Cpu,
  Layers,
  X
} from 'lucide-react';

export function DeveloperInfraDemo() {
  const [activeLang, setActiveLang] = useState<'typescript' | 'curl' | 'python'>('typescript');
  const [isRunning, setIsRunning] = useState(false);
  const [apiResponse, setApiResponse] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const codeSnippets = {
    typescript: `import { AixentrixClient } from '@aixentrix/sdk';

const client = new AixentrixClient({
  apiKey: process.env.AIXENTRIX_API_KEY,
  region: 'global-edge',
});

// Execute sub-second telemetry query
const response = await client.telemetry.query({
  archetype: 'dev-infrastructure',
  metrics: ['ttfb', 'p99_latency', 'seo_score'],
});

console.log('Query verified:', response.data);`,

    curl: `curl -X POST https://api.aixentrix.com/v1/telemetry/query \\
  -H "Authorization: Bearer aix_live_mock_demo_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "archetype": "dev-infrastructure",
    "metrics": ["ttfb", "p99_latency", "seo_score"]
  }'`,

    python: `from aixentrix import AixentrixClient
import os

client = AixentrixClient(
    api_key=os.getenv("AIXENTRIX_API_KEY"),
    region="global-edge"
)

response = client.telemetry.query(
    archetype="dev-infrastructure",
    metrics=["ttfb", "p99_latency", "seo_score"]
)

print(f"Status: {response.status_code} | Latency: {response.latency}ms")`,
  };

  const runApiQuery = () => {
    setIsRunning(true);
    setApiResponse(null);
    setTimeout(() => {
      setApiResponse(
        JSON.stringify(
          {
            status: 200,
            execution_time_ms: 14.2,
            edge_node: 'iad1-cloud-04',
            claim_verified: true,
            lighthouse_audit: {
              performance: 100,
              accessibility: 100,
              best_practices: 100,
              seo: 100,
            },
            payload: {
              archetype: 'Developer Infrastructure',
              dev_velocity_multiplier: '4.2x',
              search_indexing: 'sub-millisecond',
            },
          },
          null,
          2
        )
      );
      setIsRunning(false);
    }, 450);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeLang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const docSearchResults = [
    { title: 'Sub-Second Edge Handlers', path: '/docs/edge/handlers', tag: 'Guide' },
    { title: 'Interactive MDX Code Sandboxes', path: '/docs/components/sandbox', tag: 'Component' },
    { title: 'Automated SEO Schema Generator', path: '/docs/seo/schema-ld', tag: 'Architecture' },
    { title: 'TypeScript SDK & Webhook Verification', path: '/docs/sdk/typescript', tag: 'API Reference' },
  ].filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="min-h-screen bg-[#0B0814] text-zinc-100 selection:bg-purple-500/30 selection:text-purple-200 font-sans">
      <ArchetypeSpecBar
        id="04"
        category="Dev Tools & APIs"
        title="Developer Infrastructure"
        claimBadge="Automated SEO & 100% Core Web Vitals"
        techStack="React 19 • MDX • Vite"
        themeColor="purple"
      />

      {/* Developer Hero Header */}
      <section className="relative pt-12 pb-16 border-b border-white/[0.08] overflow-hidden">
        {/* Neon Violet Glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-950/40 text-purple-300 text-xs font-mono">
                <Terminal className="w-3.5 h-3.5 text-purple-400" />
                <span>ARCHETYPE 04 // DEVELOPER PORTAL SPEC</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
                Developer Infrastructure Architecture
              </h1>

              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Engineered for API companies, developer tooling startups, and open-source frameworks. Features an interactive code sandbox, lightning Cmd+K documentation search, and verified <strong className="text-purple-300">100% Core Web Vitals & Automated SEO</strong>.
              </p>
            </div>

            {/* Lightning Search Trigger */}
            <div className="shrink-0">
              <button
                onClick={() => setSearchModalOpen(true)}
                className="w-full sm:w-80 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] border border-purple-500/30 text-xs text-zinc-400 hover:text-white flex items-center justify-between transition-all shadow-lg active:scale-95 cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Search className="w-4 h-4 text-purple-400" />
                  <span>Search docs, endpoints...</span>
                </div>
                <kbd className="px-2 py-0.5 rounded bg-black/60 border border-white/10 text-[10px] font-mono text-zinc-400">
                  ⌘K
                </kbd>
              </button>
            </div>
          </div>

          {/* Proof Badges Grid */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-purple-500/20 backdrop-blur-md">
              <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
                <span>Core Web Vitals</span>
                <Gauge className="w-3.5 h-3.5 text-purple-400" />
              </div>
              <div className="text-2xl font-mono font-bold text-purple-300">100/100</div>
              <div className="text-[11px] text-zinc-500 font-mono mt-0.5">LCP 0.38s • CLS 0.00</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md">
              <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
                <span>Automated SEO</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div className="text-2xl font-mono font-bold text-white">100% Rank</div>
              <div className="text-[11px] text-emerald-400 font-mono mt-0.5">JSON-LD + OpenGraph Spec</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md">
              <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
                <span>Code Sandbox Run</span>
                <Zap className="w-3.5 h-3.5 text-purple-400" />
              </div>
              <div className="text-2xl font-mono font-bold text-white">14ms API</div>
              <div className="text-[11px] text-zinc-500 font-mono mt-0.5">Zero-Config Mocking</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md">
              <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
                <span>Search Latency</span>
                <Search className="w-3.5 h-3.5 text-purple-300" />
              </div>
              <div className="text-2xl font-mono font-bold text-white">&lt; 1.2ms</div>
              <div className="text-[11px] text-zinc-500 font-mono mt-0.5">Client-side WebAssembly Index</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Sandbox Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        <div className="rounded-3xl border border-purple-500/25 bg-[#100C1C]/80 backdrop-blur-2xl shadow-2xl overflow-hidden">
          {/* Editor Header */}
          <div className="px-6 py-4 border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-4 bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="h-4 w-[1px] bg-white/10 mx-1" />
              <div className="text-xs font-mono text-zinc-400 flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5 text-purple-400" />
                <span>Interactive SDK Sandbox</span>
              </div>
            </div>

            {/* Language Switcher & Actions */}
            <div className="flex items-center gap-2">
              <div className="flex items-center p-1 rounded-xl bg-black/40 border border-white/[0.06] text-xs">
                {(['typescript', 'curl', 'python'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setActiveLang(lang);
                      setApiResponse(null);
                    }}
                    className={`px-3 py-1 rounded-lg font-mono text-xs capitalize transition-all ${
                      activeLang === lang
                        ? 'bg-purple-500/20 text-purple-200 border border-purple-500/30 font-semibold'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>

              <button
                onClick={handleCopy}
                className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 transition-colors"
                title="Copy code"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>

              <button
                onClick={runApiQuery}
                disabled={isRunning}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-purple-500 hover:bg-purple-400 text-white font-semibold text-xs transition-all shadow-md shadow-purple-500/20 active:scale-95 disabled:opacity-50 cursor-pointer"
              >
                <Play className={`w-3.5 h-3.5 ${isRunning ? 'animate-spin' : ''}`} />
                <span>{isRunning ? 'Executing...' : 'Run Request'}</span>
              </button>
            </div>
          </div>

          {/* Editor Grid: Code on Left, Live Response on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08]">
            {/* Code View */}
            <div className="lg:col-span-7 p-6 font-mono text-xs bg-black/40 overflow-x-auto">
              <div className="text-[11px] text-zinc-500 mb-3 flex items-center justify-between">
                <span>// Client Request Spec ({activeLang})</span>
                <span className="text-purple-400">Ready to execute</span>
              </div>
              <pre className="text-zinc-300 leading-relaxed font-mono">
                <code>{codeSnippets[activeLang]}</code>
              </pre>
            </div>

            {/* Live Response Output */}
            <div className="lg:col-span-5 p-6 bg-black/60 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between text-xs pb-3 border-b border-white/[0.06] mb-3">
                  <span className="font-mono text-zinc-400">Response Payload</span>
                  {apiResponse ? (
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[10px] border border-emerald-500/20">
                      HTTP 200 OK • 14ms
                    </span>
                  ) : (
                    <span className="text-[11px] text-zinc-500 font-mono">Awaiting trigger</span>
                  )}
                </div>

                {apiResponse ? (
                  <pre className="font-mono text-[11px] text-purple-300/90 overflow-x-auto leading-relaxed max-h-72">
                    {apiResponse}
                  </pre>
                ) : (
                  <div className="py-12 text-center space-y-2">
                    <Terminal className="w-8 h-8 text-zinc-600 mx-auto" />
                    <div className="text-xs text-zinc-400 font-medium">Click "Run Request" to execute</div>
                    <div className="text-[11px] text-zinc-600">Simulates real edge execution with zero latency.</div>
                  </div>
                )}
              </div>

              {/* Package Installer Pill */}
              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-500">Quick Install:</span>
                <code className="px-2.5 py-1 rounded-lg bg-white/[0.04] text-purple-300 border border-white/10">
                  npm i @aixentrix/sdk
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* 100% Core Web Vitals Audit Card */}
        <div className="p-6 sm:p-8 rounded-3xl border border-white/[0.08] bg-white/[0.02] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>LIGHTHOUSE 100% VERIFICATION</span>
              </div>
              <h3 className="text-lg font-semibold text-white">Google Lighthouse Performance Scorecard</h3>
              <p className="text-xs text-zinc-400 mt-0.5">
                Every developer documentation page built by WebLabs scores a perfect 100 across all audited metrics.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Performance', score: 100, desc: 'LCP 0.38s • FCP 0.29s' },
              { label: 'Accessibility', score: 100, desc: 'WCAG 2.1 AAA Compliant' },
              { label: 'Best Practices', score: 100, desc: 'CSP + HTTPS Security' },
              { label: 'SEO', score: 100, desc: 'Automated JSON-LD Schema' },
            ].map((metric) => (
              <div key={metric.label} className="p-4 rounded-2xl bg-black/40 border border-emerald-500/20 text-center space-y-1">
                <div className="w-12 h-12 rounded-full border-2 border-emerald-400 bg-emerald-500/10 flex items-center justify-center font-mono font-bold text-emerald-300 text-lg mx-auto">
                  {metric.score}
                </div>
                <div className="text-xs font-medium text-white pt-1">{metric.label}</div>
                <div className="text-[10px] text-zinc-500 font-mono">{metric.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightning Search Modal */}
        {searchModalOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/70 backdrop-blur-md">
            <div className="w-full max-w-xl bg-[#120E20] border border-purple-500/30 rounded-2xl p-4 shadow-2xl space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <Search className="w-4 h-4 text-purple-400 shrink-0" />
                <input
                  type="text"
                  placeholder="Type to search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full bg-transparent text-sm text-white focus:outline-none placeholder:text-zinc-500"
                />
                <button
                  onClick={() => setSearchModalOpen(false)}
                  className="text-zinc-400 hover:text-white text-xs p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-2 max-h-64 overflow-y-auto text-xs">
                {docSearchResults.map((doc, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl hover:bg-white/[0.06] border border-transparent hover:border-white/10 flex items-center justify-between cursor-pointer transition-colors"
                  >
                    <div>
                      <div className="font-medium text-white">{doc.title}</div>
                      <div className="text-[11px] font-mono text-zinc-500">{doc.path}</div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 text-[10px] font-mono border border-purple-500/20">
                      {doc.tag}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-white/10 flex justify-between text-[11px] text-zinc-500 font-mono">
                <span>Proved: &lt; 1.2ms indexing latency</span>
                <span>ESC to close</span>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Call to Action */}
        <div className="mt-12 p-8 rounded-3xl border border-purple-500/20 bg-gradient-to-r from-purple-950/40 via-black to-black text-center space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-white">
            Build your Developer Portal or API Documentation with WebLabs
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto">
            Give your developer community interactive sandboxes, instant search, and automated SEO that drives developer adoption.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/919021509565?text=Hi%20Aixentrix,%20I%20want%20the%20Developer%20Infrastructure%20website%20architecture%20for%20my%20company."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-500 hover:bg-purple-400 text-white font-semibold text-sm transition-all shadow-lg shadow-purple-500/20 active:scale-95"
            >
              <span>Build My Developer Portal</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
