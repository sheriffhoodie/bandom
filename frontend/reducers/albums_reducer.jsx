import { RECEIVE_ALBUMS, RECEIVE_ALBUM, REMOVE_ALBUM } from '../actions/album_actions';
// import { RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const initialState = {};

const AlbumsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALBUMS:
      return action.albums;
    case RECEIVE_ALBUM:
      return merge({}, state, {[action.album.id]: action.album});
    case REMOVE_ALBUM:
      newState = merge({}, state);
      delete newState[action.albumId];
      return newState;
    default:
      return state;
  }
};

export default AlbumsReducer;
