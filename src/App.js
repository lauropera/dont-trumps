import React from 'react';
import Header from './components/Header';
import NewCardForm from './pages/NewCardForm';
import FilterArea from './components/FilterArea';
import Deck from './components/Deck';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <NewCardForm />
      <FilterArea />
      <Deck />
      <Footer />
    </>
  );
}

export default App;
