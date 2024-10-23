import React from 'react';
import './HotDog.css';  // Asegúrate de que esta ruta es correcta

function HotDogDetector() {
  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
  };

  return (
    <div className="hotdog-detector">
      <header className="header">
        <h1>HotDog Detector</h1>
      </header>
      <main>
        <input
          type="file"
          accept="image/*"
          id="upload-button"
          style={{ display: 'none' }}
          onChange={handleImageUpload}
        />
        <label htmlFor="upload-button" className="upload-button">
          Subir Imagen
        </label>
      </main>
    </div>
  );
}

export default HotDogDetector;
