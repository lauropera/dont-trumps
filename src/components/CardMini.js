import React from 'react';
import { bool, string } from 'prop-types';

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
// import '../styles/CardMini.css';
import '../styles/Mini.css';
import '../styles/CardFocus.css';

class CardMini extends React.Component {
  state = {
    hover: false,
  };

  setCardRarity = (rarityId) => {
    switch (rarityId) {
    case 'raro':
      return rarityRare;
    case 'muito raro':
      return rarityVeryRare;
    default:
      return rarityNormal;
    }
  };

  setTestId = (id) => {
    const { customCard } = this.props;
    return customCard ? '' : id;
  };

  isTrunfo = (trunfoInfo) => (trunfoInfo ? trunfoCard : notTrunfoCard);

  onMouseHover = () => this.setState({ hover: true });

  onMouseOut = () => this.setState({ hover: false });

  render() {
    const {
      cardName,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      turnResult,
    } = this.props;
    const { hover } = this.state;
    return (
      <section
        className={ `card-container-mini
          ${turnResult ? 'Winner-Card' : 'Loser-Card'}` }
        // onMouseOver={ this.onMouseHover }
        // onFocus={ this.onMouseHover }
        // onMouseOut={ this.onMouseOut }
        // onBlur={ this.onMouseOut }
      >
        <div className={ `small-mold ${hover ? 'Focus-small-mold' : ''}` }>
          <img src={ cardMold } alt="Moldura" />
        </div>
        <div
          className={ `small-card ${hover ? 'Focus' : ''}` }
          onMouseOver={ this.onMouseHover }
          onFocus={ this.onMouseHover }
          onMouseOut={ this.onMouseOut }
          onBlur={ this.onMouseOut }
        >
          <header className="small-card-header">
            <div className="card-rarity">
              <img src={ this.setCardRarity(cardRare) } alt={ cardRare } />
            </div>
            <h2 data-testid={ this.setTestId('name-card') }>{cardName}</h2>
            <div className="card-trunfo">
              {cardTrunfo && (
                <p data-testid={ this.setTestId('trunfo-card') }>Super Trunfo</p>
              )}
              <img src={ this.isTrunfo(cardTrunfo) } alt="Super Trunfo" />
            </div>
          </header>
          <div className="small-background-noise" />
          <div className="small-card-image">
            {cardImage === '' ? (
              <img
                data-testid={ this.setTestId('image-card') }
                src={ noImageCharacter }
                alt="Sem rosto"
                className="small-noface-character"
              />
            ) : (
              <>
                <img
                  src={ portraitCharacter }
                  alt="Moldura"
                  className="small-portrait"
                />
                <img
                  data-testid={ this.setTestId('image-card') }
                  className="small-user-character"
                  src={ cardImage }
                  alt={ `${cardName} preview` }
                />
              </>
            )}
          </div>
          <ul className="small-card-attrs">
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
        </div>
      </section>
    );
  }
}

CardMini.defaultProps = {
  cardName: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
  customCard: false,
  turnResult: false,
};

CardMini.propTypes = {
  cardName: string,
  cardAttr1: string,
  cardAttr2: string,
  cardAttr3: string,
  cardImage: string,
  cardRare: string,
  cardTrunfo: bool,
  customCard: bool,
  turnResult: bool,
};

export default CardMini;
