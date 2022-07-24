import { combineReducers } from 'redux';
import customCard from './customCard';
import filterArea from './filterArea';

const rootReducer = combineReducers({
  customCard,
  filterArea,
});

export default rootReducer;
