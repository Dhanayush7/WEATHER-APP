import styles from "./WeeklyForecast.module.css";
import WeatherIcon from "../WeatherIcon/WeatherIcon";

function WeeklyForecast({ forecast }) {
  if (!forecast || !forecast.list) return null;

  // Pick one forecast per day (around noon)
  const dailyForecast = forecast.list.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );

  return (
    <section className={styles.container}>
      <h2>5-Day Forecast</h2>

      <div className={styles.grid}>
        {dailyForecast.map((day) => (
          <div className={styles.card} key={day.dt}>
            <h3>
              {new Date(day.dt_txt).toLocaleDateString([], {
                weekday: "short",
              })}
            </h3>

            <WeatherIcon
              condition={day.weather[0].main}
              size={60}
            />

            <p className={styles.temp}>
              {Math.round(day.main.temp)}°
            </p>

            <span>{day.weather[0].main}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WeeklyForecast;