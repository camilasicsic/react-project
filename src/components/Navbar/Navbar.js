import React from "react";
import CartWidget from "../Cart/CartWidget";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <a className="navbar-title" href="">
        Home
      </a>
      <div className="navbar-items">
        <a className="nav-link" href="">
          Libros
        </a>
        <a className="nav-link" href="">
          Electrodomesticos
        </a>
        <a className="nav-link" href="">
          Indumentaria
        </a>
        <div className="space-nav">|</div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
