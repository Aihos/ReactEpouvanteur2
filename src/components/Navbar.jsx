import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../css/main.css";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav id="navabarMenu" class="nav-mobile">
      <div className={`menu-icon ${menuOpen ? "open" : ""}`} onClick={handleToggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
      <NavLink to="/" onClick={handleToggleMenu}>
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/Univers" onClick={handleToggleMenu}>
          <li>Univers</li>
        </NavLink>
        <NavLink to="/Personnage" onClick={handleToggleMenu}>
          <li>Personnages</li>
        </NavLink>
        <NavLink to="/Auteur" onClick={handleToggleMenu}>
          <li>Auteur</li>
        </NavLink>
        <NavLink to="/Histoire" onClick={handleToggleMenu}>
          <li>Histoire</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
