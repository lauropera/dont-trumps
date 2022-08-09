import { func, number, string } from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setBattleAttr } from '../redux/actions';

class SetGameAttrs extends Component {
  handleClick = ({ target }) => {
    const { battleType } = this.props;
    battleType(target.name);
  };

  render() {
    const { turn, attribute } = this.props;
    return (
      <div
        className={ `${
          attribute.length === 0 && turn % 2 !== 0 ? 'Select-Attr' : 'Hide'
        } Game-Attr` }
      >
        <p>Seu turno!</p>
        <button type="button" name="Ataque" onClick={ this.handleClick }>
          Ataque
        </button>
        <button type="button" name="Defesa" onClick={ this.handleClick }>
          Defesa
        </button>
        <button type="button" name="Inteligência" onClick={ this.handleClick }>
          Inteligência
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  turn: state.game.turn,
  attribute: state.game.attribute,
});

const mapDispatchToProps = (dispatch) => ({
  battleType: (type) => dispatch(setBattleAttr(type)),
});

SetGameAttrs.propTypes = {
  turn: number.isRequired,
  battleType: func.isRequired,
  attribute: string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SetGameAttrs);
