import styles from "./Button.module.css";
import { FiMapPin } from "react-icons/fi";

const Button = () => {
  return (
    <button className={styles.button}>
      <FiMapPin />

      Use Current Location
    </button>
  );
};

export default Button;