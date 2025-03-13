import React from "react";
import "./Hero.css";
import {assets} from '../../assets/assets';

const Hero = () => {
  return (
    <>
      <div className="hero" id="hero">
        <div className="hero-text">
          <h1>We Ensure better education for a better world.</h1>
          <p>
            Our cutting-edge curriculm is designed to empower students withh the
            knowledge , skills and exprience needed to excel in the dymnamic
            foels of education.
          </p>
          <button className="btn">Explore More <img src={assets.white_arrow} alt="" /></button>
        </div>
      </div>
    </>
  );
};

export default Hero;
