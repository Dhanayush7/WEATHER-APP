import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import styles from "./SearchBar.module.css";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim() === "") return;
    onSearch(city);
    setCity("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={styles.searchContainer}>
      <FiSearch className={styles.icon} />

      <input
        type="text"
        placeholder="Search any city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;