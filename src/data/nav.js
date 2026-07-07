// Section index shared by the sidebar nav, scroll-spy, and the standalone pages.
// `anchor` is the in-page hash on the home page; `href` is the dedicated route.
export const nav = [
  { idx: "00", label: "Intro", id: "hero", anchor: "#hero", href: "/" },
  { idx: "01", label: "About", id: "about", anchor: "#about", href: "/about" },
  { idx: "02", label: "Work", id: "experience", anchor: "#experience", href: "/work" },
  { idx: "03", label: "Skills", id: "skills", anchor: "#skills", href: "/skills" },
  { idx: "04", label: "Projects", id: "projects", anchor: "#projects", href: "/projects" },
  { idx: "05", label: "Contact", id: "contact", anchor: "#contact", href: "/contact" },
];

// Rows that render as spec-sheet sections (excludes Intro/Contact which are full-width).
export const sectionCount = nav.filter((n) => n.idx !== "00" && n.idx !== "05").length;
