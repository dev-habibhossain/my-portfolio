import SpecRow from "@/components/SpecRow";
import { skills } from "@/data/skills";
import { sectionCount } from "@/data/nav";

export default function Skills({ count = `03 / ${sectionCount}` }) {
  return (
    <SpecRow id="skills" label="Skills" count={count}>
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
    </SpecRow>
  );
}
