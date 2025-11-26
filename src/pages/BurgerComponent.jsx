import React from 'react';
import '../style/BurgerComponent.css';

// Import your images - make sure to add these to your project
import person1 from '../images/people/download (6).jfif';
import person2 from '../images/people/images.jfif';
import person3 from '../images/people/download.jfif';

const BurgerComponent = () => {
  return (
    <div className="burger-container">
      {/* Left Side - People with Burgers */}
      <div className="people-section">
        <div className="person-card">
          <div className="person-image">
            <img src={person1} alt="Alex enjoying classic cheeseburger" className="person-photo" />
            <div className="image-overlay"></div>
          </div>
          <div className="person-info">
            <h3>Alex Morgan</h3>
            <p>Enjoying our Classic Cheeseburger</p>
          </div>
        </div>

        <div className="person-card">
          <div className="person-image">
            <img src={person2} alt="Sarah and James sharing burger" className="person-photo" />
            <div className="image-overlay"></div>
          </div>
          <div className="person-info">
            <h3>Sarah & James</h3>
            <p>Sharing our Double Deluxe Burger</p>
          </div>
        </div>

        <div className="person-card">
          <div className="person-image">
            <img src={person3} alt="Mike trying spicy BBQ burger" className="person-photo" />
            <div className="image-overlay"></div>
          </div>
          <div className="person-info">
            <h3>Mike Chen</h3>
            <p>Trying our Spicy BBQ Burger</p>
          </div>
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="content-section">
        <h1 className="main-title">Nothing brings people together like a great burger</h1>
        
        <p className="description">
          In a world full of differences, there's one universal language we all understand - 
          the joy of biting into a perfectly crafted burger. Our burgers are more than just 
          meals; they're the centerpiece of conversations, laughter, and unforgettable moments 
          shared with friends and family.
        </p>

        <div className="key-points">
          <h2>Why Our Burgers Create Connections:</h2>
          <div className="points-list">
            <div className="point-item">
              <span className="point-icon">🍔</span>
              <div className="point-content">
                <h3>Premium Quality Ingredients</h3>
                <p>100% fresh, locally sourced beef with handcrafted buns baked daily</p>
              </div>
            </div>

            <div className="point-item">
              <span className="point-icon">👨‍👩‍👧‍👦</span>
              <div className="point-content">
                <h3>Perfect for Sharing Moments</h3>
                <p>Designed to be the highlight of your gatherings and celebrations</p>
              </div>
            </div>

            <div className="point-item">
              <span className="point-icon">⭐</span>
              <div className="point-content">
                <h3>Consistent Excellence</h3>
                <p>Every burger is crafted with passion and attention to detail</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerComponent;