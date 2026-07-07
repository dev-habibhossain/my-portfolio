export const profile = {
  name: "Ayaan Rahman",
  role: "Full-Stack Engineer",
  location: "Dhaka, BD",
  kicker: "Available for select engagements",
  tagline: "Building interfaces that feel considered, not assembled.",
  sub: "Six years designing and shipping products end-to-end — from data models to the pixel that meets the hand. Currently focused on fast, thoughtful web experiences with Next.js.",
  // Short bio for the home summary; `bioLong` shows on the full /about page.
  bio: "I'm a full-stack engineer who cares equally about the system underneath and the feeling on the surface.",
  bioLong: [
    "I'm a full-stack engineer who cares equally about the system underneath and the feeling on the surface. I've spent the last several years building products that need to earn attention in the first three seconds — and hold it.",
    "My approach is quiet, precise, and unafraid of a strong point of view. I work end-to-end: shaping data models, building the API layer, and sweating the details of the interface people actually touch.",
    "Outside of shipping, I care about performance budgets, accessible defaults, and design systems that stay coherent as teams grow.",
  ],
  email: "hello@yourname.com",
  phone: "+880 1700 000000",
  photo: "/photo.jpg",
  resume: "/resume.pdf",
  socials: {
    github: "https://github.com/yourname",
    linkedin: "https://linkedin.com/in/yourname",
    twitter: "https://twitter.com/yourname",
    dribbble: "https://dribbble.com/yourname",
  },
  stats: [
    { num: "6+", label: "Years experience" },
    { num: "24", label: "Projects shipped" },
    { num: "95+", label: "Avg. Lighthouse" },
  ],
};

// Ordered list for social buttons/links so components can map instead of hardcode.
export const socialLinks = [
  { name: "GitHub", href: profile.socials.github },
  { name: "LinkedIn", href: profile.socials.linkedin },
  { name: "Twitter", href: profile.socials.twitter },
  { name: "Dribbble", href: profile.socials.dribbble },
];
