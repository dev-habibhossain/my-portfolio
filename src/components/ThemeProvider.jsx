"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({ theme: "light", toggleTheme: () => {} });

export function ThemeProvider({ children }) {
  // Start as null so the first client render matches the server markup (the
  // pre-paint script in layout.js already set the real data-theme, avoiding a
  // flash). We read it once on mount, then let React own the value from there.
  const [theme, setTheme] = useState(null);

  // Read the theme the pre-paint script applied (or fall back to the OS
  // preference). Runs once on mount. Syncing state from the DOM here is
  // intentional and must happen in an effect to avoid a hydration mismatch.
  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    if (current === "dark" || current === "light") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTheme(current);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  // Reflect the React state to <html data-theme> whenever it changes. This is
  // the single, declarative place the DOM attribute is written — the toggle
  // below only updates state.
  useEffect(() => {
    if (theme) document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme: theme ?? "light", toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
