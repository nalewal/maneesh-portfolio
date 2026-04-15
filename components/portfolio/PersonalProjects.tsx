// components/portfolio/PersonalProjects.tsx
"use client";

import { portfolioData } from "@/data/portfolio";

export default function PersonalProjects() {
  return (
    <section id="personal-projects" className="section bg-white dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-green-500 font-mono text-sm">05.</span>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Personal Projects
          </h2>
          <div className="flex-1 h-px bg-gray-200 dark:bg-[#1f1f1f]" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.personalProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-[#1f1f1f] rounded-xl p-6 hover:border-green-500/40 transition-all duration-300 flex flex-col gap-4"
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">💡</span>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-green-500 transition-colors">
                    {project.name}
                  </h3>
                </div>
                {/* Links */}
                <div className="flex items-center gap-3 shrink-0">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-500 transition-colors text-xs font-mono"
                    title="GitHub"
                  >
                    GitHub ↗
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-green-500 transition-colors text-xs font-mono"
                      title="Live Demo"
                    >
                      Live ↗
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs font-mono rounded-md bg-white dark:bg-[#1a1a1a] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-[#2a2a2a]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="pt-3 border-t border-gray-100 dark:border-[#1a1a1a] flex items-center justify-between">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-gray-400 hover:text-green-500 transition-colors"
                >
                  View Repo ↗
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono px-3 py-1 border border-green-500/30 text-green-500 rounded-md hover:bg-green-500/10 transition-all"
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}