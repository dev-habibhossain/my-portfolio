import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/data/projects";
import { profile } from "@/data/profile";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${profile.name}`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <section className="wrap page-intro reveal in">
        <Link href="/projects" className="back">
          ← All projects
        </Link>
        <div className="tag-eyebrow" style={{ marginTop: "14px" }}>
          {project.fname}
        </div>
        <h1>{project.title}</h1>
        <div className="detail-meta">
          {project.role} · {project.year}
        </div>

        <div className="detail-cover">
          <Image
            src={project.cover}
            alt={`${project.title} preview`}
            width={640}
            height={360}
            priority
          />
        </div>

        <div className="detail-body">
          <p>{project.overview}</p>

          <div className="detail-tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <h3>Highlights</h3>
          <ul>
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>

          <div className="hero-cta" style={{ marginTop: "36px" }}>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                className="btn primary"
                target="_blank"
                rel="noreferrer"
              >
                Live site →
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Source code →
              </a>
            )}
          </div>
        </div>
      </section>

      <footer>
        © 2026 {profile.name} — built with Next.js.
      </footer>
    </>
  );
}
