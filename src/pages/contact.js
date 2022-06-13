import React from "react";
import Image from '../images/DSC_4840.jpg';
import '.././App.css';
  
const Contact = () => {
  return (
    <div class="contact">
      <div className="contactLeft">
        <img src={Image} alt="contactPic" height={700} width={500}></img>
      </div>
      <div className="contactRight">

      </div>
    </div>
  );
};
  
export default Contact;