import { RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const UserReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      return merge({}, {user: action.payload});
    default:
      return state;
  }
};

export default UserReducer;
