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
  

  return (
    <>
      <AuroraBackground />

      <main className="app">
        {weatherData ? (
          <WeatherDashboard data={weatherData} />
        ) : (
          <Landing setWeatherData={setWeatherData} />
        )}
      </main>
    </>
  );
}

export default App;