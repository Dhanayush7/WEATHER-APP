import {
  WiDaySunny,
  WiCloud,
  WiRain,
  WiThunderstorm,
  WiSnow,
  WiFog,
  WiNightClear,
} from "react-icons/wi";

function WeatherIcon({ condition, size = 90 }) {
  const weather = condition.toLowerCase();

  switch (weather) {
    case "clear":
      return <WiDaySunny size={size} color="#FFD54F" />;

    case "clouds":
      return <WiCloud size={size} color="#E2E8F0" />;

    case "rain":
      return <WiRain size={size} color="#60A5FA" />;

    case "thunderstorm":
      return <WiThunderstorm size={size} color="#FACC15" />;

    case "snow":
      return <WiSnow size={size} color="white" />;

    case "mist":
    case "fog":
    case "haze":
      return <WiFog size={size} color="#CBD5E1" />;

    default:
      return <WiNightClear size={size} color="#E2E8F0" />;
  }
}

export default WeatherIcon;