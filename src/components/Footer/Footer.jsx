import React from "react";
import Apple from "../../assests/images/AppStore.svg";
import Google from "../../assests/images/GooglePlay.svg";
import FooterLogo from "../../assests/images/Logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="left-section">
            <div className="footer-logo">
              <img src={FooterLogo} alt="icon" />
            </div>

            <div className="footer-links">
              <div className="link-one">
                <a href="foo">Download Now</a>
                <a href="foo">License</a>
              </div>
              <div className="link-two">
                <a href="foo">About</a>
                <a href="foo">Features</a>
                <a href="foo">Pricing</a>
                <a href="foo">Careers</a>
                <a href="foo">Help</a>
                <a href="foo">Privacy Policy</a>
              </div>
            </div>
          </div>
          <div className="badges">
            <p>Get the App</p>
            <a href="foo">
              <img src={Apple} alt="logo" />
            </a>
            <a href="foo">
              <img src={Google} alt="logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
