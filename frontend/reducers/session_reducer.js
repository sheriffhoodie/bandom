import merge from 'lodash/merge';
import {
  RECEIVE_CURRENT_USER,
  LOGIN_USER_FAIL
} from '../actions/session_actions';

let INITIAL_STATE = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = INITIAL_STATE, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, { currentUser });
    default:
      return state;
  }
};

export default SessionReducer;
