import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// Current weather by city
export const getCurrentWeather = async (city) => {
  const response = await axios.get(
    `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
  );

  return response.data;
};

// 5-day / 3-hour forecast
export const getHourlyForecast = async (city) => {
  const response = await axios.get(
    `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
  );

  return response.data;
};

export const getWeatherByCoords = async (lat, lon) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );

    return response.data;
  } catch (err) {
    console.error(
      "getWeatherByCoords error:",
      err?.response || err.message || err
    );

    const message =
      err?.response?.data?.message ||
      err.message ||
      "Unable to fetch weather by coordinates";

    throw new Error(message);
  }
};

console.log("Exports loaded");