// components/ui/ThemeToggle.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none"
      style={{ backgroundColor: isDark ? "#22c55e" : "#d1d5db" }}
      title="Toggle theme"
      aria-label="Toggle dark/light mode"
    >
      <span
        className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-300"
        style={{ transform: isDark ? "translateX(24px)" : "translateX(0)" }}
      />
      <span className="sr-only">{isDark ? "Switch to light" : "Switch to dark"}</span>
    </button>
  );
}