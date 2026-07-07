import Link from "next/link";

// Small header used at the top of each dedicated navbar page: mono kicker with
// the section index + a link back to the single-page index.
export default function PageHeader({ idx, title }) {
  return (
    <section className="page-intro fade-up in">
      <Link href="/" className="back mono">
        ← Index
      </Link>
      <h1 style={{ fontSize: "2.2rem", fontWeight: 600, marginTop: "1rem", letterSpacing: "-0.01em" }}>
        <span className="mono" style={{ color: "var(--accent)", fontSize: "0.8rem", marginRight: "0.6rem" }}>
          {idx}
        </span>
        {title}
      </h1>
    </section>
  );
}
