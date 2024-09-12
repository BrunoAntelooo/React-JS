import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Drew House</h1>
      </div>
      <ul className="navbar-links">
        <li>Home</li>
        <li>Shop</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
