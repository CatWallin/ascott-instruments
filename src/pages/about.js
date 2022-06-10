import React from "react";
import '.././App.css';
import portrait from '../images/DSC_4861.jpg';
  
const About = () => {
  return (
    <div class="page">
      <p></p>
      <h1>
        ABOUT ME
      </h1>
      <img src={portrait} alt="aaron's portrait" height={700} width={500}></img>
    </div>
  );
};
  
export default About;