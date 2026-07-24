<div align="center">

# SkyPulse Weather App

A modern, responsive weather dashboard built with React + Vite.

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

</div>

---

## Features

- **Real-time Weather Data** - Current conditions, hourly & 7-day forecasts via Open-Meteo API
- **City Search** - Debounced autocomplete search with geocoding
- **Interactive Map** - Click anywhere on the Leaflet/OSM map to get weather for that location
- **Dark / Light Mode** - Full theme toggle across all components
- **Popular Cities Panel** - Quick access to 10 major world cities
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Default City** - Loads Islamabad weather on startup

---

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | React 19 |
| Build Tool | Vite 8 |
| Styling | Tailwind CSS 4 |
| UI Library | MUI (Material UI) |
| Icons | React Icons |
| Map | Leaflet + React-Leaflet |
| Linter | OxLint |
| Weather API | Open-Meteo (free, no key) |
| Map Tiles | OpenStreetMap (free, no key) |
| Geocoding | Open-Meteo + Nominatim (free, no key) |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/weather-app.git

# Navigate to project directory
cd weather-app

# Install dependencies
npm install
```

### Environment Setup

Create `.env` file and add your API URLs. Take example from .env.example.

```bash
.env.example 
```


### Run the App

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

The app will be available at `http://localhost:5173`.

---

## Project Structure

```
weather-app/
├── public/
│   └── logo.webp
├── src/
│   ├── assets/
│   │   ├── cloudy.png
│   │   ├── cloudySun.png
│   │   ├── sunclear.png
│   │   ├── snow.png
│   │   └── thunder.png
│   ├── components/
│   │   ├── AirConditions.jsx      # Real feel, wind, rain, UV index
│   │   ├── CitiesPanel.jsx        # Popular cities list + search
│   │   ├── CurrentWeather.jsx     # Current temperature & condition
│   │   ├── LeftSidebar.jsx        # Nav sidebar with Cities & Map panels
│   │   ├── MapPanel.jsx           # Interactive Leaflet map
│   │   ├── RightSidebar.jsx       # 7-day forecast panel
│   │   ├── SearchBar.jsx          # Debounced city search
│   │   ├── ThemeToggle.jsx        # Dark/light mode switch
│   │   └── TodaysForecast.jsx     # Hourly forecast for today
│   ├── hooks/
│   │   └── useDebounce.js         # Debounce hook for search
│   ├── services/
│   │   └── weatherApi.js          # All API calls (geocoding, forecast)
│   ├── utils/
│   │   └── weatherCodes.js        # WMO weather code to icon/label mapping
│   ├── App.css                    # Layout & responsive styles
│   ├── App.jsx                    # Root component with state management
│   ├── index.css                  # Tailwind entry point
│   └── main.jsx                   # React DOM mount
├── .env.example                   # Environment variable template
├── .gitignore
├── .oxlintrc.json
├── index.html
├── package.json
└── vite.config.js
```

---

## API Reference

All APIs are **free** and require **no API keys**.

| API | Provider | Purpose |
|-----|----------|---------|
| Geocoding | Open-Meteo | Search cities by name, returns coordinates |
| Forecast | Open-Meteo | Current, hourly & 7-day weather data |
| Reverse Geocoding | Nominatim (OSM) | Convert map click coordinates to city name |
| Map Tiles | OpenStreetMap | Interactive map imagery |

---

## Responsive Breakpoints

| Breakpoint | Layout |
|-----------|--------|
| `> 850px` | Desktop - sidebar + 2-column grid |
| `641px - 850px` | Tablet - sidebar on top, 2-column grid |
| `<= 640px` | Mobile - sidebar as top bar, single column |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## Developed 👨‍💻 by: 

Muhammad Ali Hassan 

---

## ⭐ Support

If you like this project, consider giving it a star on GitHub ⭐
