import styles from "./HourlyForecast.module.css";

function HourlyForecast({ forecast }) {
  if (!forecast || !forecast.list) return null;

  return (
    <div className={styles.container}>
      <h2>24-Hour Forecast</h2>

      <div className={styles.scrollContainer}>
        {forecast.list.slice(0, 8).map((item, index) => (
          <div className={styles.card} key={index}>
            <p>
              {new Date(item.dt_txt).toLocaleTimeString([], {
                hour: "numeric",
                minute: "2-digit",
              })}
            </p>

            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt={item.weather[0].description}
            />

            <h3>{Math.round(item.main.temp)}°</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HourlyForecast;