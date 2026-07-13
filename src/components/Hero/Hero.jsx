import styles from "./Hero.module.css";

function Hero({ weather }) {
  return (
    <div className={styles.hero}>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
        alt={weather.weather[0].description}
      />

      <h1>{weather.name}</h1>

      <h2>{Math.round(weather.main.temp)}°</h2>

      <p>{weather.weather[0].description}</p>

      <span>
        Feels Like {Math.round(weather.main.feels_like)}°
      </span>
    </div>
  );
}

export default Hero;