import '../style/Header.css';
import Banner from './BannerPage';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Logo from '../images/Logo/images.png';  // FIXED PATH
import React, { useState, useEffect } from 'react';

const HeaderPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to split navigation items into 3 lines
  const getNavRows = () => {
    const navItems = [
      { label: "Home", href: "/", active: true },
      { label: "About", href: "/about", active: false },
      { label: "Our Menu", href: "/menu", active: false },
      { label: "Shop", href: "/shop", active: false },
      { label: "Blog", href: "/blog", active: false },
      { label: "Contact", href: "/contact", active: false }
    ];

    if (windowWidth <= 768) {
      // Mobile - single column in hamburger menu
      return [navItems];
    } else if (windowWidth <= 1024) {
      // Tablet - 2 lines
      const midPoint = Math.ceil(navItems.length / 2);
      return [
        navItems.slice(0, midPoint),
        navItems.slice(midPoint)
      ];
    } else {
      // Desktop - 3 lines
      const itemsPerLine = Math.ceil(navItems.length / 3);
      return [
        navItems.slice(0, itemsPerLine),
        navItems.slice(itemsPerLine, itemsPerLine * 2),
        navItems.slice(itemsPerLine * 2)
      ];
    }
  };

  const navRows = getNavRows();

  return (
    <header className="header">
      <nav className="navbar">
        {/* Mobile Menu Toggle */}
        {windowWidth <= 768 && (
          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}

        {/* Logo */}
        <div className="navbar-logo">
          <img src={Logo} alt="Logo" className="logo" />
        </div>

        {/* Navigation - Dynamic Layout */}
        {windowWidth > 768 ? (
          // Desktop/Tablet - Multi-line layout
          <ul className="navbar-nav">
            {navRows.map((row, rowIndex) => (
              <div key={rowIndex} className="nav-row">
                {row.map((item, itemIndex) => (
                  <li key={itemIndex} className="nav-item">
                    <a 
                      className={`nav-link ${item.active ? 'active' : ''}`} 
                      href={item.href}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </div>
            ))}
          </ul>
        ) : (
          // Mobile - Hamburger menu
          <ul className={`navbar-nav ${isMenuOpen ? 'active' : ''}`}>
            {navRows[0].map((item, index) => (
              <li key={index} className="nav-item">
                <a 
                  className={`nav-link ${item.active ? 'active' : ''}`} 
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* Cart */}
        <div className="navbar-cart">
          <div className="cart-wrapper">
            <i className="bi bi-bag"></i>
            <span className="roundpoint">2</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderPage;


