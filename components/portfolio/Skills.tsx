// components/portfolio/Skills.tsx
"use client";

import { portfolioData } from "@/data/portfolio";

const CATEGORY_ICONS: Record<string, string> = {
  languages: "🧠",
  frontend: "🎨",
  backend: "⚙️",
  database: "🗄️",
  tools: "🛠️",
};

export default function Skills() {
  const skills = portfolioData.skills;

  return (
    <section id="skills" className="section bg-gray-50 dark:bg-[#0d0d0d]">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-green-500 font-mono text-sm">02.</span>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Skills
          </h2>
          <div className="flex-1 h-px bg-gray-200 dark:bg-[#1f1f1f]" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-white dark:bg-[#111] border border-gray-200 dark:border-[#1f1f1f] rounded-xl p-6 hover:border-green-500/40 transition-all duration-300"
            >
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xl">
                  {CATEGORY_ICONS[category] || "💡"}
                </span>
                <h3 className="text-sm font-mono font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  {category}
                </h3>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {(items as string[]).map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-mono rounded-md bg-gray-100 dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-[#2a2a2a] hover:border-green-500/50 hover:text-green-500 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stat strip */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Languages", count: skills.languages.length },
            { label: "Frontend", count: skills.frontend.length },
            { label: "Backend", count: skills.backend.length },
            { label: "Tools", count: skills.tools.length },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white dark:bg-[#111] border border-gray-200 dark:border-[#1f1f1f] rounded-xl p-4 text-center"
            >
              <div className="text-3xl font-bold text-green-500 font-mono">
                {stat.count}+
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-mono">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}