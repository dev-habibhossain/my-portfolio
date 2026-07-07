import SpecRow from "@/components/SpecRow";
import { experience } from "@/data/experience";
import { sectionCount } from "@/data/nav";

export default function Experience({ count = `02 / ${sectionCount}` }) {
  return (
    <SpecRow id="experience" label="Work" count={count}>
      <div>
        {experience.map((job) => (
          <div className="tl-item" key={`${job.company}-${job.period}`}>
            <div className="tl-top">
              <div className="tl-role">{job.role}</div>
              <div className="tl-period">{job.period}</div>
            </div>
            <div className="tl-company">{job.company}</div>
            <p className="tl-desc">{job.description}</p>
          </div>
        ))}
      </div>
    </SpecRow>
  );
}
