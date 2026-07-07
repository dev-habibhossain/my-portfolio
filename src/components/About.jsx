import SpecRow from "@/components/SpecRow";
import { profile } from "@/data/profile";
import { sectionCount } from "@/data/nav";

export default function About({ count = `01 / ${sectionCount}` }) {
  return (
    <SpecRow id="about" label="About" count={count}>
      <div className="about-body">
        <p>{profile.bio}</p>
        <div className="stat-row">
          {profile.stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <div className="num">{stat.num}</div>
              <div className="label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </SpecRow>
  );
}
