"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import useScrollSpy from "./useScrollSpy";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
];

const SOCIALS = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com/Kashif-79" },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kashifur-rahman-reza/",
  },
  { icon: GiNotebook, label: "Resume", href: "/KashifurRahmanReza.pdf" },
];

const Sidebar = ({ theme }) => {
  const active = useScrollSpy(NAV_ITEMS.map((n) => n.id));
  const isDark = theme === "dark";

  return (
    <header className="flex flex-col lg:min-h-screen lg:w-2/5 lg:justify-between lg:self-start lg:sticky lg:top-0 lg:py-24 lg:pr-12">
      <div>
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          Kashifur Rahman Reza
        </h1>
        <h2 className="mb-4 text-lg font-medium text-slate-600 dark:text-slate-300">
          Full-Stack Web Developer
        </h2>
        <div className="mb-6 flex items-center gap-4 lg:hidden">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className={`text-2xl transition-all duration-300 hover:-translate-y-0.5 ${
                isDark
                  ? "text-slate-400 hover:text-cyan-300"
                  : "text-slate-400 hover:text-slate-900"
              }`}
            >
              <s.icon />
            </a>
          ))}
        </div>
        <p className="mb-10 max-w-xs leading-relaxed text-slate-500 dark:text-slate-400">
          I build full-stack web apps with React, Node.js, and
          PostgreSQL/MongoDB — grounded in a Statistics background. Currently
          open to remote entry-level roles.
        </p>

        <nav>
          <ul className="space-y-4">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="group flex items-center gap-3"
                  >
                    <span
                      className={`h-px transition-all duration-300 ${
                        isActive
                          ? "w-10 bg-slate-900 dark:bg-cyan-400"
                          : "w-6 bg-slate-300 group-hover:w-10 group-hover:bg-slate-500 dark:bg-slate-700 dark:group-hover:bg-slate-400"
                      }`}
                    />
                    <span
                      className={`text-sm font-medium uppercase tracking-wide transition-colors duration-300 ${
                        isActive
                          ? "text-slate-900 dark:text-cyan-300"
                          : "text-slate-400 group-hover:text-slate-700 dark:text-slate-500 dark:group-hover:text-slate-200"
                      }`}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="hidden items-center gap-5 lg:flex">
        {SOCIALS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className={`text-2xl transition-all duration-300 hover:-translate-y-0.5 ${
              isDark
                ? "text-slate-400 hover:text-cyan-300"
                : "text-slate-400 hover:text-slate-900"
            }`}
          >
            <s.icon />
          </a>
        ))}
      </div>
    </header>
  );
};

export default Sidebar;
