import { RECEIVE_TRACK, RECEIVE_ALL_TRACKS, REMOVE_TRACKS } from '../actions/track_actions';
import merge from 'lodash/merge';

const TrackReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_TRACKS:
      return merge({}, action.payload);
    case RECEIVE_TRACK:
      return merge({}, state, action.payload);
    case REMOVE_TRACKS:
      return merge({}, {tracks: {} });
    default:
      return state;
  }
};

export default TrackReducer;
