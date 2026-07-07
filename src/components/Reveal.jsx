"use client";

import { useEffect, useRef, useState } from "react";

// Idiomatic React scroll-reveal: each instance observes ONLY its own element
// through a ref and flips a state flag — no document.querySelectorAll, no
// manual classList mutation. Renders as any tag via the `as` prop so server
// components can wrap their <section> in it without becoming client components.
export default function Reveal({
  as: Tag = "div",
  className = "",
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced-motion: reveal immediately, skip the observer.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? " in" : ""} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  );
}
