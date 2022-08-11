import { bool, func, number, string } from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardMini from '../components/CardMini';
// import SetGameAttrs from '../components/SetGameAttrs';
import deckArr from '../data/deck-data';
import {
  setGameDeck as setGameDeckAction,
  startBattle,
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
    turnResult: false,
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
    const { playerDeck, cpuDeck } = this.state;
    const cpuCard = cpuDeck[Math.floor(Math.random() * cpuDeck.length)];
    this.setState(
      {
        playerChoice: card,
        cpuChoice: cpuCard,
        cpuDeck: this.removeCard(cpuDeck, cpuCard),
        playerDeck: this.removeCard(playerDeck, card),
      },
      () => {
        const { startTurn } = this.props;
        startTurn();
        this.getTurnResult();
      },
    );
  };

  removeCard = (deck, card) => deck
    .filter(({ cardName }) => cardName !== card.cardName);

  convertToCardAttr = (attr) => {
    switch (attr) {
    case 'Ataque':
      return 'cardAttr1';
    case 'Inteligência':
      return 'cardAttr2';
    default:
      return 'cardAttr3';
    }
  };

  getTurnResult = () => {
    const { playerChoice: player, cpuChoice: cpu } = this.state;
    const { attribute, battleResult } = this.props;
    const turnAttribute = this.convertToCardAttr(attribute);
    const result = player[turnAttribute] > cpu[turnAttribute];
    this.setState({ turnResult: result });
    battleResult(result);
  };

  render() {
    const { playerDeck, playerChoice, cpuChoice, turnResult } = this.state;
    const { battleAttribute, turn, turnInProgress } = this.props;
    return (
      <main className="Game-Container">
        <Header />
        {/* <SetGameAttrs /> */}
        {/* {battleAttribute !== '' && ( */}
        <section className="Game">
          <div>
            {turn % 2 === 0 ? (
              <>
                <p>Turno do adversário!</p>
                <p>{`Atributo do turno: ${battleAttribute}`}</p>
              </>
            ) : (
              <p>{`Atributo do turno: ${battleAttribute}`}</p>
            )}
          </div>
          {turnInProgress && (
            <TurnResults
              result={ turnResult }
              player={ playerChoice }
              cpu={ cpuChoice }
            />
          )}
          <div className={ `Game-Cards ${turnInProgress ? 'Hide-Card' : ''}` }>
            {playerDeck.map((card) => (
              <button
                type="button"
                key={ card.cardName }
                className="Game-Card"
                onClick={ () => this.selectCard(card) }
              >
                <CardMini { ...card } />
              </button>
            ))}
          </div>
        </section>
        {/* )} */}
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  battleAttribute: state.game.attribute,
  attribute: state.game.attribute,
  turn: state.game.turn,
  turnInProgress: state.game.turnInProgress,
});

const mapDispatchToProps = (dispatch) => ({
  startTurn: () => dispatch(startTurnAction()),
  setDeckFor: (person, deck) => dispatch(setGameDeckAction(person, deck)),
  battleResult: (result) => dispatch(startBattle(result)),
});

Game.propTypes = {
  battleAttribute: string.isRequired,
  setDeckFor: func.isRequired,
  startTurn: func.isRequired,
  battleResult: func.isRequired,
  attribute: string.isRequired,
  turn: number.isRequired,
  turnInProgress: bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
