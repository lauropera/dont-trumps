import { bool, shape, string } from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card';
import Form from '../components/Form';

function NewCardForm(props) {
  const { form } = props;
  return (
    <section className="new-card-area">
      <h2>Criar carta</h2>
      <div className="form-new-card">
        <Form />
        <Card { ...form } />
      </div>
    </section>
  );
}

const mapStateToProps = (state) => ({ form: state.customCard.form });

NewCardForm.defaultProps = {
  form: {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
};

NewCardForm.propTypes = {
  form: shape({
    cardName: string,
    cardDescription: string,
    cardAttr1: string,
    cardAttr2: string,
    cardAttr3: string,
    cardImage: string,
    cardRare: string,
    cardTrunfo: bool,
  }),
};

export default connect(mapStateToProps)(NewCardForm);
