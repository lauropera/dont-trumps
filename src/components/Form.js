import React, { useEffect } from 'react';
import { bool, func, string } from 'prop-types';
import { FaLink } from 'react-icons/fa';
import { connect } from 'react-redux';
import { checkIfHasTrunfo, inputChangeAction, newCardAction } from '../redux/actions';
import '../styles/Form.css';

function Form(props) {
  useEffect(() => {
    const { checkTrunfo } = props;
    checkTrunfo();
  }, []);

  function remainingAttr() {
    const { cardAttr1, cardAttr2, cardAttr3 } = props;
    const maxPoints = 200;
    return maxPoints - cardAttr1 - cardAttr2 - cardAttr3;
  }

  function validateCard() {
    const {
      cardName, cardDescription, cardImage,
      cardAttr1, cardAttr2, cardAttr3,
    } = props;
    const minValue = 0;
    const maxValue = 90;
    const maxSum = 210;
    const conditions = [
      cardName.length > minValue,
      cardDescription.length > minValue,
      cardImage.length > minValue,
      cardAttr1 >= minValue && cardAttr1 <= maxValue,
      cardAttr2 >= minValue && cardAttr2 <= maxValue,
      cardAttr3 >= minValue && cardAttr3 <= maxValue,
      Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= maxSum,
    ];
    return !conditions.every((con) => con);
  }

  function handleSubmit(e) {
    const { newCard } = props;
    e.preventDefault();
    e.target.reset();
    newCard();
  }

  const {
    cardName, cardDescription, cardAttr1, cardAttr2,
    cardAttr3, cardImage, cardRare, cardTrunfo,
    hasTrunfo, onInputChange,
  } = props;
  return (
    <form
      className="newCard-form"
      onSubmit={ handleSubmit }
    >
      <div>
        <label htmlFor="name-input" className="input-area name-area">
          Nome
          <input
            type="text"
            data-testid="name-input"
            id="name-input"
            name="cardName"
            maxLength="32"
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
            maxLength="150"
            placeholder="Descrição da carta"
            value={ cardDescription }
            onChange={ onInputChange }
            className="info-area"
          />
        </label>
      </div>
      <div className="attr-container">
        <label htmlFor="attr1-area">
          Ataque
          <input
            type="number"
            data-testid="attr1-input"
            id="attr1-area"
            name="cardAttr1"
            min="0"
            max="90"
            value={ cardAttr1 }
            onChange={ onInputChange }
            className="attr"
          />
        </label>
        <label htmlFor="attr2-area">
          Inteligência
          <input
            type="number"
            data-testid="attr2-input"
            id="attr2-area"
            name="cardAttr2"
            min="0"
            max="90"
            value={ cardAttr2 }
            onChange={ onInputChange }
            className="attr"
          />
        </label>
        <label htmlFor="attr3-area">
          Defesa
          <input
            type="number"
            data-testid="attr3-input"
            id="attr3-area"
            name="cardAttr3"
            min="0"
            max="90"
            value={ cardAttr3 }
            onChange={ onInputChange }
            className="attr"
          />
        </label>
      </div>
      <p className="attr-limit">
        Restantes
        {' '}
        <span>{remainingAttr()}</span>
      </p>
      <div>
        <label htmlFor="image-input" className="input-area img-area">
          Imagem
          <FaLink className="link-icon" />
          <input
            type="text"
            data-testid="image-input"
            id="image-input"
            name="cardImage"
            placeholder="URL da imagem"
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
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
      </label>
      <div className="trunfocard-area">
        {hasTrunfo ? (
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
          </label>
        )}
      </div>
      <button
        type="submit"
        data-testid="save-button"
        id="save-button"
        name="isSaveButtonDisabled"
        className="savecard-btn"
        disabled={ validateCard() }
      >
        Salvar
      </button>
    </form>
  );
}

const mapStateToProps = (state) => ({
  ...state.customCard.form,
  hasTrunfo: state.customCard.hasTrunfo,
});

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (e) => dispatch(inputChangeAction(e)),
  newCard: () => dispatch(newCardAction()),
  checkTrunfo: () => dispatch(checkIfHasTrunfo()),
});

Form.defaultProps = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: 'normal',
  cardTrunfo: false,
};

Form.propTypes = {
  cardName: string,
  cardDescription: string,
  cardAttr1: string,
  cardAttr2: string,
  cardAttr3: string,
  cardImage: string,
  cardRare: string,
  cardTrunfo: bool,
  hasTrunfo: bool.isRequired,
  onInputChange: func.isRequired,
  newCard: func.isRequired,
  checkTrunfo: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
