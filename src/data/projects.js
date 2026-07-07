export const projects = [
  {
    slug: "ledgerline",
    title: "Ledgerline",
    year: "2025",
    description:
      "A finance dashboard for freelancers to track invoices and cash flow in real time.",
    overview:
      "Ledgerline gives independent workers a single, calm view of their money — invoices, expenses, and projected cash flow — without the spreadsheet gymnastics. The challenge was rendering live financial data fast enough to feel instant while keeping the interface quiet.",
    highlights: [
      "Real-time sync built on Supabase subscriptions",
      "Custom charting layer on Recharts, tuned for sub-16ms interaction",
      "Median dashboard load under 900ms on 4G",
    ],
    tags: ["Next.js", "Supabase", "Recharts"],
    role: "Lead Engineer",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    slug: "fieldnote",
    title: "Fieldnote",
    year: "2024",
    description:
      "A minimalist writing tool for researchers, built around fast local-first sync.",
    overview:
      "Fieldnote is a distraction-free writing environment for academics. Everything is local-first: notes are instantly available offline and sync in the background, so the writing surface never blocks on the network.",
    highlights: [
      "Local-first architecture with IndexedDB + conflict-free merge",
      "Installable PWA with full offline support",
      "Keyboard-driven interface with zero layout shift",
    ],
    tags: ["React", "IndexedDB", "PWA"],
    role: "Full-Stack Engineer",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    slug: "northline-studio",
    title: "Northline Studio",
    year: "2023",
    description:
      "Marketing site and CMS-driven blog for a boutique architecture practice.",
    overview:
      "A restrained, typography-led marketing site for an architecture studio, backed by a Sanity CMS so the team can publish case studies without touching code. Motion is used sparingly to let the photography lead.",
    highlights: [
      "Sanity-backed content model editable by non-developers",
      "Framer Motion scroll choreography kept under budget",
      "Perfect Lighthouse SEO and accessibility scores",
    ],
    tags: ["Next.js", "Sanity", "Framer Motion"],
    role: "Design Engineer",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    slug: "trailmark",
    title: "Trailmark",
    year: "2022",
    description:
      "A route-planning tool for long-distance hikers with offline map caching.",
    overview:
      "Trailmark lets long-distance hikers plan routes and carry them offline into areas with no signal. The hard part was caching map tiles and elevation data efficiently enough to survive a multi-day trip on a phone battery.",
    highlights: [
      "Offline Mapbox tile caching via Service Workers",
      "Elevation-aware route planning",
      "Battery-conscious background sync",
    ],
    tags: ["Mapbox", "TypeScript", "Service Workers"],
    role: "Frontend Engineer",
    liveUrl: "#",
    githubUrl: "#",
  },
];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}
