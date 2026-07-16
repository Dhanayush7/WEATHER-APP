import "./App.css";
import { useState } from "react";

import Loader from "./components/Loader/Loader";
import WeatherDashboard from "./components/WeatherDashboard/WeatherDashboard";
import AuroraBackground from "./components/AuroraBackground/AuroraBackground";
import Landing from "./components/Landing/Landing";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Skeleton from "./components/Skeleton/Skeleton";
import {
  getCurrentWeather,
  getHourlyForecast,
} from "./services/weatherService";

function App() {
  const [weatherData, setWeatherData] = useState({
    current: null,
    forecast: null,
    loading: false,
    error: null,
  });

  const [recentSearches, setRecentSearches] = useState(() => {
    return JSON.parse(localStorage.getItem("recentSearches")) || [];
  });

  const searchCity = async (city) => {
    try {
      setWeatherData((prev) => ({
        ...prev,
        loading: true,
        error: null,
      }));

      const current = await getCurrentWeather(city);
      const forecast = await getHourlyForecast(city);

      // Save recent searches
      setRecentSearches((prev) => {
        const updated = [
          city,
          ...prev.filter(
            (c) => c.toLowerCase() !== city.toLowerCase()
          ),
        ].slice(0, 5);

        localStorage.setItem(
          "recentSearches",
          JSON.stringify(updated)
        );

        return updated;
      });

      // Update weather
      setWeatherData({
        current,
        forecast,
        loading: false,
        error: null,
      });
    } catch (err) {
      setWeatherData((prev) => ({
        ...prev,
        loading: false,
        error: err.message,
      }));
    }
  };

  const hasWeatherData = Boolean(weatherData.current);

  if (weatherData.loading) {
  return (
    <>
      <AuroraBackground weather={weatherData.current} />

      <main className="app">
        <Skeleton />
      </main>
    </>
  );
}

  return (
    <>
      <AuroraBackground weather={weatherData.current} />

      <main className="app">
        {hasWeatherData ? (
          <ErrorBoundary>
            <WeatherDashboard
              data={weatherData}
              onSearchCity={searchCity}
              recentSearches={recentSearches}
            />
          </ErrorBoundary>
        ) : (
          <>
            <Landing onSearch={searchCity} />

            {weatherData.error && (
              <p
                style={{
                  color: "#ffb4b4",
                  textAlign: "center",
                  marginTop: "20px",
                }}
              >
                {weatherData.error}
              </p>
            )}
          </>
        )}
      </main>
    </>
  );
}

export default App;