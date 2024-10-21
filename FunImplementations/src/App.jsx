// App.js
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './Sections/HomePage/Homepage'; // Asegúrate de que la ruta sea correcta
import TTS from './Sections/TTS/tts'; // Asegúrate de que la ruta sea correcta

function App() {
  return (
    <Router>
      <main style={{ padding: '1rem' }}>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/tts" component={TTS} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
