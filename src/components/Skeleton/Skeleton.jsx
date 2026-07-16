import styles from "./Skeleton.module.css";

function Skeleton() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}></div>

      <div className={styles.grid}>
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className={styles.card}></div>
        ))}
      </div>

      <div className={styles.forecast}></div>
    </div>
  );
}

export default Skeleton;