import { CHECK_TRUNFO, INPUT_CHANGE, NEW_CARD, REMOVE_CARD } from '../actions';

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

export const checkTrunfo = (deck) => (
  deck.some(({ cardTrunfo }) => cardTrunfo)
);

export const getCards = () => (
  JSON.parse(localStorage.getItem('userCards')) || []);

const saveCards = (newCard) => {
  localStorage.setItem('userCards', JSON.stringify([...getCards(), newCard]));
};

const removeCard = (cards, toRemove) => (
  cards.filter(({ cardName }) => cardName !== toRemove.cardName));

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
    saveCards({ ...state.form });
    return {
      form: { ...INITIAL_STATE.form },
      hasTrunfo: state.form.cardTrunfo || checkTrunfo(cardCollection),
      cardCollection: [...cardCollection, { ...state.form }],
    };

  case REMOVE_CARD:
    localStorage.setItem('userCards', JSON.stringify(
      removeCard(getCards(), action.payload),
    ));
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

  case CHECK_TRUNFO:
    return {
      ...state,
      hasTrunfo: checkTrunfo(getCards()),
    };

  default:
    return state;
  }
}

export default customCard;
