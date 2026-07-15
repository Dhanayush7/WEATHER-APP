import "./App.css";
import { useState } from "react";

import WeatherDashboard from "./components/WeatherDashboard/WeatherDashboard";
import AuroraBackground from "./components/AuroraBackground/AuroraBackground";
import Landing from "./components/Landing/Landing";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

function App() {
  const [weatherData, setWeatherData] = useState({
    current: null,
    forecast: null,
    loading: false,
    error: null,
  });

  const hasWeatherData = Boolean(weatherData.current);

  return (
    <>
      <AuroraBackground />

      <main className="app">
        {hasWeatherData ? (
          <ErrorBoundary>
            <WeatherDashboard data={weatherData} />
          </ErrorBoundary>
        ) : (
          <>
            <Landing setWeatherData={setWeatherData} />

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