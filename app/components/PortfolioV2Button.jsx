"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiArrowUpRight, FiLayers, FiMonitor, FiX } from "react-icons/fi";

const V2_PORTFOLIO_URL = "https://kashif-portfolio-psi.vercel.app/";

export default function PortfolioV2Button() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        type="button"
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-slate-200/80 bg-white/95 text-slate-700 shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900/95 dark:text-slate-100"
        aria-label="Open my version 2 portfolio"
      >
        <FiLayers className="text-xl" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-end justify-center bg-slate-950/60 p-3 sm:items-center sm:p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ y: 24, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 18, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-3xl rounded-[28px] border border-slate-200/80 bg-white p-4 shadow-2xl dark:border-slate-800 dark:bg-slate-900 sm:p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-600">
                    Portfolio v2
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-slate-900 dark:text-slate-100">
                    Browse my newer portfolio inside this window
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                  aria-label="Close portfolio popup"
                >
                  <FiX className="text-lg" />
                </button>
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                View my alternate portfolio preview here, or open it directly in a new tab.
              </p>

              <div className="mt-4 overflow-hidden rounded-[22px] border border-slate-200/70 bg-slate-50 shadow-inner dark:border-slate-800 dark:bg-slate-950/70">
                <div className="flex items-center gap-2 border-b border-slate-200 bg-white/80 px-3 py-2 dark:border-slate-800 dark:bg-slate-900/80">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <div className="ml-2 flex items-center gap-2 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    <FiMonitor className="text-xs" />
                    Live preview
                  </div>
                </div>

                <iframe
                  title="Portfolio v2 preview"
                  src={V2_PORTFOLIO_URL}
                  className="h-[300px] w-full bg-white sm:h-[380px]"
                  loading="lazy"
                />
              </div>

              <a
                href={V2_PORTFOLIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-300 px-3.5 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                Visit v2 website
                <FiArrowUpRight className="text-sm" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
