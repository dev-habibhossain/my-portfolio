"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { profile } from "@/data/profile";
import { nav } from "@/data/nav";

export default function Sidebar() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [clock, setClock] = useState("");
  const [activeId, setActiveId] = useState("hero");

  // Live local-time clock, updates every 30s (matches reference).
  useEffect(() => {
    const update = () => {
      const now = new Date();
      const h = now.getHours().toString().padStart(2, "0");
      const m = now.getMinutes().toString().padStart(2, "0");
      setClock(`${h}:${m} local`);
    };
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);

  // Scroll-spy: highlight the section in view. Home page only.
  useEffect(() => {
    if (!isHome) return;
    const sections = document.querySelectorAll("section[id]");
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome]);

  // On dedicated pages, the active item is derived from the route.
  const routeActiveId = nav.find((n) => n.href === pathname)?.id;
  const currentId = isHome ? activeId : routeActiveId;

  const portrait =
    theme === "dark" ? "/portrait-dark.jpg" : "/portrait-light.jpg";

  return (
    <aside className="sidebar">
      <div className="side-top">
        <div className="id-row">
          <div className="avatar">
            <Image
              src={portrait}
              alt={profile.name}
              width={34}
              height={34}
              className="rounded-full object-cover"
              priority
            />
          </div>
          <div>
            <div className="name">{profile.name}</div>
          </div>
        </div>
        <div className="role">
          {profile.role}
          <br />
          {profile.location}
        </div>

        <nav className="side-nav" aria-label="Section index">
          {nav.map((item) => {
            // On home, link to the in-page anchor; elsewhere, to the route.
            const href = isHome ? item.anchor : item.href;
            return (
              <Link
                key={item.id}
                href={href}
                className={currentId === item.id ? "active" : undefined}
                aria-current={currentId === item.id ? "true" : undefined}
              >
                <span className="idx">{item.idx}</span> {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="side-bottom">
        <span className="clock mono" suppressHydrationWarning>
          {clock}
        </span>
        <button
          className="theme-btn"
          onClick={toggleTheme}
          aria-label="Toggle color theme"
        >
          {theme === "dark" ? "Light" : "Dark"}
        </button>
        <div className="socials">
          <a href={profile.socials.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </aside>
  );
}
