import React from 'react';
import Header from './components/Header';
import NewCardForm from './pages/NewCardForm';
import FilterArea from './components/FilterArea';
import Deck from './components/Deck';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      hasTrunfo: false,
      cardCollection: [],
      cardsByName: '',
      cardsByRarity: 'todas',
      showTrunfoCard: false,
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  handleSubmit = (event, card) => {
    event.preventDefault();
    event.target.reset();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    } = card;
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
      cardCollection: [...prevState.cardCollection, cardInfo],
    }));
  }

  removeCard = ({ target }) => {
    const { cardCollection } = this.state;
    const { cardTrunfo } = cardCollection.find(
      ({ cardName }) => cardName === target.id,
    );
    if (cardTrunfo) this.setState({ hasTrunfo: false });
    this.setState({
      cardCollection: cardCollection.filter(
        ({ cardName }) => cardName !== target.id,
      ),
    });
  }

  render() {
    const {
      hasTrunfo,
      cardCollection,
      cardsByName,
      cardsByRarity,
      showTrunfoCard,
    } = this.state;
    return (
      <>
        <Header />
        <NewCardForm
          handleSubmit={ this.handleSubmit }
          hasTrunfo={ hasTrunfo }
        />
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
        <Footer />
      </>
    );
  }
}

export default App;
