import { bool, func, number, shape, string } from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { nextTurn as nextTurnAction } from '../redux/actions';
import CardMini from './CardMini';
import '../styles/Game.css';

class TurnResults extends Component {
  render() {
    const { result, nextTurn, turn, player, cpu } = this.props;
    const LAST_TURN = 6;
    return (
      <div
        style={ {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        } }
      >
        {result ? <h3>Você ganhou!</h3> : <h3>Você perdeu</h3>}
        <div style={ { display: 'flex', flexFlow: 'row-wrap' } }>
          <CardMini turnResult={ result } { ...player } />
          <CardMini turnResult={ !result } { ...cpu } />
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
  result: bool.isRequired,
  attribute: string.isRequired,
  nextTurn: func.isRequired,
  turn: number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TurnResults);
