import React from "react";
import IconOne from "../../assests/images/FeatureIcon1.png";
import IconTwo from "../../assests/images/FeatureIcon2.png";
import IconThree from "../../assests/images/FeatureIcon3.png";
import IconFour from "../../assests/images/FeatureIcon4.png";
import IconFive from "../../assests/images/FeatureIcon5.png";
import IconSix from "../../assests/images/FeatureIcon6.png";

const Feature = () => {
  return (
    <>
      <div className="feature-section container">
        <div className="feature-text-input">
          <h2>Tailor-made Features</h2>
          <p>
            Lorem ipsum is a placeholder text commonly used to demonstrate the
            visual form of a document.
          </p>
        </div>
        <div className="features-list">
          <div className="rows">
            <div className="row-items">
              <img src={IconOne} alt="icon-one" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="row-items">
              <img src={IconTwo} alt="icon-two" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="row-items">
              <img src={IconThree} alt="icon-three" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="rows">
            <div className="row-items">
              <img src={IconFour} alt="icon-three" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="row-items">
              <img src={IconFive} alt="icon-three" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="row-items">
              <img src={IconSix} alt="icon-three" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
