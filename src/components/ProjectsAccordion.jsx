"use client";

import Link from "next/link";
import { useState } from "react";
import SpecRow from "@/components/SpecRow";
import { projects } from "@/data/projects";
import { counts } from "@/data/nav";

export default function ProjectsAccordion({ full = false }) {
  // First project open by default, matching the reference build.
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) =>
    setOpenIndex((prev) => (prev === index ? -1 : index));

  return (
    <SpecRow id="projects" label="Projects" count={full ? null : counts.projects}>
      <div className="acc-list">
        {projects.map((project, index) => {
          const open = openIndex === index;
          const idx = String(index + 1).padStart(2, "0");
          return (
            <div className={`acc-item${open ? " open" : ""}`} key={project.slug}>
              <button
                className="acc-head"
                onClick={() => toggle(index)}
                aria-expanded={open}
              >
                <span className="left">
                  <span className="idx">{idx}</span>
                  <span className="title">{project.title}</span>
                </span>
                <span className="plus" aria-hidden="true">
                  +
                </span>
              </button>
              <div className="acc-body">
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <Link href={`/projects/${project.slug}`} className="view-link">
                  View project →
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      {!full && (
        <Link href="/projects" className="link-arrow">
          All projects →
        </Link>
      )}
    </SpecRow>
  );
}
