import React from 'react';
import { bool, func } from 'prop-types';
import '../styles/FilterArea.css';
import { connect } from 'react-redux';
import { filterCardsAction } from '../redux/actions';

function FilterArea(props) {
  const { onInputChange, filterTrunfo } = props;
  return (
    <section className="card-filter-area">
      <div className="filter-area">
        <label htmlFor="name" className="filter-name">
          <input
            id="name"
            name="cardsByName"
            type="text"
            data-testid="name-filter"
            onChange={ onInputChange }
            disabled={ filterTrunfo }
            placeholder="Nome da carta"
          />
        </label>
        <label htmlFor="rare-filter" className="filter-rare">
          <select
            id="rare-filter"
            name="cardsByRarity"
            data-testid="rare-filter"
            disabled={ filterTrunfo }
            onChange={ onInputChange }
          >
            <option>todas</option>
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-filter" className="trunfo-filter">
          <input
            id="trunfo-filter"
            name="showTrunfoCard"
            type="checkbox"
            data-testid="trunfo-filter"
            onChange={ onInputChange }
          />
          {' '}
          Super Trybe Trunfo
        </label>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => ({
  filterTrunfo: state.filterArea.showTrunfoCard,
});

const mapDispatchToProps = (dispatch) => ({
  onInputChange: ({ target: { type, name, checked }, target }) => {
    const value = type === 'checkbox' ? checked : target.value;
    dispatch(filterCardsAction({ [name]: value }));
  },
});

FilterArea.propTypes = {
  onInputChange: func.isRequired,
  filterTrunfo: bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterArea);
