const GEOCODING_URL = import.meta.env.VITE_GEOCODING_API_URL;

const FORECAST_URL = import.meta.env.VITE_FORECAST_API_URL;

async function fetchJson(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("The weather service could not complete the request.");
  }

  return response.json();
}

export async function searchCities(query) {
  const trimmed = query.trim();

  if (!trimmed) {
    return [];
  }

  const params = new URLSearchParams({
    name: trimmed,
    count: "8",
    language: "en",
    format: "json",
  });

  const data = await fetchJson(`${GEOCODING_URL}?${params}`);

  if (!data.results?.length) {
    return [];
  }

  return data.results.map((result) => ({
    id: result.id,
    name: result.name,
    region: result.admin1,
    country: result.country,
    latitude: result.latitude,
    longitude: result.longitude,
  }));
}

export async function getWeather(latitude, longitude) {
  if (latitude == null || longitude == null) {
    throw new Error("Coordinates are required to get weather.");
  }

  const params = new URLSearchParams({
    latitude: String(latitude),
    longitude: String(longitude),

    current: [
      "temperature_2m",
      "apparent_temperature",
      "relative_humidity_2m",
      "precipitation_probability",
      "weather_code",
      "wind_speed_10m",
    ].join(","),

    hourly: [
      "temperature_2m",
      "precipitation_probability",
      "weather_code",
    ].join(","),

    daily: [
      "weather_code",
      "temperature_2m_max",
      "temperature_2m_min",
      "precipitation_probability_max",
      "uv_index_max",
    ].join(","),

    timezone: "auto",
    forecast_days: "7",
  });

  return fetchJson(`${FORECAST_URL}?${params}`);
}

function buildWeather(location, forecast) {
  return {
    location,
    current: forecast.current,
    currentUnits: forecast.current_units,
    hourly: forecast.hourly,
    hourlyUnits: forecast.hourly_units,
    daily: forecast.daily,
    dailyUnits: forecast.daily_units,
    timezone: forecast.timezone,
  };
}

export async function fetchWeatherByLocation(location) {
  const forecast = await getWeather(location.latitude, location.longitude);
  return buildWeather(location, forecast);
}

export async function fetchWeatherByCity(city) {
  const trimmedCity = city.trim();

  if (!trimmedCity) {
    throw new Error("Please enter a city name.");
  }

  const params = new URLSearchParams({
    name: trimmedCity,
    count: "1",
    language: "en",
    format: "json",
  });

  const data = await fetchJson(`${GEOCODING_URL}?${params}`);

  if (!data.results?.length) {
    throw new Error(`No location found for "${trimmedCity}".`);
  }

  const location = data.results[0];

  const forecast = await getWeather(location.latitude, location.longitude);

  return buildWeather(
    {
      name: location.name,
      country: location.country,
      region: location.admin1,
      latitude: location.latitude,
      longitude: location.longitude,
      timezone: location.timezone,
    },
    forecast,
  );
}
