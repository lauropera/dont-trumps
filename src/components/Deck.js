import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import '../styles/Deck.css';

class Deck extends React.Component {
  render() {
    const {
      filterName, filterRarity, filterTrunfo, cardList, removeCard,
    } = this.props;
    console.log(filterRarity);
    return (
      <div className="deck">
        {cardList
          .filter(({ cardName, cardRare, cardTrunfo }) => {
            if (filterTrunfo) return cardTrunfo === true;
            return (
              cardName.includes(filterName)
              && (cardRare === filterRarity || filterRarity === 'todas')
            );
          })
          .map((card) => (
            <div key={ card.cardName } className="deck-card">
              <Card { ...card } />
              <div>
                <button
                  id={ card.cardName }
                  type="button"
                  data-testid="delete-button"
                  className="delete-button"
                  onClick={ removeCard }
                >
                  Excluir
                </button>
              </div>
            </div>
          ))}
      </div>
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
