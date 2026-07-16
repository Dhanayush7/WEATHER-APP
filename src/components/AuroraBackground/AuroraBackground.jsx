import "./AuroraBackground.css";

function AuroraBackground({ weather }) {
  const condition = weather?.weather?.[0]?.main?.toLowerCase() || "default";

  return (
    <div className={`aurora-container ${condition}`}>
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>

      {condition === "rain" && <div className="rain"></div>}
      {condition === "snow" && <div className="snow"></div>}
      {condition === "thunderstorm" && <div className="lightning"></div>}
    </div>
  );
}

export default AuroraBackground;