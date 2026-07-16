import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
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
        className={styles.iconContainer}
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
          size={170}
        />
      </motion.div>

      <h1 className={styles.temp}>
        {Math.round(weather.main.temp)}°
      </h1>

      <div className={styles.location}>
        <FaLocationDot />
        <span>
          {weather.name}, {weather.sys.country}
        </span>
      </div>

      <h2 className={styles.condition}>
        {weather.weather[0].main}
      </h2>

      <p className={styles.description}>
        {weather.weather[0].description}
      </p>

      <div className={styles.extraInfo}>
        <div>
          <span>H</span>
          <strong>{Math.round(weather.main.temp_max)}°</strong>
        </div>

        <div>
          <span>L</span>
          <strong>{Math.round(weather.main.temp_min)}°</strong>
        </div>

        <div>
          <span>Feels</span>
          <strong>{Math.round(weather.main.feels_like)}°</strong>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;