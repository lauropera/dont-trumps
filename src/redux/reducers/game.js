import { BATTLE_TYPE, SAVE_CARDS, START_TURN, NEXT_TURN } from '../actions';

const INITIAL_STATE = {
  turn: 1,
  attribute: '',
  turnInProgress: false,
};

const randomAttr = () => {
  const ATTRIBUTES = ['Ataque', 'Defesa', 'Inteligência'];
  return ATTRIBUTES[Math.floor(Math.random() * ATTRIBUTES.length)];
};

function game(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVE_CARDS:
    return {
      ...state,
      deck: action.payload,
    };
  case BATTLE_TYPE:
    return {
      ...state,
      attribute: action.payload,
    };
  case START_TURN:
    return {
      ...state,
      turnInProgress: true,
    };
  case NEXT_TURN:
    return {
      ...state,
      attribute: (state.turn + 1) % 2 === 0 ? randomAttr() : '',
      turnInProgress: false,
      turn: state.turn + 1,
    };
  default:
    return {
      ...state,
    };
  }
}

export default game;
