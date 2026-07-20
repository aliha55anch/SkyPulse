import React from 'react'
import { WiDaySunny, WiDayCloudy, WiCloud, WiNightAltCloudy } from 'react-icons/wi'

function TodaysForecast() {
  const hours = [
    { time: '6:00 AM', icon: WiCloud, temp: '25°' },
    { time: '9:00 AM', icon: WiDayCloudy, temp: '28°' },
    { time: '12:00 PM', icon: WiDaySunny, temp: '33°' },
    { time: '3:00 PM', icon: WiDaySunny, temp: '34°' },
    { time: '6:00 PM', icon: WiDaySunny, temp: '32°' },
    { time: '9:00 PM', icon: WiNightAltCloudy, temp: '30°' },
  ]

  return (
    <section className="w-full rounded-2xl border border-white/5 bg-slate-800/70 p-3.5 shadow-[0_12px_30px_rgba(0,0,0,0.22)] max-[620px]:p-3">
      <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-300">Today's Forecast</h3>

      <div className="grid grid-cols-3 gap-1 md:grid-cols-6">
        {hours.map((item, index) => {
          const Icon = item.icon

          return (
            <div
              key={item.time}
              className={`flex flex-col items-center gap-1 rounded-xl px-1 py-1 text-center ${index !== hours.length - 1 ? 'md:border-r md:border-white/5' : ''}`}
            >
              <p className="text-[11px] font-bold uppercase tracking-wide text-slate-300">{item.time}</p>
              <Icon className="text-2xl text-amber-300" />
              <p className="text-lg font-extrabold leading-none text-white">{item.temp}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default TodaysForecast
