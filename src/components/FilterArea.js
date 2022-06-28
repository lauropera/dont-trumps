import React from 'react';
import PropTypes from 'prop-types';
import '../styles/FilterArea.css';

class FilterArea extends React.Component {
  render() {
    const { onInputChange, filterTrunfo } = this.props;
    return (
      <div className="filter-inputs">
        <label htmlFor="name">
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
        <label htmlFor="rare-filter">
          <select
            id="rare-filter"
            name="cardsByRarity"
            data-testid="rare-filter"
            disabled={ filterTrunfo }
            onChange={ onInputChange }
          >
            <option>todas</option>
            <option value="rarity-1">normal</option>
            <option value="rarity-2">raro</option>
            <option value="rarity-3">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-filter">
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
    );
  }
}

FilterArea.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  filterTrunfo: PropTypes.bool.isRequired,
};

export default FilterArea;
