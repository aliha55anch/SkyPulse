import React from "react";
import { getWeatherInfo } from "../utils/weatherCodes";

function formatHour(isoString) {
  const hour = Number(isoString.slice(11, 13));
  const period = hour >= 12 ? "PM" : "AM";
  const display = hour % 12 === 0 ? 12 : hour % 12;
  return `${display}:00 ${period}`;
}

function TodaysForecast({ weather, darkMode }) {
  if (!weather) {
    return (
      <section className={`w-full rounded-2xl border ${darkMode ? "border-white/5 bg-slate-800/70" : "border-slate-200 bg-white/70"} p-3.5 shadow-[0_12px_30px_rgba(0,0,0,0.22)] max-[640px]:p-3`}>
        <h3 className={`mb-3 text-xs font-bold uppercase tracking-[0.18em] ${darkMode ? "text-slate-300" : "text-slate-500"}`}>Today's Forecast</h3>
        <p className={`text-sm font-semibold ${darkMode ? "text-slate-300" : "text-slate-500"}`}>No data yet.</p>
      </section>
    );
  }

  const { hourly, current } = weather;
  const startIndex = Math.max(hourly.time.indexOf(current.time), 0);
  const hours = hourly.time.slice(startIndex, startIndex + 6).map((time, i) => {
    const index = startIndex + i;
    return {
      time: formatHour(time),
      icon: getWeatherInfo(hourly.weather_code[index]).icon,
      temp: `${Math.round(hourly.temperature_2m[index])}°`,
    };
  });

  return (
    <section className={`w-full rounded-2xl border ${darkMode ? "border-white/5 bg-slate-800/70" : "border-slate-200 bg-white/70"} p-3.5 shadow-[0_12px_30px_rgba(0,0,0,0.22)] max-[640px]:p-3`}>
      <h3 className={`mb-3 text-xs font-bold uppercase tracking-[0.18em] ${darkMode ? "text-slate-300" : "text-slate-500"}`}>Today's Forecast</h3>

      <div className="grid grid-cols-3 gap-1 max-[640px]:grid-cols-2 max-[640px]:gap-1.5 sm:grid-cols-6">
        {hours.map((item, index) => (
          <div
            key={item.time}
            className={`flex flex-col items-center gap-1 rounded-xl px-1 py-1 text-center ${index !== hours.length - 1 ? `sm:border-r ${darkMode ? "sm:border-white/5" : "sm:border-slate-200"}` : ""}`}
          >
            <p className={`text-[11px] font-bold uppercase tracking-wide ${darkMode ? "text-slate-300" : "text-slate-500"}`}>{item.time}</p>
            <img src={item.icon} alt="" className="h-8 w-8" />
            <p className="text-lg font-extrabold leading-none text-white">{item.temp}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TodaysForecast;
