import React from "react";
import BannerImage from '../images/DSC_4837.jpg';
import "../styles/Home.css";

const Home = () => {
    return (
      <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer" >
          <h1> A. Scott </h1>
          <h1> Instruments </h1>
          <p> Quality Crafted </p>
          </div>
      </div>
    );
  };
    
  export default Home;