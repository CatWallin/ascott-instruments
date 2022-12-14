import React from "react";
import Image from '../images/contact.jpg';
import '.././App.css';
import "../styles/Contact.css";
import { IoEnterOutline } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";


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
                    <IoLogoInstagram />
                  </button>
                </a>
                <a href="http://www.instagram.com/ascottinstruments/">
                  <button>
                    <text> @ascottinstruments </text>
                  </button>
                </a>
              </div>
              <div>
                <a href="ascottinstruments@gmail.com">
                  <button>
                    <IoMailOutline />
                  </button>
                </a>
                <a href="ascottinstruments@gmail.com">
                  <button>
                    <text> ascottinstruments@gmail.com </text>
                  </button>
                </a>
              </div>
              <div></div>
                <a href="https://reverb.com/shop/aarons-gear-garage-908#">
                  <button>
                    <IoEnterOutline />
                  </button>
                </a>
                <a href="https://reverb.com/shop/aarons-gear-garage-908#">
                  <button>
                    <text> Reverb Shop </text>
                  </button>
                </a>
              </div>
          </div>
          <div className="contactMe">
            <head>
              <title>Contact Me</title>
            </head>
            <body>
              <form action="mailto:catherine.wallin@gmail.com" method="post" enctype="text/plain" id="contactForm" className="form">
                <label>Name</label>
                <input type ="text" name="name" placeholder="John Smith"></input>
                <label>Email</label>
                <input type ="email" name="email" placeholder="email@gmail.com"></input>
                <label>Message</label>
                <textarea type="message" placeholder="enter a message"></textarea>
                <button type="submit" value="submit">Send</button>
              </form>
            </body>
          </div>
        </html>
      </div>
    </div>
  );
};

export default Contact;