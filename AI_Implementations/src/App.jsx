import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './sections/HomePage/HomePage';
import TextToSpeech from './sections/TTS/TTS';
import HotDogDetector from './sections/HotDog/HotDog';
import Navbar from './sections/NavBar/NavBar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/text-to-speech" element={<TextToSpeech />} />
        <Route path="/hotdog-detector" element={<HotDogDetector />} />
      </Routes>
    </Router>
  );
}

export default App;
