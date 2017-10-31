import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ALBUM_ERRORS } from '../actions/album_actions';
import merge from 'lodash/merge';

const AlbumErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALBUM_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
};

export default AlbumErrorsReducer;
