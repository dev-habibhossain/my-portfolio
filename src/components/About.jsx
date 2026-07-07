import SectionHead from "@/components/SectionHead";
import { profile } from "@/data/profile";

// full=false → home summary (short bio); full=true → dedicated /about page.
export default function About({ full = false }) {
  return (
    <section className="wrap reveal" id="about">
      {full ? null : <SectionHead id="about" />}
      <div className="about-grid">
        <div className="about-text">
          {full ? (
            profile.bioLong.map((para, i) => <p key={i}>{para}</p>)
          ) : (
            <>
              <p>{profile.bioLong[0]}</p>
              <p>{profile.bioLong[1]}</p>
            </>
          )}
        </div>
        <div className="panel-frame">
          <ul className="facts panel-inner">
            {profile.facts.map((fact) => (
              <li key={fact.label}>
                <span>{fact.label}</span>
                <span>{fact.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
