import React from 'react'
import { WiStrongWind, WiThermometer, WiRaindrops, WiDaySunny } from 'react-icons/wi'

function AirConditions() {
  return (
    <section className="min-h-0 w-full flex-1 rounded-2xl border border-white/5 bg-slate-800/70 p-3.5 shadow-[0_12px_30px_rgba(0,0,0,0.22)] max-[620px]:p-3">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-300">Air Conditions</h3>
      </div>

      <div className="grid grid-cols-2 gap-x-60 gap-y-10 max-[850px]:gap-x-8 max-[620px]:gap-x-4 max-[620px]:gap-y-5">
        <div className="flex items-start gap-3">
          <WiThermometer className="mt-0.5 text-xl text-slate-400" />
          <div>
            <p className="text-sm font-semibold text-slate-300">Real Feel</p>
            <p className="mt-1 text-xl font-extrabold leading-none text-white">30°</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <WiStrongWind className="mt-0.5 text-xl text-slate-400" />
          <div>
            <p className="text-sm font-semibold text-slate-300">Wind</p>
            <p className="mt-1 text-xl font-extrabold leading-none text-white">0.2 km/h</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <WiRaindrops className="mt-0.5 text-xl text-slate-400" />
          <div>
            <p className="text-sm font-semibold text-slate-300">Chance of rain</p>
            <p className="mt-1 text-xl font-extrabold leading-none text-white">0%</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <WiDaySunny className="mt-0.5 text-xl text-slate-400" />
          <div>
            <p className="text-sm font-semibold text-slate-300">UV Index</p>
            <p className="mt-1 text-xl font-extrabold leading-none text-white">3</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AirConditions
