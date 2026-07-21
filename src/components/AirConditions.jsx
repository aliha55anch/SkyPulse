import { WiStrongWind, WiThermometer, WiRaindrops, WiDaySunny } from 'react-icons/wi'

function AirConditions({ weather, darkMode }) {
  if (!weather) {
    return (
      <section className={`min-h-0 w-full flex-1 rounded-2xl border ${darkMode ? "border-white/5 bg-slate-800/70" : "border-slate-200 bg-white/70"} p-3.5 shadow-[0_12px_30px_rgba(0,0,0,0.22)] max-[640px]:p-3`}>
        <h3 className={`text-xs font-bold uppercase tracking-[0.18em] ${darkMode ? "text-slate-300" : "text-slate-500"}`}>Air Conditions</h3>
        <p className={`mt-2 text-sm font-semibold ${darkMode ? "text-slate-300" : "text-slate-500"}`}>No data yet.</p>
      </section>
    )
  }

  const { current, daily } = weather
  const realFeel = Math.round(current.apparent_temperature)
  const wind = Math.round(current.wind_speed_10m * 10) / 10
  const rainChance = current.precipitation_probability ?? daily?.precipitation_probability_max?.[0] ?? 0
  const uvIndex = Math.round(daily?.uv_index_max?.[0] ?? 0)

  const items = [
    { icon: WiThermometer, label: 'Real Feel', value: `${realFeel}°` },
    { icon: WiStrongWind, label: 'Wind', value: `${wind} km/h` },
    { icon: WiRaindrops, label: 'Chance of rain', value: `${rainChance}%` },
    { icon: WiDaySunny, label: 'UV Index', value: `${uvIndex}` },
  ]

  return (
    <section className={`min-h-0 w-full flex-1 rounded-2xl border ${darkMode ? "border-white/5 bg-slate-800/70" : "border-slate-200 bg-white/70"} p-3.5 shadow-[0_12px_30px_rgba(0,0,0,0.22)] max-[640px]:p-3`}>
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`text-xs font-bold uppercase tracking-[0.18em] ${darkMode ? "text-slate-300" : "text-slate-500"}`}>Air Conditions</h3>
      </div>

      <div className="grid grid-cols-2 gap-x-8 gap-y-6 max-[640px]:gap-x-4 max-[640px]:gap-y-4">
        {items.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-start gap-3">
            <Icon className={`mt-0.5 text-xl ${darkMode ? "text-slate-400" : "text-slate-500"}`} />
            <div>
              <p className={`text-sm font-semibold ${darkMode ? "text-slate-300" : "text-slate-500"}`}>{label}</p>
              <p className={`mt-1 text-xl font-extrabold leading-none ${darkMode ? "text-white" : "text-slate-900"}`}>{value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AirConditions
