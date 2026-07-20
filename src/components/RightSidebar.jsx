import React from 'react'
import { WiCloud, WiDaySunny, WiRain, WiThunderstorm } from 'react-icons/wi'

function RightSidebar() {
  const forecast = [
    { day: 'Today', icon: WiDaySunny, label: 'Sunny', high: '36°', low: '22°' },
    { day: 'Tue', icon: WiDaySunny, label: 'Sunny', high: '37°', low: '21°' },
    { day: 'Wed', icon: WiDaySunny, label: 'Sunny', high: '37°', low: '21°' },
    { day: 'Thu', icon: WiCloud, label: 'Cloudy', high: '37°', low: '21°' },
    { day: 'Fri', icon: WiCloud, label: 'Cloudy', high: '37°', low: '21°' },
    { day: 'Sat', icon: WiRain, label: 'Rainy', high: '37°', low: '21°' },
    { day: 'Sun', icon: WiThunderstorm, label: 'Storm', high: '37°', low: '21°' },
  ]

  return (
    <aside className="min-h-0 w-full overflow-hidden rounded-2xl border border-white/5 bg-slate-800/70 p-3.5 shadow-[0_12px_30px_rgba(0,0,0,0.22)] max-[620px]:p-3">
      <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">7-Day Forecast</h3>

      <div className="grid h-[calc(100%-24px)] grid-rows-7">
        {forecast.map((item, index) => {
          const Icon = item.icon

          return (
            <div
              key={item.day}
              className={`flex min-h-0 items-center justify-between rounded-xl px-2 py-1 ${index !== forecast.length - 1 ? 'border-b border-white/5' : ''}`}
            >
              <span className="w-14 text-xs text-slate-400">{item.day}</span>
              <Icon className="text-2xl text-amber-300" />
              <span className="flex-1 pl-2 text-xs font-medium text-slate-200">{item.label}</span>
              <span className="text-xs text-slate-300">
                {item.high} <span className="text-slate-500">/ {item.low}</span>
              </span>
            </div>
          )
        })}
      </div>
    </aside>
  )
}

export default RightSidebar
