import { INPUT_CHANGE, NEW_CARD, REMOVE_CARD } from '../actions';

const INITIAL_STATE = {
  form: {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
  },
  hasTrunfo: false,
  cardCollection: [],
};

function customCard(state = INITIAL_STATE, action) {
  switch (action.type) {
  case INPUT_CHANGE:
    return {
      ...state,
      form: {
        ...state.form,
        ...action.payload,
      },
    };

  case NEW_CARD:
    return {
      form: { ...INITIAL_STATE.form },
      hasTrunfo:
          state.form.cardTrunfo
          || state.cardCollection.some(({ cardTrunfo }) => cardTrunfo),
      cardCollection: [...state.cardCollection, { ...state.form }],
    };

  case REMOVE_CARD:
    return {
      ...state,
      cardCollection: state.cardCollection
        .filter(({ cardName }) => cardName !== action.payload),
      hasTrunfo: state.cardCollection
        .some(({ cardTrunfo }) => cardTrunfo),
    };

  default:
    return state;
  }
}

export default customCard;
