import styles from "./Stats.module.css";
import {
  WiHumidity,
  WiStrongWind,
  WiBarometer,
  WiDaySunny,
} from "react-icons/wi";

function Stats({ weather }) {
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
        <div className={styles.card} key={index}>
          {item.icon}
          <h3>{item.label}</h3>
          <p>{item.value}</p>
        </div>
      ))}
    </div>
  );
}

export default Stats;