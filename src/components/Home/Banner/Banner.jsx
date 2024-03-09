import React, { useEffect } from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1 data-aos="fade-right">FUTURE</h1>
          <p>
            Unlock Potential, Ignite Curiosity: Your Journey to Knowledge Begins
            Here!
          </p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2">Shop Now</div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} data-aos="fade-left" />
      </div>
    </div>
  );
};

export default Banner;
