"use client";

import { useState } from "react";
import { profile } from "@/data/profile";

// Static-friendly contact form: composes a mailto: with the message so it works
// with no backend. Swap the handleSubmit body for a fetch() to an API route or
// a service like Resend/Formspree when a backend is available.
export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sent

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="cf-name">Your name</label>
        <input id="cf-name" name="name" type="text" required autoComplete="name" />
      </div>
      <div>
        <label htmlFor="cf-email">Email</label>
        <input
          id="cf-email"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
      </div>
      <div>
        <label htmlFor="cf-message">Message</label>
        <textarea id="cf-message" name="message" required />
      </div>
      <button type="submit" className="btn primary" style={{ alignSelf: "flex-start" }}>
        Send message →
      </button>
      {status === "sent" ? (
        <p className="form-note ok">
          Opening your mail app… if nothing happens, email {profile.email}{" "}
          directly.
        </p>
      ) : (
        <p className="form-note">
          This opens your mail app with the message pre-filled.
        </p>
      )}
    </form>
  );
}
