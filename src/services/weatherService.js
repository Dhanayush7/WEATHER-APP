import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getCurrentWeather = async (city) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
    );

    return response.data;
  } catch (err) {
    console.error('getCurrentWeather error:', err?.response || err.message || err);
    const message = err?.response?.data?.message || err.message || 'Unable to fetch current weather';
    throw new Error(message);
  }
};

export const getHourlyForecast = async (city) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
    );

    return response.data;
  } catch (err) {
    console.error('getHourlyForecast error:', err?.response || err.message || err);
    const message = err?.response?.data?.message || err.message || 'Unable to fetch forecast';
    throw new Error(message);
  }
};