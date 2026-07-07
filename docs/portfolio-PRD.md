# Product Requirements Document (PRD)
## Personal Portfolio Website

| | |
|---|---|
| **Owner** | Ayaan Rahman |
| **Status** | Approved for build |
| **Version** | 1.0 |
| **Stack** | Next.js (App Router), JavaScript |

---

## 1. Purpose

Build a small, fast, professional portfolio site that showcases role, experience, skills, and projects — impressive enough to hold a visitor's attention in the first few seconds, and simple enough to update anytime without touching code.

## 2. Goals

- **Fast** — top-tier Lighthouse scores, sub-1s perceived load
- **Distinctive** — a minimal, whitespace-driven design (approved: sidebar index + spec-sheet layout), not a generic template
- **Easy to maintain** — all content editable from one data folder
- **Two themes** — light and dark, each using a different portrait image

## 3. Target Audience

Recruiters, hiring managers, and potential clients evaluating the owner's work in under a minute.

## 4. Scope

### In scope
- Single-page site (`/`) with anchor-based sections: Intro, About, Work, Skills, Projects, Contact
- Light/dark theme toggle
- Theme-based portrait image swap (see Section 6)
- Data-driven content via local files
- Fully responsive (mobile → desktop)

### Out of scope (v1)
- Admin dashboard / CMS UI — content is edited directly in data files
- Blog or multi-page case studies — may be added later as `/work/[slug]`
- User accounts, comments, or backend database

## 5. Functional Requirements

| ID | Requirement |
|---|---|
| FR-1 | Site renders one scrollable page with a fixed left sidebar (avatar, name, role, numbered nav, clock, theme toggle) |
| FR-2 | Visitor can toggle between light and dark theme; choice persists only for the current session (no localStorage required) |
| FR-3 | All text content (name, role, bio, experience, skills, projects, contact email) is sourced from `/data/*.js` files — no hardcoded content in components |
| FR-4 | Projects section renders as an accordion; only one project expanded at a time |
| FR-5 | Sidebar nav highlights the section currently in view while scrolling |
| FR-6 | Contact section provides a direct `mailto:` link |
| FR-7 | Site is usable and legible with JavaScript-driven animations disabled (`prefers-reduced-motion`) |

## 6. Feature Spec: Theme-Based Portrait Swap

**Requirement:** the portrait image shown in the sidebar changes depending on the active theme — one photo for dark mode, a different photo for light mode.

| Theme | Image | Intent |
|---|---|---|
| Dark | `portrait-dark.jpg` | Your black-background studio portrait — blends naturally into the dark sidebar |
| Light | `portrait-light.jpg` | A version with better contrast against a pale background (e.g. brighter exposure, or a shot with more separation from a light backdrop) |

**Behavior:**
- Image swaps immediately when the theme toggle is clicked — no page reload
- Both images are pre-loaded on initial page load to avoid a flash/delay on toggle
- Both images use the same crop and framing (head-and-shoulders, centered) so the swap feels seamless, not jarring

**Implementation (Next.js, JavaScript):**
```jsx
'use client';
import Image from 'next/image';
import { useTheme } from '@/components/ThemeProvider'; // your theme context

export function Avatar() {
  const { theme } = useTheme(); // 'light' or 'dark'
  const src = theme === 'dark' ? '/portrait-dark.jpg' : '/portrait-light.jpg';

  return (
    <div className="avatar">
      <Image src={src} alt="Ayaan Rahman" width={34} height={34}
             className="rounded-full object-cover" priority />
    </div>
  );
}
```

**Asset checklist:**
- [ ] Export both images at the same square crop, min 400×400px source
- [ ] Compress each to under ~30KB (WebP preferred)
- [ ] Confirm both read clearly at the final 34px display size

## 7. Non-Functional Requirements

- Lighthouse: Performance / Accessibility / SEO / Best Practices ≥ 95
- WCAG AA color contrast in both themes
- Fully responsive: sidebar collapses to a top bar ≤ 980px
- No third-party analytics/scripts beyond optional Vercel Analytics

## 8. Design Reference

Full color tokens, typography, layout diagram, and component list are defined in `design-system.md` (already approved). This PRD does not repeat those specs — build against that file.

## 9. Tech Stack

- Next.js 15 (App Router) + Tailwind CSS
- Language: JavaScript (`.js` / `.jsx`) — no TypeScript
- Fonts: Instrument Sans + IBM Plex Mono (`next/font`)
- Hosting: Vercel
- Content: local JavaScript data files (`/data`)

## 10. Milestones

| Phase | Deliverable |
|---|---|
| 1 | Static layout: sidebar + all sections, no theme logic |
| 2 | Theme toggle + color tokens wired in |
| 3 | Theme-based image swap (Section 6) |
| 4 | Data-file wiring for all content |
| 5 | Responsive pass + accessibility check |
| 6 | Deploy to Vercel |

## 11. Acceptance Criteria

- [ ] All FR-1 through FR-7 verified
- [ ] Portrait correctly swaps on theme toggle with no flash or layout shift
- [ ] Lighthouse scores meet targets on production build
- [ ] Content fully editable via `/data` files with zero component changes
- [ ] Reviewed on mobile, tablet, and desktop breakpoints
