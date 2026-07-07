import { profile } from "@/data/profile";

export default function Contact({ withFooter = true }) {
  const year = 2026;
  return (
    <section id="contact" className="fade-up">
      <div className="contact-row">
        <h2>Let&apos;s build something worth showing.</h2>
        <a href={`mailto:${profile.email}`} className="contact-email">
          {profile.email}
        </a>
      </div>
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
