import styles from "./WeatherDashboard.module.css";
import WeatherEffects from "../WeatherEffects/WeatherEffects";
import Hero from "../Hero/Hero";
import Stats from "../Stats/Stats";
import SunriseSunset from "../SunriseSunset/SunriseSunset";
import HourlyForecast from "../HourlyForecast/HourlyForecast";

function WeatherDashboard({ data }) {
  const themeKey =
    data && data.current && data.current.weather && data.current.weather[0]
      ? String(data.current.weather[0].main).toLowerCase()
      : "default";

  return (
    <div className={`${styles.dashboard} ${styles[themeKey]}`}>
      {/* <WeatherEffects weather={data.current} /> */}
      <Hero weather={data.current} />

      
<Stats weather={data.current} />

<SunriseSunset weather={data.current} />

<HourlyForecast forecast={data.forecast} />

      
    </div>
  );
}

export default WeatherDashboard;