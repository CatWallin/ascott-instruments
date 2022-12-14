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
                <li><a class="external-link" href="/">Home</a></li> 
                <li><a class="external-link" href="/about">About</a></li> 
                <li><a class="external-link" href="/contact">Contact</a></li> 
                <li><a class="external-link" href="/gallery">Gallery</a></li> 
                <li><a class="external-link" href="/prices">Prices</a></li> 
            </ul>
        </div>
    </div>
    );
}

export default Navbar;