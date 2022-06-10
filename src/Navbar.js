import React from 'react';
import {  Link } from "react-router-dom";
import './Navbar.css';

const Navbar= () =>{
  return (
  <div className="Navbar">
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/contact">Contact</Link>
    </li>
    <li>
      <Link to="/gallery">Gallery</Link>
    </li>
    <li>
      <Link to="/prices">Prices</Link>
    </li>
  </div>
  );
}

export default Navbar;