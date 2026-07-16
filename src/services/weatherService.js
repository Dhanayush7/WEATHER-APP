import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// Get current weather
export const getCurrentWeather = async (city) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
    );

    return response.data;
  } catch (err) {
    console.error(
      "getCurrentWeather error:",
      err?.response || err.message || err
    );

    const message =
      err?.response?.data?.message ||
      err.message ||
      "Unable to fetch current weather";

    throw new Error(message);
  }
};

// Get 5-day / 3-hour forecast
export const getHourlyForecast = async (city) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
    );

    return response.data;
  } catch (err) {
    console.error(
      "getHourlyForecast error:",
      err?.response || err.message || err
    );

    const message =
      err?.response?.data?.message ||
      err.message ||
      "Unable to fetch forecast";

    throw new Error(message);
  }
};

// Get city suggestions (Autocomplete)
export const getCitySuggestions = async (query) => {
  try {
    if (!query || query.trim().length < 2) return [];

    const response = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct`,
      {
        params: {
          q: query,
          limit: 5,
          appid: API_KEY,
        },
      }
    );

    return response.data;
  } catch (err) {
    console.error(
      "getCitySuggestions error:",
      err?.response || err.message || err
    );

    return [];
  }
};