import * as ArtistAPIUtil from '../util/artist_api_util';

export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";
export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
export const RECEIVE_FEATURED_ARTISTS = "RECEIVE_FEATURED_ARTISTS";

export const fetchArtist = artistId => dispatch => {
  return ArtistAPIUtil.fetchArtist(artistId)
  .then(artist => dispatch(receiveArtist(artist)));
};

export const fetchArtists = () => dispatch => {
  return ArtistAPIUtil.fetchArtists()
  .then(artists => dispatch(receiveArtists(artists)));
};

export const updateArtist = (data, id) => dispatch => (
  ArtistAPIUtil.updateArtist(data, id).then(artist => {
    dispatch(receiveArtist(artist));
    return artist;
  })
);

export const fetchFeaturedArtists = () => dispatch => {
  return ArtistAPIUtil.fetchFeaturedArtists().then(artists => (
    dispatch(receiveFeaturedArtists(artists))
  ));
};

export const receiveArtists = artists => ({
  type: RECEIVE_ARTISTS,
  artists
});

export const receiveArtist = artist => ({
  type: RECEIVE_ARTIST,
  artist
});

export const receiveFeaturedArtists = artists => ({
  type: RECEIVE_FEATURED_ARTISTS,
  artists
});
