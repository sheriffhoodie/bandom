import { combineReducers } from 'redux';
import albums from './albums_reducer';

const EntitiesReducer = combineReducers({
  albums
});

export default EntitiesReducer;
