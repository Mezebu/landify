import React from "react";
import Iphone from "../../assests/images/IphoneX.png";

const FeatureFive = () => {
  return (
    <div className="container">
      <div className="feature-five-section">
        <div className="feature-image">
          <img src={Iphone} alt="phone" />
        </div>
        <div className="feature-content">
          <h3>Headline</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non
            turpis eu quam porta pretium. Phasellus dictum ante non libero
            sagittis, quis accumsan urna tincidunt. Pellentesque scelerisque
            eros metus, condimentum vestibulum dolor laoreet ut.
          </p>
          <a href="foo">Get started</a>
        </div>
      </div>
    </div>
  );
};

export default FeatureFive;
