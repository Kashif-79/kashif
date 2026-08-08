const SectionHeading = ({ index, title }) => (
  <div className="mb-8 flex items-center gap-3">
    <span className="font-mono text-sm font-semibold text-slate-500 dark:text-slate-400">{index}</span>
    <h2 className="whitespace-nowrap text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 md:text-2xl">
      {title}
    </h2>
    <span className="h-px flex-1 bg-gradient-to-r from-slate-300 to-transparent dark:from-slate-700" />
  </div>
);

export default SectionHeading;
