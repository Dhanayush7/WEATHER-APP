import styles from "./DateTime.module.css";

function DateTime() {
  const now = new Date();

  const date = now.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return <p className={styles.date}>{date}</p>;
}

export default DateTime;