"use client";

import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import SectionHeading from "./components/SectionHeading";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import ThemeToggle from "./components/ThemeToggle";
import PortfolioV2Button from "./components/PortfolioV2Button";

export default function HomePage() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("portfolio-theme");
    if (storedTheme === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 transition-colors duration-300 dark:bg-[linear-gradient(135deg,#07111f_0%,#0f2b47_45%,#133d63_100%)] dark:text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col px-6 pt-6 md:px-12 lg:flex-row lg:justify-between lg:px-24 lg:pt-8">
        <div className="mb-6 flex items-center justify-end lg:hidden">
          <ThemeToggle theme={theme} onToggle={() => setTheme(theme === "dark" ? "light" : "dark")} />
        </div>

        <Sidebar theme={theme} />

        <main className="lg:w-1/2 lg:py-24 pb-20">
          <PortfolioV2Button />
          <div className="mb-6 hidden items-center justify-end lg:flex">
            <ThemeToggle theme={theme} onToggle={() => setTheme(theme === "dark" ? "light" : "dark")} />
          </div>

          <section id="about" className="scroll-mt-24 mb-20">
            <SectionHeading index="01" title="About Me" />
            <About theme={theme} />
          </section>

          <section id="skills" className="scroll-mt-24 mb-20">
            <SectionHeading index="02" title="Skills" />
            <Skills theme={theme} />
          </section>

          <section id="projects" className="scroll-mt-24 mb-20">
            <SectionHeading index="03" title="Projects" />
            <Projects theme={theme} />
          </section>

          <section id="education" className="scroll-mt-24 mb-20">
            <SectionHeading index="04" title="Education" />
            <Education theme={theme} />
          </section>

          <footer className="border-t border-slate-200 pt-8 text-xs font-mono text-slate-400 dark:border-slate-800 dark:text-slate-500">
            Designed &amp; built by Kashifur Rahman Reza with Next.js, Tailwind CSS &amp; Framer Motion.
          </footer>
        </main>
      </div>
    </div>
  );
}
