export const fetchArtists = () => {
  return $.ajax({
    method: 'get',
    url: 'api/users'
  });
};

export const fetchArtist = artistId => {
  return $.ajax({
    method: 'get',
    url: `api/users/${artistId}`
  });
};
