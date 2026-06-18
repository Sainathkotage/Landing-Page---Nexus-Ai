import { HelpCircle, AlertTriangle, Lightbulb, UserCheck, ShieldAlert, Cpu } from 'lucide-react';

export function WhyBuilding() {
  const failScenarios = [
    {
      title: "Manual Wikis Go Stale",
      desc: "Document repositories (like Notion or Confluence) require manual updating. When projects accelerate, documentation is forgotten. Nexus AI Beta automates context compilation in the background.",
      icon: ShieldAlert,
    },
    {
      title: "Chat Logs Bury Decisions",
      desc: "Critical strategy, context, and decisions are discussed in chat feeds (like Slack or Teams) and are quickly pushed out of sight, creating an ephemeral silo of tribal knowledge.",
      icon: AlertTriangle,
    },
    {
      title: "Handover Context Leakage",
      desc: "When key employees leave an organization, they take years of undocumented client conversations, dependencies, and decisions with them, causing operational delays.",
      icon: AlertTriangle,
    }
  ];

  return (
    <section id="mission" className="py-24 md:py-32 relative overflow-hidden bg-cream-100/50 border-t border-b border-ink-900/10">
      <div className="absolute inset-0 grain opacity-[0.15] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        
        {/* Section 1: The Problem Statement */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-ink-400" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-ink-500 font-sans">
                The Problem
              </span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-medium text-ink-900 leading-[1.05]">
              Modern teams are losing
              <br />
              <span className="italic text-accent-500 font-normal">their operational memory.</span>
            </h2>
            <p className="mt-6 text-base text-ink-600 leading-relaxed font-serif italic">
              Every time an employee leaves, a project changes hands, or a decision is buried in Slack, your organization leaks context. Nexus AI Beta turns fragmented updates into permanent intelligence.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-medium text-ink-900 mb-4">Why Existing Tools Fail</h3>
            <div className="space-y-4">
              {failScenarios.map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 bg-cream-50 rounded-sm border border-ink-900/10">
                  <div className="w-8 h-8 rounded-sm bg-accent-500/10 flex items-center justify-center shrink-0 border border-accent-500/20">
                    <item.icon className="w-4 h-4 text-accent-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-ink-900 font-sans">{item.title}</h4>
                    <p className="text-xs text-ink-500 leading-relaxed mt-1 font-sans">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 2: Why We're Building Nexus AI Beta (Mission) */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-ink-400" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-ink-500 font-sans">
              Our Mission
            </span>
            <span className="h-px w-8 bg-ink-400" />
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-medium text-ink-900 mb-6">
            Why We're Building
            <br />
            <span className="italic text-ink-400 font-normal">Nexus AI Beta</span>
          </h2>
          <p className="text-sm text-ink-600 leading-relaxed font-sans max-w-xl mx-auto">
            We believe that company data shouldn't reside in static document tabs. We are building the AI Chief of Staff—a unified workspace that actively scans updates, automates routines, and maps company data into a single, permanent context graph.
          </p>
        </div>

        {/* Section 3: Visual Workflow timeline (People -> Knowledge -> Decisions -> Permanent Memory) */}
        <div className="relative p-8 bg-cream-50 rounded-sm border border-ink-900/15 shadow-lg overflow-hidden vintage-border">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-orange-500/5 to-transparent pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
            
            {/* Step 1: People */}
            <div className="flex-1 text-center px-4">
              <div className="w-12 h-12 rounded-sm bg-ink-900 flex items-center justify-center mx-auto mb-4 border border-accent-600/50">
                <UserCheck className="w-5 h-5 text-accent-500" />
              </div>
              <h4 className="text-sm font-semibold text-ink-900 font-sans">1. People</h4>
              <p className="text-[11px] text-ink-500 mt-1 font-sans leading-relaxed">Collaborators create docs, sync calendars, and message in chat rooms.</p>
            </div>

            {/* Arrow */}
            <div className="hidden md:block text-ink-300 font-serif text-2xl font-light">→</div>

            {/* Step 2: Knowledge */}
            <div className="flex-1 text-center px-4">
              <div className="w-12 h-12 rounded-sm bg-ink-900 flex items-center justify-center mx-auto mb-4 border border-accent-600/50">
                <Cpu className="w-5 h-5 text-accent-500" />
              </div>
              <h4 className="text-sm font-semibold text-ink-900 font-sans">2. Knowledge</h4>
              <p className="text-[11px] text-ink-500 mt-1 font-sans leading-relaxed">Nexus AI Beta indexes conversations, database properties, and links.</p>
            </div>

            {/* Arrow */}
            <div className="hidden md:block text-ink-300 font-serif text-2xl font-light">→</div>

            {/* Step 3: Decisions */}
            <div className="flex-1 text-center px-4">
              <div className="w-12 h-12 rounded-sm bg-ink-900 flex items-center justify-center mx-auto mb-4 border border-accent-600/50">
                <Lightbulb className="w-5 h-5 text-accent-500" />
              </div>
              <h4 className="text-sm font-semibold text-ink-900 font-sans">3. Decisions</h4>
              <p className="text-[11px] text-ink-500 mt-1 font-sans leading-relaxed">System logs critical commits and schedules tasks on calendars.</p>
            </div>

            {/* Arrow */}
            <div className="hidden md:block text-ink-300 font-serif text-2xl font-light">→</div>

            {/* Step 4: Permanent Memory */}
            <div className="flex-1 text-center px-4 bg-accent-500/5 p-4 rounded-sm border border-accent-500/20">
              <div className="w-12 h-12 rounded-sm bg-accent-500 flex items-center justify-center mx-auto mb-4 border border-ink-900/30">
                <Cpu className="w-5 h-5 text-cream-100" />
              </div>
              <h4 className="text-sm font-semibold text-ink-900 font-sans">4. Company Memory</h4>
              <p className="text-[11px] text-ink-500 mt-1 font-sans leading-relaxed">Permanent, searchable context graph available for onboarding and search queries.</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
