import React from 'react';
import './TTS.css';

function TextToSpeech() {
  return (
    <div className="text-to-speech">
      <header className="header">
        <h1>Text to Speech</h1>
      </header>
      <main>
        <textarea className="text-area" placeholder="Escribe tu texto aquí..."></textarea>
        <button className="convert-button">Convertir</button>
      </main>
    </div>
  );
}

export default TextToSpeech;
