// Header navigation + per-section metadata (eyebrow / title / sub), shared by
// the header links, the home sections, and the standalone pages.
// `href` is the dedicated route; `anchor` is the in-page hash on the home page.
export const nav = [
  { label: "About", id: "about", anchor: "#about", href: "/about" },
  { label: "Skills", id: "skills", anchor: "#skills", href: "/skills" },
  { label: "Projects", id: "projects", anchor: "#projects", href: "/projects" },
  { label: "Experience", id: "experience", anchor: "#experience", href: "/work" },
  { label: "Reviews", id: "reviews", anchor: "#reviews", href: null },
  { label: "Contact", id: "contact", anchor: "#contact", href: "/contact" },
];

// Section eyebrow/title/sub copy — matches the "vX.Y — section" motif from the
// reference design. Components read from here so pages and home stay in sync.
export const sections = {
  about: {
    eyebrow: "v1.0 — about",
    title: "A bit more about me",
    sub: "The story behind the stack.",
  },
  skills: {
    eyebrow: "v1.1 — skills",
    title: "Tools I reach for",
    sub: "Grouped by how I actually use them, not how long the list looks.",
  },
  projects: {
    eyebrow: "v1.2 — projects",
    title: "Things I've built",
    sub: "A few things I'm proud of — one line on the problem, one on my role.",
  },
  experience: {
    eyebrow: "v1.3 — experience",
    title: "Where I've worked",
    sub: "Most recent first.",
  },
  reviews: {
    eyebrow: "v1.4 — reviews",
    title: "Kind words",
    sub: "What people I've worked with have said.",
  },
  contact: {
    eyebrow: "v1.5 — contact",
    title: "Let's talk.",
    sub: "Looking for a full-stack developer? I'd like to hear about it.",
  },
};
