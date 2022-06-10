import React, { useState } from 'react';
import {  Link } from "react-router-dom";
import './styles/Navbar.css';
import { IoMdReorder } from "react-icons/io";
import Logo from "./images/DSC_4857.jpg";

const Navbar= () =>{

    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };

    return (
    <div className="Navbar">
        <div className='leftSide' id={openLinks ? "open" : "close"}>
            <img src={Logo} />
            <div className="hiddenLinks">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/prices">Prices</Link>
            </div>
        </div>
        <div className='rightSide'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/prices">Prices</Link>
            <button onClick={toggleNavbar}>
                <IoMdReorder />
            </button>
        </div>
    </div>
    );
}

export default Navbar;