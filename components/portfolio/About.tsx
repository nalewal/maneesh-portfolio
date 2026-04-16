// components/portfolio/About.tsx
"use client";

import { portfolioData } from "@/data/portfolio";

const INFO_ITEMS = [
  { label: "Name", value: portfolioData.personal.name },
  { label: "Date of Birth", value: portfolioData.personal.dob },
  { label: "Email", value: portfolioData.personal.email },
  { label: "Phone", value: portfolioData.personal.phone },
  { label: "Address", value: portfolioData.personal.address },
];

export default function About() {
  return (
    <section id="about" className="section pt-24 bg-white dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-green-500 font-mono text-sm">01.</span>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="flex-1 h-px bg-gray-200 dark:bg-[#1f1f1f]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Left — Text */}
          <div className="flex flex-col gap-6">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
              {portfolioData.about}
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
              I enjoy working on challenging problems and turning ideas into
              real-world applications. Whether it's designing clean
              architectures, optimizing performance, or building intuitive
              interfaces — I bring deep focus and attention to every project.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-2">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-gray-200 dark:border-[#2a2a2a] rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:border-green-500 hover:text-green-500 transition-all font-mono"
              >
                GitHub ↗
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-gray-200 dark:border-[#2a2a2a] rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:border-green-500 hover:text-green-500 transition-all font-mono"
              >
                LinkedIn ↗
              </a>
              <a
                href={portfolioData.personal.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-gray-200 dark:border-[#2a2a2a] rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:border-green-500 hover:text-green-500 transition-all font-mono"
              >
                LeetCode ↗
              </a>
            </div>
          </div>

          {/* Right — Info Card */}
          <div className="bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-[#1f1f1f] rounded-xl p-6 flex flex-col gap-4">

            {/* Terminal style header */}
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
              <span className="ml-2 text-xs font-mono text-gray-400">
                personal_info.json
              </span>
            </div>

            {INFO_ITEMS.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-3 py-2 border-b border-gray-100 dark:border-[#1a1a1a] last:border-0"
              >
                <span className="text-green-500 font-mono text-xs w-28 shrink-0 pt-0.5">
                  {item.label}
                </span>
                <span className="text-gray-700 dark:text-gray-300 text-sm">
                  {item.value}
                </span>
              </div>
            ))}

            {/* Resume Download */}
            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-full text-center py-2.5 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-lg transition-all text-sm"
            >
              Download Resume ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}