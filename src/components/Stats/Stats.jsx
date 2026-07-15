import styles from "./Stats.module.css";
import { motion } from "framer-motion";

import {
  WiHumidity,
  WiStrongWind,
  WiBarometer,
  WiDaySunny,
} from "react-icons/wi";

function Stats({ weather }) {
  if (!weather || !weather.main) return null;

  const stats = [
    {
      icon: <WiHumidity />,
      label: "Humidity",
      value: `${weather.main.humidity}%`,
    },
    {
      icon: <WiStrongWind />,
      label: "Wind",
      value: `${weather.wind.speed} km/h`,
    },
    {
      icon: <WiBarometer />,
      label: "Pressure",
      value: `${weather.main.pressure} hPa`,
    },
    {
      icon: <WiDaySunny />,
      label: "Visibility",
      value: `${weather.visibility / 1000} km`,
    },
  ];

  return (
    <div className={styles.grid}>
      {stats.map((item, index) => (
        <motion.div
          className={styles.card}
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.15,
            duration: 0.5,
          }}
          whileHover={{
            y: -10,
            scale: 1.04,
          }}
        >
          <div className={styles.icon}>
            {item.icon}
          </div>

          <h3>{item.label}</h3>

          <p>{item.value}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default Stats;