import React from "react";
import { FiMapPin, FiMap } from "react-icons/fi";

export default function LeftSidebar() {
  return (
    <aside className="flex h-full w-20 shrink-0 flex-col items-center gap-10 rounded-2xl border border-white/5 bg-slate-900/95 px-2.5 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.28)] max-[850px]:h-13 max-[850px]:w-full max-[850px]:flex-row max-[850px]:px-3 max-[850px]:py-1.5">
      <img className="h-10 w-10 rounded-xl" src="/logo.webp" alt="Weather app" />

      <div className="mt-3 flex w-full flex-1 flex-col items-stretch gap-10 max-[850px]:mt-0 max-[850px]:flex-row max-[850px]:justify-end">
        <button className="flex h-12 flex-col items-center justify-center rounded-xl bg-slate-800/80 text-xs font-bold text-slate-100 transition hover:bg-slate-700/80 max-[850px]:h-10 max-[850px]:w-16 max-[850px]:flex-row max-[850px]:gap-1.5">
          <FiMapPin className="text-lg text-slate-300" />
          <span className="mt-1 max-[850px]:mt-0">Cities</span>
        </button>
        <button className="flex h-12 flex-col items-center justify-center rounded-xl bg-slate-800/80 text-xs font-bold text-slate-100 transition hover:bg-slate-700/80 max-[850px]:h-10 max-[850px]:w-16 max-[850px]:flex-row max-[850px]:gap-1.5">
          <FiMap className="text-lg text-slate-300" />
          <span className="mt-1 max-[850px]:mt-0">Maps</span>
        </button>
      </div>
    </aside>
  );
}
