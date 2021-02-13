import React from "react";
import QuoteMark from "../../assests/images/Quote.png";
import Hubspot from "../../assests/images/HubspotLogo.svg";
import Airbnb from "../../assests/images/AirbnbLogo.svg";
import MicroSoft from "../../assests/images/MicrosoftLogo.svg";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="container">
        <img src={QuoteMark} alt="quote" className="quote-mark" />
        <div className="description">
          <p>
            Real stories from <br /> Real costumers
          </p>
          <span>Get inspired by these stories</span>
        </div>

        <div className="testimonial-cards">
          <div className="card-one">
            <img src={Hubspot} alt="hubspot" className="card-logos" />
            <p className="card-text">
              To quickly start my startup landing page design, I was looking for
              a landing page UI kit. Landify iis one of the best landing page UI
              kit i have come across.Its so flexible, well organised and easily
              editable.
            </p>
            <p className="card-one-bold">Ezeigwe Henry</p>
            <p className="card-one-small">Vice President, GoPro</p>
          </div>

          <div className="double-cards">
            <div className="card-two">
              <img src={Airbnb} alt="airbnb" className="card-logos" />
              <p className="card-text">
                I used landify and created a landing page for my startup within
                a week. The landify UI kit is simple and highly intuitive,so
                anyone can use it.
              </p>
              <p className="card-one-bold">Jane Cooper</p>
              <p className="card-one-small">CEO, Airbnb</p>
            </div>
            <div className="card-three">
              <img src={MicroSoft} alt="microsoft" className="card-logos" />
              <p className="card-text">
                Landify saved our time in designing my company page.
              </p>
              <p className="card-one-bold">Olaide Jamiu</p>
              <p className="card-one-small">Co-Founder, MicroSoft</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
