import * as APIUtil from '../util/album_api_util';

export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const REMOVE_ALBUM = "REMOVE_ALBUM";
export const RECEIVE_ALBUM_ERRORS = "RECEIVE_ALBUM_ERRORS";

export const fetchAlbums = () => dispatch => (
  APIUtil.fetchAlbums().then(albums => (
    dispatch(receiveAlbums(albums))
  ))
);

export const fetchAlbum = id => {
  return dispatch => {
    return APIUtil.fetchAlbum(id).
      then((album) => dispatch(receiveAlbum(id))
    );
  };
};

export const createAlbum = data => dispatch => (
  APIUtil.createAlbum(data).then(album => {
    dispatch(receiveAlbum(album));
    return album;
  }).fail(err => dispatch(receiveAlbumErrors(err.responseJSON)))
);

export const deleteAlbum = id => dispatch => (
  APIUtil.deleteAlbum(id).then(album => (
    dispatch(removeAlbum(id))
  ))
);

export const updateAlbum = data => dispatch => (
  APIUtil.updateAlbum(data).then(album => {
    dispatch(receiveAlbum(album));
    return album;
  }).fail(err => dispatch(receiveAlbumErrors(err.responseJSON)))
);

export const receiveAlbums = albums => ({
  type: RECEIVE_ALBUMS,
  albums
});

export const receiveAlbum = album => {
   return {
    type: RECEIVE_ALBUM,
    album
  };
};

export const removeAlbum = albumId => ({
  type: REMOVE_ALBUM,
  albumId
});

export const receiveAlbumErrors = errors => ({
  type: RECEIVE_ALBUM_ERRORS,
  errors
});
