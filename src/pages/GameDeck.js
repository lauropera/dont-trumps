import React from 'react';
import Deck from '../components/Deck';
import FilterArea from '../components/FilterArea';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NewCardForm from './NewCardForm';

function GameDeck() {
  return (
    <>
      <Header />
      <NewCardForm />
      <FilterArea />
      <Deck />
      <Footer />
    </>
  );
}

export default GameDeck;
