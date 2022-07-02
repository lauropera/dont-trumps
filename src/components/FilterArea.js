import React from 'react';
import PropTypes from 'prop-types';
import '../styles/FilterArea.css';

class FilterArea extends React.Component {
  render() {
    const { onInputChange, filterTrunfo } = this.props;
    return (
      <section className="filter-area">
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
      </section>
    );
  }
}

FilterArea.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  filterTrunfo: PropTypes.bool.isRequired,
};

export default FilterArea;
