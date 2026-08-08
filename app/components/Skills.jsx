"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "languages",
    items: ["JavaScript", "TypeScript"],
    dotColor: "bg-yellow-500 shadow-yellow-500/50",
  },
  {
    label: "frontend",
    items: ["React.js", "Redux"],
    dotColor: "bg-blue-500 shadow-blue-500/50",
  },
  {
    label: "backend",
    items: ["Node.js", "Express.js"],
    dotColor: "bg-green-500 shadow-green-500/50",
  },
  {
    label: "database",
    items: ["MongoDB", "Mongoose", "PostgreSQL", "Prisma"],
    dotColor: "bg-purple-500 shadow-purple-500/50",
  },
];

const Skills = () => {
  return (
    <div className="space-y-6">
      {skillGroups.map((group, gIndex) => (
        <div key={group.label}>
          <p className="mb-2.5 font-mono text-[11px] uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500">
            // {group.label}
          </p>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item, index) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.35,
                  delay: gIndex * 0.1 + index * 0.05,
                }}
                whileHover={{ y: -2 }}
                className="group inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white/80 px-3.5 py-1.5 text-[13px] font-medium text-slate-600 shadow-sm transition-colors hover:border-slate-400 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-slate-100"
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full bg-slate-300 transition-all duration-200 group-hover:${group.dotColor} group-hover:shadow-[0_0_6px] dark:bg-slate-700`}
                />
                {item}
              </motion.span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
