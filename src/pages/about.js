import React from "react";
import '.././App.css';
import portrait from '../images/DSC_4861.jpg';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about">
      <div className="aboutLeft">
        <div>
          <h1> ABOUT ME </h1>
          <text> 
            I am heckin'. My name is Aaron and I like to make instruments. My wife made this website. It is a little jank. 
            it will be better soon though
          </text>
        </div>
      </div>
      <div className="aboutRight">
        <img src={portrait} alt="aaron's portrait" height={700} width={500}></img>
      </div>
    </div>
  );
};
  
export default About;