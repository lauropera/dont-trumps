import { func, shape } from 'prop-types';
import React from 'react';
import CardMini from './CardMini';

function GameCard({ card, selectCard }) {
  return (
    <button
      type="button"
      className="Game-Card"
      onClick={ () => selectCard(card) }
    >
      <CardMini preview="small" { ...card } />
    </button>
  );
}

GameCard.propTypes = {
  card: shape({}).isRequired,
  selectCard: func.isRequired,
};

export default GameCard;
