import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { profile, socialLinks } from "@/data/profile";

// full=false → closing statement + Let's talk / résumé / socials (home)
// full=true  → complete contact page: details + résumé + socials + form
export default function Contact({ full = false, withFooter = true }) {
  const year = 2026;

  return (
    <section id="contact" className="fade-up">
      {full ? (
        <div className="row page-row" style={{ borderTop: "none" }}>
          <div className="row-label">Contact</div>
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
                  <span style={{ color: "var(--muted)" }}>
                    {profile.location}
                  </span>
                </div>
              </div>

              <div className="btn-row">
                <a
                  href={profile.resume}
                  className="btn btn-primary"
                  download
                >
                  Download résumé ↓
                </a>
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
        </div>
      ) : (
        <div className="contact-row">
          <div>
            <h2>Let&apos;s build something worth showing.</h2>
            <div className="btn-row">
              <Link href="/contact" className="btn btn-primary">
                Let&apos;s talk →
              </Link>
              <a href={profile.resume} className="btn btn-ghost" download>
                Résumé ↓
              </a>
            </div>
            <div className="socials-big">
              {socialLinks.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noreferrer">
                  {s.name}
                </a>
              ))}
            </div>
          </div>
          <a href={`mailto:${profile.email}`} className="contact-email">
            {profile.email}
          </a>
        </div>
      )}

      {withFooter ? (
        <footer>
          <span>
            &copy; {year} {profile.name}
          </span>
          <span>Built with Next.js</span>
        </footer>
      ) : null}
    </section>
  );
}
