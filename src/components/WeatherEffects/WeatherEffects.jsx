import styles from "./WeatherEffects.module.css";

function WeatherEffects({ weather }) {
  if (!weather) return null;

  const condition = weather.weather[0].main.toLowerCase();

  return (
    <div className={styles.effects}>
      {condition === "clear" && (
        <div className={styles.sun}></div>
      )}

      {condition === "clouds" && (
        <>
          <div className={styles.cloud}></div>
          <div className={styles.cloud2}></div>
        </>
      )}

      {condition === "rain" && (
        <div className={styles.rain}></div>
      )}

      {condition === "snow" && (
        <div className={styles.snow}></div>
      )}
    </div>
  );
}

export default WeatherEffects;