import { number } from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Results extends Component {
  render() {
    const { wins, loses } = this.props;
    return (
      <main>
        <h1>Resultados</h1>
        <div>
          <p>{`${wins === 1 ? 'Vitória' : 'Vitórias'}: ${wins}`}</p>
          <p>{`${loses === 1 ? 'Derrota' : 'Derrotas'}: ${loses}`}</p>
        </div>
        <Link to="/game">Jogar novamente</Link>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  wins: state.game.duelStatus.wins,
  loses: state.game.duelStatus.loses,
});

Results.defaultProps = {
  wins: 0,
  loses: 0,
};

Results.propTypes = {
  wins: number,
  loses: number,
};

export default connect(mapStateToProps)(Results);
