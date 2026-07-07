import ThemedImage from "@/components/ThemedImage";
import Reveal from "@/components/Reveal";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="hero wrap" id="hero">
      <div className="hero-grid">
        <div className="hero-text">
          <div className="status-line">
            <span className="dot" aria-hidden="true"></span> {profile.statusLine}
          </div>
          <h1>
            {profile.headlineLead}{" "}
            <span className="hl">{profile.headlineName}</span>.
            <br />
            {profile.headlineTail}
          </h1>
          <div className="hero-role">{`// ${profile.role}`}</div>
          <p className="hero-bio">{profile.heroBio}</p>
          <div className="hero-cta">
            <a className="btn primary" href="#projects">
              View projects
            </a>
            <a className="btn" href={profile.resume} download>
              Download résumé
            </a>
          </div>
        </div>
        <Reveal className="hero-photo-wrap">
          <div className="hero-photo">
            <ThemedImage priority />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
