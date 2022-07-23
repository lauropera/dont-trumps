import { FILTER_CHANGE } from '../actions';

const INITIAL_STATE = {
  cardsByName: '',
  cardsByRarity: 'todas',
  showTrunfoCard: false,
};

function filterArea(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FILTER_CHANGE:
    return state;
  default:
    return state;
  }
}

export default filterArea;
