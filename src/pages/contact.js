import React from "react";
import Image from '../images/DSC_4840.jpg';
import '.././App.css';
import "../styles/Contact.css";
import { BsInstagram } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
  
const Contact = () => {
  return (
    <div class="contact">
      <div className="contactLeft">
        <img src={Image} alt="contactPic" height={700} width={500}></img>
      </div>
      <div className="contactRight">
        <html>
          <div>
            <h1>Let's get in touch!</h1>
            <div className="socialMedia">
              <div>
                <a href="http://www.instagram.com/ascottinstruments/">
                  <button>
                    <BsInstagram />
                    <text> @ascottinstruments </text>
                  </button>
                </a>
              </div>
              <div>
                <a href="giotariseal0812@gmail.com">
                  <button>
                    <MdOutlineEmail />
                    <text> giotariseal0812@gmail.com </text>
                  </button>
                </a>
              </div>
              <div></div>
                <a href="https://reverb.com/shop/aarons-gear-garage-908#">
                  <button>
                    <CgWebsite />
                    <text> Reverb Shop </text>
                  </button>
                </a>
              </div>
          </div>
          <head>
            <title>Contact Me</title>
          </head>
          <body>
            <form id="contactForm" className="form">
              <label>Name</label>
              <input type ="text" name="name" placeholder="John Smith"></input>
              <label>Email</label>
              <input type ="email" name="email" placeholder="email@gmail.com"></input>
              <label>Message</label>
              <textarea type="message" placeholder="enter a message"></textarea>
              <button type="submit" value="Send">Send</button>
            </form>
          </body>
        </html>
      </div>
    </div>
  );
};
  
export default Contact;