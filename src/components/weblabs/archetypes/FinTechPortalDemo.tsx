import React, { useState, useEffect } from 'react';
import { ArchetypeSpecBar } from './ArchetypeSpecBar';
import {
  ShieldCheck,
  Zap,
  TrendingUp,
  Lock,
  ArrowUpRight,
  Globe2,
  Activity,
  CheckCircle2,
  Layers,
  Sparkles
} from 'lucide-react';

interface Transaction {
  id: string;
  route: string;
  amount: string;
  latencyMs: number;
  type: string;
  status: 'SETTLED' | 'CLEARED';
}

export function FinTechPortalDemo() {
  // Yield Calculator States
  const [depositAmount, setDepositAmount] = useState<number>(250000);
  const [lockupMonths, setLockupMonths] = useState<number>(12);
  const baseApy = 8.4;
  const bonusApy = lockupMonths >= 24 ? 1.8 : lockupMonths >= 12 ? 0.9 : 0;
  const effectiveApy = baseApy + bonusApy;

  const annualYield = (depositAmount * effectiveApy) / 100;
  const monthlyDividend = annualYield / 12;
  const totalReturn = depositAmount + (annualYield * (lockupMonths / 12));

  // Live Settlement Telemetry Stream
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: 'TX-9841', route: 'NYC ➔ ZRH', amount: '$420,000.00', latencyMs: 8, type: 'Cross-Border Wire', status: 'SETTLED' },
    { id: 'TX-9842', route: 'LON ➔ SGP', amount: '€180,500.00', latencyMs: 11, type: 'FX Liquidity Swap', status: 'CLEARED' },
    { id: 'TX-9843', route: 'TYO ➔ SFO', amount: '$89,200.00', latencyMs: 6, type: 'Automated Yield Sweep', status: 'SETTLED' },
    { id: 'TX-9844', route: 'FRA ➔ DUB', amount: '€310,000.00', latencyMs: 9, type: 'Multi-Sig Escrow', status: 'SETTLED' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const routes = ['NYC ➔ LON', 'SGP ➔ DXB', 'ZRH ➔ TYO', 'SFO ➔ FRA', 'DUB ➔ SYD'];
      const types = ['Treasury Rebalance', 'Cross-Border Wire', 'Liquidity Sweep', 'Instant Settlement'];
      const randomRoute = routes[Math.floor(Math.random() * routes.length)];
      const randomType = types[Math.floor(Math.random() * types.length)];
      const randomAmount = `$${(Math.floor(Math.random() * 400) + 50).toLocaleString()},000.00`;
      const randomLatency = Math.floor(Math.random() * 8) + 5; // 5ms - 13ms

      const newTx: Transaction = {
        id: `TX-${Math.floor(1000 + Math.random() * 9000)}`,
        route: randomRoute,
        amount: randomAmount,
        latencyMs: randomLatency,
        type: randomType,
        status: 'SETTLED',
      };

      setTransactions((prev) => [newTx, ...prev.slice(0, 4)]);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#040D0A] text-zinc-100 selection:bg-emerald-500/30 selection:text-emerald-200 font-sans">
      <ArchetypeSpecBar
        id="03"
        category="Financial Services"
        title="Global FinTech Portal"
        claimBadge="Zero Latency Settlement"
        techStack="Astro • Supabase • TypeScript"
        themeColor="emerald"
      />

      {/* FinTech Institutional Header */}
      <section className="relative pt-12 pb-16 border-b border-white/[0.08] overflow-hidden">
        {/* Emerald Ambient Glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-600/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/40 text-emerald-300 text-xs font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>ARCHETYPE 03 // INSTITUTIONAL FINTECH SPEC</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
              Global FinTech Portal Architecture
            </h1>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Tailored for institutional wealth management, neo-banks, and cross-border payment platforms. Delivers <strong className="text-emerald-300">zero-latency settlement telemetry</strong>, interactive yield modeling, and SOC2 bank-grade compliance.
            </p>
          </div>

          {/* FinTech Proof Metrics */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-emerald-500/20 backdrop-blur-md">
              <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
                <span>Settlement Speed</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <div className="text-2xl font-mono font-bold text-emerald-300">6 - 12ms</div>
              <div className="text-[11px] text-zinc-500 font-mono mt-0.5">Zero Latency Guaranteed</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md">
              <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
                <span>Security Protocol</span>
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div className="text-2xl font-mono font-bold text-white">SOC2 + 256 AES</div>
              <div className="text-[11px] text-emerald-400 font-mono mt-0.5">Bank-Grade Compliance</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md">
              <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
                <span>Treasury Volume</span>
                <TrendingUp className="w-3.5 h-3.5 text-teal-400" />
              </div>
              <div className="text-2xl font-mono font-bold text-white">$1.48B+</div>
              <div className="text-[11px] text-zinc-500 font-mono mt-0.5">Automated Liquidity Mesh</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md">
              <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
                <span>System Uptime</span>
                <Activity className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div className="text-2xl font-mono font-bold text-white">99.999%</div>
              <div className="text-[11px] text-zinc-500 font-mono mt-0.5">Redundant Dual-Cloud Failover</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Demo Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {/* Section 1: Interactive Yield Calculator */}
        <div className="p-6 sm:p-8 rounded-3xl border border-emerald-500/25 bg-gradient-to-br from-emerald-950/20 via-[#071410] to-[#040D0A] shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>INTERACTIVE FINANCIAL TOOL</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-white">
                Dynamic Institutional Yield Calculator
              </h2>
              <p className="text-xs text-zinc-400 mt-1">
                Calculate compounding annual returns across diversified institutional treasury yields.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-black/60 border border-emerald-500/30 text-right">
              <div className="text-[11px] text-zinc-400">Effective Annual Yield (APY)</div>
              <div className="text-2xl font-mono font-bold text-emerald-300">{effectiveApy.toFixed(2)}%</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
            {/* Controls */}
            <div className="lg:col-span-6 space-y-6">
              {/* Deposit Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-zinc-400">Principal Deposit Capital:</span>
                  <span className="font-mono text-base font-semibold text-white">
                    ${depositAmount.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="25000"
                  max="1000000"
                  step="25000"
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                  <span>$25,000</span>
                  <span>$500,000</span>
                  <span>$1,000,000</span>
                </div>
              </div>

              {/* Lockup Tenure */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-zinc-400">Treasury Lockup Horizon:</span>
                  <span className="font-mono text-sm font-semibold text-emerald-300">
                    {lockupMonths} Months {bonusApy > 0 && `(+${bonusApy}% Boost)`}
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {[3, 6, 12, 24].map((m) => (
                    <button
                      key={m}
                      onClick={() => setLockupMonths(m)}
                      className={`py-2 px-3 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                        lockupMonths === m
                          ? 'bg-emerald-400 text-black font-semibold shadow-lg shadow-emerald-500/20'
                          : 'bg-white/[0.04] text-zinc-400 hover:text-white border border-white/[0.06]'
                      }`}
                    >
                      {m} Mo
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Projected Returns Output Card */}
            <div className="lg:col-span-6 p-6 rounded-2xl bg-black/60 border border-white/[0.08] flex flex-col justify-between space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="text-[11px] text-zinc-400">Monthly Dividend</div>
                  <div className="text-xl font-mono font-bold text-white mt-1">
                    ${Math.round(monthlyDividend).toLocaleString()}
                  </div>
                  <div className="text-[10px] text-emerald-400 mt-0.5">Paid Every 1st of Month</div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="text-[11px] text-zinc-400">Projected Net Interest</div>
                  <div className="text-xl font-mono font-bold text-emerald-300 mt-1">
                    +${Math.round(annualYield * (lockupMonths / 12)).toLocaleString()}
                  </div>
                  <div className="text-[10px] text-zinc-500 mt-0.5">Over {lockupMonths} months</div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-zinc-400">Total Portfolio Value at Maturity</span>
                  <div className="text-2xl sm:text-3xl font-mono font-bold text-emerald-400">
                    ${Math.round(totalReturn).toLocaleString()}
                  </div>
                </div>
                <span className="text-[11px] font-mono text-zinc-500">Zero Management Fees</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Real-time Zero Latency Settlement Ticker */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 p-6 rounded-3xl border border-white/[0.08] bg-[#07130F]/60 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-400" />
                <h3 className="text-sm font-semibold text-white">Live Zero-Latency Settlement Stream</h3>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 animate-pulse">
                ● Streaming Transactions
              </span>
            </div>

            <div className="space-y-2">
              {transactions.map((tx) => (
                <div
                  key={tx.id}
                  className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06] flex items-center justify-between text-xs font-mono transition-all hover:border-emerald-500/30"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 font-bold">{tx.id}</span>
                      <span className="text-zinc-500">•</span>
                      <span className="text-zinc-300">{tx.route}</span>
                    </div>
                    <div className="text-[10px] text-zinc-500">{tx.type}</div>
                  </div>

                  <div className="text-right space-y-0.5">
                    <div className="text-white font-semibold">{tx.amount}</div>
                    <div className="text-[10px] text-emerald-400">
                      Settled in {tx.latencyMs}ms ({tx.status})
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Bank-Grade Compliance Badges */}
          <div className="lg:col-span-5 p-6 rounded-3xl border border-white/[0.08] bg-[#07130F]/60 space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-emerald-400" />
                <h3 className="text-sm font-semibold text-white">Bank-Grade Compliance Matrix</h3>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06] flex items-center justify-between">
                  <div>
                    <div className="text-white font-medium">SOC2 Type II Certified</div>
                    <div className="text-[11px] text-zinc-500">Audited by Ernst & Young (EY)</div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06] flex items-center justify-between">
                  <div>
                    <div className="text-white font-medium">256-bit AES GCM Encryption</div>
                    <div className="text-[11px] text-zinc-500">Quantum-resistant cipher suites</div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06] flex items-center justify-between">
                  <div>
                    <div className="text-white font-medium">Multi-Sig Treasury Custody</div>
                    <div className="text-[11px] text-zinc-500">3-of-5 hardware air-gapped signers</div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
            </div>

            <div className="text-[11px] text-zinc-500 pt-3 border-t border-white/[0.06]">
              Built with Supabase Row-Level Security (RLS) & Astro Edge Functions.
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 p-8 rounded-3xl border border-emerald-500/20 bg-gradient-to-r from-emerald-950/40 via-black to-black text-center space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-white">
            Need an institutional-grade FinTech or Web3 website architecture?
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto">
            WebLabs engineers regulatory-compliant, lightning-fast financial portals with live market telemetry and interactive calculators.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/919021509565?text=Hi%20Aixentrix,%20I%20want%20the%20Global%20FinTech%20Portal%20architecture%20for%20my%20financial%20platform."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-semibold text-sm transition-all shadow-lg shadow-emerald-500/20 active:scale-95"
            >
              <span>Deploy My FinTech Architecture</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
