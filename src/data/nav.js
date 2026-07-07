// Section index shared by the sidebar nav, scroll-spy, and the standalone pages.
// `anchor` is the in-page hash on the home page; `href` is the dedicated route
// (null = home-only section, no standalone page).
export const nav = [
  { idx: "00", label: "Intro", id: "hero", anchor: "#hero", href: "/" },
  { idx: "01", label: "About", id: "about", anchor: "#about", href: "/about" },
  { idx: "02", label: "Work", id: "experience", anchor: "#experience", href: "/work" },
  { idx: "03", label: "Skills", id: "skills", anchor: "#skills", href: "/skills" },
  { idx: "04", label: "Projects", id: "projects", anchor: "#projects", href: "/projects" },
  { idx: "05", label: "Reviews", id: "reviews", anchor: "#reviews", href: null },
  { idx: "06", label: "Contact", id: "contact", anchor: "#contact", href: "/contact" },
];

// Content sections that carry an "NN / total" counter (everything except Intro).
const counted = nav.filter((n) => n.id !== "hero");
export const sectionCount = counted.length;

// Map of section id -> "NN / total" label, so components stay in sync if nav changes.
export const counts = Object.fromEntries(
  counted.map((n, i) => [
    n.id,
    `${String(i + 1).padStart(2, "0")} / ${String(sectionCount).padStart(2, "0")}`,
  ])
);
