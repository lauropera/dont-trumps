import { bool, func, number, string } from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import SetGameAttrs from '../components/SetGameAttrs';
import deckArr from '../data/deck-data';
import {
  resetGame as resetGameAction,
  startBattle as startBattleAction,
  startTurn as startTurnAction,
} from '../redux/actions';
import Header from '../components/Header';
import '../styles/Game.css';
import TurnResults from '../components/TurnResults';
import { getCards } from '../redux/reducers/customCard';
import GameCard from '../components/GameCard';

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
    const deck = [...getCards(), ...deckArr];
    const playerDeck = this.randomizeDeck(deck);
    const cpuDeck = this.randomizeDeck(deck);
    this.setState({ playerDeck, cpuDeck });
  };

  randomizeDeck = (deck) => {
    const VALUE_BETWEEN = 0.5;
    const MAX_DECK_LENGTH = 6;
    return deck
      .sort(() => Math.random() - VALUE_BETWEEN)
      .slice(0, MAX_DECK_LENGTH);
  };

  convertToCardAttr = (attr) => {
    if (attr === 'Ataque') return 'cardAttr1';
    if (attr === 'Inteligência') return 'cardAttr2';
    if (attr === 'Defesa') return 'cardAttr3';
  };

  selectCpuCard = (attribute) => {
    const { cpuDeck } = this.state;
    const { battleAttribute } = this.props;
    attribute = this.convertToCardAttr(attribute)
      || this.convertToCardAttr(battleAttribute);
    const LAST_POSITION = -1;
    const cpuCard = cpuDeck
      .sort((a, b) => a[attribute] - b[attribute])
      .at(LAST_POSITION);
    this.setState({
      cpuChoice: cpuCard,
      cpuDeck: this.removeCard(cpuDeck, cpuCard),
    });
    return cpuCard;
  };

  selectCard = (card) => {
    const { playerDeck } = this.state;
    this.setState(
      {
        playerChoice: card,
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

  getTurnResult = (attr, cpuCard) => {
    const { playerChoice: player } = this.state;
    const { battleResult } = this.props;
    const turnAttribute = this.convertToCardAttr(attr);
    const cpu = cpuCard || this.selectCpuCard(turnAttribute);
    const result = player[turnAttribute] > cpu[turnAttribute];
    this.setState({ turnResult: result });
    battleResult(result);
  };

  endTurn = () => this.setState({ chooseAttribute: false });

  render() {
    const {
      playerDeck, playerChoice,
      cpuChoice, turnResult, chooseAttribute,
    } = this.state;
    const { battleAttribute, turn, turnInProgress, attribute } = this.props;
    return (
      <main className="Game-Container">
        <Header />
        <section className="Game">
          <h2>
            {battleAttribute
              && turn % 2 === 0
              && `Atributo do turno: ${attribute}`}
          </h2>
          {chooseAttribute && attribute === '' && (
            <SetGameAttrs
              getTurnResult={ this.getTurnResult }
              selectCpuCard={ this.selectCpuCard }
            />
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
                <GameCard
                  key={ card.cardName }
                  card={ card }
                  selectCard={ this.selectCard }
                />
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
  battleResult: (result) => dispatch(startBattleAction(result)),
  resetGame: () => dispatch(resetGameAction()),
});

Game.propTypes = {
  battleAttribute: string.isRequired,
  startTurn: func.isRequired,
  resetGame: func.isRequired,
  battleResult: func.isRequired,
  attribute: string.isRequired,
  turn: number.isRequired,
  turnInProgress: bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
