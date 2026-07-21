import React from 'react'
import { getWeatherInfo } from '../utils/weatherCodes'

const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

function formatDay(dateString) {
  const date = new Date(dateString + 'T00:00:00')
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const diff = date.getTime() - today.getTime()
  if (diff === 0) return 'Today'
  if (diff === 86400000) return 'Tmrw'
  return DAY_NAMES[date.getDay()]
}

function RightSidebar({ weather, darkMode }) {
  if (!weather) {
    return (
      <aside className={`min-h-0 w-full overflow-hidden rounded-2xl border ${darkMode ? "border-white/5 bg-slate-800/70" : "border-slate-200 bg-white/70"} p-3.5 shadow-[0_12px_30px_rgba(0,0,0,0.22)] max-[640px]:p-3`}>
        <h3 className={`mb-2 text-xs font-bold uppercase tracking-[0.18em] ${darkMode ? "text-slate-300" : "text-slate-500"}`}>7-Day Forecast</h3>
        <p className={`text-sm font-semibold ${darkMode ? "text-slate-300" : "text-slate-500"}`}>No data yet.</p>
      </aside>
    )
  }

  const { daily } = weather
  const forecast = daily.time.map((date, i) => {
    const info = getWeatherInfo(daily.weather_code[i])
    return {
      day: formatDay(date),
      icon: info.icon,
      label: info.label,
      high: `${Math.round(daily.temperature_2m_max[i])}°`,
      low: `${Math.round(daily.temperature_2m_min[i])}°`,
    }
  })

  return (
    <aside className={`min-h-0 w-full overflow-hidden rounded-2xl border ${darkMode ? "border-white/5 bg-slate-800/70" : "border-slate-200 bg-white/70"} p-3.5 shadow-[0_12px_30px_rgba(0,0,0,0.22)] max-[640px]:p-3`}>
      <h3 className={`mb-2 text-xs font-bold uppercase tracking-[0.18em] ${darkMode ? "text-slate-300" : "text-slate-500"}`}>7-Day Forecast</h3>

      {/* Desktop: vertical 7-row grid */}
      <div className="hidden h-[calc(100%-24px)] grid-rows-7 sm:grid">
        {forecast.map((item, index) => (
          <div
            key={item.day + index}
            className={`flex min-h-0 items-center gap-1 rounded-xl px-2.5 py-1.5 ${index !== forecast.length - 1 ? `border-b ${darkMode ? "border-white/5" : "border-slate-200"}` : ''}`}
          >
            <span className={`w-12 shrink-0 text-xs font-bold ${darkMode ? "text-slate-300" : "text-slate-500"}`}>{item.day}</span>
            <img src={item.icon} alt={item.label} className="h-5 w-5 shrink-0" />
            <span className={`min-w-0 flex-1 truncate text-xs font-bold ${darkMode ? "text-slate-100" : "text-slate-700"}`}>{item.label}</span>
            <span className={`shrink-0 text-xs font-bold ${darkMode ? "text-slate-200" : "text-slate-600"}`}>
              {item.high} <span className={darkMode ? "text-slate-500" : "text-slate-400"}>/ {item.low}</span>
            </span>
          </div>
        ))}
      </div>

      {/* Mobile: horizontal scroll */}
      <div className="flex gap-2 overflow-x-auto sm:hidden" style={{ scrollbarWidth: 'thin' }}>
        {forecast.map((item, index) => (
          <div
            key={item.day + index}
            className={`flex shrink-0 flex-col items-center gap-1 rounded-xl px-3 py-2 text-center ${darkMode ? "bg-slate-900/50" : "bg-slate-100"}`}
          >
            <span className={`text-[10px] font-bold ${darkMode ? "text-slate-400" : "text-slate-500"}`}>{item.day}</span>
            <img src={item.icon} alt={item.label} className="h-6 w-6" />
            <span className={`text-xs font-bold ${darkMode ? "text-slate-100" : "text-slate-700"}`}>{item.high}</span>
            <span className={`text-[10px] font-bold ${darkMode ? "text-slate-500" : "text-slate-400"}`}>{item.low}</span>
          </div>
        ))}
      </div>
    </aside>
  )
}

export default RightSidebar
