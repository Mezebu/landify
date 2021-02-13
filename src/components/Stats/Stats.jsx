import React from "react";
import IconOne from "../../assests/images/FeatureIcon1.png";
import IconFour from "../../assests/images/FeatureIcon4.png";
import IconThree from "../../assests/images/FeatureIcon3.png";
import IconFive from "../../assests/images/FeatureIcon5.png";

const Stats = () => {
  return (
    <div className="stats container">
      <div className="stats-description">
        <p className="stats-text-big">
          Our 18 years of <br />
          achievements
        </p>
        <p className="stats-text-small">
          With our super powers we have reached this
        </p>
      </div>
      <div className="counts">
        <div className="counts-row-one">
          <div className="count-row-items">
            <div className="count-icon">
              <img src={IconOne} alt="icon" />
            </div>
            <div className="count-text">
              <p className="counts-text-big">10,000+</p>
              <p className="counts-text-small">Downloads per day</p>
            </div>
          </div>
          <div className="count-row-items">
            <div className="count-icon">
              <img src={IconFour} alt="icon" />
            </div>
            <div className="count-text">
              <p className="counts-text-big">2 Million Users</p>
              <p className="counts-text-small">Users</p>
            </div>
          </div>
        </div>

        <div className="counts-row-two">
          <div className="count-row-items">
            <div className="count-icon">
              <img src={IconFive} alt="icon" />
            </div>
            <div className="count-text">
              <p className="counts-text-big">500+</p>
              <p className="counts-text-small">Clients</p>
            </div>
          </div>
          <div className="count-row-items">
            <div className="count-icon">
              <img src={IconThree} alt="icon" />
            </div>
            <div className="count-text">
              <p className="counts-text-big">140</p>
              <p className="counts-text-small">Countires</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
