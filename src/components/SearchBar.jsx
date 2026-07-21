import { useEffect, useRef, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { searchCities } from "../services/weatherApi";

export default function SearchBar({ query, onQueryChange, onSelectCity, loading, darkMode }) {
  const [suggestions, setSuggestions] = useState([]);
  const [open, setOpen] = useState(false);
  const [searching, setSearching] = useState(false);
  const debouncedQuery = useDebounce(query, 400);
  const containerRef = useRef(null);

  useEffect(() => {
    const term = debouncedQuery.trim();

    if (term.length < 2) {
      setSuggestions([]);
      return;
    }

    let active = true;
    setSearching(true);

    searchCities(term)
      .then((results) => {
        if (!active) return;
        setSuggestions(results);
        setOpen(true);
      })
      .catch(() => {
        if (active) setSuggestions([]);
      })
      .finally(() => {
        if (active) setSearching(false);
      });

    return () => {
      active = false;
    };
  }, [debouncedQuery]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSelect(city) {
    onQueryChange(city.name);
    setOpen(false);
    setSuggestions([]);
    onSelectCity(city);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (suggestions.length > 0) {
      handleSelect(suggestions[0]);
    }
  }

  return (
    <div className="relative w-full" ref={containerRef}>
      <form
        className={`flex h-13 w-full items-center gap-2 rounded-xl border ${darkMode ? "border-white/5 bg-slate-800/80" : "border-slate-200 bg-white/80"} px-3 shadow-[0_10px_24px_rgba(0,0,0,0.2)]`}
        onSubmit={handleSubmit}
      >
        <input
          className={`min-w-0 flex-1 bg-transparent text-sm font-semibold outline-none placeholder:font-semibold ${darkMode ? "text-white placeholder:text-slate-300" : "text-slate-900 placeholder:text-slate-400"}`}
          type="text"
          placeholder="Search for cities"
          value={query}
          autoComplete="off"
          onChange={(event) => onQueryChange(event.target.value)}
          onFocus={() => suggestions.length > 0 && setOpen(true)}
        />
        <button
          className="flex h-9 shrink-0 items-center justify-center rounded-lg bg-blue-600 px-3 text-xs font-bold text-white transition hover:bg-blue-700 sm:px-4 sm:text-sm"
          type="submit"
          disabled={loading}
        >
          <span className="hidden sm:inline">{loading ? "Searching..." : "Search"}</span>
          <span className="sm:hidden">{loading ? "..." : "Go"}</span>
        </button>
      </form>

      {open && (suggestions.length > 0 || searching) && (
        <ul className={`absolute z-20 mt-2 w-full overflow-hidden rounded-xl border ${darkMode ? "border-white/10 bg-slate-800" : "border-slate-200 bg-white"} shadow-[0_18px_40px_rgba(0,0,0,0.45)]`}>
          {searching && suggestions.length === 0 && (
            <li className={`px-4 py-3 text-sm font-semibold ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
              Searching…
            </li>
          )}
          {suggestions.map((city) => (
            <li key={city.id}>
              <button
                type="button"
                className={`flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-sm font-semibold transition ${darkMode ? "text-slate-100 hover:bg-slate-700" : "text-slate-700 hover:bg-slate-100"}`}
                onClick={() => handleSelect(city)}
              >
                <span className="truncate">{city.name}</span>
                <span className={`shrink-0 truncate text-xs font-medium ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                  {[city.region, city.country].filter(Boolean).join(", ")}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
