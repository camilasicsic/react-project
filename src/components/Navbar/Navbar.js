import React from 'react';
import CartWidget from '../Cart/CartWidget';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar-container'>
      <div className='navbar-title'>Home</div>
      <div className='navbar-items'>
        <div className='nav-link'>Maquillaje</div>
        <div className='nav-link'>SkinCare</div>
        <div className='nav-link'>Accesorios</div>
        <div className='space-nav'>|</div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
