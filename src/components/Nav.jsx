import brand from "../assets/images/logo.svg";
import background from "../assets/images/bg-pattern-intro-mobile.svg";
import { useState } from "react";

function Nav() {
  const [isActive, setIsActive] = useState(false);
  const [dropdownActivePro, setDropdownActivePro] = useState(false);
  const [dropdownActiveCom, setDropdownActiveCom] = useState(false);
  const [dropdownActiveCon, setDropdownActiveCon] = useState(false);
  const [hamburger, setHamburger] = useState(false);

  // On hamburger click, show hidden nav
  const showNav = () => {
    setIsActive(!isActive);
    setHamburger(!hamburger);
  };

  // Show hidden dropdown
  const showDropdownProduct = () => {
    setDropdownActivePro(!dropdownActivePro);
    setDropdownActiveCom(false);
    setDropdownActiveCon(false);
  };

  // Show hidden dropdown
  const showDropdownCompany = () => {
    setDropdownActiveCom(!dropdownActiveCom);
    setDropdownActivePro(false);
    setDropdownActiveCon(false);
  };

  // Show hidden dropdown
  const showDropdownConnect = () => {
    setDropdownActiveCon(!dropdownActiveCon);
    setDropdownActivePro(false);
    setDropdownActiveCom(false);
  };

  return (
    <nav>
      <div className="wrapper">
        <section id="navigation">
          <img src={brand} alt="Brand logo" />
          <ul className={isActive ? "active nav-links" : "nav-links"}>
            <li onClick={showDropdownProduct}>
              Product
              <svg className={dropdownActivePro ? "turn-arrow" : ""} xmlns="http://www.w3.org/2000/svg" width="10" height="7">
                <path fill="none" stroke="#FF7B86" stroke-width="2" d="M1 1l4 4 4-4" />
              </svg>
              <div className={dropdownActivePro ? "dropdown-links active" : "dropdown-links"}>
                <a href="#">Overview</a>
                <a href="#">Pricing</a>
                <a href="#">Marketplace</a>
                <a href="#">Features</a>
                <a href="#">Integrations</a>
              </div>
            </li>
            <li onClick={showDropdownCompany}>
              Company
              <svg className={dropdownActiveCom ? "turn-arrow" : ""} xmlns="http://www.w3.org/2000/svg" width="10" height="7">
                <path fill="none" stroke="#FF7B86" stroke-width="2" d="M1 1l4 4 4-4" />
              </svg>
              <div className={dropdownActiveCom ? "dropdown-links active" : "dropdown-links"}>
                <a href="#">About</a>
                <a href="#">Team</a>
                <a href="#">Blog</a>
                <a href="#">Careers</a>
              </div>
            </li>
            <li onClick={showDropdownConnect}>
              Connect
              <svg className={dropdownActiveCon ? "turn-arrow" : ""} xmlns="http://www.w3.org/2000/svg" width="10" height="7">
                <path fill="none" stroke="#FF7B86" stroke-width="2" d="M1 1l4 4 4-4" />
              </svg>
              <div className={dropdownActiveCon ? "dropdown-links active" : "dropdown-links"}>
                <a href="#">Contact</a>
                <a href="#">Newsletter</a>
                <a href="#">LinkedIn</a>
              </div>
            </li>
            <hr />
            <li>Login</li>
            <button className="cta cta--nav">Sign up</button>
          </ul>

          <i className={hamburger ? "fa-solid fa-xmark" : "fa-solid fa-bars"} onClick={showNav}></i>
        </section>
        <section id="navigation-content">
          <h1>A modern publishing platform</h1>
          <h2>Grow your audience and build your online brand</h2>
          <button className="cta cta--org">Start for Free</button>
          <button className="cta cta--alt">Learn More</button>
        </section>
      </div>

      <img className="nav-background" src={background} alt="#" />
    </nav>
  );
}

export default Nav;
