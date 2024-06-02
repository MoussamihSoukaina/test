import React from 'react';
import ReactDOM from 'react-dom'; // Importez ReactDOM correctement
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Si vous souhaitez mesurer les performances de votre application, passez une fonction
// pour enregistrer les résultats (par exemple : reportWebVitals(console.log))
// ou les envoyer à un point de terminaison d'analyse. Apprenez-en plus : https://bit.ly/CRA-vitals
reportWebVitals();
