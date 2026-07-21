import { useEffect, useState } from "react";

// Returns a copy of `value` that only updates after `delay` ms of no changes.
// Used to keep the city search from firing a request on every keystroke.
export function useDebounce(value, delay = 400) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}
