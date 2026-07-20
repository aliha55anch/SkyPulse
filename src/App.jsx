import LeftSidebar from "./components/LeftSidebar"
import SearchBar from "./components/SearchBar"
import ThemeToggle from "./components/ThemeToggle"
import CurrentWeather from "./components/CurrentWeather"
import TodaysForecast from "./components/TodaysForecast"
import AirConditions from "./components/AirConditions"
import RightSidebar from "./components/RightSidebar"
import "./App.css"

function App() {

  return (
    <main className="app-page bg-slate-950 text-white">
      <div className="app-shell bg-[#0b1220] shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
        <LeftSidebar />
        <div className="content-grid">
          <div className="primary-column">
            <div className="search-row">
              <div className="min-w-0 flex-1">
                <SearchBar />
              </div>
              <div className="theme-control shrink-0 border border-white/5 bg-slate-800/80 shadow-[0_10px_24px_rgba(0,0,0,0.2)]">
                <ThemeToggle />
              </div>
            </div>
            <div className="weather-stack">
              <CurrentWeather />
              <TodaysForecast />
              <AirConditions />
            </div>
          </div>
          <RightSidebar />
        </div>
      </div>
    </main>
  )
}

export default App
