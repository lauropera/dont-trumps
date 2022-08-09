import { bool, func, number, string } from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card';
import SetGameAttrs from '../components/SetGameAttrs';
import deckArr from '../data/deck-data';
import {
  setGameDeck as setGameDeckAction,
  startTurn as startTurnAction,
} from '../redux/actions';
import Header from '../components/Header';
import '../styles/Game.css';
import TurnResults from '../components/TurnResults';

class Game extends Component {
  state = {
    playerDeck: [],
    cpuDeck: [],
    playerChoice: {},
    cpuChoice: {},
  };

  componentDidMount() {
    this.setGameDeck();
  }

  setGameDeck = () => {
    const playerDeck = this.randomizeDeck(deckArr);
    const cpuDeck = this.randomizeDeck(deckArr);
    this.setState({ playerDeck, cpuDeck });
  };

  randomizeDeck = (deck) => {
    const VALUE_BETWEEN = 0.5;
    const MAX_DECK_LENGTH = 6;
    return deck
      .sort(() => Math.random() - VALUE_BETWEEN)
      .slice(0, MAX_DECK_LENGTH);
  };

  selectCard = (card) => {
    const { startTurn } = this.props;
    const { playerDeck, cpuDeck } = this.state;
    const cpuCard = cpuDeck[Math.floor(Math.random() * cpuDeck.length)];
    this.setState({
      playerChoice: card,
      playerDeck: playerDeck.filter(
        ({ cardName }) => cardName !== card.cardName,
      ),
      cpuChoice: cpuCard,
      cpuDeck: cpuDeck.filter(({ cardName }) => cardName !== cpuCard.cardName),
    });
    startTurn();
  };

  render() {
    const { playerDeck, playerChoice, cpuChoice } = this.state;
    const { battleAttribute, turn, turnInProgress } = this.props;
    return (
      <main className="Game-Container">
        <Header />
        <SetGameAttrs />
        {battleAttribute !== '' && (
          <section className="Game">
            { turn % 2 === 0 ? (
              <div>
                <p>Turno do adversário!</p>
                <p>{ `Atributo do turno: ${battleAttribute}` }</p>
              </div>
            ) : (
              <div>
                <p>{ `Atributo do turno: ${battleAttribute}` }</p>
              </div>
            )}
            {turnInProgress && (
              <TurnResults player={ playerChoice } cpu={ cpuChoice } />
            )}
            <div className={ `Game-Cards ${turnInProgress ? 'Hide-Card' : ''}` }>
              {playerDeck.map((card) => (
                <button
                  type="button"
                  key={ card.cardName }
                  className="Game-Card"
                  onClick={ () => this.selectCard(card) }
                >
                  <Card { ...card } />
                </button>
              ))}
            </div>
          </section>
        )}
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  battleAttribute: state.game.attribute,
  turn: state.game.turn,
  turnInProgress: state.game.turnInProgress,
});

const mapDispatchToProps = (dispatch) => ({
  startTurn: () => dispatch(startTurnAction()),
  setDeckFor: (person, deck) => dispatch(setGameDeckAction(person, deck)),
});

Game.propTypes = {
  battleAttribute: string.isRequired,
  setDeckFor: func.isRequired,
  startTurn: func.isRequired,
  turn: number.isRequired,
  turnInProgress: bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
