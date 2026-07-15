import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.spinner}></div>
      <h2>Fetching Weather...</h2>
      <p>Please wait a moment.</p>
    </div>
  );
}

export default Loader;