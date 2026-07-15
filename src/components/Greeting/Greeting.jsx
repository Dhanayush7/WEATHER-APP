import styles from "./Greeting.module.css";

function Greeting() {
  const hour = new Date().getHours();

  let greeting = "";
  let emoji = "";

  if (hour < 12) {
    greeting = "Good Morning";
    emoji = "☀️";
  } else if (hour < 17) {
    greeting = "Good Afternoon";
    emoji = "🌤️";
  } else if (hour < 21) {
    greeting = "Good Evening";
    emoji = "🌇";
  } else {
    greeting = "Good Night";
    emoji = "🌙";
  }

  return (
    <div className={styles.greeting}>
      <span>{emoji}</span>
      <p>{greeting}</p>
    </div>
  );
}

export default Greeting;