import React, { useState } from "react";
import "./Navbar.css";

import navbarbrand from "../../images/navbarbrand.svg";
import profileiamge from "../../images/profile.jpg"
import { NavLink } from "react-router-dom";

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  // var isActive = this.context.router.route.location.pathname === this.props.to;
  // var click = isActive ? 'active' : '';

  return (
    <nav className="navbar-head topnav">
      <NavLink to="/" className="syne-logo">
        <img src={navbarbrand} alt="logo" className="syne-logo-image" />
      </NavLink>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <NavLink to="/quotation" className="Nav__item__NavLink" >
          <li className="nav-item">Quote</li>
        </NavLink>
        <NavLink to="/jobs"  className="Nav__item__link" >
          <li className="nav-item">Jobs</li>
        </NavLink>
        <NavLink to="/invoice" className="Nav__item__link">
          <li className="nav-item">Invoice</li>
        </NavLink>
        <NavLink to="/products" className="Nav__item__link">
        <li className="nav-item">Product </li>
        </NavLink>
        <li class="nav-item dropdown">
          <div className="dropdown">
            Database <i className="fas fa-caret-down" />
            <div className="dropdown-content">
              <NavLink to="/companies" >Companies</NavLink>
              <NavLink to="/contacts">Contacts</NavLink>
            </div>
          </div>
        </li>
        <li className="nav-item dropdown">
          <div className="dropdown">
            Configuration <i className="fas fa-caret-down" />
            <div className="dropdown-content">
              <NavLink to="/quotationsettings">Quotation Settings</NavLink>
              <NavLink to="/quotationsettings">Jobs Settings</NavLink>
              <NavLink to="/quotationsettings">Invoice Settings</NavLink>
              <NavLink to="/productshowhidelistcolumns">Products</NavLink>
              <NavLink to="/databaseshowhidelistcolumns">Database</NavLink>
            </div>
          </div>
        </li>

        <li className="nav-item dropdown last-item mbs-0">
          <div className="dropdown">
            <i className="fas fa-caret-down fa-lg" />{" "}
            <i className="fas fa-cog fa-lg" />
            <div className="dropdown-content profile">
              <div className="d-flex">
              <div className="p-3 item">
                <img src={profileiamge} alt="logo" className="profileimage"></img>
              </div>
              <div className="p-3 item">
                <h3 className="text-white">Username</h3>
                <p>youremail@gmail.com</p>
              </div>
              </div>
              <div className="p-3">
              <a href="/">Manage My Accounts</a>
              <a href="/usermanagement">Manage User Accounts</a>
              <a href="/yourinformation">Business Settings</a>
              <a href="/"> <i class="fas fa-door-open"></i> Logout</a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
