import React from 'react';
import './HomePage.css';
import image1 from '../../assets/Images/bird-8788491_1280.jpg';

function HomePage() {
  return (
    <div className="homepage">
      <header className="header">
        <h1>Implementaciones de Azure AI</h1>
      </header>
      <img src={image1} alt="Imagen de ejemplo" className="homepage-image" />
    </div>
  );
}

export default HomePage;
