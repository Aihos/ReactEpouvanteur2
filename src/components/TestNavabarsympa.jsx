import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import 'boxicons/css/boxicons.min.css';
import "../css/navTest.css";

function TestNavabarsympa() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const nav = document.querySelector("nav");
    const toggleBtn = nav.querySelector(".toggle-btn");

    const onDrag = ({ movementY }) => {
      const navStyle = window.getComputedStyle(nav);
      const navTop = parseInt(navStyle.top);
      const navHeight = parseInt(navStyle.height);
      const windHeight = window.innerHeight;

      nav.style.top = navTop > 0 ? `${navTop + movementY}px` : "1px";
      if (navTop > windHeight - navHeight) {
        nav.style.top = `${windHeight - navHeight}px`;
      }
    };

    toggleBtn.addEventListener("click", () => {
      setMenuOpen(!menuOpen);
    });

    nav.addEventListener("mousedown", () => {
      nav.addEventListener("mousemove", onDrag);
    });

    nav.addEventListener("mouseup", () => {
      nav.removeEventListener("mousemove", onDrag);
    });

    nav.addEventListener("mouseleave", () => {
      nav.removeEventListener("mousemove", onDrag);
    });

    return () => {
      toggleBtn.removeEventListener("click", () => {
        setMenuOpen(!menuOpen);
      });

      nav.removeEventListener("mousedown", () => {
        nav.addEventListener("mousemove", onDrag);
      });

      nav.removeEventListener("mouseup", () => {
        nav.removeEventListener("mousemove", onDrag);
      });

      nav.removeEventListener("mouseleave", () => {
        nav.removeEventListener("mousemove", onDrag);
      });
    };
  }, [menuOpen]);

  return (
    <header>

<nav className={menuOpen ? "open" : ""}>
      <div className="nav-content">
        <div className="toggle-btn">
          <i className={menuOpen ? 'bx bx-minus' : 'bx bx-plus'}></i>
        </div>
        <NavLink to="/">
          <span style={{'--i': 1}}>
            <a href="./index.html"><i className='bx bxs-home'></i></a>
          </span>
        </NavLink>
        <NavLink to="/Univers" onClick={handleToggleMenu}>
          <span style={{'--i': 2}}>
            <a href="./univers.html"><i className='bx bxs-map'></i></a>
          </span>
        </NavLink>
        <NavLink to="/Histoire" onClick={handleToggleMenu}>
          <span style={{'--i': 3}}>
            <a href="./histoire.html"><i className='bx bxs-book' ></i></a>
          </span>
        </NavLink>
        <NavLink to="/Personnage" onClick={handleToggleMenu}>
          <span style={{'--i': 4}}>
            <a href="./personnages.html"><i className='bx bxs-face' ></i></a>
          </span>
        </NavLink>
      </div>
    </nav>
    </header>
   
  );
}

export default TestNavabarsympa;
