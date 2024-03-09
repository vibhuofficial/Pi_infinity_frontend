import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Pi-Infinity Technology, where innovation meets education! Elevate
            your teaching experience with our cutting-edge digital boards
            designed to revolutionize classrooms and learning environments. Our
            state-of-the-art interactive displays seamlessly blend advanced
            technology with user-friendly features, providing educators with
            powerful tools to engage students in an immersive learning journey.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              803-304, Rithala Industrial Area, Rohini, Delhi - 110085
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: +91 8970977715</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: team@piinfinitytechnology</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text" onClick={() => navigate("/category/1")}>
            Digital-Panels
          </span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <span className="text">
            PI INFINITY TECHNOLOGY 2024. PREMIUM E-TEACHING SOLUTIONS.
          </span>
          <img src={Payment} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
