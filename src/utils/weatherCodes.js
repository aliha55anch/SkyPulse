import sunclear from "../assets/sunclear.png";
import cloudySun from "../assets/cloudySun.png";
import cloudy from "../assets/cloudy.png";
import snow from "../assets/snow.png";
import thunder from "../assets/thunder.png";

// Open-Meteo returns a numeric WMO weather code. We map each code to a
// human label plus one of the five icons available in src/assets.
const WEATHER_CODES = {
  0: { label: "Clear sky", icon: sunclear },
  1: { label: "Mainly clear", icon: sunclear },
  2: { label: "Partly cloudy", icon: cloudySun },
  3: { label: "Overcast", icon: cloudy },

  45: { label: "Fog", icon: cloudy },
  48: { label: "Rime fog", icon: cloudy },

  51: { label: "Light drizzle", icon: cloudy },
  53: { label: "Drizzle", icon: cloudy },
  55: { label: "Heavy drizzle", icon: cloudy },
  56: { label: "Freezing drizzle", icon: cloudy },
  57: { label: "Freezing drizzle", icon: cloudy },

  61: { label: "Light rain", icon: cloudy },
  63: { label: "Rain", icon: cloudy },
  65: { label: "Heavy rain", icon: cloudy },
  66: { label: "Freezing rain", icon: cloudy },
  67: { label: "Freezing rain", icon: cloudy },

  71: { label: "Light snow", icon: snow },
  73: { label: "Snow", icon: snow },
  75: { label: "Heavy snow", icon: snow },
  77: { label: "Snow grains", icon: snow },

  80: { label: "Light showers", icon: cloudy },
  81: { label: "Showers", icon: cloudy },
  82: { label: "Heavy showers", icon: cloudy },
  85: { label: "Snow showers", icon: snow },
  86: { label: "Snow showers", icon: snow },

  95: { label: "Thunderstorm", icon: thunder },
  96: { label: "Thunderstorm with hail", icon: thunder },
  99: { label: "Thunderstorm with hail", icon: thunder },
};

const FALLBACK = { label: "Unknown", icon: cloudy };

export function getWeatherInfo(code) {
  return WEATHER_CODES[code] ?? FALLBACK;
}
