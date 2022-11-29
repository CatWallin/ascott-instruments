import React from 'react'
import { IoEnterOutline } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import "./styles/Footer.css";

function Footer(){
    return (
        <div className="footer">
            <div className="socialMedia">
                <a href="http://www.instagram.com/ascottinstruments/">
                    <button>
                        <IoLogoInstagram />
                    </button>
                </a>
                <a href="ascottinstruments@gmail.com">
                    <button>
                        <IoMailOutline />
                    </button>
                </a>
                <a href="https://reverb.com/shop/aarons-gear-garage-908#">
                    <button>
                        <IoEnterOutline />
                    </button>
                </a>
            </div>
            <p> &copy; 2022 ascottinstruments.com</p>
        </div>
    )
}

export default Footer