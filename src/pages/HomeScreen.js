import React from 'react';
import { Link } from 'react-router-dom';

function HomeScreen() {
  return (
    <main>
      <h1>Don&apos;t Trumps</h1>
      <div>
        <Link to="/game">Jogar</Link>
        <Link to="/deck">Deck</Link>
      </div>
    </main>
  );
}

export default HomeScreen;
