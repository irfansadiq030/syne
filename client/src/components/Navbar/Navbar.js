import React, { useState } from "react";
import "./Navbar.css";

import navbarbrand from "../../images/navbarbrand.svg";
import profileiamge from "../../images/profile.jpg"
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
        <Link to="/quotation" className="Nav__item__Link">
          <li className="nav-item">Quote</li>
        </Link>
        <Link to="/jobs" className="Nav__item__Link">
          <li className="nav-item">Jobs</li>
        </Link>
        <Link to="/invoice" className="Nav__item__Link">
          <li className="nav-item">Invoice</li>
        </Link>
        <Link to="/products" className="Nav__item__Link">
        <li className="nav-item">Product </li>
        </Link>
        <li class="nav-item dropdown">
          <div className="dropdown">
            Database <i className="fas fa-caret-down" />
            <div className="dropdown-content">
              <Link to="/companies">Companies</Link>
              <Link to="/contacts">Contacts</Link>
            </div>
          </div>
        </li>
        <li className="nav-item dropdown">
          <div className="dropdown">
            Configuration <i className="fas fa-caret-down" />
            <div className="dropdown-content">
              <a href="/quotationsettings">Quotation Settings</a>
              <a href="/">Jobs Settings</a>
              <a href="/">Invoice Settings</a>
              <a href="/">Products</a>
              <a href="/">Database</a>
            </div>
          </div>
        </li>

        <li className="nav-item dropdown setting-item">
          <div className="dropdown">
            <i className="fas fa-caret-down fa-lg" />{" "}
            <i className="fas fa-cog fa-lg" />
            <div className="dropdown-content">
              <div className="p-3 center">
                <img src={profileiamge} alt="logo" className="profileimage"></img>
                <h3>Username</h3>
                <p>youremail@gmail.com</p>
              </div>
              <a href="/">Manage My Accounts</a>
              <a href="/">Manage User Accounts</a>
              <a href="/">Business Settings</a>
              <a href="/"> <i class="fas fa-door-open    "></i> Logout</a>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
