// Reusable spec-sheet row: sticky mono label on the left, content on the right.
// `count` renders the "NN / NN" index beneath the label (optional).
export default function SpecRow({ id, label, count, className = "", children }) {
  return (
    <section id={id} className={`row fade-up ${className}`.trim()}>
      <div className="row-label">
        {label}
        {count ? <span className="count">{count}</span> : null}
      </div>
      <div>{children}</div>
    </section>
  );
}
