import { func, number, string } from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setBattleAttr, startTurn as startTurnAction } from '../redux/actions';
import '../styles/Game.css';

import atkIcon from '../data/card-images/items/atk_points_icon.png';
import defIcon from '../data/card-images/items/def_points_icon.png';
import intIcon from '../data/card-images/items/int_points_icon.png';

class SetGameAttrs extends Component {
  handleClick = ({ target }) => {
    const { battleType, startTurn, getTurnResult, selectCpuCard } = this.props;
    startTurn();
    battleType(target.name);
    const cpuCard = selectCpuCard(target.name);
    getTurnResult(target.name, cpuCard);
  };

  render() {
    const { turn, attribute } = this.props;
    return (
      <div
        className={ `${
          attribute.length === 0 && turn % 2 !== 0 ? 'Select-Attr' : 'Hide'
        } Game-Attr` }
      >
        <h3>Seu turno!</h3>
        <div className="Attr-Buttons-Container">
          <div className="Attr-Button">
            <img src={ atkIcon } alt="Icone de lança" />
            <button type="button" name="Ataque" onClick={ this.handleClick }>
              Ataque
            </button>
          </div>
          <div className="Attr-Button">
            <img src={ intIcon } alt="Icone de Livro" />
            <button type="button" name="Inteligência" onClick={ this.handleClick }>
              Inteligência
            </button>
          </div>
          <div className="Attr-Button">
            <img src={ defIcon } alt="Icone de Armadura" />
            <button type="button" name="Defesa" onClick={ this.handleClick }>
              Defesa
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  turn: state.game.turn,
  attribute: state.game.attribute,
});

const mapDispatchToProps = (dispatch) => ({
  startTurn: () => dispatch(startTurnAction()),
  battleType: (type) => dispatch(setBattleAttr(type)),
});

SetGameAttrs.propTypes = {
  turn: number.isRequired,
  battleType: func.isRequired,
  startTurn: func.isRequired,
  getTurnResult: func.isRequired,
  selectCpuCard: func.isRequired,
  attribute: string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SetGameAttrs);
