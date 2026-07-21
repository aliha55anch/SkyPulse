import { useState } from "react";
import { FiMapPin, FiMap } from "react-icons/fi";
import CitiesPanel from "./CitiesPanel";
import MapPanel from "./MapPanel";

export default function LeftSidebar({ activePanel, onPanelChange, onSelectCity, darkMode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  function handlePanelChange(panel) {
    if (activePanel === panel) {
      onPanelChange(null);
      setMobileOpen(false);
    } else {
      onPanelChange(panel);
      setMobileOpen(true);
    }
  }

  function handleClose() {
    onPanelChange(null);
    setMobileOpen(false);
  }

  const buttonBase = `flex items-center justify-center rounded-xl text-xs font-bold transition`;
  const buttonActive = (panel) =>
    activePanel === panel
      ? "bg-blue-600 text-white"
      : darkMode
        ? "bg-slate-800/80 text-slate-100 hover:bg-slate-700/80"
        : "bg-slate-200/80 text-slate-700 hover:bg-slate-300/80";

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className={`hidden shrink-0 flex-col rounded-2xl border transition-all duration-300 sm:flex ${
          darkMode ? "border-white/5 bg-slate-900/95" : "border-slate-200 bg-slate-50"
        } shadow-[0_12px_30px_rgba(0,0,0,0.28)] ${
          activePanel ? "w-56 px-3 py-3" : "w-20 px-2.5 py-3"
        }`}
      >
        <div
          className={`flex shrink-0 items-center gap-3 ${
            activePanel ? "flex-col gap-3" : "mt-3 flex-col gap-10"
          }`}
        >
          <img
            className={`rounded-xl ${activePanel ? "h-9 w-9" : "h-10 w-10"}`}
            src="/logo.webp"
            alt="Weather app"
          />

          <button
            onClick={() => handlePanelChange("cities")}
            className={`${buttonBase} ${buttonActive("cities")} ${
              activePanel ? "h-10 w-full flex-row gap-1.5" : "h-12 w-full flex-col"
            }`}
          >
            <FiMapPin className="text-lg" />
            {activePanel && <span>Cities</span>}
            {!activePanel && <span className="mt-1">Cities</span>}
          </button>

          <button
            onClick={() => handlePanelChange("map")}
            className={`${buttonBase} ${buttonActive("map")} ${
              activePanel ? "h-10 w-full flex-row gap-1.5" : "h-12 w-full flex-col"
            }`}
          >
            <FiMap className="text-lg" />
            {activePanel && <span>Maps</span>}
            {!activePanel && <span className="mt-1">Maps</span>}
          </button>
        </div>

        {activePanel && (
          <div className="mt-2 min-h-0 flex-1 overflow-hidden">
            {activePanel === "cities" && <CitiesPanel onSelectCity={onSelectCity} />}
            {activePanel === "map" && <MapPanel onSelectCity={onSelectCity} />}
          </div>
        )}
      </aside>

      {/* Mobile: sticky top bar */}
      <div className="sm:hidden">
        <div
          className={`flex items-center gap-2 rounded-2xl border px-3 py-2 transition-all ${
            darkMode ? "border-white/5 bg-slate-900/95" : "border-slate-200 bg-slate-50"
          } shadow-[0_8px_20px_rgba(0,0,0,0.2)]`}
        >
          <img className="h-8 w-8 shrink-0 rounded-xl" src="/logo.webp" alt="Weather app" />

          <button
            onClick={() => handlePanelChange("cities")}
            className={`${buttonBase} h-9 flex-1 flex-row gap-1.5 ${buttonActive("cities")}`}
          >
            <FiMapPin className="text-base" />
            <span>Cities</span>
          </button>

          <button
            onClick={() => handlePanelChange("map")}
            className={`${buttonBase} h-9 flex-1 flex-row gap-1.5 ${buttonActive("map")}`}
          >
            <FiMap className="text-base" />
            <span>Maps</span>
          </button>

          {mobileOpen && (
            <button
              onClick={handleClose}
              className={`${buttonBase} h-9 w-9 shrink-0 flex-row ${
                darkMode ? "bg-slate-800/80 text-slate-400 hover:text-white" : "bg-slate-200/80 text-slate-500 hover:text-slate-900"
              }`}
            >
              ✕
            </button>
          )}
        </div>

        {mobileOpen && (
          <div
            className={`mt-2 h-[280px] overflow-hidden rounded-2xl border transition-all ${
              darkMode ? "border-white/5 bg-slate-900/95" : "border-slate-200 bg-slate-50"
            } shadow-[0_8px_20px_rgba(0,0,0,0.2)]`}
          >
            {activePanel === "cities" && <CitiesPanel onSelectCity={onSelectCity} />}
            {activePanel === "map" && <MapPanel onSelectCity={onSelectCity} />}
          </div>
        )}
      </div>
    </>
  );
}
