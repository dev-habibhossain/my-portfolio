import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";
import { skills } from "@/data/skills";

export default function Skills({ full = false }) {
  return (
    <Reveal as="section" className="wrap" id="skills">
      {full ? null : <SectionHead id="skills" />}
      {skills.map((group) => (
        <div className="skill-group" key={group.category}>
          <h3>{group.category}</h3>
          <div className="chip-row">
            {group.items.map((item) => (
              <span className="chip" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </Reveal>
  );
}
