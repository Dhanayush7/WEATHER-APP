export const getWeatherTheme = (weatherMain) => {
  switch (weatherMain.toLowerCase()) {
    case "clear":
      return "clear";

    case "clouds":
      return "clouds";

    case "rain":
    case "drizzle":
      return "rain";

    case "snow":
      return "snow";

    case "thunderstorm":
      return "storm";

    case "mist":
    case "fog":
    case "haze":
      return "mist";

    default:
      return "default";
  }
};