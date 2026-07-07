import Link from "next/link";
import { sections } from "@/data/nav";

// Header shown at the top of each dedicated page: an eyebrow tag, a big title,
// a back-to-home link, and an optional sub. Pulls copy from `sections` when an
// `id` is given, but explicit props win.
export default function PageHeader({ id, title, sub, eyebrow }) {
  const meta = id ? sections[id] : null;
  const finalEyebrow = eyebrow ?? meta?.eyebrow;
  const finalTitle = title ?? meta?.title;
  const finalSub = sub ?? meta?.sub;

  return (
    <section className="wrap page-intro">
      <Link href="/" className="back">
        ← Back to home
      </Link>
      {finalEyebrow && (
        <div className="tag-eyebrow" style={{ marginTop: "14px" }}>
          {finalEyebrow}
        </div>
      )}
      <h1>{finalTitle}</h1>
      {finalSub && <p className="page-sub">{finalSub}</p>}
    </section>
  );
}
