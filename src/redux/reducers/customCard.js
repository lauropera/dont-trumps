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

const removeCard = (cards, toRemove) => (
  cards.filter((card) => card !== toRemove)
);

function customCard(state = INITIAL_STATE, action) {
  const { cardCollection } = state;
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
          || cardCollection.some(({ cardTrunfo }) => cardTrunfo),
      cardCollection: [...cardCollection, { ...state.form }],
    };

  case REMOVE_CARD:
    if (action.payload.cardTrunfo) {
      return {
        ...state,
        hasTrunfo: false,
        cardCollection: removeCard(cardCollection, action.payload),
      };
    }
    return {
      ...state,
      cardCollection: removeCard(cardCollection, action.payload),
    };

  default:
    return state;
  }
}

export default customCard;
