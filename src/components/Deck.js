import React from 'react';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import deckArr from '../data/deck-data';
import Card from './Card';
import '../styles/Deck.css';

class Deck extends React.Component {
  applyFilters = (deck) => {
    const { filterTrunfo, filterName, filterRarity } = this.props;
    return deck.filter(({ cardName, cardRare, cardTrunfo }) => {
      if (filterTrunfo) return cardTrunfo === true;
      return (
        cardName.toLowerCase().includes(filterName.toLowerCase())
        && (cardRare === filterRarity || filterRarity === 'todas')
      );
    });
  };

  render() {
    const { cardList, removeCard } = this.props;
    return (
      <main className="deck">
        {this.applyFilters(cardList).map((card) => (
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
        {this.applyFilters(deckArr).map((card) => (
          <div key={ card.cardName } className="deck-container">
            <Card { ...card } customCard />
          </div>
        ))}
      </main>
    );
  }
}

Deck.propTypes = {
  filterName: PropTypes.string.isRequired,
  filterRarity: PropTypes.string.isRequired,
  filterTrunfo: PropTypes.bool.isRequired,
  cardList: PropTypes.arrayOf(
    PropTypes.shape({
      cardName: PropTypes.string,
      cardDescription: PropTypes.string,
      cardAttr1: PropTypes.string,
      cardAttr2: PropTypes.string,
      cardAttr3: PropTypes.string,
      cardImage: PropTypes.string,
      cardRare: PropTypes.string,
      cardTrunfo: PropTypes.bool,
    }),
  ).isRequired,
  removeCard: PropTypes.func.isRequired,
};

export default Deck;
