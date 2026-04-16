// components/portfolio/Education.tsx
"use client";

import { portfolioData } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="section bg-gray-50 dark:bg-[#0d0d0d]">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-green-500 font-mono text-sm">06.</span>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Education
          </h2>
          <div className="flex-1 h-px bg-gray-200 dark:bg-[#1f1f1f]" />
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-8">

          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200 dark:bg-[#1f1f1f] md:left-8" />

          {portfolioData.education.map((edu, index) => (
            <div key={index} className="relative flex gap-6 md:gap-10 pl-12 md:pl-20">

              {/* Dot */}
              <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-green-500 border-2 border-gray-50 dark:border-[#0d0d0d] md:left-6" />

              {/* Card */}
              <div className="flex-1 bg-white dark:bg-[#111] border border-gray-200 dark:border-[#1f1f1f] rounded-xl p-6 hover:border-green-500/40 transition-all duration-300">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">

                  {/* Left */}
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">🎓</span>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h3>
                    </div>
                    <p className="text-green-500 font-mono text-sm ml-7">
                      {edu.institute}
                    </p>
                  </div>

                  {/* Right */}
                  <div className="flex flex-col items-start md:items-end gap-2 ml-7 md:ml-0">
                    <span className="text-xs font-mono px-3 py-1 bg-green-500/10 text-green-500 rounded-full border border-green-500/20">
                      {edu.year}
                    </span>
                    <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
                      Score: {edu.score}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}