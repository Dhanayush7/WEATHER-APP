import styles from "./WeatherDashboard.module.css";

import Hero from "../Hero/Hero";
import Stats from "../Stats/Stats";
import HourlyForecast from "../HourlyForecast/HourlyForecast";

function WeatherDashboard({ data }) {
  const themeKey =
    data && data.current && data.current.weather && data.current.weather[0]
      ? String(data.current.weather[0].main).toLowerCase()
      : "default";

  return (
    <div className={`${styles.dashboard} ${styles[themeKey]}`}>
      <Hero weather={data.current} />

      <Stats weather={data.current} />

      <HourlyForecast forecast={data.forecast} />
    </div>
  );
}

export default WeatherDashboard;