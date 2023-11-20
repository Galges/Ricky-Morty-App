import React, { useState } from "react";
import "../components/NavbarStyles.css"

function Navbar() {
  const [active, setActive] = useState("nav-menu");
  const [icon, setIcon] = useState("nav-toggler");
  const navToggle = () => {
    if (active === "nav-menu") {
      setActive("nav-menu nav-active");
    } else setActive("nav-menu");

    if (icon === "nav-toggler") {
      setIcon("nav-toggler toggle");
    } else setIcon("nav-toggler");
  };
  return (
    <nav className="nav">
      <a href="#" className="nav-logo">
        Rick & <span> Morty </span>
      </a>
      <ul className={active}>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav-link">
            Characters
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav-link">
            Location
          </a>
        </li>

      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;