import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { getCitySuggestions } from "../../services/weatherService";
import styles from "./SearchBar.module.css";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (city.trim().length < 2) {
        setSuggestions([]);
        return;
      }

      const data = await getCitySuggestions(city);
      setSuggestions(data);
    };

    const timer = setTimeout(fetchSuggestions, 300);

    return () => clearTimeout(timer);
  }, [city]);

  const handleSearch = () => {
    if (!city.trim()) return;

    onSearch(city);
    setSuggestions([]);
    setCity("");
  };

  const handleSuggestionClick = (selectedCity) => {
    onSearch(selectedCity.name);

    setCity("");

    setSuggestions([]);
  };

  return (
    <div className={styles.searchWrapper}>
      <div className={styles.searchContainer}>
        <FiSearch className={styles.icon} />

        <input
          type="text"
          placeholder="Search any city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        />

        <button onClick={handleSearch}>
          Search
        </button>
      </div>

      {suggestions.length > 0 && (
        <div className={styles.suggestions}>
          {suggestions.map((item, index) => (
            <div
              key={index}
              className={styles.suggestion}
              onClick={() => handleSuggestionClick(item)}
            >
              📍 {item.name}
              {item.state ? `, ${item.state}` : ""}
              , {item.country}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;