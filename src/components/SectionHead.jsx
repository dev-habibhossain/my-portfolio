import { sections } from "@/data/nav";

// Renders the section eyebrow / title / sub for the home page. On standalone
// pages the PageHeader carries the title, so these are hidden (`bare`).
export default function SectionHead({ id, showTitle = true }) {
  const meta = sections[id];
  if (!meta) return null;
  return (
    <>
      <div className="tag-eyebrow">{meta.eyebrow}</div>
      {showTitle && <h2 className="section-title">{meta.title}</h2>}
      {meta.sub && <p className="section-sub">{meta.sub}</p>}
    </>
  );
}
