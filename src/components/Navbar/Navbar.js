import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { userSignOut } from "../../services/Firebase";
import CartWidget from "../Cart/CartWidget";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const signOut = () => {
    userSignOut();
    setUser(undefined)
    localStorage.removeItem('ecommerce-user');
    navigate("/signIn")
  };

  return (
    <>
      {user && (
        <button className="absolute-button" onClick={signOut} width='80px'>
          Sign out
        </button>
      )}
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
    </>
  );
};

export default Navbar;
