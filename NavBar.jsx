import React from 'react';
import '../assets/styles/NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
    <div className="navbar"> 
      <ul>
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/cart">Cart</NavLink></li>
        <li><NavLink to="/">Logout</NavLink></li>
      </ul>
    </div>
        </>

  );
};

export default NavBar;
