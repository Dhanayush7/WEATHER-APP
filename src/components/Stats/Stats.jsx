import { motion } from "framer-motion";
import {
  WiHumidity,
  WiStrongWind,
  WiBarometer,
  WiDaySunny,
} from "react-icons/wi";

import styles from "./Stats.module.css";

function Stats({ weather }) {
  if (!weather) return null;

  const cards = [
    {
      title: "Humidity",
      value: `${weather.main.humidity}%`,
      icon: <WiHumidity />,
    },
    {
      title: "Wind",
      value: `${weather.wind.speed} km/h`,
      icon: <WiStrongWind />,
    },
    {
      title: "Pressure",
      value: `${weather.main.pressure} hPa`,
      icon: <WiBarometer />,
    },
    {
      title: "Feels Like",
      value: `${Math.round(weather.main.feels_like)}°`,
      icon: <WiDaySunny />,
    },
  ];

  return (
    <section className={styles.grid}>
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className={styles.card}
          whileHover={{
            y: -10,
            scale: 1.05,
          }}
        >
          <div className={styles.icon}>{card.icon}</div>

          <h3>{card.title}</h3>

          <p>{card.value}</p>
        </motion.div>
      ))}
    </section>
  );
}

export default Stats;