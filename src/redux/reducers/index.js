import { combineReducers } from 'redux';
import customCard from './customCard';
import filterArea from './filterArea';
import game from './game';

const rootReducer = combineReducers({
  customCard,
  filterArea,
  game,
});

export default rootReducer;
