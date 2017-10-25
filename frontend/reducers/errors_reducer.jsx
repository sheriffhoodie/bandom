import { combineReducers } from 'redux';
import session from './session_errors_reducer';

const ErrorsReducer = combineReducers({
  session
});

export default ErrorsReducer;
