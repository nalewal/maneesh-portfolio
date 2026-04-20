// components/portfolio/Hero.tsx
"use client";

import { useEffect, useState } from "react";
import { Download, FolderGit2, Circle } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const ROLES = [
  "Software Developer",
  "Problem Solver",
  "Clean Code Advocate",
  "Full Stack Engineer",
];

// ✅ CHANGE THIS TO false WHEN YOU ARE NOT AVAILABLE
const IS_AVAILABLE = true;

type Props = {
  onOpenTerminal: () => void;
};

export default function Hero({ onOpenTerminal }: Props) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

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
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10 pt-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Left Content */}
          <div className="flex flex-col items-start gap-5 flex-1">

            {/* Availability Badge */}
            <div
              style={{ padding: "10px 24px" }}
              className={`flex items-center gap-3 rounded-full border text-sm font-medium select-none ${
                IS_AVAILABLE
                  ? "border-green-500/40 bg-green-500/10 text-green-500"
                  : "border-red-500/40 bg-red-500/10 text-red-400"
              }`}
            >
              <Circle
                className={`w-2.5 h-2.5 fill-current shrink-0 ${IS_AVAILABLE ? "animate-pulse" : ""}`}
              />
              <span>{IS_AVAILABLE ? "Open to Work" : "Not Available"}</span>
            </div>

            {/* Name */}
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
              {portfolioData.personal.name}
            </h1>

            {/* Typewriter */}
            <div className="flex items-center gap-2 h-9">
              <span className="text-lg md:text-xl font-mono font-semibold text-green-500">{"<"}</span>
              <span className="text-lg md:text-xl font-mono text-gray-300 font-medium">
                {displayed}
              </span>
              <span className="w-0.5 h-5 bg-green-500 animate-pulse" />
              <span className="text-lg md:text-xl font-mono font-semibold text-green-500">{"/>"}</span>
            </div>

            {/* About line */}
            <p className="text-gray-400 max-w-lg text-base leading-relaxed">
              {portfolioData.about}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-5 mt-1">
              <a
                href="#projects"
                style={{ padding: "12px 28px" }}
                className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-lg transition-all duration-200 text-sm cursor-pointer"
              >
                <FolderGit2 className="w-4 h-4 shrink-0" />
                <span>View Projects</span>
              </a>
              <a
                href={portfolioData.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ padding: "12px 28px" }}
                className="flex items-center gap-2 border border-[#333] text-gray-300 hover:border-green-500 hover:text-green-500 rounded-lg transition-all duration-200 text-sm cursor-pointer"
              >
                <Download className="w-4 h-4 shrink-0" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5 mt-1">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ padding: "10px 20px" }}
                className="flex items-center gap-2 border border-[#2a2a2a] rounded-lg text-sm text-gray-400 hover:border-green-500 hover:text-green-500 transition-all cursor-pointer"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                </svg>
                <span>My Repo</span>
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ padding: "10px 20px" }}
                className="flex items-center gap-2 border border-[#2a2a2a] rounded-lg text-sm text-gray-400 hover:border-green-500 hover:text-green-500 transition-all cursor-pointer"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
              <a
                href={portfolioData.personal.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                style={{ padding: "10px 20px" }}
                className="flex items-center gap-2 border border-[#2a2a2a] rounded-lg text-sm text-gray-400 hover:border-green-500 hover:text-green-500 transition-all cursor-pointer"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                </svg>
                <span>LeetCode</span>
              </a>
            </div>
          </div>

          {/* Right — Photo Frame */}
          <div className="relative flex items-center justify-center shrink-0">
            <div
              className={`absolute w-72 h-72 rounded-full border-2 border-dashed transition-colors duration-700 ${
                IS_AVAILABLE ? "border-green-500/40 animate-spin" : "border-red-500/30"
              }`}
              style={{ animationDuration: "12s" }}
            />
            <div
              className={`absolute w-64 h-64 rounded-full border transition-colors duration-700 ${
                IS_AVAILABLE ? "border-green-500/20" : "border-red-500/10"
              }`}
            />
            <div
              className={`w-56 h-56 rounded-full border-4 overflow-hidden bg-[#111] relative z-10 shadow-xl transition-all duration-700 ${
                IS_AVAILABLE
                  ? "border-green-500 shadow-green-500/10"
                  : "border-red-500/50 shadow-red-500/10"
              }`}
            >
              <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${
                IS_AVAILABLE ? "from-green-500/20 to-green-500/5" : "from-red-500/20 to-red-500/5"
              }`}>
                <span className="text-6xl">👨‍💻</span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}