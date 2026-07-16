import {
  WiHumidity,
  WiStrongWind,
  WiFog,
} from "react-icons/wi";

import styles from "./WeatherHighlights.module.css";

function WeatherHighlights({ weather }) {
  if (!weather) return null;

  const cards = [
    {
      icon: <WiHumidity />,
      title: "Humidity",
      value: `${weather.main.humidity}%`,
    },
    {
      icon: <WiStrongWind />,
      title: "Wind",
      value: `${weather.wind.speed} m/s`,
    },
    {
      icon: <WiFog />,
      title: "Visibility",
      value: `${weather.visibility / 1000} km`,
    },
  ];

  return (
    <div className={styles.grid}>
      {cards.map((card, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.icon}>{card.icon}</div>

          <h3>{card.value}</h3>

          <p>{card.title}</p>
        </div>
      ))}
    </div>
  );
}

export default WeatherHighlights;