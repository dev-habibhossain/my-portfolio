# Build Prompt — Portfolio Site (Next.js, JavaScript)

> Copy everything below this line into your AI coding tool (Claude Code, Cursor, etc.) inside your existing Next.js + JavaScript project to scaffold the site.

---

I want you to build my personal portfolio site inside this Next.js (App Router, JavaScript — no TypeScript) project. Follow the spec below exactly. Reference files: `portfolio-PRD.md`, `design-system.md`, and `portfolio-preview.html` (the approved static reference — match its layout, spacing, and interactions).

## 1. Stack & Setup

- Next.js App Router, plain JavaScript (`.js` / `.jsx` only — never generate `.ts`/`.tsx`)
- Tailwind CSS for styling
- Fonts via `next/font/google`: **Instrument Sans** (weights 400/500/600/700) and **IBM Plex Mono** (weights 400/500)
- Deployed target: Vercel
- No external UI libraries needed — everything here is achievable with Tailwind + a small amount of custom CSS/JS

## 2. Folder Structure

Create exactly this structure:

```
/app
  layout.js
  page.js
  globals.css
/components
  Sidebar.jsx
  Hero.jsx
  SpecRow.jsx
  About.jsx
  Experience.jsx
  Skills.jsx
  ProjectsAccordion.jsx
  Contact.jsx
  ThemeToggle.jsx
/data
  profile.js
  experience.js
  skills.js
  projects.js
/public
  portrait-dark.jpg     (placeholder for now)
  portrait-light.jpg    (placeholder for now)
```

## 3. Data Files (fill with placeholder content matching portfolio-preview.html)

`data/profile.js`:
```js
export const profile = {
  name: "Ayaan Rahman",
  role: "Full-Stack Engineer",
  location: "Dhaka, BD",
  tagline: "Building interfaces that feel considered, not assembled.",
  bio: "I'm a full-stack engineer who cares equally about the system underneath and the feeling on the surface...",
  email: "hello@yourname.com",
  socials: { github: "#", linkedin: "#" },
  stats: [
    { num: "6+", label: "Years experience" },
    { num: "24", label: "Projects shipped" },
    { num: "95+", label: "Avg. Lighthouse" }
  ]
};
```

`data/experience.js`, `data/skills.js`, `data/projects.js` — structure each as an exported array of objects, matching the content already shown in `portfolio-preview.html` (roles/companies/dates/descriptions, skill categories/tags, project titles/descriptions/tech tags). Every component must read from these files — **no hardcoded text inside components**.

## 4. Design Tokens (Tailwind config or CSS variables — pick one, be consistent)

**Light theme**
- `--bg: #FCFCFA` `--text: #15161A` `--muted: #6B6E76`
- `--accent: #2E4374` `--accent-soft: rgba(46,67,116,0.08)`
- `--hairline: #E6E5E0` `--avatar-bg: #101114`

**Dark theme**
- `--bg: #111114` `--text: #F2F1ED` `--muted: #8D8D94`
- `--accent: #8FADDD` `--accent-soft: rgba(143,173,221,0.12)`
- `--hairline: #242429` `--avatar-bg: #050505`

Toggle theme via a `data-theme` attribute on `<html>`, controlled by React state (default to the user's `prefers-color-scheme`). Do not use `localStorage`.

## 5. Layout to Build

Match `portfolio-preview.html` structure exactly:

1. **Sidebar** (fixed, 250px, full height, right hairline border): avatar (34px circle), name, role, numbered vertical nav (00 Intro, 01 About, 02 Work, 03 Skills, 04 Projects, 05 Contact), live local-time clock, theme toggle button, social links at bottom.
2. **Hero**: kicker line, large H1 (from `profile.tagline`), subtext (from `profile.bio`), CTA link to `#projects`.
3. **Spec-sheet rows** for About, Work (Experience), Skills, Projects — each a two-column row: sticky label on the left (`position: sticky; top: 3rem`), content on the right, hairline border-top between rows.
4. **Projects**: render as an accordion — only one item expanded at a time, `+` icon rotates 45° to become `×` on open.
5. **Contact**: full-width closing statement + email `mailto:` link + footer.
6. Below 980px: sidebar collapses into a simple top bar; spec-rows go single-column; sticky labels un-stick.

## 6. Theme-Based Portrait Swap (see PRD Section 6)

- `Sidebar.jsx` renders `<Image>` with `src` switching between `/portrait-dark.jpg` and `/portrait-light.jpg` based on current theme
- Both images pre-loaded (use `priority` on the `Image` component) so the swap is instant, no flash
- Same circular crop (34px, `rounded-full object-cover`) for both

## 7. Interactions

- Scroll-reveal fade-up on each section entering viewport (`IntersectionObserver`), skipped entirely if `prefers-reduced-motion` is set
- Sidebar nav item highlights based on which section is currently in view
- Projects accordion: click header to expand/collapse, closing any other open item
- All transitions ≤ 0.3s, no animation on `width`/`top`/`left` — only `transform`/`opacity`/`max-height`

## 8. Non-Functional Requirements

- Target Lighthouse ≥ 95 across Performance / Accessibility / SEO / Best Practices
- WCAG AA contrast in both themes
- No content hardcoded outside `/data`
- No TypeScript anywhere in the codebase

## 9. Build Order

1. Static layout and components with placeholder data, no theme logic
2. Wire up theme toggle + color tokens
3. Add theme-based portrait swap
4. Connect all components to `/data` files
5. Responsive pass (sidebar → top bar breakpoint)
6. Accessibility pass (focus states, reduced-motion, contrast)
7. Deploy to Vercel

---

When you're done, the site should look and behave like `portfolio-preview.html`, but as real, editable Next.js components pulling from `/data`.
