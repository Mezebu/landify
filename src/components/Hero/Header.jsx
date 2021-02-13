import React from "react";
import Logo from "../../assests/images/Dark.svg";
import GoogleBadge from "../../assests/images/GooglePlay.svg";
import AppleBadge from "../../assests/images/AppStore.svg";

const Header = () => {
  return (
    <header className="header container">
      <nav className="nav">
        <div className="nav-group">
          <img src={Logo} alt="logo" className="header-logo" />

          <ul className="main-menu">
            <li>
              <a href="foo" className="menu-link">
                About
              </a>
            </li>
            <li>
              <a href="foo" className="menu-link">
                Products
              </a>
            </li>
            <li>
              <a href="foo" className="menu-link">
                Pricing
              </a>
            </li>
            <li>
              <a href="foo" className="menu-link">
                Blog
              </a>
            </li>
            <li>
              <a href="foo" className="menu-link">
                Jobs
              </a>
            </li>
            <li>
              <a href="foo" className="menu-link">
                More
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-group stores">
          <img src={GoogleBadge} alt="google" />
          <img src={AppleBadge} alt="apple" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
