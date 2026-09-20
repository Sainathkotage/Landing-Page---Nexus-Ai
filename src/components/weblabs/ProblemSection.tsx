import { HelpCircle, AlertTriangle, SmartphoneNfc, Users, ArrowRight } from 'lucide-react';

export function ProblemSection() {
  const problems = [
    {
      icon: HelpCircle,
      title: 'No Website',
      description:
        "Your customers can't easily find everything they need in one place. Critical info like price lists, services, verified hours, and location get lost in endless DM requests.",
      badge: 'Friction',
      color: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
    },
    {
      icon: AlertTriangle,
      title: 'Basic or Outdated Website',
      description:
        "Your website exists, but it doesn't reflect the true quality of your business. Clunky navigation, broken mobile layouts, and slow loading create doubt instead of trust.",
      badge: 'Lost Credibility',
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    },
    {
      icon: SmartphoneNfc,
      title: "Social Media Isn't Enough",
      description:
        'Instagram and WhatsApp are useful — but they are not your digital home. Algorithms decide who sees your posts, stories expire in 24 hours, and important details get buried.',
      badge: 'Uncontrolled Reach',
      color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    },
    {
      icon: Users,
      title: 'Missed Customer Inquiries',
      description:
        'When potential customers search for services near them, they pick the business that looks established and easy to contact. Without a modern website, they choose your competitors.',
      badge: 'Lost Revenue',
      color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#090d18] relative border-t border-white/5 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/3 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
            <span>THE MODERN CONSUMER REALITY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Your customers are searching for you.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            Before visiting a business, customers almost always look it up online. If they can't find a proper website, they are forced to rely on scattered information across social media, maps, and directories.
          </p>
        </div>

        {/* 4 Problem Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="group relative bg-[#0d1222]/80 hover:bg-[#11182c] border border-white/10 hover:border-white/20 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-lg shadow-black/40 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${p.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border ${p.color}`}>
                    {p.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {p.title}
                </h3>

                <p className="text-sm text-slate-300 font-sans leading-relaxed">
                  {p.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Highlight quote box */}
        <div className="mt-12 bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-blue-900/20 border border-blue-500/20 rounded-2xl p-6 sm:p-8 text-center max-w-4xl mx-auto">
          <p className="text-sm sm:text-base text-blue-200 font-medium leading-relaxed">
            "Give customers <span className="text-white font-bold">one reliable place</span> to discover your offerings, view photos, verify real credentials, check hours, and reach out on WhatsApp with a single tap."
          </p>
        </div>
      </div>
    </section>
  );
}
