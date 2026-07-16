import styles from "./WeatherAlerts.module.css";

function WeatherAlerts({ weather }) {
  if (!weather) return null;

  const alerts = [];

  const temp = weather.main.temp;
  const wind = weather.wind.speed;
  const humidity = weather.main.humidity;
  const condition = weather.weather[0].main;

  if (condition === "Rain") {
    alerts.push({
      title: "🌧 Rain Expected",
      message: "Carry an umbrella today.",
    });
  }

  if (wind > 10) {
    alerts.push({
      title: "🌬 Strong Winds",
      message: `Wind Speed: ${Math.round(wind)} m/s`,
    });
  }

  if (temp > 35) {
    alerts.push({
      title: "🥵 Heat Alert",
      message: "Stay hydrated and avoid direct sunlight.",
    });
  }

  if (humidity > 85) {
    alerts.push({
      title: "💧 High Humidity",
      message: "High humidity may make it feel hotter.",
    });
  }

  if (alerts.length === 0) {
    alerts.push({
      title: "✅ Weather Looks Good",
      message: "No significant weather alerts.",
    });
  }

  return (
    <div className={styles.container}>
      <h2>Weather Alerts</h2>

      {alerts.map((alert, index) => (
        <div key={index} className={styles.card}>
          <h3>{alert.title}</h3>
          <p>{alert.message}</p>
        </div>
      ))}
    </div>
  );
}

export default WeatherAlerts;