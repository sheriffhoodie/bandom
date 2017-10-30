import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import modals from './modals_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  modals
});

export default RootReducer;
