import React, { useState } from "react";
import {
  getCurrentWeather,
  getHourlyForecast,
} from "../../services/weatherService";
import styles from "./Landing.module.css";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";

function Landing({ setWeatherData }) {
  const [error, setError] = useState(null);
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const handleSearch = async (city) => {
    setError(null);

    if (!API_KEY) {
      setError("Missing VITE_WEATHER_API_KEY. Create a .env file with your API key.");
      return;
    }

    try {
      setWeatherData({ current: null, forecast: null, loading: true, error: null });

      const current = await getCurrentWeather(city);
      const forecast = await getHourlyForecast(city);

      console.log("getCurrentWeather ->", current);
      console.log("getHourlyForecast ->", forecast);

      setWeatherData({ current, forecast, loading: false, error: null });
    } catch (err) {
      console.error("Weather fetch error:", err);
      setError("City not found or API error. Check console for details.");
      setWeatherData({ current: null, forecast: null, loading: false, error: "City not found" });
    }
  };

  return (
    <section className={styles.landing}>
      <Logo />
      <h2>Good Morning 👋</h2>
      <p>What city would you like to explore today?</p>
      <SearchBar onSearch={handleSearch} />
      {error && <p className={styles.error}>{error}</p>}
    </section>
  );
}

export default Landing;
