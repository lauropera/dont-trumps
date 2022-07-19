import { bool, func } from 'prop-types';
import React, { Component } from 'react';
import Card from '../components/Card';
import Form from '../components/Form';

const INITIAL_STATE = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: 'normal',
  cardTrunfo: false,
  isSaveButtonDisabled: true,
};

class NewCardForm extends Component {
  constructor() {
    super();
    this.state = { ...INITIAL_STATE };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => this.validateCard());
  }

  resetState = () => {
    this.setState({ ...INITIAL_STATE });
  };

  validateCard = () => {
    const {
      cardName, cardDescription, cardImage,
      cardAttr1, cardAttr2, cardAttr3,
    } = this.state;
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
    this.setState({ isSaveButtonDisabled: !conditions.every((con) => con) });
  }

  render() {
    const { hasTrunfo, handleSubmit } = this.props;
    return (
      <section className="new-card-area">
        <h2>Criar carta</h2>
        <div className="form-new-card">
          <Form
            { ...this.state }
            hasTrunfo={ hasTrunfo }
            onInputChange={ this.onInputChange }
            handleSubmit={ handleSubmit }
            resetState={ this.resetState }
          />
          <Card { ...this.state } />
        </div>
      </section>
    );
  }
}

NewCardForm.defaultProps = {
  hasTrunfo: false,
};

NewCardForm.propTypes = {
  hasTrunfo: bool,
  handleSubmit: func.isRequired,
};

export default NewCardForm;
