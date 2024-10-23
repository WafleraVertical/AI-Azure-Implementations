import React from 'react';
import '../../App.css';

import image1 from '../../assets/Images/bird-8788491_1280.jpg';

function HomePage() {
  return (
    <div className="homepage">
      <div className="navbar">
        <a href="#home">Inicio</a>
        <a href="#features">Características</a>
        <a href="#contact">Contacto</a>
      </div>
      <header className="homepage-header">
        <h1>Implementaciones Azure AI</h1>
      </header>
      <img src={image1} alt="Imagen de ejemplo" className="homepage-image" />
    </div>
  );
}

export default HomePage;

