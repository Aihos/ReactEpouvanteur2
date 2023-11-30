import { Link ,NavLink } from "react-router-dom";
import "../css/main.css";
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa"
    /* import "https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"; */
function Navbar() {
    return (
        <nav>
           <NavLink to="/"><div/></NavLink>
            <ul>
               
                <li><NavLink to="/Univers">Univers</NavLink></li>
                <li><NavLink to="/Personnage">Personnages</NavLink></li>
                <li><NavLink to="/Auteur">Auteur</NavLink></li>
                <li><NavLink to="/Histoire">Histoire</NavLink></li>
            </ul>
        </nav> 

      /*   <nav id="navigation">
    <div className="nav-content">
      <div className="toggle-btn">
        <i className='bx bx-plus'></i>
      </div>
      <span>
        <a href="./index.html"><i className='bx bxs-home'></i></a>
      </span>
      <span>
        <a href="./univers.html"><i className='bx bxs-map'></i></a>
      </span>
      <span>
        <a href="./histoire.html"><i className='bx bxs-book' ></i></a>
      </span>
      <span>
        <a href="./personnages.html"><i classNames='bx bxs-face' ></i></a>
      </span>
  
    </div>
  </nav> */
    );
}

export default Navbar;