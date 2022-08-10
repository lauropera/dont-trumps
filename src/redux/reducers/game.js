import {
  BATTLE_TYPE,
  SAVE_CARDS,
  START_TURN,
  NEXT_TURN,
  BATTLE,
  RESET_GAME,
} from '../actions';

const INITIAL_STATE = {
  turn: 1,
  attribute: '',
  turnInProgress: false,
  duelStatus: {
    wins: 0,
    loses: 0,
  },
};

const randomAttr = () => {
  const ATTRIBUTES = ['Ataque', 'Defesa', 'Inteligência'];
  return ATTRIBUTES[Math.floor(Math.random() * ATTRIBUTES.length)];
};

function game(state = INITIAL_STATE, action) {
  const {
    duelStatus: { wins, loses },
  } = state;
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
  case BATTLE:
    return {
      ...state,
      duelStatus: {
        wins: action.payload ? wins + 1 : wins,
        loses: !action.payload ? loses + 1 : loses,
      },
    };
  case NEXT_TURN:
    return {
      ...state,
      attribute: (state.turn + 1) % 2 === 0 ? randomAttr() : '',
      turnInProgress: false,
      turn: state.turn + 1,
    };
  case RESET_GAME:
    return { ...INITIAL_STATE };
  default:
    return {
      ...state,
    };
  }
}

export default game;
