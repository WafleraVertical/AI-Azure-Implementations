import React, { useState } from 'react';
import axios from 'axios';
import './HotDog.css'; 

function HotDogDetector() {
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const analyzeImage = async (image) => {
    const apiKey = import.meta.env.VITE_AZURE_CV_API_KEY;
    const endpoint = `https://${import.meta.env.VITE_AZURE_CV_REGION}.api.cognitive.microsoft.com/vision/v3.2/analyze`;


    const params = {
      visualFeatures: 'Objects',
    };

    const headers = {
      'Ocp-Apim-Subscription-Key': apiKey,
      'Content-Type': 'application/octet-stream',
    };

    try {
      const response = await axios.post(
        `${endpoint}?visualFeatures=${params.visualFeatures}`,
        image,
        { headers }
      );

      const objects = response.data.objects;
      const isHotDog = objects.some(obj =>
        obj.object.toLowerCase().includes('hotdog')
      );

      setResult(isHotDog ? '¡Es un Hot Dog!' : 'No es un Hot Dog.');
    } catch (error) {
      console.error('Error en el análisis:', error);
      setResult('Error en el análisis de imagen.');
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setLoading(true);
      const reader = new FileReader();
      reader.onloadend = () => {
        const arrayBuffer = reader.result;
        analyzeImage(arrayBuffer);
      };
      reader.readAsArrayBuffer(file);
    }
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
        {loading && <p>Analizando imagen...</p>}
        {result && <p>{result}</p>}
      </main>
    </div>
  );
}

export default HotDogDetector;
