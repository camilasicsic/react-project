import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../Cart/CartWidget";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <Link to="/" className="navbar-title">
        HOME
      </Link>
      <div className="navbar-items">
        <Link to="/category/makeup" className="nav-link">
          MakeUp
        </Link>
        <Link to="/category/skincare" className="nav-link">
          SkinCare
        </Link>
        <Link to="/category/tools" className="nav-link">
          Tools
        </Link>
        <div className="space-nav">|</div>
        <CartWidget />
      </div>
    </nav>
  );
};

{
  /* <div className="nav-link">Maquillaje</div>
        <div className="nav-link">SkinCare</div>
        <div className="nav-link">Tools</div> */
}

export default Navbar;
