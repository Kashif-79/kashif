"use client";

import { useEffect, useState } from "react";

const useLiveClock = (timeZone) => {
  const [time, setTime] = useState(null);
  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone,
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [timeZone]);
  return time;
};

const StatusLine = () => {
  const time = useLiveClock("Asia/Dhaka");

  return (
    <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-slate-500 dark:text-slate-400">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
      </span>
      <span>Available for remote work</span>
      <span className="text-slate-300">·</span>
      <span>Sylhet, BD</span>
      <span className="text-slate-300">·</span>
      <span className="tabular-nums">{time ?? "--:--"}</span>
    </div>
  );
};

export default StatusLine;
