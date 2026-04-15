// app/page.tsx
"use client";

import { useState } from "react";
import Terminal from "@/components/terminal/Terminal";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import IndustrialProjects from "@/components/portfolio/IndustrialProjects";
import PersonalProjects from "@/components/portfolio/PersonalProjects";
import Education from "@/components/portfolio/Education";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

export default function Home() {
  const [showTerminal, setShowTerminal] = useState(true);

  return (
    <main>
      {showTerminal ? (
        <Terminal onExit={() => setShowTerminal(false)} />
      ) : (
        <>
          <Navbar onOpenTerminal={() => setShowTerminal(true)} />
          <Hero onOpenTerminal={() => setShowTerminal(true)} />
          <About />
          <Skills />
          <Experience />
          <IndustrialProjects />
          <PersonalProjects />
          <Education />
          <Contact />
          <Footer />
        </>
      )}
    </main>
  );
}