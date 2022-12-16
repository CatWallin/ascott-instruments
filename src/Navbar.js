import React, { useState } from 'react';
import {  Link } from "react-router-dom";
import './styles/Navbar.css';
import { IoMdReorder } from "react-icons/io";
import LogoRed from "./images/LogoRed.webp";


const Navbar= () =>{

    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };

    return (
    <div className="Navbar">
        <div className='leftSide'>
            <img alt="A. Scott Instruments" src={LogoRed} />
        </div>
        <div className='rightSide'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/prices">Prices</Link>
            <button onClick={toggleNavbar}><span>
                <IoMdReorder />
                </span>
            </button>
        </div>
        <div className='dropdown' id={openLinks ? "open" : "close"}>
            <ul className="slide">
                <li><Link to="/" onClick={openLinks ? "open" : "close"}>Home</Link></li> 
                <li><Link to="/about" onClick={openLinks ? "open" : "close"}>About</Link></li> 
                <li><Link to="/contact" onClick={openLinks ? "open" : "close"}>Contact</Link></li> 
                <li><Link to="/gallery" onClick={openLinks ? "open" : "close"}>Gallery</Link></li> 
                <li><Link to="/prices" onClick={openLinks ? "open" : "close"}>Prices</Link></li> 
            </ul>
        </div>
    </div>
    );
}

export default Navbar;