import React, { useEffect } from 'react';
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
import { getCards } from '../redux/reducers/customCard';
import requests from '../services/requests';

function Deck({
  saveCards,
  cardList,
  filterTrunfo,
  filterName,
  filterRarity,
  removeCard,
}) {
  const saveDeck = () => {
    saveCards([...cardList, ...deckArr]);
  };

  const applyFilters = (deck) => deck.filter(({ cardName, cardRare, cardTrunfo }) => {
    if (filterTrunfo) return cardTrunfo === true;
    return (
      cardName.toLowerCase().includes(filterName.toLowerCase())
        && (cardRare === filterRarity || filterRarity === 'todas')
    );
  });

  const listCards = async () => {
    const cards = await requests.get.all();
    console.log(cards);
  };

  useEffect(() => {
    saveDeck();
    listCards();
  }, []);

  return (
    <main className="deck">
      {applyFilters(getCards()).map((card) => (
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
