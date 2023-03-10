import React from "react";
import brand from "../assets/images/logo.svg";

function Footer() {
  return (
    <footer>
      <a href="#">
        <img src={brand} alt="Brand logo" />
      </a>
      <div className="footer-links footer-product">
        <h4>Product</h4>
        <ul>
          <li>Overview</li>
          <li>Pricing</li>
          <li>Marketplace</li>
          <li>Features</li>
          <li>Integrations</li>
        </ul>
      </div>
      <div className="footer-links footer-company">
        <h4>Company</h4>
        <ul>
          <li>About</li>
          <li>Team</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
      </div>
      <div className="footer-links footer-connect">
        <h4>Connect</h4>
        <ul>
          <li>Contact</li>
          <li>Newsletter</li>
          <li>LinkedIn</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
