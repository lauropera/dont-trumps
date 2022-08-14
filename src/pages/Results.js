import { func, number, shape } from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetGame } from '../redux/actions';
import '../styles/HomeAndResults.css';

class Results extends Component {
  handleClick = () => {
    const { history, reset } = this.props;
    reset();
    history.push('/game');
  }

  render() {
    const { wins, loses } = this.props;
    console.log(wins, loses);
    return (
      <main className="Results-Container">
        <h1>Resultados</h1>
        <div>
          <p>{`${wins === 1 ? 'Vitória' : 'Vitórias'}: ${wins}`}</p>
          <p>{`${loses === 1 ? 'Derrota' : 'Derrotas'}: ${loses}`}</p>
        </div>
        <button type="button" onClick={ this.handleClick }>Jogar novamente</button>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  wins: state.game.duelStatus.wins,
  loses: state.game.duelStatus.loses,
});

const mapDispatchToProps = (dispatch) => ({
  reset: () => dispatch(resetGame()),
});

Results.defaultProps = {
  wins: 0,
  loses: 0,
};

Results.propTypes = {
  wins: number,
  loses: number,
  reset: func.isRequired,
  history: shape({ push: func }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);
