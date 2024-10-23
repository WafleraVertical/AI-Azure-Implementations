import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'; 

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Inicio</Link>
      <Link to="/text-to-speech">Text to Speech</Link>
      <Link to="/hotdog-detector">HotDog Detector</Link>
    </div>
  );
}

export default Navbar;
