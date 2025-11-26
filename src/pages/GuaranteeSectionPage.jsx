import React from "react";
import "../style/GuaranteeSection.css";

const GuaranteeSection = () => {
  return (
    <section className="guarantee-section">
      <div className="guarantee-container">
        {/* Animated Background Elements */}
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>

        {/* Main Content */}
        <div className="guarantee-content">
          {/* Animated Badge */}
          <div className="guarantee-badge">
            <div className="badge-icon">⚡</div>
            <span>30-Minute Guarantee</span>
          </div>

          {/* Main Title */}
          <h1 className="main-title">
            <span className="title-line">Lightning Fast</span>
            <span className="title-line accent">Delivery Guaranteed</span>
          </h1>

          {/* Description */}
          <p className="guarantee-description">
            Experience shopping redefined with our lightning-fast delivery service. 
            Fresh products delivered to your doorstep in just 30 minutes - 
            guaranteed or your next order is on us!
          </p>

          {/* Phone Number with Animation */}
          <div className="phone-cta">
            <div className="phone-wrapper">
              <div className="phone-icon">📞</div>
              <div className="phone-info">
                <span className="call-text">Call Now for Instant Delivery</span>
                <a href="tel:+923405603070" className="phone-number">
                  +(92)3405603070
                </a>
              </div>
            </div>
          </div>

         

          {/* Trust Badges */}
          <div className="trust-badges">
            <div className="trust-item">✅ Fresh Products</div>
            <div className="trust-item">✅ On-Time Delivery</div>
            <div className="trust-item">✅ Money Back</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;