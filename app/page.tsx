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
import ScrollReveal from "@/components/ui/ScrollReveal";

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
          <ScrollReveal><About /></ScrollReveal>
          <ScrollReveal delay={100}><Skills /></ScrollReveal>
          <ScrollReveal delay={100}><Experience /></ScrollReveal>
          <ScrollReveal delay={100}><IndustrialProjects /></ScrollReveal>
          <ScrollReveal delay={100}><PersonalProjects /></ScrollReveal>
          <ScrollReveal delay={100}><Education /></ScrollReveal>
          <ScrollReveal delay={100}><Contact /></ScrollReveal>
          <ScrollReveal delay={100}><Footer /></ScrollReveal>
        </>
      )}
    </main>
  );
}