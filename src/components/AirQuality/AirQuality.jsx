import styles from "./AirQuality.module.css";

function AirQuality({ weather }) {
  if (!weather) return null;

  // Temporary demo value
  const aqi = 42;

  let status = "Good";
  let color = "#22c55e";

  if (aqi > 50) {
    status = "Moderate";
    color = "#eab308";
  }

  if (aqi > 100) {
    status = "Poor";
    color = "#ef4444";
  }

  return (
    <section className={styles.card}>
      <h2>Air Quality</h2>

      <div
        className={styles.circle}
        style={{ borderColor: color }}
      >
        <h1>{aqi}</h1>
      </div>

      <h3 style={{ color }}>{status}</h3>

      <p>Air quality is suitable for outdoor activities.</p>
    </section>
  );
}

export default AirQuality;