import React from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import deckArr from '../data/deck-data';
import Card from './Card';
import '../styles/Deck.css';

export default function Deck(props) {
  function applyFilters(deck) {
    const { filterTrunfo, filterName, filterRarity } = props;
    return deck.filter(({ cardName, cardRare, cardTrunfo }) => {
      if (filterTrunfo) return cardTrunfo === true;
      return (
        cardName.toLowerCase().includes(filterName.toLowerCase())
        && (cardRare === filterRarity || filterRarity === 'todas')
      );
    });
  }

  const { cardList, removeCard } = props;
  return (
    <main className="deck">
      {applyFilters(cardList).map((card) => (
        <div key={ card.cardName } className="deck-container">
          <Card { ...card } />
          <button
            id={ card.cardName }
            type="button"
            data-testid="delete-button"
            className="delete-button"
            onClick={ removeCard }
          >
            <FaTrash pointerEvents="none" />
          </button>
        </div>
      ))}
      {applyFilters(deckArr).map((card) => (
        <div key={ card.cardName } className="deck-container">
          <Card { ...card } customCard />
        </div>
      ))}
    </main>
  );
}

Deck.propTypes = {
  filterName: string.isRequired,
  filterRarity: string.isRequired,
  filterTrunfo: bool.isRequired,
  cardList: arrayOf(
    shape({
      cardName: string,
      cardDescription: string,
      cardAttr1: string,
      cardAttr2: string,
      cardAttr3: string,
      cardImage: string,
      cardRare: string,
      cardTrunfo: bool,
    }),
  ).isRequired,
  removeCard: func.isRequired,
};
