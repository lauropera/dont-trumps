import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="game-header">
      <Link to="/"><h1>{'Don\'t Trumps'}</h1></Link>
    </header>
  );
}
