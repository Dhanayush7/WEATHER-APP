import styles from "./WeatherDashboard.module.css";

import Hero from "../Hero/Hero";
import Stats from "../Stats/Stats";
import HourlyForecast from "../HourlyForecast/HourlyForecast";

function WeatherDashboard({ data }) {
  return (
    <div className={styles.dashboard}>
      <Hero weather={data.current} />

      <Stats weather={data.current} />

      <HourlyForecast forecast={data.forecast} />
    </div>
  );
}

export default WeatherDashboard;