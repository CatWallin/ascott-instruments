import React from 'react'
import { BsInstagram } from "react-icons/bs";
import "./styles/Footer.css";

function Footer(){
    return (
        <div className="footer">
            <div className="socialMedia">
                <a href="http://www.instagram.com/ascottinstruments/">
                    <button>
                        <BsInstagram />
                    </button>
                </a>
            </div>
            <p> &copy; 2021 ascottinstruments.com</p>
        </div>
    )
}

export default Footer