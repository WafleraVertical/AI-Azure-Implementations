import React from 'react';
import '../../App.css';

function HomePage() {
  return (
    <div className="homepage">
      <div className="navbar">
        <a href="#home">Inicio</a>
        <a href="#features">Características</a>
        <a href="#contact">Contacto</a>
      </div>
      <header className="homepage-header">
        <h1>Implementaciones de Azure AI</h1>
      </header>
    </div>
  );
}

export default HomePage;
