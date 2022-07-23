export const NEW_CARD = 'NEW_CARD';
export const INPUT_CHANGE = 'INPUT_CHANGE';
export const FILTER_CHANGE = 'FILTER_CHANGE';
export const REMOVE_CARD = 'REMOVE_CARD';

export const inputChangeAction = (value) => ({
  type: INPUT_CHANGE,
  payload: value,
});

export const newCardAction = () => ({ type: NEW_CARD });

export const removeCardAction = (card) => ({
  type: REMOVE_CARD,
  payload: card,
});
