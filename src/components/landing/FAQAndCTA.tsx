import { useState } from 'react';
import { ChevronDown, ArrowUpRight } from 'lucide-react';

const DASHBOARD_URL = import.meta.env.PUBLIC_DASHBOARD_URL || 'https://nexus-seven-rose-66.vercel.app';

const faqs = [
  {
    q: 'What is an AI Chief of Staff?',
    a: 'An AI Chief of Staff is a proactive administrative assistant that integrates with your email inbox, calendars, documents, and chats. Unlike passive wiki pages, it tracks active work streams, auto-triages tasks, drafts context-aware replies, and coordinates scheduling automatically.',
  },
  {
    q: 'How does Nexus AI Beta preserve organizational memory?',
    a: 'Nexus AI Beta indexes work communications (emails and chats), project comments, and document updates into a secure, private context graph. When questions arise, team members search this company memory rather than checking old threads or stale wikis.',
  },
  {
    q: 'What happens when an employee leaves?',
    a: 'When offboarding an employee, Nexus AI Beta sweeps their connected workspaces to compile an active responsibilities list, a contact relationship graph, open commitments, decision histories, and summaries of active projects within 5 minutes.',
  },
  {
    q: 'How does AI onboarding work?',
    a: 'Using the handover documentation generated from a predecessor, Nexus AI Beta constructs a custom onboarding pack for the replacement employee, showing active tickets, context guides, and allowing them to query company memory via chat.',
  },
  {
    q: 'Can Nexus AI Beta replace documentation tools?',
    a: 'Yes, it replaces static wikis (like Notion and Confluence). It maintains your team wiki automatically by parsing chat decisions and project logs, ensuring company documentation stays updated without manual writing.',
  },
  {
    q: 'How is Nexus AI Beta different from Notion?',
    a: 'Notion is a passive wiki requiring manual input and curation. Nexus AI Beta is an active workspace: it connects to your calendars, chats, and emails to auto-write document summaries and triage projects dynamically in the background.',
  },
  {
    q: 'How is Nexus AI Beta different from ClickUp?',
    a: 'ClickUp is a complex task manager requiring heavy configuration. Nexus AI Beta uses natural language to build workflows, automates task triage, and schedules focus blocks directly onto calendars based on bandwidth.',
  },
  {
    q: 'How does Nexus AI Beta automate handovers?',
    a: 'By using background agents that analyze email headers, Slack exchanges, and linked tasks. It builds context-aware files mapping active tasks and client histories to ensure a clean transition to successors.',
  },
  {
    q: 'Who should use Nexus AI Beta?',
    a: 'High-growth startup founders, operations leads, remote product/engineering teams, legal groups, and HR leads who want to prevent context leakage and eliminate administrative overhead.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="vintage-divider text-xs font-semibold uppercase tracking-[0.3em] mb-6 text-ink-500 font-sans">
            <span className="flourish text-base">✦</span>
            <span className="mx-3">Frequently Asked</span>
            <span className="flourish text-base">✦</span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-medium text-ink-900">
            Questions, answered.
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="vintage-card rounded-sm overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-6 py-4 flex items-center justify-between gap-4 text-left cursor-pointer border-0"
              >
                <span className="font-serif text-lg font-medium text-ink-900">{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-ink-500 shrink-0 transition-transform ${
                    open === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5 -mt-1">
                  <p className="text-ink-600 leading-relaxed font-sans text-sm">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  const handleStart = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `${DASHBOARD_URL}/?auth=login`;
  };

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative bg-ink-900 rounded-sm overflow-hidden px-8 py-16 md:p-20 text-center border border-accent-600/30">
          {/* Glow effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-accent-500/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-amber-600/20 rounded-full blur-3xl" />

          {/* Vintage grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,240,220,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,240,220,0.4) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          <div className="relative">
            <div className="vintage-divider text-xs font-semibold uppercase tracking-[0.3em] mb-8 text-cream-300 font-sans">
              <span className="flourish text-base">❦</span>
              <span className="mx-3">A Final Word</span>
              <span className="flourish text-base">❦</span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-medium text-cream-100 leading-tight">
              Ready to meet your
              <br />
              <span className="italic bg-gradient-to-r from-accent-500 via-amber-400 to-yellow-300 bg-clip-text text-transparent font-normal">
                AI Chief of Staff?
              </span>
            </h2>
            <p className="mt-6 text-base text-cream-200 max-w-xl mx-auto italic font-serif">
              Join the Nexus AI Beta and build permanent company memory today.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleStart}
                className="group px-7 py-3.5 bg-cream-100 hover:bg-white text-ink-900 text-sm font-medium rounded-sm transition-all inline-flex items-center justify-center gap-2 font-sans cursor-pointer border-0 shadow-lg"
              >
                Join the Free Beta
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
