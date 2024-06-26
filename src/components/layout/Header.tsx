import React from 'react';
import '../../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>SportSee</h1>
      <nav>
        <ul>
          <li>Accueil</li>
          <li>Profil</li>
          <li>Réglages</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
