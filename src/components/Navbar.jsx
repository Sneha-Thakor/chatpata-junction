import "../css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        🍽️ Chatpata Junction
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#combo">Combos</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

    </nav>
  );
}

export default Navbar;
