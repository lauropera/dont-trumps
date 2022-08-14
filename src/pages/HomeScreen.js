import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomeAndResults.css';

function HomeScreen() {
  return (
    <main className="Home-Container">
      <h1>Don&apos;t Trumps</h1>
      <div className="Links-Container">
        <Link to="/game">Jogar</Link>
        <Link to="/deck">Deck</Link>
      </div>
    </main>
  );
}

export default HomeScreen;
