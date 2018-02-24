import merge from 'lodash/merge';
import { RECEIVE_FEATURED_ARTISTS } from '../actions/artist_actions';

const featuredArtistReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FEATURED_ARTISTS:
      return merge({}, state, action.artists);
    default:
      return state;
  }
};

export default featuredArtistReducer;
