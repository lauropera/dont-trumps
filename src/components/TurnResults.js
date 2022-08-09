import { func, number, shape, string } from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { nextTurn as nextTurnAction } from '../redux/actions';
import Card from './Card';
import '../styles/Game.css';

class TurnResults extends Component {
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

  getResult = () => {
    const { player, cpu, attribute } = this.props;
    const turnAttribute = this.convertToCardAttr(attribute);
    const playerPoints = player[turnAttribute];
    const opponentPoints = cpu[turnAttribute];
    return playerPoints > opponentPoints;
  };

  render() {
    const { player, cpu, nextTurn, turn } = this.props;
    const LAST_TURN = 6;
    return (
      <div
        style={ {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        } }
      >
        {this.getResult() ? <h3>Você ganhou!</h3> : <h3>Você perdeu</h3>}
        <div style={ { display: 'flex', flexFlow: 'row-wrap' } }>
          <Card { ...player } />
          <Card { ...cpu } />
        </div>
        {turn === LAST_TURN ? (
          <Link to="/results">Ver resultados</Link>
        ) : (
          <button
            type="button"
            onClick={ nextTurn }
            style={ { padding: '4px', margin: '8px' } }
          >
            Próxima rodada
          </button>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  turn: state.game.turn,
  attribute: state.game.attribute,
});

const mapDispatchToProps = (dispatch) => ({
  nextTurn: () => dispatch(nextTurnAction()),
});

TurnResults.propTypes = {
  player: shape({}).isRequired,
  cpu: shape({}).isRequired,
  attribute: string.isRequired,
  nextTurn: func.isRequired,
  turn: number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TurnResults);
