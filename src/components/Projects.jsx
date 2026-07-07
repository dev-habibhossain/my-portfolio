import Link from "next/link";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";

// Home projects section: terminal-style cards (card bar + body), matching the
// reference design. Images live on the dedicated /projects grid, not here.
export default function Projects({ full = false, limit }) {
  const items = limit ? projects.slice(0, limit) : projects;

  return (
    <Reveal as="section" className="wrap" id="projects">
      {full ? null : <SectionHead id="projects" />}
      <div className="project-grid">
        {items.map((project) => (
          <div className="project-card" key={project.slug}>
            <div className="card-bar">
              <i></i>
              <i></i>
              <i></i>
              <span className="fname">{project.fname}</span>
            </div>
            <div className="card-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="card-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="card-links">
                <Link href={`/projects/${project.slug}`}>View project →</Link>
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    Source code →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {!full && (
        <div style={{ marginTop: "28px" }}>
          <Link href="/projects" className="btn">
            All projects →
          </Link>
        </div>
      )}
    </Reveal>
  );
}
