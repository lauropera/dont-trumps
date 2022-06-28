import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import FilterArea from './components/FilterArea';
import Deck from './components/Deck';
import './App.css';

const INITIAL_STATE = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: 'rarity-1',
  cardTrunfo: false,
  isSaveButtonDisabled: true,
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ...INITIAL_STATE,
      hasTrunfo: false,
      cardCollection: [],
      cardsByName: '',
      cardsByRarity: 'todas',
      showTrunfoCard: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.validateCard = this.validateCard.bind(this);
    this.removeCard = this.removeCard.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => this.validateCard());
  }

  onSaveButtonClick() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, hasTrunfo,
    } = this.state;
    const cardInfo = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    if (!hasTrunfo) this.setState({ hasTrunfo: cardTrunfo });
    this.setState((prevState) => ({
      ...INITIAL_STATE,
      cardCollection: [...prevState.cardCollection, cardInfo],
    }));
  }

  validateCard() {
    const {
      cardName, cardDescription, cardImage,
      cardAttr1, cardAttr2, cardAttr3,
    } = this.state;
    const minValue = 0;
    const maxValue = 90;
    const maxSum = 210;
    const conditions = [
      cardName.length > minValue,
      cardDescription.length > minValue,
      cardImage.length > minValue,
      cardAttr1 >= minValue && cardAttr1 <= maxValue,
      cardAttr2 >= minValue && cardAttr2 <= maxValue,
      cardAttr3 >= minValue && cardAttr3 <= maxValue,
      Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= maxSum,
    ];
    this.setState({ isSaveButtonDisabled: !conditions.every((con) => con) });
  }

  removeCard({ target }) {
    const { cardCollection } = this.state;
    const card = cardCollection.find(({ cardName }) => cardName === target.id);
    this.setState({
      cardCollection: cardCollection
        .filter(({ cardName }) => cardName !== target.id),
      hasTrunfo: !card,
    });
  }

  render() {
    const {
      cardCollection, cardsByName, cardsByRarity, showTrunfoCard,
    } = this.state;
    return (
      <div className="main-content">
        <header className="game-header">
          <h1>{'Don\'t Trumps'}</h1>
        </header>
        <section className="new-card-area">
          <h2>Criar carta</h2>
          <div className="form-new-card">
            <Form
              { ...this.state }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
            />
            <Card { ...this.state } />
          </div>
        </section>
        <section className="cards-list">
          <FilterArea
            onInputChange={ this.onInputChange }
            filterTrunfo={ showTrunfoCard }
          />
          <Deck
            filterName={ cardsByName }
            filterRarity={ cardsByRarity }
            filterTrunfo={ showTrunfoCard }
            cardList={ cardCollection }
            removeCard={ this.removeCard }
          />
        </section>
      </div>
    );
  }
}

export default App;
