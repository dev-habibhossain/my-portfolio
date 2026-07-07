"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({ theme: "light", toggleTheme: () => {} });

export function ThemeProvider({ children }) {
  // Start as null so the first client render matches the server (no hydration
  // mismatch); the pre-paint script in layout.js has already set data-theme.
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    // Sync React state with the theme the pre-paint script already applied to
    // <html>. This must run on mount (not during render) to avoid an SSR
    // hydration mismatch, so the setState-in-effect here is intentional.
    const current = document.documentElement.getAttribute("data-theme");
    if (current === "dark" || current === "light") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTheme(current);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const initial = prefersDark ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", initial);
      setTheme(initial);
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme: theme ?? "light", toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
