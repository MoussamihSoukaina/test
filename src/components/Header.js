// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">MonProduit</div>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/about">À propos</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <button className="login-button">Connexion</button>
    </header>
  );
};

export default Header;
