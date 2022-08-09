import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import Game from './pages/Game';
import GameDeck from './pages/GameDeck';
import './App.css';
import Results from './pages/Results';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ HomeScreen } />
      <Route path="/game" component={ Game } />
      <Route path="/deck" component={ GameDeck } />
      <Route path="/results" component={ Results } />
    </Switch>
  );
}

export default App;
