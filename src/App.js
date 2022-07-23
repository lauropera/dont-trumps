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

  render() {
    const {
      cardsByName,
      cardsByRarity,
      showTrunfoCard,
    } = this.state;
    return (
      <>
        <Header />
        <NewCardForm />
        <FilterArea
          onInputChange={ this.onInputChange }
          filterTrunfo={ showTrunfoCard }
        />
        <Deck
          filterName={ cardsByName }
          filterRarity={ cardsByRarity }
          filterTrunfo={ showTrunfoCard }
        />
        <Footer />
      </>
    );
  }
}

export default App;
