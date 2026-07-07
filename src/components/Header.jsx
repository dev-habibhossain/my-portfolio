"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { profile } from "@/data/profile";
import { nav } from "@/data/nav";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);

  const isDark = theme === "dark";

  return (
    <header>
      <nav className="nav">
        <Link href="/" className="nav-logo" onClick={() => setOpen(false)}>
          {profile.logo}
          <span>.dev</span>
        </Link>

        <ul className={`nav-links${open ? " open" : ""}`} id="navLinks">
          {nav.map((item) => {
            // On home, link to the in-page anchor; on other pages, link to the
            // dedicated route (falling back to a home anchor for home-only
            // sections like Reviews).
            const href = isHome ? item.anchor : item.href ?? `/${item.anchor}`;
            const active = !isHome && item.href === pathname;
            return (
              <li key={item.id}>
                <Link
                  href={href}
                  className={active ? "active" : undefined}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="nav-right">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
          >
            <span className="icon" aria-hidden="true">
              {isDark ? "☀️" : "🌙"}
            </span>
            <span>{isDark ? "Light" : "Dark"}</span>
          </button>
          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            ☰ menu
          </button>
        </div>
      </nav>
    </header>
  );
}
