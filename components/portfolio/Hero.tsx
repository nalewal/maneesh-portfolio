// components/portfolio/Hero.tsx
"use client";

import { useEffect, useState } from "react";
import { portfolioData } from "@/data/portfolio";

const ROLES = [
  "Software Developer",
  "Problem Solver",
  "Clean Code Advocate",
  "Full Stack Engineer",
];

type Props = {
  onOpenTerminal: () => void;
};

export default function Hero({ onOpenTerminal }: Props) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // Typewriter effect
  useEffect(() => {
    const current = ROLES[roleIndex];

    if (!deleting && charIndex < current.length) {
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((i) => i + 1);
      }, 80);
      return () => clearTimeout(t);
    }

    if (!deleting && charIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(t);
    }

    if (deleting && charIndex > 0) {
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((i) => i - 1);
      }, 40);
      return () => clearTimeout(t);
    }

    if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }
  }, [charIndex, deleting, roleIndex]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-[#0a0a0a]"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:50px_50px] dark:bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)]" />

      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="flex flex-col items-start gap-6">

          {/* Badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/5">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-green-500 text-xs font-mono tracking-wider">
              Available for opportunities
            </span>
          </div>

          {/* Name */}
          <div>
            <p className="text-gray-500 dark:text-gray-400 font-mono text-sm mb-2">
              Hi there, I'm
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white tracking-tight">
              {portfolioData.personal.name}
            </h1>
          </div>

          {/* Typewriter */}
          <div className="flex items-center gap-2 h-10">
            <span className="text-xl md:text-2xl font-mono text-green-500">
              &gt;_{" "}
            </span>
            <span className="text-xl md:text-2xl font-mono text-gray-700 dark:text-gray-300">
              {displayed}
            </span>
            <span className="w-0.5 h-6 bg-green-500 animate-pulse" />
          </div>

          {/* About line */}
          <p className="text-gray-500 dark:text-gray-400 max-w-xl text-base leading-relaxed">
            {portfolioData.about}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href="#projects"
              className="px-6 py-3 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-lg transition-all duration-200 text-sm"
            >
              View Projects
            </a>
            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-300 dark:border-[#333] text-gray-700 dark:text-gray-300 hover:border-green-500 hover:text-green-500 rounded-lg transition-all duration-200 text-sm"
            >
              Download Resume ↓
            </a>
            <button
              onClick={onOpenTerminal}
              className="px-6 py-3 border border-green-500/50 text-green-500 hover:bg-green-500/10 rounded-lg transition-all duration-200 text-sm font-mono"
            >
              &gt;_ Open Terminal
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 mt-4">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-500 transition-colors text-sm font-mono"
            >
              GitHub ↗
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-500 transition-colors text-sm font-mono"
            >
              LinkedIn ↗
            </a>
            <a
              href={portfolioData.personal.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-500 transition-colors text-sm font-mono"
            >
              LeetCode ↗
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400">
        <span className="text-xs font-mono">scroll down</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-green-500 to-transparent animate-pulse" />
      </div>
    </section>
  );
}