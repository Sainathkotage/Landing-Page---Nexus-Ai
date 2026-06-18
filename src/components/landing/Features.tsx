import {
  FileText,
  CheckSquare,
  Calendar,
  Search,
  Zap,
  Lock,
  Workflow,
  Sparkles,
  GitCommit,
  Database
} from 'lucide-react';

const coreEngines = [
  {
    icon: GitCommit,
    title: 'Employee Handover Engine',
    desc: 'When an employee departs, Nexus AI Beta scans linked workspace history to automatically compile active responsibilities, a relationship graph, open commitments, and onboarding packages in 5 minutes.',
    tint: 'from-orange-500/10 to-amber-500/5',
    iconColor: 'text-accent-600',
  },
  {
    icon: Database,
    title: 'Organizational Memory Engine',
    desc: 'Binds team chat, email logs, and doc edits into a permanent context graph. Keeps company history alive and searchable long after individual contributors leave.',
    tint: 'from-emerald-700/10 to-teal-700/5',
    iconColor: 'text-emerald-800',
  },
  {
    icon: Search,
    title: 'AI Search & Knowledge Retrieval',
    desc: 'Perform semantic searches across all team emails, calendar details, meeting transcripts, and wikis with sub-second query latency, including verified citations.',
    tint: 'from-violet-700/10 to-indigo-700/5',
    iconColor: 'text-violet-800',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    desc: 'Setup agentic workflow triggers using natural language (e.g. "When a contract draft is signed, assign the onboarding review task to Marcus"). No manual coding required.',
    tint: 'from-sky-700/10 to-blue-700/5',
    iconColor: 'text-sky-800',
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <div className="vintage-divider text-xs font-semibold uppercase tracking-[0.3em] mb-6 text-ink-500 font-sans">
            <span className="flourish text-base">✦</span>
            <span className="mx-3">Core Engines</span>
            <span className="flourish text-base">✦</span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-medium text-ink-900 leading-[1.05]">
            Powered by four
            <br />
            <span className="italic text-ink-400 font-normal">autonomous engines.</span>
          </h2>
          <p className="mt-6 text-lg text-ink-500 leading-relaxed font-serif italic">
            Nexus AI Beta unifies project boards and communications under active AI engines that maintain your company memory automatically.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {coreEngines.map((f) => (
            <div
              key={f.title}
              className="group relative vintage-card rounded-sm p-6 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div
                className={`absolute inset-0 rounded-sm bg-gradient-to-br ${f.tint} opacity-0 group-hover:opacity-100 transition-opacity`}
              />
              <div className="relative">
                <div className="w-10 h-10 rounded-sm bg-cream-200 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform border border-ink-900/10">
                  <f.icon className={`w-5 h-5 ${f.iconColor}`} strokeWidth={2} />
                </div>
                <h3 className="font-serif text-xl font-medium text-ink-900 mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-ink-500 leading-relaxed font-sans">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Capabilities strip */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            { icon: Zap, text: 'Sub-second search & retrieval latency' },
            { icon: Lock, text: 'SOC 2 Type II compliant & encrypted' },
            { icon: Sparkles, text: 'Early Access Beta program active' },
          ].map((c) => (
            <div
              key={c.text}
              className="flex items-center gap-3 px-4 py-3 bg-cream-50 rounded-sm border border-ink-900/10"
            >
              <c.icon className="w-4 h-4 text-accent-600" strokeWidth={2} />
              <span className="text-xs font-medium text-ink-700 font-sans">{c.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
