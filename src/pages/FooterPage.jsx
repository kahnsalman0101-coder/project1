import React from "react";
import "../style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        
        {/* Location */}
        <div className="footer-card">
          <div className="card-icon">📍</div>
          <div className="card-content">
            <h4>Our Location</h4>
            <p>123 Shopping Street</p>
            <span className="card-subtext">Downtown District</span>
          </div>
          <div className="card-action">
            <button className="action-btn">View Map</button>
          </div>
        </div>

        {/* Working Hours */}
        <div className="footer-card">
          <div className="card-icon">🕒</div>
          <div className="card-content">
            <h4>Working Hours</h4>
            <p>8AM - 10PM</p>
            <span className="card-subtext">Mon-Sun</span>
          </div>
          <div className="card-action">
            <div className="status-indicator online"></div>
          </div>
        </div>

        {/* Order Now */}
        <div className="footer-card">
          <div className="card-icon">🚀</div>
          <div className="card-content">
            <h4>Order Now</h4>
            <p>+ (92) 3405603070</p>
            <span className="card-subtext">24/7 Available</span>
          </div>
          <div className="card-action">
            <button className="action-btn primary">Order</button>
          </div>
        </div>

        {/* Follow Us */}
        <div className="footer-card">
          <div className="card-icon">👥</div>
          <div className="card-content">
            <h4>Follow Us</h4>
            <p>@myshopping</p>
            <span className="card-subtext">Social Media</span>
          </div>
          <div className="card-action">
            <div className="social-icons">
              <span className="social-icon">📘</span>
              <span className="social-icon">📷</span>
              <span className="social-icon">🐦</span>
            </div>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-wave"></div>
        <div className="bottom-content">
          <div className="copyright">
            © 2024 MyShopping. All rights reserved.
          </div>
          <div className="footer-links">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Contact</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;