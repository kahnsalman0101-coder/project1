import React from 'react';
import '../style/Banner.css';
import BurgerImage from '../images/burger-classic-cheese-rezept.jpg'; // Update with your actual image path

const Banner = () => {
  return (
    <section className="banner-section">
      <div className="banner-container">
        {/* Left Side - Burger Image */}
        <div className="banner-left">
          <div className="burger-image-wrapper">
            <img 
              src={BurgerImage} 
              alt="Delicious Burger" 
              className="burger-image"
            />
            <div className="price-badge">
              <span className="only-text">ONLY</span>
              <span className="price">$6.99</span>
            </div>
            <div className="floating-ingredients">
              <span className="ingredient tomato">🍅</span>
              <span className="ingredient lettuce">🥬</span>
              <span className="ingredient cheese">🧀</span>
            </div>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="banner-right">
          <div className="banner-content">
            <span className="subtitle">TRY IT TODAY</span>
            <h1 className="banner-title">
              <span className="title-main">NEW BURGER</span>
              <span className="title-accent">WITH ONION</span>
            </h1>
            
            <p className="banner-description">
              Experience the ultimate burger delight! Our new signature burger features 
              a juicy beef patty, fresh crispy onions, special sauce, and melted cheese 
              served in a toasted artisan bun. Made with the finest ingredients for 
              an unforgettable taste experience.
            </p>

            <div className="banner-features">
              <div className="feature">
                <span className="feature-icon">🔥</span>
                <span>Freshly Grilled</span>
              </div>
              <div className="feature">
                <span className="feature-icon">⚡</span>
                <span>Fast Delivery</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🌱</span>
                <span>Quality Ingredients</span>
              </div>
            </div>

            <div className="banner-actions">
              <button className="order-btn primary">
                ORDER NOW
              </button>
              <button className="order-btn secondary">
                VIEW MENU
              </button>
            </div>

            <div className="banner-stats">
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Happy Customers</span>
              </div>
              <div className="stat">
                <span className="stat-number">4.8</span>
                <span className="stat-label">Rating</span>
              </div>
              <div className="stat">
                <span className="stat-number">15</span>
                <span className="stat-label">Minutes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;