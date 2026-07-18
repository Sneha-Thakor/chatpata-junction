import { useState } from "react";
import "../css/Navbar.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav className="navbar">

      <div className="logo">
        🍽️ Chatpata Junction
      </div>

      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >

        <span></span>
        <span></span>
        <span></span>

      </div>

      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>

        <li>
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#menu"
            onClick={() => setMenuOpen(false)}
          >
            Menu
          </a>
        </li>

        <li>
          <a
            href="#combo"
            onClick={() => setMenuOpen(false)}
          >
            Combos
          </a>
        </li>

        <li>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </li>

      </ul>

    </nav>

  );
}

export default Navbar;
