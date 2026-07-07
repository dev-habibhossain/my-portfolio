import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";
import { experience } from "@/data/experience";

// Release-log layout: version-style tag + date on the left, role details right.
export default function Experience({ limit, full = false }) {
  const items = limit ? experience.slice(0, limit) : experience;

  return (
    <Reveal as="section" className="wrap" id="experience">
      {full ? null : <SectionHead id="experience" />}
      <div>
        {items.map((job) => (
          <div className="release" key={`${job.company}-${job.period}`}>
            <div>
              <div className="release-tag">{job.tag}</div>
              <span className="release-date">{job.period}</span>
            </div>
            <div className="release-body">
              <h3>{job.role}</h3>
              <span className="company">{job.company}</span>
              <p>{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
