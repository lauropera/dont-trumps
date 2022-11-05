export const NEW_CARD = 'NEW_CARD';
export const CHECK_TRUNFO = 'CHECK_TRUNFO';
export const INPUT_CHANGE = 'INPUT_CHANGE';
export const FILTER_CHANGE = 'FILTER_CHANGE';
export const REMOVE_CARD = 'REMOVE_CARD';
export const SAVE_CARDS = 'SAVE_CARDS';
export const BATTLE_TYPE = 'BATTLE_TYPE';
export const START_TURN = 'START_TURN';
export const BATTLE = 'BATTLE';
export const NEXT_TURN = 'RESET_TYPE';
export const RESET_GAME = 'RESET_GAME';

export const inputChangeAction = ({ target }) => {
  const { name, type, checked } = target;
  const value = type === 'checkbox' ? checked : target.value;
  return {
    type: INPUT_CHANGE,
    payload: { [name]: value },
  };
};

export const newCardAction = () => ({ type: NEW_CARD });

export const checkIfHasTrunfo = () => ({ type: CHECK_TRUNFO });

export const removeCardAction = (payload) => ({
  type: REMOVE_CARD,
  payload,
});

export const filterCardsAction = (payload) => ({
  type: FILTER_CHANGE,
  payload,
});

export const saveCards = (payload) => ({
  type: SAVE_CARDS,
  payload,
});

export const setBattleAttr = (payload) => ({
  type: BATTLE_TYPE,
  payload,
});

export const startTurn = () => ({ type: START_TURN });

export const nextTurn = () => ({ type: NEXT_TURN });

export const startBattle = (payload) => ({
  type: BATTLE,
  payload,
});

export const resetGame = () => ({ type: RESET_GAME });
