import React from "react";
import Airbnb from "../../assests/images/AirbnbLogo.svg";
import Hubspot from "../../assests/images/HubspotLogo.svg";
import Google from "../../assests/images/GoogleLogo.svg";
import Microsoft from "../../assests/images/MicrosoftLogo.svg";
import Walmart from "../../assests/images/WalmartLogo.svg";
import FedEx from "../../assests/images/FedExLogo.svg";

const LogoMain = () => {
  return (
    <div className="logo-container container">
      <div className="logo-section">
        <div className="dividers"></div>
        <div className="logos">
          <img src={Airbnb} alt="Airbnb-logo" className="airbnb-logo" />
          <img src={Hubspot} alt="Hubspot-logo" className="hubspot-logo" />
          <img src={Google} alt="Google-logo" className="google-logo" />
          <img
            src={Microsoft}
            alt="Microsoft-logo"
            className="microsoft-logo"
          />
          <img src={Walmart} alt="Walmart-logo" className="walmart-logo" />
          <img src={FedEx} alt="FedEx-logo" className="fedex-logo" />
        </div>

        <div className="dividers"></div>
      </div>
    </div>
  );
};

export default LogoMain;
