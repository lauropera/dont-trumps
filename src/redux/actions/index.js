export const NEW_CARD = 'NEW_CARD';
export const INPUT_CHANGE = 'INPUT_CHANGE';
export const FILTER_CHANGE = 'FILTER_CHANGE';
export const REMOVE_CARD = 'REMOVE_CARD';

export const inputChangeAction = ({ target }) => {
  const { name, type, checked } = target;
  const value = type === 'checkbox' ? checked : target.value;
  return {
    type: INPUT_CHANGE,
    payload: { [name]: value },
  };
};

export const newCardAction = () => ({ type: NEW_CARD });

export const removeCardAction = (card) => ({
  type: REMOVE_CARD,
  payload: card,
});

export const filterCardsAction = (value) => ({
  type: FILTER_CHANGE,
  payload: value,
});
