import { motion } from "framer-motion";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import styles from "./HourlyForecast.module.css";

function HourlyForecast({ forecast }) {
  if (!forecast || !forecast.list) return null;

  return (
    <section className={styles.container}>
      <h2>24-Hour Forecast</h2>

      <div className={styles.scrollContainer}>
        {forecast.list.slice(0, 8).map((item, index) => (
          <motion.div
            className={styles.card}
            key={index}
            whileHover={{
              y: -8,
              scale: 1.05,
            }}
          >
            <p className={styles.time}>
              {new Date(item.dt_txt).toLocaleTimeString([], {
                hour: "numeric",
                minute: "2-digit",
              })}
            </p>

            <WeatherIcon
              condition={item.weather[0].main}
              size={70}
            />

            <h3>{Math.round(item.main.temp)}°</h3>

            
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default HourlyForecast;