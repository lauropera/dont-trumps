import { bool, func, number, string } from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardMini from '../components/CardMini';
import SetGameAttrs from '../components/SetGameAttrs';
import deckArr from '../data/deck-data';
import {
  resetGame as resetGameAction,
  setGameDeck as setGameDeckAction,
  startBattle as startBattleAction,
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
    chooseAttribute: false,
    turnResult: false,
  };

  componentDidMount() {
    this.setGameDeck();
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    const { playerDeck } = this.state;
    const { resetGame, turn } = this.props;
    const LAST_TURN = 5;
    if (playerDeck.length === 0 && turn === LAST_TURN) {
      resetGame();
    }
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
        chooseAttribute: true,
      },
      () => {
        const { attribute, startTurn } = this.props;
        if (attribute !== '') {
          startTurn();
          this.getTurnResult(attribute);
        }
      },
    );
  };

  removeCard = (deck, card) => deck.filter(({ cardName }) => cardName !== card.cardName);

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

  getTurnResult = (attr) => {
    const { playerChoice: player, cpuChoice: cpu } = this.state;
    const { battleResult } = this.props;
    const turnAttribute = this.convertToCardAttr(attr);
    const result = player[turnAttribute] > cpu[turnAttribute];
    this.setState({ turnResult: result });
    battleResult(result);
  };

  endTurn = () => this.setState({ chooseAttribute: false });

  render() {
    const {
      playerDeck, playerChoice, cpuChoice,
      turnResult, chooseAttribute,
    } = this.state;
    const { battleAttribute, turn, turnInProgress, attribute } = this.props;
    return (
      <main className="Game-Container">
        <Header />
        <section className="Game">
          <h2>
            {battleAttribute !== ''
              && turn % 2 === 0
              && `Atributo do turno: ${attribute}`}
          </h2>
          {chooseAttribute && attribute === '' && (
            <SetGameAttrs getTurnResult={ this.getTurnResult } />
          )}
          {turnInProgress && (
            <TurnResults
              result={ turnResult }
              player={ playerChoice }
              cpu={ cpuChoice }
              endTurn={ this.endTurn }
            />
          )}
          {!chooseAttribute && (
            <div className="Game-Cards">
              {playerDeck.map((card) => (
                <button
                  type="button"
                  key={ card.cardName }
                  className="Game-Card"
                  onClick={ () => this.selectCard(card) }
                >
                  <CardMini preview="small" { ...card } />
                </button>
              ))}
            </div>
          )}
        </section>
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
  battleResult: (result) => dispatch(startBattleAction(result)),
  resetGame: () => dispatch(resetGameAction()),
});

Game.propTypes = {
  battleAttribute: string.isRequired,
  setDeckFor: func.isRequired,
  startTurn: func.isRequired,
  resetGame: func.isRequired,
  battleResult: func.isRequired,
  attribute: string.isRequired,
  turn: number.isRequired,
  turnInProgress: bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
