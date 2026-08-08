"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const Education = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <motion.div
        variants={fadeUp}
        whileHover={{ y: -2 }}
        className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/70 md:gap-5 md:p-6"
      >
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3 className="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-100 md:text-lg">
              Shahjalal University of Science and Technology
            </h3>
            <span className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
              In progress
            </span>
          </div>

          <p className="mb-3 text-sm text-slate-600 dark:text-slate-300 md:text-base">
            Bachelor of Science in Statistics
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-1 font-mono text-xs text-slate-500 dark:text-slate-400 md:text-sm">
            <span>2023 — 2027 (expected)</span>
            <span>CGPA 3.57 / 4.00</span>
            <span>Sylhet, Bangladesh</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Education;
