import React from "react";
import Phone from "../../assests/images/PhoneMockup.png";

const Content = () => {
  return (
    <>
      <div className="container">
        <div className="hero-content">
          <div className="content-section">
            <p className="content-text">
              Organise projects. <br /> Get more done.
            </p>
            <div className="content-btn">Get Started</div>
          </div>
          <div className="phone">
            <img src={Phone} alt="phone" />
          </div>
        </div>
        <div className="left-band-1"></div>
      </div>
    </>
  );
};

export default Content;
