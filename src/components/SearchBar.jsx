import React from 'react'

export default function SearchBar() {
  return (
    <div className='w-full'>
      <div className='flex h-13 w-full items-center gap-2 rounded-xl border border-white/5 bg-slate-800/80 px-3 shadow-[0_10px_24px_rgba(0,0,0,0.2)]'>
        <input 
        className='min-w-0 flex-1 bg-transparent text-sm font-semibold text-white outline-none placeholder:font-semibold placeholder:text-slate-300'
        type="text" 
        placeholder="Search for cities"
        />
        <button className='flex h-9 items-center rounded-lg bg-blue-600 px-4 text-sm font-bold text-white transition hover:bg-blue-700 max-[420px]:px-3'>Search</button>
      </div>
    </div>
  )
}

