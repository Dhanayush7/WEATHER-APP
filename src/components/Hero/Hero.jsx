import styles from "./Hero.module.css";

import Greeting from "../Greeting/Greeting";
import DateTime from "../DateTime/DateTime";

function Hero({ weather }) {
  if (!weather || !weather.weather || !weather.main) return null;

  return (
    <div className={styles.hero}>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
        alt={weather.weather[0].description}
      />

      <h1>
        {weather.name}, {weather.sys.country}
      </h1>

      <h2>{Math.round(weather.main.temp)}°C</h2>

      <p className={styles.description}>
        {weather.weather[0].description}
      </p>

      <span className={styles.feels}>
        Feels Like {Math.round(weather.main.feels_like)}°C
      </span>

      <DateTime />

      <Greeting />
    </div>
  );
}

export default Hero;