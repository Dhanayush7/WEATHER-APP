import "./Navbar.css";
import { FiMoon, FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <header className="navbar">

      <div className="logo">
        🌤
        <span>DhanCast</span>
      </div>

      <div className="nav-icons">
        <FiSearch />
        <FiMoon />
      </div>

    </header>
  );
};

export default Navbar;