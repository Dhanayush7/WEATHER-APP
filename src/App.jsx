import "./App.css";
import WeatherDashboard from "./components/WeatherDashboard/WeatherDashboard";
import AuroraBackground from "./components/AuroraBackground/AuroraBackground";
import Landing from "./components/Landing/Landing";
import { useState } from "react";
function App() {
  const [weatherData, setWeatherData] = useState({
  current: null,
  forecast: null,
  loading: false,
  error: null,
});
  

  const hasWeatherData = Boolean(weatherData?.current || weatherData?.forecast);

  return (
    <>
      <AuroraBackground />

      <main className="app">
        {hasWeatherData ? (
          <WeatherDashboard data={weatherData} />
        ) : (
          <div style={{ color: "white", padding: "2rem", textAlign: "center" }}>
            <Landing setWeatherData={setWeatherData} />
          </div>
        )}
      </main>
    </>
  );
}

export default App;