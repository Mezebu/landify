import React from "react";
import CoverImage from "../../assests/images/CoverImage.png";

const FeatureSix = () => {
  return (
    <div className="feature container">
      <div className="feature-six-details">
        <div className="section-title">
          <p>Enter the world of all fashion trends</p>
        </div>
        <div className="section-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.
          </p>
        </div>
      </div>
      <img src={CoverImage} alt="coverImage" className="feature-six-image" />
    </div>
  );
};

export default FeatureSix;
