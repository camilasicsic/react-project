import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "../Cart/CartWidget";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <NavLink to="/" className="navbar-title">
        HOME
      </NavLink>
      <div className="navbar-items">
        <NavLink to="/category/makeup" className="nav-link">
          MakeUp
        </NavLink>
        <NavLink to="/category/skincare" className="nav-link">
          SkinCare
        </NavLink>
        <NavLink to="/category/tools" className="nav-link">
          Tools
        </NavLink>
        <div className="space-nav">|</div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
