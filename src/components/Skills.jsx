import Link from "next/link";
import SpecRow from "@/components/SpecRow";
import { skills } from "@/data/skills";
import { counts } from "@/data/nav";

export default function Skills({ full = false }) {
  return (
    <SpecRow id="skills" label="Skills" count={full ? null : counts.skills}>
      <div className="skills-cols">
        {skills.map((group) => (
          <div className="skills-col" key={group.category}>
            <h3>{group.category}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {!full && (
        <Link href="/skills" className="link-arrow">
          All skills &amp; tools →
        </Link>
      )}
    </SpecRow>
  );
}
