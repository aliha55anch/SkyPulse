const GEOCODING_URL =
  "https://geocoding-api.open-meteo.com/v1/search";

const FORECAST_URL =
  "https://api.open-meteo.com/v1/forecast";

async function fetchJson(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("The weather service could not complete the request.");
  }

  return response.json();
}

export async function searchCity(city) {
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

  return {
    name: location.name,
    country: location.country,
    region: location.admin1,
    latitude: location.latitude,
    longitude: location.longitude,
    timezone: location.timezone,
  };
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

export async function fetchWeatherByCity(city) {
  const location = await searchCity(city);

  const forecast = await getWeather(
    location.latitude,
    location.longitude,
  );

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