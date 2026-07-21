import LeftSidebar from "./components/LeftSidebar";
import SearchBar from "./components/SearchBar";
import ThemeToggle from "./components/ThemeToggle";
import CurrentWeather from "./components/CurrentWeather";
import TodaysForecast from "./components/TodaysForecast";
import AirConditions from "./components/AirConditions";
import RightSidebar from "./components/RightSidebar";
import { useState, useEffect } from "react";
import { fetchWeatherByLocation, fetchWeatherByCity } from "./services/weatherApi";

import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  const [activePanel, setActivePanel] = useState(null);

  useEffect(() => {
    setQuery("Islamabad");
    setLoading(true);
    fetchWeatherByCity("Islamabad")
      .then((data) => setWeather(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  function handleToggleTheme() {
    setDarkMode((prev) => !prev);
  }

  async function handleSelectCity(city) {
    setLoading(true);
    setError("");
    try {
      let data;
      if (typeof city === "string") {
        data = await fetchWeatherByCity(city);
      } else {
        data = await fetchWeatherByLocation(city);
      }
      setWeather(data);
      if (typeof city === "string") {
        setQuery(city);
      } else {
        setQuery(city.name);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className={`app-page ${darkMode ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-900"}`}>
      <div className={`app-shell ${darkMode ? "bg-[#0b1220] text-white" : "bg-white text-slate-900"} shadow-[0_24px_80px_rgba(0,0,0,0.45)]`}>
        <LeftSidebar
          activePanel={activePanel}
          onPanelChange={setActivePanel}
          onSelectCity={handleSelectCity}
          darkMode={darkMode}
        />
        <div className="content-grid">
          <div className="primary-column">
            <div className="search-row">
              <div className="min-w-0 flex-1">
                <SearchBar
                  query={query}
                  onQueryChange={setQuery}
                  onSelectCity={handleSelectCity}
                  loading={loading}
                  darkMode={darkMode}
                />
              </div>
              <div className={`theme-control shrink-0 border ${darkMode ? "border-white/5 bg-slate-800/80" : "border-slate-200 bg-slate-200/80"} shadow-[0_10px_24px_rgba(0,0,0,0.2)]`}>
                <ThemeToggle darkMode={darkMode} onToggle={handleToggleTheme} />
              </div>
            </div>
            {error && (
              <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-200">
                {error}
              </p>
            )}
            <div className="weather-stack">
              <CurrentWeather weather={weather} darkMode={darkMode} />
              <TodaysForecast weather={weather} darkMode={darkMode} />
              <AirConditions weather={weather} darkMode={darkMode} />
            </div>
          </div>
          <RightSidebar weather={weather} darkMode={darkMode} />
        </div>
      </div>
    </main>
  );
}

export default App;
