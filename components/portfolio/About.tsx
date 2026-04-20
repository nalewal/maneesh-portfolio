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
    <section id="about" className="bg-[#0a0a0a]" style={{ padding: "60px 0 80px 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px" }}>

        {/* Section Header */}
        <div className="flex items-center gap-4" style={{ marginBottom: "48px" }}>
          <h2 className="text-3xl font-bold text-white">
            About Me
          </h2>
          <div className="flex-1 h-px bg-[#1f1f1f]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

          {/* Left — Text */}
          <div className="flex flex-col gap-6">
            <p className="text-gray-400 leading-relaxed text-base w-full">
              {portfolioData.about}
            </p>
            <p className="text-gray-400 leading-relaxed text-base w-full">
              I enjoy working on challenging problems and turning ideas into
              real-world applications. Whether it's designing clean
              architectures, optimizing performance, or building intuitive
              interfaces — I bring deep focus and attention to every project.
            </p>

            {/* Social Links */}
            <div className="flex gap-5 mt-2">
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
                <span>GitHub</span>
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

          {/* Right — Info Card */}
          <div className="bg-[#111] border border-[#1f1f1f] rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:border-green-500/30 hover:shadow-xl hover:shadow-green-500/5 origin-right">

            {/* Info Items */}
            <div className="flex flex-col">
              {INFO_ITEMS.map((item, index) => (
                <div
                  key={item.label}
                  style={{ padding: "14px 24px" }}
                  className={`flex items-start gap-6 ${
                    index !== INFO_ITEMS.length - 1
                      ? "border-b border-[#1a1a1a]"
                      : ""
                  }`}
                >
                  <span className="text-green-500 font-mono text-xs w-24 shrink-0 pt-0.5">
                    {item.label}
                  </span>
                  <span className="text-gray-300 text-sm">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Resume Download */}
            <div style={{ padding: "16px 24px" }} className="border-t border-[#1f1f1f]">
              <a
                href={portfolioData.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ padding: "12px 24px" }}
                className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-400 text-black font-semibold rounded-lg transition-all text-sm cursor-pointer"
              >
                Download Resume ↓
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}