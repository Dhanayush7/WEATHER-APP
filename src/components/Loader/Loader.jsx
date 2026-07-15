import "./Loader.css";

function Loader() {
  return (
    <div className="loader-container">
      <div className="weather-loader">
        🌤️
      </div>

      <h2>Fetching Weather...</h2>

      <p>Please wait a moment</p>
    </div>
  );
}

export default Loader;