// Homepage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.css'; // Asegúrate de que este archivo exista

const Homepage = () => {
  return (
    <div className="homepage-container">
      <h1>Bienvenido a SpeechSynth</h1>
      <p>Convierte texto a audio de manera fácil.</p>
      <nav>
        <ul>
          <li>
            <Link to="/tts">Ir a TTS</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Homepage;