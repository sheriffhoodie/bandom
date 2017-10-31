import { combineReducers } from 'redux';
import errors from './errors_reducer';
// import modals from './modals_reducer';
import entities from './entities_reducer';

const RootReducer = combineReducers({
  entities,
  errors
});

export default RootReducer;
