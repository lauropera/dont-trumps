import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Form.css';

class Form extends React.Component {
  render() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, isSaveButtonDisabled,
      hasTrunfo, onInputChange, onSaveButtonClick,
    } = this.props;
    return (
      <form className="newCard-form">
        <div>
          <label htmlFor="name-input" className="input-area">
            Nome
            <input
              type="text"
              data-testid="name-input"
              id="name-input"
              name="cardName"
              maxLength="24"
              value={ cardName }
              onChange={ onInputChange }
              placeholder="Nome da carta"
              className="info-area"
            />
          </label>
        </div>
        <div>
          <label htmlFor="description-input" className="description-area">
            Descrição
            <textarea
              data-testid="description-input"
              id="description-input"
              name="cardDescription"
              maxLength="160"
              placeholder="Descrição da carta"
              value={ cardDescription }
              onChange={ onInputChange }
              className="info-area"
            />
          </label>
        </div>
        <div className="attr-container">
          <label htmlFor="attr1-input">
            Ataque
            <input
              type="number"
              data-testid="attr1-input"
              id="attr1-input"
              name="cardAttr1"
              min="0"
              max="90"
              value={ cardAttr1 }
              onChange={ onInputChange }
              className="info-area attr"
            />
          </label>
          <label htmlFor="attr2-input">
            Inteligência
            <input
              type="number"
              data-testid="attr2-input"
              id="attr2-input"
              name="cardAttr2"
              min="0"
              max="90"
              value={ cardAttr2 }
              onChange={ onInputChange }
              className="info-area attr"
            />
          </label>
          <label htmlFor="attr3-input">
            Defesa
            <input
              type="number"
              data-testid="attr3-input"
              id="attr3-input"
              name="cardAttr3"
              min="0"
              max="90"
              value={ cardAttr3 }
              onChange={ onInputChange }
              className="info-area attr"
            />
          </label>
        </div>
        <div>
          <label htmlFor="image-input" className="input-area">
            Imagem
            <input
              type="text"
              data-testid="image-input"
              id="image-input"
              name="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
              className="info-area"
            />
          </label>
        </div>
        <label htmlFor="rare-input" className="input-area rarity-area">
          Raridade
          {' '}
          <select
            data-testid="rare-input"
            id="rare-input"
            name="cardRare"
            className="rare-input info-area"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="rarity-1">normal</option>
            <option value="rarity-2">raro</option>
            <option value="rarity-3">muito raro</option>
          </select>
        </label>
        {/* CORRIGIR -> QUANDO APAGO UMA CARTA SUPERTRUNFO PRECISA REATIVAR A CHECKBOX */}
        <div className="trunfocard-area">
          { hasTrunfo ? (
            <p>Você já tem um Super Trunfo em seu baralho</p>
          ) : (
            <label htmlFor="trunfo-input" className="trunfo-input">
              <input
                type="checkbox"
                data-testid="trunfo-input"
                id="trunfo-input"
                name="cardTrunfo"
                className="trunfo-input"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
              {' '}
              Super Trybe Trunfo
            </label>)}
        </div>
        <button
          type="button"
          data-testid="save-button"
          id="save-button"
          name="isSaveButtonDisabled"
          className="savecard-btn"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
