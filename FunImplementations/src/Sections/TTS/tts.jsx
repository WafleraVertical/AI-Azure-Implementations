import React, { useState } from 'react';
import './tts.css';

const TTS = () => {
  const [texto, setTexto] = useState('');

  const manejarCambio = (e) => {
    setTexto(e.target.value);
  };

  const convertirTextoAVoz = () => {
    if (texto.trim() === '') {
      alert('Por favor, escriba algo de texto.');
      return;
    }

    const speech = new SpeechSynthesisUtterance(texto);
    speech.lang = 'es-ES'; // Idioma en español
    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="contenedor">
      <h1>SpeechSynth</h1>
      <p>Escriba en el cuadro y el programa lo convertirá en un audio descargable</p>
      <textarea
        className="textarea"
        value={texto}
        onChange={manejarCambio}
        placeholder="Escriba algo aquí..."
      ></textarea>
      <button className="boton" onClick={convertirTextoAVoz}>
        Convertir a Voz
      </button>
    </div>
  );
};

export default TTS;
