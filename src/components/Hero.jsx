import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="hero fade-up in" id="hero">
      <div className="kicker">{profile.kicker}</div>
      <h1>{profile.tagline}</h1>
      <p className="sub">{profile.sub}</p>
      <a href="#projects" className="cta">
        View work →
      </a>
    </section>
  );
}
