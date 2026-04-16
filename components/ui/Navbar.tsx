// components/ui/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

type Props = {
  onOpenTerminal: () => void;
};

export default function Navbar({ onOpenTerminal }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1f1f1f]/50"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div
        style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 32px", height: "64px" }}
        className="flex items-center justify-between w-full"
      >
        {/* Logo */}
        <a href="#hero" className="flex items-center cursor-pointer shrink-0">
          <div className="w-8 h-8 rounded-full border-2 border-green-500 overflow-hidden">
            <Image
              src="/avatar.png"
              alt="Maneesh Kumar"
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-gray-400 hover:text-green-400 transition-colors font-medium cursor-pointer"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="hidden md:flex items-center shrink-0">
          <button
            onClick={onOpenTerminal}
            style={{ padding: "8px 20px" }}
            className="font-mono text-sm border border-green-500 text-green-500 rounded hover:bg-green-500 hover:text-black transition-all cursor-pointer flex items-center gap-2"
          >
            <span>⚡</span>
            <span>Quick Review</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3 shrink-0">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-400 focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0d0d0d] border-t border-[#1f1f1f] px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-gray-400 hover:text-green-400 transition-colors font-medium cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => { onOpenTerminal(); setMenuOpen(false); }}
            style={{ padding: "8px 20px" }}
            className="font-mono text-sm border border-green-500 text-green-500 rounded hover:bg-green-500 hover:text-black transition-all cursor-pointer flex items-center gap-2 w-fit"
          >
            <span>⚡</span>
            <span>Quick Review</span>
          </button>
        </div>
      </div>
    </nav>
  );
}