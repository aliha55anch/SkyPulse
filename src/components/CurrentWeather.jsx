import React from "react";
import { getWeatherInfo } from "../utils/weatherCodes";

function CurrentWeather({ weather, darkMode }) {
  if (!weather) {
    return (
      <section className={`w-full rounded-2xl border ${darkMode ? "border-white/5 bg-slate-800/70" : "border-slate-200 bg-white/70"} p-4 shadow-[0_12px_30px_rgba(0,0,0,0.22)] max-[640px]:p-3`}>
        <p className={`text-xs font-bold uppercase tracking-[0.18em] ${darkMode ? "text-slate-300" : "text-slate-500"}`}>Current Weather</p>
        <p className={`mt-2 text-sm font-semibold ${darkMode ? "text-slate-300" : "text-slate-500"}`}>Search for a city to see the weather.</p>
      </section>
    );
  }

  const { location, current } = weather;
  const info = getWeatherInfo(current.weather_code);
  const temp = Math.round(current.temperature_2m);
  const rainChance = current.precipitation_probability ?? 0;

  return (
    <section className={`w-full rounded-2xl border ${darkMode ? "border-white/5 bg-slate-800/70" : "border-slate-200 bg-white/70"} p-4 shadow-[0_12px_30px_rgba(0,0,0,0.22)] max-[640px]:p-3`}>
      <div className="flex items-start justify-between gap-4 max-[480px]:flex-wrap max-[480px]:gap-2">
        <div className="min-w-0">
          <p className={`text-xs font-bold uppercase tracking-[0.18em] ${darkMode ? "text-slate-300" : "text-slate-500"}`}>Current Weather</p>
          <div className="mt-2 flex flex-wrap items-end gap-x-3 gap-y-1">
            <h2 className={`text-3xl font-extrabold max-[640px]:text-2xl ${darkMode ? "text-white" : "text-slate-900"}`}>{location.name}</h2>
            <span className={`text-4xl font-extrabold leading-none max-[640px]:text-3xl ${darkMode ? "text-white" : "text-slate-900"}`}>{temp}°</span>
          </div>
          <p className={`mt-2 text-sm font-semibold ${darkMode ? "text-slate-300" : "text-slate-500"}`}>Chance of rain: {rainChance}%</p>
        </div>

        <div className={`shrink-0 rounded-full px-3 py-2 text-sm font-bold ${darkMode ? "bg-slate-900/70 text-slate-100" : "bg-slate-100 text-slate-700"}`}>
          <span className="inline-flex items-center gap-2">
            <img src={info.icon} alt={info.label} className="h-6 w-6" />
            {info.label}
          </span>
        </div>
      </div>
    </section>
  );
}

export default CurrentWeather;
