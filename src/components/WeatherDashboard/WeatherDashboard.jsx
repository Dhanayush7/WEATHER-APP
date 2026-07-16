import styles from "./WeatherDashboard.module.css";
import WeatherChart from "../WeatherChart/WeatherChart";
import Hero from "../Hero/Hero";
import Stats from "../Stats/Stats";
import SunriseSunset from "../SunriseSunset/SunriseSunset";
import HourlyForecast from "../HourlyForecast/HourlyForecast";
import WeeklyForecast from "../WeeklyForecast/WeeklyForecast";
import AirQuality from "../AirQuality/AirQuality";
import FavoriteCities from "../FavoriteCities/FavoriteCities";
import RecentSearches from "../RecentSearches/RecentSearches";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import WeatherAlerts from "../WeatherAlerts/WeatherAlerts";


function WeatherDashboard({
  data,
  onSearchCity,
  recentSearches,
}) {
  if (!data || !data.current) return null;

  const themeKey = data.current.weather?.[0]?.main?.toLowerCase() || "default";

  return (
    <div className={`${styles.dashboard} ${styles[themeKey]}`}>
      <ThemeToggle />

      <Hero weather={data.current} />

      <Stats weather={data.current} />

      <SunriseSunset weather={data.current} />

      <AirQuality weather={data.current} />

      <WeatherAlerts alerts={data.current.alerts} />

      <HourlyForecast forecast={data.forecast} />

      <WeatherChart forecast={data.forecast} />

      <WeeklyForecast forecast={data.forecast} />

      <FavoriteCities
        currentCity={data.current.name}
        onSelectCity={onSearchCity}
      />

      <RecentSearches
        searches={recentSearches}
        onSelect={onSearchCity}
      />
    </div>
  );
}

export default WeatherDashboard;