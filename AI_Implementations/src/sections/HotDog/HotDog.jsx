import React from 'react';
import './HotDog.css'; // Ajusta la ruta según la estructura de tus carpetas

function HotDogDetector() {
  const handleImageUpload = (event) => {
    // Aquí puedes manejar la imagen subida
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
