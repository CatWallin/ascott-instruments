import React from "react";
import '.././index.css';
import portrait from '../images/DSC_4861.jpg';
  
const About = () => {
  return (
    <div class="page">
      <p></p>
      <h1>
        ABOUT ME
      </h1>
      <img src={portrait} alt="Portrait" height={700} width={500}></img>
    </div>
  );
};
  
export default About;