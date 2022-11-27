import React from "react";
import '.././App.css';
import portrait from '../images/DSC_4861.jpg';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about">
      <div className="aboutLeft">
        <div>
          <h1> About </h1>
          <text> 
            Aaron Scott is a luthier and musician living in Southern California. 
            Aaron plays mandolin, guitar, bass, bagpipes, Irish bouzouki, as well as drums.
            <br></br>
            <br></br>
            As a kid he would take his mandolins and guitars apart to see how they worked. 
            He soon started making banjos out of cookie tins and 2x4s. 
            <br></br>
            <br></br>
            After many years of performing traditional Irish music in county Donegal and returning to the United States,
            Aaron worked for serveral major guitar manufacturers in a variety of capacities. 
            In his free time Aaron has would worked on projects, such as restoring vintage guitars and creating the prototypes that would lay the foundation for his instruments.
            <br></br>
            <br></br>
            In 2021 Aaron founded A. Scott Instruments to create one of a kind instruments with handcrafted quality at an affordable price.
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