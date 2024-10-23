import React, { useState } from 'react';
import * as speechsdk from 'microsoft-cognitiveservices-speech-sdk';
import './TTS.css';

function TextToSpeech() {
  const [text, setText] = useState('');
  const [selectedVoice, setSelectedVoice] = useState('es-ES-AlvaroNeural');
  const [errorMessage, setErrorMessage] = useState('');

  const voices = [
    { label: 'Álvaro - Masculino', value: 'es-ES-AlvaroNeural' },
    { label: 'Darío - Masculino', value: 'es-ES-DarioNeural' }
  ];
  

  const speechConfig = speechsdk.SpeechConfig.fromSubscription(
    import.meta.env.VITE_AZURE_TTS_API_KEY,
    import.meta.env.VITE_AZURE_TTS_REGION
  );
  

  const convertTextToSpeech = () => {
    if (!text.trim()) {
      setErrorMessage('Por favor, ingresa algún texto.');
      return;
    }

    setErrorMessage('');
    speechConfig.speechSynthesisVoiceName = selectedVoice;

    const audioConfig = speechsdk.AudioConfig.fromDefaultSpeakerOutput();
    const synthesizer = new speechsdk.SpeechSynthesizer(speechConfig, audioConfig);

    synthesizer.speakTextAsync(
      text,
      (result) => {
        if (result.reason === speechsdk.ResultReason.SynthesizingAudioCompleted) {
          console.log('¡Audio generado correctamente!');
        } else {
          console.error('Error en la síntesis:', result.errorDetails);
          setErrorMessage('Ocurrió un error en la síntesis de audio.');
        }
        synthesizer.close();
      },
      (error) => {
        console.error('Error:', error);
        setErrorMessage('Ocurrió un error inesperado.');
        synthesizer.close();
      }
    );
  };

  return (
    <div className="text-to-speech">
      <header className="header">
        <h1>Text to Speech</h1>
      </header>
      <main>
        <textarea
          className="text-area"
          placeholder="Escribe tu texto aquí..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <div className="controls">
          <select
            className="voice-select"
            value={selectedVoice}
            onChange={(e) => setSelectedVoice(e.target.value)}
          >
            {voices.map((voice) => (
              <option key={voice.value} value={voice.value}>
                {voice.label}
              </option>
            ))}
          </select>

          <button className="convert-button" onClick={convertTextToSpeech}>
            Convertir
          </button>
        </div>

        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </main>
    </div>
  );
}

export default TextToSpeech;
