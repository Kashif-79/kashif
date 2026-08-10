"use client";

import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";

const ThemeToggle = ({ theme, onToggle }) => {
  const isDark = theme === "dark";

  return (
    <motion.button
      type="button"
      onClick={onToggle}
      whileTap={{ scale: 0.97 }}
      aria-label={isDark ? "Switch to light mode" : "Switch to night mode"}
      className={`inline-flex h-8 w-8 lg:h-9 lg:w-9 items-center justify-center rounded-full border transition-all duration-300 ${
        isDark
          ? "border-cyan-400/40 bg-slate-900/70 text-cyan-200 hover:bg-slate-800"
          : "border-slate-300 bg-white/90 text-slate-700 hover:bg-slate-50"
      }`}
    >
      {isDark ? (
        <FiSun className="text-sm lg:text-base" />
      ) : (
        <FiMoon className="text-sm lg:text-base" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
