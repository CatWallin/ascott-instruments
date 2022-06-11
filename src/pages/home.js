import React from "react";
import BannerImage from '../images/DSC_4837.jpg';
import "../styles/Home.css";

const Home = () => {
    return (
      <div className="home">
        <div className="headerContainer" style={{ backgroundImage: `url(${BannerImage})` }}>
          <h1> A. Scott </h1>
          <h1> Instruments </h1>
          <p> Quality Crafted </p>
          </div>
      </div>
    );
  };
    
  export default Home;