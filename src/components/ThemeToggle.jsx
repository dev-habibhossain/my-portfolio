"use client";

import { useTheme } from "@/components/ThemeProvider";

// Standalone theme toggle. The sidebar renders its own inline toggle to match
// the reference layout; this component is available for reuse elsewhere.
export default function ThemeToggle({ className = "theme-btn" }) {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className={className}
      onClick={toggleTheme}
      aria-label="Toggle color theme"
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}
