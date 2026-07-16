import React, { useState } from "react";
import styles from "./Landing.module.css";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";

function Landing({ onSearch }) {
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    try {
      setError(null);

      await onSearch(city);
    } catch (err) {
      console.error(err);
      setError("City not found.");
    }
  };

  return (
    <section className={styles.landing}>
      <Logo />

      <h2>Good Morning 👋</h2>

      <p>What city would you like to explore today?</p>

      <SearchBar onSearch={handleSearch} />

      {error && (
        <p className={styles.error}>
          {error}
        </p>
      )}
    </section>
  );
}

export default Landing;