import { useEffect, useState } from "react";
import styles from "./FavoriteCities.module.css";
import { FaStar, FaTrash } from "react-icons/fa";

function FavoriteCities({ currentCity, onSelectCity }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  }, []);

  const addCurrentCity = () => {
    if (!currentCity) return;

    if (favorites.includes(currentCity)) return;

    const updated = [...favorites, currentCity];

    setFavorites(updated);

    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const removeCity = (city) => {
    const updated = favorites.filter((c) => c !== city);

    setFavorites(updated);

    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2>
          <FaStar /> Favorite Cities
        </h2>

        <button onClick={addCurrentCity}>
          + Add Current
        </button>
      </div>

      <div className={styles.list}>
        {favorites.length === 0 ? (
          <p>No favorite cities yet.</p>
        ) : (
          favorites.map((city) => (
            <div
              key={city}
              className={styles.card}
            >
              <span
                onClick={() => onSelectCity(city)}
              >
                ⭐ {city}
              </span>

              <FaTrash
                className={styles.delete}
                onClick={() => removeCity(city)}
              />
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default FavoriteCities;