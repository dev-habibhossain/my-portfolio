import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

// Dedicated /projects grid: same terminal-card shell as the home section, but
// with a cover image on each card. The whole card links to the project detail.
export default function ProjectsGrid() {
  return (
    <section className="wrap reveal" id="projects">
      <div className="project-grid">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            className="project-card"
            key={project.slug}
          >
            <div className="card-bar">
              <i></i>
              <i></i>
              <i></i>
              <span className="fname">{project.fname}</span>
            </div>
            <div className="card-cover">
              <Image
                src={project.cover}
                alt={`${project.title} preview`}
                width={640}
                height={360}
              />
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
                <span style={{ color: "var(--accent)", fontWeight: 500 }}>
                  View project →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
