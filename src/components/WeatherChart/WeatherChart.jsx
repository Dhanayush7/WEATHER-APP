import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import styles from "./WeatherChart.module.css";

function WeatherChart({ forecast }) {
  if (!forecast) return null;

  const data = forecast.list.slice(0, 8).map((item) => ({
    time: new Date(item.dt_txt).toLocaleTimeString([], {
      hour: "numeric",
    }),
    temp: Math.round(item.main.temp),
  }));

  return (
    <div className={styles.container}>
      <h2>Temperature Trend</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="temp"
            stroke="#4F8CFF"
            strokeWidth={4}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default WeatherChart;