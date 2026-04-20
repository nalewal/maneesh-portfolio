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
    <section id="skills" className="bg-[#0a0a0a]" style={{ padding: "40px 0 60px 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px" }}>

        {/* Section Header */}
        <div className="flex items-center gap-4" style={{ marginBottom: "48px" }}>
          <h2 className="text-3xl font-bold text-white">Skills</h2>
          <div className="flex-1 h-px bg-[#1f1f1f]" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ marginBottom: "48px" }}>
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-[#111] border border-[#1f1f1f] rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/5"
              style={{ padding: "20px" }}
            >
              {/* Card Header */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-xl shrink-0">
                  {CATEGORY_ICONS[category] || "💡"}
                </div>
                <h3 className="text-sm font-mono font-bold text-white uppercase tracking-widest">
                  {category}
                </h3>
              </div>

              {/* Divider */}
              <div className="h-px bg-[#1f1f1f]" style={{ marginTop: "16px", marginBottom: "16px" }} />

              {/* Skills as comma separated */}
              <p className="text-gray-400 text-sm font-mono leading-relaxed" style={{ marginTop: "12px" }}>
                {(items as string[]).join(", ")}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom stat strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4" style={{ marginTop: "48px" }}>
          {[
            { label: "Languages", count: skills.languages.length },
            { label: "Frontend", count: skills.frontend.length },
            { label: "Backend", count: skills.backend.length },
            { label: "Tools", count: skills.tools.length },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-[#111] border border-[#1f1f1f] rounded-xl text-center hover:border-green-500/30 transition-all duration-300"
              style={{ padding: "24px 16px" }}
            >
              <div className="text-3xl font-bold text-green-500 font-mono">
                {stat.count}+
              </div>
              <div className="text-xs text-gray-500 font-mono" style={{ marginTop: "8px" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}