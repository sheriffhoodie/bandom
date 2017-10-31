import { combineReducers } from 'redux';
import albums from './albums_reducer';
import session from './session_reducer';

const EntitiesReducer = combineReducers({
  albums,
  session
});

export default EntitiesReducer;
