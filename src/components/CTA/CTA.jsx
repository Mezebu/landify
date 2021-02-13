import React from "react";
import GoogleIcon from "../../assests/images/GooglePlay.svg";
import AppleIcon from "../../assests/images/AppStore.svg";
import PhoneOne from "../../assests/images/CtaPhoneOne.png";
import PhoneTwo from "../../assests/images/CtaPhoneTwo.png";

const CTA = () => {
  return (
    <div className="cta">
      <div className="container cta-wrapper">
        <div className="cta-content">
          <div className="cta-message">
            <p>Manage your projects from your mobile</p>
            <p>
              Download the app to manage your projects. Keep track of the <br />
              progress and complete tasks without procastinating. Stay on <br />
              track and complete on time!
            </p>
          </div>
          <div className="cta-store">
            <p>Get the App</p>
            <a href="foo">
              <img src={GoogleIcon} alt="icons" />
            </a>
            <a href="foo">
              <img src={AppleIcon} alt="icons" className="cta-store-icon" />
            </a>
          </div>
        </div>
        <div className="cta-phone-section">
          <div className="phone-mockup-one">
            <img src={PhoneOne} alt="phone" />
          </div>
          <div className="phone-mockup-two">
            <img src={PhoneTwo} alt="phone" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
