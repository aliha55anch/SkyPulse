import React from "react";
import { WiDaySunny } from "react-icons/wi";

function CurrentWeather() {
  return (
    <section className="w-full rounded-2xl border border-white/5 bg-slate-800/70 p-4 shadow-[0_12px_30px_rgba(0,0,0,0.22)] max-[620px]:p-3">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Current Weather</p>
          <div className="mt-2 flex flex-wrap items-end gap-x-3 gap-y-1">
            <h2 className="text-3xl font-semibold text-white max-[620px]:text-2xl">Islamabad</h2>
            <span className="text-4xl font-semibold leading-none text-white max-[620px]:text-3xl">31°</span>
          </div>
          <p className="mt-2 text-sm text-slate-400">Chance of rain: 0%</p>
        </div>

        <div className="shrink-0 rounded-full bg-slate-900/70 px-3 py-2 text-sm font-medium text-slate-200">
          <span className="inline-flex items-center gap-2">
            <WiDaySunny className="text-lg text-amber-300" />
            Sunny
          </span>
        </div>
      </div>
    </section>
  );
}

export default CurrentWeather;
