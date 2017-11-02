import * as TrackAPIUtil from '../util/track_api_util';

export const RECEIVE_ALL_TRACKS = "RECEIVE_ALL_TRACKS";
export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const REMOVE_TRACKS = "REMOVE_TRACKS";

export const fetchAllTracks = () => dispatch => {
  TrackAPIUtil.fetchAllTracks().then(
    tracks => dispatch(receiveAllTracks)
  );
};

export const createTrack = (track, album_id) => dispatch => {
  TrackAPIUtil.createTrack(track, album_id).then(
    track => dispatch(receiveTrack(track))
  );
};

export const receiveAllTracks = tracks => {
  return {
    type: RECEIVE_ALL_TRACKS,
    tracks
  };
};

export const receiveTrack = track => {
  return {
    type: RECEIVE_TRACK,
    track
  };
};

export const removeTracks = () => {
  return {
    type: REMOVE_TRACKS,
    tracks: {}
  };
};
