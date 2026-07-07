import Link from "next/link";
import { projects } from "@/data/projects";

// Grid of clickable project cards for the dedicated /projects page.
export default function ProjectsGrid() {
  return (
    <section className="row page-row fade-up in">
      <div className="row-label">Projects</div>
      <div className="proj-grid">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            className="proj-card"
            key={project.slug}
          >
            <div className="pc-top">
              <span className="pc-title">{project.title}</span>
              <span className="pc-year">{project.year}</span>
            </div>
            <p>{project.description}</p>
            <div className="tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
