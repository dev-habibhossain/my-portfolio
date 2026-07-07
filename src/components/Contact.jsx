import Link from "next/link";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { profile, socialLinks } from "@/data/profile";

// full=false → home closing box (contact-box); full=true → full contact page
// with details + form.
export default function Contact({ full = false, withFooter = true }) {
  const year = 2026;

  return (
    <>
      <Reveal as="section" className="wrap" id="contact">
        {full ? (
          <div className="contact-grid">
            <div className="contact-aside">
              <p>
                Have a project in mind, or just want to talk shop? The fastest
                way to reach me is the form — or any of the links below.
              </p>

              <div className="contact-meta">
                <div>
                  <span className="label">Email</span>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </div>
                <div>
                  <span className="label">Phone</span>
                  <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                    {profile.phone}
                  </a>
                </div>
                <div>
                  <span className="label">Location</span>
                  <span style={{ color: "var(--ink-soft)" }}>
                    {profile.location}
                  </span>
                </div>
              </div>

              <div className="socials-big">
                {socialLinks.map((s) => (
                  <a key={s.name} href={s.href} target="_blank" rel="noreferrer">
                    {s.name}
                  </a>
                ))}
              </div>
            </div>

            <ContactForm />
          </div>
        ) : (
          <>
            <SectionHead id="contact" showTitle={false} />
            <div className="panel-frame">
              <div className="contact-box panel-inner">
                <div>
                  <h2>Let&apos;s talk.</h2>
                  <p>
                    Looking for a full-stack developer? I&apos;d like to hear
                    about it — email is fastest.
                  </p>
                </div>
                <div className="contact-links">
                  <a className="btn primary" href={`mailto:${profile.email}`}>
                    Email me
                  </a>
                  <Link className="btn" href="/contact">
                    Contact page
                  </Link>
                  <a
                    className="btn"
                    href={profile.socials.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </Reveal>

      {withFooter ? (
        <footer>
          © {year} {profile.name} — built with Next.js.
        </footer>
      ) : null}
    </>
  );
}
