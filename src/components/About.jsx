import Image from "next/image";
import Link from "next/link";
import SpecRow from "@/components/SpecRow";
import { profile } from "@/data/profile";
import { counts } from "@/data/nav";

// full=false → short bio + "More about me" link (home summary)
// full=true  → complete multi-paragraph bio (dedicated /about page)
export default function About({ full = false }) {
  return (
    <SpecRow id="about" label="About" count={full ? null : counts.about}>
      <div className="about-grid">
        <div className="photo">
          <Image
            src={profile.photo}
            alt={profile.name}
            width={200}
            height={200}
            priority
          />
        </div>
        <div className="about-body">
          {full ? (
            profile.bioLong.map((para, i) => <p key={i}>{para}</p>)
          ) : (
            <p>{profile.bio}</p>
          )}

          <div className="stat-row">
            {profile.stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <div className="num">{stat.num}</div>
                <div className="label">{stat.label}</div>
              </div>
            ))}
          </div>

          {!full && (
            <Link href="/about" className="link-arrow">
              More about me →
            </Link>
          )}
        </div>
      </div>
    </SpecRow>
  );
}
