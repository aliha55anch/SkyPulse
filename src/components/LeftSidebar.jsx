import React from "react";
import { FiMapPin, FiMap } from "react-icons/fi";
import CitiesPanel from "./CitiesPanel";
import MapPanel from "./MapPanel";

export default function LeftSidebar({ activePanel, onPanelChange, onSelectCity, darkMode }) {
  return (
    <aside
      className={`flex shrink-0 flex-col rounded-2xl border transition-all duration-300 ${
        darkMode ? "border-white/5 bg-slate-900/95" : "border-slate-200 bg-slate-50"
      } shadow-[0_12px_30px_rgba(0,0,0,0.28)] max-[850px]:w-full max-[850px]:flex-row max-[850px]:items-center max-[850px]:gap-3 max-[850px]:px-3 max-[850px]:py-2 ${
        activePanel
          ? "w-56 px-3 py-3 max-[850px]:flex-col max-[850px]:items-stretch max-[850px]:min-h-[260px]"
          : "w-20 px-2.5 py-3 max-[850px]:py-2"
      }`}
    >
      <div
        className={`flex shrink-0 items-center gap-3 ${
          activePanel
            ? "flex-col gap-3 max-[850px]:flex-row max-[850px]:justify-start"
            : "mt-3 flex-col gap-10 max-[850px]:mt-0 max-[850px]:w-full max-[850px]:flex-row max-[850px]:justify-start"
        }`}
      >
        <img
          className={`rounded-xl ${activePanel ? "h-9 w-9" : "h-10 w-10"} max-[850px]:h-8 max-[850px]:w-8`}
          src="/logo.webp"
          alt="Weather app"
        />

        <button
          onClick={() => onPanelChange(activePanel === "cities" ? null : "cities")}
          className={`flex shrink-0 items-center justify-center rounded-xl text-xs font-bold transition ${
            activePanel === "cities"
              ? "bg-blue-600 text-white"
              : darkMode
                ? "bg-slate-800/80 text-slate-100 hover:bg-slate-700/80"
                : "bg-slate-200/80 text-slate-700 hover:bg-slate-300/80"
          } ${
            activePanel
              ? "h-10 w-full flex-row gap-1.5"
              : "h-12 w-full flex-col max-[850px]:h-10 max-[850px]:w-16 max-[850px]:flex-row max-[850px]:gap-1.5"
          }`}
        >
          <FiMapPin className="text-lg" />
          <span className="mt-1 max-[850px]:mt-0">Cities</span>
        </button>

        <button
          onClick={() => onPanelChange(activePanel === "map" ? null : "map")}
          className={`flex shrink-0 items-center justify-center rounded-xl text-xs font-bold transition ${
            activePanel === "map"
              ? "bg-blue-600 text-white"
              : darkMode
                ? "bg-slate-800/80 text-slate-100 hover:bg-slate-700/80"
                : "bg-slate-200/80 text-slate-700 hover:bg-slate-300/80"
          } ${
            activePanel
              ? "h-10 w-full flex-row gap-1.5"
              : "h-12 w-full flex-col max-[850px]:h-10 max-[850px]:w-16 max-[850px]:flex-row max-[850px]:gap-1.5"
          }`}
        >
          <FiMap className="text-lg" />
          <span className="mt-1 max-[850px]:mt-0">Maps</span>
        </button>
      </div>

      {activePanel && (
        <div className="mt-2 min-h-0 flex-1 overflow-hidden max-[850px]:mt-2 max-[850px]:min-h-[200px]">
          {activePanel === "cities" && (
            <CitiesPanel onSelectCity={onSelectCity} />
          )}
          {activePanel === "map" && (
            <MapPanel onSelectCity={onSelectCity} />
          )}
        </div>
      )}
    </aside>
  );
}
