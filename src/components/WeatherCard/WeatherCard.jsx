function WeatherCard({ weather }) {
  return (
    <div
      style={{
        color: "white",
        textAlign: "center",
        marginTop: "100px",
      }}
    >
      <h1>{weather.name}</h1>

      <h2>{Math.round(weather.main.temp)}°C</h2>

      <p>{weather.weather[0].description}</p>
    </div>
  );
}

export default WeatherCard;