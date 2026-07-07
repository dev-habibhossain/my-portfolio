# Portfolio Website — Requirements Analysis
**Stack:** Next.js | **Goal:** Small, fast, visually impressive, data-driven portfolio

---

## 1. Project Vision

A compact, high-impact personal portfolio that:
- Loads instantly (sub-1s perceived load, top-tier Lighthouse scores)
- Feels modern and premium — not a generic template
- Never bores the visitor — every scroll/section has a reason to exist
- Pulls all content (name, role, experience, projects, skills, contact) from **one central data source**, so you can update it without touching layout code

**Guiding principle:** Small ≠ boring. Small = focused. Every section earns its place.

---

## 2. Design Style Options

Pick one direction (or blend two). All are achievable with Tailwind CSS + Framer Motion in Next.js.

### Option A — "Bento Grid" (Recommended for a strong first impression)
- Asymmetric grid of cards (like Apple/Linear marketing pages)
- Each card = one piece of info (role, top skill, featured project, GitHub stat, contact)
- Cards subtly animate on hover/scroll
- Feels modern, dense with info, but organized

### Option B — Minimal Brutalist
- Huge bold typography, black/white with one accent color
- Lots of whitespace, sharp edges, no shadows
- Feels confident and editorial (great if you want a "designer" vibe)

### Option C — Dark Mode + Neon Accent (Developer-focused)
- Dark background (#0a0a0a), one glowing accent (electric blue/green/purple)
- Monospace touches for headings or code snippets
- Great fit for a developer/engineer portfolio

### Option D — Glassmorphism / Soft Depth
- Frosted glass cards, soft gradients, subtle blur
- Feels premium and "designed," slightly more decorative

### Option E — Scroll-Driven Story (Agency-style)
- Full-screen sections, each revealed with scroll-triggered animation
- Cursor-follow effects, magnetic buttons, smooth scroll (Lenis/Framer)
- Highest "wow factor," but needs the most performance discipline

**Recommendation:** Combine **A (Bento layout for structure)** + **C (dark theme)** + light touches of **E (scroll reveals, not full-screen sections)**. This gives a modern, dense, fast-feeling site without becoming a heavy animation showcase.

---

## 3. Site Structure — How Many Pages?

**Recommendation: 1 primary page + 1 optional secondary page = 2 pages total.**

| Page | Purpose | Necessary? |
|---|---|---|
| `/` (Home) | Hero, About, Skills, Experience, Projects (preview), Contact — all as sections on one scrollable page | ✅ Required |
| `/projects/[slug]` or `/work` | Optional deep-dive page per project (case study style) — only if projects need detailed write-ups | ⚙️ Optional |
| `/resume` or resume PDF link | Downloadable CV | ⚙️ Optional (can just be a button, no page needed) |

**Why one page?**
- Recruiters/visitors spend ~10–30 seconds. A single scrollable page with anchor navigation (`#about`, `#projects`, `#contact`) converts better than forcing clicks across multiple pages.
- Fewer pages = fewer route loads = faster perceived performance.
- If a project truly needs a full case study, use dynamic routes (`/work/[slug]`) generated from your data file — still "data-driven," not extra manual pages.

**Avoid:** separate `/about`, `/skills`, `/contact` as different pages. It fragments a small portfolio and adds unnecessary navigation friction.

---

## 4. Dashboard — Is It Necessary?

**Short answer: No, skip it for v1.**

A dashboard/admin panel means:
- Authentication, a database, an API layer — all extra moving parts
- Slower deploys, more attack surface, more maintenance
- Overkill for content that changes a few times a month

**Better alternative (what you asked for — "change data anytime"):**
Use a **single typed data file** as your CMS:

```
/data/
  profile.ts       // name, role, bio, socials
  experience.ts     // work history array
  projects.ts       // project objects (title, desc, stack, links, image)
  skills.ts         // skill categories
```

You edit this file, push to GitHub → Vercel auto-redeploys in ~30 seconds. That's your "dashboard," without the overhead.

**When a dashboard WOULD make sense:**
- If someone *other than you* needs to edit content (a client, a team)
- If you update content daily/weekly and don't want to touch code at all

If you want that later, the upgrade path is a headless CMS (Sanity, Notion-as-CMS, or Contentful free tier) — not a custom-built dashboard. This keeps the frontend fast and separates content from code. **Recommendation: revisit this only if the plain data-file approach becomes annoying in practice.**

---

## 5. Data-Driven Architecture

```js
// data/profile.js
export const profile = {
  name: "Your Name",
  role: "Full-Stack Developer",
  tagline: "Building fast, thoughtful web experiences.",
  bio: "...",
  location: "Chittagong, Bangladesh",
  email: "you@example.com",
  socials: { github: "", linkedin: "", twitter: "" },
};

// data/experience.js
export const experience = [
  {
    company: "Company Name",
    role: "Position",
    period: "2024 — Present",
    description: "...",
    tech: ["Next.js", "TypeScript"],
  },
];

// data/projects.js
export const projects = [
  {
    slug: "project-one",
    title: "Project One",
    description: "Short punchy description.",
    image: "/projects/one.png",
    tags: ["Next.js", "Tailwind", "Supabase"],
    liveUrl: "",
    githubUrl: "",
    featured: true,
  },
];
```

All components import from `/data`, never hardcode content. This satisfies your requirement: **update role, experience, or projects anytime by editing one file — zero layout changes needed.**

---

## 6. Performance Requirements ("Superfast")

To genuinely feel superfast:

| Area | Requirement |
|---|---|
| **Rendering** | Static Site Generation (SSG) via Next.js App Router — no unnecessary client-side fetching |
| **Images** | `next/image` everywhere, WebP/AVIF, proper `sizes`, lazy-load below the fold |
| **Fonts** | `next/font` (self-hosted, zero layout shift), max 2 font families |
| **JS bundle** | Avoid heavy animation libraries unless needed; prefer CSS transitions + light Framer Motion only where it matters |
| **Hosting** | Vercel (built for Next.js, edge caching, instant deploys) |
| **Lighthouse targets** | Performance ≥ 95, Accessibility ≥ 95, SEO ≥ 95, Best Practices ≥ 95 |
| **Animations** | GPU-accelerated only (`transform`, `opacity`) — never animate `width`/`top`/`left` |
| **Third-party scripts** | Zero unless essential (skip heavy analytics widgets, chat bubbles, etc.) |

---

## 7. Recommended Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion (used sparingly — scroll-reveals, hover states only)
- **Icons:** Lucide React
- **Fonts:** Self-hosted via `next/font` (e.g., Geist or Inter + one display font)
- **Deployment:** Vercel
- **Content:** Local JavaScript data files (see Section 5)
- **Contact form:** A simple API route + Resend/EmailJS (no backend database needed)
- **Analytics (optional, lightweight):** Vercel Analytics (no extra JS cost)

---

## 8. Page Sections (for the single-page layout)

1. **Hero** — Name, role, one-line tagline, CTA buttons (View Work / Contact), subtle animated background or gradient
2. **About** — Short bio, 2–3 highlight stats (years experience, projects shipped, technologies)
3. **Skills** — Grouped by category (Frontend / Backend / Tools), icon-based, not a boring list
4. **Experience** — Timeline or stacked cards, pulled from `experience.ts`
5. **Projects** — Bento-style grid, top 3–6 featured, each links to live demo/GitHub or a case-study page
6. **Contact** — Simple form + direct email/socials, no clutter

Keep it to these 6 sections. Anything more risks the "boring/bloated" feeling you want to avoid.

---

## 9. Non-Functional Requirements

- Fully responsive (mobile-first, test at 375px, 768px, 1440px)
- Dark mode by default (with optional light toggle if desired)
- WCAG AA color contrast minimum
- SEO: proper meta tags, Open Graph image, sitemap.xml, robots.txt
- Favicon + PWA-ready manifest (optional nice-to-have)

---

## 10. Suggested Folder Structure

```
/app
  layout.js
  page.js              // home page, imports all section components
  /work/[slug]/page.js // optional project case-study page
/components
  Hero.jsx
  About.jsx
  Skills.jsx
  Experience.jsx
  Projects.jsx
  Contact.jsx
  Navbar.jsx
/data
  profile.js
  experience.js
  projects.js
  skills.js
/public
  /projects
```

---

## 11. Acceptance Criteria (Definition of "Done")

- [ ] Site loads in under 1s on 4G (Lighthouse Performance ≥ 95)
- [ ] All content editable from `/data` files only — no hardcoded text in components
- [ ] Fully responsive across mobile/tablet/desktop
- [ ] Smooth scroll navigation between sections
- [ ] Dark theme with one clear accent color
- [ ] No dashboard/database dependency for v1
- [ ] Deployed on Vercel with custom domain (if available)

---

## 12. Open Decisions for You

- Which style direction (A–E) do you want to commit to?
- Do you want a light/dark toggle, or dark-only?
- Do any projects need a full case-study page, or are cards + external links enough?
- Do you already have a logo/personal brand color, or should that be designed too?
