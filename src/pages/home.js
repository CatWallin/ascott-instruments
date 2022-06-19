import React from "react";
import BannerImage from '../images/DSC_4837.jpg';
import "../styles/Home.css";

const Home = () => {
    return (
      <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer" >
          <p> Hand Crafted Stringed Instruments </p>
          </div>
      </div>
    );
  };
    
  export default Home;