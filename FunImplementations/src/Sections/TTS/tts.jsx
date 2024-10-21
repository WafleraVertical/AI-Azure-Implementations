import React, { useState } from 'react';
import axios from 'axios';
import './tts.css';

const TTS = () => {
  const [texto, setTexto] = useState('');
  const [cargando, setCargando] = useState(false);

  const manejarCambio = (e) => {
    setTexto(e.target.value);
  };

  const convertirTextoAAudio = async () => {
    if (texto.trim() === '') {
      alert('Por favor, escriba algo de texto.');
      return;
    }

    setCargando(true);

    const endpoint = 'https://eastus.api.cognitive.microsoft.com/'; // Reemplaza <TU_REGION>
    const apiKey = process.env.REACT_APP_API_KEY; // Asegúrate de que esta línea sea correcta

    const config = {
      headers: {
        'Ocp-Apim-Subscription-Key': apiKey,
        'Content-Type': 'application/ssml+xml',
        'X-Microsoft-OutputFormat': 'audio-16khz-32kbitrate-mono-mp3',
      },
      responseType: 'blob', // Para manejar la respuesta como archivo binario
    };

    const ssml = `
      <speak version='1.0' xml:lang='es-ES'>
        <voice xml:lang='es-ES' xml:gender='Female' name='es-ES-AlbaNeural'>
          ${texto}
        </voice>
      </speak>
    `;

    try {
      console.log('Inicio de la solicitud'); // Log antes de la solicitud
      const respuesta = await axios.post(endpoint, ssml, config);
      console.log('Fin de la solicitud', respuesta); // Log después de la solicitud

      // Crear una URL del archivo de audio recibido
      const urlAudio = URL.createObjectURL(new Blob([respuesta.data]));
      
      // Crear un enlace para descargar el audio
      const link = document.createElement('a');
      link.href = urlAudio;
      link.setAttribute('download', 'audio.mp3');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      alert('¡Audio descargado con éxito!');
    } catch (error) {
      console.error('Error al convertir texto a audio:', error);
      alert(`Hubo un error al generar el audio: ${error.message}`); // Mostrar el mensaje de error
    } finally {
      setCargando(false);
    }
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
      <button className="boton" onClick={convertirTextoAAudio} disabled={cargando}>
        {cargando ? 'Generando audio...' : 'Convertir a Audio'}
      </button>
    </div>
  );
};

export default TTS;