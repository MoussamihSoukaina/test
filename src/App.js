import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importez Routes au lieu de Switch

import Home from './components/Home';
import Interaction from './components/Interaction';
import Feedback from './components/Feedback';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interaction" element={<Interaction />} /> {/* Utilisez Interaction comme composant */}
        <Route path="/feedback" element={<Feedback type="success" message="Action réussie!" />} /> {/* Utilisez Feedback comme composant */}
      </Routes>
    </Router>
  );
}

export default App;
