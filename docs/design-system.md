# Portfolio Design System — Final Spec
**Selected direction:** Minimal / Index Sidebar / Spec-Sheet Pattern
**Reference build:** `portfolio-preview.html`

---

## 1. Concept Summary

A quiet, confident, whitespace-driven personal site. A fixed left sidebar carries your identity (small portrait, name, role) and a numbered index nav. Content unfolds as a series of "spec-sheet" rows — a sticky label on the left, content on the right — closing with a full-width contact statement. One accent color, one interaction moment (the projects accordion), everything else restrained.

---

## 2. Color Tokens

### Light theme (default)
| Token | Hex / Value | Used for |
|---|---|---|
| `--bg` | `#FCFCFA` | Page background |
| `--text` | `#15161A` | Primary text, headings |
| `--muted` | `#6B6E76` | Body copy, secondary text, dates |
| `--accent` | `#2E4374` | Links, active states, numbers, hover borders |
| `--accent-soft` | `rgba(46,67,116,0.08)` | Tag backgrounds, selection highlight |
| `--hairline` | `#E6E5E0` | Borders, dividers, inactive nav rail |
| `--avatar-bg` | `#101114` | Fallback behind portrait if image has transparency |

### Dark theme
| Token | Hex / Value | Used for |
|---|---|---|
| `--bg` | `#111114` | Page background |
| `--text` | `#F2F1ED` | Primary text, headings |
| `--muted` | `#8D8D94` | Body copy, secondary text, dates |
| `--accent` | `#8FADDD` | Links, active states, numbers, hover borders |
| `--accent-soft` | `rgba(143,173,221,0.12)` | Tag backgrounds, selection highlight |
| `--hairline` | `#242429` | Borders, dividers, inactive nav rail |
| `--avatar-bg` | `#050505` | Fallback behind portrait if image has transparency |

**Rule:** exactly one accent color per theme. Never introduce a second accent (no green "success" color, no red "error" color as decoration) — if a status color is ever needed later (e.g. a form error), keep it purely functional and out of the visual system.

---

## 3. Typography

| Role | Typeface | Weight(s) | Used for |
|---|---|---|---|
| Display / body | **Instrument Sans** | 400, 500, 600, 700 | Headings, nav, body copy — one family throughout |
| Meta / labels / data | **IBM Plex Mono** | 400, 500 | Section index numbers, dates, tags, clock, kicker text |

Google Fonts import:
```html
<link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
```

**Type scale (desktop):**
- Hero H1: `3rem` / weight 600 / letter-spacing `-0.02em`
- Section H2 (contact close): `2.2rem` / weight 600
- Row title (project, role): `1.05–1.15rem` / weight 600
- Body: `1rem`, muted color
- Meta/mono labels: `0.7–0.8rem`, uppercase, letter-spacing `0.1em`

---

## 4. Layout Pattern

```
┌───────────┬──────────────────────────────────────────┐
│  Sidebar   │  Hero (full width statement)             │
│  (fixed,   ├──────────────────────────────────────────┤
│  250px)    │  Label │ About content + stats            │
│            ├──────────────────────────────────────────┤
│  avatar    │  Label │ Experience rows                  │
│  name/role │ ┈┈┈┈┈┈ sticky label pins while section   │
│            │        scrolls, docs-site style ┈┈┈┈┈┈   │
│  00 Intro  ├──────────────────────────────────────────┤
│  01 About  │  Label │ Skills columns                   │
│  02 Work   ├──────────────────────────────────────────┤
│  03 Skills │  Label │ Projects — accordion (one open)  │
│  04 Proj.  ├──────────────────────────────────────────┤
│  05 Contact│  Full-width contact statement + footer    │
│            │                                            │
│  clock     │                                            │
│  toggle    │                                            │
└───────────┴──────────────────────────────────────────┘
```

- Sidebar: fixed, `250px`, full viewport height, right hairline border.
- Content: `margin-left: 250px`, rows padded `4.5rem 5rem`, hairline border-top between rows.
- Row pattern: `grid-template-columns: 190px 1fr`, label `position: sticky; top: 3rem`.
- Below `980px`: sidebar collapses into a simple top bar, spec-rows go single-column, label un-stickies.

---

## 5. Signature Interaction

**Projects accordion** — one item open at a time, `+` rotates to `×` (45°) on open, `max-height` transition for expand/collapse. This is the one deliberate "moment" in the design. Everything else (nav hover, theme toggle, scroll reveal) stays quiet and fast — no more than one memorable interaction per page, per the restraint principle.

Supporting micro-interactions (all subtle, all ≤ 0.3s):
- Fade-up on scroll for each section (`IntersectionObserver`, 16px rise, respects `prefers-reduced-motion`)
- Active nav item gets a left hairline → accent border and accent-colored index number
- Live local-time clock in sidebar footer, updates every 30s

---

## 6. Your Portrait — How and Where It's Used

Your photo (black background, dark suit) is used **once, small, in the sidebar** — not as a hero image. This was a deliberate choice from your feedback: the portrait establishes identity without becoming the visual centerpiece.

**Specs:**
- Container: `34px × 34px` circle, `border-radius: 50%`
- Crop: tight head-and-shoulders, centered, matching the circular mask
- `object-fit: cover` so the black background fills the circle cleanly — no visible edges, since your photo's black background will blend naturally into both the light and dark theme's dark fallback (`--avatar-bg`)
- No border needed in dark theme (blends into the sidebar); in light theme, keep the existing 1px hairline ring so the dark circle doesn't float awkwardly on the pale background

**Implementation (replace the placeholder div):**
```html
<div class="avatar">
  <img
    src="/portrait.jpg"
    alt="Ayaan Rahman"
    style="width:100%; height:100%; border-radius:50%; object-fit:cover;"
  />
</div>
```

**Image prep checklist before you drop it in:**
- [ ] Export a square crop (at least 200×200px source, ideally 400×400px for retina) — you'll size it down to 34px, so start bigger, not smaller
- [ ] Center your face in the square so the circular mask doesn't cut off your chin or forehead
- [ ] Compress to WebP or optimized JPEG (this image loads on every page view — keep it under ~30KB)
- [ ] If you ever add a larger appearance of the same portrait elsewhere (e.g. an Open Graph/social share image), use a wider crop of the same shot so it reads as one consistent identity across the site and when shared as a link preview

**In Next.js (JavaScript)**, use `next/image` instead of a plain `<img>` for automatic optimization:
```jsx
import Image from 'next/image';

export default function Avatar() {
  return (
    <div className="avatar">
      <Image src="/portrait.jpg" alt="Ayaan Rahman" width={34} height={34} className="rounded-full object-cover" />
    </div>
  );
}
```

---

## 7. Component Inventory (for the Next.js build)

| Component | Notes |
|---|---|
| `Sidebar.jsx` | Avatar, name, role, nav index, clock, theme toggle, socials |
| `Hero.jsx` | Kicker, H1, subtext, CTA link |
| `SpecRow.jsx` | Reusable wrapper: sticky label + content slot, used by About / Work / Skills / Projects |
| `About.jsx` | Bio paragraph + stat row |
| `Experience.jsx` | List of role entries (from `data/experience.js`) |
| `Skills.jsx` | Grouped skill columns (from `data/skills.js`) |
| `ProjectsAccordion.jsx` | Expand/collapse list (from `data/projects.js`) |
| `Contact.jsx` | Closing statement + email + footer |
| `ThemeToggle.jsx` | Light/dark switch, no localStorage — use React state + `prefers-color-scheme` as initial default |

All content still pulls from the `/data` files defined in the earlier requirements doc — this design system only governs presentation, not content structure. Project uses plain JavaScript (`.js` / `.jsx`), not TypeScript — no type annotations, interfaces, or `.ts`/`.tsx` files anywhere in the build.

---

## 8. Acceptance Checklist

- [ ] Colors match tokens exactly in both themes — no ad-hoc hex values in components
- [ ] Only Instrument Sans + IBM Plex Mono are loaded — no third typeface sneaks in
- [ ] Sidebar stays fixed on desktop, collapses to top bar ≤ 980px
- [ ] Sticky row labels behave correctly on scroll (pin, then release at section end)
- [ ] Only the projects accordion has an "expand" interaction — no other section mimics it
- [ ] Portrait renders as a clean 34px circle in both themes, no visible seams
- [ ] Keyboard focus visible on nav links, theme toggle, and accordion headers
- [ ] `prefers-reduced-motion` disables fade/scroll animations
