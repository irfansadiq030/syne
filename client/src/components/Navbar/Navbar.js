import React, { useState } from "react";
import "./Navbar.css";

import navbarbrand from "../../images/navbarbrand.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar-head">
      <Link to="/" className="syne-logo">
        <img src={navbarbrand} alt="logo" className="syne-logo-image" />
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">Quote</li>
        <li className="nav-item">Jobs</li>
        <li className="nav-item">Invoice</li>
        <li className="nav-item">Product </li>
        <li class="nav-item dropdown">
          <div className="dropdown">
            Database <i className="fas fa-caret-down" />
            <div className="dropdown-content">
              <a href="/">Database1</a>
              <a href="/">Database1</a>
              <a href="/">Database1</a>
            </div>
          </div>
        </li>
        <li className="nav-item dropdown">
          <div className="dropdown">
            Configuration <i className="fas fa-caret-down" />
            <div className="dropdown-content">
              <a href="/">Database1</a>
              <a href="/">Database1</a>
              <a href="/">Database1</a>
            </div>
          </div>
        </li>

        <li className="nav-item dropdown setting-item">
          <div className="dropdown">
            <i className="fas fa-caret-down fa-lg" />{" "}
            <i className="fas fa-cog fa-lg" />
            <div className="dropdown-content">
              <a href="/">Setting</a>
              <a href="/">Profile</a>
              <a href="/">Logout</a>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
