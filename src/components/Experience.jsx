import Link from "next/link";
import SpecRow from "@/components/SpecRow";
import { experience } from "@/data/experience";
import { counts } from "@/data/nav";

// limit → number of roles to show (home summary); full → dedicated /work page
export default function Experience({ limit, full = false }) {
  const items = limit ? experience.slice(0, limit) : experience;
  const hasMore = limit && experience.length > limit;

  return (
    <SpecRow id="experience" label="Work" count={full ? null : counts.experience}>
      <div>
        {items.map((job) => (
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
      {hasMore && (
        <Link href="/work" className="link-arrow">
          Full work history →
        </Link>
      )}
    </SpecRow>
  );
}
