import { bool, func, number, shape, string } from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { nextTurn as nextTurnAction } from '../redux/actions';
import CardMini from './CardMini';

import '../styles/Game.css';
import '../styles/CardBigPreview.css';

class TurnResults extends Component {
  endGameTurn = () => {
    const { endTurn, nextTurn } = this.props;
    endTurn();
    nextTurn();
  };

  render() {
    const { result, turn, player, cpu, attribute } = this.props;
    const LAST_TURN = 6;
    return (
      <div className="Turn-Results-Container">
        {turn % 2 !== 0 && <h2>{`Atributo do turno: ${attribute}`}</h2>}
        {result ? <h3>Você ganhou!</h3> : <h3>Você perdeu</h3>}
        <div className="Turn-Result">
          <CardMini turnResult={ result } preview="big" { ...player } />
          <CardMini turnResult={ !result } preview="big" { ...cpu } />
        </div>
        {turn === LAST_TURN ? (
          <Link to="/results">Ver resultados</Link>
        ) : (
          <button
            type="button"
            onClick={ this.endGameTurn }
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
  endTurn: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TurnResults);
