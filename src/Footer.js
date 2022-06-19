import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import "./styles/Footer.css";

function Footer(){
    return (
        <div className="footer">
            <div className="socialMedia">
                <instagram href="http://www.instagram.com/ascottinstruments/">
                    <button>
                        <FaInstagram />
                    </button>
                </instagram>
                <email href="ascottinstruments@gmail.com">
                    <button>
                        <MdOutlineEmail />
                    </button>
                </email>
                <reverb href="https://reverb.com/shop/aarons-gear-garage-908#">
                    <button>
                        <CgWebsite />
                    </button>
                </reverb>
            </div>
            <p> &copy; 2022 ascottinstruments.com</p>
        </div>
    )
}

export default Footer