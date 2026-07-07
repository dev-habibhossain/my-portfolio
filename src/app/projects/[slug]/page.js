import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/data/projects";
import { profile } from "@/data/profile";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${profile.name}`,
    description: project.description,
  };
}

export default function ProjectPage({ params }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  return (
    <>
      <section className="page-intro fade-up in">
        <Link href="/projects" className="back mono">
          ← Projects
        </Link>
        <h1
          style={{
            fontSize: "2.6rem",
            fontWeight: 600,
            marginTop: "1rem",
            letterSpacing: "-0.02em",
          }}
        >
          {project.title}
        </h1>
        <p
          className="mono"
          style={{
            color: "var(--muted)",
            fontSize: "0.8rem",
            marginTop: "0.6rem",
          }}
        >
          {project.role} · {project.year}
        </p>
      </section>

      <section className="row page-row fade-up">
        <div className="row-label">Overview</div>
        <div className="about-body">
          <p>{project.overview}</p>

          <div className="tags" style={{ marginTop: "1.25rem" }}>
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <h3 style={{ margin: "2rem 0 0.9rem", fontSize: "0.95rem" }}>
            Highlights
          </h3>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "0.55rem",
            }}
          >
            {project.highlights.map((h) => (
              <li
                key={h}
                style={{ color: "var(--muted)", fontSize: "0.95rem" }}
              >
                — {h}
              </li>
            ))}
          </ul>

          <div className="btn-row">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live site →
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                className="btn btn-ghost"
                target="_blank"
                rel="noreferrer"
              >
                Source
              </a>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
