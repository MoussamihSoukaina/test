// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <Header />
            <main className="main-content">
                <h1>Bienvenue sur MonProduit</h1>
                <p>Découvrez notre service incroyable.</p>
                <Link to="/interaction">
                    <button className="cta-button">Commencer l'Interaction</button>
                </Link>
                <br />
                <br />
                <Link to="/feedback">
                    <button className="cta-button">Voir les Feedbacks</button>
                </Link>
            </main>
        </div>
    );
};

export default Home;
