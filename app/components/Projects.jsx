"use client";

import { motion } from "framer-motion";
import { FaGithub, FaArrowRight } from "react-icons/fa";

const PROJECTS = [
  {
    title: "LB Consultancy",
    tagline:
      "Full-stack consultancy platform connecting students with international universities and study services.",
    tech: [
      "React.js",
      "Redux",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    features: [
      "Public site + protected admin dashboard",
      "Full CRUD for universities, countries, services",
      "Role-based auth and authorization",
      "Dynamic, always-current content",
    ],
    liveUrl: "https://lb-consultancy-frontend.vercel.app/",
    codeUrl: "https://github.com/Kashif-79/LB-Consultancy-Frontend",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const ProjectCard = ({ project }) => (
  <motion.div
    variants={fadeUp}
    whileHover={{ y: -3, scale: 1.01 }}
    className="overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-sm transition-all duration-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70"
  >
    <div className="p-5 md:p-6">
      <p className="mb-1 font-mono text-xs uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
        // featured project
      </p>
      <h3 className="mb-2 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 md:text-2xl">
        {project.title}
      </h3>
      <p className="mb-4 max-w-2xl text-sm leading-8 text-slate-600 dark:text-slate-300 md:text-base">
        {project.tagline}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
          >
            {t}
          </span>
        ))}
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 mb-5">
        {project.features.map((f) => (
          <li
            key={f}
            className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
          >
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-800 dark:bg-cyan-400" />
            {f}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap items-center gap-3">
        <motion.a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-slate-800 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400"
        >
          Visit site
          <FaArrowRight className="text-xs" />
        </motion.a>
        <motion.a
          href={project.codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          <FaGithub />
          View code
        </motion.a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="flex flex-col gap-6"
    >
      {PROJECTS.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </motion.div>
  );
};

export default Projects;
