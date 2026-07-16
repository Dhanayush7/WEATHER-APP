import styles from "./RecentSearches.module.css";

function RecentSearches({ searches, onSelect }) {
  if (!searches.length) return null;

  return (
    <div className={styles.container}>
      <h2>🕘 Recent Searches</h2>

      <div className={styles.list}>
        {searches.map((city, index) => (
          <button
            key={index}
            className={styles.item}
            onClick={() => onSelect(city)}
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
}

export default RecentSearches;