"use client";

import { motion } from "framer-motion";
import StatusLine from "./StatusLine";

const FACTS = [
  "Statistics @ SUST",
  "Full-stack web developer",
  "Based in Sylhet, BD",
  "Open to remote roles",
];

const INTERESTS = ["Cooking", "Cricket", "Football", "Formula 1"];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const About = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <motion.div variants={fadeUp}>
        <StatusLine />
      </motion.div>

      <motion.p
        variants={fadeUp}
        className="mb-5 max-w-2xl text-base leading-8 text-slate-700 dark:text-slate-300 md:text-lg"
      >
        I&apos;m Kashifur Rahman Reza — a Statistics undergraduate at Shahjalal University of Science
        and Technology who builds full-stack web applications with React, Node.js, and MongoDB.
        What started as curiosity about how websites work has turned into a habit of shipping real,
        end-to-end products with care and intention.
      </motion.p>

      <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-6">
        {FACTS.map((fact) => (
          <span
            key={fact}
            className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300 md:text-sm"
          >
            {fact}
          </span>
        ))}
      </motion.div>

      <motion.div
        variants={fadeUp}
        whileHover={{ y: -2, scale: 1.01 }}
        className="mb-6 rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/70"
      >
        <p className="mb-2 font-mono text-sm text-slate-500 dark:text-slate-400">// focus</p>
        <p className="text-base leading-8 text-slate-800 dark:text-slate-200">
          I enjoy turning ideas into polished, practical products by blending thoughtful UI design,
          reliable backend systems, and a clear product mindset.
        </p>
      </motion.div>

      <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2 mb-8">
        <span className="text-sm text-slate-400">Outside of code:</span>
        {INTERESTS.map((interest) => (
          <span
            key={interest}
            className="text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
          >
            {interest}
          </span>
        ))}
      </motion.div>

    </motion.div>
  );
};

export default About;
