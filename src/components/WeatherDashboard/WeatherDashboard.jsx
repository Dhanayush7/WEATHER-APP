import styles from "./WeatherDashboard.module.css";

import {
  WiHumidity,
  WiStrongWind,
  WiBarometer,
  WiDaySunny,
} from "react-icons/wi";

function WeatherDashboard({ data }) {
  if (!data) return null;

  return (
    <div className={styles.dashboard}>
      <div className={styles.hero}>
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
          alt=""
        />

        <h1>{data.name}</h1>

        <h2>{Math.round(data.main.temp)}°</h2>

        <p>{data.weather[0].description}</p>

        <span>Feels Like {Math.round(data.main.feels_like)}°</span>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <WiHumidity />

          <h3>Humidity</h3>

          <p>{data.main.humidity}%</p>
        </div>

        <div className={styles.card}>
          <WiStrongWind />

          <h3>Wind</h3>

          <p>{data.wind.speed} km/h</p>
        </div>

        <div className={styles.card}>
          <WiBarometer />

          <h3>Pressure</h3>

          <p>{data.main.pressure} hPa</p>
        </div>

        <div className={styles.card}>
          <WiDaySunny />

          <h3>Visibility</h3>

          <p>{data.visibility / 1000} km</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherDashboard;
import HourlyForecast from "../HourlyForecast/HourlyForecast";
<HourlyForecast
forecast={data.forecast}
/>