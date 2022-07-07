import React from "react";
import "./AboutMe.css"
import dp from '../../Images/dp.PNG'

function AboutMe() {
    return (
        <div className="about-page">
          <div className="about-right-section">
            <img src={dp} alt="" className="about-img" />
          </div>  
          <div className="about-left-section">
              <h2 className="intro">Hello, my name is</h2>
              <h1 className="name">Archit Jain</h1>
          </div>        
        </div>
    );
};

export default AboutMe;