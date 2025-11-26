import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderPage from './pages/HeaderPage';
import BannerPage from './pages/BannerPage';
import './style/Header.css';
import './style/Banner.css';   
import MainSectionPage from './pages/MainSectionPage';
import BurgerGallery from './pages/BurgerGalleryPage';
import BurgerComponent from './pages/BurgerComponent';
import GuaranteeSection from './pages/GuaranteeSectionPage';
import Footer from './pages/FooterPage';

function App() {
  return (
    <Router>
      <Routes>
    <Route 
  path="/" 
  element={
    <>
      <HeaderPage />
      <BannerPage />
      <MainSectionPage/>
      <BurgerGallery/>
      <BurgerComponent/>
      <GuaranteeSection/>
      <Footer/>
      
    </>
  } 
/>

      </Routes>
    </Router>
  );
}

export default App;
