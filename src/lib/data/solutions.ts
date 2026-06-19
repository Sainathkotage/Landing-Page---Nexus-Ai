export interface SolutionPage {
  name: string;
  slug: string;
  title: string;
  description: string;
  introduction: string;
  problem: string;
  howAixentrixSolves: string;
  features: string[];
  faqs: { q: string; a: string }[];
}

export const solutions: SolutionPage[] = [
  {
    name: "AI Workspace",
    slug: "ai-workspace",
    title: "AI-Powered Workspace for Hybrid Teams — Aixentrix",
    description: "Discover Aixentrix, the collaborative AI-native workspace. Unify documents, tasks, email, and chats in one context-rich environment.",
    introduction: "An AI workspace converges your isolated work apps — emails, calendar, tasks, and notes — into one intelligent screen powered by background agents.",
    problem: "Most teams waste time switching between separate tools, leaving context fragmented across Slack channels, Notion wikis, and Outlook folders.",
    howAixentrixSolves: "Aixentrix integrates communication and task databases into a unified vector context graph, allowing users to query, draft, and triage from a single surface.",
    features: [
      "Auto-syncs Gmail, Outlook, calendars, and project lists.",
      "Embedded AI assistant that answers questions across platforms.",
      "Offline-first speed and keyboard-driven layouts."
    ],
    faqs: [
      { q: "What is an AI workspace?", a: "An AI workspace is a software environment where communication channels, task trackers, and databases are natively connected to AI models for automatic context tracking." },
      { q: "Is my corporate data secure?", a: "Yes. All data uses TLS 1.3 encryption in transit and AES-256 at rest, with strict PostgreSQL row-level security." }
    ]
  },
  {
    name: "AI Operating System",
    slug: "ai-operating-system",
    title: "The Agentic AI Operating System for Startups — Aixentrix",
    description: "Manage business workflows, task schedules, and documentation through a proactive, agentic operating system designed for growth teams.",
    introduction: "Aixentrix acts as a digital operating system for your team, running automated background processes that document files, allocate resources, and triage tasks.",
    problem: "Startups suffer from administrative debt. Founders and managers spend hours coordinating timelines and status updates manually.",
    howAixentrixSolves: "Aixentrix monitors project flows and email queues in the background to automatically update ticket boards and schedule calendar focus blocks.",
    features: [
      "Self-updating process manuals and standard operating procedures.",
      "Integrated billing, project pipelines, and calendar slots.",
      "Multi-agent system coordinates task allocations automatically."
    ],
    faqs: [
      { q: "What does an AI operating system do?", a: "It automates routine business operations like employee handovers, calendar scheduling, status report compilation, and email follow-ups." }
    ]
  },
  {
    name: "Knowledge Management AI",
    slug: "knowledge-management-ai",
    title: "Knowledge Management AI & Self-Updating Wikis — Aixentrix",
    description: "Avoid outdated documentation. See how our Knowledge Management AI automatically indexes company logs and maintains directories.",
    introduction: "Knowledge management AI connects your corporate communication histories to wikis, ensuring documentation stays updated without manual writing.",
    problem: "Manual wikis like Notion and Confluence quickly go stale because writing documentation is tedious and developers prioritize shipping code.",
    howAixentrixSolves: "Aixentrix scans linked GitHub logs, email decisions, and chat threads to auto-draft wiki articles and process references in real-time.",
    features: [
      "Auto-generates release notes and API guides from git commits.",
      "Synthesizes chat decisions into standard markdown document structures.",
      "Verifies and alerts team members when documentation requires review."
    ],
    faqs: [
      { q: "How does Aixentrix automate wikis?", a: "Our AI agents extract product and policy updates from developer logs and chat conversations, drafting wiki updates automatically." }
    ]
  },
  {
    name: "Second Brain for Teams",
    slug: "second-brain-teams",
    title: "The Ultimate Second Brain for Product Teams — Aixentrix",
    description: "Build a shared, context-aware Second Brain. Access chats, emails, and document contexts instantly through semantic vector search.",
    introduction: "A collective Second Brain acts as the permanent digital memory for your company, indexing every meeting note, design decision, and customer feedback.",
    problem: "When team members go on vacation or leave, critical context is lost, forcing other workers to duplicate research and research files.",
    howAixentrixSolves: "Aixentrix structures historical conversations into a semantic vector database, allowing any team member to query the corporate brain.",
    features: [
      "Cross-platform query search returns relevant chats and notes.",
      "Provides automated onboarding packages for new hires.",
      "Maintains clean relationship graphs mapping project stakeholders."
    ],
    faqs: [
      { q: "What is a team Second Brain?", a: "A team Second Brain is a centralized, searchable repository of all historical company decisions, discussions, documents, and workflows." }
    ]
  },
  {
    name: "Company Memory",
    slug: "company-memory",
    title: "Permanent Company Memory & Context Graphs — Aixentrix",
    description: "Eliminate context loss. Aixentrix builds a permanent company memory graph by indexing internal communications and databases.",
    introduction: "Permanent company memory captures tribal knowledge, decision histories, and operational paths, ensuring it remains accessible forever.",
    problem: "Companies lose years of context when engineers, product leads, or operations staff exit, leading to communication breakdowns.",
    howAixentrixSolves: "Aixentrix runs background indexing sweeps to log client history, outstanding commitments, and decisions into a permanent context graph.",
    features: [
      "Zero-loss handover documents generated dynamically.",
      "Maps critical project timelines and pivot points.",
      "Preserves client interactions across chat and email."
    ],
    faqs: [
      { q: "How is company memory stored?", a: "It is stored in a private, encrypted PostgreSQL database using PGVector for semantic context correlation." }
    ]
  },
  {
    name: "Meeting Notes AI",
    slug: "meeting-notes-ai",
    title: "Meeting Notes AI & Action Item Automation — Aixentrix",
    description: "Convert transcript audio into structured task boards. Discover how Aixentrix automates agendas, schedules, and summaries.",
    introduction: "Meeting Notes AI converts meeting audio transcripts into structured action plans, calendar blocks, and auto-generated meeting minutes.",
    problem: "Teams spend hours in alignment syncs, yet action items are frequently forgotten, and stakeholders lack written summaries.",
    howAixentrixSolves: "Aixentrix integrates transcription engines with task databases, automatically creating cards, assigning owners, and syncing agendas.",
    features: [
      "Generates structured summaries and decision registers from transcripts.",
      "Auto-creates project tickets and schedules focus time.",
      "Pre-populates sync agendas based on calendar events."
    ],
    faqs: [
      { q: "Can Aixentrix join Google Meet or Zoom calls?", a: "Yes. It connects directly to calendar feeds to automatically transcribe and summarize audio syncs." }
    ]
  },
  {
    name: "AI Executive Assistant",
    slug: "ai-executive-assistant",
    title: "Proactive AI Executive Assistant for Founders — Aixentrix",
    description: "Delegate calendar scheduling, email drafting, and daily briefs to a proactive AI assistant designed for founders and operators.",
    introduction: "An AI Executive Assistant manages scheduling, drafts email replies, and compiles morning briefs so leaders can focus on deep work.",
    problem: "Founders spend up to 40% of their day on administrative work, sorting inbox threads and manually booking meetings.",
    howAixentrixSolves: "Aixentrix scans incoming calendar slots and email queues, drafting contextual responses and prioritizing urgent requests.",
    features: [
      "Compiles a personalized daily briefing every morning.",
      "Auto-drafts context-aware email replies.",
      "Negotiates meeting slots and resolves calendar conflicts."
    ],
    faqs: [
      { q: "How does the assistant know my context?", a: "It indexes your inbox, tasks, and calendars to write responses matching your writing style and schedule." }
    ]
  },
  {
    name: "Project Management AI",
    slug: "project-management-ai",
    title: "Project Management AI & Auto-Triage Boards — Aixentrix",
    description: "Eliminate manual ticket updates. Discover the first Project Management AI that updates boards from chat and email contexts.",
    introduction: "Project Management AI automates task creation, updates ticket statuses, and schedules resources based on team availability.",
    problem: "Traditional task managers require constant manual adjustments, quickly turning into outdated graveyards of stale tickets.",
    howAixentrixSolves: "Aixentrix tracks task completions by scanning git commits, linked document updates, and chat announcements.",
    features: [
      "Auto-triages task priorities from customer support queues.",
      "Schedules focus blocks on developer calendars automatically.",
      "Tracks timelines and project dependencies in real-time."
    ],
    faqs: [
      { q: "Does the AI create project tickets?", a: "Yes. You can describe a project milestone in plain English, and the AI will break it down into structured subtasks." }
    ]
  },
  {
    name: "Team Collaboration Software",
    slug: "team-collaboration-software",
    title: "AI-Native Team Collaboration & Chat Software — Aixentrix",
    description: "Bridge the gap between chat and execution. Aixentrix unifies real-time messaging, task boards, and wikis in one surface.",
    introduction: "Modern team collaboration software integrates real-time communications directly with databases, ensuring discussion leads to action.",
    problem: "Chat tools like Slack are isolated from documentation and task lists, leading to alignment drift and double work.",
    howAixentrixSolves: "Aixentrix unifies channels, direct messages, project boards, and folders under a single context-aware surface.",
    features: [
      "Converts channel discussions into task cards in one click.",
      "Shared document editors with integrated AI copilot builders.",
      "SSO-managed access controls for external guests."
    ],
    faqs: [
      { q: "Can external contractors join Aixentrix?", a: "Yes. You can invite external guest accounts and restrict their access using organization domains." }
    ]
  },
  {
    name: "Workflow Automation",
    slug: "workflow-automation-solution",
    title: "Enterprise Workflow Automation & Background Agents — Aixentrix",
    description: "Automate complex business processes, client onboarding, and employee handovers with proactive background agents.",
    introduction: "Workflow automation connects software triggers to AI actions, enabling hands-off operations for client tracking and team handovers.",
    problem: "Traditional triggers (like Zapier) only support basic data moves, failing when human judgment or semantic evaluation is needed.",
    howAixentrixSolves: "Aixentrix utilizes LLM agents that evaluate document contents, drafts complex emails, and routes tasks based on context.",
    features: [
      "Autocompiles employee handover packages.",
      "Triggers webhook actions in platforms like n8n.",
      "Automates client pipeline updates from email responses."
    ],
    faqs: [
      { q: "What integrations do you support?", a: "We support integrations with GitHub, Gmail, Outlook, Supabase, n8n, Slack, and major cloud identity providers." }
    ]
  },
  {
    name: "AI Documentation",
    slug: "ai-documentation",
    title: "AI Documentation & Autocompiled README Guides — Aixentrix",
    description: "Keep documentation updated. Aixentrix auto-writes wiki articles, release notes, and guides by parsing database and git changes.",
    introduction: "AI documentation systems keep process manuals, code guides, and FAQs updated automatically, eliminating manual wiki debt.",
    problem: "Product details and APIs change daily. Wikis are rarely updated, leading to outdated documentation and employee confusion.",
    howAixentrixSolves: "Aixentrix monitors system databases and git logs, auto-writing changes into standard markdown files.",
    features: [
      "Auto-generates technical README guides.",
      "Updates internal support FAQs from resolved customer tickets.",
      "Maintains clean markdown structures with version control."
    ],
    faqs: [
      { q: "Does the AI overwrite manual docs?", a: "No. The AI drafts documentation updates in a staging space, allowing team members to review and approve changes." }
    ]
  },
  {
    name: "Enterprise AI Assistant",
    slug: "enterprise-ai-assistant",
    title: "Enterprise AI Assistant with Context Retrieval — Aixentrix",
    description: "Access corporate knowledge instantly. Our enterprise assistant features secure context indexing and SOC 2 data isolation.",
    introduction: "An enterprise AI assistant provides team members with a secure interface to query company memory, documents, and communications.",
    problem: "Employees spend hours looking for files, customer data, or historical agreements across separate platform silos.",
    howAixentrixSolves: "Aixentrix indexes organization assets into a private context vector base, delivering answers and file links in seconds.",
    features: [
      "PostgreSQL RLS ensures users only access permitted data.",
      "Model contexts are isolated from public training cycles.",
      "Supports document uploads (PDFs, Markdown, logs)."
    ],
    faqs: [
      { q: "Is the assistant compliant with SOC 2?", a: "Yes. Our systems are built to meet SOC 2 Type II trust and security criteria." }
    ]
  },
  {
    name: "Business Operating System",
    slug: "business-operating-system",
    title: "The Proactive Business Operating System — Aixentrix",
    description: "Manage client pipelines, CRM, calendars, tasks, and documentation under a single, proactive corporate operating system.",
    introduction: "A business operating system unifies isolated platforms into a single database, keeping all operations synchronized.",
    problem: "Using separate apps for CRM, project management, and wiki leads to data duplication, billing confusion, and operational lag.",
    howAixentrixSolves: "Aixentrix unifies tasks, calendars, emails, CRM deal tracking, and wikis under one subscription and domain.",
    features: [
      "Integrated CRM that updates from customer emails.",
      "Proactive AI Chief of Staff handles administrative scheduling.",
      "SSO-managed directories simplify employee provisioning."
    ],
    faqs: [
      { q: "Can Aixentrix replace our CRM and project tools?", a: "Yes. It replaces isolated apps by unifying CRM, tasks, calendar, email, and docs in one interface." }
    ]
  },
  {
    name: "Organizational Intelligence",
    slug: "organizational-intelligence",
    title: "Organizational Intelligence & Context Mappings — Aixentrix",
    description: "Build an active context graph of your company. Discover how Aixentrix turns data silos into organizational intelligence.",
    introduction: "Organizational intelligence converts raw database logs and communications into structured knowledge graphs showing team priorities.",
    problem: "Managers lack visibility into actual team workflows, leading to project blockages and misallocated resources.",
    howAixentrixSolves: "Aixentrix analyzes communication patterns and task statuses to build active context graphs mapping project health.",
    features: [
      "Visualizes resource constraints and project blockages.",
      "Triggers notifications when key deliverables are delayed.",
      "Identifies knowledge leaders and experts within the team."
    ],
    faqs: [
      { q: "What is an organizational context graph?", a: "It is a dynamic map showing relationships between tasks, documents, chat threads, and responsible team members." }
    ]
  },
  {
    name: "Digital Workspace",
    slug: "digital-workspace",
    title: "The Clean, Minimalist Digital Workspace — Aixentrix",
    description: "Simplify your screen. Discover the minimalist digital workspace that consolidates your email, tasks, calendar, and wikis.",
    introduction: "A digital workspace unifies your daily work applications under a clean, high-performance interface optimized for focus.",
    problem: "Tabs overload and constant notifications drain mental energy, leading to decreased deep focus and task delays.",
    howAixentrixSolves: "Aixentrix features a paper-textured, minimalist interface that organizes files, inbox, tasks, and scheduling.",
    features: [
      "Optimized for sub-second load times and fast search.",
      "Keyboard-driven navigation shortcuts for power users.",
      "Customizable theme palettes (cream light, warm wash, dark)."
    ],
    faqs: [
      { q: "Does the workspace support keyboard shortcuts?", a: "Yes. The interface features extensive keyboard shortcuts to navigate, create tasks, and search without a mouse." }
    ]
  }
];
