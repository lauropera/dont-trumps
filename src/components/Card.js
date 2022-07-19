import React from 'react';
import PropTypes from 'prop-types';
import cardMold from '../data/card-images/characters/mold.png';
import noImageCharacter from '../data/card-images/characters/random_none.png';
import portraitCharacter from '../data/card-images/characters/portrait_1.png';
import rarityNormal from '../data/card-images/items/rarity-1.png';
import rarityRare from '../data/card-images/items/rarity-2.png';
import rarityVeryRare from '../data/card-images/items/rarity-3.png';
import trunfoCard from '../data/card-images/items/trunfo_on.png';
import notTrunfoCard from '../data/card-images/items/trunfo_off.png';
import atkIcon from '../data/card-images/items/atk_points_icon.png';
import defIcon from '../data/card-images/items/def_points_icon.png';
import intIcon from '../data/card-images/items/int_points_icon.png';
import '../styles/Card.css';

class Card extends React.Component {
  setCardRarity(rarityId) {
    switch (rarityId) {
    case 'raro':
      return rarityRare;
    case 'muito raro':
      return rarityVeryRare;
    default:
      return rarityNormal;
    }
  }

  setTestId(id) {
    const { customCard } = this.props;
    return customCard ? '' : id;
  }

  isTrunfo(trunfoInfo) {
    return trunfoInfo ? trunfoCard : notTrunfoCard;
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <section className="card-container">
        <div className="mold">
          <img src={ cardMold } alt="Moldura" />
        </div>
        <div className="card">
          <header className="card-header">
            <div className="card-rarity">
              <img src={ this.setCardRarity(cardRare) } alt={ cardRare } />
            </div>
            <p
              data-testid={ this.setTestId('rare-card') }
              className="rarity-text"
            >
              {cardRare}
            </p>
            <h2 data-testid={ this.setTestId('name-card') }>{cardName}</h2>
            <div className="card-trunfo">
              {cardTrunfo && (
                <p data-testid={ this.setTestId('trunfo-card') }>Super Trunfo</p>
              )}
              <img src={ this.isTrunfo(cardTrunfo) } alt="Super Trunfo" />
            </div>
          </header>
          <div className="background-noise" />
          <div className="card-image">
            {cardImage === '' ? (
              <img
                data-testid={ this.setTestId('image-card') }
                src={ noImageCharacter }
                alt="Sem rosto"
                className="noface-character"
              />
            ) : (
              <>
                <img
                  src={ portraitCharacter }
                  alt="Moldura"
                  className="portrait"
                />
                <img
                  data-testid={ this.setTestId('image-card') }
                  className="user-character"
                  src={ cardImage }
                  alt={ `${cardName} preview` }
                />
              </>
            )}
          </div>
          <ul className="card-attrs">
            <li data-testid={ this.setTestId('attr1-card') }>
              {cardAttr1}
              <img src={ atkIcon } alt="Icone de lança" />
            </li>
            <li data-testid={ this.setTestId('attr2-card') }>
              {cardAttr2}
              <img src={ intIcon } alt="Icone de Armadura" />
            </li>
            <li data-testid={ this.setTestId('attr3-card') }>
              {cardAttr3}
              <img src={ defIcon } alt="Icone de Livro" />
            </li>
          </ul>
          <div className="card-description">
            <p data-testid={ this.setTestId('description-card') }>
              {cardDescription}
            </p>
          </div>
        </div>
      </section>
    );
  }
}

Card.defaultProps = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
  customCard: false,
};

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  customCard: PropTypes.bool,
};

export default Card;
