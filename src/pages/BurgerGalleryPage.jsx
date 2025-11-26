import React, { useState } from 'react';
import '../style/BurgerGallery.css';

// Import local images
import megaBeastBurger from '../images/Burger/download (1).jfif';
import spicyInferno from '../images/Burger/download (2).jfif';
import veggieParadise from '../images/Burger/download (3).jfif';
import bbqBaconKing from '../images/Burger/download (4).jfif';
import truffleDeluxe from '../images/Burger/download (5).jfif';
import breakfastBurger from '../images/Burger/download.jfif';

const BurgerGallery = () => {
  const [favorites, setFavorites] = useState({});

  const burgers = [
    {
      id: 1,
      name: "Mega Beast Burger",
      image: megaBeastBurger,
      description: "Double beef patty with crispy bacon, melted cheddar, fresh lettuce, and our special sauce.",
      price: "$14.99"
    },
    {
      id: 2,
      name: "Spicy Inferno",
      image: spicyInferno,
      description: "Fiery chicken patty with jalapeños, pepper jack cheese, and spicy mayo that'll blow your mind.",
      price: "$12.99"
    },
    {
      id: 3,
      name: "Veggie Paradise",
      image: veggieParadise,
      description: "Grilled vegetable patty with avocado, sprouts, and herb yogurt sauce for a fresh taste.",
      price: "$11.99"
    },
    {
      id: 4,
      name: "BBQ Bacon King",
      image: bbqBaconKing,
      description: "Smoky BBQ sauce, crispy onion rings, double bacon, and beef patty - a true classic.",
      price: "$15.99"
    },
    {
      id: 5,
      name: "Truffle Deluxe",
      image: truffleDeluxe,
      description: "Wagyu beef with black truffle aioli, wild mushrooms, and aged gruyere cheese.",
      price: "$24.99"
    },
    {
      id: 6,
      name: "Breakfast Burger",
      image: breakfastBurger,
      description: "Beef patty with fried egg, crispy hash brown, and maple-glazed bacon. Perfect any time!",
      price: "$13.99"
    }
  ];

  const toggleFavorite = (burgerId) => {
    setFavorites(prev => ({
      ...prev,
      [burgerId]: !prev[burgerId]
    }));
  };

  return (
    <div className="burger-gallery">
      {/* Main Title Section */}
      <div className="gallery-header">
        <h1 className="main-title">Our Crazy Burgers</h1>
        <p className="main-description">
          Discover our mouth-watering collection of handcrafted burgers made with the finest ingredients. 
          Each burger is a masterpiece of flavor, carefully crafted to satisfy your cravings and ignite your taste buds.
        </p>
      </div>

      {/* Burger Grid */}
      <div className="burger-grid">
        {burgers.map(burger => (
          <div key={burger.id} className="burger-card">
            {/* Favorite Heart */}
            <button 
              className={`favorite-btn ${favorites[burger.id] ? 'active' : ''}`}
              onClick={() => toggleFavorite(burger.id)}
              aria-label={favorites[burger.id] ? 'Remove from favorites' : 'Add to favorites'}
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill={favorites[burger.id] ? "#ef4444" : "none"} 
                stroke={favorites[burger.id] ? "#ef4444" : "#6b7280"} 
                strokeWidth="2"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </button>

            {/* Burger Image */}
            <div className="burger-image-container">
              <img 
                src={burger.image} 
                alt={burger.name}
                className="burger-image"
                loading="lazy"
              />
            </div>

            {/* Burger Info */}
            <div className="burger-info">
              <h3 className="burger-name">{burger.name}</h3>
              <p className="burger-description">{burger.description}</p>
              <div className="burger-price">{burger.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BurgerGallery;