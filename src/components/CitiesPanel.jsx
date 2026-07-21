import { useState, useEffect } from "react";
import { searchCities } from "../services/weatherApi";

const POPULAR_CITIES = [
  "London", "New York", "Tokyo", "Paris", "Dubai",
  "Singapore", "Sydney", "Berlin", "Mumbai", "Toronto",
];

export default function CitiesPanel({ onSelectCity }) {
  const [query, setQuery] = useState("");
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query.trim().length < 2) {
      setCities([]);
      return;
    }

    let active = true;
    setLoading(true);

    const timer = setTimeout(() => {
      searchCities(query)
        .then((results) => {
          if (active) setCities(results);
        })
        .catch(() => {
          if (active) setCities([]);
        })
        .finally(() => {
          if (active) setLoading(false);
        });
    }, 400);

    return () => {
      active = false;
      clearTimeout(timer);
    };
  }, [query]);

  const displayCities = query.trim().length >= 2 ? cities : [];

  return (
    <div className="flex h-full flex-col gap-2 overflow-hidden">
      <div className="flex h-9 items-center rounded-lg border border-white/5 bg-slate-800/80 px-2">
        <input
          className="min-w-0 flex-1 bg-transparent text-xs font-semibold text-white outline-none placeholder:text-slate-400"
          type="text"
          placeholder="Search city..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {loading && (
          <span className="ml-1 h-3 w-3 shrink-0 animate-spin rounded-full border-2 border-slate-400 border-t-transparent" />
        )}
      </div>

      <div className="flex min-h-0 flex-1 flex-col gap-0.5 overflow-y-auto">
        {query.trim().length < 2 && (
          <>
            <p className="mb-1 px-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Popular
            </p>
            {POPULAR_CITIES.map((city) => (
              <button
                key={city}
                onClick={() => onSelectCity(city)}
                className="w-full rounded-lg px-2 py-1.5 text-left text-xs font-semibold text-slate-300 transition hover:bg-slate-700 hover:text-white"
              >
                {city}
              </button>
            ))}
          </>
        )}

        {displayCities.length > 0 && (
          <>
            <p className="mb-1 px-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Results
            </p>
            {displayCities.map((city) => (
              <button
                key={city.id}
                onClick={() => onSelectCity(city)}
                className="w-full rounded-lg px-2 py-1.5 text-left text-xs font-semibold text-slate-300 transition hover:bg-slate-700 hover:text-white"
              >
                {city.name}
                <span className="ml-1 text-[10px] text-slate-500">
                  {[city.region, city.country].filter(Boolean).join(", ")}
                </span>
              </button>
            ))}
          </>
        )}

        {query.trim().length >= 2 && displayCities.length === 0 && !loading && (
          <p className="px-2 py-3 text-xs font-semibold text-slate-500">
            No cities found.
          </p>
        )}
      </div>
    </div>
  );
}
