import React from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import { connect } from 'react-redux';
import {
  removeCardAction,
  saveCards as saveCardsAction,
} from '../redux/actions';
import deckArr from '../data/deck-data';
import Card from './Card';
import '../styles/Deck.css';

class Deck extends React.Component {
  componentDidMount() {
    this.saveDeck();
  }

  saveDeck = () => {
    const { saveCards, cardList } = this.props;
    saveCards([...cardList, ...deckArr]);
  };

  applyFilters(deck) {
    const { filterTrunfo, filterName, filterRarity } = this.props;
    return deck.filter(({ cardName, cardRare, cardTrunfo }) => {
      if (filterTrunfo) return cardTrunfo === true;
      return (
        cardName.toLowerCase().includes(filterName.toLowerCase())
        && (cardRare === filterRarity || filterRarity === 'todas')
      );
    });
  }

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
              onClick={ () => removeCard(card) }
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
  saveCards: func.isRequired,
};

const mapStateToProps = (state) => ({
  cardList: state.customCard.cardCollection,
  filterName: state.filterArea.cardsByName,
  filterRarity: state.filterArea.cardsByRarity,
  filterTrunfo: state.filterArea.showTrunfoCard,
});

const mapDispatchToProps = (dispatch) => ({
  removeCard: (card) => dispatch(removeCardAction(card)),
  saveCards: (cards) => dispatch(saveCardsAction(cards)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Deck);
