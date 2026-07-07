"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Adds the `.in` class to every `.reveal` element as it enters the viewport,
// matching the reference build. Re-runs on route change so standalone pages
// animate too. Respects prefers-reduced-motion (CSS neutralizes the transform).
export default function FadeInObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.in)");
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
