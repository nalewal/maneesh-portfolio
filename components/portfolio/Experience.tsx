// components/portfolio/Experience.tsx
"use client";

import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section bg-white dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-green-500 font-mono text-sm">03.</span>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Experience
          </h2>
          <div className="flex-1 h-px bg-gray-200 dark:bg-[#1f1f1f]" />
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-8">

          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200 dark:bg-[#1f1f1f] md:left-8" />

          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="relative flex gap-6 md:gap-10 pl-12 md:pl-20">

              {/* Dot */}
              <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-green-500 border-2 border-white dark:border-[#0a0a0a] md:left-6" />

              {/* Card */}
              <div className="flex-1 bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-[#1f1f1f] rounded-xl p-6 hover:border-green-500/40 transition-all duration-300">

                {/* Top row */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-green-500 font-mono text-sm mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-1">
                    <span className="text-xs font-mono px-3 py-1 bg-green-500/10 text-green-500 rounded-full border border-green-500/20">
                      {exp.duration}
                    </span>
                    <span className="text-xs text-gray-400 font-mono">
                      📍 {exp.location}
                    </span>
                  </div>
                </div>

                {/* Points */}
                <ul className="flex flex-col gap-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <span className="text-green-500 mt-1 shrink-0">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}