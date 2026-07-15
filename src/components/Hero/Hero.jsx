import { motion } from "framer-motion";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import styles from "./Hero.module.css";

function Hero({ weather }) {
  if (!weather) return null;

  return (
    <motion.section
      className={styles.hero}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <motion.div
        animate={{
          rotate: [0, 8, -8, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      >
        <WeatherIcon
          condition={weather.weather[0].main}
          size={160}
        />
      </motion.div>

      <h1 className={styles.temp}>
        {Math.round(weather.main.temp)}°
      </h1>

      <h2>{weather.name}</h2>

      <p className={styles.condition}>
        {weather.weather[0].description}
      </p>

      <p className={styles.feels}>
        Feels like {Math.round(weather.main.feels_like)}°
      </p>
    </motion.section>
  );
}

export default Hero;