import styles from "./SunriseSunset.module.css";
import { WiSunrise, WiSunset } from "react-icons/wi";

function SunriseSunset({ weather }) {
  if (!weather) return null;

  const sunrise = new Date(weather.sys.sunrise * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const sunset = new Date(weather.sys.sunset * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <section className={styles.card}>
      <h2>Sun Cycle</h2>

      <div className={styles.row}>
        <div className={styles.item}>
          <WiSunrise className={styles.icon} />
          <h3>Sunrise</h3>
          <p>{sunrise}</p>
        </div>

        <div className={styles.line}></div>

        <div className={styles.item}>
          <WiSunset className={styles.icon} />
          <h3>Sunset</h3>
          <p>{sunset}</p>
        </div>
      </div>
    </section>
  );
}

export default SunriseSunset;