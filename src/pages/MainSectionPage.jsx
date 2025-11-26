import React from 'react';
import '../style/MainSection.css';
import BurgerImage from '../images/Main/images.jfif'; // Update with your image path

const MainSection = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="title-line">THE BURGER</span>
              <span className="title-line accent">TASTE BETTER</span>
            </h1>
            <p className="hero-description">
              Discover the perfect blend of juicy patties, fresh ingredients, and secret sauces 
              that make every bite an unforgettable experience. Crafted with passion, served with love.
            </p>
            <button className="cta-button">
              EXPLORE FULL MENU
              <span className="button-arrow">→</span>
            </button>
          </div>
          <div className="hero-image">
            <img 
              src={BurgerImage} 
              alt="Delicious Burger" 
              className="main-burger-img"
            />
            <div className="floating-badge fresh">
              <span>🍅</span>
              <span>Fresh</span>
            </div>
            <div className="floating-badge juicy">
              <span>💦</span>
              <span>Juicy</span>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="features-container">
          <h2 className="features-title">WHY CHOOSE US</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <div className="icon-wrapper original">
                  <span>👑</span>
                </div>
              </div>
              <h3 className="feature-title">Original Recipes</h3>
              <p className="feature-description">
                Our secret family recipes have been perfected over generations. 
                Each burger is crafted with unique flavors you won't find anywhere else.
              </p>
              <div className="feature-tags">
                <span className="tag">Secret Sauce</span>
                <span className="tag">Family Recipe</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <div className="icon-wrapper quality">
                  <span>⭐</span>
                </div>
              </div>
              <h3 className="feature-title">Premium Quality</h3>
              <p className="feature-description">
                We use only the finest ingredients - 100% organic beef, fresh vegetables, 
                and artisan buns baked daily for the ultimate burger experience.
              </p>
              <div className="feature-tags">
                <span className="tag">Organic</span>
                <span className="tag">Fresh Daily</span>
              </div>
            </div>

            {/* Feature 3 - Fast Delivery */}
            <div className="feature-card">
              <div className="feature-icon">
                <div className="icon-wrapper delivery">
                  <span>⚡</span>
                </div>
              </div>
              <h3 className="feature-title">Fast Delivery</h3>
              <p className="feature-description">
                Get your burger hot and fresh in under 30 minutes. Our efficient delivery 
                system ensures your food arrives perfect every time.
              </p>
              <div className="feature-tags">
                <span className="tag">30 Min Guarantee</span>
                <span className="tag">Hot & Fresh</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSection;