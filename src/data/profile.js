// Central profile data — drives the hero, about panel, contact, and metadata.
export const profile = {
  name: "Ayaan Rahman",
  firstName: "Ayaan",
  logo: "ayaan", // shown in the header as ayaan.dev
  role: "Full-Stack Developer — React · Node · PostgreSQL",
  shortRole: "Full-Stack Engineer",
  location: "Dhaka, Bangladesh",

  // Hero
  statusLine: "open to work · replies within a day",
  // The hero headline is split so the name can be highlighted.
  headlineLead: "Hi, I'm",
  headlineName: "Ayaan Rahman",
  headlineTail: "I build things for the web.",
  heroBio:
    "I design and ship products end-to-end — from data models to the pixel that meets the hand. I care about fast, accessible, thoughtful web experiences, and I'm looking for a full-stack role where craft matters.",

  // About
  aboutTitle: "A bit more about me",
  aboutSub: "The story behind the stack.",
  bio: "I'm a full-stack engineer who cares equally about the system underneath and the feeling on the surface.",
  bioLong: [
    "I got into development chasing the feeling of making something appear on a screen and having it actually work. Six years later that hasn't worn off — I still care most about products that earn attention in the first three seconds and hold it.",
    "I work end-to-end: shaping data models, building the API layer, and sweating the details of the interface people actually touch. My approach is quiet, precise, and unafraid of a strong point of view.",
    "Right now I'm focused on performance budgets, accessible defaults, and design systems that stay coherent as teams grow — mostly with Next.js, TypeScript, and PostgreSQL.",
  ],

  email: "hello@ayaanrahman.dev",
  phone: "+880 1700 000000",
  // Theme-aware portraits (light/dark) live in /public.
  photoLight:
    "https://i.ibb.co.com/8LDCFqpC/gpt-image-2-A-professional-corporate-headshot-of-a-skilled-male-web-developer-for-Linked-In-s-0.jpg",
  photoDark: "https://i.ibb.co.com/d0QcfRhz/wmremove-transformed.png",
  resume: "/resume.pdf",

  socials: {
    github: "https://github.com/yourname",
    linkedin: "https://linkedin.com/in/yourname",
    twitter: "https://twitter.com/yourname",
    dribbble: "https://dribbble.com/yourname",
  },

  // Rendered in the About "facts" panel (key/value hairline list).
  facts: [
    { label: "location", value: "Dhaka, Bangladesh" },
    { label: "experience", value: "6 years" },
    { label: "focus", value: "Full-stack (React / Node)" },
    { label: "currently", value: "Senior Engineer @ Studio Meridian" },
    { label: "education", value: "BSc CSE, BUET" },
  ],
};

// Ordered list for social buttons/links so components map instead of hardcode.
export const socialLinks = [
  { name: "GitHub", href: profile.socials.github },
  { name: "LinkedIn", href: profile.socials.linkedin },
  { name: "Twitter", href: profile.socials.twitter },
  { name: "Dribbble", href: profile.socials.dribbble },
];
