import { combineReducers } from 'redux';
import session from './session_errors_reducer';
import album from './album_errors_reducer';

const ErrorsReducer = combineReducers({
  session,
  album
});

export default ErrorsReducer;
