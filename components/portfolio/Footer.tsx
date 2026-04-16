// components/portfolio/Footer.tsx
"use client";

import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-[#0d0d0d] border-t border-gray-200 dark:border-[#1f1f1f]">
      <div className="container mx-auto px-6 max-w-5xl py-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left — Branding */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-mono text-green-500 font-bold text-lg">
              &gt;_ maneesh.dev
            </span>
            <p className="text-xs text-gray-400 font-mono">
              Software Developer · Building with passion
            </p>
          </div>

          {/* Center — Nav Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { label: "About", href: "#about" },
              { label: "Skills", href: "#skills" },
              { label: "Experience", href: "#experience" },
              { label: "Projects", href: "#projects" },
              { label: "Education", href: "#education" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-mono text-gray-400 hover:text-green-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right — Social */}
          <div className="flex items-center gap-4">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-gray-400 hover:text-green-500 transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-gray-400 hover:text-green-500 transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href={portfolioData.personal.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-gray-400 hover:text-green-500 transition-colors"
            >
              LeetCode ↗
            </a>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-[#1f1f1f] flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs font-mono text-gray-400">
            © {year} {portfolioData.personal.name}. All rights reserved.
          </p>
          <p className="text-xs font-mono text-gray-500">
            Built with <span className="text-green-500">Next.js</span> &{" "}
            <span className="text-green-500">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}